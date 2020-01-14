package com.DM.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.DM.demo.Util.GameEnds;
import com.DM.demo.Util.GameNotFoundException;
import com.DM.demo.Util.PlayerNotFoundException;
import com.DM.demo.persistence.entities.Game;
import com.DM.demo.persistence.entities.Player;
import com.DM.demo.persistence.repo.PlayerRepo;

@Service
public class PlayerService {

	private PlayerRepo repo;

	private GameService gameService;

	public PlayerService(PlayerRepo repo, GameService gameService) {
		this.repo = repo;
		this.gameService = gameService;
	}

	public Player createPlayer(Player player) {
		return this.repo.saveAndFlush(player);
	}

	public boolean deletePlayer(Long playerId) {
		if (!this.repo.existsById(playerId)) {
			throw new PlayerNotFoundException();
		}
		this.repo.deleteById(playerId);
		return this.repo.existsById(playerId);
	}

	public Player findPlayerById(Long playerId) {
		return this.repo.findById(playerId).orElseThrow(() -> new PlayerNotFoundException());
	}

	public List<Player> readPlayer() {
		return this.repo.findAll();
	}

	public Player updatePlayer(Player player) {
		return this.repo.save(player);
	}

	public int getPoints(Long id) {
		return this.repo.findById(id).orElseThrow(PlayerNotFoundException::new).getGames().stream()
				.map(game -> game.getResult()).map(result -> result.getPoints()).reduce((acc, next) -> acc + next).orElse(0);
	}
	
	public long getWins(long id) {
		return this.repo.findById(id).orElseThrow(PlayerNotFoundException::new).getGames().stream()
				.map(game -> game.getResult()).filter(i -> i == GameEnds.WIN).count();
	}
	
	public long getDraws(long id) {
		return this.repo.findById(id).orElseThrow(PlayerNotFoundException::new).getGames().stream()
				.map(game -> game.getResult()).filter(i -> i == GameEnds.DRAW).count();
	}

	
	public long getLost(long id) {
		return this.repo.findById(id).orElseThrow(PlayerNotFoundException::new).getGames().stream()
				.map(game -> game.getResult()).filter(i -> i== GameEnds.LOSS).count();
		}
	public Player addGame(Game game, Long id) {
		Player player = this.repo.findById(id).orElseThrow(GameNotFoundException::new);
		player.getGames().add(gameService.createGame(game));
		return this.repo.saveAndFlush(player);
	}

}
