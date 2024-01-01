import React, { useState } from 'react'

import Board from "./components/Board/Board";
import Scoreboard from "./components/Scoreboard/Scoreboard"
import ResetButton from './components/ResetButton/ResetButton';
import './App.css'


const App = () => {

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)

  const handleSquareClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if(index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      }
      return value;
    })

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let {oScore} = scores;
        oScore += 1
        setScores({...scores, oScore})
      } else {
      let {xScore} = scores;
      xScore += 1
      setScores({...scores, xScore})
      }
    }

    setBoard(updatedBoard)
    setXPlaying(!xPlaying)
  }

  const checkWinner = (board) => {
    for(let i = 0; i < winConditions.length; i++) {
      const [x,y,z] = winConditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setXPlaying(true);
    setBoard(Array(9).fill(null))
  }

  return (
    <>
      <h1 className='title'>Tic Tac Toe</h1>
      <Scoreboard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleSquareClick} />
      <ResetButton resetBoard={resetBoard} />
    </>
  )
}

export default App