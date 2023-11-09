import './App.css';
import Incrementer from './components/Incrementer/Incrementer';
import BigStep from './components/BigStep/BigStep';
import React from 'react';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Incrementer count={count} setCount={setCount} />

      {count === 1 && <BigStep />}
    
    </div>
  );
}

export default App;
