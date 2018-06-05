import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    username: 'Laurent'
  }

  changedNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      fontFamily: 'impact'
    };

    return (
      <div className="App">
        <h1 style={style}>Exercice 1 from "React, the complete guide"</h1>
        <UserOutput msg='Hi there!' name='Max' />
        <UserOutput msg='Exercice made by:' name={this.state.username} />
        <UserInput changed={this.changedNameHandler} origin={this.state.username} />
      </div>
    );
  }
}

export default App;
