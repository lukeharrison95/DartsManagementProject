package com.DM.test.rest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;

import com.DM.demo.Util.GameEnds;
import com.DM.demo.persistence.entities.Game;
import com.DM.demo.rest.GameController;
import com.DM.demo.service.GameService;


@RunWith(SpringRunner.class)
public class GameControllerTest {

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
		this.testGame = new Game(2L,20L,GameEnds.WIN);
		this.testGameWithId = new Game(2L,20L,GameEnds.WIN);
		this.testGameWithId.setGameId(this.gameId);
		this.gameList.add(testGame);
		
	}
	
	
	
	@Test
	public void createPlayertest() {
		when(this.service.createGame(testGame)).thenReturn(testGameWithId);
		assertEquals(this.testGameWithId, this.controller.createGame(testGame));
		verify(this.service, times(1)).createGame(this.testGame);
	}
	
	@Test
	public void findGameByIDTest() {
		when(this.service.findGameById(this.gameId)).thenReturn(this.testGameWithId);

		assertEquals(this.testGameWithId, this.controller.findGameByID(this.gameId));

		verify(this.service, times(1)).findGameById(this.gameId);
	}

}
