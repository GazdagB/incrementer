import "./App.css";
import Incrementer from "./components/Incrementer/Incrementer";
import BigStep from "./components/BigStep/BigStep";
import React from "react";
import { useState } from "react";
import StartingMessage from "./components/StartingMessage/StartingMessage";
import Message from "./components/Message/Message";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

function App() {
  //CHANGE THIS TO CHANGE THE START AND END OF THE COUNTER
  const start = -1;
  const end = 3;

  const [count, setCount] = useState(0);
  const [isUpDisabled, setIsUpDisabled] = useState(false);
  const [isDownDisabled, setIsDownDisabled] = useState(false);
  const [show,setShow] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

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
          isButton={true}
          btntext={"Suggest Ideas!"}
          btnOnClick={handleShow}
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
