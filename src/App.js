import './App.css';
import React, {Component} from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  // state = { text: "" };

  // changeTextHandler = (event) => {
  //   this.setState(
  //     {text: event.target.value}
  //     );
  // }

  // displayLetters = (textString) => {
  //   const textArray = textString.split('');
  //   const array = [];
  //   for(let i = 0; i < textArray.length; i++){
  //     array[i] = { index: i, letter: textArray[i]}
  //   }
  //   return array;
  // }

  // deleteLetter = (array, index) => {
  //    array.splice(index, 1);
  //    const letters = [];
  //   for(let i = 0; i < array.length; i++){
  //     array[i] = { index: i, letter: array[i].letter}
  //     letters[i] = array[i].letter
  //   }
     
  //    const text = letters.join('')
     
  //    this.setState({text: text})
     
  // }

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }

  render(){
    // const array = this.displayLetters(this.state.text)
    // let letters =(
    //   this.displayLetters(this.state.text).map(item => {
    //     return(
      
    //     <CharComponent letter={item.letter} click={() => this.deleteLetter(array, item.index)}/>
      
    //     )
    // })
    // )
    
    const charList = this.state.userInput.split('').map((char, index) => {
      return <CharComponent character={char} key={index} clicked={() => this.deleteCharHandler(index)}/>
    })
  return (
    <div className="App">
      <input type="text" onChange={/*this.changeTextHandler*/this.inputChangeHandler} value={/*this.state.text*/this.state.userInput}/>
      <p>{this.state.userInput}</p>
      <ValidationComponent inputLength={this.state.userInput.length}/>
      {charList}
    </div>
  )
  };
}

// <label> {this.state.text.length}</label>
//       <ValidationComponent text={this.state.text}/>
//       {letters}

export default App;
