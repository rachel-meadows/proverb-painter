import { useRef, useState, useEffect } from 'react';
import './Common.css';
import './Game.css';

function Game() {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [lastMousePosition, setLastMousePos] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [toolType, setToolType] = useState('draw');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      setContext(context);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      setLastMousePos({ x: mouseX, y: mouseY });
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      if (isMouseDown && context) {
        context.beginPath();
        if (toolType === 'draw') {
          context.globalCompositeOperation = 'source-over';
          context.strokeStyle = 'black';
          context.lineWidth = 3;
        } else {
          context.globalCompositeOperation = 'destination-out';
          context.lineWidth = 15;
        }
        context.moveTo(lastMousePosition.x, lastMousePosition.y);
        context.lineTo(mouseX, mouseY);
        context.lineJoin = context.lineCap = 'round';
        context.stroke();
        setLastMousePos({ x: mouseX, y: mouseY });
      }
    };

    if (canvas) {
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mouseup', handleMouseUp);
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [context, isMouseDown, lastMousePosition, toolType]);

  const [guesses, setGuesses] = useState([]);
  const [newGuess, setNewGuess] = useState('');

  const handleSendGuess = () => {
    if (newGuess.trim() !== '') {
      setGuesses([...guesses, { text: newGuess, liked: false }]);
      setNewGuess('');
    }
  };

  const handleLikeGuess = (index) => {
    const updatedGuesses = guesses.map((guess, i) =>
      i === index ? { ...guess, liked: !guess.liked } : guess
    );
    setGuesses(updatedGuesses);
  };

  return (
    <div className="game-pageContainer">
      <div className="game-column game-leftThird">
        <div className="game-timer">51:03</div>
        <div className="game-playersList">
          <h1 className="centreText">Players:</h1>
          <div className="common-horizontalFlex">
            <div className="common-avatar smallAvatar"></div>
            <p className="displayData">Bob (450)</p>
          </div>
          <div className="common-horizontalFlex">
            <div className="common-avatar smallAvatar"></div>
            <p className="displayData">Alice (600)</p>
          </div>
        </div>
      </div>
      <div className="game-column game-centreThird">
        <div className="game-canvasPlacement">
          <canvas
            className="game-canvas"
            ref={canvasRef}
            width="600"
            height="400"
          ></canvas>
          <div className="common-horizontalFlex">
            <input
              type="button"
              value="draw"
              onClick={() => setToolType('draw')}
            />
            <input
              type="button"
              value="erase"
              onClick={() => setToolType('erase')}
            />
          </div>
        </div>
        <div className="game-proverbContainer">
          <p>Your proverb is:</p>
          It is always darkest before the dawn.
        </div>
      </div>
      <div className="game-column game-rightThird">
        <div className="game-guessContainer">
          <div className="game-guessBox">
            {guesses.map((guess, index) => (
              <div key={index} className="game-guess">
                <p>{guess.text}</p>
                <button
                  className={`game-likeButton ${guess.liked ? 'liked' : ''}`}
                  onClick={() => handleLikeGuess(index)}
                >
                  {guess.liked ? '❤️' : '♡'}
                </button>
              </div>
            ))}
          </div>
          <div className="game-guessInput">
            <input
              type="text"
              value={newGuess}
              onChange={(e) => setNewGuess(e.target.value)}
              placeholder="Type a guess"
            />
            <button onClick={handleSendGuess}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
