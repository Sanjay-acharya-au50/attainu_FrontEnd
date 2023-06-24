var board = ["", "", "", "", "", "", "", "", ""];
var player = "X";

function printBoard() {
    console.log("\n " + board[0] + " | " + board[1] + " | " + board[2] + " ");
    console.log("---|---|---");
    console.log(" " + board[3] + " | " + board[4] + " | " + board[5] + " ");
    console.log("---|---|---");
    console.log(" " + board[6] + " | " + board[7] + " | " + board[8] + " \n");
}

function playerMove(position) {
    board[position] = player;
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
}

function checkForWin() {
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
        return board[0];
    } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
        return board[3];
    } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
        return board[6];
    } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
        return board[0];
    } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
        return board[1];
    } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
        return board[2];
    } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
        return board[0];
    } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
        return board[2];
    } else {
        return null;
    }
}

printBoard();
playerMove(0);
playerMove(1);
printBoard();
playerMove(4);
playerMove(2);
printBoard();
playerMove(6);
playerMove(3);
printBoard();
playerMove(5);
playerMove(8);
printBoard();
var winner = checkForWin();
if (winner) {
    console.log("Player " + winner + " won!");
} else {
    console.log("It's a tie!");
}
var board = ["", "", "", "", "", "", "", "", ""];
var player = "X";

function printBoard() {
    console.log("\n " + board[0] + " | " + board[1] + " | " + board[2] + " ");
    console.log("---|---|---");
    console.log(" " + board[3] + " | " + board[4] + " | " + board[5] + " ");
    console.log("---|---|---");
    console.log(" " + board[6] + " | " + board[7] + " | " + board[8] + " \n");
}

function playerMove(position) {
    board[position] = player;
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
}

function checkForWin() {
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
        return board[0];
    } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
        return board[3];
    } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
        return board[6];
    } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
        return board[0];
    } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
        return board[1];
    } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
        return board[2];
    } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
        return board[0];
    } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
        return board[2];
    } else {
        return null;
    }
}

printBoard();
playerMove(0);
playerMove(1);
printBoard();
playerMove(4);
playerMove(2);
printBoard();
playerMove(6);
playerMove(3);
printBoard();
playerMove(5);
playerMove(8);
printBoard();
var winner = checkForWin();
if (winner) {
    console.log("Player " + winner + " won!");
} else {
    console.log("It's a tie!");
}
