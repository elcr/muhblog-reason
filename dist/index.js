/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Index.bs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Reboot v4.5.0 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}\n/*# sourceMappingURL=bootstrap-reboot.min.css.map */";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, main, license, repository, author, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"muhblog-reason\",\"version\":\"0.1.0\",\"main\":\"dist/index.js\",\"license\":\"MIT\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/elcr/muhblog-reason.git\"},\"author\":\"elcr\",\"scripts\":{\"build\":\"bsb -make-world -clean-world\"},\"dependencies\":{\"@emotion/core\":\"^10.0.28\",\"argparse\":\"^1.0.10\",\"bootstrap\":\"^4.5.0\",\"bs-bastet\":\"ssh://git@github.com:elcr/bs-bastet-without-bisect.git\",\"bs-css-emotion\":\"^1.2.0\",\"bs-platform\":\"^7.3.2\",\"emotion\":\"^10.0.27\",\"emotion-server\":\"^10.0.27\",\"markdown-metadata-bs\":\"ssh://git@github.com:elcr/markdown-metadata-bs.git\",\"node-fs-bs\":\"ssh://git@github.com:elcr/node-fs-bs.git\",\"node-stream-bs\":\"ssh://git@github.com:elcr/node-stream-bs.git\",\"react\":\"^16.13.1\",\"react-dom\":\"^16.13.1\",\"react-markdown\":\"^4.3.1\",\"react-syntax-highlighter\":\"^12.2.1\",\"reason-react\":\"^0.8.0\",\"relude\":\"ssh://git@github.com:elcr/relude-without-bisect.git\",\"slugify-bs\":\"ssh://git@github.com:elcr/slugify-bs.git\",\"sqlite-relude\":\"ssh://git@github.com:elcr/sqlite-relude.git\",\"squel\":\"^5.13.0\",\"url-parse\":\"^1.4.7\"},\"devDependencies\":{\"raw-loader\":\"^4.0.1\",\"source-map-loader\":\"^0.2.4\",\"webpack\":\"^4.43.0\",\"webpack-cli\":\"^3.3.11\",\"webpack-node-externals\":\"^1.7.2\"}}");

/***/ }),

/***/ "./src/CLI.bs.js":
/*!***********************!*\
  !*** ./src/CLI.bs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Package = __webpack_require__(/*! ./bindings/Package.bs.js */ "./src/bindings/Package.bs.js");
var ArgParse = __webpack_require__(/*! ./bindings/ArgParse.bs.js */ "./src/bindings/ArgParse.bs.js");

function parseArguments(param) {
  var parser = ArgParse.make(Package.json.version, Package.json.name);
  ArgParse.addArgument("-s", "--site-name", "siteName", true, "STRING", parser);
  ArgParse.addArgument("-e", "--entries-directory", "entriesDirectory", true, "PATH", parser);
  ArgParse.addArgument("-a", "--about-path", "aboutPath", true, "PATH", parser);
  return parser.parseArgs();
}

exports.parseArguments = parseArguments;
/* Package Not a pure module */


/***/ }),

/***/ "./src/Index.bs.js":
/*!*************************!*\
  !*** ./src/Index.bs.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var CLI = __webpack_require__(/*! ./CLI.bs.js */ "./src/CLI.bs.js");
var Server = __webpack_require__(/*! ./Server.bs.js */ "./src/Server.bs.js");

function main(param) {
  var match = CLI.parseArguments(undefined);
  return Server.listen(Server.make(match.siteName));
}

main(undefined);

exports.main = main;
/*  Not a pure module */


/***/ }),

/***/ "./src/Router.bs.js":
/*!**************************!*\
  !*** ./src/Router.bs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var Relude_Int = __webpack_require__(/*! relude/src/Relude_Int.bs.js */ "relude/src/Relude_Int.bs.js");
var Relude_Option = __webpack_require__(/*! relude/src/Relude_Option.bs.js */ "relude/src/Relude_Option.bs.js");

function route(segments) {
  var len = segments.length;
  if (len >= 5) {
    return ;
  }
  switch (len) {
    case 0 :
        return /* Index */Block.__(0, [/* page */1]);
    case 1 :
        var page = segments[0];
        if (page === "about") {
          return /* About */0;
        } else {
          return Relude_Option.map((function (page) {
                        return /* Index */Block.__(0, [/* page */page]);
                      }), Relude_Option.filter((function (page) {
                              return page >= 1;
                            }))(Relude_Int.fromString(page)));
        }
    case 2 :
        var directory = segments[0];
        switch (directory) {
          case "tag" :
              var slug = segments[1];
              return /* TagSearch */Block.__(1, [
                        /* slug */slug,
                        /* page */1
                      ]);
          case "static" :
          case "uploads" :
              break;
          default:
            return ;
        }
        var filename = segments[1];
        return /* Static */Block.__(3, [
                  /* directory */directory,
                  /* filename */filename
                ]);
    case 3 :
        var match = segments[0];
        if (match !== "tag") {
          return ;
        }
        var slug$1 = segments[1];
        var page$1 = segments[2];
        return Relude_Option.map((function (page) {
                      return /* TagSearch */Block.__(1, [
                                /* slug */slug$1,
                                /* page */page
                              ]);
                    }), Relude_Option.filter((function (page) {
                            return page >= 1;
                          }))(Relude_Int.fromString(page$1)));
    case 4 :
        var year = segments[0];
        var month = segments[1];
        var day = segments[2];
        var slug$2 = segments[3];
        return Relude_Option.map((function (param) {
                      return /* Entry */Block.__(2, [
                                /* year */param[0],
                                /* month */param[1],
                                /* day */param[2],
                                /* slug */slug$2
                              ]);
                    }), Curry._2(Relude_Option.flatMap, (function (param) {
                          var month = param[1];
                          var year = param[0];
                          return Relude_Option.map((function (day) {
                                        return /* tuple */[
                                                year,
                                                month,
                                                day
                                              ];
                                      }), Relude_Option.filter((function (day) {
                                              if (day >= 1) {
                                                return day <= 31;
                                              } else {
                                                return false;
                                              }
                                            }))(Relude_Int.fromString(day)));
                        }), Curry._2(Relude_Option.flatMap, (function (year) {
                              return Relude_Option.map((function (month) {
                                            return /* tuple */[
                                                    year,
                                                    month
                                                  ];
                                          }), Relude_Option.filter((function (month) {
                                                  if (month >= 1) {
                                                    return month <= 12;
                                                  } else {
                                                    return false;
                                                  }
                                                }))(Relude_Int.fromString(month)));
                            }), Relude_Int.fromString(year))));
    
  }
}

function build(route) {
  if (typeof route === "number") {
    return "/about";
  }
  switch (route.tag | 0) {
    case /* Index */0 :
        var page = route[/* page */0];
        if (page !== 1) {
          return "/" + (String(page) + "");
        } else {
          return "/";
        }
    case /* TagSearch */1 :
        var page$1 = route[/* page */1];
        var slug = route[/* slug */0];
        if (page$1 !== 1) {
          return "/tag/" + (String(slug) + ("/" + (String(page$1) + "")));
        } else {
          return "/tag/" + (String(slug) + "");
        }
    case /* Entry */2 :
        return "/" + (String(route[/* year */0]) + ("/" + (String(route[/* month */1]) + ("/" + (String(route[/* day */2]) + ("/" + (String(route[/* slug */3]) + "")))))));
    case /* Static */3 :
        return "/" + (String(route[/* directory */0]) + ("/" + (String(route[/* filename */1]) + "")));
    
  }
}

exports.route = route;
exports.build = build;
/* Relude_Int Not a pure module */


/***/ }),

/***/ "./src/Server.bs.js":
/*!**************************!*\
  !*** ./src/Server.bs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var HTTP = __webpack_require__(/*! ./bindings/HTTP.bs.js */ "./src/bindings/HTTP.bs.js");
var Http = __webpack_require__(/*! http */ "http");
var Router = __webpack_require__(/*! ./Router.bs.js */ "./src/Router.bs.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var Caml_option = __webpack_require__(/*! bs-platform/lib/js/caml_option.js */ "bs-platform/lib/js/caml_option.js");
var Page__Render = __webpack_require__(/*! ./views/Page__Render.bs.js */ "./src/views/Page__Render.bs.js");
var Relude_Option = __webpack_require__(/*! relude/src/Relude_Option.bs.js */ "relude/src/Relude_Option.bs.js");
var AboutController = __webpack_require__(/*! ./controllers/AboutController.bs.js */ "./src/controllers/AboutController.bs.js");
var EntryController = __webpack_require__(/*! ./controllers/EntryController.bs.js */ "./src/controllers/EntryController.bs.js");
var IndexController = __webpack_require__(/*! ./controllers/IndexController.bs.js */ "./src/controllers/IndexController.bs.js");
var StaticController = __webpack_require__(/*! ./controllers/StaticController.bs.js */ "./src/controllers/StaticController.bs.js");
var NotFoundController = __webpack_require__(/*! ./controllers/NotFoundController.bs.js */ "./src/controllers/NotFoundController.bs.js");
var TagSearchController = __webpack_require__(/*! ./controllers/TagSearchController.bs.js */ "./src/controllers/TagSearchController.bs.js");

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


/***/ }),

/***/ "./src/bindings/ArgParse.bs.js":
/*!*************************************!*\
  !*** ./src/bindings/ArgParse.bs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Argparse = __webpack_require__(/*! argparse */ "argparse");

function make(version, prog) {
  return new Argparse.ArgumentParser({
              version: version,
              prog: prog
            });
}

function addArgument(shortName, longName, dest, required, metavar, parser) {
  parser.addArgument([
        shortName,
        longName
      ], {
        dest: dest,
        metavar: metavar,
        required: required
      });
  
}

exports.make = make;
exports.addArgument = addArgument;
/* argparse Not a pure module */


/***/ }),

/***/ "./src/bindings/Emotion.bs.js":
/*!************************************!*\
  !*** ./src/bindings/Emotion.bs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var React = __webpack_require__(/*! react */ "react");
var Emotion = __webpack_require__(/*! emotion */ "emotion");
var Core = __webpack_require__(/*! @emotion/core */ "@emotion/core");

var Provider = { };

var Cache = {
  Provider: Provider
};

var Server = { };

function Emotion$Provider(Props) {
  var children = Props.children;
  return React.createElement(Core.CacheProvider, {
              value: Emotion.cache,
              children: children
            });
}

var Provider$1 = {
  make: Emotion$Provider
};

exports.Cache = Cache;
exports.Server = Server;
exports.Provider = Provider$1;
/* react Not a pure module */


/***/ }),

/***/ "./src/bindings/HTTP.bs.js":
/*!*********************************!*\
  !*** ./src/bindings/HTTP.bs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Relude_Float = __webpack_require__(/*! relude/src/Relude_Float.bs.js */ "relude/src/Relude_Float.bs.js");

var $$Request = { };

function setStatusCode(status, response) {
  response.statusCode = status;
  
}

function setContentType(value) {
  return (function (param) {
      param.setHeader("Content-Type", value);
      
    });
}

function setContentLength(length) {
  var partial_arg = String(length);
  return (function (param) {
      param.setHeader("Content-Length", partial_arg);
      
    });
}

function setLastModified(timestamp) {
  var date = new Date(Relude_Float.fromInt(timestamp)).toUTCString();
  return (function (param) {
      param.setHeader("Last-Modified", date);
      
    });
}

var $$Response = {
  setStatusCode: setStatusCode,
  setContentType: setContentType,
  setContentLength: setContentLength,
  setLastModified: setLastModified
};

var Server = { };

exports.$$Request = $$Request;
exports.$$Response = $$Response;
exports.Server = Server;
/* Relude_Float Not a pure module */


/***/ }),

/***/ "./src/bindings/Package.bs.js":
/*!************************************!*\
  !*** ./src/bindings/Package.bs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var PackageJson = __webpack_require__(/*! ../../package.json */ "./package.json");

var json = PackageJson;

exports.json = json;
/* json Not a pure module */


/***/ }),

/***/ "./src/controllers/AboutController.bs.js":
/*!***********************************************!*\
  !*** ./src/controllers/AboutController.bs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");

function makeResponse(param) {
  return /* Pure */Block.__(0, [/* Page */Block.__(0, [
                /* data */undefined,
                /* status */200
              ])]);
}

exports.makeResponse = makeResponse;
/* No side effect */


/***/ }),

/***/ "./src/controllers/EntryController.bs.js":
/*!***********************************************!*\
  !*** ./src/controllers/EntryController.bs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");

function makeResponse(_year, _month, _day, _slug) {
  return /* Pure */Block.__(0, [/* Page */Block.__(0, [
                /* data */undefined,
                /* status */200
              ])]);
}

exports.makeResponse = makeResponse;
/* No side effect */


/***/ }),

/***/ "./src/controllers/IndexController.bs.js":
/*!***********************************************!*\
  !*** ./src/controllers/IndexController.bs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");

function makeResponse(_page) {
  return /* Pure */Block.__(0, [/* Page */Block.__(0, [
                /* data */undefined,
                /* status */200
              ])]);
}

exports.makeResponse = makeResponse;
/* No side effect */


/***/ }),

/***/ "./src/controllers/NotFoundController.bs.js":
/*!**************************************************!*\
  !*** ./src/controllers/NotFoundController.bs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");

var response = /* Pure */Block.__(0, [/* Page */Block.__(0, [
        /* data */undefined,
        /* status */404
      ])]);

exports.response = response;
/* No side effect */


/***/ }),

/***/ "./src/controllers/StaticController.bs.js":
/*!************************************************!*\
  !*** ./src/controllers/StaticController.bs.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");

function makeResponse(_directory, _filename) {
  return /* Pure */Block.__(0, [/* Page */Block.__(0, [
                /* data */undefined,
                /* status */200
              ])]);
}

exports.makeResponse = makeResponse;
/* No side effect */


/***/ }),

/***/ "./src/controllers/TagSearchController.bs.js":
/*!***************************************************!*\
  !*** ./src/controllers/TagSearchController.bs.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");

function makeResponse(_slug, _page) {
  return /* Pure */Block.__(0, [/* Page */Block.__(0, [
                /* data */undefined,
                /* status */200
              ])]);
}

exports.makeResponse = makeResponse;
/* No side effect */


/***/ }),

/***/ "./src/views/Page__Component.bs.js":
/*!*****************************************!*\
  !*** ./src/views/Page__Component.bs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Css = __webpack_require__(/*! bs-css-emotion/src/Css.js */ "bs-css-emotion/src/Css.js");
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var React = __webpack_require__(/*! react */ "react");
var Emotion = __webpack_require__(/*! ../bindings/Emotion.bs.js */ "./src/bindings/Emotion.bs.js");
var BootstrapRebootMinCss = __webpack_require__(/*! bootstrap/dist/css/bootstrap-reboot.min.css */ "./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css");

function formatTitle(siteName, pageData) {
  if (pageData === undefined) {
    return "Not found | " + (String(siteName) + "");
  }
  switch (pageData.tag | 0) {
    case /* Index */0 :
        return siteName;
    case /* TagSearch */1 :
        return "" + (String(pageData[/* tag */0]) + (" | " + (String(siteName) + "")));
    case /* About */2 :
        return "About | " + (String(siteName) + "");
    case /* Entry */3 :
        return "" + (String(pageData[0].title) + (" | " + (String(siteName) + "")));
    
  }
}

var className = Curry._1(Css.style, /* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.minHeight(Css.vh(100.0)),
          /* [] */0
        ]
      ]
    ]);

function Page__Component$Root(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: className
            }, children);
}

var Root = {
  className: className,
  make: Page__Component$Root
};

function Page__Component(Props) {
  var siteName = Props.siteName;
  var pageData = Props.pageData;
  var title = formatTitle(siteName, pageData);
  return React.createElement(Emotion.Provider.make, {
              children: React.createElement("html", {
                    lang: "en"
                  }, React.createElement("head", undefined, React.createElement("meta", {
                            charSet: "utf-8"
                          }), React.createElement("meta", {
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
                            name: "viewport"
                          }), React.createElement("title", undefined, title), React.createElement("style", undefined, BootstrapRebootMinCss)), React.createElement("body", undefined, React.createElement(Page__Component$Root, {
                            children: "hello"
                          })))
            });
}

var make = Page__Component;

exports.formatTitle = formatTitle;
exports.Root = Root;
exports.make = make;
/* className Not a pure module */


/***/ }),

/***/ "./src/views/Page__Render.bs.js":
/*!**************************************!*\
  !*** ./src/views/Page__Render.bs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Style = __webpack_require__(/*! ./Style.bs.js */ "./src/views/Style.bs.js");
var React = __webpack_require__(/*! react */ "react");
var EmotionServer = __webpack_require__(/*! emotion-server */ "emotion-server");
var Page__Component = __webpack_require__(/*! ./Page__Component.bs.js */ "./src/views/Page__Component.bs.js");
var Server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

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


/***/ }),

/***/ "./src/views/Style.bs.js":
/*!*******************************!*\
  !*** ./src/views/Style.bs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Css = __webpack_require__(/*! bs-css-emotion/src/Css.js */ "bs-css-emotion/src/Css.js");
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");

var blue = Css.rgb(25, 116, 195);

var grey1 = Css.rgb(249, 249, 250);

var grey2 = Css.rgb(233, 236, 239);

var grey3 = Css.rgb(222, 226, 230);

var grey4 = Css.rgb(206, 212, 218);

var grey5 = Css.rgb(173, 181, 189);

var grey6 = Css.rgb(108, 117, 125);

var grey7 = Css.rgb(73, 80, 87);

var grey8 = Css.rgb(52, 58, 64);

var grey9 = Css.rgb(33, 37, 41);

var desktopColumnWidth = Css.width(Css.rem(37.5));

var partial_arg = "(min-width: " + (String(37.5) + "rem)");

function desktopMediaQuery(param) {
  return Css.media(partial_arg, param);
}

function registerGlobalStyles(param) {
  Curry._2(Css.$$global, "a", /* :: */[
        Css.textDecoration(Css.none),
        /* :: */[
          Css.color(blue),
          /* [] */0
        ]
      ]);
  var codeStyle_000 = Css.fontSize(Css.rem(0.875));
  var codeStyle_001 = /* :: */[
    Css.fontFamily(/* monospace */-555363901),
    /* :: */[
      Css.backgroundColor(grey2),
      /* [] */0
    ]
  ];
  var codeStyle = /* :: */[
    codeStyle_000,
    codeStyle_001
  ];
  Curry._2(Css.$$global, "code", codeStyle);
  Curry._2(Css.$$global, "pre", /* :: */[
        Css.padding(Css.rem(0.625)),
        /* :: */[
          Css.overflow(Css.auto),
          codeStyle
        ]
      ]);
  return Curry._2(Css.$$global, "h1 code, h2 code, h3 code", /* :: */[
              Css.fontSize(Css.inherit_),
              /* [] */0
            ]);
}

var darkBorderColour = grey2;

var lightBorderColour = grey3;

var desktopColumnRem = 37.5;

exports.blue = blue;
exports.grey1 = grey1;
exports.grey2 = grey2;
exports.grey3 = grey3;
exports.grey4 = grey4;
exports.grey5 = grey5;
exports.grey6 = grey6;
exports.grey7 = grey7;
exports.grey8 = grey8;
exports.grey9 = grey9;
exports.darkBorderColour = darkBorderColour;
exports.lightBorderColour = lightBorderColour;
exports.desktopColumnRem = desktopColumnRem;
exports.desktopColumnWidth = desktopColumnWidth;
exports.desktopMediaQuery = desktopMediaQuery;
exports.registerGlobalStyles = registerGlobalStyles;
/* blue Not a pure module */


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "argparse":
/*!***************************!*\
  !*** external "argparse" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("argparse");

/***/ }),

/***/ "bs-css-emotion/src/Css.js":
/*!********************************************!*\
  !*** external "bs-css-emotion/src/Css.js" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bs-css-emotion/src/Css.js");

/***/ }),

/***/ "bs-platform/lib/js/block.js":
/*!**********************************************!*\
  !*** external "bs-platform/lib/js/block.js" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bs-platform/lib/js/block.js");

/***/ }),

/***/ "bs-platform/lib/js/caml_option.js":
/*!****************************************************!*\
  !*** external "bs-platform/lib/js/caml_option.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bs-platform/lib/js/caml_option.js");

/***/ }),

/***/ "bs-platform/lib/js/curry.js":
/*!**********************************************!*\
  !*** external "bs-platform/lib/js/curry.js" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bs-platform/lib/js/curry.js");

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "emotion-server":
/*!*********************************!*\
  !*** external "emotion-server" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-server");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "relude/src/Relude_Float.bs.js":
/*!************************************************!*\
  !*** external "relude/src/Relude_Float.bs.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relude/src/Relude_Float.bs.js");

/***/ }),

/***/ "relude/src/Relude_IO.bs.js":
/*!*********************************************!*\
  !*** external "relude/src/Relude_IO.bs.js" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relude/src/Relude_IO.bs.js");

/***/ }),

/***/ "relude/src/Relude_Int.bs.js":
/*!**********************************************!*\
  !*** external "relude/src/Relude_Int.bs.js" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relude/src/Relude_Int.bs.js");

/***/ }),

/***/ "relude/src/Relude_Option.bs.js":
/*!*************************************************!*\
  !*** external "relude/src/Relude_Option.bs.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relude/src/Relude_Option.bs.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAtcmVib290Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NMSS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXguYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvdXRlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9BcmdQYXJzZS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmluZGluZ3MvRW1vdGlvbi5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmluZGluZ3MvSFRUUC5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmluZGluZ3MvUGFja2FnZS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvQWJvdXRDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9FbnRyeUNvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0luZGV4Q29udHJvbGxlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvTm90Rm91bmRDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TdGF0aWNDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9UYWdTZWFyY2hDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9QYWdlX19Db21wb25lbnQuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1BhZ2VfX1JlbmRlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU3R5bGUuYnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFyZ3BhcnNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtY3NzLWVtb3Rpb24vc3JjL0Nzcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX29wdGlvbi5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbW90aW9uLXNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9GbG9hdC5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxr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QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFGQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwyRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0luZGV4LmJzLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIVxcbiAqIEJvb3RzdHJhcCBSZWJvb3QgdjQuNS4wIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxcbiAqIENvcHlyaWdodCAyMDExLTIwMjAgVGhlIEJvb3RzdHJhcCBBdXRob3JzXFxuICogQ29weXJpZ2h0IDIwMTEtMjAyMCBUd2l0dGVyLCBJbmMuXFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcXG4gKiBGb3JrZWQgZnJvbSBOb3JtYWxpemUuY3NzLCBsaWNlbnNlZCBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcXG4gKi8qLDo6YWZ0ZXIsOjpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94fWh0bWx7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjE1Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH1hcnRpY2xlLGFzaWRlLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31ib2R5e21hcmdpbjowO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsQXJpYWwsXFxcIk5vdG8gU2Fuc1xcXCIsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjU7Y29sb3I6IzIxMjUyOTt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojZmZmfVt0YWJpbmRleD1cXFwiLTFcXFwiXTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpe291dGxpbmU6MCFpbXBvcnRhbnR9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfWgxLGgyLGgzLGg0LGg1LGg2e21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOi41cmVtfXB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MXJlbX1hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdLGFiYnJbdGl0bGVde3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDtjdXJzb3I6aGVscDtib3JkZXItYm90dG9tOjA7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6bm9uZTt0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6bm9uZX1hZGRyZXNze21hcmdpbi1ib3R0b206MXJlbTtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDppbmhlcml0fWRsLG9sLHVse21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjFyZW19b2wgb2wsb2wgdWwsdWwgb2wsdWwgdWx7bWFyZ2luLWJvdHRvbTowfWR0e2ZvbnQtd2VpZ2h0OjcwMH1kZHttYXJnaW4tYm90dG9tOi41cmVtO21hcmdpbi1sZWZ0OjB9YmxvY2txdW90ZXttYXJnaW46MCAwIDFyZW19YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1he2NvbG9yOiMwMDdiZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1hOmhvdmVye2NvbG9yOiMwMDU2YjM7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1hOm5vdChbaHJlZl0pe2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YTpub3QoW2hyZWZdKTpob3Zlcntjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5OlNGTW9uby1SZWd1bGFyLE1lbmxvLE1vbmFjbyxDb25zb2xhcyxcXFwiTGliZXJhdGlvbiBNb25vXFxcIixcXFwiQ291cmllciBOZXdcXFwiLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfXByZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxcmVtO292ZXJmbG93OmF1dG87LW1zLW92ZXJmbG93LXN0eWxlOnNjcm9sbGJhcn1maWd1cmV7bWFyZ2luOjAgMCAxcmVtfWltZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLXN0eWxlOm5vbmV9c3Zne292ZXJmbG93OmhpZGRlbjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfWNhcHRpb257cGFkZGluZy10b3A6Ljc1cmVtO3BhZGRpbmctYm90dG9tOi43NXJlbTtjb2xvcjojNmM3NTdkO3RleHQtYWxpZ246bGVmdDtjYXB0aW9uLXNpZGU6Ym90dG9tfXRoe3RleHQtYWxpZ246aW5oZXJpdH1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOi41cmVtfWJ1dHRvbntib3JkZXItcmFkaXVzOjB9YnV0dG9uOmZvY3Vze291dGxpbmU6MXB4IGRvdHRlZDtvdXRsaW5lOjVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcn1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe21hcmdpbjowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3JvbGU9YnV0dG9uXXtjdXJzb3I6cG9pbnRlcn1zZWxlY3R7d29yZC13cmFwOm5vcm1hbH1bdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksW3R5cGU9cmVzZXRdOm5vdCg6ZGlzYWJsZWQpLFt0eXBlPXN1Ym1pdF06bm90KDpkaXNhYmxlZCksYnV0dG9uOm5vdCg6ZGlzYWJsZWQpe2N1cnNvcjpwb2ludGVyfVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXItc3R5bGU6bm9uZX1pbnB1dFt0eXBlPWNoZWNrYm94XSxpbnB1dFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfXRleHRhcmVhe292ZXJmbG93OmF1dG87cmVzaXplOnZlcnRpY2FsfWZpZWxkc2V0e21pbi13aWR0aDowO3BhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MH1sZWdlbmR7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDttYXJnaW4tYm90dG9tOi41cmVtO2ZvbnQtc2l6ZToxLjVyZW07bGluZS1oZWlnaHQ6aW5oZXJpdDtjb2xvcjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXtvdXRsaW5lLW9mZnNldDotMnB4Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lfVt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbntmb250OmluaGVyaXQ7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1vdXRwdXR7ZGlzcGxheTppbmxpbmUtYmxvY2t9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbTtjdXJzb3I6cG9pbnRlcn10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudH1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwICovXCI7IiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQYWNrYWdlID0gcmVxdWlyZShcIi4vYmluZGluZ3MvUGFja2FnZS5icy5qc1wiKTtcbnZhciBBcmdQYXJzZSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdzL0FyZ1BhcnNlLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJhbSkge1xuICB2YXIgcGFyc2VyID0gQXJnUGFyc2UubWFrZShQYWNrYWdlLmpzb24udmVyc2lvbiwgUGFja2FnZS5qc29uLm5hbWUpO1xuICBBcmdQYXJzZS5hZGRBcmd1bWVudChcIi1zXCIsIFwiLS1zaXRlLW5hbWVcIiwgXCJzaXRlTmFtZVwiLCB0cnVlLCBcIlNUUklOR1wiLCBwYXJzZXIpO1xuICBBcmdQYXJzZS5hZGRBcmd1bWVudChcIi1lXCIsIFwiLS1lbnRyaWVzLWRpcmVjdG9yeVwiLCBcImVudHJpZXNEaXJlY3RvcnlcIiwgdHJ1ZSwgXCJQQVRIXCIsIHBhcnNlcik7XG4gIEFyZ1BhcnNlLmFkZEFyZ3VtZW50KFwiLWFcIiwgXCItLWFib3V0LXBhdGhcIiwgXCJhYm91dFBhdGhcIiwgdHJ1ZSwgXCJQQVRIXCIsIHBhcnNlcik7XG4gIHJldHVybiBwYXJzZXIucGFyc2VBcmdzKCk7XG59XG5cbmV4cG9ydHMucGFyc2VBcmd1bWVudHMgPSBwYXJzZUFyZ3VtZW50cztcbi8qIFBhY2thZ2UgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ0xJID0gcmVxdWlyZShcIi4vQ0xJLmJzLmpzXCIpO1xudmFyIFNlcnZlciA9IHJlcXVpcmUoXCIuL1NlcnZlci5icy5qc1wiKTtcblxuZnVuY3Rpb24gbWFpbihwYXJhbSkge1xuICB2YXIgbWF0Y2ggPSBDTEkucGFyc2VBcmd1bWVudHModW5kZWZpbmVkKTtcbiAgcmV0dXJuIFNlcnZlci5saXN0ZW4oU2VydmVyLm1ha2UobWF0Y2guc2l0ZU5hbWUpKTtcbn1cblxubWFpbih1bmRlZmluZWQpO1xuXG5leHBvcnRzLm1haW4gPSBtYWluO1xuLyogIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgUmVsdWRlX0ludCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JbnQuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG5cbmZ1bmN0aW9uIHJvdXRlKHNlZ21lbnRzKSB7XG4gIHZhciBsZW4gPSBzZWdtZW50cy5sZW5ndGg7XG4gIGlmIChsZW4gPj0gNSkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gLyogSW5kZXggKi9CbG9jay5fXygwLCBbLyogcGFnZSAqLzFdKTtcbiAgICBjYXNlIDEgOlxuICAgICAgICB2YXIgcGFnZSA9IHNlZ21lbnRzWzBdO1xuICAgICAgICBpZiAocGFnZSA9PT0gXCJhYm91dFwiKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEFib3V0ICovMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogSW5kZXggKi9CbG9jay5fXygwLCBbLyogcGFnZSAqL3BhZ2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZSA+PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfSW50LmZyb21TdHJpbmcocGFnZSkpKTtcbiAgICAgICAgfVxuICAgIGNhc2UgMiA6XG4gICAgICAgIHZhciBkaXJlY3RvcnkgPSBzZWdtZW50c1swXTtcbiAgICAgICAgc3dpdGNoIChkaXJlY3RvcnkpIHtcbiAgICAgICAgICBjYXNlIFwidGFnXCIgOlxuICAgICAgICAgICAgICB2YXIgc2x1ZyA9IHNlZ21lbnRzWzFdO1xuICAgICAgICAgICAgICByZXR1cm4gLyogVGFnU2VhcmNoICovQmxvY2suX18oMSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBwYWdlICovMVxuICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgIGNhc2UgXCJzdGF0aWNcIiA6XG4gICAgICAgICAgY2FzZSBcInVwbG9hZHNcIiA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IHNlZ21lbnRzWzFdO1xuICAgICAgICByZXR1cm4gLyogU3RhdGljICovQmxvY2suX18oMywgW1xuICAgICAgICAgICAgICAgICAgLyogZGlyZWN0b3J5ICovZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgICAgLyogZmlsZW5hbWUgKi9maWxlbmFtZVxuICAgICAgICAgICAgICAgIF0pO1xuICAgIGNhc2UgMyA6XG4gICAgICAgIHZhciBtYXRjaCA9IHNlZ21lbnRzWzBdO1xuICAgICAgICBpZiAobWF0Y2ggIT09IFwidGFnXCIpIHtcbiAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzbHVnJDEgPSBzZWdtZW50c1sxXTtcbiAgICAgICAgdmFyIHBhZ2UkMSA9IHNlZ21lbnRzWzJdO1xuICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIFRhZ1NlYXJjaCAqL0Jsb2NrLl9fKDEsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWckMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcGFnZSAqL3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UgPj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JbnQuZnJvbVN0cmluZyhwYWdlJDEpKSk7XG4gICAgY2FzZSA0IDpcbiAgICAgICAgdmFyIHllYXIgPSBzZWdtZW50c1swXTtcbiAgICAgICAgdmFyIG1vbnRoID0gc2VnbWVudHNbMV07XG4gICAgICAgIHZhciBkYXkgPSBzZWdtZW50c1syXTtcbiAgICAgICAgdmFyIHNsdWckMiA9IHNlZ21lbnRzWzNdO1xuICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFbnRyeSAqL0Jsb2NrLl9fKDIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogeWVhciAqL3BhcmFtWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBtb250aCAqL3BhcmFtWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBkYXkgKi9wYXJhbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWckMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfT3B0aW9uLmZsYXRNYXAsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gcGFyYW1bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gcGFyYW1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKGRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKGRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheSA8PSAzMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JbnQuZnJvbVN0cmluZyhkYXkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHllYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChtb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9udGggPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aCA8PSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfSW50LmZyb21TdHJpbmcobW9udGgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JbnQuZnJvbVN0cmluZyh5ZWFyKSkpKTtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZChyb3V0ZSkge1xuICBpZiAodHlwZW9mIHJvdXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIFwiL2Fib3V0XCI7XG4gIH1cbiAgc3dpdGNoIChyb3V0ZS50YWcgfCAwKSB7XG4gICAgY2FzZSAvKiBJbmRleCAqLzAgOlxuICAgICAgICB2YXIgcGFnZSA9IHJvdXRlWy8qIHBhZ2UgKi8wXTtcbiAgICAgICAgaWYgKHBhZ2UgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gXCIvXCIgKyAoU3RyaW5nKHBhZ2UpICsgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiL1wiO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBUYWdTZWFyY2ggKi8xIDpcbiAgICAgICAgdmFyIHBhZ2UkMSA9IHJvdXRlWy8qIHBhZ2UgKi8xXTtcbiAgICAgICAgdmFyIHNsdWcgPSByb3V0ZVsvKiBzbHVnICovMF07XG4gICAgICAgIGlmIChwYWdlJDEgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gXCIvdGFnL1wiICsgKFN0cmluZyhzbHVnKSArIChcIi9cIiArIChTdHJpbmcocGFnZSQxKSArIFwiXCIpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiL3RhZy9cIiArIChTdHJpbmcoc2x1ZykgKyBcIlwiKTtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogRW50cnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiB5ZWFyICovMF0pICsgKFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBtb250aCAqLzFdKSArIChcIi9cIiArIChTdHJpbmcocm91dGVbLyogZGF5ICovMl0pICsgKFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBzbHVnICovM10pICsgXCJcIikpKSkpKSk7XG4gICAgY2FzZSAvKiBTdGF0aWMgKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBkaXJlY3RvcnkgKi8wXSkgKyAoXCIvXCIgKyAoU3RyaW5nKHJvdXRlWy8qIGZpbGVuYW1lICovMV0pICsgXCJcIikpKTtcbiAgICBcbiAgfVxufVxuXG5leHBvcnRzLnJvdXRlID0gcm91dGU7XG5leHBvcnRzLmJ1aWxkID0gYnVpbGQ7XG4vKiBSZWx1ZGVfSW50IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEhUVFAgPSByZXF1aXJlKFwiLi9iaW5kaW5ncy9IVFRQLmJzLmpzXCIpO1xudmFyIEh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKFwiLi9Sb3V0ZXIuYnMuanNcIik7XG52YXIgUmVsdWRlX0lPID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpO1xudmFyIENhbWxfb3B0aW9uID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX29wdGlvbi5qc1wiKTtcbnZhciBQYWdlX19SZW5kZXIgPSByZXF1aXJlKFwiLi92aWV3cy9QYWdlX19SZW5kZXIuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG52YXIgQWJvdXRDb250cm9sbGVyID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvQWJvdXRDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIEVudHJ5Q29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL0VudHJ5Q29udHJvbGxlci5icy5qc1wiKTtcbnZhciBJbmRleENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIuYnMuanNcIik7XG52YXIgU3RhdGljQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL1N0YXRpY0NvbnRyb2xsZXIuYnMuanNcIik7XG52YXIgTm90Rm91bmRDb250cm9sbGVyID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvTm90Rm91bmRDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIFRhZ1NlYXJjaENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9UYWdTZWFyY2hDb250cm9sbGVyLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2Uocm91dGUpIHtcbiAgaWYgKHJvdXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gTm90Rm91bmRDb250cm9sbGVyLnJlc3BvbnNlO1xuICB9XG4gIGlmICh0eXBlb2Ygcm91dGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gQWJvdXRDb250cm9sbGVyLm1ha2VSZXNwb25zZSh1bmRlZmluZWQpO1xuICB9XG4gIHN3aXRjaCAocm91dGUudGFnIHwgMCkge1xuICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgcmV0dXJuIEluZGV4Q29udHJvbGxlci5tYWtlUmVzcG9uc2Uocm91dGVbLyogcGFnZSAqLzBdKTtcbiAgICBjYXNlIC8qIFRhZ1NlYXJjaCAqLzEgOlxuICAgICAgICByZXR1cm4gVGFnU2VhcmNoQ29udHJvbGxlci5tYWtlUmVzcG9uc2Uocm91dGVbLyogc2x1ZyAqLzBdLCByb3V0ZVsvKiBwYWdlICovMV0pO1xuICAgIGNhc2UgLyogRW50cnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIEVudHJ5Q29udHJvbGxlci5tYWtlUmVzcG9uc2Uocm91dGVbLyogeWVhciAqLzBdLCByb3V0ZVsvKiBtb250aCAqLzFdLCByb3V0ZVsvKiBkYXkgKi8yXSwgcm91dGVbLyogc2x1ZyAqLzNdKTtcbiAgICBjYXNlIC8qIFN0YXRpYyAqLzMgOlxuICAgICAgICByZXR1cm4gU3RhdGljQ29udHJvbGxlci5tYWtlUmVzcG9uc2Uocm91dGVbLyogZGlyZWN0b3J5ICovMF0sIHJvdXRlWy8qIGZpbGVuYW1lICovMV0pO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2Uoc2l0ZU5hbWUpIHtcbiAgcmV0dXJuIEh0dHAuY3JlYXRlU2VydmVyKChmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLnVuc2FmZVJ1bkFzeW5jKChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy50YXAoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRTdGF0dXNDb2RlKDIwMCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0Q29udGVudFR5cGUoUmVsdWRlX09wdGlvbi5nZXRPckVsc2UoXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgcmVzWy8qIHR5cGVfICovMV0pKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50TGVuZ3RoKHJlc1svKiBsZW5ndGggKi8yXSkocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0TGFzdE1vZGlmaWVkKHJlc1svKiBtb2RpZmllZCAqLzNdKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1svKiBzdHJlYW0gKi8wXS5waXBlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gUGFnZV9fUmVuZGVyLnJlbmRlcihzaXRlTmFtZSwgcmVzWy8qIGRhdGEgKi8wXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0U3RhdHVzQ29kZShyZXNbLyogc3RhdHVzICovMV0sIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50VHlwZShcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0Q29udGVudExlbmd0aChsZW5ndGgpKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVuZChib2R5LCBcInV0Zi04XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKG1ha2VSZXNwb25zZShSb3V0ZXIucm91dGUoUmVsdWRlX09wdGlvbi5nZXRPckVsc2UoXCIvXCIsIENhbWxfb3B0aW9uLnVuZGVmaW5lZF90b19vcHQocmVxdWVzdC51cmwpKS5zbGljZSgxKS5zcGxpdChcIi9cIikubWFwKChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzZWdtZW50KS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmZpbHRlcigoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VnbWVudC5sZW5ndGggPj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSkpKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW4ocGFyYW0pIHtcbiAgcGFyYW0ubGlzdGVuKDUwMDAsIFwiMTI3LjAuMC4xXCIsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3RlbmluZ1wiKTtcbiAgICAgICAgICBcbiAgICAgICAgfSkpO1xuICBcbn1cblxuZXhwb3J0cy5tYWtlUmVzcG9uc2UgPSBtYWtlUmVzcG9uc2U7XG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuZXhwb3J0cy5saXN0ZW4gPSBsaXN0ZW47XG4vKiBIVFRQIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEFyZ3BhcnNlID0gcmVxdWlyZShcImFyZ3BhcnNlXCIpO1xuXG5mdW5jdGlvbiBtYWtlKHZlcnNpb24sIHByb2cpIHtcbiAgcmV0dXJuIG5ldyBBcmdwYXJzZS5Bcmd1bWVudFBhcnNlcih7XG4gICAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICAgIHByb2c6IHByb2dcbiAgICAgICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRBcmd1bWVudChzaG9ydE5hbWUsIGxvbmdOYW1lLCBkZXN0LCByZXF1aXJlZCwgbWV0YXZhciwgcGFyc2VyKSB7XG4gIHBhcnNlci5hZGRBcmd1bWVudChbXG4gICAgICAgIHNob3J0TmFtZSxcbiAgICAgICAgbG9uZ05hbWVcbiAgICAgIF0sIHtcbiAgICAgICAgZGVzdDogZGVzdCxcbiAgICAgICAgbWV0YXZhcjogbWV0YXZhcixcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkXG4gICAgICB9KTtcbiAgXG59XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG5leHBvcnRzLmFkZEFyZ3VtZW50ID0gYWRkQXJndW1lbnQ7XG4vKiBhcmdwYXJzZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBFbW90aW9uID0gcmVxdWlyZShcImVtb3Rpb25cIik7XG52YXIgQ29yZSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpO1xuXG52YXIgUHJvdmlkZXIgPSB7IH07XG5cbnZhciBDYWNoZSA9IHtcbiAgUHJvdmlkZXI6IFByb3ZpZGVyXG59O1xuXG52YXIgU2VydmVyID0geyB9O1xuXG5mdW5jdGlvbiBFbW90aW9uJFByb3ZpZGVyKFByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IFByb3BzLmNoaWxkcmVuO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb3JlLkNhY2hlUHJvdmlkZXIsIHtcbiAgICAgICAgICAgICAgdmFsdWU6IEVtb3Rpb24uY2FjaGUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgICAgfSk7XG59XG5cbnZhciBQcm92aWRlciQxID0ge1xuICBtYWtlOiBFbW90aW9uJFByb3ZpZGVyXG59O1xuXG5leHBvcnRzLkNhY2hlID0gQ2FjaGU7XG5leHBvcnRzLlNlcnZlciA9IFNlcnZlcjtcbmV4cG9ydHMuUHJvdmlkZXIgPSBQcm92aWRlciQxO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVsdWRlX0Zsb2F0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0Zsb2F0LmJzLmpzXCIpO1xuXG52YXIgJCRSZXF1ZXN0ID0geyB9O1xuXG5mdW5jdGlvbiBzZXRTdGF0dXNDb2RlKHN0YXR1cywgcmVzcG9uc2UpIHtcbiAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgXG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlKHZhbHVlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBwYXJhbS5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgdmFsdWUpO1xuICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRMZW5ndGgobGVuZ3RoKSB7XG4gIHZhciBwYXJ0aWFsX2FyZyA9IFN0cmluZyhsZW5ndGgpO1xuICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcGFyYW0uc2V0SGVhZGVyKFwiQ29udGVudC1MZW5ndGhcIiwgcGFydGlhbF9hcmcpO1xuICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldExhc3RNb2RpZmllZCh0aW1lc3RhbXApIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZShSZWx1ZGVfRmxvYXQuZnJvbUludCh0aW1lc3RhbXApKS50b1VUQ1N0cmluZygpO1xuICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcGFyYW0uc2V0SGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiLCBkYXRlKTtcbiAgICAgIFxuICAgIH0pO1xufVxuXG52YXIgJCRSZXNwb25zZSA9IHtcbiAgc2V0U3RhdHVzQ29kZTogc2V0U3RhdHVzQ29kZSxcbiAgc2V0Q29udGVudFR5cGU6IHNldENvbnRlbnRUeXBlLFxuICBzZXRDb250ZW50TGVuZ3RoOiBzZXRDb250ZW50TGVuZ3RoLFxuICBzZXRMYXN0TW9kaWZpZWQ6IHNldExhc3RNb2RpZmllZFxufTtcblxudmFyIFNlcnZlciA9IHsgfTtcblxuZXhwb3J0cy4kJFJlcXVlc3QgPSAkJFJlcXVlc3Q7XG5leHBvcnRzLiQkUmVzcG9uc2UgPSAkJFJlc3BvbnNlO1xuZXhwb3J0cy5TZXJ2ZXIgPSBTZXJ2ZXI7XG4vKiBSZWx1ZGVfRmxvYXQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFja2FnZUpzb24gPSByZXF1aXJlKFwiLi4vLi4vcGFja2FnZS5qc29uXCIpO1xuXG52YXIganNvbiA9IFBhY2thZ2VKc29uO1xuXG5leHBvcnRzLmpzb24gPSBqc29uO1xuLyoganNvbiBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShwYXJhbSkge1xuICByZXR1cm4gLyogUHVyZSAqL0Jsb2NrLl9fKDAsIFsvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgIC8qIGRhdGEgKi91bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgIF0pXSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoX3llYXIsIF9tb250aCwgX2RheSwgX3NsdWcpIHtcbiAgcmV0dXJuIC8qIFB1cmUgKi9CbG9jay5fXygwLCBbLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAvKiBkYXRhICovdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIC8qIHN0YXR1cyAqLzIwMFxuICAgICAgICAgICAgICBdKV0pO1xufVxuXG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcblxuZnVuY3Rpb24gbWFrZVJlc3BvbnNlKF9wYWdlKSB7XG4gIHJldHVybiAvKiBQdXJlICovQmxvY2suX18oMCwgWy8qIFBhZ2UgKi9CbG9jay5fXygwLCBbXG4gICAgICAgICAgICAgICAgLyogZGF0YSAqL3VuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAvKiBzdGF0dXMgKi8yMDBcbiAgICAgICAgICAgICAgXSldKTtcbn1cblxuZXhwb3J0cy5tYWtlUmVzcG9uc2UgPSBtYWtlUmVzcG9uc2U7XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG5cbnZhciByZXNwb25zZSA9IC8qIFB1cmUgKi9CbG9jay5fXygwLCBbLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgLyogZGF0YSAqL3VuZGVmaW5lZCxcbiAgICAgICAgLyogc3RhdHVzICovNDA0XG4gICAgICBdKV0pO1xuXG5leHBvcnRzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShfZGlyZWN0b3J5LCBfZmlsZW5hbWUpIHtcbiAgcmV0dXJuIC8qIFB1cmUgKi9CbG9jay5fXygwLCBbLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAvKiBkYXRhICovdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIC8qIHN0YXR1cyAqLzIwMFxuICAgICAgICAgICAgICBdKV0pO1xufVxuXG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcblxuZnVuY3Rpb24gbWFrZVJlc3BvbnNlKF9zbHVnLCBfcGFnZSkge1xuICByZXR1cm4gLyogUHVyZSAqL0Jsb2NrLl9fKDAsIFsvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgIC8qIGRhdGEgKi91bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgIF0pXSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3NzID0gcmVxdWlyZShcImJzLWNzcy1lbW90aW9uL3NyYy9Dc3MuanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEVtb3Rpb24gPSByZXF1aXJlKFwiLi4vYmluZGluZ3MvRW1vdGlvbi5icy5qc1wiKTtcbnZhciBCb290c3RyYXBSZWJvb3RNaW5Dc3MgPSByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzc1wiKTtcblxuZnVuY3Rpb24gZm9ybWF0VGl0bGUoc2l0ZU5hbWUsIHBhZ2VEYXRhKSB7XG4gIGlmIChwYWdlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFwiTm90IGZvdW5kIHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpO1xuICB9XG4gIHN3aXRjaCAocGFnZURhdGEudGFnIHwgMCkge1xuICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgcmV0dXJuIHNpdGVOYW1lO1xuICAgIGNhc2UgLyogVGFnU2VhcmNoICovMSA6XG4gICAgICAgIHJldHVybiBcIlwiICsgKFN0cmluZyhwYWdlRGF0YVsvKiB0YWcgKi8wXSkgKyAoXCIgfCBcIiArIChTdHJpbmcoc2l0ZU5hbWUpICsgXCJcIikpKTtcbiAgICBjYXNlIC8qIEFib3V0ICovMiA6XG4gICAgICAgIHJldHVybiBcIkFib3V0IHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpO1xuICAgIGNhc2UgLyogRW50cnkgKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiXCIgKyAoU3RyaW5nKHBhZ2VEYXRhWzBdLnRpdGxlKSArIChcIiB8IFwiICsgKFN0cmluZyhzaXRlTmFtZSkgKyBcIlwiKSkpO1xuICAgIFxuICB9XG59XG5cbnZhciBjbGFzc05hbWUgPSBDdXJyeS5fMShDc3Muc3R5bGUsIC8qIDo6ICovW1xuICAgICAgQ3NzLmRpc3BsYXkoQ3NzLmZsZXhCb3gpLFxuICAgICAgLyogOjogKi9bXG4gICAgICAgIENzcy5mbGV4RGlyZWN0aW9uKENzcy5jb2x1bW4pLFxuICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICBDc3MubWluSGVpZ2h0KENzcy52aCgxMDAuMCkpLFxuICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICBdXG4gICAgICBdXG4gICAgXSk7XG5cbmZ1bmN0aW9uIFBhZ2VfX0NvbXBvbmVudCRSb290KFByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IFByb3BzLmNoaWxkcmVuO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgICAgICB9LCBjaGlsZHJlbik7XG59XG5cbnZhciBSb290ID0ge1xuICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgbWFrZTogUGFnZV9fQ29tcG9uZW50JFJvb3Rcbn07XG5cbmZ1bmN0aW9uIFBhZ2VfX0NvbXBvbmVudChQcm9wcykge1xuICB2YXIgc2l0ZU5hbWUgPSBQcm9wcy5zaXRlTmFtZTtcbiAgdmFyIHBhZ2VEYXRhID0gUHJvcHMucGFnZURhdGE7XG4gIHZhciB0aXRsZSA9IGZvcm1hdFRpdGxlKHNpdGVOYW1lLCBwYWdlRGF0YSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEVtb3Rpb24uUHJvdmlkZXIubWFrZSwge1xuICAgICAgICAgICAgICBjaGlsZHJlbjogUmVhY3QuY3JlYXRlRWxlbWVudChcImh0bWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBsYW5nOiBcImVuXCJcbiAgICAgICAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsIHVuZGVmaW5lZCwgUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJTZXQ6IFwidXRmLThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCB1bmRlZmluZWQsIHRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHVuZGVmaW5lZCwgQm9vdHN0cmFwUmVib290TWluQ3NzKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIHVuZGVmaW5lZCwgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlX19Db21wb25lbnQkUm9vdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcImhlbGxvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKVxuICAgICAgICAgICAgfSk7XG59XG5cbnZhciBtYWtlID0gUGFnZV9fQ29tcG9uZW50O1xuXG5leHBvcnRzLmZvcm1hdFRpdGxlID0gZm9ybWF0VGl0bGU7XG5leHBvcnRzLlJvb3QgPSBSb290O1xuZXhwb3J0cy5tYWtlID0gbWFrZTtcbi8qIGNsYXNzTmFtZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTdHlsZSA9IHJlcXVpcmUoXCIuL1N0eWxlLmJzLmpzXCIpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEVtb3Rpb25TZXJ2ZXIgPSByZXF1aXJlKFwiZW1vdGlvbi1zZXJ2ZXJcIik7XG52YXIgUGFnZV9fQ29tcG9uZW50ID0gcmVxdWlyZShcIi4vUGFnZV9fQ29tcG9uZW50LmJzLmpzXCIpO1xudmFyIFNlcnZlciA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5mdW5jdGlvbiByZW5kZXIoc2l0ZU5hbWUsIHBhZ2VEYXRhKSB7XG4gIFN0eWxlLnJlZ2lzdGVyR2xvYmFsU3R5bGVzKHVuZGVmaW5lZCk7XG4gIHZhciByZW5kZXJlZCA9IEVtb3Rpb25TZXJ2ZXIucmVuZGVyU3R5bGVzVG9TdHJpbmcoU2VydmVyLnJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZV9fQ29tcG9uZW50Lm1ha2UsIHtcbiAgICAgICAgICAgICAgICBzaXRlTmFtZTogc2l0ZU5hbWUsXG4gICAgICAgICAgICAgICAgcGFnZURhdGE6IHBhZ2VEYXRhXG4gICAgICAgICAgICAgIH0pKSk7XG4gIHJldHVybiBcIjwhRE9DVFlQRSBodG1sPlwiICsgcmVuZGVyZWQ7XG59XG5cbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyO1xuLyogU3R5bGUgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3NzID0gcmVxdWlyZShcImJzLWNzcy1lbW90aW9uL3NyYy9Dc3MuanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xuXG52YXIgYmx1ZSA9IENzcy5yZ2IoMjUsIDExNiwgMTk1KTtcblxudmFyIGdyZXkxID0gQ3NzLnJnYigyNDksIDI0OSwgMjUwKTtcblxudmFyIGdyZXkyID0gQ3NzLnJnYigyMzMsIDIzNiwgMjM5KTtcblxudmFyIGdyZXkzID0gQ3NzLnJnYigyMjIsIDIyNiwgMjMwKTtcblxudmFyIGdyZXk0ID0gQ3NzLnJnYigyMDYsIDIxMiwgMjE4KTtcblxudmFyIGdyZXk1ID0gQ3NzLnJnYigxNzMsIDE4MSwgMTg5KTtcblxudmFyIGdyZXk2ID0gQ3NzLnJnYigxMDgsIDExNywgMTI1KTtcblxudmFyIGdyZXk3ID0gQ3NzLnJnYig3MywgODAsIDg3KTtcblxudmFyIGdyZXk4ID0gQ3NzLnJnYig1MiwgNTgsIDY0KTtcblxudmFyIGdyZXk5ID0gQ3NzLnJnYigzMywgMzcsIDQxKTtcblxudmFyIGRlc2t0b3BDb2x1bW5XaWR0aCA9IENzcy53aWR0aChDc3MucmVtKDM3LjUpKTtcblxudmFyIHBhcnRpYWxfYXJnID0gXCIobWluLXdpZHRoOiBcIiArIChTdHJpbmcoMzcuNSkgKyBcInJlbSlcIik7XG5cbmZ1bmN0aW9uIGRlc2t0b3BNZWRpYVF1ZXJ5KHBhcmFtKSB7XG4gIHJldHVybiBDc3MubWVkaWEocGFydGlhbF9hcmcsIHBhcmFtKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHbG9iYWxTdHlsZXMocGFyYW0pIHtcbiAgQ3VycnkuXzIoQ3NzLiQkZ2xvYmFsLCBcImFcIiwgLyogOjogKi9bXG4gICAgICAgIENzcy50ZXh0RGVjb3JhdGlvbihDc3Mubm9uZSksXG4gICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgIENzcy5jb2xvcihibHVlKSxcbiAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgXVxuICAgICAgXSk7XG4gIHZhciBjb2RlU3R5bGVfMDAwID0gQ3NzLmZvbnRTaXplKENzcy5yZW0oMC44NzUpKTtcbiAgdmFyIGNvZGVTdHlsZV8wMDEgPSAvKiA6OiAqL1tcbiAgICBDc3MuZm9udEZhbWlseSgvKiBtb25vc3BhY2UgKi8tNTU1MzYzOTAxKSxcbiAgICAvKiA6OiAqL1tcbiAgICAgIENzcy5iYWNrZ3JvdW5kQ29sb3IoZ3JleTIpLFxuICAgICAgLyogW10gKi8wXG4gICAgXVxuICBdO1xuICB2YXIgY29kZVN0eWxlID0gLyogOjogKi9bXG4gICAgY29kZVN0eWxlXzAwMCxcbiAgICBjb2RlU3R5bGVfMDAxXG4gIF07XG4gIEN1cnJ5Ll8yKENzcy4kJGdsb2JhbCwgXCJjb2RlXCIsIGNvZGVTdHlsZSk7XG4gIEN1cnJ5Ll8yKENzcy4kJGdsb2JhbCwgXCJwcmVcIiwgLyogOjogKi9bXG4gICAgICAgIENzcy5wYWRkaW5nKENzcy5yZW0oMC42MjUpKSxcbiAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgQ3NzLm92ZXJmbG93KENzcy5hdXRvKSxcbiAgICAgICAgICBjb2RlU3R5bGVcbiAgICAgICAgXVxuICAgICAgXSk7XG4gIHJldHVybiBDdXJyeS5fMihDc3MuJCRnbG9iYWwsIFwiaDEgY29kZSwgaDIgY29kZSwgaDMgY29kZVwiLCAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgQ3NzLmZvbnRTaXplKENzcy5pbmhlcml0XyksXG4gICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgXSk7XG59XG5cbnZhciBkYXJrQm9yZGVyQ29sb3VyID0gZ3JleTI7XG5cbnZhciBsaWdodEJvcmRlckNvbG91ciA9IGdyZXkzO1xuXG52YXIgZGVza3RvcENvbHVtblJlbSA9IDM3LjU7XG5cbmV4cG9ydHMuYmx1ZSA9IGJsdWU7XG5leHBvcnRzLmdyZXkxID0gZ3JleTE7XG5leHBvcnRzLmdyZXkyID0gZ3JleTI7XG5leHBvcnRzLmdyZXkzID0gZ3JleTM7XG5leHBvcnRzLmdyZXk0ID0gZ3JleTQ7XG5leHBvcnRzLmdyZXk1ID0gZ3JleTU7XG5leHBvcnRzLmdyZXk2ID0gZ3JleTY7XG5leHBvcnRzLmdyZXk3ID0gZ3JleTc7XG5leHBvcnRzLmdyZXk4ID0gZ3JleTg7XG5leHBvcnRzLmdyZXk5ID0gZ3JleTk7XG5leHBvcnRzLmRhcmtCb3JkZXJDb2xvdXIgPSBkYXJrQm9yZGVyQ29sb3VyO1xuZXhwb3J0cy5saWdodEJvcmRlckNvbG91ciA9IGxpZ2h0Qm9yZGVyQ29sb3VyO1xuZXhwb3J0cy5kZXNrdG9wQ29sdW1uUmVtID0gZGVza3RvcENvbHVtblJlbTtcbmV4cG9ydHMuZGVza3RvcENvbHVtbldpZHRoID0gZGVza3RvcENvbHVtbldpZHRoO1xuZXhwb3J0cy5kZXNrdG9wTWVkaWFRdWVyeSA9IGRlc2t0b3BNZWRpYVF1ZXJ5O1xuZXhwb3J0cy5yZWdpc3Rlckdsb2JhbFN0eWxlcyA9IHJlZ2lzdGVyR2xvYmFsU3R5bGVzO1xuLyogYmx1ZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcmdwYXJzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1jc3MtZW1vdGlvbi9zcmMvQ3NzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9vcHRpb24uanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vdGlvbi1zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0Zsb2F0LmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==