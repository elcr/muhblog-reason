// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Utils from "../Utils.bs.js";
import * as Squel from "squel";
import * as Constants from "../Constants.bs.js";
import * as Relude_IO from "relude/src/Relude_IO.bs.js";
import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";
import * as Relude_Option from "relude/src/Relude_Option.bs.js";
import * as Database__Connection from "./Database__Connection.bs.js";

function insertAboutPage(text, connection) {
  return Relude_IO.map((function (prim) {
                
              }), Database__Connection.executeInsert(Squel.insert().into("AboutPage").setFields({
                        text: text
                      }))(connection));
}

function insertEntries(entries, connection) {
  return Relude_IO.map((function (prim) {
                
              }), Database__Connection.executeInsert(Squel.insert().into("Entry").setFieldsRows(entries.map((function (param) {
                              var title = param.title;
                              return {
                                      json: JSON.stringify({
                                            slug: Curry._1(Utils.slug(undefined), title),
                                            title: title,
                                            timestamp: param.timestamp,
                                            tags: param.tags.map((function (tag) {
                                                    return {
                                                            name: tag,
                                                            slug: Curry._1(Utils.slug(undefined), tag)
                                                          };
                                                  })),
                                            text: param.text
                                          })
                                    };
                            }))))(connection));
}

function insertAll(aboutText, entries) {
  return (function (param) {
      return Database__Connection.transaction((function (connection) {
                    return Relude_IO.flatMap((function (param) {
                                  return Curry._2(Relude_IO.mapError, (function (error) {
                                                return /* InsertEntriesError */Block.__(1, [error]);
                                              }), insertEntries(entries, connection));
                                }), Curry._2(Relude_IO.mapError, (function (error) {
                                      return /* InsertAboutPageError */Block.__(0, [error]);
                                    }), insertAboutPage(aboutText, connection)));
                  }), param);
    });
}

function getAboutPageText(connection) {
  return Relude_IO.map((function (param) {
                return Relude_Option.map((function (row) {
                              return row.text;
                            }), param);
              }), Database__Connection.executeSelectOne(Squel.select().from("AboutPage", "a").field("a.text", "text").limit(1))(connection));
}

function getIndexPageEntries(page, connection) {
  return Relude_IO.flatMap((function (countRow) {
                if (countRow !== undefined) {
                  if (countRow !== 0) {
                    return Relude_IO.map((function (entries) {
                                  return /* tuple */[
                                          countRow,
                                          entries
                                        ];
                                }), Database__Connection.executeSelectAll(Squel.select().from("Entry", "e").field("json_extract(e.json, '$.slug')", "slug").field("json_extract(e.json, '$.slug')", "title").field("json_extract(e.json, '$.timestamp')", "timestamp").field("json_extract(e.json, '$.text')", "text").order("timestamp", false).limit(Constants.entriesPerPage).offset(Caml_int32.imul(page - 1 | 0, Constants.entriesPerPage)))(connection));
                  } else {
                    return /* Pure */Block.__(0, [/* tuple */[
                                0,
                                []
                              ]]);
                  }
                } else {
                  return /* Pure */Block.__(0, [/* tuple */[
                              0,
                              []
                            ]]);
                }
              }), Database__Connection.executeSelectOne(Squel.select().from("Entry", "e").field("COUNT(*)", "count"))(connection));
}

export {
  insertAboutPage ,
  insertEntries ,
  insertAll ,
  getAboutPageText ,
  getIndexPageEntries ,
  
}
/* Utils Not a pure module */
