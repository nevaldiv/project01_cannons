// var p1Name;
// var p2Name;
// var angle;
// var p1Model;
// var p2Model;
// var particle;
// var terrain;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var velocity;
//multiple parsed input value times 3.14/180 for conversion to radians
var theta;


//interval between frames, intent is to be used later as a settimeout
//refresh value between frame renders. experiment with number, aim for 60 fps?
var interval = 100;

var t = 0;

//particle start positions for now
var yInitial = 400;
var x_n;
var y_n;
var xVelocity = (velocity * Math.cos(theta));










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



function world() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext("2d");
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'black';
  context.fillRect(0, 400, canvas.width, 50);




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
      console.log(t);
      //arbitrary constant -2.5 to keep velocity input guesses high
      velocity = velocity - 2.5;

      //Velocity of Y
      y_n = yInitial - (velocity * t * Math.sin(theta));
      console.log(y_n);
      //simulate gravity on Y
      y_n = y_n + (t + (.3 * 9.8 * t));
      console.log(y_n);
      //Constant velocity over time
      x_n = (x_n + xVelocity);
      console.log(x_n);


      //if y bullet position underground release 'holds'
      if (y_n > yInitial) {
        clearInterval(refreshInterval);
        launchButton.disabled = false;
        return;
      }
      // draw projectile
      ctx.fillRect(x_n, y_n, 3, 3);


      deltaX = x_n;
      deltaY = y_n;





    }

}

























// var deltaX = x_n;
// var deltaY = y_n;



// function Bullet(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Bullet.prototype.paint = function(ctx) {
//   //these are constant properties of every ball painted to the screen i guess
//   this.x += deltaX;
//   this.y += deltaY;

//   //ctx just makes a new ball onto the canvas
//   //radius being its radius
//   ctx.fillStyle = 'black';
//   ctx.fillRect(this.x,this.y, 3, 3);

// }




// var bullets = [];
// bullets.push(new Bullet(50, 400));

// requestAnimationFrame(function draw() {
//     ctx.fillRect(0, 0, 10, 10);



//   //for (var i = 0; i < balls.length; i++) {
//     bullets[0].paint(ctx);
//   //}
//   requestAnimationFrame(draw);
// });







//$(function() {
//world();
//})

