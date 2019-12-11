package com.DM.demo.persistence.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.DM.demo.Util.GameEnds;

@Entity
public class Games {
	
	@Id
	@GeneratedValue
	@Column(name = "Game Id")
	private long gameId;
	
	@ManyToOne
    @JoinColumn(name="Player Id")
    private Player player;
	
	private GameEnds result;
	
	
	public Games() {}

	public GameEnds getResult() {
		return result;
	}

	public void setResult(GameEnds result) {
		this.result = result;
	}
	
	
	
	
	
	
	
	
	
	
	

}
