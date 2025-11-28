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

while (playing) {
	// console.clear();
	// input[playerRow][playerCol] = "w";
	// printBoard(board);

printBoard(board);
const input = prompt("Which way? (w/a/s/d): ");

	let row = playerRow
	let col = playerCol

if (input === "w") row--;
if (input === "s") row++;
if (input === "d") col++;
if (input === "a") col--;

if (row < 0 || col < 0 || row > 2 || col > 2) {
	console.log("ออกนอกคอบแล้วสิ")
	playing = false;

// if (playerRow < 0) {
// 	console.log("ตกรอบ")
// } else {
// 	console.log("ลงมาแล้ว")
// }break;
}
board[playerRow][playerCol] = EMPTY;
playerRow = row;
playerCol = col;
board[playerRow][playerCol] = PLAYER;
// console.log(input);
}