package com.DM.test.rest;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertEquals;
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
import com.DM.demo.rest.PlayerController;
import com.DM.demo.service.PlayerService;



@RunWith(SpringRunner.class)
public class PlayerControllerTest {
	
	@InjectMocks
	private PlayerController pcontroller;
	
	@Mock
	private PlayerService pservice;
	private List<Player> plist;
	private List<Game> gameSet;
	private Player testPlayer;
	private Game testGame;
	private Player testPlayerWithId;
	//private Game testGameWithId;
	final Long playerId=1L;
	final Long gameId=2L;
	private Player testPlayerWithGame;
	
	
	@Before
	public void init() {
	this.plist = new ArrayList<>();
	this.gameSet = new ArrayList<>();
	this.testGame = new Game(2L,20L,GameEnds.WIN);
	this.testGame.setGameId(gameId);
	this.testPlayer = new Player("Big Phil");
	this.testPlayerWithId = new Player(testPlayer.getPlayerName());
	plist.add(testPlayer);
	gameSet.add(testGame);
	this.testPlayerWithGame = new Player(testPlayer.getPlayerName());
	testPlayerWithGame.setPlayerId(playerId);
	testPlayerWithGame.setGames(gameSet);
	
	
	
	}
	
	

	@Test
	public void createPlayertest() {
		when(this.pservice.createPlayer(testPlayer)).thenReturn(testPlayerWithId);
		assertEquals(this.testPlayerWithId, this.pcontroller.createPlayer(testPlayer));
		verify(this.pservice, times(1)).createPlayer(testPlayer);
	}
	
	@Test
	public void deletePlayertest() {
		this.pcontroller.deletePlayer(playerId);
		verify(this.pservice, times(1)).deletePlayer(playerId);
	}
	
//	@Test
//	public void updatePlayer() {
//		Player newPlayerData = new Player("Tiny Tim");
//		Player updatedPlayer = new Player(newPlayerData.getPlayerName());
//		updatedPlayer.setPlayerId(playerId);
//		when(this.pservice.updatePlayer(newPlayerData)).thenReturn(updatedPlayer);
//		assertEquals(updatedPlayer,this.pservice.updatePlayer(newPlayerData));
//		verify(this.pservice, times(1)).updatePlayer(newPlayerData);
//	}
	
	@Test
	public void findAllPlayers() {
		when(this.pservice.readPlayer()).thenReturn(plist);
		assertFalse("No Players Found",this.pcontroller.findAllPlayers().isEmpty());
		verify(this.pservice, times(1)).readPlayer();
		
	}
	
	@Test
	public void findPlayerById() {
		when(this.pservice.findPlayerById(playerId)).thenReturn(testPlayerWithId);
		assertEquals(this.testPlayerWithId,this.pcontroller.findPlayerById(playerId));
		verify(this.pservice, times(1)).findPlayerById(playerId);
	}
	
	@Test
	public void addGameTest() {
		when(this.pservice.addGame(testGame, playerId)).thenReturn(testPlayerWithGame);
		assertEquals(this.testPlayerWithGame,this.pcontroller.addGame(testGame, playerId));
		
	}
}
