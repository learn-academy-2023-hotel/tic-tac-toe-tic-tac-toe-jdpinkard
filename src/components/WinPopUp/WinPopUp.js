import React from "react";
import "./WinPopUp.css";
import nitty_cry from "../../images/nitty_cry.png";
import nitty_tie from "../../images/nitty_tie.png";
import melon_cry from "../../images/melon_cry.png"

const WinPopUp = ({ resetBoard, onClose, winner }) => {
  let winnerDeclare = "Nitty Wins!";
  let winnerMessage = "Melon is Forced to do the Dishes!";
  let winImage = melon_cry;

  if (winner === "O") { // Determines modal msg & img from default
    winnerDeclare = "Melon Wins!";
    winnerMessage = "Nitty is Stuck Doing the Dishes Again!";
    winImage = nitty_cry;
  } else if (winner === "Y") {
    winnerDeclare = "A Draw!";
    winnerMessage = "Nitty Demands a Rematch to Decide!";
    winImage = nitty_tie;
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
          <h1>{winnerDeclare}</h1>
          <img className="modal-img" src={winImage} alt="Player Who Won or Loss" width={150} />
          <p>{winnerMessage}</p>
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
