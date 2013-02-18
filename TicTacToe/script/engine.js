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

TicTacToe.hasWinner = false;

//GameBoard Map for randomize set
TicTacToe.gameBoard = [
    ["box1", "box2", "box3"],
    ["box4", "box5", "box6"],
    ["box7", "box8", "box9"]
];

TicTacToe.randomize = function(){
    return TicTacToe.gameBoard.random(TicTacToe.gameBoard.length);
};


TicTacToe.gameTurn = function(){

    //Turn Mechanic
    TicTacToe.playerPlay(TicTacToe.getTarget());
    TicTacToe.winnerCheck();
    if(TicTacToe.hasWinner === false){
    TicTacToe.comPlay();
    TicTacToe.winnerCheck();
    }

};

TicTacToe.comPlay = function(){

    var pcTarget = TicTacToe.randomize();
    if ($("#" + pcTarget).html() != "")
    {
        do {
            pcTarget = TicTacToe.randomize();
        } while ($("#" + pcTarget).html() != "")
        return $("#"+pcTarget).html("O");
    }else
    {
        return $("#"+pcTarget).html("O");
    }
};

TicTacToe.getTarget = function(){
    var target = event.target;
    return target;
};

TicTacToe.playerPlay = function(target){

    // Let the game begin!
    if (target.innerHTML === "X" || target.innerHTML === "O"){
        alert("You can not do this!");
    }
    else{
        $('#'+target.id).html("X");
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
        $("body").click(function() {
            location.reload();

        });
        TicTacToe.hasWinner = true;
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
        $("body").click(function() {
            location.reload();

        });
        TicTacToe.hasWinner = true;
    }else{
        console.log("Go on!");
    }

};

