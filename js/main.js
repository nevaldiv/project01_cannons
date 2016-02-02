var p1Name;
var p2Name;
var angle;
var p1Model;
var p2Model;
var particle;
var terrain;

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


function world() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext("2d");
    context.rect(0, 400, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.strokeStyle = 'red';
    context.fill();
    context.stroke();
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

    //gen bullet
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'black';
    launchButton.disabled = true;

    var refreshInterval = setInterval(function() {
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
        ctx.fillRect(x_n, y_n, 2, 2);
        }
}


$(function() {

world();


})

