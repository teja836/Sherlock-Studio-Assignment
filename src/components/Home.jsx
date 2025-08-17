import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaGift } from "react-icons/fa";
import BannerAd from "./BannerAd";

const Home = () => {
  const [showWinPopup, setShowWinPopup] = useState(false);
  const [lastReward, setLastReward] = useState(0);
  const [coins, setCoins] = useState(0);
  const [showRewardedAd, setShowRewardedAd] = useState(false);
  const [showWatchPopup, setShowWatchPopup] = useState(false);
  const [currentAd, setCurrentAd] = useState(null);

  const adVideos = [
    { src: import.meta.env.BASE_URL + 'Ad1Video.mp4', reward: 50 },
    { src: import.meta.env.BASE_URL + 'Ad2.mp4', reward: 70 },
    
  ];

  const handlePlayClick = () => {
    // Always show ad when Play is clicked
    setShowWatchPopup(true);
  };

  // ...existing code...

  const handleWatchAd = () => {
    setShowWatchPopup(false);
    setShowRewardedAd(true);
    // Pick a random ad video and set its reward
    const ad = adVideos[Math.floor(Math.random() * adVideos.length)];
    setCurrentAd(ad);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 animate-fade-in justify-center relative overflow-hidden">
      {/* Animated floating coins background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={`absolute animate-coin-float text-yellow-400 text-3xl opacity-30`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${10 + (i % 4) * 18}%`,
              animationDelay: `${i * 0.7}s`
            }}
          >💰</span>
        ))}
        <style>{`
          @keyframes coin-float {
            0% { transform: translateY(0) scale(1); opacity: 0.3; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 0.5; }
            100% { transform: translateY(0) scale(1); opacity: 0.3; }
          }
          .animate-coin-float {
            animation: coin-float 4s ease-in-out infinite;
          }
        `}</style>
      </div>
      <div className="flex flex-row justify-between items-center w-full px-2 sm:px-4 pt-4 mb-6 z-10">
        {/* Player Profile Left - Small Card with Name & Score */}
        <div className="flex-1 flex justify-start">
          <div className="flex items-center bg-white rounded-lg shadow px-2 py-1 space-x-2 w-32 sm:w-44">
            <IoPersonSharp className="text-yellow-700 text-xl sm:text-2xl drop-shadow-lg" />
            <div className="flex flex-col items-start">
              <span className="text-xs sm:text-sm font-bold text-gray-800">Player Name</span>
              <span className="text-xs text-gray-500">Lv 1</span>
              <span className="text-xs sm:text-sm font-semibold text-blue-600">Score: 1640</span>
            </div>
          </div>
        </div>
        {/* Rewards Right - Small Card */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center bg-white rounded-lg shadow px-2 py-1 space-x-2 w-28 sm:w-36">
            <BsCoin className="text-yellow-400 text-xl sm:text-2xl drop-shadow-lg animate-bounce" />
            <div className="flex flex-col items-start">
              <span className="text-xs sm:text-sm font-bold text-yellow-900 animate-count">{coins}</span>
              <span className="text-xs text-pink-600">Coins</span>
            </div>
            <button className="ml-1 p-1 rounded-full bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 shadow hover:scale-105 transition-all"
              onClick={() => setShowWatchPopup(true)}>
              <FaGift className="text-white text-base animate-pulse" title="Claim Reward" />
            </button>
          </div>
        </div>
      </div>
      {/* Buttons - Vertically Centered on Mobile */}
  {/* ...existing code... */}
      <div className="flex flex-col gap-4 mb-4 items-center w-full px-4 max-w-xs mx-auto justify-center self-center flex-1 z-10">
        <button
          className="max-w-[140px] w-full px-3 py-2 rounded-md bg-gradient-to-r from-yellow-400 via-sky-400 to-blue-500 text-white font-semibold text-base shadow-md hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-button-pop"
          onClick={handlePlayClick}
        >
          <FaPlay className="mr-1 text-lg animate-spin-slow" /> Play
        </button>
        {showWatchPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-lg text-gray-800 mb-4">Watch ads to get reward coins</span>
              <button
                className="px-4 py-2 rounded bg-blue-500 text-white font-bold shadow hover:bg-blue-600 transition-all"
                onClick={handleWatchAd}
              >
                Watch
              </button>
            </div>
          </div>
        )}
        <button className="max-w-[140px] w-full px-3 py-2 rounded-md bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-800 font-semibold text-base shadow-md hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-button-pop">
          <FiSettings className="mr-1 text-lg" /> Settings
        </button>
        <button className="max-w-[140px] w-full px-3 py-2 rounded-md bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 text-white font-semibold text-base shadow-md hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-button-pop">
          <FaGift className="mr-1 text-lg" /> Reward
        </button>
        {showRewardedAd && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-64 h-40 flex items-center justify-center bg-gray-100 rounded mb-4">
                {/* Show video ad instead of placeholder */}
                <video src={currentAd?.src} controls autoPlay className="w-full h-full rounded bg-black" onEnded={() => {
                  setShowRewardedAd(false);
                  setCoins(c => c + (currentAd?.reward || 0));
                  setLastReward(currentAd?.reward || 0);
                  setShowWinPopup(true);
                  setTimeout(() => setShowWinPopup(false), 2200);
                }}>
                  <source src={currentAd?.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <span className="text-base text-gray-700">Watching ad...</span>
              <span className="text-green-700 font-bold mt-2">Reward: {currentAd?.reward || 0} coins</span>
            </div>
          </div>
        )}

        {showWinPopup && (
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-green-300 text-green-900 px-8 py-4 rounded-xl shadow-xl z-[999] animate-bounce">
            <span className="font-bold text-lg">You won {lastReward} coins!</span>
          </div>
        )}
      </div>
      {/* Banner Ad Card - More Down Below Buttons */}
      <div className="w-full max-w-xl mx-auto px-4 mt-10 mb-10">
        <BannerAd onReward={amount => setCoins(c => c + amount)} />
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(.7,-0.5,.3,1.5);
        }
        @keyframes button-pop {
          0% { transform: scale(0.95); }
          60% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .animate-button-pop {
          animation: button-pop 0.7s cubic-bezier(.7,-0.5,.3,1.5);
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2.5s linear infinite;
        }
        @keyframes count {
          0% { color: #f59e42; }
          50% { color: #fbbf24; }
          100% { color: #f59e42; }
        }
        .animate-count {
          animation: count 1.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;