import React, { Component } from 'react';
import SceneBoard from './SceneBoard.js';
import './BoardStyles.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let squares = [];
    let rows = [];

    for (var j = 0; j < 8; j++) {
      squares.push(<div className='square' />);
    }
    for (var i = 0; i < 8; i++) {
      rows.push(<div className='row'>{squares}</div>);
    }
    return (
      <div className='main-board'>
        {rows}
        <div />
      </div>
    );
  }
}

export default Board;
