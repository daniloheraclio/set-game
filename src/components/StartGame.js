import React from 'react'
import '../styles/Style.css'
import Button from '@material-ui/core/Button';

const StartGame = (props) => {
  return (
    <div clssName="wrapper" >
      <div className="container">
        <div className="row">
          <div class="square">1x1</div>
          <div class="square">2x1</div>
          <div class="square">3x1</div>
        </div>
        <div className="row">
          <div class="square">2x1</div>
          <div class="square">2x2</div>
          <div class="square">2x3</div>
        </div>
        <div className="row">
          <div class="square">3x1</div>
          <div class="square">3x2</div>
          <div class="square">3x3</div>
        </div>
      </div>
      <Button
        variant="outline"
        color="primary"
        style={style.button}
        onClick={props.menu}
        >
      Menu
      </Button>
    
    </div>
  )
}

const style = {
  button: {
    margin: 15
  }
}


export default StartGame
