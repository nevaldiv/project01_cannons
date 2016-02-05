var bullet;
var ticker = 0;
var victory;

var canvas = document.getElementById('myCanvas');
var angleInput = document.getElementById('angle');
var velocityInput = document.getElementById('velocity');
var launchButton = document.getElementById('launchButton');
var ctx = canvas.getContext("2d");

//example structure for a shot object
//included at top for testing fireCanón(shot);
var shot = {
  xInitial: 100,
  yInitial: 300,
  velocity: 0.25,  // px/ms <- 250px/s
  angle:    45  // degrees
};

var Pow = function(xinit,yinit,vel,angle) {
  this.xInitial = xinit;
  this.yInitial = yinit;
  this.velocity = vel;
  this.angle    = angle;
}


function positionAtTime(timeElapsed) { // in ms!
  return [
    xCurrent(shot.xInitial, timeElapsed, shot.velocity, shot.angle),
    yCurrent(shot.yInitial, timeElapsed, shot.velocity, shot.angle)
  ];
};


function drawCanvas() {
  // clear it!
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw background
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw land
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 400, canvas.width, 50);

  drawP1Tank();
  drawP2Tank();
}

function drawP1Tank() {

  //save ctx settings since therell be ctx rotation later
  ctx.save();

  ctx.translate(50,364);
  ctx.strokeStyle = "#888";
  ctx.lineWidth = 2;

  ctx.strokeRect(5, 20, 30, 5); // body
  ctx.strokeRect(15, 15, 10, 5); //head

  //treads
  ctx.beginPath();
  ctx.lineTo(5, 35);
  ctx.lineTo(35, 35);
  ctx.stroke();
  ctx.beginPath();

  //wheels
  ctx.arc(5, 30, 5, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(15, 30, 5, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(25, 30, 5, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(35, 30, 5, 0, Math.PI*2, false);
  ctx.stroke();
  //barell
  ctx.translate(27,18);
  ctx.rotate(315 * Math.PI / 180);
  ctx.strokeRect(0, 0, 17, 2);
  //restores the rotation to 0
  ctx.restore();

}
function drawP2Tank() {


  ctx.save();
  // translate context to center of canvas
  ctx.translate(canvas.width / 2, canvas.height / 2);

  // flip context vertically
  ctx.scale(-1, 1);
  //save ctx settings since therell be ctx rotation later

  ctx.translate(-300,139);
  ctx.strokeStyle = "#888";
  ctx.lineWidth = 2;

  ctx.strokeRect(5, 20, 30, 5); // body
  ctx.strokeRect(15, 15, 10, 5); //head

  //treads
  ctx.beginPath();
  ctx.lineTo(5, 35);
  ctx.lineTo(35, 35);
  ctx.stroke();
  ctx.beginPath();

  //wheels
  ctx.arc(5, 30, 5, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(15, 30, 5, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(25, 30, 5, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(35, 30, 5, 0, Math.PI*2, false);
  ctx.stroke();
  //barell
  ctx.translate(27,18);
  ctx.rotate(315 * Math.PI / 180);
  ctx.strokeRect(0, 0, 17, 2);
  //restores the rotation to 0
  ctx.restore();

}

function drawCircle(coordinates) {
  ctx.beginPath();

  ctx.arc(coordinates[0], coordinates[1], 4, 0, Math.PI*2);
  ctx.closePath();

  ctx.fillStyle = "peach puff";
  ctx.fill();
}



var time = 0;
function renderShot() {
  drawCanvas();
  drawCircle(positionAtTime(time));
  console.log("Look out below!!!");
  time += 10;


  if(checkPlayerHitByBullet(time) === true) {
        console.log("TEST");

  } else {
    if (positionAtTime(time)[1] < 410) {
      setTimeout(renderShot, 10); //loop by calling self every 10ms if Pow above horizon
    } else {
      ticker +=1;
      whosTurnIsIt(ticker);
    }
  }
}


//phil put this function in, I opted for contructor
//function "Pow" instead
function fireCanón(newShot) {
  time = 0;
  shot.xInitial = newShot.xInitial || shot.xInitial;
  shot.yInitial = newShot.yInitial || shot.yInitial;
  shot.velocity = newShot.velocity || shot.velocity;
  shot.angle    = newShot.angle    || shot.angle;

  renderShot();
}


//my fire function

function p1fire() {
var angleInput = document.getElementById('angle1');
var velocityInput = document.getElementById('velocity1');
var launchButton1 = document.getElementById('launchButton1');
var vel = velocityInput.value;
//multiple parsed input value times 3.14/180 for conversion to radians
var theta = (angleInput.value)

x = 95
y = 365
angle = theta;
vel = vel/100
var bullet = new Pow(x,y,vel,angle)
fireCanón(bullet);
launchButton1.disabled = true;
launchButton2.disabled = true;
}

function p2fire() {
var angleInput = document.getElementById('angle2');
var velocityInput = document.getElementById('velocity2');
var launchButton2 = document.getElementById('launchButton2');
var vel = velocityInput.value;
var adjVel = vel/100
var theta = angleInput.value;
var adjtheta = 180 - theta;  //mirrors the input angle across the the y axis
x = 655
y = 365
// angle = theta;
vel = vel/100
var bullet = new Pow(x,y,adjVel,adjtheta)
fireCanón(bullet);
launchButton1.disabled = true;
launchButton2.disabled = true;
}



function whosTurnIsIt(count) {

  if(count % 2 === 0) {
  console.log("player 1's turn")
  launchButton1.disabled = false;

  } else {
  console.log("player 2's turn")
  launchButton2.disabled = false;
  }

}






function checkPlayerHitByBullet(time) {
//if bullet position is inside tank hitboxes,
//add or subtract
  if(
      (positionAtTime(time)[0] > 664  && positionAtTime(time)[1] > 381)  &&
      (positionAtTime(time)[0] < 697  && positionAtTime(time)[1] < 398)
    ) {

      console.log("PLAYER 2 BEEN HIT!")
      p1Wins();
      return true;
      }
  if(
      (positionAtTime(time)[0] > 55  && positionAtTime(time)[1] > 381)  &&
      (positionAtTime(time)[0] < 86  && positionAtTime(time)[1] < 398)
    ) {

      console.log("PLAYER 1 BEN BIT")
      p2Wins();
      return true;
      }

  return false;
}



function p1Wins(){
  console.log("bullet entered p2 tank area");
}

function p2Wins(){
  console.log("bullet entered p1 tank area");
}

//need a function to detect collision
// function collisionDetect(default) {

// }


// function playersStillAlive(empty) {
//  if (victory )

// }

// function victoryToggle(default){

// }
// function letsPlayAGame(empty) {
//   if (playersStillAlive() === true
// }




drawCanvas();




//a commented out an event listener for determining 'hitbox' pixels on my canvas
//that the ball has to cross to declare victory
//(had to hardcode it a bit in that sense)
// canvas.addEventListener("mousedown", getPosition, false);

// function getPosition(event)
// {
//   var x = event.x;
//   var y = event.y;

//   var canvas = document.getElementById("myCanvas");

//   x -= canvas.offsetLeft;
//   y -= canvas.offsetTop;

//   alert("x:" + x + " y:" + y);
// }



//$(function() {
//world();
//})


