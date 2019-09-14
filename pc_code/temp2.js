//var SerialPort = require("serialport");
const GamepadController = require('gamepadcontroller');
const gamepad = new GamepadController(0 /* takes an index, 0 - 3  */);
gamepad.onStickMove(0, e => console.log(e, 'Left stick moved'));

/*var port = new SerialPort('/dev/cu.wchusbserial1420', {
  baudRate: 115200
});

*/
/*
gamepad.init();

console.log(gamepad.numDevices());

for (var i = 0, l = gamepad.numDevices(); i < l; i++) {
  var d = gamepad.deviceAtIndex(i);
  console.log(i, d);
  console.log(d.numAxes);
  console.log(d.numButtons);
}
// Create a game loop and poll for events 
setInterval(gamepad.processEvents, 16);
// Scan for new gamepads as a slower rate 
setInterval(gamepad.detectDevices, 500);

var sendCommand = function() {
  console.log("send")
}

var joypad = {
  axis: [.0, .0, .0, .0],
  buttons: new Array(10)
}

// Listen for move events on all gamepads 
gamepad.on("move", function (id, axis, value) {
  if (axis === 0 || axis === 1) {
    console.log("move", {
      id: id,
      axis: axis,
      value: value,
    });
  }
});
 
// Listen for button up events on all gamepads 
gamepad.on("up", function (id, num) {
  if (num == 0) {
    console.log("up", {
      id: id,
      num: num,
    });
    //port.write("b");
  }
});
 
// Listen for button down events on all gamepads 
gamepad.on("down", function (id, num) {
  if (num == 0) {
    console.log("down", {
      id: id,
      num: num,
    });
    //port.write("a");
  }
});*/
