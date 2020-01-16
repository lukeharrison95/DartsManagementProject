package com.DM.demo.persistence.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.DM.demo.Util.GameEnds;

@Entity
public class Game {

	@Id
	@GeneratedValue
	private Long gameId;
	
	private Long finishingDouble;
	private Long numberOfDartsThrown;
	private GameEnds result;

	public Game() {
	}

	public Game(Long finishingDouble, Long numberOfDartsThrown, GameEnds result) {
		super();
		
		this.finishingDouble = finishingDouble;
		this.numberOfDartsThrown = numberOfDartsThrown;
		this.result = result;
	}
	
	public Long getGameId() {
		return gameId;
	}

	
	public void setGameId(Long gameId) {
		this.gameId = gameId;
	}

	public Long getFinishingDouble() {
		return finishingDouble;
	}

	public void setFinishingDouble(Long finishingDouble) {
		this.finishingDouble = finishingDouble;
	}

	public Long getNumberOfDartsThrown() {
		return numberOfDartsThrown;
	}

	public void setNumberOfDartsThrown(Long numberOfDartsThrown) {
		this.numberOfDartsThrown = numberOfDartsThrown;
	}

	public GameEnds getResult() {
		return result;
	}

	public void setResult(GameEnds result) {
		this.result = result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		if (finishingDouble == null) {
			if (other.finishingDouble != null)
				return false;
		} else if (!finishingDouble.equals(other.finishingDouble))
			return false;
		if (gameId == null) {
			if (other.gameId != null)
				return false;
		} else if (!gameId.equals(other.gameId))
			return false;
		if (numberOfDartsThrown == null) {
			if (other.numberOfDartsThrown != null)
				return false;
		} else if (!numberOfDartsThrown.equals(other.numberOfDartsThrown))
			return false;
		if (result != other.result)
			return false;
		return true;
	}
	
	

}
