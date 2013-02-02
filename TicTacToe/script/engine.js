/**
 * Created with JetBrains PhpStorm.
 * User: oghx
 * Date: 11/29/12
 * Time: 2:51 AM
 */



Array.prototype.random = function (length) {
    return this[Math.floor((Math.random()*length))][Math.floor((Math.random()*length))];
};

var TicTacToe = {};

TicTacToe.gameBoard = [
    ["box1", "box2", "box3"],
    ["box4", "box5", "box6"],
    ["box7", "box8", "box9"]
];

TicTacToe.randomize = function(){
    return TicTacToe.gameBoard.random(TicTacToe.gameBoard.length);
};

TicTacToe.playersTurn = "It's your turn!";
TicTacToe.computersTurn = "It's computer's turn!";
TicTacToe.turnValid = false;

TicTacToe.gameTurn = function(){
    //Turn Mechanic
    console.log(TicTacToe.turnValid);
    if (TicTacToe.turnValid === false){
        $("#turnStatus").html(TicTacToe.playersTurn);
        TicTacToe.gameEngine();
        TicTacToe.turnValid = true;
    }
    else{
        $("#turnStatus").html(TicTacToe.computersTurn);
        if($("#"+TicTacToe.randomize()).html() === ""){
            $("#"+TicTacToe.randomize()).html("O");
        }
        else{
        TicTacToe.randomize();
        }
        TicTacToe.turnValid = false;
    }
    console.log(TicTacToe.turnValid);
};

TicTacToe.gameEngine = function(){

    //I want to watch what i clicked...
    var target = event.target.id;
    console.log(target);
    var targetIndex = event.target.innerHTML;
    console.log(targetIndex);


    // Let the game begin!
    if (targetIndex !== ""){
        alert("You can not do this!");
    }
    else{
        $('#'+target).html("X");
    }
};

TicTacToe.winnerCheck = function(){

    if (
        //horizontal
        ($("#"+TicTacToe.gameBoard[2][0]).html() === "O") && ($("#"+TicTacToe.gameBoard[2][1]).html() === "O") && ($("#"+TicTacToe.gameBoard[2][2]).html() === "O") ||
        ($("#"+TicTacToe.gameBoard[0][0]).html() === "O") && ($("#"+TicTacToe.gameBoard[0][1]).html() === "O") && ($("#"+TicTacToe.gameBoard[0][2]).html() === "O") ||
        ($("#"+TicTacToe.gameBoard[1][0]).html() === "O") && ($("#"+TicTacToe.gameBoard[1][1]).html() === "O") && ($("#"+TicTacToe.gameBoard[1][2]).html() === "O") ||
        //vertical
        ($("#"+TicTacToe.gameBoard[0][0]).html() === "O") && ($("#"+TicTacToe.gameBoard[1][0]).html() === "O") && ($("#"+TicTacToe.gameBoard[2][0]).html() === "O") ||
        ($("#"+TicTacToe.gameBoard[0][1]).html() === "O") && ($("#"+TicTacToe.gameBoard[1][1]).html() === "O") && ($("#"+TicTacToe.gameBoard[2][1]).html() === "O") ||
        ($("#"+TicTacToe.gameBoard[0][2]).html() === "O") && ($("#"+TicTacToe.gameBoard[1][2]).html() === "O") && ($("#"+TicTacToe.gameBoard[2][2]).html() === "O") ||
        //diagonal
        ($("#"+TicTacToe.gameBoard[0][0]).html() === "O") && ($("#"+TicTacToe.gameBoard[1][1]).html() === "O") && ($("#"+TicTacToe.gameBoard[2][2]).html() === "O") ||
        ($("#"+TicTacToe.gameBoard[0][2]).html() === "O") && ($("#"+TicTacToe.gameBoard[1][1]).html() === "O") && ($("#"+TicTacToe.gameBoard[2][0]).html() === "O")
        ){
        alert("Computer Won!");
    }else if(
        //horizontal
        ($("#"+TicTacToe.gameBoard[0][0]).html() === "X") && ($("#"+TicTacToe.gameBoard[0][1]).html() === "X") && ($("#"+TicTacToe.gameBoard[0][2]).html() === "X") ||
        ($("#"+TicTacToe.gameBoard[1][0]).html() === "X") && ($("#"+TicTacToe.gameBoard[1][1]).html() === "X") && ($("#"+TicTacToe.gameBoard[1][2]).html() === "X") ||
        ($("#"+TicTacToe.gameBoard[2][0]).html() === "X") && ($("#"+TicTacToe.gameBoard[2][1]).html() === "X") && ($("#"+TicTacToe.gameBoard[2][2]).html() === "X") ||
        //vertical
        ($("#"+TicTacToe.gameBoard[0][0]).html() === "X") && ($("#"+TicTacToe.gameBoard[1][0]).html() === "X") && ($("#"+TicTacToe.gameBoard[2][0]).html() === "X") ||
        ($("#"+TicTacToe.gameBoard[0][1]).html() === "X") && ($("#"+TicTacToe.gameBoard[1][1]).html() === "X") && ($("#"+TicTacToe.gameBoard[2][1]).html() === "X") ||
        ($("#"+TicTacToe.gameBoard[0][2]).html() === "X") && ($("#"+TicTacToe.gameBoard[1][2]).html() === "X") && ($("#"+TicTacToe.gameBoard[2][2]).html() === "X") ||
        //diagonal
        ($("#"+TicTacToe.gameBoard[0][0]).html() === "X") && ($("#"+TicTacToe.gameBoard[1][1]).html() === "X") && ($("#"+TicTacToe.gameBoard[2][2]).html() === "X") ||
        ($("#"+TicTacToe.gameBoard[0][2]).html() === "X") && ($("#"+TicTacToe.gameBoard[1][1]).html() === "X") && ($("#"+TicTacToe.gameBoard[2][0]).html() === "X")
        ){
        alert("You Won!");
    }else{
        console.log("Go on!");
    }

};

