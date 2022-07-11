//Set global variable that would contain the position, velocity and the html element "ball"
var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = true;

var ball = document.getElementById('ball');

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
    var Xmin = 0;
    var Xmax = 300;
    var Ymin = 0;
    var Ymax = 300;

    if (reverse) {
      positionX = positionX + velocity;
      positionY = positionY + velocity;
      }
    else
      {
      positionX = positionX - velocity;
      positionY = positionY - velocity;
    }

    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';

    if(positionX <= Xmin || positionX >= Xmax || positionY <= Ymin || positionY >= Ymax){
        reverse = !reverse;
    }

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
