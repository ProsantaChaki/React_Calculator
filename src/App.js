import React, {Component} from 'react';
import './App.css';
import Display from "./components/Display";
import Button from "./components/Button";
import ButtonMain from "./components/ButtonMain";

class App extends Component {



  render() {
    return (
        <div className="App">
          <h1>Working good</h1>
          <Display/>
          <ButtonMain/>
        </div>
    );
  }

}

export default App;
