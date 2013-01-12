/**
 * Created with JetBrains PhpStorm.
 * User: oghx
 * Date: 11/29/12
 * Time: 2:51 AM
 */

var TicTacToe = {};


TicTacToe.GameEngine = function(){

    //This is for our opponent...
    var gameBoard = [
        [document.getElementById("box1"), document.getElementById("box2"), document.getElementById("box3")],
        [document.getElementById("box4"), document.getElementById("box5"), document.getElementById("box6")],
        [document.getElementById("box7"), document.getElementById("box8"), document.getElementById("box9")]
    ];

    //I want to watch what i clicked...
    var target = event.target.id;
    console.log(target);

    var targetIndex = event.target.innerHTML;
    console.log(targetIndex);

    //Turn Mechanic
    var playersTurn = "It's your turn!";
    var computersTurn = "It's computer's turn!"
    var turnStatus = "";

    // Let the game begin!

    if (targetIndex !== ""){
        alert("You can not do this!");
    }
    else{
        document.getElementById(target).innerHTML = "X";
    }

    //This is winner check:

    if (
        //horizontal
        (gameBoard[0][0].innerHTML === "O") && (gameBoard[0][1].innerHTML === "O") && (gameBoard[0][2].innerHTML === "O") ||
        (gameBoard[1][0].innerHTML === "O") && (gameBoard[1][1].innerHTML === "O") && (gameBoard[1][2].innerHTML === "O") ||
        (gameBoard[2][0].innerHTML === "O") && (gameBoard[2][1].innerHTML === "O") && (gameBoard[2][2].innerHTML === "O") ||
        //vertical
        (gameBoard[0][0].innerHTML === "O") && (gameBoard[1][0].innerHTML === "O") && (gameBoard[2][0].innerHTML === "O") ||
        (gameBoard[0][1].innerHTML === "O") && (gameBoard[1][1].innerHTML === "O") && (gameBoard[2][1].innerHTML === "O") ||
        (gameBoard[0][2].innerHTML === "O") && (gameBoard[1][2].innerHTML === "O") && (gameBoard[2][2].innerHTML === "O") ||
        //diagonal
        (gameBoard[0][0].innerHTML === "O") && (gameBoard[1][1].innerHTML === "O") && (gameBoard[2][2].innerHTML === "O") ||
        (gameBoard[0][2].innerHTML === "O") && (gameBoard[1][1].innerHTML === "O") && (gameBoard[2][0].innerHTML === "O")
        ){
        alert("Computer Won!");
    }else if(
        //horizontal
        (gameBoard[0][0].innerHTML === "X") && (gameBoard[0][1].innerHTML === "X") && (gameBoard[0][2].innerHTML === "X") ||
        (gameBoard[1][0].innerHTML === "X") && (gameBoard[1][1].innerHTML === "X") && (gameBoard[1][2].innerHTML === "X") ||
        //verticalX
        (gameBoard[0][0].innerHTML === "X") && (gameBoard[1][0].innerHTML === "X") && (gameBoard[2][0].innerHTML === "X") ||
        (gameBoard[0][1].innerHTML === "X") && (gameBoard[1][1].innerHTML === "X") && (gameBoard[2][1].innerHTML === "X") ||
        (gameBoard[2][0].innerHTML === "X") && (gameBoard[2][1].innerHTML === "X") && (gameBoard[2][2].innerHTML === "X") ||
        (gameBoard[0][2].innerHTML === "X") && (gameBoard[1][2].innerHTML === "X") && (gameBoard[2][2].innerHTML === "X") ||
        //diagonalX
        (gameBoard[0][0].innerHTML === "X") && (gameBoard[1][1].innerHTML === "X") && (gameBoard[2][2].innerHTML === "X") ||
        (gameBoard[0][2].innerHTML === "X") && (gameBoard[1][1].innerHTML === "X") && (gameBoard[2][0].innerHTML === "X")
        ){
        alert("You Won!");
    }

};

