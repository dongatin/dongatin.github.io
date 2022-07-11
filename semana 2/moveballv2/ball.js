//Set global variable that would contain the position, velocity and the html element "ball"
var velocityX = 100;
var velocityY = 60;
var positionX = 0;
var positionY = 0;
var reverse = true;
var reverseY = true;
var randomColor;

var ball = document.getElementById('ball');

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
    var Xmin = 0;
    var Xmax = 600;
    var Ymin = 0;
    var Ymax = 600;
   
    if (reverse) {
      positionX = positionX + velocityX;
      }
    else
      {
      positionX = positionX - velocityX;
    }

    if (reverseY) {
      positionY = positionY + velocityY;
      }
    else
      {
      positionY = positionY - velocityY;
    }

    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';

    if(positionX <= Xmin || positionX >= Xmax){
        reverse = !reverse;
        velocityX = Math.floor(Math.random() * (50 - 1)) + 1;
        randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        ball.style.background = randomColor;
    }
    if(positionY <= Ymin || positionY >= Ymax){
        reverseY = !reverseY
        velocityY = Math.floor(Math.random() * (50 - 1)) + 1;
        randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        ball.style.background = randomColor;
    }
}

// This call the moveBall function every 100ms
setInterval(moveBall, 160);
