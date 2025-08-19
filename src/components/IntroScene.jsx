import React, { useState, useEffect } from "react";

const ANIMATION_TEXT = "Sherlock Studios";

const IntroScene = () => {
  const [displayed, setDisplayed] = useState("");
  const [rolling, setRolling] = useState(true);
  const [zoomOut, setZoomOut] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(ANIMATION_TEXT.slice(0, i + 1));
      i++;
      if (i === ANIMATION_TEXT.length) {
        clearInterval(interval);
        setRolling(false);
        setTimeout(() => setZoomOut(true), 400); // Start zoom out after text finishes
        setTimeout(() => setDone(true), 1200); // End intro after zoom out
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
      <div className={`mb-6 ${rolling ? 'animate-roll' : ''}`}>
        {/* Star icon SVG (can swap for power icon if preferred) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-20 h-20 text-yellow-400 drop-shadow-lg">
          <polygon points="32,6 39,25 59,25 42,38 48,58 32,46 16,58 22,38 5,25 25,25" fill="currentColor" />
        </svg>
        <style>{`
          @keyframes roll {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-roll {
            animation: roll 1.2s linear infinite;
          }
          @keyframes zoom-out {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0.7); opacity: 0; }
          }
          .animate-zoom-out {
            animation: zoom-out 0.8s cubic-bezier(.7,-0.5,.3,1.5) forwards;
          }
            .shine-text {
              text-shadow:
                0 0 12px #fff,
                0 0 24px #fff,
                0 0 36px #fff;
              transition: text-shadow 0.4s;
            }
        `}</style>
      </div>
        <h1 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold text-white text-center animate-fade-in ${zoomOut ? 'animate-zoom-out shine-text' : 'drop-shadow-lg'}`} style={zoomOut ? {textShadow: '0 0 12px #fff, 0 0 24px #fff, 0 0 36px #fff'} : {}}>
          {displayed}
        </h1>
        <p className={`mt-4 text-lg sm:text-2xl text-white/80 text-center font-semibold animate-fade-in ${zoomOut ? 'animate-zoom-out shine-text' : ''}`} style={zoomOut ? {textShadow: '0 0 12px #fff, 0 0 24px #fff, 0 0 36px #fff'} : {}}>
          Welcome to Sherlock Studios Gaming!
        </p>
    </div>
  );
};

export default IntroScene;