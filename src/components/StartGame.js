import React, { Component } from 'react'
//import '../styles/Style.css'
import Cell from './Cell'
import Button from '@material-ui/core/Button';


class Game extends Component {
  constructor(props) {
    super();
  }
  state = {

  }
  //those are class properties, hence we dont use let, const, var...
  w = 3;
  h = 3;
  randColor = null;
  cellAttributes = {
    color: ['blue', 'green', 'red'],
    shape: ['square', 'circle', 'triangle'],
    fill: ['full', 'empty', 'striped'],
  }
  colors = {
    blue: '#209eff',
    red: '#e13d58',
    green: '#5cd85a',
  }


  grid = [...Array(this.w * this.h)].map(x => {
    this.randColor = this.getRandomAttribute(this.cellAttributes.color);
    return <Cell
      color={this.colors[this.randColor]}
      colorName={this.randColor}
      shape={this.getRandomAttribute(this.cellAttributes.shape)}
      fill={this.getRandomAttribute(this.cellAttributes.fill)}
    />

  })

  getRandomAttribute(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  render() {

    return (
      //SVG pattern definition...we should probably put it in a high order component
      <div>
        <svg width="0" height="0" viewBox="0 0 0 0">
          <defs>
            <pattern id="stripedblue" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: this.colors.blue, strokeWidth: 3 }} />
            </pattern>
            <pattern id="stripedred" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: this.colors.red, strokeWidth: 3 }} />
            </pattern>
            <pattern id="stripedgreen" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: this.colors.green, strokeWidth: 3 }} />
            </pattern>
          </defs>
        </svg>
        <div className="game">
          {this.grid}
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
