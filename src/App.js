import React, { Component } from 'react';
import './App.css';
import Board from './template/chess_board/ContainerBoard.js' ;

class App extends Component {
  render() {
    return (
      <Board style={{
        width: '100%',
          height: '100%',
      }}/>
    );
  }
}

export default App;
