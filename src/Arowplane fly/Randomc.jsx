import React, { useState } from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const startCounter = () => {
    // Increment the counter every 500 milliseconds (0.5 seconds)
    setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 500);

  };



  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={startCounter}>
        Increment
      </button>
    </div>
  );
};

export default CounterApp;
