
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



function addPlayer(){
 let player = document.getElementById("player").value;
axios.post('/DartsProject/createPlayer',
            {"playerName": player})
            .then(response => {console.log(response) })
            

}


function readAll(){
  axios.get('/DartsProject/findPlayer')
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
             addgbutton.addEventListener('click', () => addGame(players[x].playerId));
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

      function addGame(data){
        let playerid = data;
        let addGameFormDiv = document.getElementById("myAddGameForm");
        
        
        const addGameForm = document.createElement("form");
        addGameForm.className = "form-container";
        addGameForm.onsubmit = "addGameData(playerid)";
        
        
        const addTitle = document.createElement("h1");
        addTitle.innerHTML = "Add Game";
        addGameForm.appendChild(addTitle);
        
        
        const numberOfDartsInput = document.createElement("input");
        numberOfDartsInput.type = "number";
        numberOfDartsInput.placeholder = "Amount Of Darts Thrown";
        numberOfDartsInput.id = "NoOfDarts";
        addGameForm.appendChild(numberOfDartsInput);
        
        
        
        const resultInput = document.createElement("select");
        resultInput.className = "custom-select";
        resultInput.id="resultId"

        const optionResultDefault = document.createElement("option");
        optionResultDefault.selected = "";
        optionResultDefault.innerHTML ="Select Result";
        resultInput.appendChild(optionResultDefault);
        
        const winInput = document.createElement("option");
        winInput.value="WIN";
        winInput.innerHTML="win";
        resultInput.appendChild(winInput);
        
        const drawinput = document.createElement("option");
        drawinput.value="DRAW";
        drawinput.innerHTML="Draw";
        resultInput.appendChild(drawinput);
        
        const lossInput = document.createElement("option");
        lossInput.value="LOSS";
        lossInput.innerHTML="Loss";
        resultInput.appendChild(lossInput);
        addGameForm.appendChild(resultInput);

        
        const finishingDoubleInput = document.createElement("select");
        finishingDoubleInput.className="custom-select";
        finishingDoubleInput.id="finishingDoubleId"

        const finshingDoubleDefault = document.createElement("option");
        finshingDoubleDefault.selected="";
        finshingDoubleDefault.innerHTML="Select Finishing double";
        finishingDoubleInput.appendChild(finshingDoubleDefault);

        const oneInput = document.createElement("option");
        oneInput.value = "1";
        oneInput.innerHTML="1";
        finishingDoubleInput.appendChild(oneInput);

        const twoInput = document.createElement("option");
        twoInput.value = "2";
        twoInput.innerHTML="2";
        finishingDoubleInput.appendChild(twoInput);
        
        const threeInput = document.createElement("option");
        threeInput.value = "3";
        threeInput.innerHTML="3";
        finishingDoubleInput.appendChild(threeInput);

        const fourInput = document.createElement("option");
        fourInput.value = "4";
        fourInput.innerHTML="4";
        finishingDoubleInput.appendChild(fourInput);
        
        const fiveInput = document.createElement("option");
        fiveInput.value = "5";
        fiveInput.innerHTML="5";
        finishingDoubleInput.appendChild(fiveInput);

        const sixInput = document.createElement("option");
        sixInput.value = "6";
        sixInput.innerHTML="6";
        finishingDoubleInput.appendChild(sixInput);

        const sevenInput = document.createElement("option");
        sevenInput.value = "7";
        sevenInput.innerHTML="7";
        finishingDoubleInput.appendChild(sevenInput);

        const eightInput = document.createElement("option");
        eightInput.value = "8";
        eightInput.innerHTML="8";
        finishingDoubleInput.appendChild(eightInput);
        
        
        const nineInput = document.createElement("option");
        nineInput.value = "9";
        nineInput.innerHTML="9";
        finishingDoubleInput.appendChild(nineInput);

        const tenInput = document.createElement("option");
        tenInput.value = "10";
        tenInput.innerHTML="10";
        finishingDoubleInput.appendChild(tenInput);

        const elevenInput = document.createElement("option");
        elevenInput.value = "11";
        elevenInput.innerHTML="11";
        finishingDoubleInput.appendChild(elevenInput);

        const twelveInput = document.createElement("option");
        twelveInput.value = "12";
        twelveInput.innerHTML="12";
        finishingDoubleInput.appendChild(twelveInput);
        
        const thirteenInput = document.createElement("option");
        thirteenInput.value = "13";
        thirteenInput.innerHTML="13";
        finishingDoubleInput.appendChild(thirteenInput);
        
        const fourteenInput = document.createElement("option");
        fourteenInput.value = "14";
        fourteenInput.innerHTML="14";
        finishingDoubleInput.appendChild(fourteenInput);

        const fifteenInput = document.createElement("option");
        fifteenInput.value = "15";
        fifteenInput.innerHTML="15";
        finishingDoubleInput.appendChild(fifteenInput);

        const sixteenInput = document.createElement("option");
        sixteenInput.value = "16";
        sixteenInput.innerHTML="16";
        finishingDoubleInput.appendChild(sixteenInput);
        
        const seventeenInput = document.createElement("option");
        seventeenInput.value = "17";
        seventeenInput.innerHTML="17";
        finishingDoubleInput.appendChild(seventeenInput);

        const eighteenInput = document.createElement("option");
        eighteenInput.value = "18";
        eighteenInput.innerHTML="18";()
        finishingDoubleInput.appendChild(eighteenInput);

        const nineteenInput = document.createElement("option");
        nineteenInput.value = "19";
        nineteenInput.innerHTML="19";
        finishingDoubleInput.appendChild(nineteenInput);

        const twentyInput = document.createElement("option");
        twentyInput.value = "20";
        twentyInput.innerHTML="20";
        finishingDoubleInput.appendChild(twentyInput);
        addGameForm.appendChild(finishingDoubleInput);

        const addGameSubmitButton = document.createElement("button");
        addGameSubmitButton.type ="submit";
        addGameSubmitButton.className = "btn btn-success";
        addGameSubmitButton.innerHTML = "Submit";
        addGameForm.appendChild(addGameSubmitButton);

        
        const closeAddGameWindow = document.createElement("button");
        closeAddGameWindow.className="btn btn-danger";
        closeAddGameWindow.type = "button";
        closeAddGameWindow.addEventListener("click",() => addGameFormDiv.removeChild(addGameForm));
        closeAddGameWindow.innerHTML="Close";
        addGameForm.appendChild(closeAddGameWindow);

        addGameFormDiv.appendChild(addGameForm);

        let finishingDoubleValue = document.getElementById("finishingDoubleId").value;
        let numberOfDartsvalue = document.getElementById("NoOfDarts").value;
        let resultValue = document.getElementById("resultId").value;



      }
      

      /* function closeeditForm() {
        document.getElementById("myAddGameForm").style.display = "none";
      }
       */

      function addGameDate(data){
        const playerId = data;
        axios.patch("/DartsProject/addGame/" + playerId,
        {"finishingDouble": finishingDoubleValue,
         "numberOfDartsThrown": numberOfDartsvalue,
         "result": resultValue}
        ).then(response => {console.log(response)});
      }


      function deleteplayer(){
       
      }





