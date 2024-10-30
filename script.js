const ball = document.querySelector('.ball');
const gameContainer = document.querySelector('.game-container');

let positionX = 0;
let positionY = 0;
let velocityX = 2;
let velocityY = 2;

function update() {
  positionX += velocityX;
  positionY += velocityY;

  // Bounce off the walls
  if (positionX + ball.clientWidth > gameContainer.clientWidth || positionX < 0) {
    velocityX = -velocityX;
  }
  if (positionY + ball.clientHeight > gameContainer.clientHeight|| positionY < 0) {
    velocityY = -velocityY;
  }

  ball.style.left = `${positionX}px`;
  ball.style.top = `${positionY}px`;

  requestAnimationFrame(update);
}

update();