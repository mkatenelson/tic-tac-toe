window.onload = start;

// VARIABLES
var player1 = 'x'; // turn = 0
var player2 = 'o'; // turn = 1
var turn = 0; // toggles between 0 and 1 to switch turns

var checkCell; // function to check value in each cell
var a1; // value within each cell
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin; // function that checks the board for winning combo
var xWin = false; // true if X wins
var oWin = false; // true if O wins
var winAlert; // function that declares the winner

var newGame;
var clearBoard;
//////


// toggles to an X or O in the cell when clicked
var newGame = function() {
	$('td').on('click', function() {
		if (turn === 0) {
			$(this).text(player1);
			checkCell();
			checkWin();
			turn === 1;
		}
	}
);

$('.a1Button').on('click', function() {
	$('.O').toggleClass('.a1');
});


// starts new game
$(document).ready(function() {
	newGame();
});

// function that detects what is in each cell after each turn
checkCell = function() {
	a1 = $('a1').html();
	a2 = $('a2').html();
	a3 = $('a3').html();
	b1 = $('b1').html();
	b2 = $('b2').html();
	b3 = $('b3').html();
	c1 = $('c1').html();
	c2 = $('c2').html();
	c3 = $('c3').html();
};


// function that detects a win or tie
checkWin = function () {

	// checks to see if X won	
	if ((a1 == a2 && a1 == a3 && (a1 == "x")) ||
		// first row
		(b1 == b2 && b1 == b3 && (b1 == "x")) ||
		// second row
		(c1 == c2 && c1 == c3 && (c1 == "x")) ||
		// third row
		(a1 == b1 && a1 == c1 && (a1 == "x")) ||
		// first column
		(a2 == b2 && a2 == c2 && (a2 == "x")) ||
		// second column
		(a3 == b3 && a3 == c3 && (a3 == "x")) ||
		// third column
		(a1 == b2 && a1 == c3 && (a1 == "x")) ||
		// left diagonal
		(a3 == b2 && a3 == a1 && (a3 == "x"))
		// right diagonal
		) {
			xWin = true;
			winAlert();
	}

	// checks to see if O won
	else if ((a1 == a2 && a1 == a3 && (a1 == "o")) ||
		// first row
		(b1 == b2 && b1 == b3 && (b1 == "o")) ||
		// second row
		(c1 == c2 && c1 == c3 && (c1 == "o")) ||
		// third row
		(a1 == b1 && a1 == c1 && (a1 == "o")) ||
		// first column
		(a2 == b2 && a2 == c2 && (a2 == "o")) ||
		// second column
		(a3 == b3 && a3 == c3 && (a3 == "o")) ||
		// third column
		(a1 == b2 && a1 == c3 && (a1 == "o")) ||
		// left diagonal
		(a3 == b2 && a3 == a1 && (a3 == "o"))
		// right diagonal
		) {
			oWin = true;
			winAlert();
	}

	// checks for tie if all cells are filled
	else if ( ((a1 == 'x') || (a1 == 'o')) && 
		((a2 == 'x') || (a2 == 'o')) && 
		((a3 == 'x') || (a3 == 'o')) && 
		((b1 == 'x') || (b1 == 'o')) && 
		((b2 == 'x') || (b2 == 'o')) && 
		((b3 == 'x') || (b3 == 'o')) && 
		((c1 == 'x') || (c1 == 'o')) && 
		((c2 == 'x') || (c2 == 'o')) && 
		((c3 == 'x') || (c3 == 'o')) )  {

				alert("It's a tie!");
	}	
};


// 'new game' button clears the board, restarts game, and resets the wins
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