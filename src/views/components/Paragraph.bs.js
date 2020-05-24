// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

var className = Curry._1(Css.style, /* :: */[
      Css.marginBottom(Css.zero),
      /* [] */0
    ]);

function Paragraph(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: className
            }, children);
}

var make = Paragraph;

export {
  className ,
  make ,
  
}
/* className Not a pure module */