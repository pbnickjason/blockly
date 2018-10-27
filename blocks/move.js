'use strict';

goog.provide('Blockly.Blocks.move');  // Deprecated

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
{
  "type": "ros_moveforward",
  "message0": "moveForward %1",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "moves robot forward",
  "helpUrl": ""
},
{
  "type": "ros_turnleft",
  "message0": "turnLeft %1",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Turns robot left",
  "helpUrl": ""
},
{
  "type": "ros_turnright",
  "message0": "turnRight %1",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Turns robot right",
  "helpUrl": ""
},
{
  "type": "ros_movebackward",
  "message0": "moveBackward %1",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "moves robot backwards",
  "helpUrl": ""
},
{
  "type": "ros_moveforward_timed",
  "message0": "moveForward %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "moves robot forward",
  "helpUrl": ""
},
{
  "type": "ros_turnleft_timed",
  "message0": "turnLeft %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Turns robot left",
  "helpUrl": ""
},
{
  "type": "ros_turnright_timed",
  "message0": "turnRight %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Turns robot right",
  "helpUrl": ""
},
{
  "type": "ros_movebackward_timed",
  "message0": "moveBackward %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "speed",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "moves robot backwards",
  "helpUrl": ""
}]);
