console.log("Physics loaded...");


// given: xInitial, timeElapsed (Δt), velocity (v), angle (θ)
// we want: xCurrent

// xCurrent == xInitial + Δt * vHorizontal
// vHorizontal == v * Math.cos(angleInRadians)
// angleInRadians == (Math.PI/180) * θ

function radians(angle) {
  return (Math.PI/180) * angle;
}

function vHorizontal(v, angle) {
  return v * Math.cos(radians(angle));
}

function xCurrent(xInitial, timeElapsed, v, angle) {
  return xInitial + (timeElapsed * vHorizontal(v, angle));
}


// yCurrent == yInitial + yDistance + gravityDistance
// gravityDistance == 0.5 * g * (Δt * Δt)
// g == 0.0004 px/(ms^2) // FROM PhysicsJS
// yDistance == -vVertical * Δt
// vVertical == v * Math.sin(angleInRadians)

Gravity = 0.0004;

function vVertical(v, angle) {
  return v * Math.sin(radians(angle));
}

function yDistance(timeElapsed, v, angle) {
  return -(timeElapsed * vVertical(v, angle));
}

function gravityDistance(timeElapsed, g) {
  return 0.5 * g * (timeElapsed * timeElapsed);
}

function yCurrent(yInitial, timeElapsed, v, angle) {
  return yInitial + yDistance(timeElapsed, v, angle) + gravityDistance(timeElapsed, Gravity);
}
