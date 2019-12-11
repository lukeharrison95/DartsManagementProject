package com.DM.demo.persistence.repo;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.DM.demo.persistence.entities.Games;
import com.DM.demo.persistence.entities.Player;

@Repository
public interface GameRepo {
	List<Games> findgamebyPlayer(Player player);
	List<Games> findgamebyGameId(long gameId);
}
