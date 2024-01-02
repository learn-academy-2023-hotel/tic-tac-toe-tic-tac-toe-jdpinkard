import React from "react";
import "./ResetButton.css";

const ResetButton = ({ resetBoard }) => {
  return (
    <div>
      <button className="reset-btn" onClick={resetBoard}>
        Restart
      </button>
    </div>
  );
};

export default ResetButton;
