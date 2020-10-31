import './App.css';
import React, {Component} from 'react';

class App extends Component {
  state = { text: "" };

  changeTextHandler = (event) => {
    this.setState(
      {text: event.target.value}
      );
  }
  render(){
  return (
    <div className="App">
      <input type="text" onChange={this.changeTextHandler}/>
      <label>{this.state.text.length}</label>
    </div>
  )
  };
}

export default App;
