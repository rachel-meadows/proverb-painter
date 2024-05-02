import './Common.css';
import './Game.css';
import React from 'react';
import CanvasDraw from 'react-canvas-draw';

function Game() {
    const lazyRadius = 5;
    const brushRadius = 20;

    return (
        <div className="gameContainer">
                <h1>Draw the proverb, xyz:</h1>
            <CanvasDraw
                brushColor='blue'
                lazyRadius={lazyRadius}
                brushRadius={brushRadius}
                hideGrid
            />
        </div>
    );
}

export default Game;