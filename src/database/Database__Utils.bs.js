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
                                }), Database__Connection.executeSelectAll(Squel.select().from("Entry", "e").field("json_extract(e.json, '$.slug')", "slug").field("json_extract(e.json, '$.title')", "title").field("json_extract(e.json, '$.timestamp')", "timestamp").field("json_extract(e.json, '$.text')", "text").order("(timestamp, title)", false).limit(Constants.entriesPerPage).offset(Caml_int32.imul(page - 1 | 0, Constants.entriesPerPage)))(connection));
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

function getEntry(slug, connection) {
  return Relude_IO.map((function (param) {
                return Relude_Option.map((function (row) {
                              var entry = JSON.parse(row.json);
                              return {
                                      title: entry.title,
                                      timestamp: entry.timestamp,
                                      text: entry.text,
                                      tags: JSON.parse(entry.tags),
                                      previous: JSON.parse(row.previous),
                                      next: JSON.parse(row.next)
                                    };
                            }), param);
              }), Database__Connection.executeSelectOne(Squel.select().from("Entry", "e").field("e.json", "json").field(Squel.select().from("Entry", "eP").field("json_object('title', json_extract(eP.json, '$.title'), 'slug', json_extract(eP.json, '$.slug'))", "_previous").where("json_extract(eP.json, '$.timestamp') < json_extract(e.json, '$.timestamp')").order("(json_extract(eP.json, '$.timestamp'), json_extract(eP.json, '$.title'))", false), "previous").field(Squel.select().from("Entry", "eN").field("json_object('title', json_extract(eN.json, '$.title'), 'slug', json_extract(eN.json, '$.slug'))", "_next").where("json_extract(eN.json, '$.timestamp') > json_extract(e.json, '$.timestamp')").order("(json_extract(eN.json, '$.timestamp'), json_extract(eN.json, '$.title'))", false), "next").where("json_extract(e.json, '$.slug') = ?", slug).limit(1))(connection));
}

function getTagSearchEntries(page, slug, connection) {
  var match = Squel.select().from("json_each(json_extract(e.json, '$.tags'))", "_each").field("json_extract(json_each.value, '$.slug')", "_slug").toParam();
  var predicate = "? IN (" + (String(match[0]) + ")");
  return Relude_IO.flatMap((function (countRow) {
                if (countRow !== undefined) {
                  if (countRow !== 0) {
                    return Relude_IO.map((function (entries) {
                                  return /* tuple */[
                                          countRow,
                                          entries
                                        ];
                                }), Database__Connection.executeSelectAll(Squel.select().from("Entry", "e").field("json_extract(e.json, '$.slug')", "slug").field("json_extract(e.json, '$.title')", "title").field("json_extract(e.json, '$.timestamp')", "timestamp").field("json_extract(e.json, '$.text')", "text").where(predicate, slug).order("(timestamp, title)", false).limit(Constants.entriesPerPage).offset(Caml_int32.imul(page - 1 | 0, Constants.entriesPerPage)))(connection));
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
              }), Database__Connection.executeSelectOne(Squel.select().from("Entry", "e").field("COUNT(*)", "count").where(predicate, slug))(connection));
}

export {
  insertAboutPage ,
  insertEntries ,
  insertAll ,
  getAboutPageText ,
  getIndexPageEntries ,
  getEntry ,
  getTagSearchEntries ,
  
}
/* Utils Not a pure module */
