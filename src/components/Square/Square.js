import React from 'react'
import './Square.css'

const Square = ({ value, onClick, index }) => {
  const style = value === "X" ? "square x" : "square o";
  return (
    <>
      <button className={style} onClick={onClick} index={index}>{value}</button>
    </>
  )
}
export default Square
