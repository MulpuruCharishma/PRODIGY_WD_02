import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setTime(0);
    pauseTimer();
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="display">{formatTime(time)}</div>
      <div className="controls">
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pauseTimer}>Pause</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
