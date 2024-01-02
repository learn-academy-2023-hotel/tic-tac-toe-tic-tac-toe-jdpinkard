import React from "react";
import "./Board.css";
import Square from "../Square/Square";
import Melon500 from "../../images/Melon500.png";
import Gmelon500 from "../../images/Gmelon500.png";
import NittyA500 from "../../images/NittyA500.png";
import CryNit500 from "../../images/CryNit500.png";

const Board = ({ board, onClick, xPlaying, victor }) => {
  let Nitty = NittyA500;
  let Melon = Melon500;

  if (victor === "X") {
    Nitty = NittyA500;
    Melon = Melon500;
  } else if (victor === "O") {
    Nitty = CryNit500;
    Melon = Gmelon500;
  } else if (victor === "Y") {
    Nitty = CryNit500;
    Melon = Melon500;
  }

  return (
    <div className="board-container">
      <div></div>
      <img
        className="vs-image-nitty"
        src={Nitty}
        alt="Nitty the Mewing Maid"
        width={200}
      />
      <div className="board">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              xPlaying={xPlaying}
              onClick={() => value === null && onClick(index)}
              key={index}
            />
          );
        })}
      </div>
      <img
        className="vs-image-melon"
        src={Melon}
        alt="Melon the Lalafell"
        width={200}
      />
      <div></div>
    </div>
  );
};

export default Board;
