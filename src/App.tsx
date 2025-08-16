import { useState } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';

function App() {
  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle color="red" />
      </div>
      <div className="semaphore-item">
        <Circle color="orange" />
      </div>
      <div className="semaphore-item">
        <Circle color="green" />
      </div>
    </div>
  );
}

export default App;
