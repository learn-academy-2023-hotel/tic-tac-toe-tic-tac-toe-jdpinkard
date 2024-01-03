import React from 'react'
import './Scoreboard.css'

const Scoreboard = ({ xPlaying }) => {
  return (
    <div className={`scoreboard X ${!xPlaying && "O"}`}> 
        <span className={ `score x-score ${!xPlaying && "inactive"}`}>Nitty</span>
        <span className={ `score o-score ${xPlaying && "inactive"}`}>Melon</span>
    </div>
  )
}

export default Scoreboard