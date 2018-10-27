'use strict';

goog.provide('Blockly.Blocks.graph');  // Deprecated

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray(
[{
  "type": "graph_init",
  "message0": "set %1 to Dataset %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "graph"
    },
    {
      "type": "field_input",
      "name": "dataset",
      "text": "myData"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Graph constructor",
  "helpUrl": ""
},
{
  "type": "graph_add",
  "message0": "%1 addData %2 %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "graph"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "add data to graph",
  "helpUrl": ""
},
{
  "type": "graph_get",
  "message0": "%1 getData %2 %3 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "graph"
    },
    {
      "type": "field_variable",
      "name": "data",
      "variable": "data"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Get graph data in callback function",
  "helpUrl": ""
}]);
