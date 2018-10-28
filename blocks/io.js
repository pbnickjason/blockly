'use strict';

goog.provide('Blockly.Blocks.io');  // Deprecated

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray(
[{
  "type": "io_pinmode",
  "message0": "pinMode %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "MODE_OPTIONS",
      "options": [
        [
          "INPUT",
          "INPUT"
        ],
        [
          "OUTPUT",
          "OUTPUT"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "io_digitalread",
  "message0": "digitalRead %1",
  "args0": [
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 65,
  "tooltip": "Reads pin value",
  "helpUrl": ""
},
{
  "type": "io_analogread",
  "message0": "analogRead %1",
  "args0": [
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 65,
  "tooltip": "Reads pin voltage",
  "helpUrl": ""
},
{
  "type": "io_analogwrite",
  "message0": "analogWrite %1 %2",
  "args0": [
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
  "colour": 65,
  "tooltip": "Writes PWM",
  "helpUrl": ""
},
{
  "type": "io_digitalwrite",
  "message0": "digitalWrite %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "VALUE",
      "options": [
        [
          "LOW",
          "LOW"
        ],
        [
          "HIGH",
          "HIGH"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "Writes pin high or low",
  "helpUrl": ""
},
{
  "type": "io_setservo",
  "message0": "setServo %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "PIN",
      "check": "Number"
    },
    {
      "type": "field_angle",
      "name": "SERVO",
      "angle": 90
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "Writes to Servo",
  "helpUrl": ""
}]);
