package com.DM.test.service;

import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;

import com.DM.demo.Util.GameEnds;
import com.DM.demo.persistence.entities.Game;
import com.DM.demo.persistence.entities.Player;
import com.DM.demo.persistence.repo.GameRepo;
import com.DM.demo.persistence.repo.PlayerRepo;
import com.DM.demo.service.PlayerService;



@RunWith(SpringRunner.class)
public class PlayerServiceUnitTests {

	
	@InjectMocks
	private PlayerService service;
	
	@Mock
	private PlayerRepo prepo;
	private GameRepo grepo;
	private List<Player> playerList;
	private Set<Game> gameSet;
	private Player testPlayer;
	private Player testPlayerWithId;
	private Player testPlayerWithGame;
	private Game testGame;
	final Long playerId = 1L;
	
	
	@Before
	public void init() {
	this.playerList = new ArrayList<>();
	this.gameSet = new HashSet<>();
	this.testPlayer = new Player("Big Phil");
	this.testGame = new Game(2L,20L,GameEnds.DRAW);
	playerList.add(testPlayer);
	gameSet.add(testGame);
	this.testPlayerWithId = new Player(testPlayer.getPlayerName());
	testPlayerWithId.setPlayerId(playerId);
	this.testPlayerWithGame = new Player(testPlayer.getPlayerName());
	testPlayerWithGame.setPlayerId(playerId);
	testPlayerWithGame.setGames(gameSet);
	
	
	}
	@Test
	public void createPlayertest() {
		when(this.prepo.saveAndFlush(testPlayer)).thenReturn(this.testPlayerWithId);
		assertEquals(this.testPlayerWithId,this.service.createPlayer(testPlayer));
		verify(this.prepo, times(1)).saveAndFlush(testPlayer);
	}
	
	@Test
	public void deletePlayerTest() {
		when(this.prepo.existsById(playerId)).thenReturn(true, false);
		this.service.deletePlayer(playerId);
		verify(this.prepo, times(1)).deleteById(playerId);
		verify(this.prepo, times(2)).existsById(playerId);
	}
	
	@Test
	public void updatePlayerTest() {
		Player newpdata = new Player("Tiny Tim");
		Player updatedPlayer = new Player(newpdata.getPlayerName());
		when(this.prepo.save(newpdata)).thenReturn(updatedPlayer);
		assertEquals(updatedPlayer, this.service.updatePlayer(newpdata));
		verify(this.prepo, times(1)).save(newpdata);	
	}

	
}
