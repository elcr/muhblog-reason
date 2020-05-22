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


var Path = __webpack_require__(/*! path */ "path");
var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var Js_dict = __webpack_require__(/*! bs-platform/lib/js/js_dict.js */ "bs-platform/lib/js/js_dict.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var Relude_Int = __webpack_require__(/*! relude/src/Relude_Int.bs.js */ "relude/src/Relude_Int.bs.js");
var Caml_option = __webpack_require__(/*! bs-platform/lib/js/caml_option.js */ "bs-platform/lib/js/caml_option.js");
var Relude_List = __webpack_require__(/*! relude/src/Relude_List.bs.js */ "relude/src/Relude_List.bs.js");
var Relude_Array = __webpack_require__(/*! relude/src/Relude_Array.bs.js */ "relude/src/Relude_Array.bs.js");
var Relude_Float = __webpack_require__(/*! relude/src/Relude_Float.bs.js */ "relude/src/Relude_Float.bs.js");
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
                        return Curry._2(Relude_Option.flatMap, Relude_Float.fromString, (capture == null) ? undefined : Caml_option.some(capture));
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
                  return /* Ok */Block.__(0, [Relude_Int.fromFloat(new Date(year, month, day, hour, minute).getTime())]);
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
                  timestamp: match$2[0],
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
                                                }), NodeFS__ReadFile.readFile(undefined, Path.join(directory, name))));
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
                  }), NodeFS__ReadDir.readDir(undefined, directory)));
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
                            }), NodeFS__ReadFile.readFile(undefined, aboutPath));
              }), Curry._2(Relude_IO.mapError, (function (error) {
                    return /* EntriesDirectoryError */Block.__(1, [error]);
                  }), readAndParseEntriesDirectory(entriesDirectory)));
}

var readAndParseAboutPath = NodeFS__ReadFile.readFile;

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

function splitURLSegments(url) {
  return url.slice(1).split("/").map((function (segment) {
                  return decodeURIComponent(segment).trim();
                })).filter((function (segment) {
                return segment.length >= 1;
              }));
}

function makeResponse(param, route) {
  if (route === undefined) {
    return NotFoundController.response;
  }
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
                                    
                                  }))(makeResponse(data, Router.route(splitURLSegments(Relude_Option.getOrElse("/", Caml_option.undefined_to_opt(request.url)))))));
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
/* HTTP Not a pure module */


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

function makeResponse(about) {
  return /* Pure */Block.__(0, [/* Page */Block.__(0, [
                /* data *//* About */Block.__(2, [/* text */about]),
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
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var Utils = __webpack_require__(/*! ../Utils.bs.js */ "./src/Utils.bs.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var Relude_Int = __webpack_require__(/*! relude/src/Relude_Int.bs.js */ "relude/src/Relude_Int.bs.js");
var Relude_List = __webpack_require__(/*! relude/src/Relude_List.bs.js */ "relude/src/Relude_List.bs.js");
var Relude_Option = __webpack_require__(/*! relude/src/Relude_Option.bs.js */ "relude/src/Relude_Option.bs.js");

function makeResponse(entries, year, month, day, slug) {
  var timestamp = Relude_Int.fromFloat(new Date(Relude_Int.toFloat(year), Relude_Int.toFloat(month), Relude_Int.toFloat(day)).getTime());
  return Relude_IO.map((function (entry) {
                return /* Page */Block.__(0, [
                          /* data *//* Entry */Block.__(3, [
                              /* title */entry.title,
                              /* timestamp */timestamp,
                              /* text */entry.text,
                              /* tags */entry.tags,
                              /* previous */Relude_Option.map((function (entry) {
                                      return entry.title;
                                    }), Curry._2(Relude_List.find, (function (entry) {
                                          return entry.timestamp < timestamp;
                                        }), Relude_List.sortBy((function (a, b) {
                                              return Curry._2(Relude_Int.compare, b.timestamp, a.timestamp);
                                            }), entries))),
                              /* next */Relude_Option.map((function (entry) {
                                      return entry.title;
                                    }), Curry._2(Relude_List.find, (function (entry) {
                                          return entry.timestamp > timestamp;
                                        }), Relude_List.sortBy((function (a, b) {
                                              return Curry._2(Relude_Int.compare, a.timestamp, b.timestamp);
                                            }), entries)))
                            ]),
                          /* status */200
                        ]);
              }), Relude_IO.fromOption((function (prim) {
                    
                  }), Curry._2(Relude_List.find, (function (entry) {
                        if (entry.timestamp === timestamp) {
                          return Curry._1(Utils.slug(undefined), entry.title) === slug;
                        } else {
                          return false;
                        }
                      }), entries)));
}

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

function makeResponse(entries, page) {
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
        return "" + (String(pageData[/* title */0]) + (" | " + (String(siteName) + "")));
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAtcmVib290Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NMSS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXguYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhcnNlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JpbmRpbmdzL0FyZ1BhcnNlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9FbW90aW9uLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9IVFRQLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9QYWNrYWdlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9BYm91dENvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0VudHJ5Q29udHJvbGxlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Ob3RGb3VuZENvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL1N0YXRpY0NvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL1RhZ1NlYXJjaENvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1BhZ2VfX0NvbXBvbmVudC5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUGFnZV9fUmVuZGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9TdHlsZS5icy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXJncGFyc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1jc3MtZW1vdGlvbi9zcmMvQ3NzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfb3B0aW9uLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2pzX2RpY3QuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1vdGlvbi1zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya2Rvd24tbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1JlYWREaXIuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1JlYWRGaWxlLmJzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0FycmF5LmJzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsdWRlL3NyYy9SZWx1ZGVfRmxvYXQuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9SZXN1bHQuYnMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzbHVnaWZ5LWJzL3NyYy9TbHVnaWZ5LmJzLmpzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHNYQUFzWCxzQkFBc0IsS0FBSyx1QkFBdUIsaUJBQWlCLDhCQUE4Qix3Q0FBd0Msc0VBQXNFLGNBQWMsS0FBSyxTQUFTLHFNQUFxTSxlQUFlLGdCQUFnQixnQkFBZ0IsY0FBYyxnQkFBZ0Isc0JBQXNCLDRDQUE0QyxvQkFBb0IsR0FBRyx1QkFBdUIsU0FBUyxpQkFBaUIsa0JBQWtCLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0NBQXNDLDBCQUEwQix5Q0FBeUMsaUNBQWlDLFlBQVksZ0JBQWdCLHNDQUFzQyw4QkFBOEIsUUFBUSxtQkFBbUIsa0JBQWtCLG9CQUFvQixTQUFTLGFBQWEsbUJBQW1CLHdCQUF3QixnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxvQkFBb0IsY0FBYyxXQUFXLGdCQUFnQixTQUFTLG1CQUFtQixNQUFNLGNBQWMsUUFBUSxrQkFBa0IsY0FBYyxjQUFjLHdCQUF3QixJQUFJLGNBQWMsSUFBSSxVQUFVLEVBQUUsY0FBYyxxQkFBcUIsNkJBQTZCLFFBQVEsY0FBYywwQkFBMEIsY0FBYyxjQUFjLHFCQUFxQixvQkFBb0IsY0FBYyxxQkFBcUIsa0JBQWtCLCtGQUErRixjQUFjLElBQUksYUFBYSxtQkFBbUIsY0FBYyw2QkFBNkIsT0FBTyxnQkFBZ0IsSUFBSSxzQkFBc0Isa0JBQWtCLElBQUksZ0JBQWdCLHNCQUFzQixNQUFNLHlCQUF5QixRQUFRLG1CQUFtQixzQkFBc0IsY0FBYyxnQkFBZ0Isb0JBQW9CLEdBQUcsbUJBQW1CLE1BQU0scUJBQXFCLG9CQUFvQixPQUFPLGdCQUFnQixhQUFhLG1CQUFtQiwwQ0FBMEMsc0NBQXNDLFNBQVMsb0JBQW9CLGtCQUFrQixvQkFBb0IsYUFBYSxpQkFBaUIsY0FBYyxvQkFBb0IsY0FBYyxlQUFlLE9BQU8saUJBQWlCLGdEQUFnRCwwQkFBMEIsNEdBQTRHLGVBQWUsd0hBQXdILFVBQVUsa0JBQWtCLHVDQUF1QyxzQkFBc0IsVUFBVSxTQUFTLGNBQWMsZ0JBQWdCLFNBQVMsWUFBWSxVQUFVLFNBQVMsU0FBUyxPQUFPLGNBQWMsV0FBVyxlQUFlLFVBQVUsb0JBQW9CLGlCQUFpQixvQkFBb0IsY0FBYyxtQkFBbUIsU0FBUyx3QkFBd0Isa0ZBQWtGLFlBQVksY0FBYyxvQkFBb0Isd0JBQXdCLHlDQUF5Qyx3QkFBd0IsNkJBQTZCLGFBQWEsMEJBQTBCLE9BQU8scUJBQXFCLFFBQVEsa0JBQWtCLGVBQWUsU0FBUyxhQUFhLFNBQVMsdUJBQXVCLHdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E5eEg7QUFDYTs7QUFFYixjQUFjLG1CQUFPLENBQUMsOERBQTBCO0FBQ2hELGVBQWUsbUJBQU8sQ0FBQyxnRUFBMkI7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNhOztBQUViLFVBQVUsbUJBQU8sQ0FBQyxvQ0FBYTtBQUMvQixZQUFZLG1CQUFPLENBQUMsd0NBQWU7QUFDbkMsYUFBYSxtQkFBTyxDQUFDLDBDQUFnQjtBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQyw4REFBNEI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsWUFBWSxtQkFBTyxDQUFDLGdFQUE2QjtBQUNqRCxZQUFZLG1CQUFPLENBQUMsZ0VBQTZCO0FBQ2pELGNBQWMsbUJBQU8sQ0FBQyxvRUFBK0I7QUFDckQsZ0JBQWdCLG1CQUFPLENBQUMsOERBQTRCO0FBQ3BELGlCQUFpQixtQkFBTyxDQUFDLGdFQUE2QjtBQUN0RCxrQkFBa0IsbUJBQU8sQ0FBQyw0RUFBbUM7QUFDN0Qsa0JBQWtCLG1CQUFPLENBQUMsa0VBQThCO0FBQ3hELG1CQUFtQixtQkFBTyxDQUFDLG9FQUErQjtBQUMxRCxtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBK0I7QUFDMUQsb0JBQW9CLG1CQUFPLENBQUMsc0VBQWdDO0FBQzVELG9CQUFvQixtQkFBTyxDQUFDLHNFQUFnQztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyxrRkFBc0M7QUFDcEUsdUJBQXVCLG1CQUFPLENBQUMsb0ZBQXVDO0FBQ3RFLHVCQUF1QixtQkFBTyxDQUFDLDRDQUFtQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBLDJCQUEyQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRTs7QUFFekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9ELDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pELDJDQUEyQztBQUMzQyw2QkFBNkI7QUFDN0IsZUFBZTtBQUNmO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNkJBQTZCO0FBQzdCLGVBQWU7QUFDZjtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2S0E7QUFDYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsZ0VBQTZCO0FBQ2pELFlBQVksbUJBQU8sQ0FBQyxnRUFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsZ0VBQTZCO0FBQ3RELG9CQUFvQixtQkFBTyxDQUFDLHNFQUFnQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsNkJBQTZCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFDYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsd0RBQXVCO0FBQzFDLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTtBQUN6QixhQUFhLG1CQUFPLENBQUMsMENBQWdCO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLDhEQUE0QjtBQUNwRCxrQkFBa0IsbUJBQU8sQ0FBQyw0RUFBbUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMsa0VBQTRCO0FBQ3ZELG9CQUFvQixtQkFBTyxDQUFDLHNFQUFnQztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyxvRkFBcUM7QUFDbkUsc0JBQXNCLG1CQUFPLENBQUMsb0ZBQXFDO0FBQ25FLHNCQUFzQixtQkFBTyxDQUFDLG9GQUFxQztBQUNuRSx1QkFBdUIsbUJBQU8sQ0FBQyxzRkFBc0M7QUFDckUseUJBQXlCLG1CQUFPLENBQUMsMEZBQXdDO0FBQ3pFLDBCQUEwQixtQkFBTyxDQUFDLDRGQUF5Qzs7QUFFM0U7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkMsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsZ0VBQTZCO0FBQ2pELGNBQWMsbUJBQU8sQ0FBQyxrRUFBOEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsMEJBQVU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixjQUFjLG1CQUFPLENBQUMsd0JBQVM7QUFDL0IsV0FBVyxtQkFBTyxDQUFDLG9DQUFlOztBQUVsQyxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ2E7O0FBRWIsbUJBQW1CLG1CQUFPLENBQUMsb0VBQStCOztBQUUxRCxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ2E7O0FBRWIsa0JBQWtCLG1CQUFPLENBQUMsMENBQW9COztBQUU5Qzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFDYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsZ0VBQTZCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGdFQUE2QjtBQUNqRCxZQUFZLG1CQUFPLENBQUMsZ0VBQTZCO0FBQ2pELFlBQVksbUJBQU8sQ0FBQyx5Q0FBZ0I7QUFDcEMsZ0JBQWdCLG1CQUFPLENBQUMsOERBQTRCO0FBQ3BELGlCQUFpQixtQkFBTyxDQUFDLGdFQUE2QjtBQUN0RCxrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBOEI7QUFDeEQsb0JBQW9CLG1CQUFPLENBQUMsc0VBQWdDOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsZ0VBQTZCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGdFQUE2Qjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGdFQUE2Qjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxnRUFBNkI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7QUFDYTs7QUFFYixVQUFVLG1CQUFPLENBQUMsNERBQTJCO0FBQzdDLFlBQVksbUJBQU8sQ0FBQyxnRUFBNkI7QUFDakQsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLGNBQWMsbUJBQU8sQ0FBQywrREFBMkI7QUFDakQsNEJBQTRCLG1CQUFPLENBQUMsK0dBQTZDOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLDhDQUFlO0FBQ25DLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixvQkFBb0IsbUJBQU8sQ0FBQyxzQ0FBZ0I7QUFDNUMsc0JBQXNCLG1CQUFPLENBQUMsa0VBQXlCO0FBQ3ZELGFBQWEsbUJBQU8sQ0FBQywwQ0FBa0I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ2E7O0FBRWIsVUFBVSxtQkFBTyxDQUFDLDREQUEyQjtBQUM3QyxZQUFZLG1CQUFPLENBQUMsZ0VBQTZCOztBQUVqRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFGQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0luZGV4LmJzLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIVxcbiAqIEJvb3RzdHJhcCBSZWJvb3QgdjQuNS4wIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxcbiAqIENvcHlyaWdodCAyMDExLTIwMjAgVGhlIEJvb3RzdHJhcCBBdXRob3JzXFxuICogQ29weXJpZ2h0IDIwMTEtMjAyMCBUd2l0dGVyLCBJbmMuXFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcXG4gKiBGb3JrZWQgZnJvbSBOb3JtYWxpemUuY3NzLCBsaWNlbnNlZCBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcXG4gKi8qLDo6YWZ0ZXIsOjpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94fWh0bWx7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjE1Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH1hcnRpY2xlLGFzaWRlLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31ib2R5e21hcmdpbjowO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsQXJpYWwsXFxcIk5vdG8gU2Fuc1xcXCIsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjU7Y29sb3I6IzIxMjUyOTt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojZmZmfVt0YWJpbmRleD1cXFwiLTFcXFwiXTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpe291dGxpbmU6MCFpbXBvcnRhbnR9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfWgxLGgyLGgzLGg0LGg1LGg2e21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOi41cmVtfXB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MXJlbX1hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdLGFiYnJbdGl0bGVde3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7LXdlYmtpdC10ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDtjdXJzb3I6aGVscDtib3JkZXItYm90dG9tOjA7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6bm9uZTt0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6bm9uZX1hZGRyZXNze21hcmdpbi1ib3R0b206MXJlbTtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDppbmhlcml0fWRsLG9sLHVse21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjFyZW19b2wgb2wsb2wgdWwsdWwgb2wsdWwgdWx7bWFyZ2luLWJvdHRvbTowfWR0e2ZvbnQtd2VpZ2h0OjcwMH1kZHttYXJnaW4tYm90dG9tOi41cmVtO21hcmdpbi1sZWZ0OjB9YmxvY2txdW90ZXttYXJnaW46MCAwIDFyZW19YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1he2NvbG9yOiMwMDdiZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1hOmhvdmVye2NvbG9yOiMwMDU2YjM7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1hOm5vdChbaHJlZl0pe2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YTpub3QoW2hyZWZdKTpob3Zlcntjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5OlNGTW9uby1SZWd1bGFyLE1lbmxvLE1vbmFjbyxDb25zb2xhcyxcXFwiTGliZXJhdGlvbiBNb25vXFxcIixcXFwiQ291cmllciBOZXdcXFwiLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfXByZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxcmVtO292ZXJmbG93OmF1dG87LW1zLW92ZXJmbG93LXN0eWxlOnNjcm9sbGJhcn1maWd1cmV7bWFyZ2luOjAgMCAxcmVtfWltZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLXN0eWxlOm5vbmV9c3Zne292ZXJmbG93OmhpZGRlbjt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfWNhcHRpb257cGFkZGluZy10b3A6Ljc1cmVtO3BhZGRpbmctYm90dG9tOi43NXJlbTtjb2xvcjojNmM3NTdkO3RleHQtYWxpZ246bGVmdDtjYXB0aW9uLXNpZGU6Ym90dG9tfXRoe3RleHQtYWxpZ246aW5oZXJpdH1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOi41cmVtfWJ1dHRvbntib3JkZXItcmFkaXVzOjB9YnV0dG9uOmZvY3Vze291dGxpbmU6MXB4IGRvdHRlZDtvdXRsaW5lOjVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcn1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe21hcmdpbjowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3JvbGU9YnV0dG9uXXtjdXJzb3I6cG9pbnRlcn1zZWxlY3R7d29yZC13cmFwOm5vcm1hbH1bdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksW3R5cGU9cmVzZXRdOm5vdCg6ZGlzYWJsZWQpLFt0eXBlPXN1Ym1pdF06bm90KDpkaXNhYmxlZCksYnV0dG9uOm5vdCg6ZGlzYWJsZWQpe2N1cnNvcjpwb2ludGVyfVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXItc3R5bGU6bm9uZX1pbnB1dFt0eXBlPWNoZWNrYm94XSxpbnB1dFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfXRleHRhcmVhe292ZXJmbG93OmF1dG87cmVzaXplOnZlcnRpY2FsfWZpZWxkc2V0e21pbi13aWR0aDowO3BhZGRpbmc6MDttYXJnaW46MDtib3JkZXI6MH1sZWdlbmR7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDttYXJnaW4tYm90dG9tOi41cmVtO2ZvbnQtc2l6ZToxLjVyZW07bGluZS1oZWlnaHQ6aW5oZXJpdDtjb2xvcjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXtvdXRsaW5lLW9mZnNldDotMnB4Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lfVt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbntmb250OmluaGVyaXQ7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1vdXRwdXR7ZGlzcGxheTppbmxpbmUtYmxvY2t9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbTtjdXJzb3I6cG9pbnRlcn10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudH1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAtcmVib290Lm1pbi5jc3MubWFwICovXCI7IiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQYWNrYWdlID0gcmVxdWlyZShcIi4vYmluZGluZ3MvUGFja2FnZS5icy5qc1wiKTtcbnZhciBBcmdQYXJzZSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdzL0FyZ1BhcnNlLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJhbSkge1xuICB2YXIgcGFyc2VyID0gQXJnUGFyc2UubWFrZShQYWNrYWdlLmpzb24udmVyc2lvbiwgUGFja2FnZS5qc29uLm5hbWUpO1xuICBBcmdQYXJzZS5hZGRBcmd1bWVudChcIi1zXCIsIFwiLS1zaXRlLW5hbWVcIiwgXCJzaXRlTmFtZVwiLCB0cnVlLCBcIlNUUklOR1wiLCBwYXJzZXIpO1xuICBBcmdQYXJzZS5hZGRBcmd1bWVudChcIi1lXCIsIFwiLS1lbnRyaWVzLWRpcmVjdG9yeVwiLCBcImVudHJpZXNEaXJlY3RvcnlcIiwgdHJ1ZSwgXCJQQVRIXCIsIHBhcnNlcik7XG4gIEFyZ1BhcnNlLmFkZEFyZ3VtZW50KFwiLWFcIiwgXCItLWFib3V0LXBhdGhcIiwgXCJhYm91dFBhdGhcIiwgdHJ1ZSwgXCJQQVRIXCIsIHBhcnNlcik7XG4gIHJldHVybiBwYXJzZXIucGFyc2VBcmdzKCk7XG59XG5cbmV4cG9ydHMucGFyc2VBcmd1bWVudHMgPSBwYXJzZUFyZ3VtZW50cztcbi8qIFBhY2thZ2UgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ0xJID0gcmVxdWlyZShcIi4vQ0xJLmJzLmpzXCIpO1xudmFyIFBhcnNlID0gcmVxdWlyZShcIi4vUGFyc2UuYnMuanNcIik7XG52YXIgU2VydmVyID0gcmVxdWlyZShcIi4vU2VydmVyLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcblxuZnVuY3Rpb24gcHJpbnRFcnJvcihlcnJvcikge1xuICB2YXIgbWVzc2FnZTtcbiAgaWYgKGVycm9yLnRhZykge1xuICAgIHZhciBtYXRjaCA9IGVycm9yWzBdO1xuICAgIHN3aXRjaCAobWF0Y2gudGFnIHwgMCkge1xuICAgICAgY2FzZSAvKiBSZWFkRGlyZWN0b3J5RXJyb3IgKi8wIDpcbiAgICAgICAgICBzd2l0Y2ggKG1hdGNoWzBdLnRhZyB8IDApIHtcbiAgICAgICAgICAgIGNhc2UgLyogTm9TdWNoRmlsZU9yRGlyZWN0b3J5ICovNyA6XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRW50cmllcyBwYXRoIGRvZXMgbm90IGV4aXN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIC8qIE5vdEFEaXJlY3RvcnkgKi84IDpcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFbnRyaWVzIHBhdGggaXMgbm90IGEgZGlyZWN0b3J5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFcnJvciByZWFkaW5nIGVudHJpZXMgZGlyZWN0b3J5XCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBSZWFkRW50cnlFcnJvciAqLzEgOlxuICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIHJlYWRpbmcgZW50cnk6IFwiICsgbWF0Y2hbLyogbmFtZSAqLzBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBQYXJzZUVycm9yICovMiA6XG4gICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgcGFyc2luZyBlbnRyeTogXCIgKyBtYXRjaFsvKiBuYW1lICovMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChlcnJvclswXS50YWcgfCAwKSB7XG4gICAgICBjYXNlIC8qIElzQURpcmVjdG9yeSAqLzUgOlxuICAgICAgICAgIG1lc3NhZ2UgPSBcIkFib3V0IHBhdGggaXMgYSBkaXJlY3RvcnlcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogTm9TdWNoRmlsZU9yRGlyZWN0b3J5ICovNyA6XG4gICAgICAgICAgbWVzc2FnZSA9IFwiQWJvdXQgZmlsZSBkb2VzIG5vdCBleGlzdFwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgcmVhZGluZyBhYm91dCBmaWxlXCI7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIFxufVxuXG5mdW5jdGlvbiBtYWluKHBhcmFtKSB7XG4gIHZhciBtYXRjaCA9IENMSS5wYXJzZUFyZ3VtZW50cyh1bmRlZmluZWQpO1xuICB2YXIgc2l0ZU5hbWUgPSBtYXRjaC5zaXRlTmFtZTtcbiAgcmV0dXJuIFJlbHVkZV9JTy51bnNhZmVSdW5Bc3luYygoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy5iaXRhcChTZXJ2ZXIubGlzdGVuLCBwcmludEVycm9yLCBSZWx1ZGVfSU8ubWFwKChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNlcnZlci5tYWtlKHNpdGVOYW1lLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgUGFyc2UucmVhZEFuZFBhcnNlQWxsKG1hdGNoLmFib3V0UGF0aCwgbWF0Y2guZW50cmllc0RpcmVjdG9yeSkpKSk7XG59XG5cbm1haW4odW5kZWZpbmVkKTtcblxuZXhwb3J0cy5wcmludEVycm9yID0gcHJpbnRFcnJvcjtcbmV4cG9ydHMubWFpbiA9IG1haW47XG4vKiAgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgSnNfZGljdCA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvanNfZGljdC5qc1wiKTtcbnZhciBSZWx1ZGVfSU8gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSU8uYnMuanNcIik7XG52YXIgUmVsdWRlX0ludCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JbnQuYnMuanNcIik7XG52YXIgQ2FtbF9vcHRpb24gPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfb3B0aW9uLmpzXCIpO1xudmFyIFJlbHVkZV9MaXN0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIik7XG52YXIgUmVsdWRlX0FycmF5ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0FycmF5LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9GbG9hdCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9GbG9hdC5icy5qc1wiKTtcbnZhciBSZWx1ZGVfT3B0aW9uID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiKTtcbnZhciBSZWx1ZGVfUmVzdWx0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX1Jlc3VsdC5icy5qc1wiKTtcbnZhciBOb2RlRlNfX1JlYWREaXIgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRGlyLmJzLmpzXCIpO1xudmFyIE5vZGVGU19fUmVhZEZpbGUgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRmlsZS5icy5qc1wiKTtcbnZhciBNYXJrZG93bk1ldGFkYXRhID0gcmVxdWlyZShcIm1hcmtkb3duLW1ldGFkYXRhXCIpO1xuXG5mdW5jdGlvbiBwYXJzZVRpdGxlKG1ldGFkYXRhKSB7XG4gIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfT3B0aW9uLmZsYXRNYXAsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0FycmF5LmF0KDAsIHBhcmFtKTtcbiAgICAgICAgICAgICAgfSksIEpzX2RpY3QuZ2V0KG1ldGFkYXRhLCBcInRpdGxlXCIpKTtcbn1cblxudmFyIHBhcnRpYWxfYXJnID0gL14oWzAtOV17NH0pLShbMC05XXsyfSktKFswLTldezJ9KSAoWzAtOV17Mn0pOihbMC05XXsyfSkkLztcblxuZnVuY3Rpb24gbWF0Y2hEYXRlKHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsX3RvX29wdChwYXJ0aWFsX2FyZy5leGVjKHBhcmFtKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXN0YW1wKG1ldGFkYXRhKSB7XG4gIHJldHVybiBSZWx1ZGVfUmVzdWx0LmZsYXRNYXAoKGZ1bmN0aW9uIChtYXRjaF8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBtYXRjaF8uc2xpY2UoMSkubWFwKChmdW5jdGlvbiAoY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgUmVsdWRlX0Zsb2F0LmZyb21TdHJpbmcsIChjYXB0dXJlID09IG51bGwpID8gdW5kZWZpbmVkIDogQ2FtbF9vcHRpb24uc29tZShjYXB0dXJlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlcy5sZW5ndGggIT09IDUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gY2FwdHVyZXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKHllYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIE1hbGZvcm1lZCAqLzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gY2FwdHVyZXNbMV07XG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXkgPSBjYXB0dXJlc1syXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBob3VyID0gY2FwdHVyZXNbM107XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIE1hbGZvcm1lZCAqLzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1pbnV0ZSA9IGNhcHR1cmVzWzRdO1xuICAgICAgICAgICAgICAgIGlmIChtaW51dGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIE9rICovQmxvY2suX18oMCwgW1JlbHVkZV9JbnQuZnJvbUZsb2F0KG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSkuZ2V0VGltZSgpKV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogTWFsZm9ybWVkICovMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksIFJlbHVkZV9SZXN1bHQuZmxhdE1hcCgoZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9SZXN1bHQuZnJvbU9wdGlvbigvKiBNYWxmb3JtZWQgKi8xLCBtYXRjaERhdGUoZGF0ZSkpO1xuICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9SZXN1bHQuZnJvbU9wdGlvbigvKiBNaXNzaW5nICovMCwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9BcnJheS5hdCgwLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBKc19kaWN0LmdldChtZXRhZGF0YSwgXCJkYXRlXCIpKSkpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUYWdzKG1ldGFkYXRhKSB7XG4gIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcChSZWx1ZGVfTGlzdC5mcm9tQXJyYXksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSkpKEpzX2RpY3QuZ2V0KG1ldGFkYXRhLCBcInRhZ3NcIikpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFbnRyeShtYXJrZG93bikge1xuICB2YXIgbWF0Y2ggPSBNYXJrZG93bk1ldGFkYXRhLnBhcnNlTWV0YWRhdGEobWFya2Rvd24pO1xuICB2YXIgbWV0YWRhdGEgPSBtYXRjaFswXTtcbiAgdmFyIG1hdGNoJDEgPSBwYXJzZVRpdGxlKG1ldGFkYXRhKTtcbiAgdmFyIG1hdGNoJDIgPSBwYXJzZVRpbWVzdGFtcChtZXRhZGF0YSk7XG4gIHZhciBtYXRjaCQzID0gcGFyc2VUYWdzKG1ldGFkYXRhKTtcbiAgaWYgKG1hdGNoJDEgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChtYXRjaCQyLnRhZykge1xuICAgICAgaWYgKG1hdGNoJDMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogVGltZXN0YW1wRXJyb3IgKi9bbWF0Y2gkMlswXV1dKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBCYWRNZXRhZGF0YSAqLzJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1hdGNoJDMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIC8qIE9rICovQmxvY2suX18oMCwgW3tcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBtYXRjaCQxLFxuICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBtYXRjaCQyWzBdLFxuICAgICAgICAgICAgICAgICAgdGFnczogbWF0Y2gkMyxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IG1hdGNoWzFdXG4gICAgICAgICAgICAgICAgfV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogVGFnc01pc3NpbmcgKi8xXSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1hdGNoJDIudGFnIHx8IG1hdGNoJDMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBCYWRNZXRhZGF0YSAqLzJdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogVGl0bGVNaXNzaW5nICovMF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRBbmRQYXJzZUVudHJpZXNEaXJlY3RvcnkoZGlyZWN0b3J5KSB7XG4gIHJldHVybiBSZWx1ZGVfSU8uZmxhdE1hcCgoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cmllcy5maWx0ZXIoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoXCIubWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhZW50cnkuaXNEaXJlY3RvcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLm1hcCgoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gcGFyYW0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8uZnJvbVJlc3VsdChDdXJyeS5fMihSZWx1ZGVfUmVzdWx0Lm1hcEVycm9yLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIFBhcnNlRXJyb3IgKi9CbG9jay5fXygyLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG5hbWUgKi9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlcnJvciAqL2Vycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIHBhcnNlRW50cnkodGV4dCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9JTy5tYXBFcnJvciwgKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogUmVhZEVudHJ5RXJyb3IgKi9CbG9jay5fXygxLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBuYW1lICovbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVycm9yICovZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBOb2RlRlNfX1JlYWRGaWxlLnJlYWRGaWxlKHVuZGVmaW5lZCwgUGF0aC5qb2luKGRpcmVjdG9yeSwgbmFtZSkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkucmVkdWNlKChmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8uZmxhdE1hcCgoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9JTy5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBhY2N1bXVsYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8qIFB1cmUgKi9CbG9jay5fXygwLCBbLyogW10gKi8wXSkpO1xuICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0lPLm1hcEVycm9yLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBSZWFkRGlyZWN0b3J5RXJyb3IgKi9CbG9jay5fXygwLCBbZXJyb3JdKTtcbiAgICAgICAgICAgICAgICAgIH0pLCBOb2RlRlNfX1JlYWREaXIucmVhZERpcih1bmRlZmluZWQsIGRpcmVjdG9yeSkpKTtcbn1cblxuZnVuY3Rpb24gcmVhZEFuZFBhcnNlQWxsKGFib3V0UGF0aCwgZW50cmllc0RpcmVjdG9yeSkge1xuICByZXR1cm4gUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9JTy5iaW1hcCgoZnVuY3Rpb24gKGFib3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dDogYWJvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXM6IGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBBYm91dEZpbGVFcnJvciAqL0Jsb2NrLl9fKDAsIFtlcnJvcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBOb2RlRlNfX1JlYWRGaWxlLnJlYWRGaWxlKHVuZGVmaW5lZCwgYWJvdXRQYXRoKSk7XG4gICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfSU8ubWFwRXJyb3IsIChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVudHJpZXNEaXJlY3RvcnlFcnJvciAqL0Jsb2NrLl9fKDEsIFtlcnJvcl0pO1xuICAgICAgICAgICAgICAgICAgfSksIHJlYWRBbmRQYXJzZUVudHJpZXNEaXJlY3RvcnkoZW50cmllc0RpcmVjdG9yeSkpKTtcbn1cblxudmFyIHJlYWRBbmRQYXJzZUFib3V0UGF0aCA9IE5vZGVGU19fUmVhZEZpbGUucmVhZEZpbGU7XG5cbmV4cG9ydHMucGFyc2VUaXRsZSA9IHBhcnNlVGl0bGU7XG5leHBvcnRzLm1hdGNoRGF0ZSA9IG1hdGNoRGF0ZTtcbmV4cG9ydHMucGFyc2VUaW1lc3RhbXAgPSBwYXJzZVRpbWVzdGFtcDtcbmV4cG9ydHMucGFyc2VUYWdzID0gcGFyc2VUYWdzO1xuZXhwb3J0cy5wYXJzZUVudHJ5ID0gcGFyc2VFbnRyeTtcbmV4cG9ydHMucmVhZEFuZFBhcnNlRW50cmllc0RpcmVjdG9yeSA9IHJlYWRBbmRQYXJzZUVudHJpZXNEaXJlY3Rvcnk7XG5leHBvcnRzLnJlYWRBbmRQYXJzZUFib3V0UGF0aCA9IHJlYWRBbmRQYXJzZUFib3V0UGF0aDtcbmV4cG9ydHMucmVhZEFuZFBhcnNlQWxsID0gcmVhZEFuZFBhcnNlQWxsO1xuLyogcGF0aCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIFJlbHVkZV9JbnQgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9PcHRpb24gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiByb3V0ZShzZWdtZW50cykge1xuICB2YXIgbGVuID0gc2VnbWVudHMubGVuZ3RoO1xuICBpZiAobGVuID49IDUpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAwIDpcbiAgICAgICAgcmV0dXJuIC8qIEluZGV4ICovQmxvY2suX18oMCwgWy8qIHBhZ2UgKi8xXSk7XG4gICAgY2FzZSAxIDpcbiAgICAgICAgdmFyIHBhZ2UgPSBzZWdtZW50c1swXTtcbiAgICAgICAgaWYgKHBhZ2UgPT09IFwiYWJvdXRcIikge1xuICAgICAgICAgIHJldHVybiAvKiBBYm91dCAqLzA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEluZGV4ICovQmxvY2suX18oMCwgWy8qIHBhZ2UgKi9wYWdlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UgPj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkoUmVsdWRlX0ludC5mcm9tU3RyaW5nKHBhZ2UpKSk7XG4gICAgICAgIH1cbiAgICBjYXNlIDIgOlxuICAgICAgICB2YXIgZGlyZWN0b3J5ID0gc2VnbWVudHNbMF07XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0b3J5KSB7XG4gICAgICAgICAgY2FzZSBcInRhZ1wiIDpcbiAgICAgICAgICAgICAgdmFyIHNsdWcgPSBzZWdtZW50c1sxXTtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIFRhZ1NlYXJjaCAqL0Jsb2NrLl9fKDEsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIHNsdWcgKi9zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogcGFnZSAqLzFcbiAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICBjYXNlIFwic3RhdGljXCIgOlxuICAgICAgICAgIGNhc2UgXCJ1cGxvYWRzXCIgOlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsZW5hbWUgPSBzZWdtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIC8qIFN0YXRpYyAqL0Jsb2NrLl9fKDMsIFtcbiAgICAgICAgICAgICAgICAgIC8qIGRpcmVjdG9yeSAqL2RpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgIC8qIGZpbGVuYW1lICovZmlsZW5hbWVcbiAgICAgICAgICAgICAgICBdKTtcbiAgICBjYXNlIDMgOlxuICAgICAgICB2YXIgbWF0Y2ggPSBzZWdtZW50c1swXTtcbiAgICAgICAgaWYgKG1hdGNoICE9PSBcInRhZ1wiKSB7XG4gICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2x1ZyQxID0gc2VnbWVudHNbMV07XG4gICAgICAgIHZhciBwYWdlJDEgPSBzZWdtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBUYWdTZWFyY2ggKi9CbG9jay5fXygxLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHNsdWcgKi9zbHVnJDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHBhZ2UgKi9wYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWdlID49IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfSW50LmZyb21TdHJpbmcocGFnZSQxKSkpO1xuICAgIGNhc2UgNCA6XG4gICAgICAgIHZhciB5ZWFyID0gc2VnbWVudHNbMF07XG4gICAgICAgIHZhciBtb250aCA9IHNlZ21lbnRzWzFdO1xuICAgICAgICB2YXIgZGF5ID0gc2VnbWVudHNbMl07XG4gICAgICAgIHZhciBzbHVnJDIgPSBzZWdtZW50c1szXTtcbiAgICAgICAgcmV0dXJuIFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogRW50cnkgKi9CbG9jay5fXygyLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHllYXIgKi9wYXJhbVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbW9udGggKi9wYXJhbVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZGF5ICovcGFyYW1bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHNsdWcgKi9zbHVnJDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb250aCA9IHBhcmFtWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeWVhciA9IHBhcmFtWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5ID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXkgPD0gMzE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfSW50LmZyb21TdHJpbmcoZGF5KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgKGZ1bmN0aW9uICh5ZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChtb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAobW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRoID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udGggPD0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkoUmVsdWRlX0ludC5mcm9tU3RyaW5nKG1vbnRoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfSW50LmZyb21TdHJpbmcoeWVhcikpKSk7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGQocm91dGUpIHtcbiAgaWYgKHR5cGVvZiByb3V0ZSA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBcIi9hYm91dFwiO1xuICB9XG4gIHN3aXRjaCAocm91dGUudGFnIHwgMCkge1xuICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgdmFyIHBhZ2UgPSByb3V0ZVsvKiBwYWdlICovMF07XG4gICAgICAgIGlmIChwYWdlICE9PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIFwiL1wiICsgKFN0cmluZyhwYWdlKSArIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIi9cIjtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogVGFnU2VhcmNoICovMSA6XG4gICAgICAgIHZhciBwYWdlJDEgPSByb3V0ZVsvKiBwYWdlICovMV07XG4gICAgICAgIHZhciBzbHVnID0gcm91dGVbLyogc2x1ZyAqLzBdO1xuICAgICAgICBpZiAocGFnZSQxICE9PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIFwiL3RhZy9cIiArIChTdHJpbmcoc2x1ZykgKyAoXCIvXCIgKyAoU3RyaW5nKHBhZ2UkMSkgKyBcIlwiKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIi90YWcvXCIgKyAoU3RyaW5nKHNsdWcpICsgXCJcIik7XG4gICAgICAgIH1cbiAgICBjYXNlIC8qIEVudHJ5ICovMiA6XG4gICAgICAgIHJldHVybiBcIi9cIiArIChTdHJpbmcocm91dGVbLyogeWVhciAqLzBdKSArIChcIi9cIiArIChTdHJpbmcocm91dGVbLyogbW9udGggKi8xXSkgKyAoXCIvXCIgKyAoU3RyaW5nKHJvdXRlWy8qIGRheSAqLzJdKSArIChcIi9cIiArIChTdHJpbmcocm91dGVbLyogc2x1ZyAqLzNdKSArIFwiXCIpKSkpKSkpO1xuICAgIGNhc2UgLyogU3RhdGljICovMyA6XG4gICAgICAgIHJldHVybiBcIi9cIiArIChTdHJpbmcocm91dGVbLyogZGlyZWN0b3J5ICovMF0pICsgKFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBmaWxlbmFtZSAqLzFdKSArIFwiXCIpKSk7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0cy5yb3V0ZSA9IHJvdXRlO1xuZXhwb3J0cy5idWlsZCA9IGJ1aWxkO1xuLyogUmVsdWRlX0ludCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBIVFRQID0gcmVxdWlyZShcIi4vYmluZGluZ3MvSFRUUC5icy5qc1wiKTtcbnZhciBIdHRwID0gcmVxdWlyZShcImh0dHBcIik7XG52YXIgUm91dGVyID0gcmVxdWlyZShcIi4vUm91dGVyLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBDYW1sX29wdGlvbiA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9vcHRpb24uanNcIik7XG52YXIgUGFnZV9fUmVuZGVyID0gcmVxdWlyZShcIi4vdmlld3MvUGFnZV9fUmVuZGVyLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9PcHRpb24gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpO1xudmFyIEFib3V0Q29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL0Fib3V0Q29udHJvbGxlci5icy5qc1wiKTtcbnZhciBFbnRyeUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9FbnRyeUNvbnRyb2xsZXIuYnMuanNcIik7XG52YXIgSW5kZXhDb250cm9sbGVyID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIFN0YXRpY0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9TdGF0aWNDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIE5vdEZvdW5kQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL05vdEZvdW5kQ29udHJvbGxlci5icy5qc1wiKTtcbnZhciBUYWdTZWFyY2hDb250cm9sbGVyID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvVGFnU2VhcmNoQ29udHJvbGxlci5icy5qc1wiKTtcblxuZnVuY3Rpb24gc3BsaXRVUkxTZWdtZW50cyh1cmwpIHtcbiAgcmV0dXJuIHVybC5zbGljZSgxKS5zcGxpdChcIi9cIikubWFwKChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzZWdtZW50KS50cmltKCk7XG4gICAgICAgICAgICAgICAgfSkpLmZpbHRlcigoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VnbWVudC5sZW5ndGggPj0gMTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UocGFyYW0sIHJvdXRlKSB7XG4gIGlmIChyb3V0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIE5vdEZvdW5kQ29udHJvbGxlci5yZXNwb25zZTtcbiAgfVxuICB2YXIgZW50cmllcyA9IHBhcmFtLmVudHJpZXM7XG4gIGlmICh0eXBlb2Ygcm91dGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gQWJvdXRDb250cm9sbGVyLm1ha2VSZXNwb25zZShwYXJhbS5hYm91dCk7XG4gIH1cbiAgc3dpdGNoIChyb3V0ZS50YWcgfCAwKSB7XG4gICAgY2FzZSAvKiBJbmRleCAqLzAgOlxuICAgICAgICByZXR1cm4gSW5kZXhDb250cm9sbGVyLm1ha2VSZXNwb25zZShlbnRyaWVzLCByb3V0ZVsvKiBwYWdlICovMF0pO1xuICAgIGNhc2UgLyogVGFnU2VhcmNoICovMSA6XG4gICAgICAgIHJldHVybiBUYWdTZWFyY2hDb250cm9sbGVyLm1ha2VSZXNwb25zZShlbnRyaWVzLCByb3V0ZVsvKiBzbHVnICovMF0sIHJvdXRlWy8qIHBhZ2UgKi8xXSk7XG4gICAgY2FzZSAvKiBFbnRyeSAqLzIgOlxuICAgICAgICByZXR1cm4gRW50cnlDb250cm9sbGVyLm1ha2VSZXNwb25zZShlbnRyaWVzLCByb3V0ZVsvKiB5ZWFyICovMF0sIHJvdXRlWy8qIG1vbnRoICovMV0sIHJvdXRlWy8qIGRheSAqLzJdLCByb3V0ZVsvKiBzbHVnICovM10pO1xuICAgIGNhc2UgLyogU3RhdGljICovMyA6XG4gICAgICAgIHJldHVybiBTdGF0aWNDb250cm9sbGVyLm1ha2VSZXNwb25zZShyb3V0ZVsvKiBkaXJlY3RvcnkgKi8wXSwgcm91dGVbLyogZmlsZW5hbWUgKi8xXSk7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZShzaXRlTmFtZSwgZGF0YSkge1xuICByZXR1cm4gSHR0cC5jcmVhdGVTZXJ2ZXIoKGZ1bmN0aW9uIChyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8udW5zYWZlUnVuQXN5bmMoKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLnRhcCgoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy50YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFRUUC4kJFJlc3BvbnNlLnNldFN0YXR1c0NvZGUoMjAwLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50VHlwZShSZWx1ZGVfT3B0aW9uLmdldE9yRWxzZShcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLCByZXNbLyogdHlwZV8gKi8xXSkpKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFRUUC4kJFJlc3BvbnNlLnNldENvbnRlbnRMZW5ndGgocmVzWy8qIGxlbmd0aCAqLzJdKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRMYXN0TW9kaWZpZWQocmVzWy8qIG1vZGlmaWVkICovM10pKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzWy8qIHN0cmVhbSAqLzBdLnBpcGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBQYWdlX19SZW5kZXIucmVuZGVyKHNpdGVOYW1lLCByZXNbLyogZGF0YSAqLzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRTdGF0dXNDb2RlKHJlc1svKiBzdGF0dXMgKi8xXSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFRUUC4kJFJlc3BvbnNlLnNldENvbnRlbnRUeXBlKFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIpKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50TGVuZ3RoKGxlbmd0aCkocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZW5kKGJvZHksIFwidXRmLThcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkobWFrZVJlc3BvbnNlKGRhdGEsIFJvdXRlci5yb3V0ZShzcGxpdFVSTFNlZ21lbnRzKFJlbHVkZV9PcHRpb24uZ2V0T3JFbHNlKFwiL1wiLCBDYW1sX29wdGlvbi51bmRlZmluZWRfdG9fb3B0KHJlcXVlc3QudXJsKSkpKSkpKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW4ocGFyYW0pIHtcbiAgcGFyYW0ubGlzdGVuKDUwMDAsIFwiMTI3LjAuMC4xXCIsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3RlbmluZ1wiKTtcbiAgICAgICAgICBcbiAgICAgICAgfSkpO1xuICBcbn1cblxuZXhwb3J0cy5zcGxpdFVSTFNlZ21lbnRzID0gc3BsaXRVUkxTZWdtZW50cztcbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuZXhwb3J0cy5tYWtlID0gbWFrZTtcbmV4cG9ydHMubGlzdGVuID0gbGlzdGVuO1xuLyogSFRUUCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgU2x1Z2lmeSA9IHJlcXVpcmUoXCJzbHVnaWZ5LWJzL3NyYy9TbHVnaWZ5LmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBzbHVnKHBhcmFtKSB7XG4gIHJldHVybiBDdXJyeS5fMyhTbHVnaWZ5LnNsdWdpZnksIFwiLVwiLCBwYXJhbSwgdHJ1ZSk7XG59XG5cbmV4cG9ydHMuc2x1ZyA9IHNsdWc7XG4vKiBTbHVnaWZ5IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEFyZ3BhcnNlID0gcmVxdWlyZShcImFyZ3BhcnNlXCIpO1xuXG5mdW5jdGlvbiBtYWtlKHZlcnNpb24sIHByb2cpIHtcbiAgcmV0dXJuIG5ldyBBcmdwYXJzZS5Bcmd1bWVudFBhcnNlcih7XG4gICAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICAgIHByb2c6IHByb2dcbiAgICAgICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRBcmd1bWVudChzaG9ydE5hbWUsIGxvbmdOYW1lLCBkZXN0LCByZXF1aXJlZCwgbWV0YXZhciwgcGFyc2VyKSB7XG4gIHBhcnNlci5hZGRBcmd1bWVudChbXG4gICAgICAgIHNob3J0TmFtZSxcbiAgICAgICAgbG9uZ05hbWVcbiAgICAgIF0sIHtcbiAgICAgICAgZGVzdDogZGVzdCxcbiAgICAgICAgbWV0YXZhcjogbWV0YXZhcixcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkXG4gICAgICB9KTtcbiAgXG59XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG5leHBvcnRzLmFkZEFyZ3VtZW50ID0gYWRkQXJndW1lbnQ7XG4vKiBhcmdwYXJzZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBFbW90aW9uID0gcmVxdWlyZShcImVtb3Rpb25cIik7XG52YXIgQ29yZSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpO1xuXG52YXIgUHJvdmlkZXIgPSB7IH07XG5cbnZhciBDYWNoZSA9IHtcbiAgUHJvdmlkZXI6IFByb3ZpZGVyXG59O1xuXG52YXIgU2VydmVyID0geyB9O1xuXG5mdW5jdGlvbiBFbW90aW9uJFByb3ZpZGVyKFByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IFByb3BzLmNoaWxkcmVuO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb3JlLkNhY2hlUHJvdmlkZXIsIHtcbiAgICAgICAgICAgICAgdmFsdWU6IEVtb3Rpb24uY2FjaGUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgICAgfSk7XG59XG5cbnZhciBQcm92aWRlciQxID0ge1xuICBtYWtlOiBFbW90aW9uJFByb3ZpZGVyXG59O1xuXG5leHBvcnRzLkNhY2hlID0gQ2FjaGU7XG5leHBvcnRzLlNlcnZlciA9IFNlcnZlcjtcbmV4cG9ydHMuUHJvdmlkZXIgPSBQcm92aWRlciQxO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVsdWRlX0Zsb2F0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0Zsb2F0LmJzLmpzXCIpO1xuXG52YXIgJCRSZXF1ZXN0ID0geyB9O1xuXG5mdW5jdGlvbiBzZXRTdGF0dXNDb2RlKHN0YXR1cywgcmVzcG9uc2UpIHtcbiAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgXG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlKHZhbHVlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBwYXJhbS5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgdmFsdWUpO1xuICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRMZW5ndGgobGVuZ3RoKSB7XG4gIHZhciBwYXJ0aWFsX2FyZyA9IFN0cmluZyhsZW5ndGgpO1xuICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcGFyYW0uc2V0SGVhZGVyKFwiQ29udGVudC1MZW5ndGhcIiwgcGFydGlhbF9hcmcpO1xuICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldExhc3RNb2RpZmllZCh0aW1lc3RhbXApIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZShSZWx1ZGVfRmxvYXQuZnJvbUludCh0aW1lc3RhbXApKS50b1VUQ1N0cmluZygpO1xuICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcGFyYW0uc2V0SGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiLCBkYXRlKTtcbiAgICAgIFxuICAgIH0pO1xufVxuXG52YXIgJCRSZXNwb25zZSA9IHtcbiAgc2V0U3RhdHVzQ29kZTogc2V0U3RhdHVzQ29kZSxcbiAgc2V0Q29udGVudFR5cGU6IHNldENvbnRlbnRUeXBlLFxuICBzZXRDb250ZW50TGVuZ3RoOiBzZXRDb250ZW50TGVuZ3RoLFxuICBzZXRMYXN0TW9kaWZpZWQ6IHNldExhc3RNb2RpZmllZFxufTtcblxudmFyIFNlcnZlciA9IHsgfTtcblxuZXhwb3J0cy4kJFJlcXVlc3QgPSAkJFJlcXVlc3Q7XG5leHBvcnRzLiQkUmVzcG9uc2UgPSAkJFJlc3BvbnNlO1xuZXhwb3J0cy5TZXJ2ZXIgPSBTZXJ2ZXI7XG4vKiBSZWx1ZGVfRmxvYXQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFja2FnZUpzb24gPSByZXF1aXJlKFwiLi4vLi4vcGFja2FnZS5qc29uXCIpO1xuXG52YXIganNvbiA9IFBhY2thZ2VKc29uO1xuXG5leHBvcnRzLmpzb24gPSBqc29uO1xuLyoganNvbiBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShhYm91dCkge1xuICByZXR1cm4gLyogUHVyZSAqL0Jsb2NrLl9fKDAsIFsvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgIC8qIGRhdGEgKi8vKiBBYm91dCAqL0Jsb2NrLl9fKDIsIFsvKiB0ZXh0ICovYWJvdXRdKSxcbiAgICAgICAgICAgICAgICAvKiBzdGF0dXMgKi8yMDBcbiAgICAgICAgICAgICAgXSldKTtcbn1cblxuZXhwb3J0cy5tYWtlUmVzcG9uc2UgPSBtYWtlUmVzcG9uc2U7XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIFV0aWxzID0gcmVxdWlyZShcIi4uL1V0aWxzLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBSZWx1ZGVfSW50ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiKTtcbnZhciBSZWx1ZGVfTGlzdCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9PcHRpb24gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoZW50cmllcywgeWVhciwgbW9udGgsIGRheSwgc2x1Zykge1xuICB2YXIgdGltZXN0YW1wID0gUmVsdWRlX0ludC5mcm9tRmxvYXQobmV3IERhdGUoUmVsdWRlX0ludC50b0Zsb2F0KHllYXIpLCBSZWx1ZGVfSW50LnRvRmxvYXQobW9udGgpLCBSZWx1ZGVfSW50LnRvRmxvYXQoZGF5KSkuZ2V0VGltZSgpKTtcbiAgcmV0dXJuIFJlbHVkZV9JTy5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBkYXRhICovLyogRW50cnkgKi9CbG9jay5fXygzLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiB0aXRsZSAqL2VudHJ5LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdGltZXN0YW1wICovdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdGV4dCAqL2VudHJ5LnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiB0YWdzICovZW50cnkudGFncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHByZXZpb3VzICovUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkudGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0xpc3QuZmluZCwgKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnRpbWVzdGFtcCA8IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0xpc3Quc29ydEJ5KChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfSW50LmNvbXBhcmUsIGIudGltZXN0YW1wLCBhLnRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBlbnRyaWVzKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbmV4dCAqL1JlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9MaXN0LmZpbmQsIChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeS50aW1lc3RhbXAgPiB0aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9MaXN0LnNvcnRCeSgoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoUmVsdWRlX0ludC5jb21wYXJlLCBhLnRpbWVzdGFtcCwgYi50aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZW50cmllcykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBzdGF0dXMgKi8yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmZyb21PcHRpb24oKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9MaXN0LmZpbmQsIChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoVXRpbHMuc2x1Zyh1bmRlZmluZWQpLCBlbnRyeS50aXRsZSkgPT09IHNsdWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksIGVudHJpZXMpKSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogVXRpbHMgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoZW50cmllcywgcGFnZSkge1xuICByZXR1cm4gLyogUHVyZSAqL0Jsb2NrLl9fKDAsIFsvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgIC8qIGRhdGEgKi91bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgIF0pXSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xuXG52YXIgcmVzcG9uc2UgPSAvKiBQdXJlICovQmxvY2suX18oMCwgWy8qIFBhZ2UgKi9CbG9jay5fXygwLCBbXG4gICAgICAgIC8qIGRhdGEgKi91bmRlZmluZWQsXG4gICAgICAgIC8qIHN0YXR1cyAqLzQwNFxuICAgICAgXSldKTtcblxuZXhwb3J0cy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoZGlyZWN0b3J5LCBmaWxlbmFtZSkge1xuICByZXR1cm4gLyogUHVyZSAqL0Jsb2NrLl9fKDAsIFsvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgIC8qIGRhdGEgKi91bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgIF0pXSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoZW50cmllcywgc2x1ZywgcGFnZSkge1xuICByZXR1cm4gLyogUHVyZSAqL0Jsb2NrLl9fKDAsIFsvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgIC8qIGRhdGEgKi91bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgIF0pXSk7XG59XG5cbmV4cG9ydHMubWFrZVJlc3BvbnNlID0gbWFrZVJlc3BvbnNlO1xuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3NzID0gcmVxdWlyZShcImJzLWNzcy1lbW90aW9uL3NyYy9Dc3MuanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEVtb3Rpb24gPSByZXF1aXJlKFwiLi4vYmluZGluZ3MvRW1vdGlvbi5icy5qc1wiKTtcbnZhciBCb290c3RyYXBSZWJvb3RNaW5Dc3MgPSByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzc1wiKTtcblxuZnVuY3Rpb24gZm9ybWF0VGl0bGUoc2l0ZU5hbWUsIHBhZ2VEYXRhKSB7XG4gIGlmIChwYWdlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFwiTm90IGZvdW5kIHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpO1xuICB9XG4gIHN3aXRjaCAocGFnZURhdGEudGFnIHwgMCkge1xuICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgcmV0dXJuIHNpdGVOYW1lO1xuICAgIGNhc2UgLyogVGFnU2VhcmNoICovMSA6XG4gICAgICAgIHJldHVybiBcIlwiICsgKFN0cmluZyhwYWdlRGF0YVsvKiB0YWcgKi8wXSkgKyAoXCIgfCBcIiArIChTdHJpbmcoc2l0ZU5hbWUpICsgXCJcIikpKTtcbiAgICBjYXNlIC8qIEFib3V0ICovMiA6XG4gICAgICAgIHJldHVybiBcIkFib3V0IHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpO1xuICAgIGNhc2UgLyogRW50cnkgKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiXCIgKyAoU3RyaW5nKHBhZ2VEYXRhWy8qIHRpdGxlICovMF0pICsgKFwiIHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpKSk7XG4gICAgXG4gIH1cbn1cblxudmFyIGNsYXNzTmFtZSA9IEN1cnJ5Ll8xKENzcy5zdHlsZSwgLyogOjogKi9bXG4gICAgICBDc3MuZGlzcGxheShDc3MuZmxleEJveCksXG4gICAgICAvKiA6OiAqL1tcbiAgICAgICAgQ3NzLmZsZXhEaXJlY3Rpb24oQ3NzLmNvbHVtbiksXG4gICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgIENzcy5taW5IZWlnaHQoQ3NzLnZoKDEwMC4wKSksXG4gICAgICAgICAgLyogW10gKi8wXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdKTtcblxuZnVuY3Rpb24gUGFnZV9fQ29tcG9uZW50JFJvb3QoUHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gUHJvcHMuY2hpbGRyZW47XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgICAgIH0sIGNoaWxkcmVuKTtcbn1cblxudmFyIFJvb3QgPSB7XG4gIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICBtYWtlOiBQYWdlX19Db21wb25lbnQkUm9vdFxufTtcblxuZnVuY3Rpb24gUGFnZV9fQ29tcG9uZW50KFByb3BzKSB7XG4gIHZhciBzaXRlTmFtZSA9IFByb3BzLnNpdGVOYW1lO1xuICB2YXIgcGFnZURhdGEgPSBQcm9wcy5wYWdlRGF0YTtcbiAgdmFyIHRpdGxlID0gZm9ybWF0VGl0bGUoc2l0ZU5hbWUsIHBhZ2VEYXRhKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1vdGlvbi5Qcm92aWRlci5tYWtlLCB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IFwiZW5cIlxuICAgICAgICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImhlYWRcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhclNldDogXCJ1dGYtOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIHVuZGVmaW5lZCwgdGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwgdW5kZWZpbmVkLCBCb290c3RyYXBSZWJvb3RNaW5Dc3MpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJvZHlcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VfX0NvbXBvbmVudCRSb290LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiaGVsbG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpXG4gICAgICAgICAgICB9KTtcbn1cblxudmFyIG1ha2UgPSBQYWdlX19Db21wb25lbnQ7XG5cbmV4cG9ydHMuZm9ybWF0VGl0bGUgPSBmb3JtYXRUaXRsZTtcbmV4cG9ydHMuUm9vdCA9IFJvb3Q7XG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogY2xhc3NOYW1lIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIFN0eWxlID0gcmVxdWlyZShcIi4vU3R5bGUuYnMuanNcIik7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgRW1vdGlvblNlcnZlciA9IHJlcXVpcmUoXCJlbW90aW9uLXNlcnZlclwiKTtcbnZhciBQYWdlX19Db21wb25lbnQgPSByZXF1aXJlKFwiLi9QYWdlX19Db21wb25lbnQuYnMuanNcIik7XG52YXIgU2VydmVyID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cbmZ1bmN0aW9uIHJlbmRlcihzaXRlTmFtZSwgcGFnZURhdGEpIHtcbiAgU3R5bGUucmVnaXN0ZXJHbG9iYWxTdHlsZXModW5kZWZpbmVkKTtcbiAgdmFyIHJlbmRlcmVkID0gRW1vdGlvblNlcnZlci5yZW5kZXJTdHlsZXNUb1N0cmluZyhTZXJ2ZXIucmVuZGVyVG9TdHJpbmcoUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlX19Db21wb25lbnQubWFrZSwge1xuICAgICAgICAgICAgICAgIHNpdGVOYW1lOiBzaXRlTmFtZSxcbiAgICAgICAgICAgICAgICBwYWdlRGF0YTogcGFnZURhdGFcbiAgICAgICAgICAgICAgfSkpKTtcbiAgcmV0dXJuIFwiPCFET0NUWVBFIGh0bWw+XCIgKyByZW5kZXJlZDtcbn1cblxuZXhwb3J0cy5yZW5kZXIgPSByZW5kZXI7XG4vKiBTdHlsZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDc3MgPSByZXF1aXJlKFwiYnMtY3NzLWVtb3Rpb24vc3JjL0Nzcy5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG5cbnZhciBibHVlID0gQ3NzLnJnYigyNSwgMTE2LCAxOTUpO1xuXG52YXIgZ3JleTEgPSBDc3MucmdiKDI0OSwgMjQ5LCAyNTApO1xuXG52YXIgZ3JleTIgPSBDc3MucmdiKDIzMywgMjM2LCAyMzkpO1xuXG52YXIgZ3JleTMgPSBDc3MucmdiKDIyMiwgMjI2LCAyMzApO1xuXG52YXIgZ3JleTQgPSBDc3MucmdiKDIwNiwgMjEyLCAyMTgpO1xuXG52YXIgZ3JleTUgPSBDc3MucmdiKDE3MywgMTgxLCAxODkpO1xuXG52YXIgZ3JleTYgPSBDc3MucmdiKDEwOCwgMTE3LCAxMjUpO1xuXG52YXIgZ3JleTcgPSBDc3MucmdiKDczLCA4MCwgODcpO1xuXG52YXIgZ3JleTggPSBDc3MucmdiKDUyLCA1OCwgNjQpO1xuXG52YXIgZ3JleTkgPSBDc3MucmdiKDMzLCAzNywgNDEpO1xuXG52YXIgZGVza3RvcENvbHVtbldpZHRoID0gQ3NzLndpZHRoKENzcy5yZW0oMzcuNSkpO1xuXG52YXIgcGFydGlhbF9hcmcgPSBcIihtaW4td2lkdGg6IFwiICsgKFN0cmluZygzNy41KSArIFwicmVtKVwiKTtcblxuZnVuY3Rpb24gZGVza3RvcE1lZGlhUXVlcnkocGFyYW0pIHtcbiAgcmV0dXJuIENzcy5tZWRpYShwYXJ0aWFsX2FyZywgcGFyYW0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlckdsb2JhbFN0eWxlcyhwYXJhbSkge1xuICBDdXJyeS5fMihDc3MuJCRnbG9iYWwsIFwiYVwiLCAvKiA6OiAqL1tcbiAgICAgICAgQ3NzLnRleHREZWNvcmF0aW9uKENzcy5ub25lKSxcbiAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgQ3NzLmNvbG9yKGJsdWUpLFxuICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICBdXG4gICAgICBdKTtcbiAgdmFyIGNvZGVTdHlsZV8wMDAgPSBDc3MuZm9udFNpemUoQ3NzLnJlbSgwLjg3NSkpO1xuICB2YXIgY29kZVN0eWxlXzAwMSA9IC8qIDo6ICovW1xuICAgIENzcy5mb250RmFtaWx5KC8qIG1vbm9zcGFjZSAqLy01NTUzNjM5MDEpLFxuICAgIC8qIDo6ICovW1xuICAgICAgQ3NzLmJhY2tncm91bmRDb2xvcihncmV5MiksXG4gICAgICAvKiBbXSAqLzBcbiAgICBdXG4gIF07XG4gIHZhciBjb2RlU3R5bGUgPSAvKiA6OiAqL1tcbiAgICBjb2RlU3R5bGVfMDAwLFxuICAgIGNvZGVTdHlsZV8wMDFcbiAgXTtcbiAgQ3VycnkuXzIoQ3NzLiQkZ2xvYmFsLCBcImNvZGVcIiwgY29kZVN0eWxlKTtcbiAgQ3VycnkuXzIoQ3NzLiQkZ2xvYmFsLCBcInByZVwiLCAvKiA6OiAqL1tcbiAgICAgICAgQ3NzLnBhZGRpbmcoQ3NzLnJlbSgwLjYyNSkpLFxuICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICBDc3Mub3ZlcmZsb3coQ3NzLmF1dG8pLFxuICAgICAgICAgIGNvZGVTdHlsZVxuICAgICAgICBdXG4gICAgICBdKTtcbiAgcmV0dXJuIEN1cnJ5Ll8yKENzcy4kJGdsb2JhbCwgXCJoMSBjb2RlLCBoMiBjb2RlLCBoMyBjb2RlXCIsIC8qIDo6ICovW1xuICAgICAgICAgICAgICBDc3MuZm9udFNpemUoQ3NzLmluaGVyaXRfKSxcbiAgICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgICBdKTtcbn1cblxudmFyIGRhcmtCb3JkZXJDb2xvdXIgPSBncmV5MjtcblxudmFyIGxpZ2h0Qm9yZGVyQ29sb3VyID0gZ3JleTM7XG5cbnZhciBkZXNrdG9wQ29sdW1uUmVtID0gMzcuNTtcblxuZXhwb3J0cy5ibHVlID0gYmx1ZTtcbmV4cG9ydHMuZ3JleTEgPSBncmV5MTtcbmV4cG9ydHMuZ3JleTIgPSBncmV5MjtcbmV4cG9ydHMuZ3JleTMgPSBncmV5MztcbmV4cG9ydHMuZ3JleTQgPSBncmV5NDtcbmV4cG9ydHMuZ3JleTUgPSBncmV5NTtcbmV4cG9ydHMuZ3JleTYgPSBncmV5NjtcbmV4cG9ydHMuZ3JleTcgPSBncmV5NztcbmV4cG9ydHMuZ3JleTggPSBncmV5ODtcbmV4cG9ydHMuZ3JleTkgPSBncmV5OTtcbmV4cG9ydHMuZGFya0JvcmRlckNvbG91ciA9IGRhcmtCb3JkZXJDb2xvdXI7XG5leHBvcnRzLmxpZ2h0Qm9yZGVyQ29sb3VyID0gbGlnaHRCb3JkZXJDb2xvdXI7XG5leHBvcnRzLmRlc2t0b3BDb2x1bW5SZW0gPSBkZXNrdG9wQ29sdW1uUmVtO1xuZXhwb3J0cy5kZXNrdG9wQ29sdW1uV2lkdGggPSBkZXNrdG9wQ29sdW1uV2lkdGg7XG5leHBvcnRzLmRlc2t0b3BNZWRpYVF1ZXJ5ID0gZGVza3RvcE1lZGlhUXVlcnk7XG5leHBvcnRzLnJlZ2lzdGVyR2xvYmFsU3R5bGVzID0gcmVnaXN0ZXJHbG9iYWxTdHlsZXM7XG4vKiBibHVlIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFyZ3BhcnNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJzLWNzcy1lbW90aW9uL3NyYy9Dc3MuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX29wdGlvbi5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2pzX2RpY3QuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbW90aW9uLXNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtkb3duLW1ldGFkYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZERpci5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1JlYWRGaWxlLmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9BcnJheS5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9GbG9hdC5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JbnQuYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfTGlzdC5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfUmVzdWx0LmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNsdWdpZnktYnMvc3JjL1NsdWdpZnkuYnMuanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==