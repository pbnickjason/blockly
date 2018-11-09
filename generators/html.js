"use strict";

goog.provide('Blockly.Blockly.HTML');

goog.require('Blockly.Generator');

Blockly.HTML = new Blockly.Generator('Blockly.HTML');

Blockly.HTML.ORDER_ATOMIC = 0;
Blockly.HTML.ORDER_NONE = 99;

Blockly.HTML.init = function(workspace) {};
Blockly.HTML.finish = function(code) {return code;};

Blockly.HTML.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.HTML.blockToCode(nextBlock);
  return code + nextCode;
};

Blockly.HTML['baseframe'] = function(block) {
  var statements_head = Blockly.HTML.statementToCode(block, 'head');
  var statements_body = Blockly.HTML.statementToCode(block, 'body');

  var code = '<!DOCTYPE Blockly.HTML>\n<html>\n<head>\n  <meta charset="utf-8">\n'
    + statements_head
    + "</head>\n\n<body>\n"
    + statements_body
    + "</body>\n</html>\n";

  return code;
};

Blockly.HTML['html'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<!DOCTYPE Blockly.HTML>\n<html>\n' + statements_content + '</html>\n';
  return code;
};

Blockly.HTML['body'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<body>\n' + statements_content + '</body>\n';
  return code;
};

Blockly.HTML['head'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<head>\n  <meta charset="utf-8">\n' + statements_content + '</head>\n';
  return code;
};

Blockly.HTML['title'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<title>' + statements_content.trim() + '</title>\n';
  return code;
};

Blockly.HTML['paragraph'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<p>\n' + statements_content + '</p>\n';
  return code;
};

Blockly.HTML['plaintext'] = function(block) {
  var text_content = block.getFieldValue('content');
  var code = text_content + '\n';
  return code;
};

Blockly.HTML['division'] = function(block) {
  var value_name = Blockly.HTML.valueToCode(block, 'NAME', Blockly.HTML.ORDER_ATOMIC);
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<div' + value_name + '>\n' + statements_content + '</div>\n';
  return code;
};

Blockly.HTML['style'] = function(block) {
  var statements_name = Blockly.HTML.statementToCode(block, 'NAME');
  var code = ' style="' + statements_name.trim() + '"';
  return [code, Blockly.HTML.ORDER_NONE];
};

Blockly.HTML['color'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'color: ' + colour_name + ';';
  return code;
};

Blockly.HTML['bgcolour'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'background-color: ' + colour_name + ';';
  return code;
};

Blockly.HTML['genericstyle'] = function(block) {
  var text_property = block.getFieldValue('property');
  var text_value = block.getFieldValue('value');
  var code = text_property + ': ' + text_value + ';';
  return code;
};

Blockly.HTML['generictag'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.HTML.valueToCode(block, 'NAME', Blockly.HTML.ORDER_ATOMIC);
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<' + text_name + value_name + '>\n' + statements_content + '</' + text_name + '>\n';
  return code;
};

Blockly.HTML['more_attributes'] = function(block) {
  var value_name1 = Blockly.HTML.valueToCode(block, 'NAME1', Blockly.HTML.ORDER_ATOMIC);
  var value_name2 = Blockly.HTML.valueToCode(block, 'NAME2', Blockly.HTML.ORDER_ATOMIC);
  var value_name3 = Blockly.HTML.valueToCode(block, 'NAME3', Blockly.HTML.ORDER_ATOMIC);
  var code = value_name1 + value_name2 + value_name3;
  return [code, Blockly.HTML.ORDER_NONE];
};

Blockly.HTML['genericattribute'] = function(block) {
  var text_attribute = block.getFieldValue('attribute');
  var text_value = block.getFieldValue('value');
  var code = ' ' + text_attribute + '="' + text_value + '"';
  return [code, Blockly.HTML.ORDER_NONE];
};

Blockly.HTML['link'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<a href="' + text_name + '">' + statements_content.trim() + '</a>\n';
  return code;
};

Blockly.HTML['span'] = function(block) {
  var value_name = Blockly.HTML.valueToCode(block, 'NAME', Blockly.HTML.ORDER_ATOMIC);
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<span' + value_name + '>' + statements_content.trim() + '</span>\n';
  return code;
};

Blockly.HTML['image'] = function(block) {
  var text_image = block.getFieldValue('IMAGE');
  var text_alt = block.getFieldValue('ALT');
  var code = '<img src="' +  text_image + '" alt="' + text_alt + '">\n';
  return code;
};

Blockly.HTML['emphasise'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<em>' + statements_content.trim() + '</em>\n';
  return code;
};

Blockly.HTML['strong'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<strong>' + statements_content.trim() + '</strong>\n';
  return code;
};

Blockly.HTML['headline'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<' + dropdown_name + '>' + statements_content.trim() + '</' +  dropdown_name + '>\n';
  return code;
};


Blockly.HTML['linebreak'] = function(block) {
  var code = '<br>\n';
  return code;
};

Blockly.HTML['horizontalbreak'] = function(block) {
  var code = '<hr>\n';
  return code;
};

Blockly.HTML['unorderedlist'] = function(block) {
  var statements_name = Blockly.HTML.statementToCode(block, 'NAME');
  var code = '<ul>\n' + statements_name + '</ul>\n';
  return code;
};

Blockly.HTML['orderedlist'] = function(block) {
  var statements_name = Blockly.HTML.statementToCode(block, 'NAME');
  var code = '<ol>\n' + statements_name + '</ol>\n';
  return code;
};

Blockly.HTML['listelement'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<li>' + statements_content + '</li>\n';
  return code;
};

Blockly.HTML['inserted'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<ins>' + statements_content.trim() + '</ins>\n';
  return code;
};

Blockly.HTML['deleted'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<del>' + statements_content.trim() + '</del>\n';
  return code;
};

Blockly.HTML['super'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<sup>' + statements_content.trim() + '</sup>\n';
  return code;
};

Blockly.HTML['sub'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<sub>' + statements_content.trim() + '</sub>\n';
  return code;
};

Blockly.HTML['code'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<code>\n' + statements_content + '</code>\n';
  return code;
};

Blockly.HTML['quote'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<q>' + statements_content.trim() + '</q>\n';
  return code;
};

Blockly.HTML['blockquote'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<blockquote>\n' + statements_content + '</blockquote>\n';
  return code;
};

Blockly.HTML['sample'] = function(block) {
var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<samp>\n' + statements_content + '</samp>\n';
  return code;
};

Blockly.HTML['keyboard'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<kbd>\n' + statements_content + '</kbd>\n';
  return code;
};

Blockly.HTML['variable'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<var>' + statements_content.trim() + '</var>\n';
  return code;
};

Blockly.HTML['form'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<form>\n' + statements_content + '</form>\n';
  return code;
};

Blockly.HTML['table'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<table>\n' + statements_content + '</table>\n';
  return code;
};

Blockly.HTML['tablerow'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<tr>\n' + statements_content + '</tr>\n';
  return code;
};

Blockly.HTML['tablecell'] = function(block) {
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<td>' + statements_content.trim() + '</td>\n';
  return code;
};

Blockly.HTML['input_text'] = function(block) {
  var text_default = block.getFieldValue('default');
  var code = '<input value="' + text_default + '">\n';
  return code;
};

Blockly.HTML['button'] = function(block) {
  var statements_name = Blockly.HTML.statementToCode(block, 'NAME');
  var code = '<button>' + statements_name.trim() + '</button>\n';
  return code;
};

Blockly.HTML['input'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_value = block.getFieldValue('value');
  var value_text = Blockly.HTML.valueToCode(block, 'text', Blockly.HTML.ORDER_ATOMIC);
  var code = '<input type="' + dropdown_type + '" value="' + text_value + '"' + value_text + ' />\n';
  return code;
};

Blockly.HTML['script'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<script>\n' + statements_content + '</script>\n';
  return code;
};

Blockly.HTML['onclick'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = ' onclick="' + statements_name.trim() + '"';
  return [code, Blockly.HTML.ORDER_NONE];
};

Blockly.HTML['body_attributes'] = function(block) {
  var value_name = Blockly.HTML.valueToCode(block, 'NAME', Blockly.HTML.ORDER_ATOMIC);
  var statements_content = Blockly.HTML.statementToCode(block, 'content');
  var code = '<body' + value_name + '>\n' + statements_content + '</body>\n';
  return code;
};
