function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



function readAll(){
  axios.get('http://localhost:8080/findPlayer')
       .then(response => {console.log(response.data); makeTable(response.data);});


}



  function makeTable(data) {
    let players = data;
    let editbutton = document.getElementById('edit-player');
    let addgbutton = document.getElementById('add-game');
    let deletebutton = document.getElementById('delete-player');

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
        cell2.appendChild(editbutton);
        row.appendChild(cell2);
        const cell3 = document.createElement('td');
        cell3.appendChild(addgbutton);
        row.appendChild(cell3);
        const cell4 = document.createElement('td');
        cell4.appendChild(deletebutton);
        row.appendChild(cell4);
        }
    }
    





