import React from "react";
import "./Board.css";
import Square from "../Square/Square";
import melon_start from "../../images/melon_start.png";
import nitty_start from "../../images/nitty_start.png";

const Board = ({ board, onClick, xPlaying}) => {

  return (
    <div className="board-container">
      <div></div>
      <img
        className="vs-image-nitty"
        src={nitty_start}
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
        src={melon_start}
        alt="Melon the Lalafell"
        width={200}
      />
      <div></div>
    </div>
  );
};

export default Board;
