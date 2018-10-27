goog.provide('Blockly.JavaScript.ultrasonic');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['ultrasonic_init'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_label = block.getFieldValue('LABEL');
  var number_echo = block.getFieldValue('ECHO');
  var number_trigger = block.getFieldValue('TRIGGER');
  var code = 'var ' + variable_name + ' = new Ultrasonic(' + text_label + ', ' + number_echo + ', ' + number_trigger + ');\n';
  return code;
};

Blockly.JavaScript['ultrasonic_distance'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + '.getDistance();\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
