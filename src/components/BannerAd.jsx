import React from "react";
import { FaThumbsUp, FaCoins } from "react-icons/fa";

// No banner images

const BannerAd = ({ onShowRewardedAd }) => {
			return (
				<div className="flex items-center justify-center w-full py-2 sm:py-6 mt-0 sm:mt-6">
				   <div className="w-[340px] h-[150px] bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-300 border-2 border-yellow-400 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center p-5 relative animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-500">
						<span className="text-xl font-bold text-yellow-900 mb-2 flex items-center gap-2 justify-center drop-shadow">
							Watch ads to earn rewards!
							<FaCoins className="inline text-yellow-600 text-2xl animate-bounce" />
						</span>
						<span className="text-base text-yellow-800 mb-3 font-medium">Earn coins and unlock new features by watching short ads.</span>
						<button
							className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-2"
							onClick={onShowRewardedAd}
						>
							Click to get reward
						</button>
						<div className="absolute top-2 right-4 animate-spin-slow">
							<FaCoins className="text-yellow-400 text-xl opacity-60" />
						</div>
					</div>
					<style>{`
						@keyframes fade-in {
							0% { opacity: 0; transform: translateY(20px); }
							100% { opacity: 1; transform: translateY(0); }
						}
						.animate-fade-in {
							animation: fade-in 0.8s ease;
						}
						@keyframes spin-slow {
							0% { transform: rotate(0deg); }
							100% { transform: rotate(360deg); }
						}
						.animate-spin-slow {
							animation: spin-slow 3s linear infinite;
						}
					`}</style>
				</div>
			);
};

export default BannerAd;
