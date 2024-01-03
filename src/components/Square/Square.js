import React from "react";
import "./Square.css";
import feline_toy from "../../images/feline_toy.png";
import melon_object from "../../images/melon_object.png";

const Square = ({ value, onClick, index, xPlaying }) => {
  let playerObject = null;

  if (value === "X") {
    playerObject = <img src={feline_toy} alt="wind-up mouse" width={60} />;
  }

  if (value === "O") {
    playerObject = <img src={melon_object} alt="watermelon" width={60} />;
  }

  return (
    <>
      <p
        className={`square x ${!xPlaying && "o"}`}
        onClick={onClick}
        index={index}
      >
        {playerObject}
      </p>
    </>
  );
};
export default Square;
