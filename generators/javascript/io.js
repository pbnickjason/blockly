goog.provide('Blockly.JavaScript.io');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['io_pinmode'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode_options = block.getFieldValue('mode_options');
  var code = 'pinMode(' + value_pin + ', ' + dropdown_mode_options + ');\n';
  return code;
};

Blockly.JavaScript['io_digitalread'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'digitalRead(' + value_pin + ');\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['io_analogread'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'analogRead(' + value_pin + ');\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['io_analogwrite'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'analogWrite(' + value_pin + ', ' + value_value + ');\n';
  return code;
};

Blockly.JavaScript['io_digitalwrite'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_value = block.getFieldValue('value');
  var code = 'digitalWrite(' + value_pin + ', ' + dropdown_value + ');\n';
  return code;
};

Blockly.JavaScript['io_setservo'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var angle_servo = block.getFieldValue('servo');
  var code = 'setServo(' + value_pin + ', ' + angle_servo + ');\n';
  return code;
};
