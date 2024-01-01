import React from 'react'
import './Board.css'
import Square from '../Square/Square'

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, index) => {
          return <Square
            value={value} 
            onClick={() => value === null && onClick(index)}
            key={index}
            />
        })
      }
    </div>
  )
}

export default Board;