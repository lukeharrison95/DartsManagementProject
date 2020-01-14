function getAllPlayers(){
    axios.get('/DartsProject/findPlayer')
         .then(response => {console.log(response.data); createLeagueTable(response.data);});
  }




function createLeagueTable(data){
    let players = data;
    let leagueBody = document.getElementById("leagueBody");

    for (let x= 0; x < players.length; x++){
        getWins(players[x].playerId);
        getDraws(players[x].playerId);
        getLosses(players[x].playerId);
        getPoints(players[x].playerId);
        const row = document.createElement("tr");
              row.className = "table-dark";
              leagueBody.appendChild(row);
        
        const cell1 = document.createElement("th");

        const playername = document.createTextNode(players[x].playerName);
              cell1.appendChild(playername);
              row.appendChild(cell1);

/*         const cell2 = document.createElement("td");
        let played = createTextNode(getPlayed(players[x].playerId).value);
            cell2.appendChild(played);
            row.appendChild(cell2); */

        const cell3 = document.createElement("td");
        let wins = createTextNode(playerWins);
            cell3.appendChild(wins);
            row.appendChild(cell3);

        const cell4 = document.createElement("td");
        let draws = createTextNode(getDraws(playerDraws));
            cell4.appendChild(draws);
            row.appendChild(cell4);

        const cell5 = document.createElement("td");
        let losses = createTextNode(getLosses(playerLosses));
            cell5.appendChild(losses);
            row.appendChild(cell5);

            const cell6 = document.createElement("td");
            let points = createTextNode(getpoints(playerPoints));
                cell6.appendChild(points);
                row.appendChild(cell6);
    }


}


function getPoints(data){
    let playerId = data;

    let playerPoints = axios.get("/DartsProject/getPoints/" + playerId)
                            .then(response => {console.log(response.data);});
}

function getWins(data){
    let playerId = data;

    let playerWins = axios.get("/DartsProject/getWins/" + playerId)
                    .then(response => {console.log(response.data);});
}

function getDraws(data){
    let playerId = data;

    let playerDraws = axios.get("DartsProject/getDraws/" + playerId)
                        .then(response => {console.log(response.data);});
}

function getLosses(data){
    let playerId = data;

    let playerLosses = axios.get("DartsProject/getLoss/" + playerId)
    .then(response => {console.log(response.data);});
}