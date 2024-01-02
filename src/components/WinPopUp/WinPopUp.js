import React from 'react';
import './WinPopUp.css';

const WinPopUp = ({ resetBoard, onClose, victor }) => {
  let victorDeclare = '';
  let victorMessage = '';

  if (victor === "X") {
    victorDeclare = 'Nitty Wins!';
    victorMessage = 'Melon is forced to do the Dishes!';
  } else if (victor === "O") {
    victorDeclare = 'Melon Wins!';
    victorMessage = 'Chaos has been restored!';
  } else if (victor === "Y") {
    victorDeclare = 'A Draw!';
    victorMessage = 'Dirty Dishes Consume the Cafe!';
  }

  return (
    <div className='modal-container'>
      <div className='modal'>
        <div className='modal-header'>
          <p className='close' onClick={onClose}>&times;</p>
        </div>
        <div className='modal-content'>
          <h1>{victorDeclare}</h1>
          <p>{victorMessage}</p>
        </div>
        <div className='modal-footer'>
          <button className='modal-btn' onClick={resetBoard}>Restart</button>
        </div>
      </div>
    </div>
  );
};

export default WinPopUp;