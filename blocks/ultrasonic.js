'use strict';

goog.provide('Blockly.Blocks.ultrasonic');  // Deprecated

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray(
[{
  "type": "ultrasonic_init",
  "message0": "set %1 to Ultrasonic %2 %3 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ultrasonic"
    },
    {
      "type": "field_input",
      "name": "LABEL",
      "text": "sonic1"
    },
    {
      "type": "field_number",
      "name": "ECHO",
      "value": 14,
      "min": 0,
      "max": 40,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "TRIGGER",
      "value": 15,
      "min": 0,
      "max": 40,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ultrasonic_distance",
  "message0": "%1 getDistance",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ultrasonic"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);
