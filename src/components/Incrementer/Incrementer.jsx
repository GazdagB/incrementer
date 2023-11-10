import React from "react";
import "./Incrementer.css";


const Incrementer = ({ count, setCount,isUpDisabled,isDownDisabled }) => {


  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };



  return (
    <div className="Incrementer">
      <h1>Incrementer</h1>
      <div className="d-flex align-items-center button-container">
        <button disabled={isDownDisabled} className="btn btn-primary btn-lg" onClick={handleDecrement}>
          -
        </button>
        <span className="py-5 count display-6">{count}</span>
        <button disabled={isUpDisabled} className="btn btn-primary btn-lg" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Incrementer;
