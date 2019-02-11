import React, { Component } from 'react'
import Menu from './Menu';
import HowToPlayInstructions from './HowToPlayInstructions';
import HowToPlayValid from './HowToPlayValid';
import HowToPlayInvalid from './HowToPlayInvalid';
import About from './About';
import StartGame from './StartGame';



export class MainGame extends Component {
 
  state = {
    step: 0
  }

  nextStepHandler = (n) => {
    const { step } = this.state;
    this.setState({
      step: n
    })
  }

  render() {
    const { step } = this.state;

    switch(step) {
      case 0:
        return (
          <Menu 
            startGame={this.nextStepHandler.bind(this, 1)}
            howToPlay={this.nextStepHandler.bind(this, 2)}
            about={this.nextStepHandler.bind(this, 5)}
          />
        )
      case 1: 
        return (
          <StartGame 
            menu={this.nextStepHandler.bind(this, 0)}    
          />
        )
      case 2:
        return (
          <HowToPlayInstructions
            menu={this.nextStepHandler.bind(this, 0)}
            valid={this.nextStepHandler.bind(this, 3)}
          />
        )
      case 3 :
        return (
          <HowToPlayValid
           instructions={this.nextStepHandler.bind(this, 2)}
           invalid={this.nextStepHandler.bind(this, 4)}
          />
        )
      case 4 :
        return (
          <HowToPlayInvalid
           valid={this.nextStepHandler.bind(this, 3)}
           menu={this.nextStepHandler.bind(this, 0)}
          />
        )
      case 5 :
        return (
          <About
           menu={this.nextStepHandler.bind(this, 0)} 
          />
        )
      default: 
          return <h1>Error</h1>
    }
  }
  
}

export default MainGame
