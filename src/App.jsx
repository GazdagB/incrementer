import './App.css';
import Incrementer from './components/Incrementer/Incrementer';
import React from 'react';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Incrementer count={count} setCount={setCount} />

      {count === 1 && }
    
    </div>
  );
}

export default App;
