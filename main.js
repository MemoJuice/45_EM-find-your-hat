"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

const rowlength = board.length; // X Axis (Row)
const collength = board[0].length; // Y Axis (Col)

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	// console.log(board);
	const myBoard = board.map((row) => row.join("")).join("\n")
	console.log(myBoard)
}

// Game play loo
printBoard(board);
// const input = prompt("Which way? (w/a/s/d): ");
// console.log(input);

