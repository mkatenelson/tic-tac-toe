window.onload = newGame;
var squares = document.getElementsByTagName("td");
var turnMsg = document.querySelector(".playerTurn");

var oTurn = [];
var xTurn = [];var turn = 1;
var winCounter = 0;
var winner = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function newGame(){
  addXandOListener();
  addResetListener();
}

function addXandOListener(){
  for (var i = squares.length - 1; i >= 0; i--) {
    squares[i].addEventListener("click", makeYourMark);
  }
}

function makeYourMark(event){
  if (event.target.innerHTML.length === 0){
    if (turn % 2 === 0) {
      oTurn.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "O";
      event.target.setAttribute("class","O");
      turnMsg.innerHTML = "It is X's turn";
      turn++;
      checkWin(oTurn, "O");
    }
    else {
      xTurn.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      turnMsg.innerHTML = "It is O's turn";
      turn++;
      checkWin(xTurn, "X");
    }
  }
}



function checkForWin(movesArray, name){

  for (i = 0; i < winner.length; i++) {
   
    winCounter = 0;
  
    for (var z = 0; z < winner[i].length; z++) {
     
      if(movesArray.indexOf(winner[i][j]) !== -1){
        winCounter++;
      }
      
      if(winCounter === 3){
        alert("Winner is" + name + "!");
        clearBoard();
      }
    }
  }
}


// RESET
function addResetListener(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", clearBoard);
}

function clearBoard(){
  for (var i = squares.length - 1; i >= 0; i--) {
    squares[i].innerHTML="";
    squares[i].setAttribute("class","clear");
  }
  oTurn = [];
  xTurn = [];
  turn = 1;
  winCounter = 0;
  turnMsg.innerHTML = "New Game";
}