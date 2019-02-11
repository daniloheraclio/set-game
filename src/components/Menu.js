import React from 'react'
import '../styles/Style.css';

const menu = (props) => {

  return (
    <div>
      <h1>Set Game</h1>
      <h3 onClick={props.startGame} className="link">Start a New Game</h3>
      <h3 onClick={props.howToPlay} className="link">How to play</h3>
      <h3 onClick={props.about} className="link">About</h3>
    </div>
  )
}

export default menu
