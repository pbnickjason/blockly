goog.provide('Blockly.JavaScript.move');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['ros_moveforward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = 'moveForward(' + value_speed + ', function() {\n' + statements_callback + '});\n';
  return code;
};

Blockly.JavaScript['ros_turnleft'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = 'turnLeft(' + value_speed + ', function() {\n' + statements_callback + '});\n';
  return code;
};

Blockly.JavaScript['ros_turnright'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = 'turnRight(' + value_speed + ', function() {\n' + statements_callback + '});\n';
  return code;
};

Blockly.JavaScript['ros_movebackward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = 'moveBackward(' + value_speed + ', function() {\n' + statements_callback + '});\n';
  return code;
};

Blockly.JavaScript['ros_moveforward_timed'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = 'moveForward(' + value_speed + ', ' + value_time + ', function() {\n' + statements_callback + '});\n';
  return code;
};

Blockly.JavaScript['ros_turnleft_timed'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = 'turnLeft(' + value_speed + ', ' + value_time + ', function() {\n' + statements_callback + '});\n';
  return code;
};

Blockly.JavaScript['ros_turnright_timed'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = 'turnRight(' + value_speed + ', ' + value_time + ', function() {\n' + statements_callback + '});\n';
  return code;
};

Blockly.JavaScript['ros_movebackward_timed'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = 'moveBackward(' + value_speed + ', ' + value_time + ', function() {\n' + statements_callback + '});\n';
  return code;
};
