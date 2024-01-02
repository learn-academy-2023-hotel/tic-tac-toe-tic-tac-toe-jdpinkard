import React from "react";
import "./WinPopUp.css";

const WinPopUp = ({ resetBoard, onClose, victor }) => {
  let victorDeclare = "";
  let victorMessage = "";

  if (victor === "X") {
    victorDeclare = "Nitty Wins!";
    victorMessage = "Melon is Forced to do the Dishes!";
  } else if (victor === "O") {
    victorDeclare = "Melon Wins!";
    victorMessage = "Nitty is Stuck Doing the Dishes Again!";
  } else if (victor === "Y") {
    victorDeclare = "A Draw!";
    victorMessage = "Nitty Demands a Rematch to Decide!";
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={onClose}>
            &times;
          </p>
        </div>
        <div className="modal-content">
          <h1>{victorDeclare}</h1>
          <p>{victorMessage}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={resetBoard}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinPopUp;
