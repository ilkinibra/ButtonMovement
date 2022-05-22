let circle = document.querySelector('#box');
let moveBy = 10;
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
    }
});

var pos = [0, 0], box = document.querySelector("#box");
document.querySelector("#controls").onclick = function(e) {
  if(e.target.nodeName === "BUTTON") {
    switch(e.target.textContent) {
      case "Right": {
        box.style.left = `${pos[0] + 15 > 600 ? 600 : pos[0] += 15}px`;
        break;
      }
      case "Left": {
        box.style.left = `${pos[0] - 15 < 0 ? 0 : pos[0] -= 15}px`;
        break;
      }
      case "Down": {
        box.style.top = `${pos[1] + 15 > 600 ? 600 : pos[1] += 15}px`;
        break;
      }
      case "Up": {
        box.style.top = `${pos[1] - 15 < 0 ? 0 : pos[1] -= 15}px`;
        break;
      }
    }
  }
};