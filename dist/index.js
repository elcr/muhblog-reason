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

/***/ "./src/Constants.bs.js":
/*!*****************************!*\
  !*** ./src/Constants.bs.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE



var entriesPerPage = 10;

exports.entriesPerPage = entriesPerPage;
/* No side effect */


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
var Parse = __webpack_require__(/*! ./Parse.bs.js */ "./src/Parse.bs.js");
var Server = __webpack_require__(/*! ./Server.bs.js */ "./src/Server.bs.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");

function printError(error) {
  var message;
  if (error.tag) {
    var match = error[0];
    switch (match.tag | 0) {
      case /* ReadDirectoryError */0 :
          switch (match[0].tag | 0) {
            case /* NoSuchFileOrDirectory */7 :
                message = "Entries path does not exist";
                break;
            case /* NotADirectory */8 :
                message = "Entries path is not a directory";
                break;
            default:
              message = "Error reading entries directory";
          }
          break;
      case /* ReadEntryError */1 :
          message = "Error reading entry: " + match[/* name */0];
          break;
      case /* ParseError */2 :
          message = "Error parsing entry: " + match[/* name */0];
          break;
      
    }
  } else {
    switch (error[0].tag | 0) {
      case /* IsADirectory */5 :
          message = "About path is a directory";
          break;
      case /* NoSuchFileOrDirectory */7 :
          message = "About file does not exist";
          break;
      default:
        message = "Error reading about file";
    }
  }
  console.error(message);
  
}

function main(param) {
  var match = CLI.parseArguments(undefined);
  var siteName = match.siteName;
  return Relude_IO.unsafeRunAsync((function (prim) {
                
              }), Relude_IO.bitap(Server.listen, printError, Relude_IO.map((function (data) {
                        return Server.make(siteName, data);
                      }), Parse.readAndParseAll(match.aboutPath, match.entriesDirectory))));
}

main(undefined);

exports.printError = printError;
exports.main = main;
/*  Not a pure module */


/***/ }),

/***/ "./src/Parse.bs.js":
/*!*************************!*\
  !*** ./src/Parse.bs.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var $$Date = __webpack_require__(/*! ./bindings/Date.bs.js */ "./src/bindings/Date.bs.js");
var Path = __webpack_require__(/*! path */ "path");
var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var Js_dict = __webpack_require__(/*! bs-platform/lib/js/js_dict.js */ "bs-platform/lib/js/js_dict.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var Relude_Int = __webpack_require__(/*! relude/src/Relude_Int.bs.js */ "relude/src/Relude_Int.bs.js");
var Caml_option = __webpack_require__(/*! bs-platform/lib/js/caml_option.js */ "bs-platform/lib/js/caml_option.js");
var Relude_List = __webpack_require__(/*! relude/src/Relude_List.bs.js */ "relude/src/Relude_List.bs.js");
var Relude_Array = __webpack_require__(/*! relude/src/Relude_Array.bs.js */ "relude/src/Relude_Array.bs.js");
var Relude_Option = __webpack_require__(/*! relude/src/Relude_Option.bs.js */ "relude/src/Relude_Option.bs.js");
var Relude_Result = __webpack_require__(/*! relude/src/Relude_Result.bs.js */ "relude/src/Relude_Result.bs.js");
var NodeFS__ReadDir = __webpack_require__(/*! node-fs-bs/src/NodeFS__ReadDir.bs.js */ "node-fs-bs/src/NodeFS__ReadDir.bs.js");
var NodeFS__ReadFile = __webpack_require__(/*! node-fs-bs/src/NodeFS__ReadFile.bs.js */ "node-fs-bs/src/NodeFS__ReadFile.bs.js");
var MarkdownMetadata = __webpack_require__(/*! markdown-metadata */ "markdown-metadata");

function parseTitle(metadata) {
  return Curry._2(Relude_Option.flatMap, (function (param) {
                return Relude_Array.at(0, param);
              }), Js_dict.get(metadata, "title"));
}

var partial_arg = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2})$/;

function matchDate(param) {
  return Caml_option.null_to_opt(partial_arg.exec(param));
}

function parseTimestamp(metadata) {
  return Relude_Result.flatMap((function (match_) {
                var captures = match_.slice(1).map((function (capture) {
                        return Curry._2(Relude_Option.flatMap, Relude_Int.fromString, (capture == null) ? undefined : Caml_option.some(capture));
                      }));
                if (captures.length !== 5) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var year = captures[0];
                if (year === undefined) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var month = captures[1];
                if (month === undefined) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var day = captures[2];
                if (day === undefined) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var hour = captures[3];
                if (hour === undefined) {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
                var minute = captures[4];
                if (minute !== undefined) {
                  return /* Ok */Block.__(0, [$$Date.make(year, month, day, hour, minute, undefined)]);
                } else {
                  return /* Error */Block.__(1, [/* Malformed */1]);
                }
              }), Relude_Result.flatMap((function (date) {
                    return Relude_Result.fromOption(/* Malformed */1, matchDate(date));
                  }), Relude_Result.fromOption(/* Missing */0, Curry._2(Relude_Option.flatMap, (function (param) {
                            return Relude_Array.at(0, param);
                          }), Js_dict.get(metadata, "date")))));
}

function parseTags(metadata) {
  return Relude_Option.map(Relude_List.fromArray, Relude_Option.filter((function (array) {
                      return array.length > 0;
                    }))(Js_dict.get(metadata, "tags")));
}

function parseEntry(markdown) {
  var match = MarkdownMetadata.parseMetadata(markdown);
  var metadata = match[0];
  var match$1 = parseTitle(metadata);
  var match$2 = parseTimestamp(metadata);
  var match$3 = parseTags(metadata);
  if (match$1 !== undefined) {
    if (match$2.tag) {
      if (match$3 !== undefined) {
        return /* Error */Block.__(1, [/* TimestampError */[match$2[0]]]);
      } else {
        return /* Error */Block.__(1, [/* BadMetadata */2]);
      }
    } else if (match$3 !== undefined) {
      return /* Ok */Block.__(0, [{
                  title: match$1,
                  date: match$2[0],
                  tags: match$3,
                  text: match[1]
                }]);
    } else {
      return /* Error */Block.__(1, [/* TagsMissing */1]);
    }
  } else if (match$2.tag || match$3 === undefined) {
    return /* Error */Block.__(1, [/* BadMetadata */2]);
  } else {
    return /* Error */Block.__(1, [/* TitleMissing */0]);
  }
}

function readAndParseEntriesDirectory(directory) {
  return Relude_IO.flatMap((function (entries) {
                return entries.filter((function (entry) {
                                  if (entry.name.toLowerCase().endsWith(".md")) {
                                    return !entry.isDirectory();
                                  } else {
                                    return false;
                                  }
                                })).map((function (param) {
                                var name = param.name;
                                var path = Path.join(directory, name);
                                return Relude_IO.flatMap((function (text) {
                                              return Relude_IO.fromResult(Curry._2(Relude_Result.mapError, (function (error) {
                                                                return /* ParseError */Block.__(2, [
                                                                          /* name */name,
                                                                          /* error */error
                                                                        ]);
                                                              }), parseEntry(text)));
                                            }), Curry._2(Relude_IO.mapError, (function (error) {
                                                  return /* ReadEntryError */Block.__(1, [
                                                            /* name */name,
                                                            /* error */error
                                                          ]);
                                                }), Relude_IO.flatMap((function (param) {
                                                      return NodeFS__ReadFile.readFile(undefined, path);
                                                    }), /* Suspend */Block.__(2, [(function (param) {
                                                          console.log("Reading entry from \"" + (String(path) + "\""));
                                                          
                                                        })]))));
                              })).reduce((function (accumulator, current) {
                              return Relude_IO.flatMap((function (entries) {
                                            return Relude_IO.map((function (entry) {
                                                          return /* :: */[
                                                                  entry,
                                                                  entries
                                                                ];
                                                        }), current);
                                          }), accumulator);
                            }), /* Pure */Block.__(0, [/* [] */0]));
              }), Curry._2(Relude_IO.mapError, (function (error) {
                    return /* ReadDirectoryError */Block.__(0, [error]);
                  }), Relude_IO.flatMap((function (param) {
                        return NodeFS__ReadDir.readDir(undefined, directory);
                      }), /* Suspend */Block.__(2, [(function (param) {
                            console.log("Reading from entries directory \"" + (String(directory) + "\""));
                            
                          })]))));
}

function readAndParseAboutPath(path) {
  return Relude_IO.flatMap((function (param) {
                return NodeFS__ReadFile.readFile(undefined, path);
              }), /* Suspend */Block.__(2, [(function (param) {
                    console.log("Reading about text from \"" + (String(path) + "\""));
                    
                  })]));
}

function readAndParseAll(aboutPath, entriesDirectory) {
  return Relude_IO.flatMap((function (entries) {
                return Relude_IO.bimap((function (about) {
                              return {
                                      about: about,
                                      entries: entries
                                    };
                            }), (function (error) {
                              return /* AboutFileError */Block.__(0, [error]);
                            }), readAndParseAboutPath(aboutPath));
              }), Curry._2(Relude_IO.mapError, (function (error) {
                    return /* EntriesDirectoryError */Block.__(1, [error]);
                  }), readAndParseEntriesDirectory(entriesDirectory)));
}

exports.parseTitle = parseTitle;
exports.matchDate = matchDate;
exports.parseTimestamp = parseTimestamp;
exports.parseTags = parseTags;
exports.parseEntry = parseEntry;
exports.readAndParseEntriesDirectory = readAndParseEntriesDirectory;
exports.readAndParseAboutPath = readAndParseAboutPath;
exports.readAndParseAll = readAndParseAll;
/* path Not a pure module */


/***/ }),

/***/ "./src/Response.bs.js":
/*!****************************!*\
  !*** ./src/Response.bs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");

var notFound = /* Page */Block.__(0, [
    /* data */undefined,
    /* status */400
  ]);

exports.notFound = notFound;
/* No side effect */


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
var $$Response = __webpack_require__(/*! ./Response.bs.js */ "./src/Response.bs.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var Caml_option = __webpack_require__(/*! bs-platform/lib/js/caml_option.js */ "bs-platform/lib/js/caml_option.js");
var Page__Render = __webpack_require__(/*! ./views/Page__Render.bs.js */ "./src/views/Page__Render.bs.js");
var Relude_Option = __webpack_require__(/*! relude/src/Relude_Option.bs.js */ "relude/src/Relude_Option.bs.js");
var AboutController = __webpack_require__(/*! ./controllers/AboutController.bs.js */ "./src/controllers/AboutController.bs.js");
var EntryController = __webpack_require__(/*! ./controllers/EntryController.bs.js */ "./src/controllers/EntryController.bs.js");
var IndexController = __webpack_require__(/*! ./controllers/IndexController.bs.js */ "./src/controllers/IndexController.bs.js");
var StaticController = __webpack_require__(/*! ./controllers/StaticController.bs.js */ "./src/controllers/StaticController.bs.js");
var TagSearchController = __webpack_require__(/*! ./controllers/TagSearchController.bs.js */ "./src/controllers/TagSearchController.bs.js");

function splitURLSegments(url) {
  return url.slice(1).split("/").map((function (segment) {
                  return decodeURIComponent(segment).trim();
                })).filter((function (segment) {
                return segment.length >= 1;
              }));
}

function makeResponse(param, route) {
  var entries = param.entries;
  if (typeof route === "number") {
    return AboutController.makeResponse(param.about);
  }
  switch (route.tag | 0) {
    case /* Index */0 :
        return IndexController.makeResponse(entries, route[/* page */0]);
    case /* TagSearch */1 :
        return TagSearchController.makeResponse(entries, route[/* slug */0], route[/* page */1]);
    case /* Entry */2 :
        return EntryController.makeResponse(entries, route[/* year */0], route[/* month */1], route[/* day */2], route[/* slug */3]);
    case /* Static */3 :
        return StaticController.makeResponse(route[/* directory */0], route[/* filename */1]);
    
  }
}

function make(siteName, data) {
  return Http.createServer((function (request, response) {
                var url = Relude_Option.getOrElse("/", Caml_option.undefined_to_opt(request.url));
                return Relude_IO.unsafeRunAsync((function (prim) {
                              
                            }), Relude_IO.tap((function (res) {
                                    var startTime = Date.now();
                                    response.on("close", (function (param) {
                                            var status = response.statusCode;
                                            var ms = Date.now() - startTime | 0;
                                            console.log("" + (String(status) + (" " + (String(url) + (" " + (String(ms) + "ms"))))));
                                            
                                          }));
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
                                    
                                  }))(Relude_IO.handleError((function (param) {
                                      return $$Response.notFound;
                                    }), Relude_IO.flatMap((function (param) {
                                          return makeResponse(data, param);
                                        }), Relude_IO.fromOption((function (prim) {
                                              
                                            }), Router.route(splitURLSegments(url)))))));
              }));
}

function listen(param) {
  param.listen(5000, "127.0.0.1", (function (param) {
          console.log("Listening");
          
        }));
  
}

exports.splitURLSegments = splitURLSegments;
exports.makeResponse = makeResponse;
exports.make = make;
exports.listen = listen;
/* http Not a pure module */


/***/ }),

/***/ "./src/Utils.bs.js":
/*!*************************!*\
  !*** ./src/Utils.bs.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var Slugify = __webpack_require__(/*! slugify-bs/src/Slugify.bs.js */ "slugify-bs/src/Slugify.bs.js");

function slug(param) {
  return Curry._3(Slugify.slugify, "-", param, true);
}

exports.slug = slug;
/* Slugify Not a pure module */


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

/***/ "./src/bindings/Date.bs.js":
/*!*********************************!*\
  !*** ./src/bindings/Date.bs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE



function make(year, month, day, hourOpt, minuteOpt, param) {
  var hour = hourOpt !== undefined ? hourOpt : 0;
  var minute = minuteOpt !== undefined ? minuteOpt : 0;
  return new Date(year, month - 1 | 0, day, hour, minute);
}

function getMonth(date) {
  return date.getMonth() + 1 | 0;
}

exports.make = make;
exports.getMonth = getMonth;
/* No side effect */


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
  var date = new Date(timestamp).toUTCString();
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
/* No side effect */


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

function makeResponse(about) {
  return /* Pure */Block.__(0, [/* Page */Block.__(0, [
                /* data *//* About */Block.__(2, [{
                      text: about
                    }]),
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


var $$Date = __webpack_require__(/*! ../bindings/Date.bs.js */ "./src/bindings/Date.bs.js");
var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var Utils = __webpack_require__(/*! ../Utils.bs.js */ "./src/Utils.bs.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var Relude_Int = __webpack_require__(/*! relude/src/Relude_Int.bs.js */ "relude/src/Relude_Int.bs.js");
var Relude_List = __webpack_require__(/*! relude/src/Relude_List.bs.js */ "relude/src/Relude_List.bs.js");
var Relude_Option = __webpack_require__(/*! relude/src/Relude_Option.bs.js */ "relude/src/Relude_Option.bs.js");

function dayTimestamp(date) {
  return $$Date.make(date.getFullYear(), $$Date.getMonth(date), date.getDate(), undefined, undefined, undefined).getTime();
}

function makeResponse(entries, year, month, day, slug) {
  var timestamp = $$Date.make(year, month, day, undefined, undefined, undefined).getTime();
  return Relude_IO.map((function (entry) {
                return /* Page */Block.__(0, [
                          /* data *//* Entry */Block.__(3, [{
                                title: entry.title,
                                date: entry.date,
                                text: entry.text,
                                tags: entry.tags,
                                previous: Relude_Option.map((function (entry) {
                                        return entry.title;
                                      }), Curry._2(Relude_List.find, (function (entry) {
                                            return dayTimestamp(entry.date) < timestamp;
                                          }), Relude_List.sortBy((function (a, b) {
                                                return Curry._2(Relude_Int.compare, b.date.getTime(), a.date.getTime());
                                              }), entries))),
                                next: Relude_Option.map((function (entry) {
                                        return entry.title;
                                      }), Curry._2(Relude_List.find, (function (entry) {
                                            return dayTimestamp(entry.date) > timestamp;
                                          }), Relude_List.sortBy((function (a, b) {
                                                return Curry._2(Relude_Int.compare, a.date.getTime(), b.date.getTime());
                                              }), entries)))
                              }]),
                          /* status */200
                        ]);
              }), Relude_IO.fromOption((function (prim) {
                    
                  }), Curry._2(Relude_List.find, (function (entry) {
                        if (dayTimestamp(entry.date) === timestamp) {
                          return Curry._1(Utils.slug(undefined), entry.title) === slug;
                        } else {
                          return false;
                        }
                      }), entries)));
}

exports.dayTimestamp = dayTimestamp;
exports.makeResponse = makeResponse;
/* Utils Not a pure module */


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
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var Constants = __webpack_require__(/*! ../Constants.bs.js */ "./src/Constants.bs.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var Caml_int32 = __webpack_require__(/*! bs-platform/lib/js/caml_int32.js */ "bs-platform/lib/js/caml_int32.js");
var Relude_Int = __webpack_require__(/*! relude/src/Relude_Int.bs.js */ "relude/src/Relude_Int.bs.js");
var Relude_List = __webpack_require__(/*! relude/src/Relude_List.bs.js */ "relude/src/Relude_List.bs.js");
var Relude_Option = __webpack_require__(/*! relude/src/Relude_Option.bs.js */ "relude/src/Relude_Option.bs.js");

function makeResponse(entries, page) {
  return Relude_IO.fromOption((function (prim) {
                
              }), Curry._2(Relude_Option.flatMap, (function (param) {
                    return Relude_Option.map((function (pageEntries) {
                                  return /* Page */Block.__(0, [
                                            /* data *//* Index */Block.__(0, [{
                                                  page: page,
                                                  total: Curry._1(Relude_List.length, entries),
                                                  entries: Relude_List.map((function (entry) {
                                                            return {
                                                                    title: entry.title,
                                                                    date: entry.date,
                                                                    text: entry.text
                                                                  };
                                                          }))(pageEntries)
                                                }]),
                                            /* status */200
                                          ]);
                                }), Relude_Option.filter((function (pageEntries) {
                                        return Curry._1(Relude_List.length, pageEntries) !== 0;
                                      }))(Relude_List.take(Constants.entriesPerPage, param[1])));
                  }), Relude_List.splitAt(Caml_int32.imul(page - 1 | 0, Constants.entriesPerPage), Relude_List.sortBy((function (a, b) {
                            return Curry._2(Relude_Int.compare, b.date.getTime(), a.date.getTime());
                          }), entries))));
}

exports.makeResponse = makeResponse;
/* Relude_IO Not a pure module */


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

function makeResponse(directory, filename) {
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

function makeResponse(entries, slug, page) {
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
var AboutPage = __webpack_require__(/*! ./pages/AboutPage.bs.js */ "./src/views/pages/AboutPage.bs.js");
var EntryPage = __webpack_require__(/*! ./pages/EntryPage.bs.js */ "./src/views/pages/EntryPage.bs.js");
var IndexPage = __webpack_require__(/*! ./pages/IndexPage.bs.js */ "./src/views/pages/IndexPage.bs.js");
var NotFoundPage = __webpack_require__(/*! ./pages/NotFoundPage.bs.js */ "./src/views/pages/NotFoundPage.bs.js");
var TagSearchPage = __webpack_require__(/*! ./pages/TagSearchPage.bs.js */ "./src/views/pages/TagSearchPage.bs.js");
var BootstrapRebootMinCss = __webpack_require__(/*! bootstrap/dist/css/bootstrap-reboot.min.css */ "./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css");

function formatTitle(siteName, pageData) {
  if (pageData === undefined) {
    return "Not found | " + (String(siteName) + "");
  }
  switch (pageData.tag | 0) {
    case /* Index */0 :
        return siteName;
    case /* TagSearch */1 :
        return "" + (String(pageData[0].tag) + (" | " + (String(siteName) + "")));
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
  var content;
  if (pageData !== undefined) {
    switch (pageData.tag | 0) {
      case /* Index */0 :
          content = React.createElement(IndexPage.make, {
                data: pageData[0]
              });
          break;
      case /* TagSearch */1 :
          content = React.createElement(TagSearchPage.make, {
                data: pageData[0]
              });
          break;
      case /* About */2 :
          content = React.createElement(AboutPage.make, {
                data: pageData[0]
              });
          break;
      case /* Entry */3 :
          content = React.createElement(EntryPage.make, {
                data: pageData[0]
              });
          break;
      
    }
  } else {
    content = React.createElement(NotFoundPage.make, { });
  }
  return React.createElement(Emotion.Provider.make, {
              children: React.createElement("html", {
                    lang: "en"
                  }, React.createElement("head", undefined, React.createElement("meta", {
                            charSet: "utf-8"
                          }), React.createElement("meta", {
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
                            name: "viewport"
                          }), React.createElement("title", undefined, title), React.createElement("style", undefined, BootstrapRebootMinCss)), React.createElement("body", undefined, React.createElement(Page__Component$Root, {
                            children: content
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

/***/ "./src/views/pages/AboutPage.bs.js":
/*!*****************************************!*\
  !*** ./src/views/pages/AboutPage.bs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var React = __webpack_require__(/*! react */ "react");

function AboutPage(Props) {
  var param = Props.data;
  return React.createElement("div", undefined, React.createElement("div", undefined, "about"), React.createElement("div", undefined, param.text));
}

var make = AboutPage;

exports.make = make;
/* react Not a pure module */


/***/ }),

/***/ "./src/views/pages/EntryPage.bs.js":
/*!*****************************************!*\
  !*** ./src/views/pages/EntryPage.bs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var React = __webpack_require__(/*! react */ "react");

function EntryPage(Props) {
  var param = Props.data;
  return React.createElement("div", undefined, React.createElement("div", undefined, param.title), React.createElement("div", undefined, param.text));
}

var make = EntryPage;

exports.make = make;
/* react Not a pure module */


/***/ }),

/***/ "./src/views/pages/IndexPage.bs.js":
/*!*****************************************!*\
  !*** ./src/views/pages/IndexPage.bs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var React = __webpack_require__(/*! react */ "react");
var Relude_List = __webpack_require__(/*! relude/src/Relude_List.bs.js */ "relude/src/Relude_List.bs.js");

function IndexPage(Props) {
  var param = Props.data;
  var entries = Relude_List.toArray(Relude_List.map((function (entry) {
                return React.createElement("div", {
                            key: entry.title
                          }, entry.title);
              }))(param.entries));
  return React.createElement("div", undefined, React.createElement("div", undefined, "page " + (String(param.page) + "")), React.createElement("div", undefined, "total " + (String(param.total) + "")), React.createElement("div", undefined, entries));
}

var make = IndexPage;

exports.make = make;
/* react Not a pure module */


/***/ }),

/***/ "./src/views/pages/NotFoundPage.bs.js":
/*!********************************************!*\
  !*** ./src/views/pages/NotFoundPage.bs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var React = __webpack_require__(/*! react */ "react");

function NotFoundPage(Props) {
  return React.createElement("div", undefined, "not found");
}

var make = NotFoundPage;

exports.make = make;
/* react Not a pure module */


/***/ }),

/***/ "./src/views/pages/TagSearchPage.bs.js":
/*!*********************************************!*\
  !*** ./src/views/pages/TagSearchPage.bs.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var React = __webpack_require__(/*! react */ "react");
var Relude_List = __webpack_require__(/*! relude/src/Relude_List.bs.js */ "relude/src/Relude_List.bs.js");

function TagSearchPage(Props) {
  var param = Props.data;
  var entries = Relude_List.toArray(Relude_List.map((function (entry) {
                return React.createElement("div", {
                            key: entry.title
                          }, entry.title);
              }))(param.entries));
  return React.createElement("div", undefined, React.createElement("div", undefined, "tag " + (String(param.tag) + "")), React.createElement("div", undefined, "page " + (String(param.page) + "")), React.createElement("div", undefined, entries));
}

var make = TagSearchPage;

exports.make = make;
/* react Not a pure module */


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

/***/ "bs-platform/lib/js/caml_int32.js":
/*!***************************************************!*\
  !*** external "bs-platform/lib/js/caml_int32.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bs-platform/lib/js/caml_int32.js");

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

/***/ "bs-platform/lib/js/js_dict.js":
/*!************************************************!*\
  !*** external "bs-platform/lib/js/js_dict.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bs-platform/lib/js/js_dict.js");

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

/***/ "markdown-metadata":
/*!************************************!*\
  !*** external "markdown-metadata" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-metadata");

/***/ }),

/***/ "node-fs-bs/src/NodeFS__ReadDir.bs.js":
/*!*******************************************************!*\
  !*** external "node-fs-bs/src/NodeFS__ReadDir.bs.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fs-bs/src/NodeFS__ReadDir.bs.js");

/***/ }),

/***/ "node-fs-bs/src/NodeFS__ReadFile.bs.js":
/*!********************************************************!*\
  !*** external "node-fs-bs/src/NodeFS__ReadFile.bs.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fs-bs/src/NodeFS__ReadFile.bs.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

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

/***/ "relude/src/Relude_Array.bs.js":
/*!************************************************!*\
  !*** external "relude/src/Relude_Array.bs.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relude/src/Relude_Array.bs.js");

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

/***/ "relude/src/Relude_List.bs.js":
/*!***********************************************!*\
  !*** external "relude/src/Relude_List.bs.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relude/src/Relude_List.bs.js");

/***/ }),

/***/ "relude/src/Relude_Option.bs.js":
/*!*************************************************!*\
  !*** external "relude/src/Relude_Option.bs.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relude/src/Relude_Option.bs.js");

/***/ }),

/***/ "relude/src/Relude_Result.bs.js":
/*!*************************************************!*\
  !*** external "relude/src/Relude_Result.bs.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("relude/src/Relude_Result.bs.js");

/***/ }),

/***/ "slugify-bs/src/Slugify.bs.js":
/*!***********************************************!*\
  !*** external "slugify-bs/src/Slugify.bs.js" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("slugify-bs/src/Slugify.bs.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAtcmVib290Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NMSS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFyc2UuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3BvbnNlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JpbmRpbmdzL0FyZ1BhcnNlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9EYXRlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9FbW90aW9uLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9IVFRQLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9QYWNrYWdlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9BYm91dENvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0VudHJ5Q29udHJvbGxlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TdGF0aWNDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9UYWdTZWFyY2hDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9QYWdlX19Db21wb25lbnQuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1BhZ2VfX1JlbmRlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU3R5bGUuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0Fib3V0UGFnZS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvRW50cnlQYWdlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9JbmRleFBhZ2UuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL05vdEZvdW5kUGFnZS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvVGFnU2VhcmNoUGFnZS5icy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXJncGFyc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1jc3MtZW1vdGlvbi9zcmMvQ3NzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfaW50MzIuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9vcHRpb24uanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1wbGF0Zm9ybS9saWIvanMvanNfZGljdC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbW90aW9uLXNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZG93bi1tZXRhZGF0YVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZERpci5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZEZpbGUuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsdWRlL3NyYy9SZWx1ZGVfQXJyYXkuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9SZXN1bHQuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzbHVnaWZ5LWJzL3NyYy9TbHVnaWZ5LmJzLmpzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0luZGV4LmJzLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIVxcbiAqIEJvb3RzdHJhcCBSZWJvb3QgdjQuNS4wIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxcbiAqIENvcHlyaWdodCAyMDExLTIwMjAgVGhlIEJvb3RzdHJhcCBBdXRob3JzXFxuICogQ29weXJpZ2h0IDIwMTEtMjAyMCBUd2l0dGVyLCBJbmMuXFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcXG4gKiBGb3JrZWQgZnJvbSBOb3JtYWxpemUuY3NzLCBsaWNlbnNlZCBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcXG4gKi8qLDo6YWZ0ZXIsOjpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94fWh0bWx7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjE1Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH1hcnRpY2xlLGFzaWRlLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31ib2R5e21hcmdpbjowO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsQXJpYWwsXFxcIk5vdG8gU2Fuc1xcXCIsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjU7Y29sb3I6IzIxMjUyOTt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojZmZmfVt0YWJpbmRleD1cXFwiLTFcXFwiXTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpe291dGxpbmU6MCFpbXBvcnRhbnR9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfWgxLGgyLGgzLGg0LGg1LGg2e21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOi41cmVtfXB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MXJlbX1hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdLGFiYnJbdGl0bGVde3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDtjdXJzb3I6aGVscDtib3JkZXItYm90dG9tOjA7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6bm9uZTt0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6bm9uZX1hZGRyZXNze21hcmdpbi1ib3R0b206MXJlbTtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDppbmhlcml0fWRsLG9sLHVse21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjFyZW19b2wgb2wsb2wgdWwsdWwgb2wsdWwgdWx7bWFyZ2luLWJvdHRvbTowfWR0e2ZvbnQtd2VpZ2h0OjcwMH1kZHttYXJnaW4tYm90dG9tOi41cmVtO21hcmdpbi1sZWZ0OjB9YmxvY2txdW90ZXttYXJnaW46MCAwIDFyZW19YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1he2NvbG9yOiMwMDdiZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1hOmhvdmVye2NvbG9yOiMwMDU2YjM7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1hOm5vdChbaHJlZl0pe2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YTpub3QoW2hyZWZdKTpob3Zlcntjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5OlNGTW9uby1SZWd1bGFyLE1lbmxvLE1vbmFjbyxDb25zb2xhcyxcXFwiTGliZXJhdGlvbiBNb25vXFxcIixcXFwiQ291cmllciBOZXdcXFwiLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfXByZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxcmVtO292ZXJmbG93OmF1dG87LW1zLW92ZXJmbG93LXN0eWxlOnNjcm9sbGJhcn1maWd1cmV7bWFyZ2luOjAgMCAxcmVtfWltZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLXN0eWxlOm5vbmV9c3Zne292ZXJmbG93OmhpZGRlbjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfWNhcHRpb257cGFkZGluZy10b3A6Ljc1cmVtO3BhZGRpbmctYm90dG9tOi43NXJlbTtjb2xvcjojNmM3NTdkO3RleHQtYWxpZ246bGVmdDtjYXB0aW9uLXNpZGU6Ym90dG9tfXRoe3RleHQtYWxpZ246aW5oZXJpdH1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOi41cmVtfWJ1dHRvbntib3JkZXItcmFkaXVzOjB9YnV0dG9uOmZvY3Vze291dGxpbmU6MXB4IGRvdHRlZDtvdXRsaW5lOjVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcn1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe21hcmdpbjowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3JvbGU9YnV0dG9uXXtjdXJzb3I6cG9pbnRlcn1zZWxlY3R7d29yZC13cmFwOm5vcm1hbH1bdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksW3R5cGU9cmVzZXRdOm5vdCg6ZGlzYWJsZWQpLFt0eXBlPXN1Ym1pdF06bm90KDpkaXNhYmxlZCksYnV0dG9uOm5vdCg6ZGlzYWJsZWQpe2N1cnNvcjpwb2ludGVyfVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXItc3R5bGU6bm9uZX1pbnB1dFt0eXBlPWNoZWNrYm94XSxpbnB1dFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfXRleHRhcmVhe292ZXJmbG93OmF1dG87cmVzaXplOnZlcnRpY2FsfWZpZWxkc2V0e21pbi13aWR0aDowO3BhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MH1sZWdlbmR7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDttYXJnaW4tYm90dG9tOi41cmVtO2ZvbnQtc2l6ZToxLjVyZW07bGluZS1oZWlnaHQ6aW5oZXJpdDtjb2xvcjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXtvdXRsaW5lLW9mZnNldDotMnB4Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lfVt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbntmb250OmluaGVyaXQ7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1vdXRwdXR7ZGlzcGxheTppbmxpbmUtYmxvY2t9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbTtjdXJzb3I6cG9pbnRlcn10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudH1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwICovXCI7IiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQYWNrYWdlID0gcmVxdWlyZShcIi4vYmluZGluZ3MvUGFja2FnZS5icy5qc1wiKTtcbnZhciBBcmdQYXJzZSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdzL0FyZ1BhcnNlLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJhbSkge1xuICB2YXIgcGFyc2VyID0gQXJnUGFyc2UubWFrZShQYWNrYWdlLmpzb24udmVyc2lvbiwgUGFja2FnZS5qc29uLm5hbWUpO1xuICBBcmdQYXJzZS5hZGRBcmd1bWVudChcIi1zXCIsIFwiLS1zaXRlLW5hbWVcIiwgXCJzaXRlTmFtZVwiLCB0cnVlLCBcIlNUUklOR1wiLCBwYXJzZXIpO1xuICBBcmdQYXJzZS5hZGRBcmd1bWVudChcIi1lXCIsIFwiLS1lbnRyaWVzLWRpcmVjdG9yeVwiLCBcImVudHJpZXNEaXJlY3RvcnlcIiwgdHJ1ZSwgXCJQQVRIXCIsIHBhcnNlcik7XG4gIEFyZ1BhcnNlLmFkZEFyZ3VtZW50KFwiLWFcIiwgXCItLWFib3V0LXBhdGhcIiwgXCJhYm91dFBhdGhcIiwgdHJ1ZSwgXCJQQVRIXCIsIHBhcnNlcik7XG4gIHJldHVybiBwYXJzZXIucGFyc2VBcmdzKCk7XG59XG5cbmV4cG9ydHMucGFyc2VBcmd1bWVudHMgPSBwYXJzZUFyZ3VtZW50cztcbi8qIFBhY2thZ2UgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBlbnRyaWVzUGVyUGFnZSA9IDEwO1xuXG5leHBvcnRzLmVudHJpZXNQZXJQYWdlID0gZW50cmllc1BlclBhZ2U7XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDTEkgPSByZXF1aXJlKFwiLi9DTEkuYnMuanNcIik7XG52YXIgUGFyc2UgPSByZXF1aXJlKFwiLi9QYXJzZS5icy5qc1wiKTtcbnZhciBTZXJ2ZXIgPSByZXF1aXJlKFwiLi9TZXJ2ZXIuYnMuanNcIik7XG52YXIgUmVsdWRlX0lPID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBwcmludEVycm9yKGVycm9yKSB7XG4gIHZhciBtZXNzYWdlO1xuICBpZiAoZXJyb3IudGFnKSB7XG4gICAgdmFyIG1hdGNoID0gZXJyb3JbMF07XG4gICAgc3dpdGNoIChtYXRjaC50YWcgfCAwKSB7XG4gICAgICBjYXNlIC8qIFJlYWREaXJlY3RvcnlFcnJvciAqLzAgOlxuICAgICAgICAgIHN3aXRjaCAobWF0Y2hbMF0udGFnIHwgMCkge1xuICAgICAgICAgICAgY2FzZSAvKiBOb1N1Y2hGaWxlT3JEaXJlY3RvcnkgKi83IDpcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFbnRyaWVzIHBhdGggZG9lcyBub3QgZXhpc3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgLyogTm90QURpcmVjdG9yeSAqLzggOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVudHJpZXMgcGF0aCBpcyBub3QgYSBkaXJlY3RvcnlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIHJlYWRpbmcgZW50cmllcyBkaXJlY3RvcnlcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIFJlYWRFbnRyeUVycm9yICovMSA6XG4gICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgcmVhZGluZyBlbnRyeTogXCIgKyBtYXRjaFsvKiBuYW1lICovMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIFBhcnNlRXJyb3IgKi8yIDpcbiAgICAgICAgICBtZXNzYWdlID0gXCJFcnJvciBwYXJzaW5nIGVudHJ5OiBcIiArIG1hdGNoWy8qIG5hbWUgKi8wXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGVycm9yWzBdLnRhZyB8IDApIHtcbiAgICAgIGNhc2UgLyogSXNBRGlyZWN0b3J5ICovNSA6XG4gICAgICAgICAgbWVzc2FnZSA9IFwiQWJvdXQgcGF0aCBpcyBhIGRpcmVjdG9yeVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBOb1N1Y2hGaWxlT3JEaXJlY3RvcnkgKi83IDpcbiAgICAgICAgICBtZXNzYWdlID0gXCJBYm91dCBmaWxlIGRvZXMgbm90IGV4aXN0XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtZXNzYWdlID0gXCJFcnJvciByZWFkaW5nIGFib3V0IGZpbGVcIjtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgXG59XG5cbmZ1bmN0aW9uIG1haW4ocGFyYW0pIHtcbiAgdmFyIG1hdGNoID0gQ0xJLnBhcnNlQXJndW1lbnRzKHVuZGVmaW5lZCk7XG4gIHZhciBzaXRlTmFtZSA9IG1hdGNoLnNpdGVOYW1lO1xuICByZXR1cm4gUmVsdWRlX0lPLnVuc2FmZVJ1bkFzeW5jKChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmJpdGFwKFNlcnZlci5saXN0ZW4sIHByaW50RXJyb3IsIFJlbHVkZV9JTy5tYXAoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2VydmVyLm1ha2Uoc2l0ZU5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBQYXJzZS5yZWFkQW5kUGFyc2VBbGwobWF0Y2guYWJvdXRQYXRoLCBtYXRjaC5lbnRyaWVzRGlyZWN0b3J5KSkpKTtcbn1cblxubWFpbih1bmRlZmluZWQpO1xuXG5leHBvcnRzLnByaW50RXJyb3IgPSBwcmludEVycm9yO1xuZXhwb3J0cy5tYWluID0gbWFpbjtcbi8qICBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkJERhdGUgPSByZXF1aXJlKFwiLi9iaW5kaW5ncy9EYXRlLmJzLmpzXCIpO1xudmFyIFBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIEpzX2RpY3QgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2pzX2RpY3QuanNcIik7XG52YXIgUmVsdWRlX0lPID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JbnQgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIpO1xudmFyIENhbWxfb3B0aW9uID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX29wdGlvbi5qc1wiKTtcbnZhciBSZWx1ZGVfTGlzdCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9BcnJheSA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9BcnJheS5icy5qc1wiKTtcbnZhciBSZWx1ZGVfT3B0aW9uID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiKTtcbnZhciBSZWx1ZGVfUmVzdWx0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX1Jlc3VsdC5icy5qc1wiKTtcbnZhciBOb2RlRlNfX1JlYWREaXIgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRGlyLmJzLmpzXCIpO1xudmFyIE5vZGVGU19fUmVhZEZpbGUgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRmlsZS5icy5qc1wiKTtcbnZhciBNYXJrZG93bk1ldGFkYXRhID0gcmVxdWlyZShcIm1hcmtkb3duLW1ldGFkYXRhXCIpO1xuXG5mdW5jdGlvbiBwYXJzZVRpdGxlKG1ldGFkYXRhKSB7XG4gIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfT3B0aW9uLmZsYXRNYXAsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0FycmF5LmF0KDAsIHBhcmFtKTtcbiAgICAgICAgICAgICAgfSksIEpzX2RpY3QuZ2V0KG1ldGFkYXRhLCBcInRpdGxlXCIpKTtcbn1cblxudmFyIHBhcnRpYWxfYXJnID0gL14oWzAtOV17NH0pLShbMC05XXsyfSktKFswLTldezJ9KSAoWzAtOV17Mn0pOihbMC05XXsyfSkkLztcblxuZnVuY3Rpb24gbWF0Y2hEYXRlKHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsX3RvX29wdChwYXJ0aWFsX2FyZy5leGVjKHBhcmFtKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXN0YW1wKG1ldGFkYXRhKSB7XG4gIHJldHVybiBSZWx1ZGVfUmVzdWx0LmZsYXRNYXAoKGZ1bmN0aW9uIChtYXRjaF8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBtYXRjaF8uc2xpY2UoMSkubWFwKChmdW5jdGlvbiAoY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgUmVsdWRlX0ludC5mcm9tU3RyaW5nLCAoY2FwdHVyZSA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUoY2FwdHVyZSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZXMubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogTWFsZm9ybWVkICovMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgeWVhciA9IGNhcHR1cmVzWzBdO1xuICAgICAgICAgICAgICAgIGlmICh5ZWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtb250aCA9IGNhcHR1cmVzWzFdO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogTWFsZm9ybWVkICovMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZGF5ID0gY2FwdHVyZXNbMl07XG4gICAgICAgICAgICAgICAgaWYgKGRheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogTWFsZm9ybWVkICovMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaG91ciA9IGNhcHR1cmVzWzNdO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtaW51dGUgPSBjYXB0dXJlc1s0XTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBPayAqL0Jsb2NrLl9fKDAsIFskJERhdGUubWFrZSh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHVuZGVmaW5lZCldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIE1hbGZvcm1lZCAqLzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLCBSZWx1ZGVfUmVzdWx0LmZsYXRNYXAoKGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfUmVzdWx0LmZyb21PcHRpb24oLyogTWFsZm9ybWVkICovMSwgbWF0Y2hEYXRlKGRhdGUpKTtcbiAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfUmVzdWx0LmZyb21PcHRpb24oLyogTWlzc2luZyAqLzAsIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfQXJyYXkuYXQoMCwgcGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgSnNfZGljdC5nZXQobWV0YWRhdGEsIFwiZGF0ZVwiKSkpKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFncyhtZXRhZGF0YSkge1xuICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoUmVsdWRlX0xpc3QuZnJvbUFycmF5LCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgIH0pKShKc19kaWN0LmdldChtZXRhZGF0YSwgXCJ0YWdzXCIpKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRW50cnkobWFya2Rvd24pIHtcbiAgdmFyIG1hdGNoID0gTWFya2Rvd25NZXRhZGF0YS5wYXJzZU1ldGFkYXRhKG1hcmtkb3duKTtcbiAgdmFyIG1ldGFkYXRhID0gbWF0Y2hbMF07XG4gIHZhciBtYXRjaCQxID0gcGFyc2VUaXRsZShtZXRhZGF0YSk7XG4gIHZhciBtYXRjaCQyID0gcGFyc2VUaW1lc3RhbXAobWV0YWRhdGEpO1xuICB2YXIgbWF0Y2gkMyA9IHBhcnNlVGFncyhtZXRhZGF0YSk7XG4gIGlmIChtYXRjaCQxICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAobWF0Y2gkMi50YWcpIHtcbiAgICAgIGlmIChtYXRjaCQzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIFRpbWVzdGFtcEVycm9yICovW21hdGNoJDJbMF1dXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogQmFkTWV0YWRhdGEgKi8yXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaCQzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAvKiBPayAqL0Jsb2NrLl9fKDAsIFt7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogbWF0Y2gkMSxcbiAgICAgICAgICAgICAgICAgIGRhdGU6IG1hdGNoJDJbMF0sXG4gICAgICAgICAgICAgICAgICB0YWdzOiBtYXRjaCQzLFxuICAgICAgICAgICAgICAgICAgdGV4dDogbWF0Y2hbMV1cbiAgICAgICAgICAgICAgICB9XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBUYWdzTWlzc2luZyAqLzFdKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobWF0Y2gkMi50YWcgfHwgbWF0Y2gkMyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIEJhZE1ldGFkYXRhICovMl0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBUaXRsZU1pc3NpbmcgKi8wXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZEFuZFBhcnNlRW50cmllc0RpcmVjdG9yeShkaXJlY3RvcnkpIHtcbiAgcmV0dXJuIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLmZpbHRlcigoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFlbnRyeS5pc0RpcmVjdG9yeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkubWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBwYXJhbS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IFBhdGguam9pbihkaXJlY3RvcnksIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9JTy5mcm9tUmVzdWx0KEN1cnJ5Ll8yKFJlbHVkZV9SZXN1bHQubWFwRXJyb3IsIChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogUGFyc2VFcnJvciAqL0Jsb2NrLl9fKDIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbmFtZSAqL25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVycm9yICovZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcGFyc2VFbnRyeSh0ZXh0KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0lPLm1hcEVycm9yLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBSZWFkRW50cnlFcnJvciAqL0Jsb2NrLl9fKDEsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG5hbWUgKi9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZXJyb3IgKi9lcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRlNfX1JlYWRGaWxlLnJlYWRGaWxlKHVuZGVmaW5lZCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8qIFN1c3BlbmQgKi9CbG9jay5fXygyLCBbKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVhZGluZyBlbnRyeSBmcm9tIFxcXCJcIiArIChTdHJpbmcocGF0aCkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV0pKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnJlZHVjZSgoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8ubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgYWNjdW11bGF0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvKiBQdXJlICovQmxvY2suX18oMCwgWy8qIFtdICovMF0pKTtcbiAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9JTy5tYXBFcnJvciwgKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogUmVhZERpcmVjdG9yeUVycm9yICovQmxvY2suX18oMCwgW2Vycm9yXSk7XG4gICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5vZGVGU19fUmVhZERpci5yZWFkRGlyKHVuZGVmaW5lZCwgZGlyZWN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgLyogU3VzcGVuZCAqL0Jsb2NrLl9fKDIsIFsoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWFkaW5nIGZyb20gZW50cmllcyBkaXJlY3RvcnkgXFxcIlwiICsgKFN0cmluZyhkaXJlY3RvcnkpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSldKSkpKTtcbn1cblxuZnVuY3Rpb24gcmVhZEFuZFBhcnNlQWJvdXRQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZTX19SZWFkRmlsZS5yZWFkRmlsZSh1bmRlZmluZWQsIHBhdGgpO1xuICAgICAgICAgICAgICB9KSwgLyogU3VzcGVuZCAqL0Jsb2NrLl9fKDIsIFsoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVhZGluZyBhYm91dCB0ZXh0IGZyb20gXFxcIlwiICsgKFN0cmluZyhwYXRoKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSldKSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRBbmRQYXJzZUFsbChhYm91dFBhdGgsIGVudHJpZXNEaXJlY3RvcnkpIHtcbiAgcmV0dXJuIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8uYmltYXAoKGZ1bmN0aW9uIChhYm91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQ6IGFib3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzOiBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogQWJvdXRGaWxlRXJyb3IgKi9CbG9jay5fXygwLCBbZXJyb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcmVhZEFuZFBhcnNlQWJvdXRQYXRoKGFib3V0UGF0aCkpO1xuICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0lPLm1hcEVycm9yLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFbnRyaWVzRGlyZWN0b3J5RXJyb3IgKi9CbG9jay5fXygxLCBbZXJyb3JdKTtcbiAgICAgICAgICAgICAgICAgIH0pLCByZWFkQW5kUGFyc2VFbnRyaWVzRGlyZWN0b3J5KGVudHJpZXNEaXJlY3RvcnkpKSk7XG59XG5cbmV4cG9ydHMucGFyc2VUaXRsZSA9IHBhcnNlVGl0bGU7XG5leHBvcnRzLm1hdGNoRGF0ZSA9IG1hdGNoRGF0ZTtcbmV4cG9ydHMucGFyc2VUaW1lc3RhbXAgPSBwYXJzZVRpbWVzdGFtcDtcbmV4cG9ydHMucGFyc2VUYWdzID0gcGFyc2VUYWdzO1xuZXhwb3J0cy5wYXJzZUVudHJ5ID0gcGFyc2VFbnRyeTtcbmV4cG9ydHMucmVhZEFuZFBhcnNlRW50cmllc0RpcmVjdG9yeSA9IHJlYWRBbmRQYXJzZUVudHJpZXNEaXJlY3Rvcnk7XG5leHBvcnRzLnJlYWRBbmRQYXJzZUFib3V0UGF0aCA9IHJlYWRBbmRQYXJzZUFib3V0UGF0aDtcbmV4cG9ydHMucmVhZEFuZFBhcnNlQWxsID0gcmVhZEFuZFBhcnNlQWxsO1xuLyogcGF0aCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG5cbnZhciBub3RGb3VuZCA9IC8qIFBhZ2UgKi9CbG9jay5fXygwLCBbXG4gICAgLyogZGF0YSAqL3VuZGVmaW5lZCxcbiAgICAvKiBzdGF0dXMgKi80MDBcbiAgXSk7XG5cbmV4cG9ydHMubm90Rm91bmQgPSBub3RGb3VuZDtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgUmVsdWRlX0ludCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JbnQuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG5cbmZ1bmN0aW9uIHJvdXRlKHNlZ21lbnRzKSB7XG4gIHZhciBsZW4gPSBzZWdtZW50cy5sZW5ndGg7XG4gIGlmIChsZW4gPj0gNSkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gLyogSW5kZXggKi9CbG9jay5fXygwLCBbLyogcGFnZSAqLzFdKTtcbiAgICBjYXNlIDEgOlxuICAgICAgICB2YXIgcGFnZSA9IHNlZ21lbnRzWzBdO1xuICAgICAgICBpZiAocGFnZSA9PT0gXCJhYm91dFwiKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEFib3V0ICovMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogSW5kZXggKi9CbG9jay5fXygwLCBbLyogcGFnZSAqL3BhZ2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZSA+PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfSW50LmZyb21TdHJpbmcocGFnZSkpKTtcbiAgICAgICAgfVxuICAgIGNhc2UgMiA6XG4gICAgICAgIHZhciBkaXJlY3RvcnkgPSBzZWdtZW50c1swXTtcbiAgICAgICAgc3dpdGNoIChkaXJlY3RvcnkpIHtcbiAgICAgICAgICBjYXNlIFwidGFnXCIgOlxuICAgICAgICAgICAgICB2YXIgc2x1ZyA9IHNlZ21lbnRzWzFdO1xuICAgICAgICAgICAgICByZXR1cm4gLyogVGFnU2VhcmNoICovQmxvY2suX18oMSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBwYWdlICovMVxuICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgIGNhc2UgXCJzdGF0aWNcIiA6XG4gICAgICAgICAgY2FzZSBcInVwbG9hZHNcIiA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IHNlZ21lbnRzWzFdO1xuICAgICAgICByZXR1cm4gLyogU3RhdGljICovQmxvY2suX18oMywgW1xuICAgICAgICAgICAgICAgICAgLyogZGlyZWN0b3J5ICovZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgICAgLyogZmlsZW5hbWUgKi9maWxlbmFtZVxuICAgICAgICAgICAgICAgIF0pO1xuICAgIGNhc2UgMyA6XG4gICAgICAgIHZhciBtYXRjaCA9IHNlZ21lbnRzWzBdO1xuICAgICAgICBpZiAobWF0Y2ggIT09IFwidGFnXCIpIHtcbiAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzbHVnJDEgPSBzZWdtZW50c1sxXTtcbiAgICAgICAgdmFyIHBhZ2UkMSA9IHNlZ21lbnRzWzJdO1xuICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIFRhZ1NlYXJjaCAqL0Jsb2NrLl9fKDEsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWckMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcGFnZSAqL3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UgPj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JbnQuZnJvbVN0cmluZyhwYWdlJDEpKSk7XG4gICAgY2FzZSA0IDpcbiAgICAgICAgdmFyIHllYXIgPSBzZWdtZW50c1swXTtcbiAgICAgICAgdmFyIG1vbnRoID0gc2VnbWVudHNbMV07XG4gICAgICAgIHZhciBkYXkgPSBzZWdtZW50c1syXTtcbiAgICAgICAgdmFyIHNsdWckMiA9IHNlZ21lbnRzWzNdO1xuICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFbnRyeSAqL0Jsb2NrLl9fKDIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogeWVhciAqL3BhcmFtWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBtb250aCAqL3BhcmFtWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBkYXkgKi9wYXJhbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWckMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfT3B0aW9uLmZsYXRNYXAsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gcGFyYW1bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gcGFyYW1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKGRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKGRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheSA8PSAzMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JbnQuZnJvbVN0cmluZyhkYXkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHllYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChtb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9udGggPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aCA8PSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfSW50LmZyb21TdHJpbmcobW9udGgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JbnQuZnJvbVN0cmluZyh5ZWFyKSkpKTtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZChyb3V0ZSkge1xuICBpZiAodHlwZW9mIHJvdXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIFwiL2Fib3V0XCI7XG4gIH1cbiAgc3dpdGNoIChyb3V0ZS50YWcgfCAwKSB7XG4gICAgY2FzZSAvKiBJbmRleCAqLzAgOlxuICAgICAgICB2YXIgcGFnZSA9IHJvdXRlWy8qIHBhZ2UgKi8wXTtcbiAgICAgICAgaWYgKHBhZ2UgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gXCIvXCIgKyAoU3RyaW5nKHBhZ2UpICsgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiL1wiO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBUYWdTZWFyY2ggKi8xIDpcbiAgICAgICAgdmFyIHBhZ2UkMSA9IHJvdXRlWy8qIHBhZ2UgKi8xXTtcbiAgICAgICAgdmFyIHNsdWcgPSByb3V0ZVsvKiBzbHVnICovMF07XG4gICAgICAgIGlmIChwYWdlJDEgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gXCIvdGFnL1wiICsgKFN0cmluZyhzbHVnKSArIChcIi9cIiArIChTdHJpbmcocGFnZSQxKSArIFwiXCIpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiL3RhZy9cIiArIChTdHJpbmcoc2x1ZykgKyBcIlwiKTtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogRW50cnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiB5ZWFyICovMF0pICsgKFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBtb250aCAqLzFdKSArIChcIi9cIiArIChTdHJpbmcocm91dGVbLyogZGF5ICovMl0pICsgKFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBzbHVnICovM10pICsgXCJcIikpKSkpKSk7XG4gICAgY2FzZSAvKiBTdGF0aWMgKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBkaXJlY3RvcnkgKi8wXSkgKyAoXCIvXCIgKyAoU3RyaW5nKHJvdXRlWy8qIGZpbGVuYW1lICovMV0pICsgXCJcIikpKTtcbiAgICBcbiAgfVxufVxuXG5leHBvcnRzLnJvdXRlID0gcm91dGU7XG5leHBvcnRzLmJ1aWxkID0gYnVpbGQ7XG4vKiBSZWx1ZGVfSW50IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEhUVFAgPSByZXF1aXJlKFwiLi9iaW5kaW5ncy9IVFRQLmJzLmpzXCIpO1xudmFyIEh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKFwiLi9Sb3V0ZXIuYnMuanNcIik7XG52YXIgJCRSZXNwb25zZSA9IHJlcXVpcmUoXCIuL1Jlc3BvbnNlLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBDYW1sX29wdGlvbiA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9vcHRpb24uanNcIik7XG52YXIgUGFnZV9fUmVuZGVyID0gcmVxdWlyZShcIi4vdmlld3MvUGFnZV9fUmVuZGVyLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9PcHRpb24gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpO1xudmFyIEFib3V0Q29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL0Fib3V0Q29udHJvbGxlci5icy5qc1wiKTtcbnZhciBFbnRyeUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9FbnRyeUNvbnRyb2xsZXIuYnMuanNcIik7XG52YXIgSW5kZXhDb250cm9sbGVyID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIFN0YXRpY0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9TdGF0aWNDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIFRhZ1NlYXJjaENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9UYWdTZWFyY2hDb250cm9sbGVyLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBzcGxpdFVSTFNlZ21lbnRzKHVybCkge1xuICByZXR1cm4gdXJsLnNsaWNlKDEpLnNwbGl0KFwiL1wiKS5tYXAoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9KSkuZmlsdGVyKChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWdtZW50Lmxlbmd0aCA+PSAxO1xuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShwYXJhbSwgcm91dGUpIHtcbiAgdmFyIGVudHJpZXMgPSBwYXJhbS5lbnRyaWVzO1xuICBpZiAodHlwZW9mIHJvdXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIEFib3V0Q29udHJvbGxlci5tYWtlUmVzcG9uc2UocGFyYW0uYWJvdXQpO1xuICB9XG4gIHN3aXRjaCAocm91dGUudGFnIHwgMCkge1xuICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgcmV0dXJuIEluZGV4Q29udHJvbGxlci5tYWtlUmVzcG9uc2UoZW50cmllcywgcm91dGVbLyogcGFnZSAqLzBdKTtcbiAgICBjYXNlIC8qIFRhZ1NlYXJjaCAqLzEgOlxuICAgICAgICByZXR1cm4gVGFnU2VhcmNoQ29udHJvbGxlci5tYWtlUmVzcG9uc2UoZW50cmllcywgcm91dGVbLyogc2x1ZyAqLzBdLCByb3V0ZVsvKiBwYWdlICovMV0pO1xuICAgIGNhc2UgLyogRW50cnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIEVudHJ5Q29udHJvbGxlci5tYWtlUmVzcG9uc2UoZW50cmllcywgcm91dGVbLyogeWVhciAqLzBdLCByb3V0ZVsvKiBtb250aCAqLzFdLCByb3V0ZVsvKiBkYXkgKi8yXSwgcm91dGVbLyogc2x1ZyAqLzNdKTtcbiAgICBjYXNlIC8qIFN0YXRpYyAqLzMgOlxuICAgICAgICByZXR1cm4gU3RhdGljQ29udHJvbGxlci5tYWtlUmVzcG9uc2Uocm91dGVbLyogZGlyZWN0b3J5ICovMF0sIHJvdXRlWy8qIGZpbGVuYW1lICovMV0pO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2Uoc2l0ZU5hbWUsIGRhdGEpIHtcbiAgcmV0dXJuIEh0dHAuY3JlYXRlU2VydmVyKChmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUmVsdWRlX09wdGlvbi5nZXRPckVsc2UoXCIvXCIsIENhbWxfb3B0aW9uLnVuZGVmaW5lZF90b19vcHQocmVxdWVzdC51cmwpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLnVuc2FmZVJ1bkFzeW5jKChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy50YXAoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uub24oXCJjbG9zZVwiLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXMgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIiArIChTdHJpbmcoc3RhdHVzKSArIChcIiBcIiArIChTdHJpbmcodXJsKSArIChcIiBcIiArIChTdHJpbmcobXMpICsgXCJtc1wiKSkpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRTdGF0dXNDb2RlKDIwMCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0Q29udGVudFR5cGUoUmVsdWRlX09wdGlvbi5nZXRPckVsc2UoXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgcmVzWy8qIHR5cGVfICovMV0pKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50TGVuZ3RoKHJlc1svKiBsZW5ndGggKi8yXSkocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0TGFzdE1vZGlmaWVkKHJlc1svKiBtb2RpZmllZCAqLzNdKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1svKiBzdHJlYW0gKi8wXS5waXBlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gUGFnZV9fUmVuZGVyLnJlbmRlcihzaXRlTmFtZSwgcmVzWy8qIGRhdGEgKi8wXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0U3RhdHVzQ29kZShyZXNbLyogc3RhdHVzICovMV0sIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50VHlwZShcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0Q29udGVudExlbmd0aChsZW5ndGgpKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVuZChib2R5LCBcInV0Zi04XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JTy5oYW5kbGVFcnJvcigoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJFJlc3BvbnNlLm5vdEZvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlUmVzcG9uc2UoZGF0YSwgcGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfSU8uZnJvbU9wdGlvbigoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJvdXRlci5yb3V0ZShzcGxpdFVSTFNlZ21lbnRzKHVybCkpKSkpKSk7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuKHBhcmFtKSB7XG4gIHBhcmFtLmxpc3Rlbig1MDAwLCBcIjEyNy4wLjAuMVwiLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0ZW5pbmdcIik7XG4gICAgICAgICAgXG4gICAgICAgIH0pKTtcbiAgXG59XG5cbmV4cG9ydHMuc3BsaXRVUkxTZWdtZW50cyA9IHNwbGl0VVJMU2VnbWVudHM7XG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbmV4cG9ydHMubWFrZSA9IG1ha2U7XG5leHBvcnRzLmxpc3RlbiA9IGxpc3Rlbjtcbi8qIGh0dHAgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIFNsdWdpZnkgPSByZXF1aXJlKFwic2x1Z2lmeS1icy9zcmMvU2x1Z2lmeS5icy5qc1wiKTtcblxuZnVuY3Rpb24gc2x1ZyhwYXJhbSkge1xuICByZXR1cm4gQ3VycnkuXzMoU2x1Z2lmeS5zbHVnaWZ5LCBcIi1cIiwgcGFyYW0sIHRydWUpO1xufVxuXG5leHBvcnRzLnNsdWcgPSBzbHVnO1xuLyogU2x1Z2lmeSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBcmdwYXJzZSA9IHJlcXVpcmUoXCJhcmdwYXJzZVwiKTtcblxuZnVuY3Rpb24gbWFrZSh2ZXJzaW9uLCBwcm9nKSB7XG4gIHJldHVybiBuZXcgQXJncGFyc2UuQXJndW1lbnRQYXJzZXIoe1xuICAgICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgICAgICBwcm9nOiBwcm9nXG4gICAgICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQXJndW1lbnQoc2hvcnROYW1lLCBsb25nTmFtZSwgZGVzdCwgcmVxdWlyZWQsIG1ldGF2YXIsIHBhcnNlcikge1xuICBwYXJzZXIuYWRkQXJndW1lbnQoW1xuICAgICAgICBzaG9ydE5hbWUsXG4gICAgICAgIGxvbmdOYW1lXG4gICAgICBdLCB7XG4gICAgICAgIGRlc3Q6IGRlc3QsXG4gICAgICAgIG1ldGF2YXI6IG1ldGF2YXIsXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZFxuICAgICAgfSk7XG4gIFxufVxuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuZXhwb3J0cy5hZGRBcmd1bWVudCA9IGFkZEFyZ3VtZW50O1xuLyogYXJncGFyc2UgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIG1ha2UoeWVhciwgbW9udGgsIGRheSwgaG91ck9wdCwgbWludXRlT3B0LCBwYXJhbSkge1xuICB2YXIgaG91ciA9IGhvdXJPcHQgIT09IHVuZGVmaW5lZCA/IGhvdXJPcHQgOiAwO1xuICB2YXIgbWludXRlID0gbWludXRlT3B0ICE9PSB1bmRlZmluZWQgPyBtaW51dGVPcHQgOiAwO1xuICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxIHwgMCwgZGF5LCBob3VyLCBtaW51dGUpO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aChkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxIHwgMDtcbn1cblxuZXhwb3J0cy5tYWtlID0gbWFrZTtcbmV4cG9ydHMuZ2V0TW9udGggPSBnZXRNb250aDtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEVtb3Rpb24gPSByZXF1aXJlKFwiZW1vdGlvblwiKTtcbnZhciBDb3JlID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7XG5cbnZhciBQcm92aWRlciA9IHsgfTtcblxudmFyIENhY2hlID0ge1xuICBQcm92aWRlcjogUHJvdmlkZXJcbn07XG5cbnZhciBTZXJ2ZXIgPSB7IH07XG5cbmZ1bmN0aW9uIEVtb3Rpb24kUHJvdmlkZXIoUHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gUHJvcHMuY2hpbGRyZW47XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvcmUuQ2FjaGVQcm92aWRlciwge1xuICAgICAgICAgICAgICB2YWx1ZTogRW1vdGlvbi5jYWNoZSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgICB9KTtcbn1cblxudmFyIFByb3ZpZGVyJDEgPSB7XG4gIG1ha2U6IEVtb3Rpb24kUHJvdmlkZXJcbn07XG5cbmV4cG9ydHMuQ2FjaGUgPSBDYWNoZTtcbmV4cG9ydHMuU2VydmVyID0gU2VydmVyO1xuZXhwb3J0cy5Qcm92aWRlciA9IFByb3ZpZGVyJDE7XG4vKiByZWFjdCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cblxudmFyICQkUmVxdWVzdCA9IHsgfTtcblxuZnVuY3Rpb24gc2V0U3RhdHVzQ29kZShzdGF0dXMsIHJlc3BvbnNlKSB7XG4gIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG4gIFxufVxuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZSh2YWx1ZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcGFyYW0uc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIHZhbHVlKTtcbiAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRDb250ZW50TGVuZ3RoKGxlbmd0aCkge1xuICB2YXIgcGFydGlhbF9hcmcgPSBTdHJpbmcobGVuZ3RoKTtcbiAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHBhcmFtLnNldEhlYWRlcihcIkNvbnRlbnQtTGVuZ3RoXCIsIHBhcnRpYWxfYXJnKTtcbiAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRMYXN0TW9kaWZpZWQodGltZXN0YW1wKSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKS50b1VUQ1N0cmluZygpO1xuICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcGFyYW0uc2V0SGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiLCBkYXRlKTtcbiAgICAgIFxuICAgIH0pO1xufVxuXG52YXIgJCRSZXNwb25zZSA9IHtcbiAgc2V0U3RhdHVzQ29kZTogc2V0U3RhdHVzQ29kZSxcbiAgc2V0Q29udGVudFR5cGU6IHNldENvbnRlbnRUeXBlLFxuICBzZXRDb250ZW50TGVuZ3RoOiBzZXRDb250ZW50TGVuZ3RoLFxuICBzZXRMYXN0TW9kaWZpZWQ6IHNldExhc3RNb2RpZmllZFxufTtcblxudmFyIFNlcnZlciA9IHsgfTtcblxuZXhwb3J0cy4kJFJlcXVlc3QgPSAkJFJlcXVlc3Q7XG5leHBvcnRzLiQkUmVzcG9uc2UgPSAkJFJlc3BvbnNlO1xuZXhwb3J0cy5TZXJ2ZXIgPSBTZXJ2ZXI7XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQYWNrYWdlSnNvbiA9IHJlcXVpcmUoXCIuLi8uLi9wYWNrYWdlLmpzb25cIik7XG5cbnZhciBqc29uID0gUGFja2FnZUpzb247XG5cbmV4cG9ydHMuanNvbiA9IGpzb247XG4vKiBqc29uIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcblxuZnVuY3Rpb24gbWFrZVJlc3BvbnNlKGFib3V0KSB7XG4gIHJldHVybiAvKiBQdXJlICovQmxvY2suX18oMCwgWy8qIFBhZ2UgKi9CbG9jay5fXygwLCBbXG4gICAgICAgICAgICAgICAgLyogZGF0YSAqLy8qIEFib3V0ICovQmxvY2suX18oMiwgW3tcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBhYm91dFxuICAgICAgICAgICAgICAgICAgICB9XSksXG4gICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgIF0pXSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCREYXRlID0gcmVxdWlyZShcIi4uL2JpbmRpbmdzL0RhdGUuYnMuanNcIik7XG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xudmFyIEN1cnJ5ID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuLi9VdGlscy5icy5qc1wiKTtcbnZhciBSZWx1ZGVfSU8gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSU8uYnMuanNcIik7XG52YXIgUmVsdWRlX0ludCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JbnQuYnMuanNcIik7XG52YXIgUmVsdWRlX0xpc3QgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfTGlzdC5icy5qc1wiKTtcbnZhciBSZWx1ZGVfT3B0aW9uID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiKTtcblxuZnVuY3Rpb24gZGF5VGltZXN0YW1wKGRhdGUpIHtcbiAgcmV0dXJuICQkRGF0ZS5tYWtlKGRhdGUuZ2V0RnVsbFllYXIoKSwgJCREYXRlLmdldE1vbnRoKGRhdGUpLCBkYXRlLmdldERhdGUoKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCkuZ2V0VGltZSgpO1xufVxuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoZW50cmllcywgeWVhciwgbW9udGgsIGRheSwgc2x1Zykge1xuICB2YXIgdGltZXN0YW1wID0gJCREYXRlLm1ha2UoeWVhciwgbW9udGgsIGRheSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCkuZ2V0VGltZSgpO1xuICByZXR1cm4gUmVsdWRlX0lPLm1hcCgoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8qIFBhZ2UgKi9CbG9jay5fXygwLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGRhdGEgKi8vKiBFbnRyeSAqL0Jsb2NrLl9fKDMsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbnRyeS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZW50cnkuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZW50cnkudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogZW50cnkudGFncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfTGlzdC5maW5kLCAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlUaW1lc3RhbXAoZW50cnkuZGF0ZSkgPCB0aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0xpc3Quc29ydEJ5KChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKFJlbHVkZV9JbnQuY29tcGFyZSwgYi5kYXRlLmdldFRpbWUoKSwgYS5kYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGVudHJpZXMpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfTGlzdC5maW5kLCAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlUaW1lc3RhbXAoZW50cnkuZGF0ZSkgPiB0aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0xpc3Quc29ydEJ5KChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKFJlbHVkZV9JbnQuY29tcGFyZSwgYS5kYXRlLmdldFRpbWUoKSwgYi5kYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGVudHJpZXMpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy5mcm9tT3B0aW9uKChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfTGlzdC5maW5kLCAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5VGltZXN0YW1wKGVudHJ5LmRhdGUpID09PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKFV0aWxzLnNsdWcodW5kZWZpbmVkKSwgZW50cnkudGl0bGUpID09PSBzbHVnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLCBlbnRyaWVzKSkpO1xufVxuXG5leHBvcnRzLmRheVRpbWVzdGFtcCA9IGRheVRpbWVzdGFtcDtcbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogVXRpbHMgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xudmFyIEN1cnJ5ID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTtcbnZhciBDb25zdGFudHMgPSByZXF1aXJlKFwiLi4vQ29uc3RhbnRzLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBDYW1sX2ludDMyID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX2ludDMyLmpzXCIpO1xudmFyIFJlbHVkZV9JbnQgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9MaXN0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShlbnRyaWVzLCBwYWdlKSB7XG4gIHJldHVybiBSZWx1ZGVfSU8uZnJvbU9wdGlvbigoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYWdlRW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBkYXRhICovLyogSW5kZXggKi9CbG9jay5fXygwLCBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogQ3VycnkuXzEoUmVsdWRlX0xpc3QubGVuZ3RoLCBlbnRyaWVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllczogUmVsdWRlX0xpc3QubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbnRyeS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZW50cnkuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZW50cnkudGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkocGFnZUVudHJpZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHN0YXR1cyAqLzIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKHBhZ2VFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8xKFJlbHVkZV9MaXN0Lmxlbmd0aCwgcGFnZUVudHJpZXMpICE9PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkoUmVsdWRlX0xpc3QudGFrZShDb25zdGFudHMuZW50cmllc1BlclBhZ2UsIHBhcmFtWzFdKSkpO1xuICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9MaXN0LnNwbGl0QXQoQ2FtbF9pbnQzMi5pbXVsKHBhZ2UgLSAxIHwgMCwgQ29uc3RhbnRzLmVudHJpZXNQZXJQYWdlKSwgUmVsdWRlX0xpc3Quc29ydEJ5KChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfSW50LmNvbXBhcmUsIGIuZGF0ZS5nZXRUaW1lKCksIGEuZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZW50cmllcykpKSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogUmVsdWRlX0lPIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcblxuZnVuY3Rpb24gbWFrZVJlc3BvbnNlKGRpcmVjdG9yeSwgZmlsZW5hbWUpIHtcbiAgcmV0dXJuIC8qIFB1cmUgKi9CbG9jay5fXygwLCBbLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAvKiBkYXRhICovdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIC8qIHN0YXR1cyAqLzIwMFxuICAgICAgICAgICAgICBdKV0pO1xufVxuXG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcblxuZnVuY3Rpb24gbWFrZVJlc3BvbnNlKGVudHJpZXMsIHNsdWcsIHBhZ2UpIHtcbiAgcmV0dXJuIC8qIFB1cmUgKi9CbG9jay5fXygwLCBbLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAvKiBkYXRhICovdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIC8qIHN0YXR1cyAqLzIwMFxuICAgICAgICAgICAgICBdKV0pO1xufVxuXG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIENzcyA9IHJlcXVpcmUoXCJicy1jc3MtZW1vdGlvbi9zcmMvQ3NzLmpzXCIpO1xudmFyIEN1cnJ5ID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBFbW90aW9uID0gcmVxdWlyZShcIi4uL2JpbmRpbmdzL0Vtb3Rpb24uYnMuanNcIik7XG52YXIgQWJvdXRQYWdlID0gcmVxdWlyZShcIi4vcGFnZXMvQWJvdXRQYWdlLmJzLmpzXCIpO1xudmFyIEVudHJ5UGFnZSA9IHJlcXVpcmUoXCIuL3BhZ2VzL0VudHJ5UGFnZS5icy5qc1wiKTtcbnZhciBJbmRleFBhZ2UgPSByZXF1aXJlKFwiLi9wYWdlcy9JbmRleFBhZ2UuYnMuanNcIik7XG52YXIgTm90Rm91bmRQYWdlID0gcmVxdWlyZShcIi4vcGFnZXMvTm90Rm91bmRQYWdlLmJzLmpzXCIpO1xudmFyIFRhZ1NlYXJjaFBhZ2UgPSByZXF1aXJlKFwiLi9wYWdlcy9UYWdTZWFyY2hQYWdlLmJzLmpzXCIpO1xudmFyIEJvb3RzdHJhcFJlYm9vdE1pbkNzcyA9IHJlcXVpcmUoXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLXJlYm9vdC5taW4uY3NzXCIpO1xuXG5mdW5jdGlvbiBmb3JtYXRUaXRsZShzaXRlTmFtZSwgcGFnZURhdGEpIHtcbiAgaWYgKHBhZ2VEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gXCJOb3QgZm91bmQgfCBcIiArIChTdHJpbmcoc2l0ZU5hbWUpICsgXCJcIik7XG4gIH1cbiAgc3dpdGNoIChwYWdlRGF0YS50YWcgfCAwKSB7XG4gICAgY2FzZSAvKiBJbmRleCAqLzAgOlxuICAgICAgICByZXR1cm4gc2l0ZU5hbWU7XG4gICAgY2FzZSAvKiBUYWdTZWFyY2ggKi8xIDpcbiAgICAgICAgcmV0dXJuIFwiXCIgKyAoU3RyaW5nKHBhZ2VEYXRhWzBdLnRhZykgKyAoXCIgfCBcIiArIChTdHJpbmcoc2l0ZU5hbWUpICsgXCJcIikpKTtcbiAgICBjYXNlIC8qIEFib3V0ICovMiA6XG4gICAgICAgIHJldHVybiBcIkFib3V0IHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpO1xuICAgIGNhc2UgLyogRW50cnkgKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiXCIgKyAoU3RyaW5nKHBhZ2VEYXRhWzBdLnRpdGxlKSArIChcIiB8IFwiICsgKFN0cmluZyhzaXRlTmFtZSkgKyBcIlwiKSkpO1xuICAgIFxuICB9XG59XG5cbnZhciBjbGFzc05hbWUgPSBDdXJyeS5fMShDc3Muc3R5bGUsIC8qIDo6ICovW1xuICAgICAgQ3NzLmRpc3BsYXkoQ3NzLmZsZXhCb3gpLFxuICAgICAgLyogOjogKi9bXG4gICAgICAgIENzcy5mbGV4RGlyZWN0aW9uKENzcy5jb2x1bW4pLFxuICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICBDc3MubWluSGVpZ2h0KENzcy52aCgxMDAuMCkpLFxuICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICBdXG4gICAgICBdXG4gICAgXSk7XG5cbmZ1bmN0aW9uIFBhZ2VfX0NvbXBvbmVudCRSb290KFByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IFByb3BzLmNoaWxkcmVuO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgICAgICB9LCBjaGlsZHJlbik7XG59XG5cbnZhciBSb290ID0ge1xuICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgbWFrZTogUGFnZV9fQ29tcG9uZW50JFJvb3Rcbn07XG5cbmZ1bmN0aW9uIFBhZ2VfX0NvbXBvbmVudChQcm9wcykge1xuICB2YXIgc2l0ZU5hbWUgPSBQcm9wcy5zaXRlTmFtZTtcbiAgdmFyIHBhZ2VEYXRhID0gUHJvcHMucGFnZURhdGE7XG4gIHZhciB0aXRsZSA9IGZvcm1hdFRpdGxlKHNpdGVOYW1lLCBwYWdlRGF0YSk7XG4gIHZhciBjb250ZW50O1xuICBpZiAocGFnZURhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgIHN3aXRjaCAocGFnZURhdGEudGFnIHwgMCkge1xuICAgICAgY2FzZSAvKiBJbmRleCAqLzAgOlxuICAgICAgICAgIGNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEluZGV4UGFnZS5tYWtlLCB7XG4gICAgICAgICAgICAgICAgZGF0YTogcGFnZURhdGFbMF1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIFRhZ1NlYXJjaCAqLzEgOlxuICAgICAgICAgIGNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRhZ1NlYXJjaFBhZ2UubWFrZSwge1xuICAgICAgICAgICAgICAgIGRhdGE6IHBhZ2VEYXRhWzBdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBBYm91dCAqLzIgOlxuICAgICAgICAgIGNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEFib3V0UGFnZS5tYWtlLCB7XG4gICAgICAgICAgICAgICAgZGF0YTogcGFnZURhdGFbMF1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIEVudHJ5ICovMyA6XG4gICAgICAgICAgY29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW50cnlQYWdlLm1ha2UsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBwYWdlRGF0YVswXVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChOb3RGb3VuZFBhZ2UubWFrZSwgeyB9KTtcbiAgfVxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFbW90aW9uLlByb3ZpZGVyLm1ha2UsIHtcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFuZzogXCJlblwiXG4gICAgICAgICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLCB1bmRlZmluZWQsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyU2V0OiBcInV0Zi04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgdW5kZWZpbmVkLCB0aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB1bmRlZmluZWQsIEJvb3RzdHJhcFJlYm9vdE1pbkNzcykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLCB1bmRlZmluZWQsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZV9fQ29tcG9uZW50JFJvb3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpXG4gICAgICAgICAgICB9KTtcbn1cblxudmFyIG1ha2UgPSBQYWdlX19Db21wb25lbnQ7XG5cbmV4cG9ydHMuZm9ybWF0VGl0bGUgPSBmb3JtYXRUaXRsZTtcbmV4cG9ydHMuUm9vdCA9IFJvb3Q7XG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogY2xhc3NOYW1lIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIFN0eWxlID0gcmVxdWlyZShcIi4vU3R5bGUuYnMuanNcIik7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgRW1vdGlvblNlcnZlciA9IHJlcXVpcmUoXCJlbW90aW9uLXNlcnZlclwiKTtcbnZhciBQYWdlX19Db21wb25lbnQgPSByZXF1aXJlKFwiLi9QYWdlX19Db21wb25lbnQuYnMuanNcIik7XG52YXIgU2VydmVyID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cbmZ1bmN0aW9uIHJlbmRlcihzaXRlTmFtZSwgcGFnZURhdGEpIHtcbiAgU3R5bGUucmVnaXN0ZXJHbG9iYWxTdHlsZXModW5kZWZpbmVkKTtcbiAgdmFyIHJlbmRlcmVkID0gRW1vdGlvblNlcnZlci5yZW5kZXJTdHlsZXNUb1N0cmluZyhTZXJ2ZXIucmVuZGVyVG9TdHJpbmcoUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlX19Db21wb25lbnQubWFrZSwge1xuICAgICAgICAgICAgICAgIHNpdGVOYW1lOiBzaXRlTmFtZSxcbiAgICAgICAgICAgICAgICBwYWdlRGF0YTogcGFnZURhdGFcbiAgICAgICAgICAgICAgfSkpKTtcbiAgcmV0dXJuIFwiPCFET0NUWVBFIGh0bWw+XCIgKyByZW5kZXJlZDtcbn1cblxuZXhwb3J0cy5yZW5kZXIgPSByZW5kZXI7XG4vKiBTdHlsZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDc3MgPSByZXF1aXJlKFwiYnMtY3NzLWVtb3Rpb24vc3JjL0Nzcy5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG5cbnZhciBibHVlID0gQ3NzLnJnYigyNSwgMTE2LCAxOTUpO1xuXG52YXIgZ3JleTEgPSBDc3MucmdiKDI0OSwgMjQ5LCAyNTApO1xuXG52YXIgZ3JleTIgPSBDc3MucmdiKDIzMywgMjM2LCAyMzkpO1xuXG52YXIgZ3JleTMgPSBDc3MucmdiKDIyMiwgMjI2LCAyMzApO1xuXG52YXIgZ3JleTQgPSBDc3MucmdiKDIwNiwgMjEyLCAyMTgpO1xuXG52YXIgZ3JleTUgPSBDc3MucmdiKDE3MywgMTgxLCAxODkpO1xuXG52YXIgZ3JleTYgPSBDc3MucmdiKDEwOCwgMTE3LCAxMjUpO1xuXG52YXIgZ3JleTcgPSBDc3MucmdiKDczLCA4MCwgODcpO1xuXG52YXIgZ3JleTggPSBDc3MucmdiKDUyLCA1OCwgNjQpO1xuXG52YXIgZ3JleTkgPSBDc3MucmdiKDMzLCAzNywgNDEpO1xuXG52YXIgZGVza3RvcENvbHVtbldpZHRoID0gQ3NzLndpZHRoKENzcy5yZW0oMzcuNSkpO1xuXG52YXIgcGFydGlhbF9hcmcgPSBcIihtaW4td2lkdGg6IFwiICsgKFN0cmluZygzNy41KSArIFwicmVtKVwiKTtcblxuZnVuY3Rpb24gZGVza3RvcE1lZGlhUXVlcnkocGFyYW0pIHtcbiAgcmV0dXJuIENzcy5tZWRpYShwYXJ0aWFsX2FyZywgcGFyYW0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlckdsb2JhbFN0eWxlcyhwYXJhbSkge1xuICBDdXJyeS5fMihDc3MuJCRnbG9iYWwsIFwiYVwiLCAvKiA6OiAqL1tcbiAgICAgICAgQ3NzLnRleHREZWNvcmF0aW9uKENzcy5ub25lKSxcbiAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgQ3NzLmNvbG9yKGJsdWUpLFxuICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICBdXG4gICAgICBdKTtcbiAgdmFyIGNvZGVTdHlsZV8wMDAgPSBDc3MuZm9udFNpemUoQ3NzLnJlbSgwLjg3NSkpO1xuICB2YXIgY29kZVN0eWxlXzAwMSA9IC8qIDo6ICovW1xuICAgIENzcy5mb250RmFtaWx5KC8qIG1vbm9zcGFjZSAqLy01NTUzNjM5MDEpLFxuICAgIC8qIDo6ICovW1xuICAgICAgQ3NzLmJhY2tncm91bmRDb2xvcihncmV5MiksXG4gICAgICAvKiBbXSAqLzBcbiAgICBdXG4gIF07XG4gIHZhciBjb2RlU3R5bGUgPSAvKiA6OiAqL1tcbiAgICBjb2RlU3R5bGVfMDAwLFxuICAgIGNvZGVTdHlsZV8wMDFcbiAgXTtcbiAgQ3VycnkuXzIoQ3NzLiQkZ2xvYmFsLCBcImNvZGVcIiwgY29kZVN0eWxlKTtcbiAgQ3VycnkuXzIoQ3NzLiQkZ2xvYmFsLCBcInByZVwiLCAvKiA6OiAqL1tcbiAgICAgICAgQ3NzLnBhZGRpbmcoQ3NzLnJlbSgwLjYyNSkpLFxuICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICBDc3Mub3ZlcmZsb3coQ3NzLmF1dG8pLFxuICAgICAgICAgIGNvZGVTdHlsZVxuICAgICAgICBdXG4gICAgICBdKTtcbiAgcmV0dXJuIEN1cnJ5Ll8yKENzcy4kJGdsb2JhbCwgXCJoMSBjb2RlLCBoMiBjb2RlLCBoMyBjb2RlXCIsIC8qIDo6ICovW1xuICAgICAgICAgICAgICBDc3MuZm9udFNpemUoQ3NzLmluaGVyaXRfKSxcbiAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICBdKTtcbn1cblxudmFyIGRhcmtCb3JkZXJDb2xvdXIgPSBncmV5MjtcblxudmFyIGxpZ2h0Qm9yZGVyQ29sb3VyID0gZ3JleTM7XG5cbnZhciBkZXNrdG9wQ29sdW1uUmVtID0gMzcuNTtcblxuZXhwb3J0cy5ibHVlID0gYmx1ZTtcbmV4cG9ydHMuZ3JleTEgPSBncmV5MTtcbmV4cG9ydHMuZ3JleTIgPSBncmV5MjtcbmV4cG9ydHMuZ3JleTMgPSBncmV5MztcbmV4cG9ydHMuZ3JleTQgPSBncmV5NDtcbmV4cG9ydHMuZ3JleTUgPSBncmV5NTtcbmV4cG9ydHMuZ3JleTYgPSBncmV5NjtcbmV4cG9ydHMuZ3JleTcgPSBncmV5NztcbmV4cG9ydHMuZ3JleTggPSBncmV5ODtcbmV4cG9ydHMuZ3JleTkgPSBncmV5OTtcbmV4cG9ydHMuZGFya0JvcmRlckNvbG91ciA9IGRhcmtCb3JkZXJDb2xvdXI7XG5leHBvcnRzLmxpZ2h0Qm9yZGVyQ29sb3VyID0gbGlnaHRCb3JkZXJDb2xvdXI7XG5leHBvcnRzLmRlc2t0b3BDb2x1bW5SZW0gPSBkZXNrdG9wQ29sdW1uUmVtO1xuZXhwb3J0cy5kZXNrdG9wQ29sdW1uV2lkdGggPSBkZXNrdG9wQ29sdW1uV2lkdGg7XG5leHBvcnRzLmRlc2t0b3BNZWRpYVF1ZXJ5ID0gZGVza3RvcE1lZGlhUXVlcnk7XG5leHBvcnRzLnJlZ2lzdGVyR2xvYmFsU3R5bGVzID0gcmVnaXN0ZXJHbG9iYWxTdHlsZXM7XG4vKiBibHVlIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5mdW5jdGlvbiBBYm91dFBhZ2UoUHJvcHMpIHtcbiAgdmFyIHBhcmFtID0gUHJvcHMuZGF0YTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJhYm91dFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIHBhcmFtLnRleHQpKTtcbn1cblxudmFyIG1ha2UgPSBBYm91dFBhZ2U7XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG4vKiByZWFjdCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuZnVuY3Rpb24gRW50cnlQYWdlKFByb3BzKSB7XG4gIHZhciBwYXJhbSA9IFByb3BzLmRhdGE7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIHBhcmFtLnRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIHBhcmFtLnRleHQpKTtcbn1cblxudmFyIG1ha2UgPSBFbnRyeVBhZ2U7XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG4vKiByZWFjdCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBSZWx1ZGVfTGlzdCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBJbmRleFBhZ2UoUHJvcHMpIHtcbiAgdmFyIHBhcmFtID0gUHJvcHMuZGF0YTtcbiAgdmFyIGVudHJpZXMgPSBSZWx1ZGVfTGlzdC50b0FycmF5KFJlbHVkZV9MaXN0Lm1hcCgoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZW50cnkudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZW50cnkudGl0bGUpO1xuICAgICAgICAgICAgICB9KSkocGFyYW0uZW50cmllcykpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBcInBhZ2UgXCIgKyAoU3RyaW5nKHBhcmFtLnBhZ2UpICsgXCJcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJ0b3RhbCBcIiArIChTdHJpbmcocGFyYW0udG90YWwpICsgXCJcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgZW50cmllcykpO1xufVxuXG52YXIgbWFrZSA9IEluZGV4UGFnZTtcblxuZXhwb3J0cy5tYWtlID0gbWFrZTtcbi8qIHJlYWN0IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5mdW5jdGlvbiBOb3RGb3VuZFBhZ2UoUHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBcIm5vdCBmb3VuZFwiKTtcbn1cblxudmFyIG1ha2UgPSBOb3RGb3VuZFBhZ2U7XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG4vKiByZWFjdCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBSZWx1ZGVfTGlzdCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBUYWdTZWFyY2hQYWdlKFByb3BzKSB7XG4gIHZhciBwYXJhbSA9IFByb3BzLmRhdGE7XG4gIHZhciBlbnRyaWVzID0gUmVsdWRlX0xpc3QudG9BcnJheShSZWx1ZGVfTGlzdC5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVudHJ5LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5LnRpdGxlKTtcbiAgICAgICAgICAgICAgfSkpKHBhcmFtLmVudHJpZXMpKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJ0YWcgXCIgKyAoU3RyaW5nKHBhcmFtLnRhZykgKyBcIlwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBcInBhZ2UgXCIgKyAoU3RyaW5nKHBhcmFtLnBhZ2UpICsgXCJcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgZW50cmllcykpO1xufVxuXG52YXIgbWFrZSA9IFRhZ1NlYXJjaFBhZ2U7XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG4vKiByZWFjdCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcmdwYXJzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1jc3MtZW1vdGlvbi9zcmMvQ3NzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9pbnQzMi5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9vcHRpb24uanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9qc19kaWN0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vdGlvbi1zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZG93bi1tZXRhZGF0YVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1JlYWREaXIuYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRmlsZS5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfQXJyYXkuYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSU8uYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX1Jlc3VsdC5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzbHVnaWZ5LWJzL3NyYy9TbHVnaWZ5LmJzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=