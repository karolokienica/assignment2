import './App.css';
import React, {Component} from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = { text: "" };

  changeTextHandler = (event) => {
    this.setState(
      {text: event.target.value}
      );
  }

  text = this.state.text;

  displayLetters = () => {
      
  }

  render(){
  return (
    <div className="App">
      <input type="text" onChange={this.changeTextHandler}/>
      <label> {this.state.text.length}</label>
      <ValidationComponent text={this.state.text}/>

    </div>
  )
  };
}

export default App;
