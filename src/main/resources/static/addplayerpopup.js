
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



function addPlayer(){
 let player = document.getElementById("player").value;
axios.post('http://localhost:8080/createPlayer',
            {"playerName": player})
            .then(response => {console.log(response) })
            

}


















function readAll(){
  axios.get('http://localhost:8080/findPlayer')
       .then(response => {console.log(response.data); makeTable(response.data);});
}

function makeTable(data) {
    let players = data;
    let tablebody = document.getElementById('table-body');
    
    for (let x = 0; x < players.length; x++) {
        const row = document.createElement('tr');
        row.className = 'table-dark';
        tablebody.appendChild(row);
        const cell1 = document.createElement('th');
        const playername=document.createTextNode(players[x].playerName);
        cell1.appendChild(playername);
        row.appendChild(cell1);
        const cell2 = document.createElement('td');
        let editbutton = document.createElement('button');
        editbutton.className = "btn btn-success";
        editbutton.type="button";
        editbutton.addEventListener('click', () => updateplayer(players[x].playerId));
        editbutton.innerHTML='Edit Player';
        cell2.appendChild(editbutton);
        row.appendChild(cell2);
        const cell3 = document.createElement('td');
        const addgbutton = document.createElement('button');
        addgbutton.className = 'btn btn-info';
        addgbutton.type="button";
        addgbutton.addEventListener('click', () => addgame(players[x].playerId));
        addgbutton.innerHTML='Add Game';
        cell3.appendChild(addgbutton);
        row.appendChild(cell3);
        const cell4 = document.createElement('td');
        const deletebutton = document.createElement('button');
        deletebutton.className = 'btn btn-danger';
        deletebutton.type="button";
        deletebutton.addEventListener('click', () => deleteplayer(players[x].playerId));
        deletebutton.innerHTML='Delete Player';
        cell4.appendChild(deletebutton);
        row.appendChild(cell4);
        }
    }
    


    function updateplayer(){
      document.getElementById("myEditForm").style.display = "block";
      }
      

      function closeEditForm() {
        document.getElementById("myEditForm").style.display = "none";
      }

      function addgame(){
        document.getElementById("myAddGameForm").style.display = "block";
      }
      

      function closeeditForm() {
        document.getElementById("myAddGameForm").style.display = "none";
      }
      
      function deleteplayer(){
       
      }





