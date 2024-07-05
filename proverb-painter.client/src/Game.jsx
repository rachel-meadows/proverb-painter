import React, { useRef, useState, useEffect } from 'react';
import './Common.css';
import './Game.css';

function Game() {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [toolType, setToolType] = useState('draw');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      setCtx(context);
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
      if (isMouseDown && ctx) {
        ctx.beginPath();
        if (toolType === 'draw') {
          ctx.globalCompositeOperation = 'source-over';
          ctx.strokeStyle = 'black';
          ctx.lineWidth = 3;
        } else {
          ctx.globalCompositeOperation = 'destination-out';
          ctx.lineWidth = 15;
        }
        ctx.moveTo(lastMousePos.x, lastMousePos.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.stroke();
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
  }, [ctx, isMouseDown, lastMousePos, toolType]);

  return (
    <div>
      <canvas id="canvas" ref={canvasRef} width="800" height="500"></canvas>
      <input type="button" value="draw" onClick={() => setToolType('draw')} />
      <input type="button" value="erase" onClick={() => setToolType('erase')} />
    </div>
  );
}

export default Game;
