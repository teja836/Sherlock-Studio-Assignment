import React, { useState, useEffect } from 'react';
import IntroScene from './components/IntroScene';
import Home from './components/Home';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? <IntroScene /> : <Home />}
    </>
  );
}

export default App;