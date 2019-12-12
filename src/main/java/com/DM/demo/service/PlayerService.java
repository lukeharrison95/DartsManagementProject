package com.DM.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DM.demo.Util.PlayerNotFoundException;
import com.DM.demo.persistence.entities.Player;
import com.DM.demo.persistence.repo.PlayerRepo;

@Service
public class PlayerService {
	

	private PlayerRepo repo;
	
	@Autowired
	PlayerService(PlayerRepo repo){
		this.repo = repo;
	}
	
	public Player createPlayer(Player player) {
		return this.repo.save(player);
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
	
	public List<Player> readPlayer(){
		return this.repo.findAll();
	}
	

	
	public Player updatePlayer(Player player) {
		return this.repo.save(player);
	}

}
