import "./App.css";
import Incrementer from "./components/Incrementer/Incrementer";
import BigStep from "./components/BigStep/BigStep";
import React from "react";
import { useState } from "react";
import StartingMessage from "./components/StartingMessage/StartingMessage";
import Message from "./components/Message/Message";
import { useEffect } from "react";

function App() {
  //CHANGE THIS TO CHANGE THE START AND END OF THE COUNTER
  const start = -1;
  const end = 3;

  const [count, setCount] = useState(0);
  const [isUpDisabled, setIsUpDisabled] = useState(false);
  const [isDownDisabled, setIsDownDisabled] = useState(false);

  useEffect(() => {
    function isReached() {
      if (end === count) {
        setIsUpDisabled(true);
      } else {
        setIsUpDisabled(false);
      }

      if (start === count) {
        setIsDownDisabled(true);
      } else {
        setIsDownDisabled(false);
      }
    }
    isReached();
  }, [count, start, end]);

  return (
    <div className="App" style={{ backgroundColor: "#fffae9" }}>
      <Incrementer
        isUpDisabled={isUpDisabled}
        isDownDisabled={isDownDisabled}
        count={count}
        setCount={setCount}
      />

      {count <= start && (
        <Message
          title={"Woooow!🎉 You are persistent!"}
          subtext={"We didn't come up with anything for this number yet!💻"}
        />
      )}
      {count === 0 && <StartingMessage />}
      {count === 1 && <BigStep />}
      
      {count >= end && (
        <Message
          title={"Woooow!🎉 You are persistent!"}
          subtext={"We didn't come up with anything for this number yet!💻"}
        />
      )}
    </div>
  );
}

export default App;
