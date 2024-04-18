import './Common.css';
import './Game.css';

function Game() {
    return (
        <div>
            <h1>Game placeholder</h1>
            <canvas id="canvas" width="500" height="500" style={{ border: "1px solid #7a1414" }}></canvas>
            <script src="script.js"></script>
        </div>
    );
}

window.addEventListener(
    'load',
    function () {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var isIdle = true;
        function drawstart(event) {
            context.beginPath();
            context.moveTo(
                event.pageX - canvas.offsetLeft,
                event.pageY - canvas.offsetTop
            );
            isIdle = false;
        }
        function drawmove(event) {
            if (isIdle) return;
            context.lineTo(
                event.pageX - canvas.offsetLeft,
                event.pageY - canvas.offsetTop
            );
            context.stroke();
        }
        function drawend(event) {
            if (isIdle) return;
            drawmove(event);
            isIdle = true;
        }
        function touchstart(event) {
            drawstart(event.touches[0]);
        }
        function touchmove(event) {
            drawmove(event.touches[0]);
            event.preventDefault();
        }
        function touchend(event) {
            drawend(event.changedTouches[0]);
        }

        canvas.addEventListener('touchstart', touchstart, false);
        canvas.addEventListener('touchmove', touchmove, false);
        canvas.addEventListener('touchend', touchend, false);

        canvas.addEventListener('mousedown', drawstart, false);
        canvas.addEventListener('mousemove', drawmove, false);
        canvas.addEventListener('mouseup', drawend, false);
    },
    false
);



export default Game;