import React, { useState, useEffect } from 'react';

interface ClockProps {
  onSave: (instant: string) => void;
}

const Clock: React.FC<ClockProps> = ({ onSave }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: Date) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="clock">
      <div className="location">Alicante</div>
      <h1>{formatTime(currentTime)}</h1>
      <button onClick={() => onSave(formatTime(currentTime))}>Guardar instante</button>
    </div>
  );
};

export default Clock;
