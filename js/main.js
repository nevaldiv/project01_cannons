// var p1Name;
// var p2Name;
// var angle;
// var p1Model;
// var p2Model;
// var particle;
// var terrain;

// //BASICS. function dictates start screen to game.
// function getNames(p1Name, p2Name) {
//   var p1Name = prompt("Good Hello", "please enter p1 name");
//   var p2Name = prompt("Good Hello", "please enter p1 name");
//   console.log(p1Name);
//   console.log(p2Name);
// }
// getNames();

// //MVP of getting and parsing into numbers angle and velocity
// function getAngle(playerAngle, angle) {
//   var playerAngle = prompt("Angle:", "Please enter the Angle to shoot");
//   //parsing string into num, unsure if nessessary yet.
//   var angle = parseInt(playerAngle);
//   console.log(angle);
// }
// getAngle();

// //MVP of getting and parsing into numbers angle and velocity
// function getAngle(playerAngle, angle) {
//   var playerAngle = prompt("Angle:", "Please enter the Angle to shoot");
//   //parsing string into num, unsure if nessessary yet.
//   var angle = parseInt(playerAngle);
//   console.log(angle);
// }
// getAngle();

// var Projectile = function(xpos,ypos,key3,key4) {
//   this.xloc = xpos;
//   this.yloc = ypos;
//   this.data = key3;
//   this.data2= key4;
// }

// NOW we bring it all together

var shot = {
  xInitial: 100,
  yInitial: 300,
  velocity: 0.25,  // px/ms <- 250px/s
  angle:    45  // degrees
};

function positionAtTime(timeElapsed) { // in ms!
  return [
    xCurrent(shot.xInitial, timeElapsed, shot.velocity, shot.angle),
    yCurrent(shot.yInitial, timeElapsed, shot.velocity, shot.angle)
  ];
};

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

function drawCanvas() {
  // clear it!
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw background
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw land
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 400, canvas.width, 50);
}


function drawCircle(coordinates) {
  ctx.beginPath();

  ctx.arc(coordinates[0], coordinates[1], 8, 0, Math.PI*2);
  ctx.closePath();

  ctx.fillStyle = "indianred";
  ctx.fill();
}

var time = 0;

function renderShot() {
  drawCanvas();
  drawCircle(positionAtTime(time));
  console.log("Look out below!!!");

  time += 10;
  if (positionAtTime(time)[1] < canvas.height) {
    setTimeout(renderShot, 10);
  }
}

function fireCanón(newShot) {
  time = 0;
  shot.xInitial = newShot.xInitial || shot.xInitial;
  shot.yInitial = newShot.yInitial || shot.yInitial;
  shot.velocity = newShot.velocity || shot.velocity;
  shot.angle    = newShot.angle    || shot.angle;
  renderShot();
}


function fire() {
    var canvas = document.getElementById('myCanvas');
    var angleInput = document.getElementById('angle');
    var velocityInput = document.getElementById('velocity');
    var launchButton = document.getElementById('launchButton');


    var velocity = velocityInput.value;
    //multiple parsed input value times 3.14/180 for conversion to radians
    var theta = (angleInput.value) * (Math.PI/180);


    //interval between frames, intent is to be used later as a settimeout
    //refresh value between frame renders. experiment with number, aim for 60 fps?
    var interval = 100;




    var t = 0;

    //particle start positions for now
    var yInitial = 400;
    var x_n = 50;
    var y_n = 0;
    //Velocity of our object along the x axis.
    var xVelocity = (velocity * Math.cos(theta));

    //draw bullet
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'black';
    launchButton.disabled = true;

    //render my ctx(in this case, bullet) every 'interval'
    var refreshInterval = setInterval(function() {
      world();
      render(ctx);
    }, interval);

    //sooooo much of this was hardcoded just to work, i fear
    //that going further will require abandoning it all
    function render(ctx) {

      //time incremental increase
      t = t + 1;
      //arbitrary constant -2.5 to keep velocity input guesses high
      velocity = velocity - 2.5;

      //Velocity of Y
      y_n = yInitial - (velocity * t * Math.sin(theta));
      //simulate gravity on Y
      y_n = y_n + (t + (.3 * 9.8 * t));
      //Constant velocity over time
      x_n = (x_n + xVelocity);


      //if y bullet position underground release 'holds'
      if (y_n > yInitial) {
        clearInterval(refreshInterval);
        launchButton.disabled = false;
        return;
      }
      // draw projectile
      ctx.fillRect(x_n, y_n, 3, 3);
    }
}




//$(function() {
//world();
//})
