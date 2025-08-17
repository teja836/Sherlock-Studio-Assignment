import React, { useState, useEffect } from "react";

const ANIMATION_TEXT = "Sherlock Studios";

const IntroScene = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(ANIMATION_TEXT.slice(0, i + 1));
      i++;
      if (i === ANIMATION_TEXT.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-300 to-blue-400">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white text-center drop-shadow-lg animate-fade-in">
        {displayed}
      </h1>
    </div>
  );
};

export default IntroScene;
