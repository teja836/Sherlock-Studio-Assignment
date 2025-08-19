import React, { useState } from "react";

const initialBoard = Array(9).fill(null);

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

const Game = () => {
	const [board, setBoard] = useState(initialBoard);
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		if (board[i] || winner) return;
		const newBoard = board.slice();
		newBoard[i] = xIsNext ? "X" : "O";
		setBoard(newBoard);
		setXIsNext(!xIsNext);
	};

	const handleReset = () => {
		setBoard(initialBoard);
		setXIsNext(true);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">
			<div className="mb-6 text-center">
				<h1 className="text-3xl font-extrabold text-blue-700 drop-shadow mb-2">Tic-Tac-Toe</h1>
				<p className="text-lg text-gray-700 font-semibold">
					{winner
						? `Winner: ${winner}`
						: board.every(Boolean)
						? "It's a draw!"
						: `Next: ${xIsNext ? "X" : "O"}`}
				</p>
				<button
					className="mt-3 px-4 py-2 rounded bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 text-white font-bold shadow hover:scale-105 transition-all"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>
			<div className="grid grid-cols-3 gap-3 bg-white/60 p-6 rounded-2xl shadow-2xl">
				{board.map((cell, i) => (
					<button
						key={i}
						className="w-20 h-20 sm:w-24 sm:h-24 text-4xl sm:text-5xl font-extrabold rounded-xl bg-white shadow hover:bg-blue-100 transition-all duration-200 flex items-center justify-center"
						onClick={() => handleClick(i)}
						style={{
							color:
								cell === "X"
									? "#2563eb"
									: cell === "O"
									? "#f59e42"
									: "#444",
							textShadow:
								cell
									? "0 0 12px #fff, 0 0 24px #fff"
									: "none",
						}}
					>
						{cell}
					</button>
				))}
			</div>
		</div>
	);
};

export default Game;
