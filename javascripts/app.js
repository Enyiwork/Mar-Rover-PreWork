// Rover Object Goes Here
// ======================

// ======================

var rover = {
direction: 'N',
x: 0,
y: 0,
travelLog: (xi, yi)
};
var xi = 0;
var yi = 0;

function turnLeft(rover) {
    switch (rover.direction) {
    case 'N':
    rover.direction = 'W';
    break;
    case 'S':
    rover.direction = 'E';
    break;
    case 'E':
    rover.direction = 'S';
    break;
    case 'W':
    rover.direction = 'N';
    break;
    default:
    break;
    }
    console.log('turned right');
}

function turnRight(rover) {
    switch (rover.direction) {
    case 'N':
    rover.direction = 'E';
    break;
    case 'S':
    rover.direction = 'W';
    break;
    case 'E':
    rover.direction = 'N';
    break;
    case 'W':
    rover.direction = 'S';
    break;
    default:
    break;
    }
    console.log('turned left');
}

function moveForward(rover){
  if (rover.direction === "N" ){
  rover.y -= 1;
} else if (rover.direction === "S"){
  rover.y += 1;
} else if ( rover.direction === "E"){
  rover.x += 1;
} else if (rover.direction === "W"){
  rover.x -= 1;
} else {
  console.log("Cann't moveForward")
  }
}
function moveBackward(rover){
  if (rover.directin === "N"){
    rover.y += 1;
  } else if (rover.direction === "S"){
    rover.y -= 1;
  } else if (rover.direction === "E"){
    rover.x -= 1;
  } else if (rover.direction === "W"){
    rover.x += 1;
  } else {
    console.log("Cann't moveBackward")
  }
}


function roverCommand(moves){
  switch (moves) {
    case "f":
    moveForward(rover);
    break;
    case "r":
    turnRight(rover);
    break;
    case "l":
    turnLeft(rover);
    break;
    case "b":
    moveBackward(rover);
    break;
    default:
    console.log("Not Valid Commands");
  }
}

 var input = prompt("Move the rover by press (f)orward, (r)ight, (l)eft, (b)ackward,");

  	switch (input) {
		case 'f':
		moveForward(rover);
		break;
		case 'r':
		turnRight(rover);
		break;
		case 'l':
	  turnLeft(rover);
		break;
		case 'b':
		moveBackward(rover);
		break;
		default:
		console.log('not a valid command');
		break;
		}
