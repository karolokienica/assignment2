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

  displayLetters = (textString) => {
    const textArray = textString.split('');
    const array = [];
    for(let i = 0; i < textArray.length; i++){
      array[i] = { index: i, letter: textArray[i]}
    }
    return array;
  }

  deleteLetter = (array, index) => {
     array.splice(index, 1);
     const letters = [];
    for(let i = 0; i < array.length; i++){
      array[i] = { index: i, letter: array[i].letter}
      letters[i] = array[i].letter
    }
     
     const text = letters.join('')
     
     this.setState({text: text})
     
  }

  render(){
    const array = this.displayLetters(this.state.text)
    let letters =(
      this.displayLetters(this.state.text).map(item => {
        return(
      
        <CharComponent letter={item.letter} click={() => this.deleteLetter(array, item.index)}/>
      
        )
    })
    )
    
  return (
    <div className="App">
      <input type="text" onChange={this.changeTextHandler} value={this.state.text}/>
      <label> {this.state.text.length}</label>
      <ValidationComponent text={this.state.text}/>
      {letters}
    </div>
  )
  };
}

export default App;
