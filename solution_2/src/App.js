import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  });
  return (
    <div className="app">
      <h1 className="heading">Digital Clock</h1>
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <h2 className="clock">
            {time.toLocaleTimeString()}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
