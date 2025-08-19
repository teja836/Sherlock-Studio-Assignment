import React, { useState, useEffect } from 'react';
import IntroScene from './components/IntroScene';
import Home from './components/Home';
import Game from './components/Game';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [triggerAd, setTriggerAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    setShowGame(true);
    setTimeout(() => setTriggerAd(true), 5000);
  };

  return (
    <>
      {showIntro ? <IntroScene /> : showGame ? <Game triggerAd={triggerAd} /> : <Home onPlay={handlePlay} />}
    </>
  );
}

export default App;