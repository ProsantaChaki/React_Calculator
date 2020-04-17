import React, {Component} from 'react';
import './App.css';
import Display from "./components/Display";
import ButtonMain from "./components/ButtonMain";
import calculate from "./logic/Calculate"

class App extends Component {
    state ={
        firstNumber: null,
        secondNumber: null,
        operator: null,
        displayNumber: 0,
    }

    buttonCLickHandler = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
        this.setState({'displayNumber':this.state.displayNumber})
        console.log(this.state.firstNumber, this.state.operator, this.state.secondNumber,' ',this.state.displayNumber);

    }

  render() {
        //console.log(this.state.firstNumber)
    return (
        <div className="App">
          <h1>General Calculator</h1>
          <Display displayNumber={this.state.displayNumber}/>
          <ButtonMain buttonClick={this.buttonCLickHandler}/>
          <small>Developed By Prosanta Kumar Chaki</small>
        </div>
    );
  }

}

export default App;
