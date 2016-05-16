window.onload = start;

// VARIABLES
var player1 = 'x'; // turn = 0
var player2 = 'o'; // turn = 1
var turn = 0; // toggles between 0 and 1 to switch turns


var checkWin; // function that checks the board for winning combo
var xWin = false; // true if X wins
var oWin = false; // true if O wins
var winAlert; // function that declares the winner

// FUNCTION VARIABLES
var newGame;
var clearBoard;
//////

//var checkCell; // function to check value in each cell
//var a1; // value within each cell
//var a2;
//var a3;
//var b1;
//var b2;
//var b3;
//var c1;
//var c2;
//var c3;

// toggles to an X or O in the cell when clicked
//var newGame = function() {
	//$('.switchCell').on('click', function() {
		//if (turn = 0; turn<= ; turn+= 1) {
			//$('.turnX').toggleClass('this.switchCell');
		//}
		//else {
			//$('.turnO').toggleClass('this.switchCell');
		//}	
			//checkCell();
			//checkWin();
			//turn =+ 1;
		//}
	//);


$('.cell').on('click', function() {
	$('.O').toggleClass('.X' || '.O');
});


// starts new game
$(document).ready(function() {
	newGame();
});

// function that detects what is in each cell after each turn
//checkCell = function(key) {
	//switch(key) {
	//case 0:
		//a1 = $('a1').html();
		//break;
	//case 1:	
		//a2 = $('a2').html();
		//break;
	//case 2:	
		//a3 = $('a3').html();
		//break;
	//case 3:	
		//b1 = $('b1').html();
		//break;
	//case 4:	
		//b2 = $('b2').html();
		//break;
	//case 5:	
		//b3 = $('b3').html();
		//break;
	//case 6:	
		//c1 = $('c1').html();
		//break;
	//case 7:	
		//c2 = $('c2').html();
		//break;
	//case 8:	
		//c3 = $('c3').html();
		//break;
	//}
//};


// 'reset game' button clears the board, restarts game, and resets the wins
var clearBoard =
$('#reset').click(function() {
	a1 = $('#a1').text("");
	a2 = $('#a2').text("");
	a3 = $('#a3').text("");
	b1 = $('#b1').text("");
	b2 = $('#b2').text("");
	b3 = $('#b3').text("");
	c1 = $('#c1').text("");
	c2 = $('#c2').text("");
	c3 = $('#c3').text("");

	xWin = false;
	oWin = false;
	newGame();
	location.reload(); // don't understand this part
	});
};



// STYLES - ANIMATIONS
@keyframes .turnX {
	background: #ff6347;
}
	@-webkit-keyframes .turnX {
		background: #ff6347;
	}
	@-moz-keyframes .turnX {
		background: #ff6347;
	}

@keyframes .turnO {
	background: #b0c4de;
}
	@-webkit-keyframes .turnO{
		background: #b0c4de;
	}
	@-moz-keyframes .turnO {
		background: #b0c4de;
	}