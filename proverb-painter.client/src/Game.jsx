import React, { useRef, useState, useEffect } from 'react';
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

  return (
    <div class="canvasPlacement">
      <div class="gameContainer">
        <canvas id="canvas" ref={canvasRef} width="800" height="500"></canvas>
        <input type="button" value="draw" onClick={() => setToolType('draw')} />
        <input
          type="button"
          value="erase"
          onClick={() => setToolType('erase')}
        />
      </div>
    </div>
  );
}

export default Game;
