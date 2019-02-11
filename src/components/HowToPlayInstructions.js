import React from 'react'
import Button from '@material-ui/core/Button';

const howToPlayInstructions = (props) => {
  return (
    <div>
      <h1>How to Play</h1>
      <p>Try and find as many sets as you can in 2 minutes.</p>
      <p>A valid set consist od three tiles that meet ALL of the conditions:</p>
      <ol>
        <li>They all have the same shape, or they have three diferents shapes.</li>
        <li>They all have the same color, or they have three diferents colors.</li>
        <li>They all have the same shading, or they have three diferents shadings.</li>
      </ol>
      <Button
       variant="outlined"
       style={style.button}
       onClick={props.menu}
       >Back to Menu</Button>
      <Button
       variant="outlined"
       color="primary"
       style={style.button}
       onClick={props.valid}
       >Next</Button>
    </div>
  )
}

const style = {
  button: {
    margin: 15
  }
}

export default howToPlayInstructions
