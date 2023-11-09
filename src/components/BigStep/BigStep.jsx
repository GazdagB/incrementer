import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./BigStep.css";

const BigStep = () => {
  return (
    <div className="BigStep">
      <div className="d-flex flex-column justify-content-center align-items-center frame text-light">
        <FontAwesomeIcon className="quote" icon={faQuoteLeft} />
        <p className="quote lead fw-bold">
          <span>One</span> small step for a man, <span>one</span> giant leap for
          mankind
        </p>
        <p className="author">-Neil Armstrong</p>
      </div>
    </div>
  );
};

export default BigStep;
