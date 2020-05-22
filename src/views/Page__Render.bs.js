// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Style = require("./Style.bs.js");
var React = require("react");
var EmotionServer = require("emotion-server");
var Page__Component = require("./Page__Component.bs.js");
var Server = require("react-dom/server");

function render(siteName, pageData) {
  Style.registerGlobalStyles(undefined);
  var rendered = EmotionServer.renderStylesToString(Server.renderToString(React.createElement(Page__Component.make, {
                siteName: siteName,
                pageData: pageData
              })));
  return "<!DOCTYPE html>" + rendered;
}

exports.render = render;
/* Style Not a pure module */
