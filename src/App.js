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
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [modalOpen, setModal] = useState(false);

  const handleSquareClick = (squareIndex) => { // handles X and O placement on board
    const updatedBoard = board.map((value, index) => {
      if (index === squareIndex) {
        return xPlaying ? "X" : "O";
      }
      return value;
    });

    const winnerDeclared = checkWinner(updatedBoard)

    if ( // determines tie if board is filled and no winner is declared
      !winnerDeclared &&
      updatedBoard.every((square) => square !== null)
    ) {
      setWinner("Y");
      setGameOver(true);
      setModal(true);
    }
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => { // determines if a win condition has occured
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        setWinner(board[x])
        setModal(true);
        return board[x];
      }
    }
  };

  const onClose = () => { // closes Modal(WinPopUp) so player can view board
    setModal(false);
  };

  const resetBoard = () => { // resets board to original state
    setGameOver(false);
    setXPlaying(true);
    setBoard(Array(9).fill(null));
    setModal(false);
    setWinner(null);
  }

  return (
    <section className="background">
      <div className="main-container">
        <div>
          <h1 className="app-title">Loser Does the Dishes!</h1>
          <div className="app-text">
            <p>
              Help Nitty win a game of Tic Tac Toe so Melon does the dishes! Or...
              Mew could just let Melon win and see Nitty punished!
            </p>
          </div>
          <div className="game-container">
            <Scoreboard xPlaying={xPlaying} />
            {modalOpen && (
              <WinPopUp
                resetBoard={resetBoard}
                onClose={onClose}
                winner={winner}
              />
            )}
            <Board
              board={board}
              onClick={gameOver ? null : handleSquareClick}
              xPlaying={xPlaying}
            />
            <ResetButton resetBoard={resetBoard} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
