import './App.css';
import Incrementer from './components/Incrementer/Incrementer';
import BigStep from './components/BigStep/BigStep';
import React from 'react';
import { useState } from 'react';
import StartingMessage from './components/StartingMessage/StartingMessage';
import Message from './components/Message/Message';

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <Incrementer count={count} setCount={setCount} />

      {count < 0 && <Message title={"Woooow!🎉 You are persistent!"} subtext={"We didn't come up with anything for this number yet!💻"} />}
      {count === 0 && <StartingMessage />}
      {count === 1 && <BigStep />}
      {count > 1 && <Message title={"Woooow!🎉 You are persistent!"} subtext={"We didn't come up with anything for this number yet!💻"} />}
      
      
    
    </div>
  );
}

export default App;
