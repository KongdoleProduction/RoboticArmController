let controllers = {};
let connection = null;

$(document).ready(function() {
  $('#connection_status').text('loading...');

  connection = new WebSocket('ws://127.0.0.1:3000');

  connection.onopen = function() {
    $('#connection_status').text('connected to server');
  }
  connection.onclose = function() {
    $('#connection_status').text('disconnected');
    connection = null;
  }
  connection.onmessage = function(e) {
    console.log(e);
  }
});

/*

function gamepadHandler(event, connecting) {
  var gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connecting) {
    gamepads[gamepad.index] = gamepad;
    console.log(gamepad);
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);*/

function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  
  for (var i=0; i<gamepads.length; i++) {
    if (gamepads[i]) {
      controllers[gamepads[i].index] = gamepads[i];
    }
  }
}

function booleanize(buttons) {
  var output = [];
  for (var key in buttons) {
    b = buttons[key];
    if (typeof(b) == "object") {
      output.push(b.pressed);
    } else {
      output.push(false);
    }
  }

  return output;
}

function update() {
  scangamepads();
  if (controllers[0]) {
    c_data = {
      "axes": controllers[0].axes,
      "buttons": booleanize(controllers[0].buttons)
    };
    $('#gamepad_axes').text(c_data['axes']);
    $('#gamepad_buttons').text(c_data['buttons']);

    if (connection) {
      connection.send(JSON.stringify(c_data));
    }
  }
}

interval = setInterval(update, 100);
