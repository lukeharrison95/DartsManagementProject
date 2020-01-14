function getAllPlayers(){
    axios.get('/DartsProject/findPlayer')
         .then(response => {console.log(response.data); createLeagueTable(response.data);});
  }



function createLeagueTable(data){
    let players = data;
    let leagueBody = document.getElementById("leagueBody");

    for (let x= 0; x < players.length; x++){

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
        let wins = createTextNode(getWins(players[x].playerId).value);
            cell3.appendChild(wins);
            row.appendChild(cell3);

        const cell4 = document.createElement("td");
        let draws = createTextNode(getDraws(players[x].playerId).value);
            cell4.appendChild(draws);
            row.appendChild(cell4);

        const cell5 = document.createElement("td");
        let losses = createTextNode(getLosses(players[x].playerId).value);
            cell5.appendChild(losses);
            row.appendChild(cell5);

            const cell6 = document.createElement("td");
            let points = createTextNode(getpoints(players[x].playerId).value);
                cell6.appendChild(points);
                row.appendChild(cell6);
    }


}


function getPoints(data){
    let playerId = data;

    axios.get("/DartsProject/getPoints/" + playerId);
}

function getWins(data){
    let playerId = data;

    axios.get("/DartsProject/getWins/" + playerId)
    .then(respone => {return respone.data});
}

function getDraws(data){
    let playerId = data;

    axios.get("DartsProject/getDraws/" + playerId)
    .then(respone => {return respone.data});
}

function getLosses(data){
    let playerId = data;

    axios.get("DartsProject/getLoss" + playerId)
    .then(respone => {return respone.data});
}