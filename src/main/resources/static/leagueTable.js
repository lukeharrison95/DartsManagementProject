function getAllPlayers() {
    axios.get('/DartsProject/findPlayer')
        .then(response => { console.log(response.data); createLeagueTable(response.data); });
}




function createLeagueTable(players) {
    let leagueBody = document.getElementById("leagueBody");

    for (let x = 0; x < players.length; x++) {
        let playerWins = getWins(players[x].playerId);
        let playerDraws = getDraws(players[x].playerId);
        let playerLosses = getLosses(players[x].playerId);
        let playerPoints = getPoints(players[x].playerId);
        const row = document.createElement("tr");
        row.className = "table-dark";
        leagueBody.appendChild(row);

        const cell1 = document.createElement("th");

        const playername = document.createTextNode(players[x].playerName);
        cell1.appendChild(playername);
        row.appendChild(cell1);

        /*         const cell2 = document.createElement("td");
                let played = document.createTextNode(getPlayed(players[x].playerId).value);
                    cell2.appendChild(played);
                    row.appendChild(cell2); */

        const cell3 = document.createElement("td");
        let wins = document.createTextNode(playerWins);
        cell3.appendChild(wins);
        row.appendChild(cell3);

        const cell4 = document.createElement("td");
        let draws = document.createTextNode(playerDraws);
        cell4.appendChild(draws);
        row.appendChild(cell4);

        const cell5 = document.createElement("td");
        let losses = document.createTextNode(playerLosses);
        cell5.appendChild(losses);
        row.appendChild(cell5);

        const cell6 = document.createElement("td");
        let points = document.createTextNode(playerPoints);
        cell6.appendChild(points);
        row.appendChild(cell6);
    }


}


function getPoints(playerId) {
    return axios.get("/DartsProject/getPoints/" + playerId)
        .then(response => {
            console.log(response.data);
            return response.data;
        });
}

function getWins(playerId) {
    return axios.get("/DartsProject/getWins/" + playerId)
        .then(response => {
            console.log(response.data);
            return response.data;
        });
}

function getDraws(playerId) {
    return axios.get("/DartsProject/getDraws/" + playerId)
        .then(response => {
            console.log(response.data);
            return response.data;
        });
}

function getLosses(playerId) {
    return axios.get("/DartsProject/getLoss/" + playerId)
        .then(response => {
            console.log(response.data);
            return response.data;
        });
}