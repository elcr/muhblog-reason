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
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var Utils = __webpack_require__(/*! ../Utils.bs.js */ "./src/Utils.bs.js");
var Constants = __webpack_require__(/*! ../Constants.bs.js */ "./src/Constants.bs.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var Caml_int32 = __webpack_require__(/*! bs-platform/lib/js/caml_int32.js */ "bs-platform/lib/js/caml_int32.js");
var Relude_Int = __webpack_require__(/*! relude/src/Relude_Int.bs.js */ "relude/src/Relude_Int.bs.js");
var Relude_List = __webpack_require__(/*! relude/src/Relude_List.bs.js */ "relude/src/Relude_List.bs.js");
var Relude_Option = __webpack_require__(/*! relude/src/Relude_Option.bs.js */ "relude/src/Relude_Option.bs.js");

function makeResponse(entries, slug, page) {
  return Relude_IO.fromOption((function (prim) {
                
              }), Curry._2(Relude_Option.flatMap, (function (param) {
                    var tag = param[2];
                    var filteredEntries = param[0];
                    return Relude_Option.map((function (pageEntries) {
                                  return /* Page */Block.__(0, [
                                            /* data *//* TagSearch */Block.__(1, [{
                                                  tag: tag,
                                                  page: page,
                                                  total: Curry._1(Relude_List.length, filteredEntries),
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
                  }), Curry._2(Relude_Option.flatMap, (function (param) {
                        var tag = param[1];
                        var filteredEntries = param[0];
                        return Relude_Option.map((function (param) {
                                      return /* tuple */[
                                              filteredEntries,
                                              param[1],
                                              tag
                                            ];
                                    }), Relude_List.splitAt(Caml_int32.imul(page - 1 | 0, Constants.entriesPerPage), Relude_List.sortBy((function (a, b) {
                                              return Curry._2(Relude_Int.compare, b.date.getTime(), a.date.getTime());
                                            }), filteredEntries)));
                      }), Relude_List.foldLeft((function (accumulator, entry) {
                              var tag = Curry._2(Relude_List.find, (function (tag) {
                                      return Curry._1(Utils.slug(undefined), tag) === slug;
                                    }), entry.tags);
                              if (tag !== undefined) {
                                if (accumulator !== undefined) {
                                  return /* tuple */[
                                          /* :: */[
                                            entry,
                                            accumulator[0]
                                          ],
                                          tag
                                        ];
                                } else {
                                  return /* tuple */[
                                          /* :: */[
                                            entry,
                                            /* [] */0
                                          ],
                                          tag
                                        ];
                                }
                              } else {
                                return accumulator;
                              }
                            }), undefined)(entries))));
}

exports.makeResponse = makeResponse;
/* Utils Not a pure module */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAtcmVib290Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NMSS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFyc2UuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3BvbnNlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JpbmRpbmdzL0FyZ1BhcnNlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9EYXRlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9FbW90aW9uLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9IVFRQLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9QYWNrYWdlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9BYm91dENvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0VudHJ5Q29udHJvbGxlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TdGF0aWNDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9UYWdTZWFyY2hDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9QYWdlX19Db21wb25lbnQuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1BhZ2VfX1JlbmRlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU3R5bGUuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0Fib3V0UGFnZS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvRW50cnlQYWdlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9JbmRleFBhZ2UuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL05vdEZvdW5kUGFnZS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvVGFnU2VhcmNoUGFnZS5icy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXJncGFyc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1jc3MtZW1vdGlvbi9zcmMvQ3NzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfaW50MzIuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9vcHRpb24uanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1wbGF0Zm9ybS9saWIvanMvanNfZGljdC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbW90aW9uLXNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZG93bi1tZXRhZGF0YVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZERpci5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZEZpbGUuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsdWRlL3NyYy9SZWx1ZGVfQXJyYXkuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9SZXN1bHQuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzbHVnaWZ5LWJzL3NyYy9TbHVnaWZ5LmJzLmpzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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MkI7QUFDM0IsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxvQkFBTzs7QUFFM0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBOEI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBLDBDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHlEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSW5kZXguYnMuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyohXFxuICogQm9vdHN0cmFwIFJlYm9vdCB2NC41LjAgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXFxuICogQ29weXJpZ2h0IDIwMTEtMjAyMCBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIwIFR3aXR0ZXIsIEluYy5cXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxcbiAqIEZvcmtlZCBmcm9tIE5vcm1hbGl6ZS5jc3MsIGxpY2Vuc2VkIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxcbiAqLyosOjphZnRlciw6OmJlZm9yZXtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbHtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjEuMTU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fWFydGljbGUsYXNpZGUsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfWJvZHl7bWFyZ2luOjA7Zm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sXFxcIkhlbHZldGljYSBOZXVlXFxcIixBcmlhbCxcXFwiTm90byBTYW5zXFxcIixzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNTtjb2xvcjojMjEyNTI5O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9W3RhYmluZGV4PVxcXCItMVxcXCJdOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSl7b3V0bGluZTowIWltcG9ydGFudH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9aDEsaDIsaDMsaDQsaDUsaDZ7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206LjVyZW19cHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxcmVtfWFiYnJbZGF0YS1vcmlnaW5hbC10aXRsZV0sYWJiclt0aXRsZV17dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTstd2Via2l0LXRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkO2N1cnNvcjpoZWxwO2JvcmRlci1ib3R0b206MDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazpub25lO3RleHQtZGVjb3JhdGlvbi1za2lwLWluazpub25lfWFkZHJlc3N7bWFyZ2luLWJvdHRvbToxcmVtO2ZvbnQtc3R5bGU6bm9ybWFsO2xpbmUtaGVpZ2h0OmluaGVyaXR9ZGwsb2wsdWx7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MXJlbX1vbCBvbCxvbCB1bCx1bCBvbCx1bCB1bHttYXJnaW4tYm90dG9tOjB9ZHR7Zm9udC13ZWlnaHQ6NzAwfWRke21hcmdpbi1ib3R0b206LjVyZW07bWFyZ2luLWxlZnQ6MH1ibG9ja3F1b3Rle21hcmdpbjowIDAgMXJlbX1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWF7Y29sb3I6IzAwN2JmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWE6aG92ZXJ7Y29sb3I6IzAwNTZiMzt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfWE6bm90KFtocmVmXSl7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZX1hOm5vdChbaHJlZl0pOmhvdmVye2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6U0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLFxcXCJDb3VyaWVyIE5ld1xcXCIsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19cHJle21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjFyZW07b3ZlcmZsb3c6YXV0bzstbXMtb3ZlcmZsb3ctc3R5bGU6c2Nyb2xsYmFyfWZpZ3VyZXttYXJnaW46MCAwIDFyZW19aW1ne3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3JkZXItc3R5bGU6bm9uZX1zdmd7b3ZlcmZsb3c6aGlkZGVuO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2V9Y2FwdGlvbntwYWRkaW5nLXRvcDouNzVyZW07cGFkZGluZy1ib3R0b206Ljc1cmVtO2NvbG9yOiM2Yzc1N2Q7dGV4dC1hbGlnbjpsZWZ0O2NhcHRpb24tc2lkZTpib3R0b219dGh7dGV4dC1hbGlnbjppbmhlcml0fWxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206LjVyZW19YnV0dG9ue2JvcmRlci1yYWRpdXM6MH1idXR0b246Zm9jdXN7b3V0bGluZToxcHggZG90dGVkO291dGxpbmU6NXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7bWFyZ2luOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0fWJ1dHRvbixpbnB1dHtvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1bcm9sZT1idXR0b25de2N1cnNvcjpwb2ludGVyfXNlbGVjdHt3b3JkLXdyYXA6bm9ybWFsfVt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259W3R5cGU9YnV0dG9uXTpub3QoOmRpc2FibGVkKSxbdHlwZT1yZXNldF06bm90KDpkaXNhYmxlZCksW3R5cGU9c3VibWl0XTpub3QoOmRpc2FibGVkKSxidXR0b246bm90KDpkaXNhYmxlZCl7Y3Vyc29yOnBvaW50ZXJ9W3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7cGFkZGluZzowO2JvcmRlci1zdHlsZTpub25lfWlucHV0W3R5cGU9Y2hlY2tib3hdLGlucHV0W3R5cGU9cmFkaW9de2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0bztyZXNpemU6dmVydGljYWx9ZmllbGRzZXR7bWluLXdpZHRoOjA7cGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowfWxlZ2VuZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO21hcmdpbi1ib3R0b206LjVyZW07Zm9udC1zaXplOjEuNXJlbTtsaW5lLWhlaWdodDppbmhlcml0O2NvbG9yOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsfXByb2dyZXNze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hde291dGxpbmUtb2Zmc2V0Oi0ycHg7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9ue2ZvbnQ6aW5oZXJpdDstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufW91dHB1dHtkaXNwbGF5OmlubGluZS1ibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtO2N1cnNvcjpwb2ludGVyfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC1yZWJvb3QubWluLmNzcy5tYXAgKi9cIjsiLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIFBhY2thZ2UgPSByZXF1aXJlKFwiLi9iaW5kaW5ncy9QYWNrYWdlLmJzLmpzXCIpO1xudmFyIEFyZ1BhcnNlID0gcmVxdWlyZShcIi4vYmluZGluZ3MvQXJnUGFyc2UuYnMuanNcIik7XG5cbmZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKHBhcmFtKSB7XG4gIHZhciBwYXJzZXIgPSBBcmdQYXJzZS5tYWtlKFBhY2thZ2UuanNvbi52ZXJzaW9uLCBQYWNrYWdlLmpzb24ubmFtZSk7XG4gIEFyZ1BhcnNlLmFkZEFyZ3VtZW50KFwiLXNcIiwgXCItLXNpdGUtbmFtZVwiLCBcInNpdGVOYW1lXCIsIHRydWUsIFwiU1RSSU5HXCIsIHBhcnNlcik7XG4gIEFyZ1BhcnNlLmFkZEFyZ3VtZW50KFwiLWVcIiwgXCItLWVudHJpZXMtZGlyZWN0b3J5XCIsIFwiZW50cmllc0RpcmVjdG9yeVwiLCB0cnVlLCBcIlBBVEhcIiwgcGFyc2VyKTtcbiAgQXJnUGFyc2UuYWRkQXJndW1lbnQoXCItYVwiLCBcIi0tYWJvdXQtcGF0aFwiLCBcImFib3V0UGF0aFwiLCB0cnVlLCBcIlBBVEhcIiwgcGFyc2VyKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUFyZ3MoKTtcbn1cblxuZXhwb3J0cy5wYXJzZUFyZ3VtZW50cyA9IHBhcnNlQXJndW1lbnRzO1xuLyogUGFja2FnZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGVudHJpZXNQZXJQYWdlID0gMTA7XG5cbmV4cG9ydHMuZW50cmllc1BlclBhZ2UgPSBlbnRyaWVzUGVyUGFnZTtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIENMSSA9IHJlcXVpcmUoXCIuL0NMSS5icy5qc1wiKTtcbnZhciBQYXJzZSA9IHJlcXVpcmUoXCIuL1BhcnNlLmJzLmpzXCIpO1xudmFyIFNlcnZlciA9IHJlcXVpcmUoXCIuL1NlcnZlci5icy5qc1wiKTtcbnZhciBSZWx1ZGVfSU8gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSU8uYnMuanNcIik7XG5cbmZ1bmN0aW9uIHByaW50RXJyb3IoZXJyb3IpIHtcbiAgdmFyIG1lc3NhZ2U7XG4gIGlmIChlcnJvci50YWcpIHtcbiAgICB2YXIgbWF0Y2ggPSBlcnJvclswXTtcbiAgICBzd2l0Y2ggKG1hdGNoLnRhZyB8IDApIHtcbiAgICAgIGNhc2UgLyogUmVhZERpcmVjdG9yeUVycm9yICovMCA6XG4gICAgICAgICAgc3dpdGNoIChtYXRjaFswXS50YWcgfCAwKSB7XG4gICAgICAgICAgICBjYXNlIC8qIE5vU3VjaEZpbGVPckRpcmVjdG9yeSAqLzcgOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVudHJpZXMgcGF0aCBkb2VzIG5vdCBleGlzdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAvKiBOb3RBRGlyZWN0b3J5ICovOCA6XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRW50cmllcyBwYXRoIGlzIG5vdCBhIGRpcmVjdG9yeVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgcmVhZGluZyBlbnRyaWVzIGRpcmVjdG9yeVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogUmVhZEVudHJ5RXJyb3IgKi8xIDpcbiAgICAgICAgICBtZXNzYWdlID0gXCJFcnJvciByZWFkaW5nIGVudHJ5OiBcIiArIG1hdGNoWy8qIG5hbWUgKi8wXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogUGFyc2VFcnJvciAqLzIgOlxuICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIHBhcnNpbmcgZW50cnk6IFwiICsgbWF0Y2hbLyogbmFtZSAqLzBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoZXJyb3JbMF0udGFnIHwgMCkge1xuICAgICAgY2FzZSAvKiBJc0FEaXJlY3RvcnkgKi81IDpcbiAgICAgICAgICBtZXNzYWdlID0gXCJBYm91dCBwYXRoIGlzIGEgZGlyZWN0b3J5XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIE5vU3VjaEZpbGVPckRpcmVjdG9yeSAqLzcgOlxuICAgICAgICAgIG1lc3NhZ2UgPSBcIkFib3V0IGZpbGUgZG9lcyBub3QgZXhpc3RcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIHJlYWRpbmcgYWJvdXQgZmlsZVwiO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICBcbn1cblxuZnVuY3Rpb24gbWFpbihwYXJhbSkge1xuICB2YXIgbWF0Y2ggPSBDTEkucGFyc2VBcmd1bWVudHModW5kZWZpbmVkKTtcbiAgdmFyIHNpdGVOYW1lID0gbWF0Y2guc2l0ZU5hbWU7XG4gIHJldHVybiBSZWx1ZGVfSU8udW5zYWZlUnVuQXN5bmMoKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pLCBSZWx1ZGVfSU8uYml0YXAoU2VydmVyLmxpc3RlbiwgcHJpbnRFcnJvciwgUmVsdWRlX0lPLm1hcCgoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXJ2ZXIubWFrZShzaXRlTmFtZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSksIFBhcnNlLnJlYWRBbmRQYXJzZUFsbChtYXRjaC5hYm91dFBhdGgsIG1hdGNoLmVudHJpZXNEaXJlY3RvcnkpKSkpO1xufVxuXG5tYWluKHVuZGVmaW5lZCk7XG5cbmV4cG9ydHMucHJpbnRFcnJvciA9IHByaW50RXJyb3I7XG5leHBvcnRzLm1haW4gPSBtYWluO1xuLyogIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyICQkRGF0ZSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdzL0RhdGUuYnMuanNcIik7XG52YXIgUGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgSnNfZGljdCA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvanNfZGljdC5qc1wiKTtcbnZhciBSZWx1ZGVfSU8gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSU8uYnMuanNcIik7XG52YXIgUmVsdWRlX0ludCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JbnQuYnMuanNcIik7XG52YXIgQ2FtbF9vcHRpb24gPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfb3B0aW9uLmpzXCIpO1xudmFyIFJlbHVkZV9MaXN0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIik7XG52YXIgUmVsdWRlX0FycmF5ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0FycmF5LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9PcHRpb24gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9SZXN1bHQgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfUmVzdWx0LmJzLmpzXCIpO1xudmFyIE5vZGVGU19fUmVhZERpciA9IHJlcXVpcmUoXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1JlYWREaXIuYnMuanNcIik7XG52YXIgTm9kZUZTX19SZWFkRmlsZSA9IHJlcXVpcmUoXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1JlYWRGaWxlLmJzLmpzXCIpO1xudmFyIE1hcmtkb3duTWV0YWRhdGEgPSByZXF1aXJlKFwibWFya2Rvd24tbWV0YWRhdGFcIik7XG5cbmZ1bmN0aW9uIHBhcnNlVGl0bGUobWV0YWRhdGEpIHtcbiAgcmV0dXJuIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfQXJyYXkuYXQoMCwgcGFyYW0pO1xuICAgICAgICAgICAgICB9KSwgSnNfZGljdC5nZXQobWV0YWRhdGEsIFwidGl0bGVcIikpO1xufVxuXG52YXIgcGFydGlhbF9hcmcgPSAvXihbMC05XXs0fSktKFswLTldezJ9KS0oWzAtOV17Mn0pIChbMC05XXsyfSk6KFswLTldezJ9KSQvO1xuXG5mdW5jdGlvbiBtYXRjaERhdGUocGFyYW0pIHtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLm51bGxfdG9fb3B0KHBhcnRpYWxfYXJnLmV4ZWMocGFyYW0pKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lc3RhbXAobWV0YWRhdGEpIHtcbiAgcmV0dXJuIFJlbHVkZV9SZXN1bHQuZmxhdE1hcCgoZnVuY3Rpb24gKG1hdGNoXykge1xuICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlcyA9IG1hdGNoXy5zbGljZSgxKS5tYXAoKGZ1bmN0aW9uIChjYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCBSZWx1ZGVfSW50LmZyb21TdHJpbmcsIChjYXB0dXJlID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShjYXB0dXJlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlcy5sZW5ndGggIT09IDUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gY2FwdHVyZXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKHllYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIE1hbGZvcm1lZCAqLzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gY2FwdHVyZXNbMV07XG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXkgPSBjYXB0dXJlc1syXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBob3VyID0gY2FwdHVyZXNbM107XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIE1hbGZvcm1lZCAqLzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1pbnV0ZSA9IGNhcHR1cmVzWzRdO1xuICAgICAgICAgICAgICAgIGlmIChtaW51dGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIE9rICovQmxvY2suX18oMCwgWyQkRGF0ZS5tYWtlKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgdW5kZWZpbmVkKV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogTWFsZm9ybWVkICovMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksIFJlbHVkZV9SZXN1bHQuZmxhdE1hcCgoZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9SZXN1bHQuZnJvbU9wdGlvbigvKiBNYWxmb3JtZWQgKi8xLCBtYXRjaERhdGUoZGF0ZSkpO1xuICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9SZXN1bHQuZnJvbU9wdGlvbigvKiBNaXNzaW5nICovMCwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9BcnJheS5hdCgwLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBKc19kaWN0LmdldChtZXRhZGF0YSwgXCJkYXRlXCIpKSkpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUYWdzKG1ldGFkYXRhKSB7XG4gIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcChSZWx1ZGVfTGlzdC5mcm9tQXJyYXksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSkpKEpzX2RpY3QuZ2V0KG1ldGFkYXRhLCBcInRhZ3NcIikpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFbnRyeShtYXJrZG93bikge1xuICB2YXIgbWF0Y2ggPSBNYXJrZG93bk1ldGFkYXRhLnBhcnNlTWV0YWRhdGEobWFya2Rvd24pO1xuICB2YXIgbWV0YWRhdGEgPSBtYXRjaFswXTtcbiAgdmFyIG1hdGNoJDEgPSBwYXJzZVRpdGxlKG1ldGFkYXRhKTtcbiAgdmFyIG1hdGNoJDIgPSBwYXJzZVRpbWVzdGFtcChtZXRhZGF0YSk7XG4gIHZhciBtYXRjaCQzID0gcGFyc2VUYWdzKG1ldGFkYXRhKTtcbiAgaWYgKG1hdGNoJDEgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChtYXRjaCQyLnRhZykge1xuICAgICAgaWYgKG1hdGNoJDMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogVGltZXN0YW1wRXJyb3IgKi9bbWF0Y2gkMlswXV1dKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBCYWRNZXRhZGF0YSAqLzJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1hdGNoJDMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIC8qIE9rICovQmxvY2suX18oMCwgW3tcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBtYXRjaCQxLFxuICAgICAgICAgICAgICAgICAgZGF0ZTogbWF0Y2gkMlswXSxcbiAgICAgICAgICAgICAgICAgIHRhZ3M6IG1hdGNoJDMsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBtYXRjaFsxXVxuICAgICAgICAgICAgICAgIH1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIFRhZ3NNaXNzaW5nICovMV0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtYXRjaCQyLnRhZyB8fCBtYXRjaCQzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogQmFkTWV0YWRhdGEgKi8yXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIFRpdGxlTWlzc2luZyAqLzBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkQW5kUGFyc2VFbnRyaWVzRGlyZWN0b3J5KGRpcmVjdG9yeSkge1xuICByZXR1cm4gUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMuZmlsdGVyKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKFwiLm1kXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWVudHJ5LmlzRGlyZWN0b3J5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5tYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHBhcmFtLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gUGF0aC5qb2luKGRpcmVjdG9yeSwgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8uZmxhdE1hcCgoZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLmZyb21SZXN1bHQoQ3VycnkuXzIoUmVsdWRlX1Jlc3VsdC5tYXBFcnJvciwgKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBQYXJzZUVycm9yICovQmxvY2suX18oMiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBuYW1lICovbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZXJyb3IgKi9lcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBwYXJzZUVudHJ5KHRleHQpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfSU8ubWFwRXJyb3IsIChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIFJlYWRFbnRyeUVycm9yICovQmxvY2suX18oMSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbmFtZSAqL25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlcnJvciAqL2Vycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5vZGVGU19fUmVhZEZpbGUucmVhZEZpbGUodW5kZWZpbmVkLCBwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLyogU3VzcGVuZCAqL0Jsb2NrLl9fKDIsIFsoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWFkaW5nIGVudHJ5IGZyb20gXFxcIlwiICsgKFN0cmluZyhwYXRoKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXSkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkucmVkdWNlKChmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8uZmxhdE1hcCgoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9JTy5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBhY2N1bXVsYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8qIFB1cmUgKi9CbG9jay5fXygwLCBbLyogW10gKi8wXSkpO1xuICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0lPLm1hcEVycm9yLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBSZWFkRGlyZWN0b3J5RXJyb3IgKi9CbG9jay5fXygwLCBbZXJyb3JdKTtcbiAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfSU8uZmxhdE1hcCgoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZTX19SZWFkRGlyLnJlYWREaXIodW5kZWZpbmVkLCBkaXJlY3RvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCAvKiBTdXNwZW5kICovQmxvY2suX18oMiwgWyhmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWRpbmcgZnJvbSBlbnRyaWVzIGRpcmVjdG9yeSBcXFwiXCIgKyAoU3RyaW5nKGRpcmVjdG9yeSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KV0pKSkpO1xufVxuXG5mdW5jdGlvbiByZWFkQW5kUGFyc2VBYm91dFBhdGgocGF0aCkge1xuICByZXR1cm4gUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRlNfX1JlYWRGaWxlLnJlYWRGaWxlKHVuZGVmaW5lZCwgcGF0aCk7XG4gICAgICAgICAgICAgIH0pLCAvKiBTdXNwZW5kICovQmxvY2suX18oMiwgWyhmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWFkaW5nIGFib3V0IHRleHQgZnJvbSBcXFwiXCIgKyAoU3RyaW5nKHBhdGgpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9KV0pKTtcbn1cblxuZnVuY3Rpb24gcmVhZEFuZFBhcnNlQWxsKGFib3V0UGF0aCwgZW50cmllc0RpcmVjdG9yeSkge1xuICByZXR1cm4gUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9JTy5iaW1hcCgoZnVuY3Rpb24gKGFib3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dDogYWJvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXM6IGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBBYm91dEZpbGVFcnJvciAqL0Jsb2NrLl9fKDAsIFtlcnJvcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCByZWFkQW5kUGFyc2VBYm91dFBhdGgoYWJvdXRQYXRoKSk7XG4gICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfSU8ubWFwRXJyb3IsIChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVudHJpZXNEaXJlY3RvcnlFcnJvciAqL0Jsb2NrLl9fKDEsIFtlcnJvcl0pO1xuICAgICAgICAgICAgICAgICAgfSksIHJlYWRBbmRQYXJzZUVudHJpZXNEaXJlY3RvcnkoZW50cmllc0RpcmVjdG9yeSkpKTtcbn1cblxuZXhwb3J0cy5wYXJzZVRpdGxlID0gcGFyc2VUaXRsZTtcbmV4cG9ydHMubWF0Y2hEYXRlID0gbWF0Y2hEYXRlO1xuZXhwb3J0cy5wYXJzZVRpbWVzdGFtcCA9IHBhcnNlVGltZXN0YW1wO1xuZXhwb3J0cy5wYXJzZVRhZ3MgPSBwYXJzZVRhZ3M7XG5leHBvcnRzLnBhcnNlRW50cnkgPSBwYXJzZUVudHJ5O1xuZXhwb3J0cy5yZWFkQW5kUGFyc2VFbnRyaWVzRGlyZWN0b3J5ID0gcmVhZEFuZFBhcnNlRW50cmllc0RpcmVjdG9yeTtcbmV4cG9ydHMucmVhZEFuZFBhcnNlQWJvdXRQYXRoID0gcmVhZEFuZFBhcnNlQWJvdXRQYXRoO1xuZXhwb3J0cy5yZWFkQW5kUGFyc2VBbGwgPSByZWFkQW5kUGFyc2VBbGw7XG4vKiBwYXRoIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcblxudmFyIG5vdEZvdW5kID0gLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAvKiBkYXRhICovdW5kZWZpbmVkLFxuICAgIC8qIHN0YXR1cyAqLzQwMFxuICBdKTtcblxuZXhwb3J0cy5ub3RGb3VuZCA9IG5vdEZvdW5kO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xudmFyIEN1cnJ5ID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTtcbnZhciBSZWx1ZGVfSW50ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiKTtcbnZhciBSZWx1ZGVfT3B0aW9uID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiKTtcblxuZnVuY3Rpb24gcm91dGUoc2VnbWVudHMpIHtcbiAgdmFyIGxlbiA9IHNlZ21lbnRzLmxlbmd0aDtcbiAgaWYgKGxlbiA+PSA1KSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMCA6XG4gICAgICAgIHJldHVybiAvKiBJbmRleCAqL0Jsb2NrLl9fKDAsIFsvKiBwYWdlICovMV0pO1xuICAgIGNhc2UgMSA6XG4gICAgICAgIHZhciBwYWdlID0gc2VnbWVudHNbMF07XG4gICAgICAgIGlmIChwYWdlID09PSBcImFib3V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gLyogQWJvdXQgKi8wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBJbmRleCAqL0Jsb2NrLl9fKDAsIFsvKiBwYWdlICovcGFnZV0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWdlID49IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JbnQuZnJvbVN0cmluZyhwYWdlKSkpO1xuICAgICAgICB9XG4gICAgY2FzZSAyIDpcbiAgICAgICAgdmFyIGRpcmVjdG9yeSA9IHNlZ21lbnRzWzBdO1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdG9yeSkge1xuICAgICAgICAgIGNhc2UgXCJ0YWdcIiA6XG4gICAgICAgICAgICAgIHZhciBzbHVnID0gc2VnbWVudHNbMV07XG4gICAgICAgICAgICAgIHJldHVybiAvKiBUYWdTZWFyY2ggKi9CbG9jay5fXygxLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBzbHVnICovc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIHBhZ2UgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgY2FzZSBcInN0YXRpY1wiIDpcbiAgICAgICAgICBjYXNlIFwidXBsb2Fkc1wiIDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbGVuYW1lID0gc2VnbWVudHNbMV07XG4gICAgICAgIHJldHVybiAvKiBTdGF0aWMgKi9CbG9jay5fXygzLCBbXG4gICAgICAgICAgICAgICAgICAvKiBkaXJlY3RvcnkgKi9kaXJlY3RvcnksXG4gICAgICAgICAgICAgICAgICAvKiBmaWxlbmFtZSAqL2ZpbGVuYW1lXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgY2FzZSAzIDpcbiAgICAgICAgdmFyIG1hdGNoID0gc2VnbWVudHNbMF07XG4gICAgICAgIGlmIChtYXRjaCAhPT0gXCJ0YWdcIikge1xuICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNsdWckMSA9IHNlZ21lbnRzWzFdO1xuICAgICAgICB2YXIgcGFnZSQxID0gc2VnbWVudHNbMl07XG4gICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogVGFnU2VhcmNoICovQmxvY2suX18oMSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBzbHVnICovc2x1ZyQxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBwYWdlICovcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZSA+PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkoUmVsdWRlX0ludC5mcm9tU3RyaW5nKHBhZ2UkMSkpKTtcbiAgICBjYXNlIDQgOlxuICAgICAgICB2YXIgeWVhciA9IHNlZ21lbnRzWzBdO1xuICAgICAgICB2YXIgbW9udGggPSBzZWdtZW50c1sxXTtcbiAgICAgICAgdmFyIGRheSA9IHNlZ21lbnRzWzJdO1xuICAgICAgICB2YXIgc2x1ZyQyID0gc2VnbWVudHNbM107XG4gICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVudHJ5ICovQmxvY2suX18oMiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiB5ZWFyICovcGFyYW1bMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG1vbnRoICovcGFyYW1bMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGRheSAqL3BhcmFtWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBzbHVnICovc2x1ZyQyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBwYXJhbVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHllYXIgPSBwYXJhbVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5IDw9IDMxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkoUmVsdWRlX0ludC5mcm9tU3RyaW5nKGRheSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfT3B0aW9uLmZsYXRNYXAsIChmdW5jdGlvbiAoeWVhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAobW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIHR1cGxlICovW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb250aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoIDw9IDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JbnQuZnJvbVN0cmluZyhtb250aCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0ludC5mcm9tU3RyaW5nKHllYXIpKSkpO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkKHJvdXRlKSB7XG4gIGlmICh0eXBlb2Ygcm91dGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gXCIvYWJvdXRcIjtcbiAgfVxuICBzd2l0Y2ggKHJvdXRlLnRhZyB8IDApIHtcbiAgICBjYXNlIC8qIEluZGV4ICovMCA6XG4gICAgICAgIHZhciBwYWdlID0gcm91dGVbLyogcGFnZSAqLzBdO1xuICAgICAgICBpZiAocGFnZSAhPT0gMSkge1xuICAgICAgICAgIHJldHVybiBcIi9cIiArIChTdHJpbmcocGFnZSkgKyBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCIvXCI7XG4gICAgICAgIH1cbiAgICBjYXNlIC8qIFRhZ1NlYXJjaCAqLzEgOlxuICAgICAgICB2YXIgcGFnZSQxID0gcm91dGVbLyogcGFnZSAqLzFdO1xuICAgICAgICB2YXIgc2x1ZyA9IHJvdXRlWy8qIHNsdWcgKi8wXTtcbiAgICAgICAgaWYgKHBhZ2UkMSAhPT0gMSkge1xuICAgICAgICAgIHJldHVybiBcIi90YWcvXCIgKyAoU3RyaW5nKHNsdWcpICsgKFwiL1wiICsgKFN0cmluZyhwYWdlJDEpICsgXCJcIikpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCIvdGFnL1wiICsgKFN0cmluZyhzbHVnKSArIFwiXCIpO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBFbnRyeSAqLzIgOlxuICAgICAgICByZXR1cm4gXCIvXCIgKyAoU3RyaW5nKHJvdXRlWy8qIHllYXIgKi8wXSkgKyAoXCIvXCIgKyAoU3RyaW5nKHJvdXRlWy8qIG1vbnRoICovMV0pICsgKFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBkYXkgKi8yXSkgKyAoXCIvXCIgKyAoU3RyaW5nKHJvdXRlWy8qIHNsdWcgKi8zXSkgKyBcIlwiKSkpKSkpKTtcbiAgICBjYXNlIC8qIFN0YXRpYyAqLzMgOlxuICAgICAgICByZXR1cm4gXCIvXCIgKyAoU3RyaW5nKHJvdXRlWy8qIGRpcmVjdG9yeSAqLzBdKSArIChcIi9cIiArIChTdHJpbmcocm91dGVbLyogZmlsZW5hbWUgKi8xXSkgKyBcIlwiKSkpO1xuICAgIFxuICB9XG59XG5cbmV4cG9ydHMucm91dGUgPSByb3V0ZTtcbmV4cG9ydHMuYnVpbGQgPSBidWlsZDtcbi8qIFJlbHVkZV9JbnQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgSFRUUCA9IHJlcXVpcmUoXCIuL2JpbmRpbmdzL0hUVFAuYnMuanNcIik7XG52YXIgSHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoXCIuL1JvdXRlci5icy5qc1wiKTtcbnZhciAkJFJlc3BvbnNlID0gcmVxdWlyZShcIi4vUmVzcG9uc2UuYnMuanNcIik7XG52YXIgUmVsdWRlX0lPID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpO1xudmFyIENhbWxfb3B0aW9uID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX29wdGlvbi5qc1wiKTtcbnZhciBQYWdlX19SZW5kZXIgPSByZXF1aXJlKFwiLi92aWV3cy9QYWdlX19SZW5kZXIuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG52YXIgQWJvdXRDb250cm9sbGVyID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvQWJvdXRDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIEVudHJ5Q29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL0VudHJ5Q29udHJvbGxlci5icy5qc1wiKTtcbnZhciBJbmRleENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIuYnMuanNcIik7XG52YXIgU3RhdGljQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL1N0YXRpY0NvbnRyb2xsZXIuYnMuanNcIik7XG52YXIgVGFnU2VhcmNoQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL1RhZ1NlYXJjaENvbnRyb2xsZXIuYnMuanNcIik7XG5cbmZ1bmN0aW9uIHNwbGl0VVJMU2VnbWVudHModXJsKSB7XG4gIHJldHVybiB1cmwuc2xpY2UoMSkuc3BsaXQoXCIvXCIpLm1hcCgoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc2VnbWVudCkudHJpbSgpO1xuICAgICAgICAgICAgICAgIH0pKS5maWx0ZXIoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQubGVuZ3RoID49IDE7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gbWFrZVJlc3BvbnNlKHBhcmFtLCByb3V0ZSkge1xuICB2YXIgZW50cmllcyA9IHBhcmFtLmVudHJpZXM7XG4gIGlmICh0eXBlb2Ygcm91dGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gQWJvdXRDb250cm9sbGVyLm1ha2VSZXNwb25zZShwYXJhbS5hYm91dCk7XG4gIH1cbiAgc3dpdGNoIChyb3V0ZS50YWcgfCAwKSB7XG4gICAgY2FzZSAvKiBJbmRleCAqLzAgOlxuICAgICAgICByZXR1cm4gSW5kZXhDb250cm9sbGVyLm1ha2VSZXNwb25zZShlbnRyaWVzLCByb3V0ZVsvKiBwYWdlICovMF0pO1xuICAgIGNhc2UgLyogVGFnU2VhcmNoICovMSA6XG4gICAgICAgIHJldHVybiBUYWdTZWFyY2hDb250cm9sbGVyLm1ha2VSZXNwb25zZShlbnRyaWVzLCByb3V0ZVsvKiBzbHVnICovMF0sIHJvdXRlWy8qIHBhZ2UgKi8xXSk7XG4gICAgY2FzZSAvKiBFbnRyeSAqLzIgOlxuICAgICAgICByZXR1cm4gRW50cnlDb250cm9sbGVyLm1ha2VSZXNwb25zZShlbnRyaWVzLCByb3V0ZVsvKiB5ZWFyICovMF0sIHJvdXRlWy8qIG1vbnRoICovMV0sIHJvdXRlWy8qIGRheSAqLzJdLCByb3V0ZVsvKiBzbHVnICovM10pO1xuICAgIGNhc2UgLyogU3RhdGljICovMyA6XG4gICAgICAgIHJldHVybiBTdGF0aWNDb250cm9sbGVyLm1ha2VSZXNwb25zZShyb3V0ZVsvKiBkaXJlY3RvcnkgKi8wXSwgcm91dGVbLyogZmlsZW5hbWUgKi8xXSk7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZShzaXRlTmFtZSwgZGF0YSkge1xuICByZXR1cm4gSHR0cC5jcmVhdGVTZXJ2ZXIoKGZ1bmN0aW9uIChyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBSZWx1ZGVfT3B0aW9uLmdldE9yRWxzZShcIi9cIiwgQ2FtbF9vcHRpb24udW5kZWZpbmVkX3RvX29wdChyZXF1ZXN0LnVybCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8udW5zYWZlUnVuQXN5bmMoKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLnRhcCgoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5vbihcImNsb3NlXCIsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtcyA9IERhdGUubm93KCkgLSBzdGFydFRpbWUgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiICsgKFN0cmluZyhzdGF0dXMpICsgKFwiIFwiICsgKFN0cmluZyh1cmwpICsgKFwiIFwiICsgKFN0cmluZyhtcykgKyBcIm1zXCIpKSkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy50YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFRUUC4kJFJlc3BvbnNlLnNldFN0YXR1c0NvZGUoMjAwLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50VHlwZShSZWx1ZGVfT3B0aW9uLmdldE9yRWxzZShcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLCByZXNbLyogdHlwZV8gKi8xXSkpKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFRUUC4kJFJlc3BvbnNlLnNldENvbnRlbnRMZW5ndGgocmVzWy8qIGxlbmd0aCAqLzJdKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRMYXN0TW9kaWZpZWQocmVzWy8qIG1vZGlmaWVkICovM10pKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzWy8qIHN0cmVhbSAqLzBdLnBpcGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBQYWdlX19SZW5kZXIucmVuZGVyKHNpdGVOYW1lLCByZXNbLyogZGF0YSAqLzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRTdGF0dXNDb2RlKHJlc1svKiBzdGF0dXMgKi8xXSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFRUUC4kJFJlc3BvbnNlLnNldENvbnRlbnRUeXBlKFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIpKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50TGVuZ3RoKGxlbmd0aCkocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZW5kKGJvZHksIFwidXRmLThcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkoUmVsdWRlX0lPLmhhbmRsZUVycm9yKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQkUmVzcG9uc2Uubm90Rm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VSZXNwb25zZShkYXRhLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy5mcm9tT3B0aW9uKChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUm91dGVyLnJvdXRlKHNwbGl0VVJMU2VnbWVudHModXJsKSkpKSkpKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW4ocGFyYW0pIHtcbiAgcGFyYW0ubGlzdGVuKDUwMDAsIFwiMTI3LjAuMC4xXCIsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3RlbmluZ1wiKTtcbiAgICAgICAgICBcbiAgICAgICAgfSkpO1xuICBcbn1cblxuZXhwb3J0cy5zcGxpdFVSTFNlZ21lbnRzID0gc3BsaXRVUkxTZWdtZW50cztcbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuZXhwb3J0cy5tYWtlID0gbWFrZTtcbmV4cG9ydHMubGlzdGVuID0gbGlzdGVuO1xuLyogaHR0cCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgU2x1Z2lmeSA9IHJlcXVpcmUoXCJzbHVnaWZ5LWJzL3NyYy9TbHVnaWZ5LmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBzbHVnKHBhcmFtKSB7XG4gIHJldHVybiBDdXJyeS5fMyhTbHVnaWZ5LnNsdWdpZnksIFwiLVwiLCBwYXJhbSwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMuc2x1ZyA9IHNsdWc7XG4vKiBTbHVnaWZ5IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEFyZ3BhcnNlID0gcmVxdWlyZShcImFyZ3BhcnNlXCIpO1xuXG5mdW5jdGlvbiBtYWtlKHZlcnNpb24sIHByb2cpIHtcbiAgcmV0dXJuIG5ldyBBcmdwYXJzZS5Bcmd1bWVudFBhcnNlcih7XG4gICAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICAgIHByb2c6IHByb2dcbiAgICAgICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRBcmd1bWVudChzaG9ydE5hbWUsIGxvbmdOYW1lLCBkZXN0LCByZXF1aXJlZCwgbWV0YXZhciwgcGFyc2VyKSB7XG4gIHBhcnNlci5hZGRBcmd1bWVudChbXG4gICAgICAgIHNob3J0TmFtZSxcbiAgICAgICAgbG9uZ05hbWVcbiAgICAgIF0sIHtcbiAgICAgICAgZGVzdDogZGVzdCxcbiAgICAgICAgbWV0YXZhcjogbWV0YXZhcixcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkXG4gICAgICB9KTtcbiAgXG59XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG5leHBvcnRzLmFkZEFyZ3VtZW50ID0gYWRkQXJndW1lbnQ7XG4vKiBhcmdwYXJzZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gbWFrZSh5ZWFyLCBtb250aCwgZGF5LCBob3VyT3B0LCBtaW51dGVPcHQsIHBhcmFtKSB7XG4gIHZhciBob3VyID0gaG91ck9wdCAhPT0gdW5kZWZpbmVkID8gaG91ck9wdCA6IDA7XG4gIHZhciBtaW51dGUgPSBtaW51dGVPcHQgIT09IHVuZGVmaW5lZCA/IG1pbnV0ZU9wdCA6IDA7XG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEgfCAwLCBkYXksIGhvdXIsIG1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRoKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDEgfCAwO1xufVxuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuZXhwb3J0cy5nZXRNb250aCA9IGdldE1vbnRoO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgRW1vdGlvbiA9IHJlcXVpcmUoXCJlbW90aW9uXCIpO1xudmFyIENvcmUgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTtcblxudmFyIFByb3ZpZGVyID0geyB9O1xuXG52YXIgQ2FjaGUgPSB7XG4gIFByb3ZpZGVyOiBQcm92aWRlclxufTtcblxudmFyIFNlcnZlciA9IHsgfTtcblxuZnVuY3Rpb24gRW1vdGlvbiRQcm92aWRlcihQcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBQcm9wcy5jaGlsZHJlbjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29yZS5DYWNoZVByb3ZpZGVyLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBFbW90aW9uLmNhY2hlLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICAgIH0pO1xufVxuXG52YXIgUHJvdmlkZXIkMSA9IHtcbiAgbWFrZTogRW1vdGlvbiRQcm92aWRlclxufTtcblxuZXhwb3J0cy5DYWNoZSA9IENhY2hlO1xuZXhwb3J0cy5TZXJ2ZXIgPSBTZXJ2ZXI7XG5leHBvcnRzLlByb3ZpZGVyID0gUHJvdmlkZXIkMTtcbi8qIHJlYWN0IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgJCRSZXF1ZXN0ID0geyB9O1xuXG5mdW5jdGlvbiBzZXRTdGF0dXNDb2RlKHN0YXR1cywgcmVzcG9uc2UpIHtcbiAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgXG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlKHZhbHVlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBwYXJhbS5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgdmFsdWUpO1xuICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRMZW5ndGgobGVuZ3RoKSB7XG4gIHZhciBwYXJ0aWFsX2FyZyA9IFN0cmluZyhsZW5ndGgpO1xuICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcGFyYW0uc2V0SGVhZGVyKFwiQ29udGVudC1MZW5ndGhcIiwgcGFydGlhbF9hcmcpO1xuICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldExhc3RNb2RpZmllZCh0aW1lc3RhbXApIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApLnRvVVRDU3RyaW5nKCk7XG4gIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBwYXJhbS5zZXRIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIsIGRhdGUpO1xuICAgICAgXG4gICAgfSk7XG59XG5cbnZhciAkJFJlc3BvbnNlID0ge1xuICBzZXRTdGF0dXNDb2RlOiBzZXRTdGF0dXNDb2RlLFxuICBzZXRDb250ZW50VHlwZTogc2V0Q29udGVudFR5cGUsXG4gIHNldENvbnRlbnRMZW5ndGg6IHNldENvbnRlbnRMZW5ndGgsXG4gIHNldExhc3RNb2RpZmllZDogc2V0TGFzdE1vZGlmaWVkXG59O1xuXG52YXIgU2VydmVyID0geyB9O1xuXG5leHBvcnRzLiQkUmVxdWVzdCA9ICQkUmVxdWVzdDtcbmV4cG9ydHMuJCRSZXNwb25zZSA9ICQkUmVzcG9uc2U7XG5leHBvcnRzLlNlcnZlciA9IFNlcnZlcjtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIFBhY2thZ2VKc29uID0gcmVxdWlyZShcIi4uLy4uL3BhY2thZ2UuanNvblwiKTtcblxudmFyIGpzb24gPSBQYWNrYWdlSnNvbjtcblxuZXhwb3J0cy5qc29uID0ganNvbjtcbi8qIGpzb24gTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoYWJvdXQpIHtcbiAgcmV0dXJuIC8qIFB1cmUgKi9CbG9jay5fXygwLCBbLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAvKiBkYXRhICovLyogQWJvdXQgKi9CbG9jay5fXygyLCBbe1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGFib3V0XG4gICAgICAgICAgICAgICAgICAgIH1dKSxcbiAgICAgICAgICAgICAgICAvKiBzdGF0dXMgKi8yMDBcbiAgICAgICAgICAgICAgXSldKTtcbn1cblxuZXhwb3J0cy5tYWtlUmVzcG9uc2UgPSBtYWtlUmVzcG9uc2U7XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkJERhdGUgPSByZXF1aXJlKFwiLi4vYmluZGluZ3MvRGF0ZS5icy5qc1wiKTtcbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIFV0aWxzID0gcmVxdWlyZShcIi4uL1V0aWxzLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBSZWx1ZGVfSW50ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiKTtcbnZhciBSZWx1ZGVfTGlzdCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9PcHRpb24gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBkYXlUaW1lc3RhbXAoZGF0ZSkge1xuICByZXR1cm4gJCREYXRlLm1ha2UoZGF0ZS5nZXRGdWxsWWVhcigpLCAkJERhdGUuZ2V0TW9udGgoZGF0ZSksIGRhdGUuZ2V0RGF0ZSgpLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKS5nZXRUaW1lKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShlbnRyaWVzLCB5ZWFyLCBtb250aCwgZGF5LCBzbHVnKSB7XG4gIHZhciB0aW1lc3RhbXAgPSAkJERhdGUubWFrZSh5ZWFyLCBtb250aCwgZGF5LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKS5nZXRUaW1lKCk7XG4gIHJldHVybiBSZWx1ZGVfSU8ubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZGF0YSAqLy8qIEVudHJ5ICovQmxvY2suX18oMywgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVudHJ5LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBlbnRyeS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbnRyeS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBlbnRyeS50YWdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9MaXN0LmZpbmQsIChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheVRpbWVzdGFtcChlbnRyeS5kYXRlKSA8IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfTGlzdC5zb3J0QnkoKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoUmVsdWRlX0ludC5jb21wYXJlLCBiLmRhdGUuZ2V0VGltZSgpLCBhLmRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZW50cmllcykpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9MaXN0LmZpbmQsIChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheVRpbWVzdGFtcChlbnRyeS5kYXRlKSA+IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfTGlzdC5zb3J0QnkoKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoUmVsdWRlX0ludC5jb21wYXJlLCBhLmRhdGUuZ2V0VGltZSgpLCBiLmRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZW50cmllcykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBzdGF0dXMgKi8yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmZyb21PcHRpb24oKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9MaXN0LmZpbmQsIChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXlUaW1lc3RhbXAoZW50cnkuZGF0ZSkgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoVXRpbHMuc2x1Zyh1bmRlZmluZWQpLCBlbnRyeS50aXRsZSkgPT09IHNsdWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksIGVudHJpZXMpKSk7XG59XG5cbmV4cG9ydHMuZGF5VGltZXN0YW1wID0gZGF5VGltZXN0YW1wO1xuZXhwb3J0cy5tYWtlUmVzcG9uc2UgPSBtYWtlUmVzcG9uc2U7XG4vKiBVdGlscyBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIENvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9Db25zdGFudHMuYnMuanNcIik7XG52YXIgUmVsdWRlX0lPID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpO1xudmFyIENhbWxfaW50MzIgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfaW50MzIuanNcIik7XG52YXIgUmVsdWRlX0ludCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JbnQuYnMuanNcIik7XG52YXIgUmVsdWRlX0xpc3QgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfTGlzdC5icy5qc1wiKTtcbnZhciBSZWx1ZGVfT3B0aW9uID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiKTtcblxuZnVuY3Rpb24gbWFrZVJlc3BvbnNlKGVudHJpZXMsIHBhZ2UpIHtcbiAgcmV0dXJuIFJlbHVkZV9JTy5mcm9tT3B0aW9uKChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKHBhZ2VFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIFBhZ2UgKi9CbG9jay5fXygwLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGRhdGEgKi8vKiBJbmRleCAqL0Jsb2NrLl9fKDAsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBDdXJyeS5fMShSZWx1ZGVfTGlzdC5sZW5ndGgsIGVudHJpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzOiBSZWx1ZGVfTGlzdC5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVudHJ5LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBlbnRyeS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbnRyeS50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShwYWdlRW50cmllcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAocGFnZUVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoUmVsdWRlX0xpc3QubGVuZ3RoLCBwYWdlRW50cmllcykgIT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfTGlzdC50YWtlKENvbnN0YW50cy5lbnRyaWVzUGVyUGFnZSwgcGFyYW1bMV0pKSk7XG4gICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0xpc3Quc3BsaXRBdChDYW1sX2ludDMyLmltdWwocGFnZSAtIDEgfCAwLCBDb25zdGFudHMuZW50cmllc1BlclBhZ2UpLCBSZWx1ZGVfTGlzdC5zb3J0QnkoKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKFJlbHVkZV9JbnQuY29tcGFyZSwgYi5kYXRlLmdldFRpbWUoKSwgYS5kYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBlbnRyaWVzKSkpKTtcbn1cblxuZXhwb3J0cy5tYWtlUmVzcG9uc2UgPSBtYWtlUmVzcG9uc2U7XG4vKiBSZWx1ZGVfSU8gTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoZGlyZWN0b3J5LCBmaWxlbmFtZSkge1xuICByZXR1cm4gLyogUHVyZSAqL0Jsb2NrLl9fKDAsIFsvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgIC8qIGRhdGEgKi91bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgIF0pXSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xudmFyIEN1cnJ5ID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuLi9VdGlscy5icy5qc1wiKTtcbnZhciBDb25zdGFudHMgPSByZXF1aXJlKFwiLi4vQ29uc3RhbnRzLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBDYW1sX2ludDMyID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX2ludDMyLmpzXCIpO1xudmFyIFJlbHVkZV9JbnQgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9MaXN0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShlbnRyaWVzLCBzbHVnLCBwYWdlKSB7XG4gIHJldHVybiBSZWx1ZGVfSU8uZnJvbU9wdGlvbigoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gcGFyYW1bMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJlZEVudHJpZXMgPSBwYXJhbVswXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAocGFnZUVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZGF0YSAqLy8qIFRhZ1NlYXJjaCAqL0Jsb2NrLl9fKDEsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogdGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogQ3VycnkuXzEoUmVsdWRlX0xpc3QubGVuZ3RoLCBmaWx0ZXJlZEVudHJpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzOiBSZWx1ZGVfTGlzdC5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVudHJ5LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBlbnRyeS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbnRyeS50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShwYWdlRW50cmllcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAocGFnZUVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoUmVsdWRlX0xpc3QubGVuZ3RoLCBwYWdlRW50cmllcykgIT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfTGlzdC50YWtlKENvbnN0YW50cy5lbnRyaWVzUGVyUGFnZSwgcGFyYW1bMV0pKSk7XG4gICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gcGFyYW1bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWRFbnRyaWVzID0gcGFyYW1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRFbnRyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9MaXN0LnNwbGl0QXQoQ2FtbF9pbnQzMi5pbXVsKHBhZ2UgLSAxIHwgMCwgQ29uc3RhbnRzLmVudHJpZXNQZXJQYWdlKSwgUmVsdWRlX0xpc3Quc29ydEJ5KChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfSW50LmNvbXBhcmUsIGIuZGF0ZS5nZXRUaW1lKCksIGEuZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZmlsdGVyZWRFbnRyaWVzKSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfTGlzdC5mb2xkTGVmdCgoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IEN1cnJ5Ll8yKFJlbHVkZV9MaXN0LmZpbmQsIChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShVdGlscy5zbHVnKHVuZGVmaW5lZCksIHRhZykgPT09IHNsdWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZW50cnkudGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY3VtdWxhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdG9yWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgdW5kZWZpbmVkKShlbnRyaWVzKSkpKTtcbn1cblxuZXhwb3J0cy5tYWtlUmVzcG9uc2UgPSBtYWtlUmVzcG9uc2U7XG4vKiBVdGlscyBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDc3MgPSByZXF1aXJlKFwiYnMtY3NzLWVtb3Rpb24vc3JjL0Nzcy5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgRW1vdGlvbiA9IHJlcXVpcmUoXCIuLi9iaW5kaW5ncy9FbW90aW9uLmJzLmpzXCIpO1xudmFyIEFib3V0UGFnZSA9IHJlcXVpcmUoXCIuL3BhZ2VzL0Fib3V0UGFnZS5icy5qc1wiKTtcbnZhciBFbnRyeVBhZ2UgPSByZXF1aXJlKFwiLi9wYWdlcy9FbnRyeVBhZ2UuYnMuanNcIik7XG52YXIgSW5kZXhQYWdlID0gcmVxdWlyZShcIi4vcGFnZXMvSW5kZXhQYWdlLmJzLmpzXCIpO1xudmFyIE5vdEZvdW5kUGFnZSA9IHJlcXVpcmUoXCIuL3BhZ2VzL05vdEZvdW5kUGFnZS5icy5qc1wiKTtcbnZhciBUYWdTZWFyY2hQYWdlID0gcmVxdWlyZShcIi4vcGFnZXMvVGFnU2VhcmNoUGFnZS5icy5qc1wiKTtcbnZhciBCb290c3RyYXBSZWJvb3RNaW5Dc3MgPSByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzc1wiKTtcblxuZnVuY3Rpb24gZm9ybWF0VGl0bGUoc2l0ZU5hbWUsIHBhZ2VEYXRhKSB7XG4gIGlmIChwYWdlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFwiTm90IGZvdW5kIHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpO1xuICB9XG4gIHN3aXRjaCAocGFnZURhdGEudGFnIHwgMCkge1xuICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgcmV0dXJuIHNpdGVOYW1lO1xuICAgIGNhc2UgLyogVGFnU2VhcmNoICovMSA6XG4gICAgICAgIHJldHVybiBcIlwiICsgKFN0cmluZyhwYWdlRGF0YVswXS50YWcpICsgKFwiIHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpKSk7XG4gICAgY2FzZSAvKiBBYm91dCAqLzIgOlxuICAgICAgICByZXR1cm4gXCJBYm91dCB8IFwiICsgKFN0cmluZyhzaXRlTmFtZSkgKyBcIlwiKTtcbiAgICBjYXNlIC8qIEVudHJ5ICovMyA6XG4gICAgICAgIHJldHVybiBcIlwiICsgKFN0cmluZyhwYWdlRGF0YVswXS50aXRsZSkgKyAoXCIgfCBcIiArIChTdHJpbmcoc2l0ZU5hbWUpICsgXCJcIikpKTtcbiAgICBcbiAgfVxufVxuXG52YXIgY2xhc3NOYW1lID0gQ3VycnkuXzEoQ3NzLnN0eWxlLCAvKiA6OiAqL1tcbiAgICAgIENzcy5kaXNwbGF5KENzcy5mbGV4Qm94KSxcbiAgICAgIC8qIDo6ICovW1xuICAgICAgICBDc3MuZmxleERpcmVjdGlvbihDc3MuY29sdW1uKSxcbiAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgQ3NzLm1pbkhlaWdodChDc3MudmgoMTAwLjApKSxcbiAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgXVxuICAgICAgXVxuICAgIF0pO1xuXG5mdW5jdGlvbiBQYWdlX19Db21wb25lbnQkUm9vdChQcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBQcm9wcy5jaGlsZHJlbjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICAgICAgfSwgY2hpbGRyZW4pO1xufVxuXG52YXIgUm9vdCA9IHtcbiAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gIG1ha2U6IFBhZ2VfX0NvbXBvbmVudCRSb290XG59O1xuXG5mdW5jdGlvbiBQYWdlX19Db21wb25lbnQoUHJvcHMpIHtcbiAgdmFyIHNpdGVOYW1lID0gUHJvcHMuc2l0ZU5hbWU7XG4gIHZhciBwYWdlRGF0YSA9IFByb3BzLnBhZ2VEYXRhO1xuICB2YXIgdGl0bGUgPSBmb3JtYXRUaXRsZShzaXRlTmFtZSwgcGFnZURhdGEpO1xuICB2YXIgY29udGVudDtcbiAgaWYgKHBhZ2VEYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICBzd2l0Y2ggKHBhZ2VEYXRhLnRhZyB8IDApIHtcbiAgICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChJbmRleFBhZ2UubWFrZSwge1xuICAgICAgICAgICAgICAgIGRhdGE6IHBhZ2VEYXRhWzBdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBUYWdTZWFyY2ggKi8xIDpcbiAgICAgICAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUYWdTZWFyY2hQYWdlLm1ha2UsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBwYWdlRGF0YVswXVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogQWJvdXQgKi8yIDpcbiAgICAgICAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChBYm91dFBhZ2UubWFrZSwge1xuICAgICAgICAgICAgICAgIGRhdGE6IHBhZ2VEYXRhWzBdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBFbnRyeSAqLzMgOlxuICAgICAgICAgIGNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEVudHJ5UGFnZS5tYWtlLCB7XG4gICAgICAgICAgICAgICAgZGF0YTogcGFnZURhdGFbMF1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90Rm91bmRQYWdlLm1ha2UsIHsgfSk7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1vdGlvbi5Qcm92aWRlci5tYWtlLCB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IFwiZW5cIlxuICAgICAgICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImhlYWRcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhclNldDogXCJ1dGYtOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIHVuZGVmaW5lZCwgdGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwgdW5kZWZpbmVkLCBCb290c3RyYXBSZWJvb3RNaW5Dc3MpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJvZHlcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VfX0NvbXBvbmVudCRSb290LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKVxuICAgICAgICAgICAgfSk7XG59XG5cbnZhciBtYWtlID0gUGFnZV9fQ29tcG9uZW50O1xuXG5leHBvcnRzLmZvcm1hdFRpdGxlID0gZm9ybWF0VGl0bGU7XG5leHBvcnRzLlJvb3QgPSBSb290O1xuZXhwb3J0cy5tYWtlID0gbWFrZTtcbi8qIGNsYXNzTmFtZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTdHlsZSA9IHJlcXVpcmUoXCIuL1N0eWxlLmJzLmpzXCIpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEVtb3Rpb25TZXJ2ZXIgPSByZXF1aXJlKFwiZW1vdGlvbi1zZXJ2ZXJcIik7XG52YXIgUGFnZV9fQ29tcG9uZW50ID0gcmVxdWlyZShcIi4vUGFnZV9fQ29tcG9uZW50LmJzLmpzXCIpO1xudmFyIFNlcnZlciA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5mdW5jdGlvbiByZW5kZXIoc2l0ZU5hbWUsIHBhZ2VEYXRhKSB7XG4gIFN0eWxlLnJlZ2lzdGVyR2xvYmFsU3R5bGVzKHVuZGVmaW5lZCk7XG4gIHZhciByZW5kZXJlZCA9IEVtb3Rpb25TZXJ2ZXIucmVuZGVyU3R5bGVzVG9TdHJpbmcoU2VydmVyLnJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZV9fQ29tcG9uZW50Lm1ha2UsIHtcbiAgICAgICAgICAgICAgICBzaXRlTmFtZTogc2l0ZU5hbWUsXG4gICAgICAgICAgICAgICAgcGFnZURhdGE6IHBhZ2VEYXRhXG4gICAgICAgICAgICAgIH0pKSk7XG4gIHJldHVybiBcIjwhRE9DVFlQRSBodG1sPlwiICsgcmVuZGVyZWQ7XG59XG5cbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyO1xuLyogU3R5bGUgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3NzID0gcmVxdWlyZShcImJzLWNzcy1lbW90aW9uL3NyYy9Dc3MuanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xuXG52YXIgYmx1ZSA9IENzcy5yZ2IoMjUsIDExNiwgMTk1KTtcblxudmFyIGdyZXkxID0gQ3NzLnJnYigyNDksIDI0OSwgMjUwKTtcblxudmFyIGdyZXkyID0gQ3NzLnJnYigyMzMsIDIzNiwgMjM5KTtcblxudmFyIGdyZXkzID0gQ3NzLnJnYigyMjIsIDIyNiwgMjMwKTtcblxudmFyIGdyZXk0ID0gQ3NzLnJnYigyMDYsIDIxMiwgMjE4KTtcblxudmFyIGdyZXk1ID0gQ3NzLnJnYigxNzMsIDE4MSwgMTg5KTtcblxudmFyIGdyZXk2ID0gQ3NzLnJnYigxMDgsIDExNywgMTI1KTtcblxudmFyIGdyZXk3ID0gQ3NzLnJnYig3MywgODAsIDg3KTtcblxudmFyIGdyZXk4ID0gQ3NzLnJnYig1MiwgNTgsIDY0KTtcblxudmFyIGdyZXk5ID0gQ3NzLnJnYigzMywgMzcsIDQxKTtcblxudmFyIGRlc2t0b3BDb2x1bW5XaWR0aCA9IENzcy53aWR0aChDc3MucmVtKDM3LjUpKTtcblxudmFyIHBhcnRpYWxfYXJnID0gXCIobWluLXdpZHRoOiBcIiArIChTdHJpbmcoMzcuNSkgKyBcInJlbSlcIik7XG5cbmZ1bmN0aW9uIGRlc2t0b3BNZWRpYVF1ZXJ5KHBhcmFtKSB7XG4gIHJldHVybiBDc3MubWVkaWEocGFydGlhbF9hcmcsIHBhcmFtKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHbG9iYWxTdHlsZXMocGFyYW0pIHtcbiAgQ3VycnkuXzIoQ3NzLiQkZ2xvYmFsLCBcImFcIiwgLyogOjogKi9bXG4gICAgICAgIENzcy50ZXh0RGVjb3JhdGlvbihDc3Mubm9uZSksXG4gICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgIENzcy5jb2xvcihibHVlKSxcbiAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgXVxuICAgICAgXSk7XG4gIHZhciBjb2RlU3R5bGVfMDAwID0gQ3NzLmZvbnRTaXplKENzcy5yZW0oMC44NzUpKTtcbiAgdmFyIGNvZGVTdHlsZV8wMDEgPSAvKiA6OiAqL1tcbiAgICBDc3MuZm9udEZhbWlseSgvKiBtb25vc3BhY2UgKi8tNTU1MzYzOTAxKSxcbiAgICAvKiA6OiAqL1tcbiAgICAgIENzcy5iYWNrZ3JvdW5kQ29sb3IoZ3JleTIpLFxuICAgICAgLyogW10gKi8wXG4gICAgXVxuICBdO1xuICB2YXIgY29kZVN0eWxlID0gLyogOjogKi9bXG4gICAgY29kZVN0eWxlXzAwMCxcbiAgICBjb2RlU3R5bGVfMDAxXG4gIF07XG4gIEN1cnJ5Ll8yKENzcy4kJGdsb2JhbCwgXCJjb2RlXCIsIGNvZGVTdHlsZSk7XG4gIEN1cnJ5Ll8yKENzcy4kJGdsb2JhbCwgXCJwcmVcIiwgLyogOjogKi9bXG4gICAgICAgIENzcy5wYWRkaW5nKENzcy5yZW0oMC42MjUpKSxcbiAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgQ3NzLm92ZXJmbG93KENzcy5hdXRvKSxcbiAgICAgICAgICBjb2RlU3R5bGVcbiAgICAgICAgXVxuICAgICAgXSk7XG4gIHJldHVybiBDdXJyeS5fMihDc3MuJCRnbG9iYWwsIFwiaDEgY29kZSwgaDIgY29kZSwgaDMgY29kZVwiLCAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgQ3NzLmZvbnRTaXplKENzcy5pbmhlcml0XyksXG4gICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgXSk7XG59XG5cbnZhciBkYXJrQm9yZGVyQ29sb3VyID0gZ3JleTI7XG5cbnZhciBsaWdodEJvcmRlckNvbG91ciA9IGdyZXkzO1xuXG52YXIgZGVza3RvcENvbHVtblJlbSA9IDM3LjU7XG5cbmV4cG9ydHMuYmx1ZSA9IGJsdWU7XG5leHBvcnRzLmdyZXkxID0gZ3JleTE7XG5leHBvcnRzLmdyZXkyID0gZ3JleTI7XG5leHBvcnRzLmdyZXkzID0gZ3JleTM7XG5leHBvcnRzLmdyZXk0ID0gZ3JleTQ7XG5leHBvcnRzLmdyZXk1ID0gZ3JleTU7XG5leHBvcnRzLmdyZXk2ID0gZ3JleTY7XG5leHBvcnRzLmdyZXk3ID0gZ3JleTc7XG5leHBvcnRzLmdyZXk4ID0gZ3JleTg7XG5leHBvcnRzLmdyZXk5ID0gZ3JleTk7XG5leHBvcnRzLmRhcmtCb3JkZXJDb2xvdXIgPSBkYXJrQm9yZGVyQ29sb3VyO1xuZXhwb3J0cy5saWdodEJvcmRlckNvbG91ciA9IGxpZ2h0Qm9yZGVyQ29sb3VyO1xuZXhwb3J0cy5kZXNrdG9wQ29sdW1uUmVtID0gZGVza3RvcENvbHVtblJlbTtcbmV4cG9ydHMuZGVza3RvcENvbHVtbldpZHRoID0gZGVza3RvcENvbHVtbldpZHRoO1xuZXhwb3J0cy5kZXNrdG9wTWVkaWFRdWVyeSA9IGRlc2t0b3BNZWRpYVF1ZXJ5O1xuZXhwb3J0cy5yZWdpc3Rlckdsb2JhbFN0eWxlcyA9IHJlZ2lzdGVyR2xvYmFsU3R5bGVzO1xuLyogYmx1ZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuZnVuY3Rpb24gQWJvdXRQYWdlKFByb3BzKSB7XG4gIHZhciBwYXJhbSA9IFByb3BzLmRhdGE7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFwiYWJvdXRcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBwYXJhbS50ZXh0KSk7XG59XG5cbnZhciBtYWtlID0gQWJvdXRQYWdlO1xuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbmZ1bmN0aW9uIEVudHJ5UGFnZShQcm9wcykge1xuICB2YXIgcGFyYW0gPSBQcm9wcy5kYXRhO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBwYXJhbS50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBwYXJhbS50ZXh0KSk7XG59XG5cbnZhciBtYWtlID0gRW50cnlQYWdlO1xuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgUmVsdWRlX0xpc3QgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfTGlzdC5icy5qc1wiKTtcblxuZnVuY3Rpb24gSW5kZXhQYWdlKFByb3BzKSB7XG4gIHZhciBwYXJhbSA9IFByb3BzLmRhdGE7XG4gIHZhciBlbnRyaWVzID0gUmVsdWRlX0xpc3QudG9BcnJheShSZWx1ZGVfTGlzdC5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVudHJ5LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5LnRpdGxlKTtcbiAgICAgICAgICAgICAgfSkpKHBhcmFtLmVudHJpZXMpKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJwYWdlIFwiICsgKFN0cmluZyhwYXJhbS5wYWdlKSArIFwiXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFwidG90YWwgXCIgKyAoU3RyaW5nKHBhcmFtLnRvdGFsKSArIFwiXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIGVudHJpZXMpKTtcbn1cblxudmFyIG1ha2UgPSBJbmRleFBhZ2U7XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG4vKiByZWFjdCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuZnVuY3Rpb24gTm90Rm91bmRQYWdlKFByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJub3QgZm91bmRcIik7XG59XG5cbnZhciBtYWtlID0gTm90Rm91bmRQYWdlO1xuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgUmVsdWRlX0xpc3QgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfTGlzdC5icy5qc1wiKTtcblxuZnVuY3Rpb24gVGFnU2VhcmNoUGFnZShQcm9wcykge1xuICB2YXIgcGFyYW0gPSBQcm9wcy5kYXRhO1xuICB2YXIgZW50cmllcyA9IFJlbHVkZV9MaXN0LnRvQXJyYXkoUmVsdWRlX0xpc3QubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBlbnRyeS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeS50aXRsZSk7XG4gICAgICAgICAgICAgIH0pKShwYXJhbS5lbnRyaWVzKSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFwidGFnIFwiICsgKFN0cmluZyhwYXJhbS50YWcpICsgXCJcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJwYWdlIFwiICsgKFN0cmluZyhwYXJhbS5wYWdlKSArIFwiXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIGVudHJpZXMpKTtcbn1cblxudmFyIG1ha2UgPSBUYWdTZWFyY2hQYWdlO1xuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJncGFyc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtY3NzLWVtb3Rpb24vc3JjL0Nzcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfaW50MzIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfb3B0aW9uLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvanNfZGljdC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb3Rpb24tc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2Rvd24tbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRGlyLmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZEZpbGUuYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0FycmF5LmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9SZXN1bHQuYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2x1Z2lmeS1icy9zcmMvU2x1Z2lmeS5icy5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9