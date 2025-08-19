import React from "react";
import BannerAd from "./BannerAd";
import { IoPersonSharp } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaGift } from "react-icons/fa";

import { useState } from "react";
const Home = ({ onPlay }) => {
  const [showAdPopup, setShowAdPopup] = useState(false);
  const [showBannerAd, setShowBannerAd] = useState(false);
  const coins = 0;
  // Use onPlay prop from App to start game
  const handlePlayClick = () => {
    if (typeof onPlay === 'function') {
      onPlay();
    }
  };
  const handleWatchAd = () => {
    setShowAdPopup(false);
    setShowBannerAd(true);
  };
  const handleCloseBannerAd = () => {
    setShowBannerAd(false);
  };
  const handleCancelAd = () => {
    setShowAdPopup(false);
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
          <div className="flex items-center backdrop-blur-md bg-white/30 border-2 border-yellow-300 rounded-xl shadow-2xl px-3 py-2 space-x-3 w-32 sm:w-40 player-card-glass relative">
            <IoPersonSharp className="text-yellow-400 text-xl sm:text-2xl drop-shadow-2xl animate-player-glow" style={{ filter: 'drop-shadow(0 0 8px #ffe066)' }} />
            <div className="flex flex-col items-start ml-1">
              <span className="text-xs sm:text-sm font-bold text-yellow-900 drop-shadow">Player</span>
              <span className="text-[10px] sm:text-xs font-semibold text-blue-600 drop-shadow">Score: 1640</span>
            </div>
            <style>{`
              .player-card-glass {
                box-shadow: 0 4px 16px 0 rgba(255, 200, 0, 0.12), 0 1px 4px 0 rgba(0,0,0,0.08);
                border-radius: 0.75rem;
                border: 2px solid #ffe066;
                background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%);
                transition: box-shadow 0.3s, border 0.3s;
                min-width: 80px;
                max-width: 120px;
                padding: 0.25rem 0.5rem;
              }
              .player-card-glass:hover {
                box-shadow: 0 8px 24px 0 #ffe06688, 0 1px 6px 0 #fff;
                border: 2px solid #ffd700;
              }
              @keyframes player-glow {
                0%,100% { filter: drop-shadow(0 0 6px #ffe06688); }
                50% { filter: drop-shadow(0 0 12px #ffd700cc); }
              }
              .animate-player-glow {
                animation: player-glow 1.6s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
        {/* Rewards Right - Small Card */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center backdrop-blur-md bg-white/30 border-2 border-yellow-300 rounded-xl shadow-2xl px-3 py-2 space-x-3 w-32 sm:w-40 coin-card-glass relative">
            <BsCoin className="text-yellow-400 text-3xl sm:text-4xl drop-shadow-2xl animate-coin-rotate" style={{ filter: 'drop-shadow(0 0 12px #ffe066)' }} />
            <div className="flex flex-col items-start">
              <span className="text-lg sm:text-xl font-extrabold text-yellow-900 animate-count-glass">{coins}</span>
              <span className="text-xs text-pink-600 font-semibold tracking-wide">Coins</span>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons - Vertically Centered on Mobile */}
  {/* ...existing code... */}
      <div className="flex flex-col gap-4 mb-4 items-center w-full px-4 max-w-xs mx-auto justify-center self-center flex-1 z-10">
        <button
          className="max-w-[140px] w-full px-3 py-2 rounded-md bg-gradient-to-r from-yellow-400 via-sky-400 to-blue-500 text-white font-semibold text-base shadow-md hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-button-pop"
          onClick={typeof onPlay === 'function' ? onPlay : handlePlayClick}
        >
          <FaPlay className="mr-1 text-lg animate-spin-slow" /> Play
        </button>
        {showAdPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 max-w-xs flex flex-col items-center border-2 border-yellow-300 backdrop-blur-md">
              <span className="text-lg font-bold text-yellow-900 mb-2">Watch an ad to unlock game rewards</span>
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
            <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center border-2 border-yellow-300 backdrop-blur-md">
              <span className="text-lg font-bold text-yellow-900 mb-2">Ad is playing...</span>
              <BannerAd />
              <button className="mt-4 px-4 py-2 rounded bg-yellow-400 text-white font-bold" onClick={handleCloseBannerAd}>Close Ad</button>
            </div>
          </div>
        )}
        <button className="max-w-[140px] w-full px-3 py-2 rounded-md bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-800 font-semibold text-base shadow-md hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-button-pop">
          <FiSettings className="mr-1 text-lg" /> Settings
        </button>
        <button className="max-w-[140px] w-full px-3 py-2 rounded-md bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 text-white font-semibold text-base shadow-md hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-button-pop">
          <FaGift className="mr-1 text-lg" /> Reward
        </button>

  {/* Removed win popup and ad logic */}
      </div>
      <style>{`
        @keyframes coin-rotate {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-coin-rotate {
          animation: coin-rotate 1.8s linear infinite;
        }
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