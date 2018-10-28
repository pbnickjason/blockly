goog.provide('Blockly.JavaScript.ros');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['rostopic_launchmove'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_topic_name = block.getFieldValue('TOPIC_NAME');
  var code = 'var ' + variable_name + ' = new LaunchMove("' + text_topic_name + '");\n';
  return code;
};

Blockly.JavaScript['rostopic_launchmove_publish'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_linear = Blockly.JavaScript.valueToCode(block, 'LINEAR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_angular = Blockly.JavaScript.valueToCode(block, 'ANGULAR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name + '.publish(' + value_linear + ', ' + value_angular + ');\n';
  return code;
};

Blockly.JavaScript['rostopic_launchmove_subscribe'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var variable_linear = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('LINEAR'), Blockly.Variables.NAME_TYPE);
  var variable_angular = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ANGULAR'), Blockly.Variables.NAME_TYPE);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = variable_name + '.subscribe(' + 'function(' + variable_linear + ', ' + variable_angular + ') {\n' + statements_callback + '});\n';
  return code;
};

Blockly.JavaScript['rostopic_launchio'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_topic_name = block.getFieldValue('TOPIC_NAME');
  var code = 'var ' + variable_name + ' = new LaunchIO("' + text_topic_name + '");\n';
  return code;
};

Blockly.JavaScript['rostopic_launchio_publish'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name + '.publish(' + value_pin + ', ' + value_value + ');\n';
  return code;
};

Blockly.JavaScript['rostopic_launchio_subscribe'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var variable_pin = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PIN'), Blockly.Variables.NAME_TYPE);
  var variable_value = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VALUE'), Blockly.Variables.NAME_TYPE);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = variable_name + '.subscribe(' + 'function(' + variable_pin + ', ' + variable_value + ') {\n' + statements_callback + '});\n';
  return code;
};
