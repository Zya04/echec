import React, { Component } from 'react';
import SceneBoard from './SceneBoard.js'

class Board extends Component {
    constructor(props){
        super(props);
        this.state= {};
    }

    
    render (){
        const fill = 'black' ? 'black' : 'white';
        const stroke = 'black' ? 'white' : 'black';

        return (
            <div style = {{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%',
            }}>
                <SceneBoard/>
            </div>
        )
    }
}

export default Board