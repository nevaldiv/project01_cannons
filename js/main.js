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


function World() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext("2d");
    context.rect(0, 400, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.strokeStyle = 'red';
    context.fill();
    context.stroke();
}


$(function() {

World();










})

