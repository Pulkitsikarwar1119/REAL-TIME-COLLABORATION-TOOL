import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './Editor.css';

const socket = io('http://localhost:3002');

function Editor() {
  const [text, setText] = useState('');
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const drawing = useRef(false);

  // ===================== TEXT EDITOR =====================
  useEffect(() => {
    socket.on('text-update', (data) => setText(data));
    return () => socket.off('text-update');
  }, []);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    socket.emit('text-change', newText);
  };

  // ===================== WHITEBOARD INIT =====================
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.border = '1px solid #ccc';

    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctxRef.current = ctx;

    // Listen for drawing from other clients
    socket.on('drawing-data', handleRemoteDrawing);

    return () => socket.off('drawing-data');
  }, []);

  // ===================== DRAW LOCAL + EMIT =====================
  const startDrawing = ({ nativeEvent }) => {
    drawing.current = true;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);

    socket.emit('drawing-data', { type: 'begin', offsetX, offsetY });
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing.current) return;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();

    socket.emit('drawing-data', { type: 'draw', offsetX, offsetY });
  };

  const stopDrawing = () => {
    drawing.current = false;
    ctxRef.current.closePath();
    socket.emit('drawing-data', { type: 'end' });
  };

  // ===================== HANDLE INCOMING DRAWING =====================
  const handleRemoteDrawing = (data) => {
    const ctx = ctxRef.current;
    if (data.type === 'begin') {
      ctx.beginPath();
      ctx.moveTo(data.offsetX, data.offsetY);
    } else if (data.type === 'draw') {
      ctx.lineTo(data.offsetX, data.offsetY);
      ctx.stroke();
    } else if (data.type === 'end') {
      ctx.closePath();
    }
  };

  return (
    <div className="editor-wrapper split">
      <div className="editor-container">
        <h1>📝 Real-Time Collaborative Editor</h1>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Start typing..."
        />
      </div>

      <div className="whiteboard-container">
        <h2>🖌️ Whiteboard</h2>
        <button onClick={() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  socket.emit('drawing-data', { type: 'clear' });
}}>Clear</button>

        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  );
}

export default Editor;
