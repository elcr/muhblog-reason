// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Http from "http";
import * as Router from "./Router.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";
import * as AboutController from "./controllers/AboutController.bs.js";
import * as EntryController from "./controllers/EntryController.bs.js";
import * as IndexController from "./controllers/IndexController.bs.js";
import * as StaticController from "./controllers/StaticController.bs.js";
import * as NotFoundController from "./controllers/NotFoundController.bs.js";
import * as TagSearchController from "./controllers/TagSearchController.bs.js";

function makeResponse(route) {
  if (route === undefined) {
    return NotFoundController.response;
  }
  if (typeof route === "number") {
    return AboutController.makeResponse(undefined);
  }
  switch (route.tag | 0) {
    case /* Index */0 :
        return IndexController.makeResponse(route[/* page */0]);
    case /* TagSearch */1 :
        return TagSearchController.makeResponse(route[/* slug */0], route[/* page */1]);
    case /* Entry */2 :
        return EntryController.makeResponse(route[/* year */0], route[/* month */1], route[/* day */2], route[/* slug */3]);
    case /* Static */3 :
        return StaticController.makeResponse(route[/* directory */0], route[/* filename */1]);
    
  }
}

function make(param) {
  return Http.createServer((function (request, response) {
                Date.now();
                makeResponse(Router.route(Relude_Option.getOrElse("/", Caml_option.undefined_to_opt(request.url)).slice(1).split("/").map((function (segment) {
                                  return decodeURIComponent(segment).trim();
                                })).filter((function (segment) {
                                return segment.length >= 1;
                              }))));
                
              }));
}

function listen(param) {
  param.listen(5000, "127.0.0.1", (function (param) {
          console.log("Listening");
          
        }));
  
}

export {
  makeResponse ,
  make ,
  listen ,
  
}
/* http Not a pure module */
