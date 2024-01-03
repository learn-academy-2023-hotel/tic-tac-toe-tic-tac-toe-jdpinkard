import React, { useState } from "react";

import Board from "./components/Board/Board";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import ResetButton from "./components/ResetButton/ResetButton";
import WinPopUp from "./components/WinPopUp/WinPopUp";
import "./App.css";

const App = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [victor, setVictor] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [modalOpen, setModal] = useState(false);

  const handleSquareClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      }
      return value;
    });

    const winner = checkWinner(updatedBoard);

    if (winner === "O") {
      setVictor("O");
    }

    if (winner === "X") {
      setVictor("X");
    }

    if (
      updatedBoard.every((square) => square !== null) &&
      winner !== "O" &&
      winner !== "X"
    ) {
      setVictor("Y");
      setGameOver(true);
      setTimeout(() => {
        setModal(true);
      }, 250);
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        setTimeout(function () {
          setModal(true);
        }, 250);
        return board[x];
      }
    }
  };

  const onClose = () => {
    setModal(false);
  };

  const resetBoard = () => {
    setGameOver(false);
    setXPlaying(true);
    setBoard(Array(9).fill(null));
    setModal(false);
    setVictor(null);
  }

  return (
    <section className="background">
      <div className="main-container">
        <div>
          <h1 className="title">Loser Does the Dishes!</h1>
          <div className="text">
            <p>
              Help Nitty win a game of Tic Tac Toe so Melon does the dishes! Or...
              Mew could just let Melon win and see Nitty punished!
            </p>
          </div>
          <div className="game-container">
            <Scoreboard xPlaying={xPlaying} victor={victor} />
            {modalOpen && (
              <WinPopUp
                resetBoard={resetBoard}
                onClose={onClose}
                victor={victor}
              />
            )}
            <Board
              board={board}
              onClick={gameOver ? null : handleSquareClick}
              xPlaying={xPlaying}
              victor={victor}
            />
            <ResetButton resetBoard={resetBoard} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
