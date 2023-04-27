import { useState, useEffect } from 'react';
import '../estilos/pomodoro.css'
import { FaPlay }from "react-icons/fa";
import { FaPause }from "react-icons/fa";

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className='timer'>
      <p>Pomodoro</p>
      <h1>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
      <button onClick={startTimer}><FaPlay /></button>
      <button onClick={pauseTimer}><FaPause /></button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default PomodoroTimer;