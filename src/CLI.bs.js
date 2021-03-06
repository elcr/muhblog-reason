// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Package from "./bindings/Package.bs.js";
import * as ArgParse from "./bindings/ArgParse.bs.js";
import * as Relude_Int from "relude/src/Relude_Int.bs.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";

function parseArguments(param) {
  var parser = ArgParse.make(Package.json.version, Package.json.name);
  ArgParse.addRequiredArgument("-s", "--site-name", "siteName", "STRING", parser);
  ArgParse.addRequiredArgument("-e", "--entries-directory", "entriesDirectory", "PATH", parser);
  ArgParse.addRequiredArgument("-a", "--about-path", "aboutPath", "PATH", parser);
  ArgParse.addRequiredArgument("-f", "--favicon-path", "faviconPath", "PATH", parser);
  ArgParse.addRequiredArgument("-u", "--uploads-directory", "uploadsDirectory", "PATH", parser);
  ArgParse.addOptionalArgument("-H", "--host", "host", "ADDRESS", "127.0.0.1", parser);
  ArgParse.addOptionalArgument("-p", "--port", "port", "PORT", "5000", parser);
  var $$arguments = parser.parseArgs();
  return Relude_Option.getOrThrow(Relude_Option.tapNone((function (param) {
                    parser.exit(2, "Invalid port");
                    
                  }), Relude_Option.map((function (port) {
                        return {
                                siteName: $$arguments.siteName,
                                entriesDirectory: $$arguments.entriesDirectory,
                                aboutPath: $$arguments.aboutPath,
                                faviconPath: $$arguments.faviconPath,
                                uploadsDirectory: $$arguments.uploadsDirectory,
                                host: $$arguments.host,
                                port: port
                              };
                      }), Relude_Option.filter(function (port) {
                            if (port >= 0) {
                              return port <= 65535;
                            } else {
                              return false;
                            }
                          })(Relude_Int.fromString($$arguments.port)))));
}

export {
  parseArguments ,
  
}
/* Package Not a pure module */
