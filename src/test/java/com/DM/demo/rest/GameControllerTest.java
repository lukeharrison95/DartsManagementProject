package com.DM.demo.rest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;

import com.DM.demo.Util.GameEnds;
import com.DM.demo.persistence.entities.Game;
import com.DM.demo.service.GameService;


@RunWith(SpringRunner.class)
class GameControllerTest {

	@InjectMocks
	private GameController controller;
	
	
	@Mock
	private GameService service;
	private List<Game> gameList;
	private Game testGame;
	private Game testGameWithId;
	final Long gameId=1L;
	
	@Before
	public void init() {
		this.gameList = new ArrayList<>();
		this.gameList.add(testGame);
		this.testGame = new Game(2L,20L,GameEnds.WIN);
		this.testGameWithId = new Game(testGame.getFinishingDouble(),testGame.getNumberOfDartsThrown(),testGame.getResult());
		this.testGameWithId.setGameId(gameId);	
	}
	
	
	
	@Test
	public void createPlayertest() {
		when(this.service.createGame(testGame)).thenReturn(testGameWithId);
		assertEquals(this.testGameWithId, this.controller.createGame(testGame));
		verify(this.service, times(1)).createGame(this.testGame);
	}

}
