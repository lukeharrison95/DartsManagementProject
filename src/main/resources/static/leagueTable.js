function getAllPlayers() {
    axios.get('/DartsProject/findPlayer')
        .then(response => { console.log(response.data); createLeagueTable(response.data); });
}




function createLeagueTable(players) {
    let leagueBody = document.getElementById("leagueBody");

    for (let player of players) {
        const playerData = getPlayer(player.id)
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
        let wins = document.createTextNode(playerData.wins);
        cell3.appendChild(wins);
        row.appendChild(cell3);

        const cell4 = document.createElement("td");
        let draws = document.createTextNode(playerData.draws);
        cell4.appendChild(draws);
        row.appendChild(cell4);

        const cell5 = document.createElement("td");
        let losses = document.createTextNode(playerData.losses);
        cell5.appendChild(losses);
        row.appendChild(cell5);

        const cell6 = document.createElement("td");
        let points = document.createTextNode(playerData.points);
        cell6.appendChild(points);
        row.appendChild(cell6);
    }


}
function getPlayer(playerId) {
    let data = {};
    axios.get("/DartsProject/getPoints/" + playerId)
        .then(response => {
            data.points = response.data;
            axios.get("/DartsProject/getWins/" + playerId)
                .then(response => {
                    data.wins = response.data;
                    axios.get("/DartsProject/getDraws/" + playerId)
                        .then(response => {
                            data.draws = response.data;
                            axios.get("/DartsProject/getLoss/" + playerId)
                                .then(response => {
                                    data.losses = response.data;
                                });
                        });
                });
        }).catch(error => console.error(error));
    return data;
}

function getPoints(playerId) {
    return
}

function getWins(playerId) {
    return
}

function getDraws(playerId) {
    return axios.get("/DartsProject/getDraws/" + playerId)
        .then(response => {
            console.log(response.data);
            return response.data;
        });
}

function getLosses(playerId) {
    return
}