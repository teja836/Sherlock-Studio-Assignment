import React, { useState, useEffect } from "react";
import BannerAd from "./BannerAd";

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

const Game = ({ triggerAd }) => {
	const [board, setBoard] = useState(initialBoard);
	const [xIsNext, setXIsNext] = useState(true);
	const [showAdPopup, setShowAdPopup] = useState(false);
	const [showBannerAd, setShowBannerAd] = useState(false);
	const [adProgress, setAdProgress] = useState(0);
	const [showRewardPopup, setShowRewardPopup] = useState(false);
	const [adKey, setAdKey] = useState(0);
	const [coins, setCoins] = useState(0);
	const rewardAmount = 50;
	const winner = calculateWinner(board);

		useEffect(() => {
			let timer;
			if (triggerAd) {
				timer = setTimeout(() => {
					setShowAdPopup(true);
				}, 0);
			}
			return () => clearTimeout(timer);
		}, [triggerAd]);

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
		setCoins(0);
		setShowAdPopup(false);
		setShowBannerAd(false);
		setShowRewardPopup(false);
		setAdProgress(0);
	};

	const handleWatchAd = () => {
		setShowAdPopup(false);
		setAdKey(prev => prev + 1);
		setShowBannerAd(true);
		setAdProgress(0);
		let progress = 0;
		const interval = setInterval(() => {
			progress += 1;
			setAdProgress(progress);
			if (progress >= 10) {
				clearInterval(interval);
				setShowBannerAd(false);
				setCoins(prev => prev + rewardAmount);
				setShowRewardPopup(true);
				setTimeout(() => setShowRewardPopup(false), 2000);
			}
		}, 1000);
	};

	const handleCancelAd = () => {
		setShowAdPopup(false);
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
				<div className="mt-2 text-yellow-700 font-bold">Coins: {coins}</div>
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
			{showAdPopup && (
				<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 animate-fade-in">
					<div className="bg-white rounded-2xl shadow-2xl p-6 w-80 max-w-xs flex flex-col items-center border-2 border-yellow-300 backdrop-blur-md">
						<span className="text-lg font-bold text-yellow-900 mb-2">Watch an ad to get rewards!</span>
						<div className="flex gap-4 mt-4">
							<button
								className="px-4 py-2 rounded-md bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-white font-semibold shadow hover:scale-105 active:scale-95 transition-all duration-200"
								onClick={handleWatchAd}
							>Watch Ad</button>
							<button
								className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 font-semibold shadow hover:scale-105 active:scale-95 transition-all duration-200"
								onClick={handleCancelAd}
							>Cancel</button>
						</div>
					</div>
				</div>
			)}
			{showBannerAd && (
				<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 animate-fade-in">
					<div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center border-2 border-yellow-300 backdrop-blur-md min-w-[340px]">
						<span className="text-lg font-bold text-yellow-900 mb-2">Ad is playing...</span>
						<BannerAd key={adKey} />
						<div className="w-full mt-4">
							<div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
								<div className="h-full bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 animate-progress" style={{ width: `${adProgress * 10}%`, transition: 'width 0.5s' }}></div>
							</div>
							<div className="text-xs text-gray-600 mt-1 text-center">{10 - adProgress}s left</div>
						</div>
					</div>
				</div>
			)}
			{showRewardPopup && (
				<div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-green-300 text-green-900 px-8 py-4 rounded-xl shadow-xl z-[999] animate-bounce flex items-center gap-2">
					<span className="font-bold text-lg">You won {rewardAmount} coins!</span>
				</div>
			)}
		</div>
	);
};

export default Game;
