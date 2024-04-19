import React from "react";
import "./ScorePage.css";
import duck from "./duck.png";
import goodJob from "./good.png";

const ScorePage = ({ score }) => {
  return (
    <div className="score-page">
      <div className="score">
        <h2>Your Quiz Score</h2>

        {score === 0 ? (
          <img className="duck" src={duck} alt="" />
        ) : (
          <img className="goodJob" src={goodJob} alt="" />
        )}

        <p>You scored {score} out of 5 correct answers!</p>
      </div>
    </div>
  );
};

export default ScorePage;
