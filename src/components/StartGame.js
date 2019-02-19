import React, { Component } from 'react'
//import '../styles/Style.css'
import Cell from './Cell'
import Button from '@material-ui/core/Button';


class Game extends Component{
  constructor(props){
    super();
  }
  state = {

  }
  w = 3;
  h = 3;

  cellAttributes = {
    color: ['blue', 'green', 'red'],
    shape: ['square', 'circle', 'triangle'],
    fill: ['full', 'empty', 'striped'],
  }
  //melhorar essa parada ai. tem que criar o obj num loop !!!!!
  grid = [...Array(this.w * this.h)].map(x =>{
      return {
        color: this.getRandomAttribute(this.cellAttributes.color),
        shape: this.getRandomAttribute(this.cellAttributes.shape),
        fill: this.getRandomAttribute(this.cellAttributes.fill),
      }
  })

  getRandomAttribute(list){
    return  list[Math.floor(Math.random() * list.length)];
  }



  render(){

    return (
      <div>
        <div className="game">
         <Cell
          color={this.getRandomAttribute(this.cellAttributes.color)}
          shape={this.getRandomAttribute(this.cellAttributes.shape)}
          fill={this.getRandomAttribute(this.cellAttributes.fill)}
         />

        </div>


        <Button
          variant="outline"
          color="primary"
          onClick={this.props.menu}
          >Menu
        </Button>
      </div>
    )
  }
}


/*const StartGame = (props) => {
  return (
    <div className="wrapper" >
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
}*/


export default Game;
