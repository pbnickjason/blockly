goog.provide('Blockly.JavaScript.graph');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['graph_init'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_dataset = block.getFieldValue('DATASET');
  var code = 'var ' + variable_name + ' = new Graph("' + text_dataset + '");\n';
  return code;
};

Blockly.JavaScript['graph_add'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name + '.addData(' + value_x + ', ' + value_y + ');\n';
  return code;
};

Blockly.JavaScript['graph_get'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var variable_data = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DATA'), Blockly.Variables.NAME_TYPE);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
  var code = variable_name + '.getData(' + 'function(' + variable_data + ') {\n' + statements_callback + '});\n';
  return code;
};
