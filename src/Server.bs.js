// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var HTTP = require("./bindings/HTTP.bs.js");
var Http = require("http");
var Router = require("./Router.bs.js");
var Relude_IO = require("relude/src/Relude_IO.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Page__Render = require("./views/Page__Render.bs.js");
var Relude_Option = require("relude/src/Relude_Option.bs.js");
var AboutController = require("./controllers/AboutController.bs.js");
var EntryController = require("./controllers/EntryController.bs.js");
var IndexController = require("./controllers/IndexController.bs.js");
var StaticController = require("./controllers/StaticController.bs.js");
var NotFoundController = require("./controllers/NotFoundController.bs.js");
var TagSearchController = require("./controllers/TagSearchController.bs.js");

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

function make(siteName) {
  return Http.createServer((function (request, response) {
                return Relude_IO.unsafeRunAsync((function (prim) {
                              
                            }), Relude_IO.tap((function (res) {
                                    if (res.tag) {
                                      HTTP.$$Response.setStatusCode(200, response);
                                      HTTP.$$Response.setContentType(Relude_Option.getOrElse("application/octet-stream", res[/* type_ */1]))(response);
                                      HTTP.$$Response.setContentLength(res[/* length */2])(response);
                                      HTTP.$$Response.setLastModified(res[/* modified */3])(response);
                                      res[/* stream */0].pipe(response);
                                      return ;
                                    }
                                    var body = Page__Render.render(siteName, res[/* data */0]);
                                    var length = Buffer.byteLength(body);
                                    HTTP.$$Response.setStatusCode(res[/* status */1], response);
                                    HTTP.$$Response.setContentType("text/html; charset=utf-8")(response);
                                    HTTP.$$Response.setContentLength(length)(response);
                                    response.end(body, "utf-8");
                                    
                                  }))(makeResponse(Router.route(Relude_Option.getOrElse("/", Caml_option.undefined_to_opt(request.url)).slice(1).split("/").map((function (segment) {
                                                return decodeURIComponent(segment).trim();
                                              })).filter((function (segment) {
                                              return segment.length >= 1;
                                            }))))));
              }));
}

function listen(param) {
  param.listen(5000, "127.0.0.1", (function (param) {
          console.log("Listening");
          
        }));
  
}

exports.makeResponse = makeResponse;
exports.make = make;
exports.listen = listen;
/* HTTP Not a pure module */
