package com.DM.demo.rest;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DM.demo.persistence.entities.Player;
import com.DM.demo.service.PlayerService;

@RestController
public class PlayerController {
	
	private PlayerService service;

	
	
	@Autowired
	public PlayerController(PlayerService service) {
		super();
		this.service = service;
	}
	
	@PostMapping("/createPlayer")
	public Player createPlayer(@RequestBody Player player) {
		return this.service.createPlayer(player);
	}
	
	@DeleteMapping("/deletePlayer/{playerId}")
	public void deletePlayer(@PathVariable Long playerId) {
		this.service.deletePlayer(playerId);
	}
	
	@PutMapping("/updatePlayer")
	public Player updatePlayer(@RequestBody Player player) {
		return this.service.updatePlayer(player);
	}
	
	@GetMapping("/findPlayer/{playerId}")
	public Player findPlayerById(@PathVariable long playerId) {
		return this.service.findPlayerById(playerId);
	}
	
	@GetMapping("/findPlayer")
	public List<Player> findAllPlayers(){
		return this.service.readPlayer();
	}
	

	
	
	
	
	
}
