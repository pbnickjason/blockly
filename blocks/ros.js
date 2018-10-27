'use strict';

goog.provide('Blockly.Blocks.ros');  // Deprecated

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray(
[{
  "type": "rostopic_launchmove",
  "message0": "set %1 to LaunchMove %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "moveTopic"
    },
    {
      "type": "field_input",
      "name": "TOPIC_NAME",
      "text": "cmd_vel"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "ROS move topic",
  "helpUrl": ""
},
{
  "type": "rostopic_launchmove_publish",
  "message0": "%1 publish %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "moveTopic"
    },
    {
      "type": "input_value",
      "name": "LINEAR",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "ANGULAR",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "publish to move topic",
  "helpUrl": ""
},
{
  "type": "rostopic_launchmove_subscribe",
  "message0": "%1 subscribe %2 message %3 %4 %5 %6",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "moveTopic"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "LINEAR",
      "variable": "linear"
    },
    {
      "type": "field_variable",
      "name": "ANGULAR",
      "variable": "angular"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "CALLBACK"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "subscribe to messages from move topic",
  "helpUrl": ""
},
{
  "type": "rostopic_launchio",
  "message0": "set %1 to LaunchIO %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ioTopic"
    },
    {
      "type": "field_input",
      "name": "TOPIC_NAME",
      "text": "digitalRead/0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "ROS io topic",
  "helpUrl": ""
},
{
  "type": "rostopic_launchio_publish",
  "message0": "%1 publish %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ioTopic"
    },
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "publish to io topic",
  "helpUrl": ""
},
{
  "type": "rostopic_launchio_subscribe",
  "message0": "%1 subscribe %2 message %3 %4 %5 %6",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ioTopic"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "PIN",
      "variable": "pin"
    },
    {
      "type": "field_variable",
      "name": "VALUE",
      "variable": "value"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "CALLBACK"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "subscribe to messages from io topic",
  "helpUrl": ""
}]);
