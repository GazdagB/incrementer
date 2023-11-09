import './App.css';
import Incrementer from './components/Incrementer/Incrementer';
import BigStep from './components/BigStep/BigStep';
import React from 'react';
import { useState } from 'react';
import StartingMessage from './components/StartingMessage/StartingMessage';
import { useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState(null);


  useEffect(() => {
    function getRandomPastelColor() {
      const hue = Math.floor(Math.random() * 360);
      const pastel = 'hsl(' + hue + ', 60%, 90%)';
      return pastel;
    }

    setBgColor(getRandomPastelColor());
  }, []);

  
  
  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <Incrementer count={count} setCount={setCount} />

      {count === 0 && <StartingMessage />}
      {count === 1 && <BigStep />}
      
    
    </div>
  );
}


export default App;
