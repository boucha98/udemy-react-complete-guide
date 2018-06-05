import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {

  state = {
    str: ''
  }

  stringHandler = (event) => {
    this.setState({ 
      str: event.target.value
    })
  }

  deleteLetterHandler = (letter, index) => {
    let tmpStr = this.state.str.split('');
    tmpStr.splice(index, 1);
    tmpStr = tmpStr.join('');
    this.setState({
      str: tmpStr
    })
  }

  render() {
    let lettersArray = null;
    if ( this.state.str ) {
      lettersArray = this.state.str.split('');
      lettersArray = (
        <div>
          {
            lettersArray.map((letter, index) => {
              return <CharComponent 
                        letter={letter}
                        click={ () => this.deleteLetterHandler(letter, index) } 
                        key={ letter + index } />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <p>Please enter your text: </p>
        <input type='text' onChange={this.stringHandler} value={this.state.str} />
        <p>Length: { this.state.str ? this.state.str.length : 0 }</p>
        <ValidationComponent len={this.state.str ? this.state.str.length : 0} />
        <p>Click on the letters below to delete it</p>
        {lettersArray}
      </div>
    );
  }
}

export default App;
