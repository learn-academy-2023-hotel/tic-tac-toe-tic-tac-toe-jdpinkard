import React from "react";
import "./WinPopUp.css";
import CryNit500 from "../../images/CryNit500.png";
import NittyVic500g from "../../images/NittyVic500g.png";
import melon_cry500 from "../../images/melon_cry500.png"

const WinPopUp = ({ resetBoard, onClose, victor }) => {
  let victorDeclare = "Nitty Wins!";
  let victorMessage = "Melon is Forced to do the Dishes!";
  let winImage = melon_cry500;

  if (victor === "O") {
    victorDeclare = "Melon Wins!";
    victorMessage = "Nitty is Stuck Doing the Dishes Again!";
    winImage = CryNit500;
  } else if (victor === "Y") {
    victorDeclare = "A Draw!";
    victorMessage = "Nitty Demands a Rematch to Decide!";
    winImage = NittyVic500g;
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
          <img className="modal-img" src={winImage} alt="Player Who Won" width={150} />
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
