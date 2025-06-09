import React, { useState } from 'react';
import './App.css'

const AppSolution = () => {
  const [hearts, setHearts] = useState(0);

  // Function to increment hearts
  const incrementHearts = () => {
    setHearts(hearts + 1);
  };

  return (
    <div className='App'>
      <p>Hearts: {hearts}</p>
      <button onClick={incrementHearts}>Add Heart</button>
    </div>
  );
};

export default AppSolution;
