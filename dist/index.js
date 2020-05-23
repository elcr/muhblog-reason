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

/***/ "./node_modules/mime-db/db.json":
/*!**************************************!*\
  !*** ./node_modules/mime-db/db.json ***!
  \**************************************/
/*! exports provided: application/1d-interleaved-parityfec, application/3gpdash-qoe-report+xml, application/3gpp-ims+xml, application/a2l, application/activemessage, application/activity+json, application/alto-costmap+json, application/alto-costmapfilter+json, application/alto-directory+json, application/alto-endpointcost+json, application/alto-endpointcostparams+json, application/alto-endpointprop+json, application/alto-endpointpropparams+json, application/alto-error+json, application/alto-networkmap+json, application/alto-networkmapfilter+json, application/alto-updatestreamcontrol+json, application/alto-updatestreamparams+json, application/aml, application/andrew-inset, application/applefile, application/applixware, application/atf, application/atfx, application/atom+xml, application/atomcat+xml, application/atomdeleted+xml, application/atomicmail, application/atomsvc+xml, application/atsc-dwd+xml, application/atsc-dynamic-event-message, application/atsc-held+xml, application/atsc-rdt+json, application/atsc-rsat+xml, application/atxml, application/auth-policy+xml, application/bacnet-xdd+zip, application/batch-smtp, application/bdoc, application/beep+xml, application/calendar+json, application/calendar+xml, application/call-completion, application/cals-1840, application/cap+xml, application/cbor, application/cbor-seq, application/cccex, application/ccmp+xml, application/ccxml+xml, application/cdfx+xml, application/cdmi-capability, application/cdmi-container, application/cdmi-domain, application/cdmi-object, application/cdmi-queue, application/cdni, application/cea, application/cea-2018+xml, application/cellml+xml, application/cfw, application/clue+xml, application/clue_info+xml, application/cms, application/cnrp+xml, application/coap-group+json, application/coap-payload, application/commonground, application/conference-info+xml, application/cose, application/cose-key, application/cose-key-set, application/cpl+xml, application/csrattrs, application/csta+xml, application/cstadata+xml, application/csvm+json, application/cu-seeme, application/cwt, application/cybercash, application/dart, application/dash+xml, application/dashdelta, application/davmount+xml, application/dca-rft, application/dcd, application/dec-dx, application/dialog-info+xml, application/dicom, application/dicom+json, application/dicom+xml, application/dii, application/dit, application/dns, application/dns+json, application/dns-message, application/docbook+xml, application/dots+cbor, application/dskpp+xml, application/dssc+der, application/dssc+xml, application/dvcs, application/ecmascript, application/edi-consent, application/edi-x12, application/edifact, application/efi, application/emergencycalldata.comment+xml, application/emergencycalldata.control+xml, application/emergencycalldata.deviceinfo+xml, application/emergencycalldata.ecall.msd, application/emergencycalldata.providerinfo+xml, application/emergencycalldata.serviceinfo+xml, application/emergencycalldata.subscriberinfo+xml, application/emergencycalldata.veds+xml, application/emma+xml, application/emotionml+xml, application/encaprtp, application/epp+xml, application/epub+zip, application/eshop, application/exi, application/expect-ct-report+json, application/fastinfoset, application/fastsoap, application/fdt+xml, application/fhir+json, application/fhir+xml, application/fido.trusted-apps+json, application/fits, application/flexfec, application/font-sfnt, application/font-tdpfr, application/font-woff, application/framework-attributes+xml, application/geo+json, application/geo+json-seq, application/geopackage+sqlite3, application/geoxacml+xml, application/gltf-buffer, application/gml+xml, application/gpx+xml, application/gxf, application/gzip, application/h224, application/held+xml, application/hjson, application/http, application/hyperstudio, application/ibe-key-request+xml, application/ibe-pkg-reply+xml, application/ibe-pp-data, application/iges, application/im-iscomposing+xml, application/index, application/index.cmd, application/index.obj, application/index.response, application/index.vnd, application/inkml+xml, application/iotp, application/ipfix, application/ipp, application/isup, application/its+xml, application/java-archive, application/java-serialized-object, application/java-vm, application/javascript, application/jf2feed+json, application/jose, application/jose+json, application/jrd+json, application/json, application/json-patch+json, application/json-seq, application/json5, application/jsonml+json, application/jwk+json, application/jwk-set+json, application/jwt, application/kpml-request+xml, application/kpml-response+xml, application/ld+json, application/lgr+xml, application/link-format, application/load-control+xml, application/lost+xml, application/lostsync+xml, application/lpf+zip, application/lxf, application/mac-binhex40, application/mac-compactpro, application/macwriteii, application/mads+xml, application/manifest+json, application/marc, application/marcxml+xml, application/mathematica, application/mathml+xml, application/mathml-content+xml, application/mathml-presentation+xml, application/mbms-associated-procedure-description+xml, application/mbms-deregister+xml, application/mbms-envelope+xml, application/mbms-msk+xml, application/mbms-msk-response+xml, application/mbms-protection-description+xml, application/mbms-reception-report+xml, application/mbms-register+xml, application/mbms-register-response+xml, application/mbms-schedule+xml, application/mbms-user-service-description+xml, application/mbox, application/media-policy-dataset+xml, application/media_control+xml, application/mediaservercontrol+xml, application/merge-patch+json, application/metalink+xml, application/metalink4+xml, application/mets+xml, application/mf4, application/mikey, application/mipc, application/mmt-aei+xml, application/mmt-usd+xml, application/mods+xml, application/moss-keys, application/moss-signature, application/mosskey-data, application/mosskey-request, application/mp21, application/mp4, application/mpeg4-generic, application/mpeg4-iod, application/mpeg4-iod-xmt, application/mrb-consumer+xml, application/mrb-publish+xml, application/msc-ivr+xml, application/msc-mixer+xml, application/msword, application/mud+json, application/multipart-core, application/mxf, application/n-quads, application/n-triples, application/nasdata, application/news-checkgroups, application/news-groupinfo, application/news-transmission, application/nlsml+xml, application/node, application/nss, application/ocsp-request, application/ocsp-response, application/octet-stream, application/oda, application/odm+xml, application/odx, application/oebps-package+xml, application/ogg, application/omdoc+xml, application/onenote, application/oscore, application/oxps, application/p2p-overlay+xml, application/parityfec, application/passport, application/patch-ops-error+xml, application/pdf, application/pdx, application/pem-certificate-chain, application/pgp-encrypted, application/pgp-keys, application/pgp-signature, application/pics-rules, application/pidf+xml, application/pidf-diff+xml, application/pkcs10, application/pkcs12, application/pkcs7-mime, application/pkcs7-signature, application/pkcs8, application/pkcs8-encrypted, application/pkix-attr-cert, application/pkix-cert, application/pkix-crl, application/pkix-pkipath, application/pkixcmp, application/pls+xml, application/poc-settings+xml, application/postscript, application/ppsp-tracker+json, application/problem+json, application/problem+xml, application/provenance+xml, application/prs.alvestrand.titrax-sheet, application/prs.cww, application/prs.hpub+zip, application/prs.nprend, application/prs.plucker, application/prs.rdf-xml-crypt, application/prs.xsf+xml, application/pskc+xml, application/pvd+json, application/qsig, application/raml+yaml, application/raptorfec, application/rdap+json, application/rdf+xml, application/reginfo+xml, application/relax-ng-compact-syntax, application/remote-printing, application/reputon+json, application/resource-lists+xml, application/resource-lists-diff+xml, application/rfc+xml, application/riscos, application/rlmi+xml, application/rls-services+xml, application/route-apd+xml, application/route-s-tsid+xml, application/route-usd+xml, application/rpki-ghostbusters, application/rpki-manifest, application/rpki-publication, application/rpki-roa, application/rpki-updown, application/rsd+xml, application/rss+xml, application/rtf, application/rtploopback, application/rtx, application/samlassertion+xml, application/samlmetadata+xml, application/sbe, application/sbml+xml, application/scaip+xml, application/scim+json, application/scvp-cv-request, application/scvp-cv-response, application/scvp-vp-request, application/scvp-vp-response, application/sdp, application/secevent+jwt, application/senml+cbor, application/senml+json, application/senml+xml, application/senml-etch+cbor, application/senml-etch+json, application/senml-exi, application/sensml+cbor, application/sensml+json, application/sensml+xml, application/sensml-exi, application/sep+xml, application/sep-exi, application/session-info, application/set-payment, application/set-payment-initiation, application/set-registration, application/set-registration-initiation, application/sgml, application/sgml-open-catalog, application/shf+xml, application/sieve, application/simple-filter+xml, application/simple-message-summary, application/simplesymbolcontainer, application/sipc, application/slate, application/smil, application/smil+xml, application/smpte336m, application/soap+fastinfoset, application/soap+xml, application/sparql-query, application/sparql-results+xml, application/spirits-event+xml, application/sql, application/srgs, application/srgs+xml, application/sru+xml, application/ssdl+xml, application/ssml+xml, application/stix+json, application/swid+xml, application/tamp-apex-update, application/tamp-apex-update-confirm, application/tamp-community-update, application/tamp-community-update-confirm, application/tamp-error, application/tamp-sequence-adjust, application/tamp-sequence-adjust-confirm, application/tamp-status-query, application/tamp-status-response, application/tamp-update, application/tamp-update-confirm, application/tar, application/taxii+json, application/td+json, application/tei+xml, application/tetra_isi, application/thraud+xml, application/timestamp-query, application/timestamp-reply, application/timestamped-data, application/tlsrpt+gzip, application/tlsrpt+json, application/tnauthlist, application/toml, application/trickle-ice-sdpfrag, application/trig, application/ttml+xml, application/tve-trigger, application/tzif, application/tzif-leap, application/ulpfec, application/urc-grpsheet+xml, application/urc-ressheet+xml, application/urc-targetdesc+xml, application/urc-uisocketdesc+xml, application/vcard+json, application/vcard+xml, application/vemmi, application/vividence.scriptfile, application/vnd.1000minds.decision-model+xml, application/vnd.3gpp-prose+xml, application/vnd.3gpp-prose-pc3ch+xml, application/vnd.3gpp-v2x-local-service-information, application/vnd.3gpp.access-transfer-events+xml, application/vnd.3gpp.bsf+xml, application/vnd.3gpp.gmop+xml, application/vnd.3gpp.mc-signalling-ear, application/vnd.3gpp.mcdata-affiliation-command+xml, application/vnd.3gpp.mcdata-info+xml, application/vnd.3gpp.mcdata-payload, application/vnd.3gpp.mcdata-service-config+xml, application/vnd.3gpp.mcdata-signalling, application/vnd.3gpp.mcdata-ue-config+xml, application/vnd.3gpp.mcdata-user-profile+xml, application/vnd.3gpp.mcptt-affiliation-command+xml, application/vnd.3gpp.mcptt-floor-request+xml, application/vnd.3gpp.mcptt-info+xml, application/vnd.3gpp.mcptt-location-info+xml, application/vnd.3gpp.mcptt-mbms-usage-info+xml, application/vnd.3gpp.mcptt-service-config+xml, application/vnd.3gpp.mcptt-signed+xml, application/vnd.3gpp.mcptt-ue-config+xml, application/vnd.3gpp.mcptt-ue-init-config+xml, application/vnd.3gpp.mcptt-user-profile+xml, application/vnd.3gpp.mcvideo-affiliation-command+xml, application/vnd.3gpp.mcvideo-affiliation-info+xml, application/vnd.3gpp.mcvideo-info+xml, application/vnd.3gpp.mcvideo-location-info+xml, application/vnd.3gpp.mcvideo-mbms-usage-info+xml, application/vnd.3gpp.mcvideo-service-config+xml, application/vnd.3gpp.mcvideo-transmission-request+xml, application/vnd.3gpp.mcvideo-ue-config+xml, application/vnd.3gpp.mcvideo-user-profile+xml, application/vnd.3gpp.mid-call+xml, application/vnd.3gpp.pic-bw-large, application/vnd.3gpp.pic-bw-small, application/vnd.3gpp.pic-bw-var, application/vnd.3gpp.sms, application/vnd.3gpp.sms+xml, application/vnd.3gpp.srvcc-ext+xml, application/vnd.3gpp.srvcc-info+xml, application/vnd.3gpp.state-and-event-info+xml, application/vnd.3gpp.ussd+xml, application/vnd.3gpp2.bcmcsinfo+xml, application/vnd.3gpp2.sms, application/vnd.3gpp2.tcap, application/vnd.3lightssoftware.imagescal, application/vnd.3m.post-it-notes, application/vnd.accpac.simply.aso, application/vnd.accpac.simply.imp, application/vnd.acucobol, application/vnd.acucorp, application/vnd.adobe.air-application-installer-package+zip, application/vnd.adobe.flash.movie, application/vnd.adobe.formscentral.fcdt, application/vnd.adobe.fxp, application/vnd.adobe.partial-upload, application/vnd.adobe.xdp+xml, application/vnd.adobe.xfdf, application/vnd.aether.imp, application/vnd.afpc.afplinedata, application/vnd.afpc.afplinedata-pagedef, application/vnd.afpc.foca-charset, application/vnd.afpc.foca-codedfont, application/vnd.afpc.foca-codepage, application/vnd.afpc.modca, application/vnd.afpc.modca-formdef, application/vnd.afpc.modca-mediummap, application/vnd.afpc.modca-objectcontainer, application/vnd.afpc.modca-overlay, application/vnd.afpc.modca-pagesegment, application/vnd.ah-barcode, application/vnd.ahead.space, application/vnd.airzip.filesecure.azf, application/vnd.airzip.filesecure.azs, application/vnd.amadeus+json, application/vnd.amazon.ebook, application/vnd.amazon.mobi8-ebook, application/vnd.americandynamics.acc, application/vnd.amiga.ami, application/vnd.amundsen.maze+xml, application/vnd.android.ota, application/vnd.android.package-archive, application/vnd.anki, application/vnd.anser-web-certificate-issue-initiation, application/vnd.anser-web-funds-transfer-initiation, application/vnd.antix.game-component, application/vnd.apache.thrift.binary, application/vnd.apache.thrift.compact, application/vnd.apache.thrift.json, application/vnd.api+json, application/vnd.aplextor.warrp+json, application/vnd.apothekende.reservation+json, application/vnd.apple.installer+xml, application/vnd.apple.keynote, application/vnd.apple.mpegurl, application/vnd.apple.numbers, application/vnd.apple.pages, application/vnd.apple.pkpass, application/vnd.arastra.swi, application/vnd.aristanetworks.swi, application/vnd.artisan+json, application/vnd.artsquare, application/vnd.astraea-software.iota, application/vnd.audiograph, application/vnd.autopackage, application/vnd.avalon+json, application/vnd.avistar+xml, application/vnd.balsamiq.bmml+xml, application/vnd.balsamiq.bmpr, application/vnd.banana-accounting, application/vnd.bbf.usp.error, application/vnd.bbf.usp.msg, application/vnd.bbf.usp.msg+json, application/vnd.bekitzur-stech+json, application/vnd.bint.med-content, application/vnd.biopax.rdf+xml, application/vnd.blink-idb-value-wrapper, application/vnd.blueice.multipass, application/vnd.bluetooth.ep.oob, application/vnd.bluetooth.le.oob, application/vnd.bmi, application/vnd.bpf, application/vnd.bpf3, application/vnd.businessobjects, application/vnd.byu.uapi+json, application/vnd.cab-jscript, application/vnd.canon-cpdl, application/vnd.canon-lips, application/vnd.capasystems-pg+json, application/vnd.cendio.thinlinc.clientconf, application/vnd.century-systems.tcp_stream, application/vnd.chemdraw+xml, application/vnd.chess-pgn, application/vnd.chipnuts.karaoke-mmd, application/vnd.ciedi, application/vnd.cinderella, application/vnd.cirpack.isdn-ext, application/vnd.citationstyles.style+xml, application/vnd.claymore, application/vnd.cloanto.rp9, application/vnd.clonk.c4group, application/vnd.cluetrust.cartomobile-config, application/vnd.cluetrust.cartomobile-config-pkg, application/vnd.coffeescript, application/vnd.collabio.xodocuments.document, application/vnd.collabio.xodocuments.document-template, application/vnd.collabio.xodocuments.presentation, application/vnd.collabio.xodocuments.presentation-template, application/vnd.collabio.xodocuments.spreadsheet, application/vnd.collabio.xodocuments.spreadsheet-template, application/vnd.collection+json, application/vnd.collection.doc+json, application/vnd.collection.next+json, application/vnd.comicbook+zip, application/vnd.comicbook-rar, application/vnd.commerce-battelle, application/vnd.commonspace, application/vnd.contact.cmsg, application/vnd.coreos.ignition+json, application/vnd.cosmocaller, application/vnd.crick.clicker, application/vnd.crick.clicker.keyboard, application/vnd.crick.clicker.palette, application/vnd.crick.clicker.template, application/vnd.crick.clicker.wordbank, application/vnd.criticaltools.wbs+xml, application/vnd.cryptii.pipe+json, application/vnd.crypto-shade-file, application/vnd.ctc-posml, application/vnd.ctct.ws+xml, application/vnd.cups-pdf, application/vnd.cups-postscript, application/vnd.cups-ppd, application/vnd.cups-raster, application/vnd.cups-raw, application/vnd.curl, application/vnd.curl.car, application/vnd.curl.pcurl, application/vnd.cyan.dean.root+xml, application/vnd.cybank, application/vnd.d2l.coursepackage1p0+zip, application/vnd.dart, application/vnd.data-vision.rdz, application/vnd.datapackage+json, application/vnd.dataresource+json, application/vnd.dbf, application/vnd.debian.binary-package, application/vnd.dece.data, application/vnd.dece.ttml+xml, application/vnd.dece.unspecified, application/vnd.dece.zip, application/vnd.denovo.fcselayout-link, application/vnd.desmume.movie, application/vnd.dir-bi.plate-dl-nosuffix, application/vnd.dm.delegation+xml, application/vnd.dna, application/vnd.document+json, application/vnd.dolby.mlp, application/vnd.dolby.mobile.1, application/vnd.dolby.mobile.2, application/vnd.doremir.scorecloud-binary-document, application/vnd.dpgraph, application/vnd.dreamfactory, application/vnd.drive+json, application/vnd.ds-keypoint, application/vnd.dtg.local, application/vnd.dtg.local.flash, application/vnd.dtg.local.html, application/vnd.dvb.ait, application/vnd.dvb.dvbisl+xml, application/vnd.dvb.dvbj, application/vnd.dvb.esgcontainer, application/vnd.dvb.ipdcdftnotifaccess, application/vnd.dvb.ipdcesgaccess, application/vnd.dvb.ipdcesgaccess2, application/vnd.dvb.ipdcesgpdd, application/vnd.dvb.ipdcroaming, application/vnd.dvb.iptv.alfec-base, application/vnd.dvb.iptv.alfec-enhancement, application/vnd.dvb.notif-aggregate-root+xml, application/vnd.dvb.notif-container+xml, application/vnd.dvb.notif-generic+xml, application/vnd.dvb.notif-ia-msglist+xml, application/vnd.dvb.notif-ia-registration-request+xml, application/vnd.dvb.notif-ia-registration-response+xml, application/vnd.dvb.notif-init+xml, application/vnd.dvb.pfr, application/vnd.dvb.service, application/vnd.dxr, application/vnd.dynageo, application/vnd.dzr, application/vnd.easykaraoke.cdgdownload, application/vnd.ecdis-update, application/vnd.ecip.rlp, application/vnd.ecowin.chart, application/vnd.ecowin.filerequest, application/vnd.ecowin.fileupdate, application/vnd.ecowin.series, application/vnd.ecowin.seriesrequest, application/vnd.ecowin.seriesupdate, application/vnd.efi.img, application/vnd.efi.iso, application/vnd.emclient.accessrequest+xml, application/vnd.enliven, application/vnd.enphase.envoy, application/vnd.eprints.data+xml, application/vnd.epson.esf, application/vnd.epson.msf, application/vnd.epson.quickanime, application/vnd.epson.salt, application/vnd.epson.ssf, application/vnd.ericsson.quickcall, application/vnd.espass-espass+zip, application/vnd.eszigno3+xml, application/vnd.etsi.aoc+xml, application/vnd.etsi.asic-e+zip, application/vnd.etsi.asic-s+zip, application/vnd.etsi.cug+xml, application/vnd.etsi.iptvcommand+xml, application/vnd.etsi.iptvdiscovery+xml, application/vnd.etsi.iptvprofile+xml, application/vnd.etsi.iptvsad-bc+xml, application/vnd.etsi.iptvsad-cod+xml, application/vnd.etsi.iptvsad-npvr+xml, application/vnd.etsi.iptvservice+xml, application/vnd.etsi.iptvsync+xml, application/vnd.etsi.iptvueprofile+xml, application/vnd.etsi.mcid+xml, application/vnd.etsi.mheg5, application/vnd.etsi.overload-control-policy-dataset+xml, application/vnd.etsi.pstn+xml, application/vnd.etsi.sci+xml, application/vnd.etsi.simservs+xml, application/vnd.etsi.timestamp-token, application/vnd.etsi.tsl+xml, application/vnd.etsi.tsl.der, application/vnd.eudora.data, application/vnd.evolv.ecig.profile, application/vnd.evolv.ecig.settings, application/vnd.evolv.ecig.theme, application/vnd.exstream-empower+zip, application/vnd.exstream-package, application/vnd.ezpix-album, application/vnd.ezpix-package, application/vnd.f-secure.mobile, application/vnd.fastcopy-disk-image, application/vnd.fdf, application/vnd.fdsn.mseed, application/vnd.fdsn.seed, application/vnd.ffsns, application/vnd.ficlab.flb+zip, application/vnd.filmit.zfc, application/vnd.fints, application/vnd.firemonkeys.cloudcell, application/vnd.flographit, application/vnd.fluxtime.clip, application/vnd.font-fontforge-sfd, application/vnd.framemaker, application/vnd.frogans.fnc, application/vnd.frogans.ltf, application/vnd.fsc.weblaunch, application/vnd.fujitsu.oasys, application/vnd.fujitsu.oasys2, application/vnd.fujitsu.oasys3, application/vnd.fujitsu.oasysgp, application/vnd.fujitsu.oasysprs, application/vnd.fujixerox.art-ex, application/vnd.fujixerox.art4, application/vnd.fujixerox.ddd, application/vnd.fujixerox.docuworks, application/vnd.fujixerox.docuworks.binder, application/vnd.fujixerox.docuworks.container, application/vnd.fujixerox.hbpl, application/vnd.fut-misnet, application/vnd.futoin+cbor, application/vnd.futoin+json, application/vnd.fuzzysheet, application/vnd.genomatix.tuxedo, application/vnd.gentics.grd+json, application/vnd.geo+json, application/vnd.geocube+xml, application/vnd.geogebra.file, application/vnd.geogebra.tool, application/vnd.geometry-explorer, application/vnd.geonext, application/vnd.geoplan, application/vnd.geospace, application/vnd.gerber, application/vnd.globalplatform.card-content-mgt, application/vnd.globalplatform.card-content-mgt-response, application/vnd.gmx, application/vnd.google-apps.document, application/vnd.google-apps.presentation, application/vnd.google-apps.spreadsheet, application/vnd.google-earth.kml+xml, application/vnd.google-earth.kmz, application/vnd.gov.sk.e-form+xml, application/vnd.gov.sk.e-form+zip, application/vnd.gov.sk.xmldatacontainer+xml, application/vnd.grafeq, application/vnd.gridmp, application/vnd.groove-account, application/vnd.groove-help, application/vnd.groove-identity-message, application/vnd.groove-injector, application/vnd.groove-tool-message, application/vnd.groove-tool-template, application/vnd.groove-vcard, application/vnd.hal+json, application/vnd.hal+xml, application/vnd.handheld-entertainment+xml, application/vnd.hbci, application/vnd.hc+json, application/vnd.hcl-bireports, application/vnd.hdt, application/vnd.heroku+json, application/vnd.hhe.lesson-player, application/vnd.hp-hpgl, application/vnd.hp-hpid, application/vnd.hp-hps, application/vnd.hp-jlyt, application/vnd.hp-pcl, application/vnd.hp-pclxl, application/vnd.httphone, application/vnd.hydrostatix.sof-data, application/vnd.hyper+json, application/vnd.hyper-item+json, application/vnd.hyperdrive+json, application/vnd.hzn-3d-crossword, application/vnd.ibm.afplinedata, application/vnd.ibm.electronic-media, application/vnd.ibm.minipay, application/vnd.ibm.modcap, application/vnd.ibm.rights-management, application/vnd.ibm.secure-container, application/vnd.iccprofile, application/vnd.ieee.1905, application/vnd.igloader, application/vnd.imagemeter.folder+zip, application/vnd.imagemeter.image+zip, application/vnd.immervision-ivp, application/vnd.immervision-ivu, application/vnd.ims.imsccv1p1, application/vnd.ims.imsccv1p2, application/vnd.ims.imsccv1p3, application/vnd.ims.lis.v2.result+json, application/vnd.ims.lti.v2.toolconsumerprofile+json, application/vnd.ims.lti.v2.toolproxy+json, application/vnd.ims.lti.v2.toolproxy.id+json, application/vnd.ims.lti.v2.toolsettings+json, application/vnd.ims.lti.v2.toolsettings.simple+json, application/vnd.informedcontrol.rms+xml, application/vnd.informix-visionary, application/vnd.infotech.project, application/vnd.infotech.project+xml, application/vnd.innopath.wamp.notification, application/vnd.insors.igm, application/vnd.intercon.formnet, application/vnd.intergeo, application/vnd.intertrust.digibox, application/vnd.intertrust.nncp, application/vnd.intu.qbo, application/vnd.intu.qfx, application/vnd.iptc.g2.catalogitem+xml, application/vnd.iptc.g2.conceptitem+xml, application/vnd.iptc.g2.knowledgeitem+xml, application/vnd.iptc.g2.newsitem+xml, application/vnd.iptc.g2.newsmessage+xml, application/vnd.iptc.g2.packageitem+xml, application/vnd.iptc.g2.planningitem+xml, application/vnd.ipunplugged.rcprofile, application/vnd.irepository.package+xml, application/vnd.is-xpr, application/vnd.isac.fcs, application/vnd.iso11783-10+zip, application/vnd.jam, application/vnd.japannet-directory-service, application/vnd.japannet-jpnstore-wakeup, application/vnd.japannet-payment-wakeup, application/vnd.japannet-registration, application/vnd.japannet-registration-wakeup, application/vnd.japannet-setstore-wakeup, application/vnd.japannet-verification, application/vnd.japannet-verification-wakeup, application/vnd.jcp.javame.midlet-rms, application/vnd.jisp, application/vnd.joost.joda-archive, application/vnd.jsk.isdn-ngn, application/vnd.kahootz, application/vnd.kde.karbon, application/vnd.kde.kchart, application/vnd.kde.kformula, application/vnd.kde.kivio, application/vnd.kde.kontour, application/vnd.kde.kpresenter, application/vnd.kde.kspread, application/vnd.kde.kword, application/vnd.kenameaapp, application/vnd.kidspiration, application/vnd.kinar, application/vnd.koan, application/vnd.kodak-descriptor, application/vnd.las, application/vnd.las.las+json, application/vnd.las.las+xml, application/vnd.laszip, application/vnd.leap+json, application/vnd.liberty-request+xml, application/vnd.llamagraphics.life-balance.desktop, application/vnd.llamagraphics.life-balance.exchange+xml, application/vnd.logipipe.circuit+zip, application/vnd.loom, application/vnd.lotus-1-2-3, application/vnd.lotus-approach, application/vnd.lotus-freelance, application/vnd.lotus-notes, application/vnd.lotus-organizer, application/vnd.lotus-screencam, application/vnd.lotus-wordpro, application/vnd.macports.portpkg, application/vnd.mapbox-vector-tile, application/vnd.marlin.drm.actiontoken+xml, application/vnd.marlin.drm.conftoken+xml, application/vnd.marlin.drm.license+xml, application/vnd.marlin.drm.mdcf, application/vnd.mason+json, application/vnd.maxmind.maxmind-db, application/vnd.mcd, application/vnd.medcalcdata, application/vnd.mediastation.cdkey, application/vnd.meridian-slingshot, application/vnd.mfer, application/vnd.mfmp, application/vnd.micro+json, application/vnd.micrografx.flo, application/vnd.micrografx.igx, application/vnd.microsoft.portable-executable, application/vnd.microsoft.windows.thumbnail-cache, application/vnd.miele+json, application/vnd.mif, application/vnd.minisoft-hp3000-save, application/vnd.mitsubishi.misty-guard.trustweb, application/vnd.mobius.daf, application/vnd.mobius.dis, application/vnd.mobius.mbk, application/vnd.mobius.mqy, application/vnd.mobius.msl, application/vnd.mobius.plc, application/vnd.mobius.txf, application/vnd.mophun.application, application/vnd.mophun.certificate, application/vnd.motorola.flexsuite, application/vnd.motorola.flexsuite.adsi, application/vnd.motorola.flexsuite.fis, application/vnd.motorola.flexsuite.gotap, application/vnd.motorola.flexsuite.kmr, application/vnd.motorola.flexsuite.ttc, application/vnd.motorola.flexsuite.wem, application/vnd.motorola.iprm, application/vnd.mozilla.xul+xml, application/vnd.ms-3mfdocument, application/vnd.ms-artgalry, application/vnd.ms-asf, application/vnd.ms-cab-compressed, application/vnd.ms-color.iccprofile, application/vnd.ms-excel, application/vnd.ms-excel.addin.macroenabled.12, application/vnd.ms-excel.sheet.binary.macroenabled.12, application/vnd.ms-excel.sheet.macroenabled.12, application/vnd.ms-excel.template.macroenabled.12, application/vnd.ms-fontobject, application/vnd.ms-htmlhelp, application/vnd.ms-ims, application/vnd.ms-lrm, application/vnd.ms-office.activex+xml, application/vnd.ms-officetheme, application/vnd.ms-opentype, application/vnd.ms-outlook, application/vnd.ms-package.obfuscated-opentype, application/vnd.ms-pki.seccat, application/vnd.ms-pki.stl, application/vnd.ms-playready.initiator+xml, application/vnd.ms-powerpoint, application/vnd.ms-powerpoint.addin.macroenabled.12, application/vnd.ms-powerpoint.presentation.macroenabled.12, application/vnd.ms-powerpoint.slide.macroenabled.12, application/vnd.ms-powerpoint.slideshow.macroenabled.12, application/vnd.ms-powerpoint.template.macroenabled.12, application/vnd.ms-printdevicecapabilities+xml, application/vnd.ms-printing.printticket+xml, application/vnd.ms-printschematicket+xml, application/vnd.ms-project, application/vnd.ms-tnef, application/vnd.ms-windows.devicepairing, application/vnd.ms-windows.nwprinting.oob, application/vnd.ms-windows.printerpairing, application/vnd.ms-windows.wsd.oob, application/vnd.ms-wmdrm.lic-chlg-req, application/vnd.ms-wmdrm.lic-resp, application/vnd.ms-wmdrm.meter-chlg-req, application/vnd.ms-wmdrm.meter-resp, application/vnd.ms-word.document.macroenabled.12, application/vnd.ms-word.template.macroenabled.12, application/vnd.ms-works, application/vnd.ms-wpl, application/vnd.ms-xpsdocument, application/vnd.msa-disk-image, application/vnd.mseq, application/vnd.msign, application/vnd.multiad.creator, application/vnd.multiad.creator.cif, application/vnd.music-niff, application/vnd.musician, application/vnd.muvee.style, application/vnd.mynfc, application/vnd.ncd.control, application/vnd.ncd.reference, application/vnd.nearst.inv+json, application/vnd.nervana, application/vnd.netfpx, application/vnd.neurolanguage.nlu, application/vnd.nimn, application/vnd.nintendo.nitro.rom, application/vnd.nintendo.snes.rom, application/vnd.nitf, application/vnd.noblenet-directory, application/vnd.noblenet-sealer, application/vnd.noblenet-web, application/vnd.nokia.catalogs, application/vnd.nokia.conml+wbxml, application/vnd.nokia.conml+xml, application/vnd.nokia.iptv.config+xml, application/vnd.nokia.isds-radio-presets, application/vnd.nokia.landmark+wbxml, application/vnd.nokia.landmark+xml, application/vnd.nokia.landmarkcollection+xml, application/vnd.nokia.n-gage.ac+xml, application/vnd.nokia.n-gage.data, application/vnd.nokia.n-gage.symbian.install, application/vnd.nokia.ncd, application/vnd.nokia.pcd+wbxml, application/vnd.nokia.pcd+xml, application/vnd.nokia.radio-preset, application/vnd.nokia.radio-presets, application/vnd.novadigm.edm, application/vnd.novadigm.edx, application/vnd.novadigm.ext, application/vnd.ntt-local.content-share, application/vnd.ntt-local.file-transfer, application/vnd.ntt-local.ogw_remote-access, application/vnd.ntt-local.sip-ta_remote, application/vnd.ntt-local.sip-ta_tcp_stream, application/vnd.oasis.opendocument.chart, application/vnd.oasis.opendocument.chart-template, application/vnd.oasis.opendocument.database, application/vnd.oasis.opendocument.formula, application/vnd.oasis.opendocument.formula-template, application/vnd.oasis.opendocument.graphics, application/vnd.oasis.opendocument.graphics-template, application/vnd.oasis.opendocument.image, application/vnd.oasis.opendocument.image-template, application/vnd.oasis.opendocument.presentation, application/vnd.oasis.opendocument.presentation-template, application/vnd.oasis.opendocument.spreadsheet, application/vnd.oasis.opendocument.spreadsheet-template, application/vnd.oasis.opendocument.text, application/vnd.oasis.opendocument.text-master, application/vnd.oasis.opendocument.text-template, application/vnd.oasis.opendocument.text-web, application/vnd.obn, application/vnd.ocf+cbor, application/vnd.oci.image.manifest.v1+json, application/vnd.oftn.l10n+json, application/vnd.oipf.contentaccessdownload+xml, application/vnd.oipf.contentaccessstreaming+xml, application/vnd.oipf.cspg-hexbinary, application/vnd.oipf.dae.svg+xml, application/vnd.oipf.dae.xhtml+xml, application/vnd.oipf.mippvcontrolmessage+xml, application/vnd.oipf.pae.gem, application/vnd.oipf.spdiscovery+xml, application/vnd.oipf.spdlist+xml, application/vnd.oipf.ueprofile+xml, application/vnd.oipf.userprofile+xml, application/vnd.olpc-sugar, application/vnd.oma-scws-config, application/vnd.oma-scws-http-request, application/vnd.oma-scws-http-response, application/vnd.oma.bcast.associated-procedure-parameter+xml, application/vnd.oma.bcast.drm-trigger+xml, application/vnd.oma.bcast.imd+xml, application/vnd.oma.bcast.ltkm, application/vnd.oma.bcast.notification+xml, application/vnd.oma.bcast.provisioningtrigger, application/vnd.oma.bcast.sgboot, application/vnd.oma.bcast.sgdd+xml, application/vnd.oma.bcast.sgdu, application/vnd.oma.bcast.simple-symbol-container, application/vnd.oma.bcast.smartcard-trigger+xml, application/vnd.oma.bcast.sprov+xml, application/vnd.oma.bcast.stkm, application/vnd.oma.cab-address-book+xml, application/vnd.oma.cab-feature-handler+xml, application/vnd.oma.cab-pcc+xml, application/vnd.oma.cab-subs-invite+xml, application/vnd.oma.cab-user-prefs+xml, application/vnd.oma.dcd, application/vnd.oma.dcdc, application/vnd.oma.dd2+xml, application/vnd.oma.drm.risd+xml, application/vnd.oma.group-usage-list+xml, application/vnd.oma.lwm2m+json, application/vnd.oma.lwm2m+tlv, application/vnd.oma.pal+xml, application/vnd.oma.poc.detailed-progress-report+xml, application/vnd.oma.poc.final-report+xml, application/vnd.oma.poc.groups+xml, application/vnd.oma.poc.invocation-descriptor+xml, application/vnd.oma.poc.optimized-progress-report+xml, application/vnd.oma.push, application/vnd.oma.scidm.messages+xml, application/vnd.oma.xcap-directory+xml, application/vnd.omads-email+xml, application/vnd.omads-file+xml, application/vnd.omads-folder+xml, application/vnd.omaloc-supl-init, application/vnd.onepager, application/vnd.onepagertamp, application/vnd.onepagertamx, application/vnd.onepagertat, application/vnd.onepagertatp, application/vnd.onepagertatx, application/vnd.openblox.game+xml, application/vnd.openblox.game-binary, application/vnd.openeye.oeb, application/vnd.openofficeorg.extension, application/vnd.openstreetmap.data+xml, application/vnd.openxmlformats-officedocument.custom-properties+xml, application/vnd.openxmlformats-officedocument.customxmlproperties+xml, application/vnd.openxmlformats-officedocument.drawing+xml, application/vnd.openxmlformats-officedocument.drawingml.chart+xml, application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml, application/vnd.openxmlformats-officedocument.extended-properties+xml, application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml, application/vnd.openxmlformats-officedocument.presentationml.comments+xml, application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml, application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml, application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml, application/vnd.openxmlformats-officedocument.presentationml.presprops+xml, application/vnd.openxmlformats-officedocument.presentationml.slide, application/vnd.openxmlformats-officedocument.presentationml.slide+xml, application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml, application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml, application/vnd.openxmlformats-officedocument.presentationml.slideshow, application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml, application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml, application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml, application/vnd.openxmlformats-officedocument.presentationml.tags+xml, application/vnd.openxmlformats-officedocument.presentationml.template, application/vnd.openxmlformats-officedocument.presentationml.template.main+xml, application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.template, application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml, application/vnd.openxmlformats-officedocument.theme+xml, application/vnd.openxmlformats-officedocument.themeoverride+xml, application/vnd.openxmlformats-officedocument.vmldrawing, application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.template, application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml, application/vnd.openxmlformats-package.core-properties+xml, application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml, application/vnd.openxmlformats-package.relationships+xml, application/vnd.oracle.resource+json, application/vnd.orange.indata, application/vnd.osa.netdeploy, application/vnd.osgeo.mapguide.package, application/vnd.osgi.bundle, application/vnd.osgi.dp, application/vnd.osgi.subsystem, application/vnd.otps.ct-kip+xml, application/vnd.oxli.countgraph, application/vnd.pagerduty+json, application/vnd.palm, application/vnd.panoply, application/vnd.paos.xml, application/vnd.patentdive, application/vnd.patientecommsdoc, application/vnd.pawaafile, application/vnd.pcos, application/vnd.pg.format, application/vnd.pg.osasli, application/vnd.piaccess.application-licence, application/vnd.picsel, application/vnd.pmi.widget, application/vnd.poc.group-advertisement+xml, application/vnd.pocketlearn, application/vnd.powerbuilder6, application/vnd.powerbuilder6-s, application/vnd.powerbuilder7, application/vnd.powerbuilder7-s, application/vnd.powerbuilder75, application/vnd.powerbuilder75-s, application/vnd.preminet, application/vnd.previewsystems.box, application/vnd.proteus.magazine, application/vnd.psfs, application/vnd.publishare-delta-tree, application/vnd.pvi.ptid1, application/vnd.pwg-multiplexed, application/vnd.pwg-xhtml-print+xml, application/vnd.qualcomm.brew-app-res, application/vnd.quarantainenet, application/vnd.quark.quarkxpress, application/vnd.quobject-quoxdocument, application/vnd.radisys.moml+xml, application/vnd.radisys.msml+xml, application/vnd.radisys.msml-audit+xml, application/vnd.radisys.msml-audit-conf+xml, application/vnd.radisys.msml-audit-conn+xml, application/vnd.radisys.msml-audit-dialog+xml, application/vnd.radisys.msml-audit-stream+xml, application/vnd.radisys.msml-conf+xml, application/vnd.radisys.msml-dialog+xml, application/vnd.radisys.msml-dialog-base+xml, application/vnd.radisys.msml-dialog-fax-detect+xml, application/vnd.radisys.msml-dialog-fax-sendrecv+xml, application/vnd.radisys.msml-dialog-group+xml, application/vnd.radisys.msml-dialog-speech+xml, application/vnd.radisys.msml-dialog-transform+xml, application/vnd.rainstor.data, application/vnd.rapid, application/vnd.rar, application/vnd.realvnc.bed, application/vnd.recordare.musicxml, application/vnd.recordare.musicxml+xml, application/vnd.renlearn.rlprint, application/vnd.restful+json, application/vnd.rig.cryptonote, application/vnd.rim.cod, application/vnd.rn-realmedia, application/vnd.rn-realmedia-vbr, application/vnd.route66.link66+xml, application/vnd.rs-274x, application/vnd.ruckus.download, application/vnd.s3sms, application/vnd.sailingtracker.track, application/vnd.sar, application/vnd.sbm.cid, application/vnd.sbm.mid2, application/vnd.scribus, application/vnd.sealed.3df, application/vnd.sealed.csf, application/vnd.sealed.doc, application/vnd.sealed.eml, application/vnd.sealed.mht, application/vnd.sealed.net, application/vnd.sealed.ppt, application/vnd.sealed.tiff, application/vnd.sealed.xls, application/vnd.sealedmedia.softseal.html, application/vnd.sealedmedia.softseal.pdf, application/vnd.seemail, application/vnd.sema, application/vnd.semd, application/vnd.semf, application/vnd.shade-save-file, application/vnd.shana.informed.formdata, application/vnd.shana.informed.formtemplate, application/vnd.shana.informed.interchange, application/vnd.shana.informed.package, application/vnd.shootproof+json, application/vnd.shopkick+json, application/vnd.shp, application/vnd.shx, application/vnd.sigrok.session, application/vnd.simtech-mindmapper, application/vnd.siren+json, application/vnd.smaf, application/vnd.smart.notebook, application/vnd.smart.teacher, application/vnd.snesdev-page-table, application/vnd.software602.filler.form+xml, application/vnd.software602.filler.form-xml-zip, application/vnd.solent.sdkm+xml, application/vnd.spotfire.dxp, application/vnd.spotfire.sfs, application/vnd.sqlite3, application/vnd.sss-cod, application/vnd.sss-dtf, application/vnd.sss-ntf, application/vnd.stardivision.calc, application/vnd.stardivision.draw, application/vnd.stardivision.impress, application/vnd.stardivision.math, application/vnd.stardivision.writer, application/vnd.stardivision.writer-global, application/vnd.stepmania.package, application/vnd.stepmania.stepchart, application/vnd.street-stream, application/vnd.sun.wadl+xml, application/vnd.sun.xml.calc, application/vnd.sun.xml.calc.template, application/vnd.sun.xml.draw, application/vnd.sun.xml.draw.template, application/vnd.sun.xml.impress, application/vnd.sun.xml.impress.template, application/vnd.sun.xml.math, application/vnd.sun.xml.writer, application/vnd.sun.xml.writer.global, application/vnd.sun.xml.writer.template, application/vnd.sus-calendar, application/vnd.svd, application/vnd.swiftview-ics, application/vnd.symbian.install, application/vnd.syncml+xml, application/vnd.syncml.dm+wbxml, application/vnd.syncml.dm+xml, application/vnd.syncml.dm.notification, application/vnd.syncml.dmddf+wbxml, application/vnd.syncml.dmddf+xml, application/vnd.syncml.dmtnds+wbxml, application/vnd.syncml.dmtnds+xml, application/vnd.syncml.ds.notification, application/vnd.tableschema+json, application/vnd.tao.intent-module-archive, application/vnd.tcpdump.pcap, application/vnd.think-cell.ppttc+json, application/vnd.tmd.mediaflex.api+xml, application/vnd.tml, application/vnd.tmobile-livetv, application/vnd.tri.onesource, application/vnd.trid.tpt, application/vnd.triscape.mxs, application/vnd.trueapp, application/vnd.truedoc, application/vnd.ubisoft.webplayer, application/vnd.ufdl, application/vnd.uiq.theme, application/vnd.umajin, application/vnd.unity, application/vnd.uoml+xml, application/vnd.uplanet.alert, application/vnd.uplanet.alert-wbxml, application/vnd.uplanet.bearer-choice, application/vnd.uplanet.bearer-choice-wbxml, application/vnd.uplanet.cacheop, application/vnd.uplanet.cacheop-wbxml, application/vnd.uplanet.channel, application/vnd.uplanet.channel-wbxml, application/vnd.uplanet.list, application/vnd.uplanet.list-wbxml, application/vnd.uplanet.listcmd, application/vnd.uplanet.listcmd-wbxml, application/vnd.uplanet.signal, application/vnd.uri-map, application/vnd.valve.source.material, application/vnd.vcx, application/vnd.vd-study, application/vnd.vectorworks, application/vnd.vel+json, application/vnd.verimatrix.vcas, application/vnd.veryant.thin, application/vnd.ves.encrypted, application/vnd.vidsoft.vidconference, application/vnd.visio, application/vnd.visionary, application/vnd.vividence.scriptfile, application/vnd.vsf, application/vnd.wap.sic, application/vnd.wap.slc, application/vnd.wap.wbxml, application/vnd.wap.wmlc, application/vnd.wap.wmlscriptc, application/vnd.webturbo, application/vnd.wfa.p2p, application/vnd.wfa.wsc, application/vnd.windows.devicepairing, application/vnd.wmc, application/vnd.wmf.bootstrap, application/vnd.wolfram.mathematica, application/vnd.wolfram.mathematica.package, application/vnd.wolfram.player, application/vnd.wordperfect, application/vnd.wqd, application/vnd.wrq-hp3000-labelled, application/vnd.wt.stf, application/vnd.wv.csp+wbxml, application/vnd.wv.csp+xml, application/vnd.wv.ssp+xml, application/vnd.xacml+json, application/vnd.xara, application/vnd.xfdl, application/vnd.xfdl.webform, application/vnd.xmi+xml, application/vnd.xmpie.cpkg, application/vnd.xmpie.dpkg, application/vnd.xmpie.plan, application/vnd.xmpie.ppkg, application/vnd.xmpie.xlim, application/vnd.yamaha.hv-dic, application/vnd.yamaha.hv-script, application/vnd.yamaha.hv-voice, application/vnd.yamaha.openscoreformat, application/vnd.yamaha.openscoreformat.osfpvg+xml, application/vnd.yamaha.remote-setup, application/vnd.yamaha.smaf-audio, application/vnd.yamaha.smaf-phrase, application/vnd.yamaha.through-ngn, application/vnd.yamaha.tunnel-udpencap, application/vnd.yaoweme, application/vnd.yellowriver-custom-menu, application/vnd.youtube.yt, application/vnd.zul, application/vnd.zzazz.deck+xml, application/voicexml+xml, application/voucher-cms+json, application/vq-rtcpxr, application/wasm, application/watcherinfo+xml, application/webpush-options+json, application/whoispp-query, application/whoispp-response, application/widget, application/winhlp, application/wita, application/wordperfect5.1, application/wsdl+xml, application/wspolicy+xml, application/x-7z-compressed, application/x-abiword, application/x-ace-compressed, application/x-amf, application/x-apple-diskimage, application/x-arj, application/x-authorware-bin, application/x-authorware-map, application/x-authorware-seg, application/x-bcpio, application/x-bdoc, application/x-bittorrent, application/x-blorb, application/x-bzip, application/x-bzip2, application/x-cbr, application/x-cdlink, application/x-cfs-compressed, application/x-chat, application/x-chess-pgn, application/x-chrome-extension, application/x-cocoa, application/x-compress, application/x-conference, application/x-cpio, application/x-csh, application/x-deb, application/x-debian-package, application/x-dgc-compressed, application/x-director, application/x-doom, application/x-dtbncx+xml, application/x-dtbook+xml, application/x-dtbresource+xml, application/x-dvi, application/x-envoy, application/x-eva, application/x-font-bdf, application/x-font-dos, application/x-font-framemaker, application/x-font-ghostscript, application/x-font-libgrx, application/x-font-linux-psf, application/x-font-pcf, application/x-font-snf, application/x-font-speedo, application/x-font-sunos-news, application/x-font-type1, application/x-font-vfont, application/x-freearc, application/x-futuresplash, application/x-gca-compressed, application/x-glulx, application/x-gnumeric, application/x-gramps-xml, application/x-gtar, application/x-gzip, application/x-hdf, application/x-httpd-php, application/x-install-instructions, application/x-iso9660-image, application/x-java-archive-diff, application/x-java-jnlp-file, application/x-javascript, application/x-keepass2, application/x-latex, application/x-lua-bytecode, application/x-lzh-compressed, application/x-makeself, application/x-mie, application/x-mobipocket-ebook, application/x-mpegurl, application/x-ms-application, application/x-ms-shortcut, application/x-ms-wmd, application/x-ms-wmz, application/x-ms-xbap, application/x-msaccess, application/x-msbinder, application/x-mscardfile, application/x-msclip, application/x-msdos-program, application/x-msdownload, application/x-msmediaview, application/x-msmetafile, application/x-msmoney, application/x-mspublisher, application/x-msschedule, application/x-msterminal, application/x-mswrite, application/x-netcdf, application/x-ns-proxy-autoconfig, application/x-nzb, application/x-perl, application/x-pilot, application/x-pkcs12, application/x-pkcs7-certificates, application/x-pkcs7-certreqresp, application/x-pki-message, application/x-rar-compressed, application/x-redhat-package-manager, application/x-research-info-systems, application/x-sea, application/x-sh, application/x-shar, application/x-shockwave-flash, application/x-silverlight-app, application/x-sql, application/x-stuffit, application/x-stuffitx, application/x-subrip, application/x-sv4cpio, application/x-sv4crc, application/x-t3vm-image, application/x-tads, application/x-tar, application/x-tcl, application/x-tex, application/x-tex-tfm, application/x-texinfo, application/x-tgif, application/x-ustar, application/x-virtualbox-hdd, application/x-virtualbox-ova, application/x-virtualbox-ovf, application/x-virtualbox-vbox, application/x-virtualbox-vbox-extpack, application/x-virtualbox-vdi, application/x-virtualbox-vhd, application/x-virtualbox-vmdk, application/x-wais-source, application/x-web-app-manifest+json, application/x-www-form-urlencoded, application/x-x509-ca-cert, application/x-x509-ca-ra-cert, application/x-x509-next-ca-cert, application/x-xfig, application/x-xliff+xml, application/x-xpinstall, application/x-xz, application/x-zmachine, application/x400-bp, application/xacml+xml, application/xaml+xml, application/xcap-att+xml, application/xcap-caps+xml, application/xcap-diff+xml, application/xcap-el+xml, application/xcap-error+xml, application/xcap-ns+xml, application/xcon-conference-info+xml, application/xcon-conference-info-diff+xml, application/xenc+xml, application/xhtml+xml, application/xhtml-voice+xml, application/xliff+xml, application/xml, application/xml-dtd, application/xml-external-parsed-entity, application/xml-patch+xml, application/xmpp+xml, application/xop+xml, application/xproc+xml, application/xslt+xml, application/xspf+xml, application/xv+xml, application/yang, application/yang-data+json, application/yang-data+xml, application/yang-patch+json, application/yang-patch+xml, application/yin+xml, application/zip, application/zlib, application/zstd, audio/1d-interleaved-parityfec, audio/32kadpcm, audio/3gpp, audio/3gpp2, audio/aac, audio/ac3, audio/adpcm, audio/amr, audio/amr-wb, audio/amr-wb+, audio/aptx, audio/asc, audio/atrac-advanced-lossless, audio/atrac-x, audio/atrac3, audio/basic, audio/bv16, audio/bv32, audio/clearmode, audio/cn, audio/dat12, audio/dls, audio/dsr-es201108, audio/dsr-es202050, audio/dsr-es202211, audio/dsr-es202212, audio/dv, audio/dvi4, audio/eac3, audio/encaprtp, audio/evrc, audio/evrc-qcp, audio/evrc0, audio/evrc1, audio/evrcb, audio/evrcb0, audio/evrcb1, audio/evrcnw, audio/evrcnw0, audio/evrcnw1, audio/evrcwb, audio/evrcwb0, audio/evrcwb1, audio/evs, audio/flexfec, audio/fwdred, audio/g711-0, audio/g719, audio/g722, audio/g7221, audio/g723, audio/g726-16, audio/g726-24, audio/g726-32, audio/g726-40, audio/g728, audio/g729, audio/g7291, audio/g729d, audio/g729e, audio/gsm, audio/gsm-efr, audio/gsm-hr-08, audio/ilbc, audio/ip-mr_v2.5, audio/isac, audio/l16, audio/l20, audio/l24, audio/l8, audio/lpc, audio/melp, audio/melp1200, audio/melp2400, audio/melp600, audio/mhas, audio/midi, audio/mobile-xmf, audio/mp3, audio/mp4, audio/mp4a-latm, audio/mpa, audio/mpa-robust, audio/mpeg, audio/mpeg4-generic, audio/musepack, audio/ogg, audio/opus, audio/parityfec, audio/pcma, audio/pcma-wb, audio/pcmu, audio/pcmu-wb, audio/prs.sid, audio/qcelp, audio/raptorfec, audio/red, audio/rtp-enc-aescm128, audio/rtp-midi, audio/rtploopback, audio/rtx, audio/s3m, audio/silk, audio/smv, audio/smv-qcp, audio/smv0, audio/sp-midi, audio/speex, audio/t140c, audio/t38, audio/telephone-event, audio/tetra_acelp, audio/tetra_acelp_bb, audio/tone, audio/uemclip, audio/ulpfec, audio/usac, audio/vdvi, audio/vmr-wb, audio/vnd.3gpp.iufp, audio/vnd.4sb, audio/vnd.audiokoz, audio/vnd.celp, audio/vnd.cisco.nse, audio/vnd.cmles.radio-events, audio/vnd.cns.anp1, audio/vnd.cns.inf1, audio/vnd.dece.audio, audio/vnd.digital-winds, audio/vnd.dlna.adts, audio/vnd.dolby.heaac.1, audio/vnd.dolby.heaac.2, audio/vnd.dolby.mlp, audio/vnd.dolby.mps, audio/vnd.dolby.pl2, audio/vnd.dolby.pl2x, audio/vnd.dolby.pl2z, audio/vnd.dolby.pulse.1, audio/vnd.dra, audio/vnd.dts, audio/vnd.dts.hd, audio/vnd.dts.uhd, audio/vnd.dvb.file, audio/vnd.everad.plj, audio/vnd.hns.audio, audio/vnd.lucent.voice, audio/vnd.ms-playready.media.pya, audio/vnd.nokia.mobile-xmf, audio/vnd.nortel.vbk, audio/vnd.nuera.ecelp4800, audio/vnd.nuera.ecelp7470, audio/vnd.nuera.ecelp9600, audio/vnd.octel.sbc, audio/vnd.presonus.multitrack, audio/vnd.qcelp, audio/vnd.rhetorex.32kadpcm, audio/vnd.rip, audio/vnd.rn-realaudio, audio/vnd.sealedmedia.softseal.mpeg, audio/vnd.vmx.cvsd, audio/vnd.wave, audio/vorbis, audio/vorbis-config, audio/wav, audio/wave, audio/webm, audio/x-aac, audio/x-aiff, audio/x-caf, audio/x-flac, audio/x-m4a, audio/x-matroska, audio/x-mpegurl, audio/x-ms-wax, audio/x-ms-wma, audio/x-pn-realaudio, audio/x-pn-realaudio-plugin, audio/x-realaudio, audio/x-tta, audio/x-wav, audio/xm, chemical/x-cdx, chemical/x-cif, chemical/x-cmdf, chemical/x-cml, chemical/x-csml, chemical/x-pdb, chemical/x-xyz, font/collection, font/otf, font/sfnt, font/ttf, font/woff, font/woff2, image/aces, image/apng, image/avci, image/avcs, image/bmp, image/cgm, image/dicom-rle, image/emf, image/fits, image/g3fax, image/gif, image/heic, image/heic-sequence, image/heif, image/heif-sequence, image/hej2k, image/hsj2, image/ief, image/jls, image/jp2, image/jpeg, image/jph, image/jphc, image/jpm, image/jpx, image/jxr, image/jxra, image/jxrs, image/jxs, image/jxsc, image/jxsi, image/jxss, image/ktx, image/naplps, image/pjpeg, image/png, image/prs.btif, image/prs.pti, image/pwg-raster, image/sgi, image/svg+xml, image/t38, image/tiff, image/tiff-fx, image/vnd.adobe.photoshop, image/vnd.airzip.accelerator.azv, image/vnd.cns.inf2, image/vnd.dece.graphic, image/vnd.djvu, image/vnd.dvb.subtitle, image/vnd.dwg, image/vnd.dxf, image/vnd.fastbidsheet, image/vnd.fpx, image/vnd.fst, image/vnd.fujixerox.edmics-mmr, image/vnd.fujixerox.edmics-rlc, image/vnd.globalgraphics.pgb, image/vnd.microsoft.icon, image/vnd.mix, image/vnd.mozilla.apng, image/vnd.ms-dds, image/vnd.ms-modi, image/vnd.ms-photo, image/vnd.net-fpx, image/vnd.radiance, image/vnd.sealed.png, image/vnd.sealedmedia.softseal.gif, image/vnd.sealedmedia.softseal.jpg, image/vnd.svf, image/vnd.tencent.tap, image/vnd.valve.source.texture, image/vnd.wap.wbmp, image/vnd.xiff, image/vnd.zbrush.pcx, image/webp, image/wmf, image/x-3ds, image/x-cmu-raster, image/x-cmx, image/x-freehand, image/x-icon, image/x-jng, image/x-mrsid-image, image/x-ms-bmp, image/x-pcx, image/x-pict, image/x-portable-anymap, image/x-portable-bitmap, image/x-portable-graymap, image/x-portable-pixmap, image/x-rgb, image/x-tga, image/x-xbitmap, image/x-xcf, image/x-xpixmap, image/x-xwindowdump, message/cpim, message/delivery-status, message/disposition-notification, message/external-body, message/feedback-report, message/global, message/global-delivery-status, message/global-disposition-notification, message/global-headers, message/http, message/imdn+xml, message/news, message/partial, message/rfc822, message/s-http, message/sip, message/sipfrag, message/tracking-status, message/vnd.si.simp, message/vnd.wfa.wsc, model/3mf, model/gltf+json, model/gltf-binary, model/iges, model/mesh, model/mtl, model/obj, model/stl, model/vnd.collada+xml, model/vnd.dwf, model/vnd.flatland.3dml, model/vnd.gdl, model/vnd.gs-gdl, model/vnd.gs.gdl, model/vnd.gtw, model/vnd.moml+xml, model/vnd.mts, model/vnd.opengex, model/vnd.parasolid.transmit.binary, model/vnd.parasolid.transmit.text, model/vnd.rosette.annotated-data-model, model/vnd.usdz+zip, model/vnd.valve.source.compiled-map, model/vnd.vtu, model/vrml, model/x3d+binary, model/x3d+fastinfoset, model/x3d+vrml, model/x3d+xml, model/x3d-vrml, multipart/alternative, multipart/appledouble, multipart/byteranges, multipart/digest, multipart/encrypted, multipart/form-data, multipart/header-set, multipart/mixed, multipart/multilingual, multipart/parallel, multipart/related, multipart/report, multipart/signed, multipart/vnd.bint.med-plus, multipart/voice-message, multipart/x-mixed-replace, text/1d-interleaved-parityfec, text/cache-manifest, text/calendar, text/calender, text/cmd, text/coffeescript, text/css, text/csv, text/csv-schema, text/directory, text/dns, text/ecmascript, text/encaprtp, text/enriched, text/flexfec, text/fwdred, text/grammar-ref-list, text/html, text/jade, text/javascript, text/jcr-cnd, text/jsx, text/less, text/markdown, text/mathml, text/mdx, text/mizar, text/n3, text/parameters, text/parityfec, text/plain, text/provenance-notation, text/prs.fallenstein.rst, text/prs.lines.tag, text/prs.prop.logic, text/raptorfec, text/red, text/rfc822-headers, text/richtext, text/rtf, text/rtp-enc-aescm128, text/rtploopback, text/rtx, text/sgml, text/shex, text/slim, text/strings, text/stylus, text/t140, text/tab-separated-values, text/troff, text/turtle, text/ulpfec, text/uri-list, text/vcard, text/vnd.a, text/vnd.abc, text/vnd.ascii-art, text/vnd.curl, text/vnd.curl.dcurl, text/vnd.curl.mcurl, text/vnd.curl.scurl, text/vnd.debian.copyright, text/vnd.dmclientscript, text/vnd.dvb.subtitle, text/vnd.esmertec.theme-descriptor, text/vnd.ficlab.flt, text/vnd.fly, text/vnd.fmi.flexstor, text/vnd.gml, text/vnd.graphviz, text/vnd.hgl, text/vnd.in3d.3dml, text/vnd.in3d.spot, text/vnd.iptc.newsml, text/vnd.iptc.nitf, text/vnd.latex-z, text/vnd.motorola.reflex, text/vnd.ms-mediapackage, text/vnd.net2phone.commcenter.command, text/vnd.radisys.msml-basic-layout, text/vnd.senx.warpscript, text/vnd.si.uricatalogue, text/vnd.sosi, text/vnd.sun.j2me.app-descriptor, text/vnd.trolltech.linguist, text/vnd.wap.si, text/vnd.wap.sl, text/vnd.wap.wml, text/vnd.wap.wmlscript, text/vtt, text/x-asm, text/x-c, text/x-component, text/x-fortran, text/x-gwt-rpc, text/x-handlebars-template, text/x-java-source, text/x-jquery-tmpl, text/x-lua, text/x-markdown, text/x-nfo, text/x-opml, text/x-org, text/x-pascal, text/x-processing, text/x-sass, text/x-scss, text/x-setext, text/x-sfv, text/x-suse-ymp, text/x-uuencode, text/x-vcalendar, text/x-vcard, text/xml, text/xml-external-parsed-entity, text/yaml, video/1d-interleaved-parityfec, video/3gpp, video/3gpp-tt, video/3gpp2, video/bmpeg, video/bt656, video/celb, video/dv, video/encaprtp, video/flexfec, video/h261, video/h263, video/h263-1998, video/h263-2000, video/h264, video/h264-rcdo, video/h264-svc, video/h265, video/iso.segment, video/jpeg, video/jpeg2000, video/jpm, video/mj2, video/mp1s, video/mp2p, video/mp2t, video/mp4, video/mp4v-es, video/mpeg, video/mpeg4-generic, video/mpv, video/nv, video/ogg, video/parityfec, video/pointer, video/quicktime, video/raptorfec, video/raw, video/rtp-enc-aescm128, video/rtploopback, video/rtx, video/smpte291, video/smpte292m, video/ulpfec, video/vc1, video/vc2, video/vnd.cctv, video/vnd.dece.hd, video/vnd.dece.mobile, video/vnd.dece.mp4, video/vnd.dece.pd, video/vnd.dece.sd, video/vnd.dece.video, video/vnd.directv.mpeg, video/vnd.directv.mpeg-tts, video/vnd.dlna.mpeg-tts, video/vnd.dvb.file, video/vnd.fvt, video/vnd.hns.video, video/vnd.iptvforum.1dparityfec-1010, video/vnd.iptvforum.1dparityfec-2005, video/vnd.iptvforum.2dparityfec-1010, video/vnd.iptvforum.2dparityfec-2005, video/vnd.iptvforum.ttsavc, video/vnd.iptvforum.ttsmpeg2, video/vnd.motorola.video, video/vnd.motorola.videop, video/vnd.mpegurl, video/vnd.ms-playready.media.pyv, video/vnd.nokia.interleaved-multimedia, video/vnd.nokia.mp4vr, video/vnd.nokia.videovoip, video/vnd.objectvideo, video/vnd.radgamettools.bink, video/vnd.radgamettools.smacker, video/vnd.sealed.mpeg1, video/vnd.sealed.mpeg4, video/vnd.sealed.swf, video/vnd.sealedmedia.softseal.mov, video/vnd.uvvu.mp4, video/vnd.vivo, video/vnd.youtube.yt, video/vp8, video/webm, video/x-f4v, video/x-fli, video/x-flv, video/x-m4v, video/x-matroska, video/x-mng, video/x-ms-asf, video/x-ms-vob, video/x-ms-wm, video/x-ms-wmv, video/x-ms-wmx, video/x-ms-wvx, video/x-msvideo, video/x-sgi-movie, video/x-smv, x-conference/x-cooltalk, x-shader/x-fragment, x-shader/x-vertex, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"application/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"application/3gpdash-qoe-report+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/3gpp-ims+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/a2l\":{\"source\":\"iana\"},\"application/activemessage\":{\"source\":\"iana\"},\"application/activity+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-costmap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-costmapfilter+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-directory+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointcost+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointcostparams+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointprop+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-endpointpropparams+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-error+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-networkmap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-networkmapfilter+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-updatestreamcontrol+json\":{\"source\":\"iana\",\"compressible\":true},\"application/alto-updatestreamparams+json\":{\"source\":\"iana\",\"compressible\":true},\"application/aml\":{\"source\":\"iana\"},\"application/andrew-inset\":{\"source\":\"iana\",\"extensions\":[\"ez\"]},\"application/applefile\":{\"source\":\"iana\"},\"application/applixware\":{\"source\":\"apache\",\"extensions\":[\"aw\"]},\"application/atf\":{\"source\":\"iana\"},\"application/atfx\":{\"source\":\"iana\"},\"application/atom+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atom\"]},\"application/atomcat+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atomcat\"]},\"application/atomdeleted+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atomdeleted\"]},\"application/atomicmail\":{\"source\":\"iana\"},\"application/atomsvc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"atomsvc\"]},\"application/atsc-dwd+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dwd\"]},\"application/atsc-dynamic-event-message\":{\"source\":\"iana\"},\"application/atsc-held+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"held\"]},\"application/atsc-rdt+json\":{\"source\":\"iana\",\"compressible\":true},\"application/atsc-rsat+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rsat\"]},\"application/atxml\":{\"source\":\"iana\"},\"application/auth-policy+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/bacnet-xdd+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/batch-smtp\":{\"source\":\"iana\"},\"application/bdoc\":{\"compressible\":false,\"extensions\":[\"bdoc\"]},\"application/beep+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/calendar+json\":{\"source\":\"iana\",\"compressible\":true},\"application/calendar+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xcs\"]},\"application/call-completion\":{\"source\":\"iana\"},\"application/cals-1840\":{\"source\":\"iana\"},\"application/cap+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/cbor\":{\"source\":\"iana\"},\"application/cbor-seq\":{\"source\":\"iana\"},\"application/cccex\":{\"source\":\"iana\"},\"application/ccmp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ccxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ccxml\"]},\"application/cdfx+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"cdfx\"]},\"application/cdmi-capability\":{\"source\":\"iana\",\"extensions\":[\"cdmia\"]},\"application/cdmi-container\":{\"source\":\"iana\",\"extensions\":[\"cdmic\"]},\"application/cdmi-domain\":{\"source\":\"iana\",\"extensions\":[\"cdmid\"]},\"application/cdmi-object\":{\"source\":\"iana\",\"extensions\":[\"cdmio\"]},\"application/cdmi-queue\":{\"source\":\"iana\",\"extensions\":[\"cdmiq\"]},\"application/cdni\":{\"source\":\"iana\"},\"application/cea\":{\"source\":\"iana\"},\"application/cea-2018+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cellml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cfw\":{\"source\":\"iana\"},\"application/clue+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/clue_info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cms\":{\"source\":\"iana\"},\"application/cnrp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/coap-group+json\":{\"source\":\"iana\",\"compressible\":true},\"application/coap-payload\":{\"source\":\"iana\"},\"application/commonground\":{\"source\":\"iana\"},\"application/conference-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cose\":{\"source\":\"iana\"},\"application/cose-key\":{\"source\":\"iana\"},\"application/cose-key-set\":{\"source\":\"iana\"},\"application/cpl+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/csrattrs\":{\"source\":\"iana\"},\"application/csta+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/cstadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/csvm+json\":{\"source\":\"iana\",\"compressible\":true},\"application/cu-seeme\":{\"source\":\"apache\",\"extensions\":[\"cu\"]},\"application/cwt\":{\"source\":\"iana\"},\"application/cybercash\":{\"source\":\"iana\"},\"application/dart\":{\"compressible\":true},\"application/dash+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mpd\"]},\"application/dashdelta\":{\"source\":\"iana\"},\"application/davmount+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"davmount\"]},\"application/dca-rft\":{\"source\":\"iana\"},\"application/dcd\":{\"source\":\"iana\"},\"application/dec-dx\":{\"source\":\"iana\"},\"application/dialog-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dicom\":{\"source\":\"iana\"},\"application/dicom+json\":{\"source\":\"iana\",\"compressible\":true},\"application/dicom+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dii\":{\"source\":\"iana\"},\"application/dit\":{\"source\":\"iana\"},\"application/dns\":{\"source\":\"iana\"},\"application/dns+json\":{\"source\":\"iana\",\"compressible\":true},\"application/dns-message\":{\"source\":\"iana\"},\"application/docbook+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"dbk\"]},\"application/dots+cbor\":{\"source\":\"iana\"},\"application/dskpp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/dssc+der\":{\"source\":\"iana\",\"extensions\":[\"dssc\"]},\"application/dssc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdssc\"]},\"application/dvcs\":{\"source\":\"iana\"},\"application/ecmascript\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ecma\",\"es\"]},\"application/edi-consent\":{\"source\":\"iana\"},\"application/edi-x12\":{\"source\":\"iana\",\"compressible\":false},\"application/edifact\":{\"source\":\"iana\",\"compressible\":false},\"application/efi\":{\"source\":\"iana\"},\"application/emergencycalldata.comment+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.deviceinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.ecall.msd\":{\"source\":\"iana\"},\"application/emergencycalldata.providerinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.serviceinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.subscriberinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emergencycalldata.veds+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/emma+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"emma\"]},\"application/emotionml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"emotionml\"]},\"application/encaprtp\":{\"source\":\"iana\"},\"application/epp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/epub+zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"epub\"]},\"application/eshop\":{\"source\":\"iana\"},\"application/exi\":{\"source\":\"iana\",\"extensions\":[\"exi\"]},\"application/expect-ct-report+json\":{\"source\":\"iana\",\"compressible\":true},\"application/fastinfoset\":{\"source\":\"iana\"},\"application/fastsoap\":{\"source\":\"iana\"},\"application/fdt+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"fdt\"]},\"application/fhir+json\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/fhir+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/fido.trusted-apps+json\":{\"compressible\":true},\"application/fits\":{\"source\":\"iana\"},\"application/flexfec\":{\"source\":\"iana\"},\"application/font-sfnt\":{\"source\":\"iana\"},\"application/font-tdpfr\":{\"source\":\"iana\",\"extensions\":[\"pfr\"]},\"application/font-woff\":{\"source\":\"iana\",\"compressible\":false},\"application/framework-attributes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/geo+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"geojson\"]},\"application/geo+json-seq\":{\"source\":\"iana\"},\"application/geopackage+sqlite3\":{\"source\":\"iana\"},\"application/geoxacml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/gltf-buffer\":{\"source\":\"iana\"},\"application/gml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"gml\"]},\"application/gpx+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"gpx\"]},\"application/gxf\":{\"source\":\"apache\",\"extensions\":[\"gxf\"]},\"application/gzip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"gz\"]},\"application/h224\":{\"source\":\"iana\"},\"application/held+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/hjson\":{\"extensions\":[\"hjson\"]},\"application/http\":{\"source\":\"iana\"},\"application/hyperstudio\":{\"source\":\"iana\",\"extensions\":[\"stk\"]},\"application/ibe-key-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ibe-pkg-reply+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ibe-pp-data\":{\"source\":\"iana\"},\"application/iges\":{\"source\":\"iana\"},\"application/im-iscomposing+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/index\":{\"source\":\"iana\"},\"application/index.cmd\":{\"source\":\"iana\"},\"application/index.obj\":{\"source\":\"iana\"},\"application/index.response\":{\"source\":\"iana\"},\"application/index.vnd\":{\"source\":\"iana\"},\"application/inkml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ink\",\"inkml\"]},\"application/iotp\":{\"source\":\"iana\"},\"application/ipfix\":{\"source\":\"iana\",\"extensions\":[\"ipfix\"]},\"application/ipp\":{\"source\":\"iana\"},\"application/isup\":{\"source\":\"iana\"},\"application/its+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"its\"]},\"application/java-archive\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"jar\",\"war\",\"ear\"]},\"application/java-serialized-object\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"ser\"]},\"application/java-vm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"class\"]},\"application/javascript\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"js\",\"mjs\"]},\"application/jf2feed+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jose\":{\"source\":\"iana\"},\"application/jose+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jrd+json\":{\"source\":\"iana\",\"compressible\":true},\"application/json\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"json\",\"map\"]},\"application/json-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/json-seq\":{\"source\":\"iana\"},\"application/json5\":{\"extensions\":[\"json5\"]},\"application/jsonml+json\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"jsonml\"]},\"application/jwk+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jwk-set+json\":{\"source\":\"iana\",\"compressible\":true},\"application/jwt\":{\"source\":\"iana\"},\"application/kpml-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/kpml-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/ld+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"jsonld\"]},\"application/lgr+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lgr\"]},\"application/link-format\":{\"source\":\"iana\"},\"application/load-control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/lost+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lostxml\"]},\"application/lostsync+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/lpf+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/lxf\":{\"source\":\"iana\"},\"application/mac-binhex40\":{\"source\":\"iana\",\"extensions\":[\"hqx\"]},\"application/mac-compactpro\":{\"source\":\"apache\",\"extensions\":[\"cpt\"]},\"application/macwriteii\":{\"source\":\"iana\"},\"application/mads+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mads\"]},\"application/manifest+json\":{\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"webmanifest\"]},\"application/marc\":{\"source\":\"iana\",\"extensions\":[\"mrc\"]},\"application/marcxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mrcx\"]},\"application/mathematica\":{\"source\":\"iana\",\"extensions\":[\"ma\",\"nb\",\"mb\"]},\"application/mathml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mathml\"]},\"application/mathml-content+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mathml-presentation+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-associated-procedure-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-deregister+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-envelope+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-msk+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-msk-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-protection-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-reception-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-register+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-register-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-schedule+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbms-user-service-description+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mbox\":{\"source\":\"iana\",\"extensions\":[\"mbox\"]},\"application/media-policy-dataset+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/media_control+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/mediaservercontrol+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mscml\"]},\"application/merge-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/metalink+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"metalink\"]},\"application/metalink4+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"meta4\"]},\"application/mets+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mets\"]},\"application/mf4\":{\"source\":\"iana\"},\"application/mikey\":{\"source\":\"iana\"},\"application/mipc\":{\"source\":\"iana\"},\"application/mmt-aei+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"maei\"]},\"application/mmt-usd+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"musd\"]},\"application/mods+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mods\"]},\"application/moss-keys\":{\"source\":\"iana\"},\"application/moss-signature\":{\"source\":\"iana\"},\"application/mosskey-data\":{\"source\":\"iana\"},\"application/mosskey-request\":{\"source\":\"iana\"},\"application/mp21\":{\"source\":\"iana\",\"extensions\":[\"m21\",\"mp21\"]},\"application/mp4\":{\"source\":\"iana\",\"extensions\":[\"mp4s\",\"m4p\"]},\"application/mpeg4-generic\":{\"source\":\"iana\"},\"application/mpeg4-iod\":{\"source\":\"iana\"},\"application/mpeg4-iod-xmt\":{\"source\":\"iana\"},\"application/mrb-consumer+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdf\"]},\"application/mrb-publish+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdf\"]},\"application/msc-ivr+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/msc-mixer+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/msword\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"doc\",\"dot\"]},\"application/mud+json\":{\"source\":\"iana\",\"compressible\":true},\"application/multipart-core\":{\"source\":\"iana\"},\"application/mxf\":{\"source\":\"iana\",\"extensions\":[\"mxf\"]},\"application/n-quads\":{\"source\":\"iana\",\"extensions\":[\"nq\"]},\"application/n-triples\":{\"source\":\"iana\",\"extensions\":[\"nt\"]},\"application/nasdata\":{\"source\":\"iana\"},\"application/news-checkgroups\":{\"source\":\"iana\",\"charset\":\"US-ASCII\"},\"application/news-groupinfo\":{\"source\":\"iana\",\"charset\":\"US-ASCII\"},\"application/news-transmission\":{\"source\":\"iana\"},\"application/nlsml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/node\":{\"source\":\"iana\",\"extensions\":[\"cjs\"]},\"application/nss\":{\"source\":\"iana\"},\"application/ocsp-request\":{\"source\":\"iana\"},\"application/ocsp-response\":{\"source\":\"iana\"},\"application/octet-stream\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"bin\",\"dms\",\"lrf\",\"mar\",\"so\",\"dist\",\"distz\",\"pkg\",\"bpk\",\"dump\",\"elc\",\"deploy\",\"exe\",\"dll\",\"deb\",\"dmg\",\"iso\",\"img\",\"msi\",\"msp\",\"msm\",\"buffer\"]},\"application/oda\":{\"source\":\"iana\",\"extensions\":[\"oda\"]},\"application/odm+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/odx\":{\"source\":\"iana\"},\"application/oebps-package+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"opf\"]},\"application/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ogx\"]},\"application/omdoc+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"omdoc\"]},\"application/onenote\":{\"source\":\"apache\",\"extensions\":[\"onetoc\",\"onetoc2\",\"onetmp\",\"onepkg\"]},\"application/oscore\":{\"source\":\"iana\"},\"application/oxps\":{\"source\":\"iana\",\"extensions\":[\"oxps\"]},\"application/p2p-overlay+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"relo\"]},\"application/parityfec\":{\"source\":\"iana\"},\"application/passport\":{\"source\":\"iana\"},\"application/patch-ops-error+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xer\"]},\"application/pdf\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pdf\"]},\"application/pdx\":{\"source\":\"iana\"},\"application/pem-certificate-chain\":{\"source\":\"iana\"},\"application/pgp-encrypted\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pgp\"]},\"application/pgp-keys\":{\"source\":\"iana\"},\"application/pgp-signature\":{\"source\":\"iana\",\"extensions\":[\"asc\",\"sig\"]},\"application/pics-rules\":{\"source\":\"apache\",\"extensions\":[\"prf\"]},\"application/pidf+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/pidf-diff+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/pkcs10\":{\"source\":\"iana\",\"extensions\":[\"p10\"]},\"application/pkcs12\":{\"source\":\"iana\"},\"application/pkcs7-mime\":{\"source\":\"iana\",\"extensions\":[\"p7m\",\"p7c\"]},\"application/pkcs7-signature\":{\"source\":\"iana\",\"extensions\":[\"p7s\"]},\"application/pkcs8\":{\"source\":\"iana\",\"extensions\":[\"p8\"]},\"application/pkcs8-encrypted\":{\"source\":\"iana\"},\"application/pkix-attr-cert\":{\"source\":\"iana\",\"extensions\":[\"ac\"]},\"application/pkix-cert\":{\"source\":\"iana\",\"extensions\":[\"cer\"]},\"application/pkix-crl\":{\"source\":\"iana\",\"extensions\":[\"crl\"]},\"application/pkix-pkipath\":{\"source\":\"iana\",\"extensions\":[\"pkipath\"]},\"application/pkixcmp\":{\"source\":\"iana\",\"extensions\":[\"pki\"]},\"application/pls+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"pls\"]},\"application/poc-settings+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/postscript\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ai\",\"eps\",\"ps\"]},\"application/ppsp-tracker+json\":{\"source\":\"iana\",\"compressible\":true},\"application/problem+json\":{\"source\":\"iana\",\"compressible\":true},\"application/problem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/provenance+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"provx\"]},\"application/prs.alvestrand.titrax-sheet\":{\"source\":\"iana\"},\"application/prs.cww\":{\"source\":\"iana\",\"extensions\":[\"cww\"]},\"application/prs.hpub+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/prs.nprend\":{\"source\":\"iana\"},\"application/prs.plucker\":{\"source\":\"iana\"},\"application/prs.rdf-xml-crypt\":{\"source\":\"iana\"},\"application/prs.xsf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/pskc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"pskcxml\"]},\"application/pvd+json\":{\"source\":\"iana\",\"compressible\":true},\"application/qsig\":{\"source\":\"iana\"},\"application/raml+yaml\":{\"compressible\":true,\"extensions\":[\"raml\"]},\"application/raptorfec\":{\"source\":\"iana\"},\"application/rdap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/rdf+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rdf\",\"owl\"]},\"application/reginfo+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rif\"]},\"application/relax-ng-compact-syntax\":{\"source\":\"iana\",\"extensions\":[\"rnc\"]},\"application/remote-printing\":{\"source\":\"iana\"},\"application/reputon+json\":{\"source\":\"iana\",\"compressible\":true},\"application/resource-lists+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rl\"]},\"application/resource-lists-diff+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rld\"]},\"application/rfc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/riscos\":{\"source\":\"iana\"},\"application/rlmi+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/rls-services+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rs\"]},\"application/route-apd+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rapd\"]},\"application/route-s-tsid+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sls\"]},\"application/route-usd+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rusd\"]},\"application/rpki-ghostbusters\":{\"source\":\"iana\",\"extensions\":[\"gbr\"]},\"application/rpki-manifest\":{\"source\":\"iana\",\"extensions\":[\"mft\"]},\"application/rpki-publication\":{\"source\":\"iana\"},\"application/rpki-roa\":{\"source\":\"iana\",\"extensions\":[\"roa\"]},\"application/rpki-updown\":{\"source\":\"iana\"},\"application/rsd+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"rsd\"]},\"application/rss+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"rss\"]},\"application/rtf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtf\"]},\"application/rtploopback\":{\"source\":\"iana\"},\"application/rtx\":{\"source\":\"iana\"},\"application/samlassertion+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/samlmetadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sbe\":{\"source\":\"iana\"},\"application/sbml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sbml\"]},\"application/scaip+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/scim+json\":{\"source\":\"iana\",\"compressible\":true},\"application/scvp-cv-request\":{\"source\":\"iana\",\"extensions\":[\"scq\"]},\"application/scvp-cv-response\":{\"source\":\"iana\",\"extensions\":[\"scs\"]},\"application/scvp-vp-request\":{\"source\":\"iana\",\"extensions\":[\"spq\"]},\"application/scvp-vp-response\":{\"source\":\"iana\",\"extensions\":[\"spp\"]},\"application/sdp\":{\"source\":\"iana\",\"extensions\":[\"sdp\"]},\"application/secevent+jwt\":{\"source\":\"iana\"},\"application/senml+cbor\":{\"source\":\"iana\"},\"application/senml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/senml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"senmlx\"]},\"application/senml-etch+cbor\":{\"source\":\"iana\"},\"application/senml-etch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/senml-exi\":{\"source\":\"iana\"},\"application/sensml+cbor\":{\"source\":\"iana\"},\"application/sensml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/sensml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sensmlx\"]},\"application/sensml-exi\":{\"source\":\"iana\"},\"application/sep+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sep-exi\":{\"source\":\"iana\"},\"application/session-info\":{\"source\":\"iana\"},\"application/set-payment\":{\"source\":\"iana\"},\"application/set-payment-initiation\":{\"source\":\"iana\",\"extensions\":[\"setpay\"]},\"application/set-registration\":{\"source\":\"iana\"},\"application/set-registration-initiation\":{\"source\":\"iana\",\"extensions\":[\"setreg\"]},\"application/sgml\":{\"source\":\"iana\"},\"application/sgml-open-catalog\":{\"source\":\"iana\"},\"application/shf+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"shf\"]},\"application/sieve\":{\"source\":\"iana\",\"extensions\":[\"siv\",\"sieve\"]},\"application/simple-filter+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/simple-message-summary\":{\"source\":\"iana\"},\"application/simplesymbolcontainer\":{\"source\":\"iana\"},\"application/sipc\":{\"source\":\"iana\"},\"application/slate\":{\"source\":\"iana\"},\"application/smil\":{\"source\":\"iana\"},\"application/smil+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"smi\",\"smil\"]},\"application/smpte336m\":{\"source\":\"iana\"},\"application/soap+fastinfoset\":{\"source\":\"iana\"},\"application/soap+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sparql-query\":{\"source\":\"iana\",\"extensions\":[\"rq\"]},\"application/sparql-results+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"srx\"]},\"application/spirits-event+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/sql\":{\"source\":\"iana\"},\"application/srgs\":{\"source\":\"iana\",\"extensions\":[\"gram\"]},\"application/srgs+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"grxml\"]},\"application/sru+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sru\"]},\"application/ssdl+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ssdl\"]},\"application/ssml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ssml\"]},\"application/stix+json\":{\"source\":\"iana\",\"compressible\":true},\"application/swid+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"swidtag\"]},\"application/tamp-apex-update\":{\"source\":\"iana\"},\"application/tamp-apex-update-confirm\":{\"source\":\"iana\"},\"application/tamp-community-update\":{\"source\":\"iana\"},\"application/tamp-community-update-confirm\":{\"source\":\"iana\"},\"application/tamp-error\":{\"source\":\"iana\"},\"application/tamp-sequence-adjust\":{\"source\":\"iana\"},\"application/tamp-sequence-adjust-confirm\":{\"source\":\"iana\"},\"application/tamp-status-query\":{\"source\":\"iana\"},\"application/tamp-status-response\":{\"source\":\"iana\"},\"application/tamp-update\":{\"source\":\"iana\"},\"application/tamp-update-confirm\":{\"source\":\"iana\"},\"application/tar\":{\"compressible\":true},\"application/taxii+json\":{\"source\":\"iana\",\"compressible\":true},\"application/td+json\":{\"source\":\"iana\",\"compressible\":true},\"application/tei+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tei\",\"teicorpus\"]},\"application/tetra_isi\":{\"source\":\"iana\"},\"application/thraud+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tfi\"]},\"application/timestamp-query\":{\"source\":\"iana\"},\"application/timestamp-reply\":{\"source\":\"iana\"},\"application/timestamped-data\":{\"source\":\"iana\",\"extensions\":[\"tsd\"]},\"application/tlsrpt+gzip\":{\"source\":\"iana\"},\"application/tlsrpt+json\":{\"source\":\"iana\",\"compressible\":true},\"application/tnauthlist\":{\"source\":\"iana\"},\"application/toml\":{\"compressible\":true,\"extensions\":[\"toml\"]},\"application/trickle-ice-sdpfrag\":{\"source\":\"iana\"},\"application/trig\":{\"source\":\"iana\"},\"application/ttml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ttml\"]},\"application/tve-trigger\":{\"source\":\"iana\"},\"application/tzif\":{\"source\":\"iana\"},\"application/tzif-leap\":{\"source\":\"iana\"},\"application/ulpfec\":{\"source\":\"iana\"},\"application/urc-grpsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/urc-ressheet+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rsheet\"]},\"application/urc-targetdesc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/urc-uisocketdesc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vcard+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vcard+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vemmi\":{\"source\":\"iana\"},\"application/vividence.scriptfile\":{\"source\":\"apache\"},\"application/vnd.1000minds.decision-model+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"1km\"]},\"application/vnd.3gpp-prose+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp-prose-pc3ch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp-v2x-local-service-information\":{\"source\":\"iana\"},\"application/vnd.3gpp.access-transfer-events+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.bsf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.gmop+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mc-signalling-ear\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-payload\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-signalling\":{\"source\":\"iana\"},\"application/vnd.3gpp.mcdata-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcdata-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-floor-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-location-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-mbms-usage-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-signed+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-ue-init-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcptt-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-affiliation-command+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-affiliation-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-location-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-mbms-usage-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-service-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-transmission-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-ue-config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mcvideo-user-profile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.mid-call+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.pic-bw-large\":{\"source\":\"iana\",\"extensions\":[\"plb\"]},\"application/vnd.3gpp.pic-bw-small\":{\"source\":\"iana\",\"extensions\":[\"psb\"]},\"application/vnd.3gpp.pic-bw-var\":{\"source\":\"iana\",\"extensions\":[\"pvb\"]},\"application/vnd.3gpp.sms\":{\"source\":\"iana\"},\"application/vnd.3gpp.sms+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.srvcc-ext+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.srvcc-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.state-and-event-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp.ussd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp2.bcmcsinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.3gpp2.sms\":{\"source\":\"iana\"},\"application/vnd.3gpp2.tcap\":{\"source\":\"iana\",\"extensions\":[\"tcap\"]},\"application/vnd.3lightssoftware.imagescal\":{\"source\":\"iana\"},\"application/vnd.3m.post-it-notes\":{\"source\":\"iana\",\"extensions\":[\"pwn\"]},\"application/vnd.accpac.simply.aso\":{\"source\":\"iana\",\"extensions\":[\"aso\"]},\"application/vnd.accpac.simply.imp\":{\"source\":\"iana\",\"extensions\":[\"imp\"]},\"application/vnd.acucobol\":{\"source\":\"iana\",\"extensions\":[\"acu\"]},\"application/vnd.acucorp\":{\"source\":\"iana\",\"extensions\":[\"atc\",\"acutc\"]},\"application/vnd.adobe.air-application-installer-package+zip\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"air\"]},\"application/vnd.adobe.flash.movie\":{\"source\":\"iana\"},\"application/vnd.adobe.formscentral.fcdt\":{\"source\":\"iana\",\"extensions\":[\"fcdt\"]},\"application/vnd.adobe.fxp\":{\"source\":\"iana\",\"extensions\":[\"fxp\",\"fxpl\"]},\"application/vnd.adobe.partial-upload\":{\"source\":\"iana\"},\"application/vnd.adobe.xdp+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdp\"]},\"application/vnd.adobe.xfdf\":{\"source\":\"iana\",\"extensions\":[\"xfdf\"]},\"application/vnd.aether.imp\":{\"source\":\"iana\"},\"application/vnd.afpc.afplinedata\":{\"source\":\"iana\"},\"application/vnd.afpc.afplinedata-pagedef\":{\"source\":\"iana\"},\"application/vnd.afpc.foca-charset\":{\"source\":\"iana\"},\"application/vnd.afpc.foca-codedfont\":{\"source\":\"iana\"},\"application/vnd.afpc.foca-codepage\":{\"source\":\"iana\"},\"application/vnd.afpc.modca\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-formdef\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-mediummap\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-objectcontainer\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-overlay\":{\"source\":\"iana\"},\"application/vnd.afpc.modca-pagesegment\":{\"source\":\"iana\"},\"application/vnd.ah-barcode\":{\"source\":\"iana\"},\"application/vnd.ahead.space\":{\"source\":\"iana\",\"extensions\":[\"ahead\"]},\"application/vnd.airzip.filesecure.azf\":{\"source\":\"iana\",\"extensions\":[\"azf\"]},\"application/vnd.airzip.filesecure.azs\":{\"source\":\"iana\",\"extensions\":[\"azs\"]},\"application/vnd.amadeus+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.amazon.ebook\":{\"source\":\"apache\",\"extensions\":[\"azw\"]},\"application/vnd.amazon.mobi8-ebook\":{\"source\":\"iana\"},\"application/vnd.americandynamics.acc\":{\"source\":\"iana\",\"extensions\":[\"acc\"]},\"application/vnd.amiga.ami\":{\"source\":\"iana\",\"extensions\":[\"ami\"]},\"application/vnd.amundsen.maze+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.android.ota\":{\"source\":\"iana\"},\"application/vnd.android.package-archive\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"apk\"]},\"application/vnd.anki\":{\"source\":\"iana\"},\"application/vnd.anser-web-certificate-issue-initiation\":{\"source\":\"iana\",\"extensions\":[\"cii\"]},\"application/vnd.anser-web-funds-transfer-initiation\":{\"source\":\"apache\",\"extensions\":[\"fti\"]},\"application/vnd.antix.game-component\":{\"source\":\"iana\",\"extensions\":[\"atx\"]},\"application/vnd.apache.thrift.binary\":{\"source\":\"iana\"},\"application/vnd.apache.thrift.compact\":{\"source\":\"iana\"},\"application/vnd.apache.thrift.json\":{\"source\":\"iana\"},\"application/vnd.api+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.aplextor.warrp+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.apothekende.reservation+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.apple.installer+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mpkg\"]},\"application/vnd.apple.keynote\":{\"source\":\"iana\",\"extensions\":[\"keynote\"]},\"application/vnd.apple.mpegurl\":{\"source\":\"iana\",\"extensions\":[\"m3u8\"]},\"application/vnd.apple.numbers\":{\"source\":\"iana\",\"extensions\":[\"numbers\"]},\"application/vnd.apple.pages\":{\"source\":\"iana\",\"extensions\":[\"pages\"]},\"application/vnd.apple.pkpass\":{\"compressible\":false,\"extensions\":[\"pkpass\"]},\"application/vnd.arastra.swi\":{\"source\":\"iana\"},\"application/vnd.aristanetworks.swi\":{\"source\":\"iana\",\"extensions\":[\"swi\"]},\"application/vnd.artisan+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.artsquare\":{\"source\":\"iana\"},\"application/vnd.astraea-software.iota\":{\"source\":\"iana\",\"extensions\":[\"iota\"]},\"application/vnd.audiograph\":{\"source\":\"iana\",\"extensions\":[\"aep\"]},\"application/vnd.autopackage\":{\"source\":\"iana\"},\"application/vnd.avalon+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.avistar+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.balsamiq.bmml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"bmml\"]},\"application/vnd.balsamiq.bmpr\":{\"source\":\"iana\"},\"application/vnd.banana-accounting\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.error\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.msg\":{\"source\":\"iana\"},\"application/vnd.bbf.usp.msg+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.bekitzur-stech+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.bint.med-content\":{\"source\":\"iana\"},\"application/vnd.biopax.rdf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.blink-idb-value-wrapper\":{\"source\":\"iana\"},\"application/vnd.blueice.multipass\":{\"source\":\"iana\",\"extensions\":[\"mpm\"]},\"application/vnd.bluetooth.ep.oob\":{\"source\":\"iana\"},\"application/vnd.bluetooth.le.oob\":{\"source\":\"iana\"},\"application/vnd.bmi\":{\"source\":\"iana\",\"extensions\":[\"bmi\"]},\"application/vnd.bpf\":{\"source\":\"iana\"},\"application/vnd.bpf3\":{\"source\":\"iana\"},\"application/vnd.businessobjects\":{\"source\":\"iana\",\"extensions\":[\"rep\"]},\"application/vnd.byu.uapi+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cab-jscript\":{\"source\":\"iana\"},\"application/vnd.canon-cpdl\":{\"source\":\"iana\"},\"application/vnd.canon-lips\":{\"source\":\"iana\"},\"application/vnd.capasystems-pg+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cendio.thinlinc.clientconf\":{\"source\":\"iana\"},\"application/vnd.century-systems.tcp_stream\":{\"source\":\"iana\"},\"application/vnd.chemdraw+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"cdxml\"]},\"application/vnd.chess-pgn\":{\"source\":\"iana\"},\"application/vnd.chipnuts.karaoke-mmd\":{\"source\":\"iana\",\"extensions\":[\"mmd\"]},\"application/vnd.ciedi\":{\"source\":\"iana\"},\"application/vnd.cinderella\":{\"source\":\"iana\",\"extensions\":[\"cdy\"]},\"application/vnd.cirpack.isdn-ext\":{\"source\":\"iana\"},\"application/vnd.citationstyles.style+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"csl\"]},\"application/vnd.claymore\":{\"source\":\"iana\",\"extensions\":[\"cla\"]},\"application/vnd.cloanto.rp9\":{\"source\":\"iana\",\"extensions\":[\"rp9\"]},\"application/vnd.clonk.c4group\":{\"source\":\"iana\",\"extensions\":[\"c4g\",\"c4d\",\"c4f\",\"c4p\",\"c4u\"]},\"application/vnd.cluetrust.cartomobile-config\":{\"source\":\"iana\",\"extensions\":[\"c11amc\"]},\"application/vnd.cluetrust.cartomobile-config-pkg\":{\"source\":\"iana\",\"extensions\":[\"c11amz\"]},\"application/vnd.coffeescript\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.document\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.document-template\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.presentation\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.presentation-template\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.spreadsheet\":{\"source\":\"iana\"},\"application/vnd.collabio.xodocuments.spreadsheet-template\":{\"source\":\"iana\"},\"application/vnd.collection+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.collection.doc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.collection.next+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.comicbook+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.comicbook-rar\":{\"source\":\"iana\"},\"application/vnd.commerce-battelle\":{\"source\":\"iana\"},\"application/vnd.commonspace\":{\"source\":\"iana\",\"extensions\":[\"csp\"]},\"application/vnd.contact.cmsg\":{\"source\":\"iana\",\"extensions\":[\"cdbcmsg\"]},\"application/vnd.coreos.ignition+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cosmocaller\":{\"source\":\"iana\",\"extensions\":[\"cmc\"]},\"application/vnd.crick.clicker\":{\"source\":\"iana\",\"extensions\":[\"clkx\"]},\"application/vnd.crick.clicker.keyboard\":{\"source\":\"iana\",\"extensions\":[\"clkk\"]},\"application/vnd.crick.clicker.palette\":{\"source\":\"iana\",\"extensions\":[\"clkp\"]},\"application/vnd.crick.clicker.template\":{\"source\":\"iana\",\"extensions\":[\"clkt\"]},\"application/vnd.crick.clicker.wordbank\":{\"source\":\"iana\",\"extensions\":[\"clkw\"]},\"application/vnd.criticaltools.wbs+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wbs\"]},\"application/vnd.cryptii.pipe+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.crypto-shade-file\":{\"source\":\"iana\"},\"application/vnd.ctc-posml\":{\"source\":\"iana\",\"extensions\":[\"pml\"]},\"application/vnd.ctct.ws+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cups-pdf\":{\"source\":\"iana\"},\"application/vnd.cups-postscript\":{\"source\":\"iana\"},\"application/vnd.cups-ppd\":{\"source\":\"iana\",\"extensions\":[\"ppd\"]},\"application/vnd.cups-raster\":{\"source\":\"iana\"},\"application/vnd.cups-raw\":{\"source\":\"iana\"},\"application/vnd.curl\":{\"source\":\"iana\"},\"application/vnd.curl.car\":{\"source\":\"apache\",\"extensions\":[\"car\"]},\"application/vnd.curl.pcurl\":{\"source\":\"apache\",\"extensions\":[\"pcurl\"]},\"application/vnd.cyan.dean.root+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.cybank\":{\"source\":\"iana\"},\"application/vnd.d2l.coursepackage1p0+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.dart\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dart\"]},\"application/vnd.data-vision.rdz\":{\"source\":\"iana\",\"extensions\":[\"rdz\"]},\"application/vnd.datapackage+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dataresource+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dbf\":{\"source\":\"iana\"},\"application/vnd.debian.binary-package\":{\"source\":\"iana\"},\"application/vnd.dece.data\":{\"source\":\"iana\",\"extensions\":[\"uvf\",\"uvvf\",\"uvd\",\"uvvd\"]},\"application/vnd.dece.ttml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uvt\",\"uvvt\"]},\"application/vnd.dece.unspecified\":{\"source\":\"iana\",\"extensions\":[\"uvx\",\"uvvx\"]},\"application/vnd.dece.zip\":{\"source\":\"iana\",\"extensions\":[\"uvz\",\"uvvz\"]},\"application/vnd.denovo.fcselayout-link\":{\"source\":\"iana\",\"extensions\":[\"fe_launch\"]},\"application/vnd.desmume.movie\":{\"source\":\"iana\"},\"application/vnd.dir-bi.plate-dl-nosuffix\":{\"source\":\"iana\"},\"application/vnd.dm.delegation+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dna\":{\"source\":\"iana\",\"extensions\":[\"dna\"]},\"application/vnd.document+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dolby.mlp\":{\"source\":\"apache\",\"extensions\":[\"mlp\"]},\"application/vnd.dolby.mobile.1\":{\"source\":\"iana\"},\"application/vnd.dolby.mobile.2\":{\"source\":\"iana\"},\"application/vnd.doremir.scorecloud-binary-document\":{\"source\":\"iana\"},\"application/vnd.dpgraph\":{\"source\":\"iana\",\"extensions\":[\"dpg\"]},\"application/vnd.dreamfactory\":{\"source\":\"iana\",\"extensions\":[\"dfac\"]},\"application/vnd.drive+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ds-keypoint\":{\"source\":\"apache\",\"extensions\":[\"kpxx\"]},\"application/vnd.dtg.local\":{\"source\":\"iana\"},\"application/vnd.dtg.local.flash\":{\"source\":\"iana\"},\"application/vnd.dtg.local.html\":{\"source\":\"iana\"},\"application/vnd.dvb.ait\":{\"source\":\"iana\",\"extensions\":[\"ait\"]},\"application/vnd.dvb.dvbisl+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.dvbj\":{\"source\":\"iana\"},\"application/vnd.dvb.esgcontainer\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcdftnotifaccess\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgaccess\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgaccess2\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcesgpdd\":{\"source\":\"iana\"},\"application/vnd.dvb.ipdcroaming\":{\"source\":\"iana\"},\"application/vnd.dvb.iptv.alfec-base\":{\"source\":\"iana\"},\"application/vnd.dvb.iptv.alfec-enhancement\":{\"source\":\"iana\"},\"application/vnd.dvb.notif-aggregate-root+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-container+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-generic+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-msglist+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-registration-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-ia-registration-response+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.notif-init+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.dvb.pfr\":{\"source\":\"iana\"},\"application/vnd.dvb.service\":{\"source\":\"iana\",\"extensions\":[\"svc\"]},\"application/vnd.dxr\":{\"source\":\"iana\"},\"application/vnd.dynageo\":{\"source\":\"iana\",\"extensions\":[\"geo\"]},\"application/vnd.dzr\":{\"source\":\"iana\"},\"application/vnd.easykaraoke.cdgdownload\":{\"source\":\"iana\"},\"application/vnd.ecdis-update\":{\"source\":\"iana\"},\"application/vnd.ecip.rlp\":{\"source\":\"iana\"},\"application/vnd.ecowin.chart\":{\"source\":\"iana\",\"extensions\":[\"mag\"]},\"application/vnd.ecowin.filerequest\":{\"source\":\"iana\"},\"application/vnd.ecowin.fileupdate\":{\"source\":\"iana\"},\"application/vnd.ecowin.series\":{\"source\":\"iana\"},\"application/vnd.ecowin.seriesrequest\":{\"source\":\"iana\"},\"application/vnd.ecowin.seriesupdate\":{\"source\":\"iana\"},\"application/vnd.efi.img\":{\"source\":\"iana\"},\"application/vnd.efi.iso\":{\"source\":\"iana\"},\"application/vnd.emclient.accessrequest+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.enliven\":{\"source\":\"iana\",\"extensions\":[\"nml\"]},\"application/vnd.enphase.envoy\":{\"source\":\"iana\"},\"application/vnd.eprints.data+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.epson.esf\":{\"source\":\"iana\",\"extensions\":[\"esf\"]},\"application/vnd.epson.msf\":{\"source\":\"iana\",\"extensions\":[\"msf\"]},\"application/vnd.epson.quickanime\":{\"source\":\"iana\",\"extensions\":[\"qam\"]},\"application/vnd.epson.salt\":{\"source\":\"iana\",\"extensions\":[\"slt\"]},\"application/vnd.epson.ssf\":{\"source\":\"iana\",\"extensions\":[\"ssf\"]},\"application/vnd.ericsson.quickcall\":{\"source\":\"iana\"},\"application/vnd.espass-espass+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.eszigno3+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"es3\",\"et3\"]},\"application/vnd.etsi.aoc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.asic-e+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.etsi.asic-s+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.etsi.cug+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvcommand+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvdiscovery+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-bc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-cod+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsad-npvr+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvservice+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvsync+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.iptvueprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.mcid+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.mheg5\":{\"source\":\"iana\"},\"application/vnd.etsi.overload-control-policy-dataset+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.pstn+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.sci+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.simservs+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.timestamp-token\":{\"source\":\"iana\"},\"application/vnd.etsi.tsl+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.etsi.tsl.der\":{\"source\":\"iana\"},\"application/vnd.eudora.data\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.profile\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.settings\":{\"source\":\"iana\"},\"application/vnd.evolv.ecig.theme\":{\"source\":\"iana\"},\"application/vnd.exstream-empower+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.exstream-package\":{\"source\":\"iana\"},\"application/vnd.ezpix-album\":{\"source\":\"iana\",\"extensions\":[\"ez2\"]},\"application/vnd.ezpix-package\":{\"source\":\"iana\",\"extensions\":[\"ez3\"]},\"application/vnd.f-secure.mobile\":{\"source\":\"iana\"},\"application/vnd.fastcopy-disk-image\":{\"source\":\"iana\"},\"application/vnd.fdf\":{\"source\":\"iana\",\"extensions\":[\"fdf\"]},\"application/vnd.fdsn.mseed\":{\"source\":\"iana\",\"extensions\":[\"mseed\"]},\"application/vnd.fdsn.seed\":{\"source\":\"iana\",\"extensions\":[\"seed\",\"dataless\"]},\"application/vnd.ffsns\":{\"source\":\"iana\"},\"application/vnd.ficlab.flb+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.filmit.zfc\":{\"source\":\"iana\"},\"application/vnd.fints\":{\"source\":\"iana\"},\"application/vnd.firemonkeys.cloudcell\":{\"source\":\"iana\"},\"application/vnd.flographit\":{\"source\":\"iana\",\"extensions\":[\"gph\"]},\"application/vnd.fluxtime.clip\":{\"source\":\"iana\",\"extensions\":[\"ftc\"]},\"application/vnd.font-fontforge-sfd\":{\"source\":\"iana\"},\"application/vnd.framemaker\":{\"source\":\"iana\",\"extensions\":[\"fm\",\"frame\",\"maker\",\"book\"]},\"application/vnd.frogans.fnc\":{\"source\":\"iana\",\"extensions\":[\"fnc\"]},\"application/vnd.frogans.ltf\":{\"source\":\"iana\",\"extensions\":[\"ltf\"]},\"application/vnd.fsc.weblaunch\":{\"source\":\"iana\",\"extensions\":[\"fsc\"]},\"application/vnd.fujitsu.oasys\":{\"source\":\"iana\",\"extensions\":[\"oas\"]},\"application/vnd.fujitsu.oasys2\":{\"source\":\"iana\",\"extensions\":[\"oa2\"]},\"application/vnd.fujitsu.oasys3\":{\"source\":\"iana\",\"extensions\":[\"oa3\"]},\"application/vnd.fujitsu.oasysgp\":{\"source\":\"iana\",\"extensions\":[\"fg5\"]},\"application/vnd.fujitsu.oasysprs\":{\"source\":\"iana\",\"extensions\":[\"bh2\"]},\"application/vnd.fujixerox.art-ex\":{\"source\":\"iana\"},\"application/vnd.fujixerox.art4\":{\"source\":\"iana\"},\"application/vnd.fujixerox.ddd\":{\"source\":\"iana\",\"extensions\":[\"ddd\"]},\"application/vnd.fujixerox.docuworks\":{\"source\":\"iana\",\"extensions\":[\"xdw\"]},\"application/vnd.fujixerox.docuworks.binder\":{\"source\":\"iana\",\"extensions\":[\"xbd\"]},\"application/vnd.fujixerox.docuworks.container\":{\"source\":\"iana\"},\"application/vnd.fujixerox.hbpl\":{\"source\":\"iana\"},\"application/vnd.fut-misnet\":{\"source\":\"iana\"},\"application/vnd.futoin+cbor\":{\"source\":\"iana\"},\"application/vnd.futoin+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.fuzzysheet\":{\"source\":\"iana\",\"extensions\":[\"fzs\"]},\"application/vnd.genomatix.tuxedo\":{\"source\":\"iana\",\"extensions\":[\"txd\"]},\"application/vnd.gentics.grd+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.geo+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.geocube+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.geogebra.file\":{\"source\":\"iana\",\"extensions\":[\"ggb\"]},\"application/vnd.geogebra.tool\":{\"source\":\"iana\",\"extensions\":[\"ggt\"]},\"application/vnd.geometry-explorer\":{\"source\":\"iana\",\"extensions\":[\"gex\",\"gre\"]},\"application/vnd.geonext\":{\"source\":\"iana\",\"extensions\":[\"gxt\"]},\"application/vnd.geoplan\":{\"source\":\"iana\",\"extensions\":[\"g2w\"]},\"application/vnd.geospace\":{\"source\":\"iana\",\"extensions\":[\"g3w\"]},\"application/vnd.gerber\":{\"source\":\"iana\"},\"application/vnd.globalplatform.card-content-mgt\":{\"source\":\"iana\"},\"application/vnd.globalplatform.card-content-mgt-response\":{\"source\":\"iana\"},\"application/vnd.gmx\":{\"source\":\"iana\",\"extensions\":[\"gmx\"]},\"application/vnd.google-apps.document\":{\"compressible\":false,\"extensions\":[\"gdoc\"]},\"application/vnd.google-apps.presentation\":{\"compressible\":false,\"extensions\":[\"gslides\"]},\"application/vnd.google-apps.spreadsheet\":{\"compressible\":false,\"extensions\":[\"gsheet\"]},\"application/vnd.google-earth.kml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"kml\"]},\"application/vnd.google-earth.kmz\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"kmz\"]},\"application/vnd.gov.sk.e-form+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.gov.sk.e-form+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.gov.sk.xmldatacontainer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.grafeq\":{\"source\":\"iana\",\"extensions\":[\"gqf\",\"gqs\"]},\"application/vnd.gridmp\":{\"source\":\"iana\"},\"application/vnd.groove-account\":{\"source\":\"iana\",\"extensions\":[\"gac\"]},\"application/vnd.groove-help\":{\"source\":\"iana\",\"extensions\":[\"ghf\"]},\"application/vnd.groove-identity-message\":{\"source\":\"iana\",\"extensions\":[\"gim\"]},\"application/vnd.groove-injector\":{\"source\":\"iana\",\"extensions\":[\"grv\"]},\"application/vnd.groove-tool-message\":{\"source\":\"iana\",\"extensions\":[\"gtm\"]},\"application/vnd.groove-tool-template\":{\"source\":\"iana\",\"extensions\":[\"tpl\"]},\"application/vnd.groove-vcard\":{\"source\":\"iana\",\"extensions\":[\"vcg\"]},\"application/vnd.hal+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hal+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"hal\"]},\"application/vnd.handheld-entertainment+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"zmm\"]},\"application/vnd.hbci\":{\"source\":\"iana\",\"extensions\":[\"hbci\"]},\"application/vnd.hc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hcl-bireports\":{\"source\":\"iana\"},\"application/vnd.hdt\":{\"source\":\"iana\"},\"application/vnd.heroku+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hhe.lesson-player\":{\"source\":\"iana\",\"extensions\":[\"les\"]},\"application/vnd.hp-hpgl\":{\"source\":\"iana\",\"extensions\":[\"hpgl\"]},\"application/vnd.hp-hpid\":{\"source\":\"iana\",\"extensions\":[\"hpid\"]},\"application/vnd.hp-hps\":{\"source\":\"iana\",\"extensions\":[\"hps\"]},\"application/vnd.hp-jlyt\":{\"source\":\"iana\",\"extensions\":[\"jlt\"]},\"application/vnd.hp-pcl\":{\"source\":\"iana\",\"extensions\":[\"pcl\"]},\"application/vnd.hp-pclxl\":{\"source\":\"iana\",\"extensions\":[\"pclxl\"]},\"application/vnd.httphone\":{\"source\":\"iana\"},\"application/vnd.hydrostatix.sof-data\":{\"source\":\"iana\",\"extensions\":[\"sfd-hdstx\"]},\"application/vnd.hyper+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hyper-item+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hyperdrive+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.hzn-3d-crossword\":{\"source\":\"iana\"},\"application/vnd.ibm.afplinedata\":{\"source\":\"iana\"},\"application/vnd.ibm.electronic-media\":{\"source\":\"iana\"},\"application/vnd.ibm.minipay\":{\"source\":\"iana\",\"extensions\":[\"mpy\"]},\"application/vnd.ibm.modcap\":{\"source\":\"iana\",\"extensions\":[\"afp\",\"listafp\",\"list3820\"]},\"application/vnd.ibm.rights-management\":{\"source\":\"iana\",\"extensions\":[\"irm\"]},\"application/vnd.ibm.secure-container\":{\"source\":\"iana\",\"extensions\":[\"sc\"]},\"application/vnd.iccprofile\":{\"source\":\"iana\",\"extensions\":[\"icc\",\"icm\"]},\"application/vnd.ieee.1905\":{\"source\":\"iana\"},\"application/vnd.igloader\":{\"source\":\"iana\",\"extensions\":[\"igl\"]},\"application/vnd.imagemeter.folder+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.imagemeter.image+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.immervision-ivp\":{\"source\":\"iana\",\"extensions\":[\"ivp\"]},\"application/vnd.immervision-ivu\":{\"source\":\"iana\",\"extensions\":[\"ivu\"]},\"application/vnd.ims.imsccv1p1\":{\"source\":\"iana\"},\"application/vnd.ims.imsccv1p2\":{\"source\":\"iana\"},\"application/vnd.ims.imsccv1p3\":{\"source\":\"iana\"},\"application/vnd.ims.lis.v2.result+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolconsumerprofile+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolproxy+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolproxy.id+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolsettings+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ims.lti.v2.toolsettings.simple+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.informedcontrol.rms+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.informix-visionary\":{\"source\":\"iana\"},\"application/vnd.infotech.project\":{\"source\":\"iana\"},\"application/vnd.infotech.project+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.innopath.wamp.notification\":{\"source\":\"iana\"},\"application/vnd.insors.igm\":{\"source\":\"iana\",\"extensions\":[\"igm\"]},\"application/vnd.intercon.formnet\":{\"source\":\"iana\",\"extensions\":[\"xpw\",\"xpx\"]},\"application/vnd.intergeo\":{\"source\":\"iana\",\"extensions\":[\"i2g\"]},\"application/vnd.intertrust.digibox\":{\"source\":\"iana\"},\"application/vnd.intertrust.nncp\":{\"source\":\"iana\"},\"application/vnd.intu.qbo\":{\"source\":\"iana\",\"extensions\":[\"qbo\"]},\"application/vnd.intu.qfx\":{\"source\":\"iana\",\"extensions\":[\"qfx\"]},\"application/vnd.iptc.g2.catalogitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.conceptitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.knowledgeitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.newsitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.newsmessage+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.packageitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.iptc.g2.planningitem+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ipunplugged.rcprofile\":{\"source\":\"iana\",\"extensions\":[\"rcprofile\"]},\"application/vnd.irepository.package+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"irp\"]},\"application/vnd.is-xpr\":{\"source\":\"iana\",\"extensions\":[\"xpr\"]},\"application/vnd.isac.fcs\":{\"source\":\"iana\",\"extensions\":[\"fcs\"]},\"application/vnd.iso11783-10+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.jam\":{\"source\":\"iana\",\"extensions\":[\"jam\"]},\"application/vnd.japannet-directory-service\":{\"source\":\"iana\"},\"application/vnd.japannet-jpnstore-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-payment-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-registration\":{\"source\":\"iana\"},\"application/vnd.japannet-registration-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-setstore-wakeup\":{\"source\":\"iana\"},\"application/vnd.japannet-verification\":{\"source\":\"iana\"},\"application/vnd.japannet-verification-wakeup\":{\"source\":\"iana\"},\"application/vnd.jcp.javame.midlet-rms\":{\"source\":\"iana\",\"extensions\":[\"rms\"]},\"application/vnd.jisp\":{\"source\":\"iana\",\"extensions\":[\"jisp\"]},\"application/vnd.joost.joda-archive\":{\"source\":\"iana\",\"extensions\":[\"joda\"]},\"application/vnd.jsk.isdn-ngn\":{\"source\":\"iana\"},\"application/vnd.kahootz\":{\"source\":\"iana\",\"extensions\":[\"ktz\",\"ktr\"]},\"application/vnd.kde.karbon\":{\"source\":\"iana\",\"extensions\":[\"karbon\"]},\"application/vnd.kde.kchart\":{\"source\":\"iana\",\"extensions\":[\"chrt\"]},\"application/vnd.kde.kformula\":{\"source\":\"iana\",\"extensions\":[\"kfo\"]},\"application/vnd.kde.kivio\":{\"source\":\"iana\",\"extensions\":[\"flw\"]},\"application/vnd.kde.kontour\":{\"source\":\"iana\",\"extensions\":[\"kon\"]},\"application/vnd.kde.kpresenter\":{\"source\":\"iana\",\"extensions\":[\"kpr\",\"kpt\"]},\"application/vnd.kde.kspread\":{\"source\":\"iana\",\"extensions\":[\"ksp\"]},\"application/vnd.kde.kword\":{\"source\":\"iana\",\"extensions\":[\"kwd\",\"kwt\"]},\"application/vnd.kenameaapp\":{\"source\":\"iana\",\"extensions\":[\"htke\"]},\"application/vnd.kidspiration\":{\"source\":\"iana\",\"extensions\":[\"kia\"]},\"application/vnd.kinar\":{\"source\":\"iana\",\"extensions\":[\"kne\",\"knp\"]},\"application/vnd.koan\":{\"source\":\"iana\",\"extensions\":[\"skp\",\"skd\",\"skt\",\"skm\"]},\"application/vnd.kodak-descriptor\":{\"source\":\"iana\",\"extensions\":[\"sse\"]},\"application/vnd.las\":{\"source\":\"iana\"},\"application/vnd.las.las+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.las.las+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lasxml\"]},\"application/vnd.laszip\":{\"source\":\"iana\"},\"application/vnd.leap+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.liberty-request+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.llamagraphics.life-balance.desktop\":{\"source\":\"iana\",\"extensions\":[\"lbd\"]},\"application/vnd.llamagraphics.life-balance.exchange+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"lbe\"]},\"application/vnd.logipipe.circuit+zip\":{\"source\":\"iana\",\"compressible\":false},\"application/vnd.loom\":{\"source\":\"iana\"},\"application/vnd.lotus-1-2-3\":{\"source\":\"iana\",\"extensions\":[\"123\"]},\"application/vnd.lotus-approach\":{\"source\":\"iana\",\"extensions\":[\"apr\"]},\"application/vnd.lotus-freelance\":{\"source\":\"iana\",\"extensions\":[\"pre\"]},\"application/vnd.lotus-notes\":{\"source\":\"iana\",\"extensions\":[\"nsf\"]},\"application/vnd.lotus-organizer\":{\"source\":\"iana\",\"extensions\":[\"org\"]},\"application/vnd.lotus-screencam\":{\"source\":\"iana\",\"extensions\":[\"scm\"]},\"application/vnd.lotus-wordpro\":{\"source\":\"iana\",\"extensions\":[\"lwp\"]},\"application/vnd.macports.portpkg\":{\"source\":\"iana\",\"extensions\":[\"portpkg\"]},\"application/vnd.mapbox-vector-tile\":{\"source\":\"iana\"},\"application/vnd.marlin.drm.actiontoken+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.conftoken+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.license+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.marlin.drm.mdcf\":{\"source\":\"iana\"},\"application/vnd.mason+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.maxmind.maxmind-db\":{\"source\":\"iana\"},\"application/vnd.mcd\":{\"source\":\"iana\",\"extensions\":[\"mcd\"]},\"application/vnd.medcalcdata\":{\"source\":\"iana\",\"extensions\":[\"mc1\"]},\"application/vnd.mediastation.cdkey\":{\"source\":\"iana\",\"extensions\":[\"cdkey\"]},\"application/vnd.meridian-slingshot\":{\"source\":\"iana\"},\"application/vnd.mfer\":{\"source\":\"iana\",\"extensions\":[\"mwf\"]},\"application/vnd.mfmp\":{\"source\":\"iana\",\"extensions\":[\"mfm\"]},\"application/vnd.micro+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.micrografx.flo\":{\"source\":\"iana\",\"extensions\":[\"flo\"]},\"application/vnd.micrografx.igx\":{\"source\":\"iana\",\"extensions\":[\"igx\"]},\"application/vnd.microsoft.portable-executable\":{\"source\":\"iana\"},\"application/vnd.microsoft.windows.thumbnail-cache\":{\"source\":\"iana\"},\"application/vnd.miele+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.mif\":{\"source\":\"iana\",\"extensions\":[\"mif\"]},\"application/vnd.minisoft-hp3000-save\":{\"source\":\"iana\"},\"application/vnd.mitsubishi.misty-guard.trustweb\":{\"source\":\"iana\"},\"application/vnd.mobius.daf\":{\"source\":\"iana\",\"extensions\":[\"daf\"]},\"application/vnd.mobius.dis\":{\"source\":\"iana\",\"extensions\":[\"dis\"]},\"application/vnd.mobius.mbk\":{\"source\":\"iana\",\"extensions\":[\"mbk\"]},\"application/vnd.mobius.mqy\":{\"source\":\"iana\",\"extensions\":[\"mqy\"]},\"application/vnd.mobius.msl\":{\"source\":\"iana\",\"extensions\":[\"msl\"]},\"application/vnd.mobius.plc\":{\"source\":\"iana\",\"extensions\":[\"plc\"]},\"application/vnd.mobius.txf\":{\"source\":\"iana\",\"extensions\":[\"txf\"]},\"application/vnd.mophun.application\":{\"source\":\"iana\",\"extensions\":[\"mpn\"]},\"application/vnd.mophun.certificate\":{\"source\":\"iana\",\"extensions\":[\"mpc\"]},\"application/vnd.motorola.flexsuite\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.adsi\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.fis\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.gotap\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.kmr\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.ttc\":{\"source\":\"iana\"},\"application/vnd.motorola.flexsuite.wem\":{\"source\":\"iana\"},\"application/vnd.motorola.iprm\":{\"source\":\"iana\"},\"application/vnd.mozilla.xul+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xul\"]},\"application/vnd.ms-3mfdocument\":{\"source\":\"iana\"},\"application/vnd.ms-artgalry\":{\"source\":\"iana\",\"extensions\":[\"cil\"]},\"application/vnd.ms-asf\":{\"source\":\"iana\"},\"application/vnd.ms-cab-compressed\":{\"source\":\"iana\",\"extensions\":[\"cab\"]},\"application/vnd.ms-color.iccprofile\":{\"source\":\"apache\"},\"application/vnd.ms-excel\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xls\",\"xlm\",\"xla\",\"xlc\",\"xlt\",\"xlw\"]},\"application/vnd.ms-excel.addin.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlam\"]},\"application/vnd.ms-excel.sheet.binary.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlsb\"]},\"application/vnd.ms-excel.sheet.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xlsm\"]},\"application/vnd.ms-excel.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"xltm\"]},\"application/vnd.ms-fontobject\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"eot\"]},\"application/vnd.ms-htmlhelp\":{\"source\":\"iana\",\"extensions\":[\"chm\"]},\"application/vnd.ms-ims\":{\"source\":\"iana\",\"extensions\":[\"ims\"]},\"application/vnd.ms-lrm\":{\"source\":\"iana\",\"extensions\":[\"lrm\"]},\"application/vnd.ms-office.activex+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-officetheme\":{\"source\":\"iana\",\"extensions\":[\"thmx\"]},\"application/vnd.ms-opentype\":{\"source\":\"apache\",\"compressible\":true},\"application/vnd.ms-outlook\":{\"compressible\":false,\"extensions\":[\"msg\"]},\"application/vnd.ms-package.obfuscated-opentype\":{\"source\":\"apache\"},\"application/vnd.ms-pki.seccat\":{\"source\":\"apache\",\"extensions\":[\"cat\"]},\"application/vnd.ms-pki.stl\":{\"source\":\"apache\",\"extensions\":[\"stl\"]},\"application/vnd.ms-playready.initiator+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-powerpoint\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ppt\",\"pps\",\"pot\"]},\"application/vnd.ms-powerpoint.addin.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"ppam\"]},\"application/vnd.ms-powerpoint.presentation.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"pptm\"]},\"application/vnd.ms-powerpoint.slide.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"sldm\"]},\"application/vnd.ms-powerpoint.slideshow.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"ppsm\"]},\"application/vnd.ms-powerpoint.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"potm\"]},\"application/vnd.ms-printdevicecapabilities+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-printing.printticket+xml\":{\"source\":\"apache\",\"compressible\":true},\"application/vnd.ms-printschematicket+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.ms-project\":{\"source\":\"iana\",\"extensions\":[\"mpp\",\"mpt\"]},\"application/vnd.ms-tnef\":{\"source\":\"iana\"},\"application/vnd.ms-windows.devicepairing\":{\"source\":\"iana\"},\"application/vnd.ms-windows.nwprinting.oob\":{\"source\":\"iana\"},\"application/vnd.ms-windows.printerpairing\":{\"source\":\"iana\"},\"application/vnd.ms-windows.wsd.oob\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.lic-chlg-req\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.lic-resp\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.meter-chlg-req\":{\"source\":\"iana\"},\"application/vnd.ms-wmdrm.meter-resp\":{\"source\":\"iana\"},\"application/vnd.ms-word.document.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"docm\"]},\"application/vnd.ms-word.template.macroenabled.12\":{\"source\":\"iana\",\"extensions\":[\"dotm\"]},\"application/vnd.ms-works\":{\"source\":\"iana\",\"extensions\":[\"wps\",\"wks\",\"wcm\",\"wdb\"]},\"application/vnd.ms-wpl\":{\"source\":\"iana\",\"extensions\":[\"wpl\"]},\"application/vnd.ms-xpsdocument\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xps\"]},\"application/vnd.msa-disk-image\":{\"source\":\"iana\"},\"application/vnd.mseq\":{\"source\":\"iana\",\"extensions\":[\"mseq\"]},\"application/vnd.msign\":{\"source\":\"iana\"},\"application/vnd.multiad.creator\":{\"source\":\"iana\"},\"application/vnd.multiad.creator.cif\":{\"source\":\"iana\"},\"application/vnd.music-niff\":{\"source\":\"iana\"},\"application/vnd.musician\":{\"source\":\"iana\",\"extensions\":[\"mus\"]},\"application/vnd.muvee.style\":{\"source\":\"iana\",\"extensions\":[\"msty\"]},\"application/vnd.mynfc\":{\"source\":\"iana\",\"extensions\":[\"taglet\"]},\"application/vnd.ncd.control\":{\"source\":\"iana\"},\"application/vnd.ncd.reference\":{\"source\":\"iana\"},\"application/vnd.nearst.inv+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nervana\":{\"source\":\"iana\"},\"application/vnd.netfpx\":{\"source\":\"iana\"},\"application/vnd.neurolanguage.nlu\":{\"source\":\"iana\",\"extensions\":[\"nlu\"]},\"application/vnd.nimn\":{\"source\":\"iana\"},\"application/vnd.nintendo.nitro.rom\":{\"source\":\"iana\"},\"application/vnd.nintendo.snes.rom\":{\"source\":\"iana\"},\"application/vnd.nitf\":{\"source\":\"iana\",\"extensions\":[\"ntf\",\"nitf\"]},\"application/vnd.noblenet-directory\":{\"source\":\"iana\",\"extensions\":[\"nnd\"]},\"application/vnd.noblenet-sealer\":{\"source\":\"iana\",\"extensions\":[\"nns\"]},\"application/vnd.noblenet-web\":{\"source\":\"iana\",\"extensions\":[\"nnw\"]},\"application/vnd.nokia.catalogs\":{\"source\":\"iana\"},\"application/vnd.nokia.conml+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.conml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.iptv.config+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.isds-radio-presets\":{\"source\":\"iana\"},\"application/vnd.nokia.landmark+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.landmark+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.landmarkcollection+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.n-gage.ac+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ac\"]},\"application/vnd.nokia.n-gage.data\":{\"source\":\"iana\",\"extensions\":[\"ngdat\"]},\"application/vnd.nokia.n-gage.symbian.install\":{\"source\":\"iana\",\"extensions\":[\"n-gage\"]},\"application/vnd.nokia.ncd\":{\"source\":\"iana\"},\"application/vnd.nokia.pcd+wbxml\":{\"source\":\"iana\"},\"application/vnd.nokia.pcd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.nokia.radio-preset\":{\"source\":\"iana\",\"extensions\":[\"rpst\"]},\"application/vnd.nokia.radio-presets\":{\"source\":\"iana\",\"extensions\":[\"rpss\"]},\"application/vnd.novadigm.edm\":{\"source\":\"iana\",\"extensions\":[\"edm\"]},\"application/vnd.novadigm.edx\":{\"source\":\"iana\",\"extensions\":[\"edx\"]},\"application/vnd.novadigm.ext\":{\"source\":\"iana\",\"extensions\":[\"ext\"]},\"application/vnd.ntt-local.content-share\":{\"source\":\"iana\"},\"application/vnd.ntt-local.file-transfer\":{\"source\":\"iana\"},\"application/vnd.ntt-local.ogw_remote-access\":{\"source\":\"iana\"},\"application/vnd.ntt-local.sip-ta_remote\":{\"source\":\"iana\"},\"application/vnd.ntt-local.sip-ta_tcp_stream\":{\"source\":\"iana\"},\"application/vnd.oasis.opendocument.chart\":{\"source\":\"iana\",\"extensions\":[\"odc\"]},\"application/vnd.oasis.opendocument.chart-template\":{\"source\":\"iana\",\"extensions\":[\"otc\"]},\"application/vnd.oasis.opendocument.database\":{\"source\":\"iana\",\"extensions\":[\"odb\"]},\"application/vnd.oasis.opendocument.formula\":{\"source\":\"iana\",\"extensions\":[\"odf\"]},\"application/vnd.oasis.opendocument.formula-template\":{\"source\":\"iana\",\"extensions\":[\"odft\"]},\"application/vnd.oasis.opendocument.graphics\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odg\"]},\"application/vnd.oasis.opendocument.graphics-template\":{\"source\":\"iana\",\"extensions\":[\"otg\"]},\"application/vnd.oasis.opendocument.image\":{\"source\":\"iana\",\"extensions\":[\"odi\"]},\"application/vnd.oasis.opendocument.image-template\":{\"source\":\"iana\",\"extensions\":[\"oti\"]},\"application/vnd.oasis.opendocument.presentation\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odp\"]},\"application/vnd.oasis.opendocument.presentation-template\":{\"source\":\"iana\",\"extensions\":[\"otp\"]},\"application/vnd.oasis.opendocument.spreadsheet\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ods\"]},\"application/vnd.oasis.opendocument.spreadsheet-template\":{\"source\":\"iana\",\"extensions\":[\"ots\"]},\"application/vnd.oasis.opendocument.text\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"odt\"]},\"application/vnd.oasis.opendocument.text-master\":{\"source\":\"iana\",\"extensions\":[\"odm\"]},\"application/vnd.oasis.opendocument.text-template\":{\"source\":\"iana\",\"extensions\":[\"ott\"]},\"application/vnd.oasis.opendocument.text-web\":{\"source\":\"iana\",\"extensions\":[\"oth\"]},\"application/vnd.obn\":{\"source\":\"iana\"},\"application/vnd.ocf+cbor\":{\"source\":\"iana\"},\"application/vnd.oci.image.manifest.v1+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oftn.l10n+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.contentaccessdownload+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.contentaccessstreaming+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.cspg-hexbinary\":{\"source\":\"iana\"},\"application/vnd.oipf.dae.svg+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.dae.xhtml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.mippvcontrolmessage+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.pae.gem\":{\"source\":\"iana\"},\"application/vnd.oipf.spdiscovery+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.spdlist+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.ueprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oipf.userprofile+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.olpc-sugar\":{\"source\":\"iana\",\"extensions\":[\"xo\"]},\"application/vnd.oma-scws-config\":{\"source\":\"iana\"},\"application/vnd.oma-scws-http-request\":{\"source\":\"iana\"},\"application/vnd.oma-scws-http-response\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.associated-procedure-parameter+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.drm-trigger+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.imd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.ltkm\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.notification+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.provisioningtrigger\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.sgboot\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.sgdd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.sgdu\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.simple-symbol-container\":{\"source\":\"iana\"},\"application/vnd.oma.bcast.smartcard-trigger+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.sprov+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.bcast.stkm\":{\"source\":\"iana\"},\"application/vnd.oma.cab-address-book+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-feature-handler+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-pcc+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-subs-invite+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.cab-user-prefs+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.dcd\":{\"source\":\"iana\"},\"application/vnd.oma.dcdc\":{\"source\":\"iana\"},\"application/vnd.oma.dd2+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dd2\"]},\"application/vnd.oma.drm.risd+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.group-usage-list+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.lwm2m+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.lwm2m+tlv\":{\"source\":\"iana\"},\"application/vnd.oma.pal+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.detailed-progress-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.final-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.groups+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.invocation-descriptor+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.poc.optimized-progress-report+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.push\":{\"source\":\"iana\"},\"application/vnd.oma.scidm.messages+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oma.xcap-directory+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.omads-email+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.omads-file+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.omads-folder+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.omaloc-supl-init\":{\"source\":\"iana\"},\"application/vnd.onepager\":{\"source\":\"iana\"},\"application/vnd.onepagertamp\":{\"source\":\"iana\"},\"application/vnd.onepagertamx\":{\"source\":\"iana\"},\"application/vnd.onepagertat\":{\"source\":\"iana\"},\"application/vnd.onepagertatp\":{\"source\":\"iana\"},\"application/vnd.onepagertatx\":{\"source\":\"iana\"},\"application/vnd.openblox.game+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"obgx\"]},\"application/vnd.openblox.game-binary\":{\"source\":\"iana\"},\"application/vnd.openeye.oeb\":{\"source\":\"iana\"},\"application/vnd.openofficeorg.extension\":{\"source\":\"apache\",\"extensions\":[\"oxt\"]},\"application/vnd.openstreetmap.data+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"osm\"]},\"application/vnd.openxmlformats-officedocument.custom-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.customxmlproperties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawing+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.chart+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.extended-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.presentation\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"pptx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slide\":{\"source\":\"iana\",\"extensions\":[\"sldx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.slide+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slideshow\":{\"source\":\"iana\",\"extensions\":[\"ppsx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.tags+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.template\":{\"source\":\"iana\",\"extensions\":[\"potx\"]},\"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"xlsx\"]},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.template\":{\"source\":\"iana\",\"extensions\":[\"xltx\"]},\"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.theme+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.themeoverride+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.vmldrawing\":{\"source\":\"iana\"},\"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"docx\"]},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.template\":{\"source\":\"iana\",\"extensions\":[\"dotx\"]},\"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.core-properties+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.openxmlformats-package.relationships+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oracle.resource+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.orange.indata\":{\"source\":\"iana\"},\"application/vnd.osa.netdeploy\":{\"source\":\"iana\"},\"application/vnd.osgeo.mapguide.package\":{\"source\":\"iana\",\"extensions\":[\"mgp\"]},\"application/vnd.osgi.bundle\":{\"source\":\"iana\"},\"application/vnd.osgi.dp\":{\"source\":\"iana\",\"extensions\":[\"dp\"]},\"application/vnd.osgi.subsystem\":{\"source\":\"iana\",\"extensions\":[\"esa\"]},\"application/vnd.otps.ct-kip+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.oxli.countgraph\":{\"source\":\"iana\"},\"application/vnd.pagerduty+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.palm\":{\"source\":\"iana\",\"extensions\":[\"pdb\",\"pqa\",\"oprc\"]},\"application/vnd.panoply\":{\"source\":\"iana\"},\"application/vnd.paos.xml\":{\"source\":\"iana\"},\"application/vnd.patentdive\":{\"source\":\"iana\"},\"application/vnd.patientecommsdoc\":{\"source\":\"iana\"},\"application/vnd.pawaafile\":{\"source\":\"iana\",\"extensions\":[\"paw\"]},\"application/vnd.pcos\":{\"source\":\"iana\"},\"application/vnd.pg.format\":{\"source\":\"iana\",\"extensions\":[\"str\"]},\"application/vnd.pg.osasli\":{\"source\":\"iana\",\"extensions\":[\"ei6\"]},\"application/vnd.piaccess.application-licence\":{\"source\":\"iana\"},\"application/vnd.picsel\":{\"source\":\"iana\",\"extensions\":[\"efif\"]},\"application/vnd.pmi.widget\":{\"source\":\"iana\",\"extensions\":[\"wg\"]},\"application/vnd.poc.group-advertisement+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.pocketlearn\":{\"source\":\"iana\",\"extensions\":[\"plf\"]},\"application/vnd.powerbuilder6\":{\"source\":\"iana\",\"extensions\":[\"pbd\"]},\"application/vnd.powerbuilder6-s\":{\"source\":\"iana\"},\"application/vnd.powerbuilder7\":{\"source\":\"iana\"},\"application/vnd.powerbuilder7-s\":{\"source\":\"iana\"},\"application/vnd.powerbuilder75\":{\"source\":\"iana\"},\"application/vnd.powerbuilder75-s\":{\"source\":\"iana\"},\"application/vnd.preminet\":{\"source\":\"iana\"},\"application/vnd.previewsystems.box\":{\"source\":\"iana\",\"extensions\":[\"box\"]},\"application/vnd.proteus.magazine\":{\"source\":\"iana\",\"extensions\":[\"mgz\"]},\"application/vnd.psfs\":{\"source\":\"iana\"},\"application/vnd.publishare-delta-tree\":{\"source\":\"iana\",\"extensions\":[\"qps\"]},\"application/vnd.pvi.ptid1\":{\"source\":\"iana\",\"extensions\":[\"ptid\"]},\"application/vnd.pwg-multiplexed\":{\"source\":\"iana\"},\"application/vnd.pwg-xhtml-print+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.qualcomm.brew-app-res\":{\"source\":\"iana\"},\"application/vnd.quarantainenet\":{\"source\":\"iana\"},\"application/vnd.quark.quarkxpress\":{\"source\":\"iana\",\"extensions\":[\"qxd\",\"qxt\",\"qwd\",\"qwt\",\"qxl\",\"qxb\"]},\"application/vnd.quobject-quoxdocument\":{\"source\":\"iana\"},\"application/vnd.radisys.moml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-conf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-conn+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-dialog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-audit-stream+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-conf+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-base+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-fax-detect+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-fax-sendrecv+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-group+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-speech+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.radisys.msml-dialog-transform+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.rainstor.data\":{\"source\":\"iana\"},\"application/vnd.rapid\":{\"source\":\"iana\"},\"application/vnd.rar\":{\"source\":\"iana\"},\"application/vnd.realvnc.bed\":{\"source\":\"iana\",\"extensions\":[\"bed\"]},\"application/vnd.recordare.musicxml\":{\"source\":\"iana\",\"extensions\":[\"mxl\"]},\"application/vnd.recordare.musicxml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"musicxml\"]},\"application/vnd.renlearn.rlprint\":{\"source\":\"iana\"},\"application/vnd.restful+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.rig.cryptonote\":{\"source\":\"iana\",\"extensions\":[\"cryptonote\"]},\"application/vnd.rim.cod\":{\"source\":\"apache\",\"extensions\":[\"cod\"]},\"application/vnd.rn-realmedia\":{\"source\":\"apache\",\"extensions\":[\"rm\"]},\"application/vnd.rn-realmedia-vbr\":{\"source\":\"apache\",\"extensions\":[\"rmvb\"]},\"application/vnd.route66.link66+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"link66\"]},\"application/vnd.rs-274x\":{\"source\":\"iana\"},\"application/vnd.ruckus.download\":{\"source\":\"iana\"},\"application/vnd.s3sms\":{\"source\":\"iana\"},\"application/vnd.sailingtracker.track\":{\"source\":\"iana\",\"extensions\":[\"st\"]},\"application/vnd.sar\":{\"source\":\"iana\"},\"application/vnd.sbm.cid\":{\"source\":\"iana\"},\"application/vnd.sbm.mid2\":{\"source\":\"iana\"},\"application/vnd.scribus\":{\"source\":\"iana\"},\"application/vnd.sealed.3df\":{\"source\":\"iana\"},\"application/vnd.sealed.csf\":{\"source\":\"iana\"},\"application/vnd.sealed.doc\":{\"source\":\"iana\"},\"application/vnd.sealed.eml\":{\"source\":\"iana\"},\"application/vnd.sealed.mht\":{\"source\":\"iana\"},\"application/vnd.sealed.net\":{\"source\":\"iana\"},\"application/vnd.sealed.ppt\":{\"source\":\"iana\"},\"application/vnd.sealed.tiff\":{\"source\":\"iana\"},\"application/vnd.sealed.xls\":{\"source\":\"iana\"},\"application/vnd.sealedmedia.softseal.html\":{\"source\":\"iana\"},\"application/vnd.sealedmedia.softseal.pdf\":{\"source\":\"iana\"},\"application/vnd.seemail\":{\"source\":\"iana\",\"extensions\":[\"see\"]},\"application/vnd.sema\":{\"source\":\"iana\",\"extensions\":[\"sema\"]},\"application/vnd.semd\":{\"source\":\"iana\",\"extensions\":[\"semd\"]},\"application/vnd.semf\":{\"source\":\"iana\",\"extensions\":[\"semf\"]},\"application/vnd.shade-save-file\":{\"source\":\"iana\"},\"application/vnd.shana.informed.formdata\":{\"source\":\"iana\",\"extensions\":[\"ifm\"]},\"application/vnd.shana.informed.formtemplate\":{\"source\":\"iana\",\"extensions\":[\"itp\"]},\"application/vnd.shana.informed.interchange\":{\"source\":\"iana\",\"extensions\":[\"iif\"]},\"application/vnd.shana.informed.package\":{\"source\":\"iana\",\"extensions\":[\"ipk\"]},\"application/vnd.shootproof+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.shopkick+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.shp\":{\"source\":\"iana\"},\"application/vnd.shx\":{\"source\":\"iana\"},\"application/vnd.sigrok.session\":{\"source\":\"iana\"},\"application/vnd.simtech-mindmapper\":{\"source\":\"iana\",\"extensions\":[\"twd\",\"twds\"]},\"application/vnd.siren+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.smaf\":{\"source\":\"iana\",\"extensions\":[\"mmf\"]},\"application/vnd.smart.notebook\":{\"source\":\"iana\"},\"application/vnd.smart.teacher\":{\"source\":\"iana\",\"extensions\":[\"teacher\"]},\"application/vnd.snesdev-page-table\":{\"source\":\"iana\"},\"application/vnd.software602.filler.form+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"fo\"]},\"application/vnd.software602.filler.form-xml-zip\":{\"source\":\"iana\"},\"application/vnd.solent.sdkm+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"sdkm\",\"sdkd\"]},\"application/vnd.spotfire.dxp\":{\"source\":\"iana\",\"extensions\":[\"dxp\"]},\"application/vnd.spotfire.sfs\":{\"source\":\"iana\",\"extensions\":[\"sfs\"]},\"application/vnd.sqlite3\":{\"source\":\"iana\"},\"application/vnd.sss-cod\":{\"source\":\"iana\"},\"application/vnd.sss-dtf\":{\"source\":\"iana\"},\"application/vnd.sss-ntf\":{\"source\":\"iana\"},\"application/vnd.stardivision.calc\":{\"source\":\"apache\",\"extensions\":[\"sdc\"]},\"application/vnd.stardivision.draw\":{\"source\":\"apache\",\"extensions\":[\"sda\"]},\"application/vnd.stardivision.impress\":{\"source\":\"apache\",\"extensions\":[\"sdd\"]},\"application/vnd.stardivision.math\":{\"source\":\"apache\",\"extensions\":[\"smf\"]},\"application/vnd.stardivision.writer\":{\"source\":\"apache\",\"extensions\":[\"sdw\",\"vor\"]},\"application/vnd.stardivision.writer-global\":{\"source\":\"apache\",\"extensions\":[\"sgl\"]},\"application/vnd.stepmania.package\":{\"source\":\"iana\",\"extensions\":[\"smzip\"]},\"application/vnd.stepmania.stepchart\":{\"source\":\"iana\",\"extensions\":[\"sm\"]},\"application/vnd.street-stream\":{\"source\":\"iana\"},\"application/vnd.sun.wadl+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wadl\"]},\"application/vnd.sun.xml.calc\":{\"source\":\"apache\",\"extensions\":[\"sxc\"]},\"application/vnd.sun.xml.calc.template\":{\"source\":\"apache\",\"extensions\":[\"stc\"]},\"application/vnd.sun.xml.draw\":{\"source\":\"apache\",\"extensions\":[\"sxd\"]},\"application/vnd.sun.xml.draw.template\":{\"source\":\"apache\",\"extensions\":[\"std\"]},\"application/vnd.sun.xml.impress\":{\"source\":\"apache\",\"extensions\":[\"sxi\"]},\"application/vnd.sun.xml.impress.template\":{\"source\":\"apache\",\"extensions\":[\"sti\"]},\"application/vnd.sun.xml.math\":{\"source\":\"apache\",\"extensions\":[\"sxm\"]},\"application/vnd.sun.xml.writer\":{\"source\":\"apache\",\"extensions\":[\"sxw\"]},\"application/vnd.sun.xml.writer.global\":{\"source\":\"apache\",\"extensions\":[\"sxg\"]},\"application/vnd.sun.xml.writer.template\":{\"source\":\"apache\",\"extensions\":[\"stw\"]},\"application/vnd.sus-calendar\":{\"source\":\"iana\",\"extensions\":[\"sus\",\"susp\"]},\"application/vnd.svd\":{\"source\":\"iana\",\"extensions\":[\"svd\"]},\"application/vnd.swiftview-ics\":{\"source\":\"iana\"},\"application/vnd.symbian.install\":{\"source\":\"apache\",\"extensions\":[\"sis\",\"sisx\"]},\"application/vnd.syncml+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"xsm\"]},\"application/vnd.syncml.dm+wbxml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"bdm\"]},\"application/vnd.syncml.dm+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"xdm\"]},\"application/vnd.syncml.dm.notification\":{\"source\":\"iana\"},\"application/vnd.syncml.dmddf+wbxml\":{\"source\":\"iana\"},\"application/vnd.syncml.dmddf+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"ddf\"]},\"application/vnd.syncml.dmtnds+wbxml\":{\"source\":\"iana\"},\"application/vnd.syncml.dmtnds+xml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true},\"application/vnd.syncml.ds.notification\":{\"source\":\"iana\"},\"application/vnd.tableschema+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tao.intent-module-archive\":{\"source\":\"iana\",\"extensions\":[\"tao\"]},\"application/vnd.tcpdump.pcap\":{\"source\":\"iana\",\"extensions\":[\"pcap\",\"cap\",\"dmp\"]},\"application/vnd.think-cell.ppttc+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tmd.mediaflex.api+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.tml\":{\"source\":\"iana\"},\"application/vnd.tmobile-livetv\":{\"source\":\"iana\",\"extensions\":[\"tmo\"]},\"application/vnd.tri.onesource\":{\"source\":\"iana\"},\"application/vnd.trid.tpt\":{\"source\":\"iana\",\"extensions\":[\"tpt\"]},\"application/vnd.triscape.mxs\":{\"source\":\"iana\",\"extensions\":[\"mxs\"]},\"application/vnd.trueapp\":{\"source\":\"iana\",\"extensions\":[\"tra\"]},\"application/vnd.truedoc\":{\"source\":\"iana\"},\"application/vnd.ubisoft.webplayer\":{\"source\":\"iana\"},\"application/vnd.ufdl\":{\"source\":\"iana\",\"extensions\":[\"ufd\",\"ufdl\"]},\"application/vnd.uiq.theme\":{\"source\":\"iana\",\"extensions\":[\"utz\"]},\"application/vnd.umajin\":{\"source\":\"iana\",\"extensions\":[\"umj\"]},\"application/vnd.unity\":{\"source\":\"iana\",\"extensions\":[\"unityweb\"]},\"application/vnd.uoml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uoml\"]},\"application/vnd.uplanet.alert\":{\"source\":\"iana\"},\"application/vnd.uplanet.alert-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.bearer-choice\":{\"source\":\"iana\"},\"application/vnd.uplanet.bearer-choice-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.cacheop\":{\"source\":\"iana\"},\"application/vnd.uplanet.cacheop-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.channel\":{\"source\":\"iana\"},\"application/vnd.uplanet.channel-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.list\":{\"source\":\"iana\"},\"application/vnd.uplanet.list-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.listcmd\":{\"source\":\"iana\"},\"application/vnd.uplanet.listcmd-wbxml\":{\"source\":\"iana\"},\"application/vnd.uplanet.signal\":{\"source\":\"iana\"},\"application/vnd.uri-map\":{\"source\":\"iana\"},\"application/vnd.valve.source.material\":{\"source\":\"iana\"},\"application/vnd.vcx\":{\"source\":\"iana\",\"extensions\":[\"vcx\"]},\"application/vnd.vd-study\":{\"source\":\"iana\"},\"application/vnd.vectorworks\":{\"source\":\"iana\"},\"application/vnd.vel+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.verimatrix.vcas\":{\"source\":\"iana\"},\"application/vnd.veryant.thin\":{\"source\":\"iana\"},\"application/vnd.ves.encrypted\":{\"source\":\"iana\"},\"application/vnd.vidsoft.vidconference\":{\"source\":\"iana\"},\"application/vnd.visio\":{\"source\":\"iana\",\"extensions\":[\"vsd\",\"vst\",\"vss\",\"vsw\"]},\"application/vnd.visionary\":{\"source\":\"iana\",\"extensions\":[\"vis\"]},\"application/vnd.vividence.scriptfile\":{\"source\":\"iana\"},\"application/vnd.vsf\":{\"source\":\"iana\",\"extensions\":[\"vsf\"]},\"application/vnd.wap.sic\":{\"source\":\"iana\"},\"application/vnd.wap.slc\":{\"source\":\"iana\"},\"application/vnd.wap.wbxml\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"wbxml\"]},\"application/vnd.wap.wmlc\":{\"source\":\"iana\",\"extensions\":[\"wmlc\"]},\"application/vnd.wap.wmlscriptc\":{\"source\":\"iana\",\"extensions\":[\"wmlsc\"]},\"application/vnd.webturbo\":{\"source\":\"iana\",\"extensions\":[\"wtb\"]},\"application/vnd.wfa.p2p\":{\"source\":\"iana\"},\"application/vnd.wfa.wsc\":{\"source\":\"iana\"},\"application/vnd.windows.devicepairing\":{\"source\":\"iana\"},\"application/vnd.wmc\":{\"source\":\"iana\"},\"application/vnd.wmf.bootstrap\":{\"source\":\"iana\"},\"application/vnd.wolfram.mathematica\":{\"source\":\"iana\"},\"application/vnd.wolfram.mathematica.package\":{\"source\":\"iana\"},\"application/vnd.wolfram.player\":{\"source\":\"iana\",\"extensions\":[\"nbp\"]},\"application/vnd.wordperfect\":{\"source\":\"iana\",\"extensions\":[\"wpd\"]},\"application/vnd.wqd\":{\"source\":\"iana\",\"extensions\":[\"wqd\"]},\"application/vnd.wrq-hp3000-labelled\":{\"source\":\"iana\"},\"application/vnd.wt.stf\":{\"source\":\"iana\",\"extensions\":[\"stf\"]},\"application/vnd.wv.csp+wbxml\":{\"source\":\"iana\"},\"application/vnd.wv.csp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.wv.ssp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xacml+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xara\":{\"source\":\"iana\",\"extensions\":[\"xar\"]},\"application/vnd.xfdl\":{\"source\":\"iana\",\"extensions\":[\"xfdl\"]},\"application/vnd.xfdl.webform\":{\"source\":\"iana\"},\"application/vnd.xmi+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/vnd.xmpie.cpkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.dpkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.plan\":{\"source\":\"iana\"},\"application/vnd.xmpie.ppkg\":{\"source\":\"iana\"},\"application/vnd.xmpie.xlim\":{\"source\":\"iana\"},\"application/vnd.yamaha.hv-dic\":{\"source\":\"iana\",\"extensions\":[\"hvd\"]},\"application/vnd.yamaha.hv-script\":{\"source\":\"iana\",\"extensions\":[\"hvs\"]},\"application/vnd.yamaha.hv-voice\":{\"source\":\"iana\",\"extensions\":[\"hvp\"]},\"application/vnd.yamaha.openscoreformat\":{\"source\":\"iana\",\"extensions\":[\"osf\"]},\"application/vnd.yamaha.openscoreformat.osfpvg+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"osfpvg\"]},\"application/vnd.yamaha.remote-setup\":{\"source\":\"iana\"},\"application/vnd.yamaha.smaf-audio\":{\"source\":\"iana\",\"extensions\":[\"saf\"]},\"application/vnd.yamaha.smaf-phrase\":{\"source\":\"iana\",\"extensions\":[\"spf\"]},\"application/vnd.yamaha.through-ngn\":{\"source\":\"iana\"},\"application/vnd.yamaha.tunnel-udpencap\":{\"source\":\"iana\"},\"application/vnd.yaoweme\":{\"source\":\"iana\"},\"application/vnd.yellowriver-custom-menu\":{\"source\":\"iana\",\"extensions\":[\"cmp\"]},\"application/vnd.youtube.yt\":{\"source\":\"iana\"},\"application/vnd.zul\":{\"source\":\"iana\",\"extensions\":[\"zir\",\"zirz\"]},\"application/vnd.zzazz.deck+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"zaz\"]},\"application/voicexml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"vxml\"]},\"application/voucher-cms+json\":{\"source\":\"iana\",\"compressible\":true},\"application/vq-rtcpxr\":{\"source\":\"iana\"},\"application/wasm\":{\"compressible\":true,\"extensions\":[\"wasm\"]},\"application/watcherinfo+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/webpush-options+json\":{\"source\":\"iana\",\"compressible\":true},\"application/whoispp-query\":{\"source\":\"iana\"},\"application/whoispp-response\":{\"source\":\"iana\"},\"application/widget\":{\"source\":\"iana\",\"extensions\":[\"wgt\"]},\"application/winhlp\":{\"source\":\"apache\",\"extensions\":[\"hlp\"]},\"application/wita\":{\"source\":\"iana\"},\"application/wordperfect5.1\":{\"source\":\"iana\"},\"application/wsdl+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wsdl\"]},\"application/wspolicy+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"wspolicy\"]},\"application/x-7z-compressed\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"7z\"]},\"application/x-abiword\":{\"source\":\"apache\",\"extensions\":[\"abw\"]},\"application/x-ace-compressed\":{\"source\":\"apache\",\"extensions\":[\"ace\"]},\"application/x-amf\":{\"source\":\"apache\"},\"application/x-apple-diskimage\":{\"source\":\"apache\",\"extensions\":[\"dmg\"]},\"application/x-arj\":{\"compressible\":false,\"extensions\":[\"arj\"]},\"application/x-authorware-bin\":{\"source\":\"apache\",\"extensions\":[\"aab\",\"x32\",\"u32\",\"vox\"]},\"application/x-authorware-map\":{\"source\":\"apache\",\"extensions\":[\"aam\"]},\"application/x-authorware-seg\":{\"source\":\"apache\",\"extensions\":[\"aas\"]},\"application/x-bcpio\":{\"source\":\"apache\",\"extensions\":[\"bcpio\"]},\"application/x-bdoc\":{\"compressible\":false,\"extensions\":[\"bdoc\"]},\"application/x-bittorrent\":{\"source\":\"apache\",\"extensions\":[\"torrent\"]},\"application/x-blorb\":{\"source\":\"apache\",\"extensions\":[\"blb\",\"blorb\"]},\"application/x-bzip\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"bz\"]},\"application/x-bzip2\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"bz2\",\"boz\"]},\"application/x-cbr\":{\"source\":\"apache\",\"extensions\":[\"cbr\",\"cba\",\"cbt\",\"cbz\",\"cb7\"]},\"application/x-cdlink\":{\"source\":\"apache\",\"extensions\":[\"vcd\"]},\"application/x-cfs-compressed\":{\"source\":\"apache\",\"extensions\":[\"cfs\"]},\"application/x-chat\":{\"source\":\"apache\",\"extensions\":[\"chat\"]},\"application/x-chess-pgn\":{\"source\":\"apache\",\"extensions\":[\"pgn\"]},\"application/x-chrome-extension\":{\"extensions\":[\"crx\"]},\"application/x-cocoa\":{\"source\":\"nginx\",\"extensions\":[\"cco\"]},\"application/x-compress\":{\"source\":\"apache\"},\"application/x-conference\":{\"source\":\"apache\",\"extensions\":[\"nsc\"]},\"application/x-cpio\":{\"source\":\"apache\",\"extensions\":[\"cpio\"]},\"application/x-csh\":{\"source\":\"apache\",\"extensions\":[\"csh\"]},\"application/x-deb\":{\"compressible\":false},\"application/x-debian-package\":{\"source\":\"apache\",\"extensions\":[\"deb\",\"udeb\"]},\"application/x-dgc-compressed\":{\"source\":\"apache\",\"extensions\":[\"dgc\"]},\"application/x-director\":{\"source\":\"apache\",\"extensions\":[\"dir\",\"dcr\",\"dxr\",\"cst\",\"cct\",\"cxt\",\"w3d\",\"fgd\",\"swa\"]},\"application/x-doom\":{\"source\":\"apache\",\"extensions\":[\"wad\"]},\"application/x-dtbncx+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ncx\"]},\"application/x-dtbook+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"dtb\"]},\"application/x-dtbresource+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"res\"]},\"application/x-dvi\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"dvi\"]},\"application/x-envoy\":{\"source\":\"apache\",\"extensions\":[\"evy\"]},\"application/x-eva\":{\"source\":\"apache\",\"extensions\":[\"eva\"]},\"application/x-font-bdf\":{\"source\":\"apache\",\"extensions\":[\"bdf\"]},\"application/x-font-dos\":{\"source\":\"apache\"},\"application/x-font-framemaker\":{\"source\":\"apache\"},\"application/x-font-ghostscript\":{\"source\":\"apache\",\"extensions\":[\"gsf\"]},\"application/x-font-libgrx\":{\"source\":\"apache\"},\"application/x-font-linux-psf\":{\"source\":\"apache\",\"extensions\":[\"psf\"]},\"application/x-font-pcf\":{\"source\":\"apache\",\"extensions\":[\"pcf\"]},\"application/x-font-snf\":{\"source\":\"apache\",\"extensions\":[\"snf\"]},\"application/x-font-speedo\":{\"source\":\"apache\"},\"application/x-font-sunos-news\":{\"source\":\"apache\"},\"application/x-font-type1\":{\"source\":\"apache\",\"extensions\":[\"pfa\",\"pfb\",\"pfm\",\"afm\"]},\"application/x-font-vfont\":{\"source\":\"apache\"},\"application/x-freearc\":{\"source\":\"apache\",\"extensions\":[\"arc\"]},\"application/x-futuresplash\":{\"source\":\"apache\",\"extensions\":[\"spl\"]},\"application/x-gca-compressed\":{\"source\":\"apache\",\"extensions\":[\"gca\"]},\"application/x-glulx\":{\"source\":\"apache\",\"extensions\":[\"ulx\"]},\"application/x-gnumeric\":{\"source\":\"apache\",\"extensions\":[\"gnumeric\"]},\"application/x-gramps-xml\":{\"source\":\"apache\",\"extensions\":[\"gramps\"]},\"application/x-gtar\":{\"source\":\"apache\",\"extensions\":[\"gtar\"]},\"application/x-gzip\":{\"source\":\"apache\"},\"application/x-hdf\":{\"source\":\"apache\",\"extensions\":[\"hdf\"]},\"application/x-httpd-php\":{\"compressible\":true,\"extensions\":[\"php\"]},\"application/x-install-instructions\":{\"source\":\"apache\",\"extensions\":[\"install\"]},\"application/x-iso9660-image\":{\"source\":\"apache\",\"extensions\":[\"iso\"]},\"application/x-java-archive-diff\":{\"source\":\"nginx\",\"extensions\":[\"jardiff\"]},\"application/x-java-jnlp-file\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"jnlp\"]},\"application/x-javascript\":{\"compressible\":true},\"application/x-keepass2\":{\"extensions\":[\"kdbx\"]},\"application/x-latex\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"latex\"]},\"application/x-lua-bytecode\":{\"extensions\":[\"luac\"]},\"application/x-lzh-compressed\":{\"source\":\"apache\",\"extensions\":[\"lzh\",\"lha\"]},\"application/x-makeself\":{\"source\":\"nginx\",\"extensions\":[\"run\"]},\"application/x-mie\":{\"source\":\"apache\",\"extensions\":[\"mie\"]},\"application/x-mobipocket-ebook\":{\"source\":\"apache\",\"extensions\":[\"prc\",\"mobi\"]},\"application/x-mpegurl\":{\"compressible\":false},\"application/x-ms-application\":{\"source\":\"apache\",\"extensions\":[\"application\"]},\"application/x-ms-shortcut\":{\"source\":\"apache\",\"extensions\":[\"lnk\"]},\"application/x-ms-wmd\":{\"source\":\"apache\",\"extensions\":[\"wmd\"]},\"application/x-ms-wmz\":{\"source\":\"apache\",\"extensions\":[\"wmz\"]},\"application/x-ms-xbap\":{\"source\":\"apache\",\"extensions\":[\"xbap\"]},\"application/x-msaccess\":{\"source\":\"apache\",\"extensions\":[\"mdb\"]},\"application/x-msbinder\":{\"source\":\"apache\",\"extensions\":[\"obd\"]},\"application/x-mscardfile\":{\"source\":\"apache\",\"extensions\":[\"crd\"]},\"application/x-msclip\":{\"source\":\"apache\",\"extensions\":[\"clp\"]},\"application/x-msdos-program\":{\"extensions\":[\"exe\"]},\"application/x-msdownload\":{\"source\":\"apache\",\"extensions\":[\"exe\",\"dll\",\"com\",\"bat\",\"msi\"]},\"application/x-msmediaview\":{\"source\":\"apache\",\"extensions\":[\"mvb\",\"m13\",\"m14\"]},\"application/x-msmetafile\":{\"source\":\"apache\",\"extensions\":[\"wmf\",\"wmz\",\"emf\",\"emz\"]},\"application/x-msmoney\":{\"source\":\"apache\",\"extensions\":[\"mny\"]},\"application/x-mspublisher\":{\"source\":\"apache\",\"extensions\":[\"pub\"]},\"application/x-msschedule\":{\"source\":\"apache\",\"extensions\":[\"scd\"]},\"application/x-msterminal\":{\"source\":\"apache\",\"extensions\":[\"trm\"]},\"application/x-mswrite\":{\"source\":\"apache\",\"extensions\":[\"wri\"]},\"application/x-netcdf\":{\"source\":\"apache\",\"extensions\":[\"nc\",\"cdf\"]},\"application/x-ns-proxy-autoconfig\":{\"compressible\":true,\"extensions\":[\"pac\"]},\"application/x-nzb\":{\"source\":\"apache\",\"extensions\":[\"nzb\"]},\"application/x-perl\":{\"source\":\"nginx\",\"extensions\":[\"pl\",\"pm\"]},\"application/x-pilot\":{\"source\":\"nginx\",\"extensions\":[\"prc\",\"pdb\"]},\"application/x-pkcs12\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"p12\",\"pfx\"]},\"application/x-pkcs7-certificates\":{\"source\":\"apache\",\"extensions\":[\"p7b\",\"spc\"]},\"application/x-pkcs7-certreqresp\":{\"source\":\"apache\",\"extensions\":[\"p7r\"]},\"application/x-pki-message\":{\"source\":\"iana\"},\"application/x-rar-compressed\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"rar\"]},\"application/x-redhat-package-manager\":{\"source\":\"nginx\",\"extensions\":[\"rpm\"]},\"application/x-research-info-systems\":{\"source\":\"apache\",\"extensions\":[\"ris\"]},\"application/x-sea\":{\"source\":\"nginx\",\"extensions\":[\"sea\"]},\"application/x-sh\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"sh\"]},\"application/x-shar\":{\"source\":\"apache\",\"extensions\":[\"shar\"]},\"application/x-shockwave-flash\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"swf\"]},\"application/x-silverlight-app\":{\"source\":\"apache\",\"extensions\":[\"xap\"]},\"application/x-sql\":{\"source\":\"apache\",\"extensions\":[\"sql\"]},\"application/x-stuffit\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"sit\"]},\"application/x-stuffitx\":{\"source\":\"apache\",\"extensions\":[\"sitx\"]},\"application/x-subrip\":{\"source\":\"apache\",\"extensions\":[\"srt\"]},\"application/x-sv4cpio\":{\"source\":\"apache\",\"extensions\":[\"sv4cpio\"]},\"application/x-sv4crc\":{\"source\":\"apache\",\"extensions\":[\"sv4crc\"]},\"application/x-t3vm-image\":{\"source\":\"apache\",\"extensions\":[\"t3\"]},\"application/x-tads\":{\"source\":\"apache\",\"extensions\":[\"gam\"]},\"application/x-tar\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"tar\"]},\"application/x-tcl\":{\"source\":\"apache\",\"extensions\":[\"tcl\",\"tk\"]},\"application/x-tex\":{\"source\":\"apache\",\"extensions\":[\"tex\"]},\"application/x-tex-tfm\":{\"source\":\"apache\",\"extensions\":[\"tfm\"]},\"application/x-texinfo\":{\"source\":\"apache\",\"extensions\":[\"texinfo\",\"texi\"]},\"application/x-tgif\":{\"source\":\"apache\",\"extensions\":[\"obj\"]},\"application/x-ustar\":{\"source\":\"apache\",\"extensions\":[\"ustar\"]},\"application/x-virtualbox-hdd\":{\"compressible\":true,\"extensions\":[\"hdd\"]},\"application/x-virtualbox-ova\":{\"compressible\":true,\"extensions\":[\"ova\"]},\"application/x-virtualbox-ovf\":{\"compressible\":true,\"extensions\":[\"ovf\"]},\"application/x-virtualbox-vbox\":{\"compressible\":true,\"extensions\":[\"vbox\"]},\"application/x-virtualbox-vbox-extpack\":{\"compressible\":false,\"extensions\":[\"vbox-extpack\"]},\"application/x-virtualbox-vdi\":{\"compressible\":true,\"extensions\":[\"vdi\"]},\"application/x-virtualbox-vhd\":{\"compressible\":true,\"extensions\":[\"vhd\"]},\"application/x-virtualbox-vmdk\":{\"compressible\":true,\"extensions\":[\"vmdk\"]},\"application/x-wais-source\":{\"source\":\"apache\",\"extensions\":[\"src\"]},\"application/x-web-app-manifest+json\":{\"compressible\":true,\"extensions\":[\"webapp\"]},\"application/x-www-form-urlencoded\":{\"source\":\"iana\",\"compressible\":true},\"application/x-x509-ca-cert\":{\"source\":\"iana\",\"extensions\":[\"der\",\"crt\",\"pem\"]},\"application/x-x509-ca-ra-cert\":{\"source\":\"iana\"},\"application/x-x509-next-ca-cert\":{\"source\":\"iana\"},\"application/x-xfig\":{\"source\":\"apache\",\"extensions\":[\"fig\"]},\"application/x-xliff+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xlf\"]},\"application/x-xpinstall\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"xpi\"]},\"application/x-xz\":{\"source\":\"apache\",\"extensions\":[\"xz\"]},\"application/x-zmachine\":{\"source\":\"apache\",\"extensions\":[\"z1\",\"z2\",\"z3\",\"z4\",\"z5\",\"z6\",\"z7\",\"z8\"]},\"application/x400-bp\":{\"source\":\"iana\"},\"application/xacml+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xaml+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xaml\"]},\"application/xcap-att+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xav\"]},\"application/xcap-caps+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xca\"]},\"application/xcap-diff+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xdf\"]},\"application/xcap-el+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xel\"]},\"application/xcap-error+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xer\"]},\"application/xcap-ns+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xns\"]},\"application/xcon-conference-info+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xcon-conference-info-diff+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xenc+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xenc\"]},\"application/xhtml+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xhtml\",\"xht\"]},\"application/xhtml-voice+xml\":{\"source\":\"apache\",\"compressible\":true},\"application/xliff+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xlf\"]},\"application/xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xml\",\"xsl\",\"xsd\",\"rng\"]},\"application/xml-dtd\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dtd\"]},\"application/xml-external-parsed-entity\":{\"source\":\"iana\"},\"application/xml-patch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xmpp+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/xop+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xop\"]},\"application/xproc+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xpl\"]},\"application/xslt+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xslt\"]},\"application/xspf+xml\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"xspf\"]},\"application/xv+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"mxml\",\"xhvml\",\"xvml\",\"xvm\"]},\"application/yang\":{\"source\":\"iana\",\"extensions\":[\"yang\"]},\"application/yang-data+json\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-data+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-patch+json\":{\"source\":\"iana\",\"compressible\":true},\"application/yang-patch+xml\":{\"source\":\"iana\",\"compressible\":true},\"application/yin+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"yin\"]},\"application/zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"zip\"]},\"application/zlib\":{\"source\":\"iana\"},\"application/zstd\":{\"source\":\"iana\"},\"audio/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"audio/32kadpcm\":{\"source\":\"iana\"},\"audio/3gpp\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"3gpp\"]},\"audio/3gpp2\":{\"source\":\"iana\"},\"audio/aac\":{\"source\":\"iana\"},\"audio/ac3\":{\"source\":\"iana\"},\"audio/adpcm\":{\"source\":\"apache\",\"extensions\":[\"adp\"]},\"audio/amr\":{\"source\":\"iana\"},\"audio/amr-wb\":{\"source\":\"iana\"},\"audio/amr-wb+\":{\"source\":\"iana\"},\"audio/aptx\":{\"source\":\"iana\"},\"audio/asc\":{\"source\":\"iana\"},\"audio/atrac-advanced-lossless\":{\"source\":\"iana\"},\"audio/atrac-x\":{\"source\":\"iana\"},\"audio/atrac3\":{\"source\":\"iana\"},\"audio/basic\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"au\",\"snd\"]},\"audio/bv16\":{\"source\":\"iana\"},\"audio/bv32\":{\"source\":\"iana\"},\"audio/clearmode\":{\"source\":\"iana\"},\"audio/cn\":{\"source\":\"iana\"},\"audio/dat12\":{\"source\":\"iana\"},\"audio/dls\":{\"source\":\"iana\"},\"audio/dsr-es201108\":{\"source\":\"iana\"},\"audio/dsr-es202050\":{\"source\":\"iana\"},\"audio/dsr-es202211\":{\"source\":\"iana\"},\"audio/dsr-es202212\":{\"source\":\"iana\"},\"audio/dv\":{\"source\":\"iana\"},\"audio/dvi4\":{\"source\":\"iana\"},\"audio/eac3\":{\"source\":\"iana\"},\"audio/encaprtp\":{\"source\":\"iana\"},\"audio/evrc\":{\"source\":\"iana\"},\"audio/evrc-qcp\":{\"source\":\"iana\"},\"audio/evrc0\":{\"source\":\"iana\"},\"audio/evrc1\":{\"source\":\"iana\"},\"audio/evrcb\":{\"source\":\"iana\"},\"audio/evrcb0\":{\"source\":\"iana\"},\"audio/evrcb1\":{\"source\":\"iana\"},\"audio/evrcnw\":{\"source\":\"iana\"},\"audio/evrcnw0\":{\"source\":\"iana\"},\"audio/evrcnw1\":{\"source\":\"iana\"},\"audio/evrcwb\":{\"source\":\"iana\"},\"audio/evrcwb0\":{\"source\":\"iana\"},\"audio/evrcwb1\":{\"source\":\"iana\"},\"audio/evs\":{\"source\":\"iana\"},\"audio/flexfec\":{\"source\":\"iana\"},\"audio/fwdred\":{\"source\":\"iana\"},\"audio/g711-0\":{\"source\":\"iana\"},\"audio/g719\":{\"source\":\"iana\"},\"audio/g722\":{\"source\":\"iana\"},\"audio/g7221\":{\"source\":\"iana\"},\"audio/g723\":{\"source\":\"iana\"},\"audio/g726-16\":{\"source\":\"iana\"},\"audio/g726-24\":{\"source\":\"iana\"},\"audio/g726-32\":{\"source\":\"iana\"},\"audio/g726-40\":{\"source\":\"iana\"},\"audio/g728\":{\"source\":\"iana\"},\"audio/g729\":{\"source\":\"iana\"},\"audio/g7291\":{\"source\":\"iana\"},\"audio/g729d\":{\"source\":\"iana\"},\"audio/g729e\":{\"source\":\"iana\"},\"audio/gsm\":{\"source\":\"iana\"},\"audio/gsm-efr\":{\"source\":\"iana\"},\"audio/gsm-hr-08\":{\"source\":\"iana\"},\"audio/ilbc\":{\"source\":\"iana\"},\"audio/ip-mr_v2.5\":{\"source\":\"iana\"},\"audio/isac\":{\"source\":\"apache\"},\"audio/l16\":{\"source\":\"iana\"},\"audio/l20\":{\"source\":\"iana\"},\"audio/l24\":{\"source\":\"iana\",\"compressible\":false},\"audio/l8\":{\"source\":\"iana\"},\"audio/lpc\":{\"source\":\"iana\"},\"audio/melp\":{\"source\":\"iana\"},\"audio/melp1200\":{\"source\":\"iana\"},\"audio/melp2400\":{\"source\":\"iana\"},\"audio/melp600\":{\"source\":\"iana\"},\"audio/mhas\":{\"source\":\"iana\"},\"audio/midi\":{\"source\":\"apache\",\"extensions\":[\"mid\",\"midi\",\"kar\",\"rmi\"]},\"audio/mobile-xmf\":{\"source\":\"iana\",\"extensions\":[\"mxmf\"]},\"audio/mp3\":{\"compressible\":false,\"extensions\":[\"mp3\"]},\"audio/mp4\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"m4a\",\"mp4a\"]},\"audio/mp4a-latm\":{\"source\":\"iana\"},\"audio/mpa\":{\"source\":\"iana\"},\"audio/mpa-robust\":{\"source\":\"iana\"},\"audio/mpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mpga\",\"mp2\",\"mp2a\",\"mp3\",\"m2a\",\"m3a\"]},\"audio/mpeg4-generic\":{\"source\":\"iana\"},\"audio/musepack\":{\"source\":\"apache\"},\"audio/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"oga\",\"ogg\",\"spx\"]},\"audio/opus\":{\"source\":\"iana\"},\"audio/parityfec\":{\"source\":\"iana\"},\"audio/pcma\":{\"source\":\"iana\"},\"audio/pcma-wb\":{\"source\":\"iana\"},\"audio/pcmu\":{\"source\":\"iana\"},\"audio/pcmu-wb\":{\"source\":\"iana\"},\"audio/prs.sid\":{\"source\":\"iana\"},\"audio/qcelp\":{\"source\":\"iana\"},\"audio/raptorfec\":{\"source\":\"iana\"},\"audio/red\":{\"source\":\"iana\"},\"audio/rtp-enc-aescm128\":{\"source\":\"iana\"},\"audio/rtp-midi\":{\"source\":\"iana\"},\"audio/rtploopback\":{\"source\":\"iana\"},\"audio/rtx\":{\"source\":\"iana\"},\"audio/s3m\":{\"source\":\"apache\",\"extensions\":[\"s3m\"]},\"audio/silk\":{\"source\":\"apache\",\"extensions\":[\"sil\"]},\"audio/smv\":{\"source\":\"iana\"},\"audio/smv-qcp\":{\"source\":\"iana\"},\"audio/smv0\":{\"source\":\"iana\"},\"audio/sp-midi\":{\"source\":\"iana\"},\"audio/speex\":{\"source\":\"iana\"},\"audio/t140c\":{\"source\":\"iana\"},\"audio/t38\":{\"source\":\"iana\"},\"audio/telephone-event\":{\"source\":\"iana\"},\"audio/tetra_acelp\":{\"source\":\"iana\"},\"audio/tetra_acelp_bb\":{\"source\":\"iana\"},\"audio/tone\":{\"source\":\"iana\"},\"audio/uemclip\":{\"source\":\"iana\"},\"audio/ulpfec\":{\"source\":\"iana\"},\"audio/usac\":{\"source\":\"iana\"},\"audio/vdvi\":{\"source\":\"iana\"},\"audio/vmr-wb\":{\"source\":\"iana\"},\"audio/vnd.3gpp.iufp\":{\"source\":\"iana\"},\"audio/vnd.4sb\":{\"source\":\"iana\"},\"audio/vnd.audiokoz\":{\"source\":\"iana\"},\"audio/vnd.celp\":{\"source\":\"iana\"},\"audio/vnd.cisco.nse\":{\"source\":\"iana\"},\"audio/vnd.cmles.radio-events\":{\"source\":\"iana\"},\"audio/vnd.cns.anp1\":{\"source\":\"iana\"},\"audio/vnd.cns.inf1\":{\"source\":\"iana\"},\"audio/vnd.dece.audio\":{\"source\":\"iana\",\"extensions\":[\"uva\",\"uvva\"]},\"audio/vnd.digital-winds\":{\"source\":\"iana\",\"extensions\":[\"eol\"]},\"audio/vnd.dlna.adts\":{\"source\":\"iana\"},\"audio/vnd.dolby.heaac.1\":{\"source\":\"iana\"},\"audio/vnd.dolby.heaac.2\":{\"source\":\"iana\"},\"audio/vnd.dolby.mlp\":{\"source\":\"iana\"},\"audio/vnd.dolby.mps\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2x\":{\"source\":\"iana\"},\"audio/vnd.dolby.pl2z\":{\"source\":\"iana\"},\"audio/vnd.dolby.pulse.1\":{\"source\":\"iana\"},\"audio/vnd.dra\":{\"source\":\"iana\",\"extensions\":[\"dra\"]},\"audio/vnd.dts\":{\"source\":\"iana\",\"extensions\":[\"dts\"]},\"audio/vnd.dts.hd\":{\"source\":\"iana\",\"extensions\":[\"dtshd\"]},\"audio/vnd.dts.uhd\":{\"source\":\"iana\"},\"audio/vnd.dvb.file\":{\"source\":\"iana\"},\"audio/vnd.everad.plj\":{\"source\":\"iana\"},\"audio/vnd.hns.audio\":{\"source\":\"iana\"},\"audio/vnd.lucent.voice\":{\"source\":\"iana\",\"extensions\":[\"lvp\"]},\"audio/vnd.ms-playready.media.pya\":{\"source\":\"iana\",\"extensions\":[\"pya\"]},\"audio/vnd.nokia.mobile-xmf\":{\"source\":\"iana\"},\"audio/vnd.nortel.vbk\":{\"source\":\"iana\"},\"audio/vnd.nuera.ecelp4800\":{\"source\":\"iana\",\"extensions\":[\"ecelp4800\"]},\"audio/vnd.nuera.ecelp7470\":{\"source\":\"iana\",\"extensions\":[\"ecelp7470\"]},\"audio/vnd.nuera.ecelp9600\":{\"source\":\"iana\",\"extensions\":[\"ecelp9600\"]},\"audio/vnd.octel.sbc\":{\"source\":\"iana\"},\"audio/vnd.presonus.multitrack\":{\"source\":\"iana\"},\"audio/vnd.qcelp\":{\"source\":\"iana\"},\"audio/vnd.rhetorex.32kadpcm\":{\"source\":\"iana\"},\"audio/vnd.rip\":{\"source\":\"iana\",\"extensions\":[\"rip\"]},\"audio/vnd.rn-realaudio\":{\"compressible\":false},\"audio/vnd.sealedmedia.softseal.mpeg\":{\"source\":\"iana\"},\"audio/vnd.vmx.cvsd\":{\"source\":\"iana\"},\"audio/vnd.wave\":{\"compressible\":false},\"audio/vorbis\":{\"source\":\"iana\",\"compressible\":false},\"audio/vorbis-config\":{\"source\":\"iana\"},\"audio/wav\":{\"compressible\":false,\"extensions\":[\"wav\"]},\"audio/wave\":{\"compressible\":false,\"extensions\":[\"wav\"]},\"audio/webm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"weba\"]},\"audio/x-aac\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"aac\"]},\"audio/x-aiff\":{\"source\":\"apache\",\"extensions\":[\"aif\",\"aiff\",\"aifc\"]},\"audio/x-caf\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"caf\"]},\"audio/x-flac\":{\"source\":\"apache\",\"extensions\":[\"flac\"]},\"audio/x-m4a\":{\"source\":\"nginx\",\"extensions\":[\"m4a\"]},\"audio/x-matroska\":{\"source\":\"apache\",\"extensions\":[\"mka\"]},\"audio/x-mpegurl\":{\"source\":\"apache\",\"extensions\":[\"m3u\"]},\"audio/x-ms-wax\":{\"source\":\"apache\",\"extensions\":[\"wax\"]},\"audio/x-ms-wma\":{\"source\":\"apache\",\"extensions\":[\"wma\"]},\"audio/x-pn-realaudio\":{\"source\":\"apache\",\"extensions\":[\"ram\",\"ra\"]},\"audio/x-pn-realaudio-plugin\":{\"source\":\"apache\",\"extensions\":[\"rmp\"]},\"audio/x-realaudio\":{\"source\":\"nginx\",\"extensions\":[\"ra\"]},\"audio/x-tta\":{\"source\":\"apache\"},\"audio/x-wav\":{\"source\":\"apache\",\"extensions\":[\"wav\"]},\"audio/xm\":{\"source\":\"apache\",\"extensions\":[\"xm\"]},\"chemical/x-cdx\":{\"source\":\"apache\",\"extensions\":[\"cdx\"]},\"chemical/x-cif\":{\"source\":\"apache\",\"extensions\":[\"cif\"]},\"chemical/x-cmdf\":{\"source\":\"apache\",\"extensions\":[\"cmdf\"]},\"chemical/x-cml\":{\"source\":\"apache\",\"extensions\":[\"cml\"]},\"chemical/x-csml\":{\"source\":\"apache\",\"extensions\":[\"csml\"]},\"chemical/x-pdb\":{\"source\":\"apache\"},\"chemical/x-xyz\":{\"source\":\"apache\",\"extensions\":[\"xyz\"]},\"font/collection\":{\"source\":\"iana\",\"extensions\":[\"ttc\"]},\"font/otf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"otf\"]},\"font/sfnt\":{\"source\":\"iana\"},\"font/ttf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"ttf\"]},\"font/woff\":{\"source\":\"iana\",\"extensions\":[\"woff\"]},\"font/woff2\":{\"source\":\"iana\",\"extensions\":[\"woff2\"]},\"image/aces\":{\"source\":\"iana\",\"extensions\":[\"exr\"]},\"image/apng\":{\"compressible\":false,\"extensions\":[\"apng\"]},\"image/avci\":{\"source\":\"iana\"},\"image/avcs\":{\"source\":\"iana\"},\"image/bmp\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"bmp\"]},\"image/cgm\":{\"source\":\"iana\",\"extensions\":[\"cgm\"]},\"image/dicom-rle\":{\"source\":\"iana\",\"extensions\":[\"drle\"]},\"image/emf\":{\"source\":\"iana\",\"extensions\":[\"emf\"]},\"image/fits\":{\"source\":\"iana\",\"extensions\":[\"fits\"]},\"image/g3fax\":{\"source\":\"iana\",\"extensions\":[\"g3\"]},\"image/gif\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"gif\"]},\"image/heic\":{\"source\":\"iana\",\"extensions\":[\"heic\"]},\"image/heic-sequence\":{\"source\":\"iana\",\"extensions\":[\"heics\"]},\"image/heif\":{\"source\":\"iana\",\"extensions\":[\"heif\"]},\"image/heif-sequence\":{\"source\":\"iana\",\"extensions\":[\"heifs\"]},\"image/hej2k\":{\"source\":\"iana\",\"extensions\":[\"hej2\"]},\"image/hsj2\":{\"source\":\"iana\",\"extensions\":[\"hsj2\"]},\"image/ief\":{\"source\":\"iana\",\"extensions\":[\"ief\"]},\"image/jls\":{\"source\":\"iana\",\"extensions\":[\"jls\"]},\"image/jp2\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jp2\",\"jpg2\"]},\"image/jpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpeg\",\"jpg\",\"jpe\"]},\"image/jph\":{\"source\":\"iana\",\"extensions\":[\"jph\"]},\"image/jphc\":{\"source\":\"iana\",\"extensions\":[\"jhc\"]},\"image/jpm\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpm\"]},\"image/jpx\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"jpx\",\"jpf\"]},\"image/jxr\":{\"source\":\"iana\",\"extensions\":[\"jxr\"]},\"image/jxra\":{\"source\":\"iana\",\"extensions\":[\"jxra\"]},\"image/jxrs\":{\"source\":\"iana\",\"extensions\":[\"jxrs\"]},\"image/jxs\":{\"source\":\"iana\",\"extensions\":[\"jxs\"]},\"image/jxsc\":{\"source\":\"iana\",\"extensions\":[\"jxsc\"]},\"image/jxsi\":{\"source\":\"iana\",\"extensions\":[\"jxsi\"]},\"image/jxss\":{\"source\":\"iana\",\"extensions\":[\"jxss\"]},\"image/ktx\":{\"source\":\"iana\",\"extensions\":[\"ktx\"]},\"image/naplps\":{\"source\":\"iana\"},\"image/pjpeg\":{\"compressible\":false},\"image/png\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"png\"]},\"image/prs.btif\":{\"source\":\"iana\",\"extensions\":[\"btif\"]},\"image/prs.pti\":{\"source\":\"iana\",\"extensions\":[\"pti\"]},\"image/pwg-raster\":{\"source\":\"iana\"},\"image/sgi\":{\"source\":\"apache\",\"extensions\":[\"sgi\"]},\"image/svg+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"svg\",\"svgz\"]},\"image/t38\":{\"source\":\"iana\",\"extensions\":[\"t38\"]},\"image/tiff\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"tif\",\"tiff\"]},\"image/tiff-fx\":{\"source\":\"iana\",\"extensions\":[\"tfx\"]},\"image/vnd.adobe.photoshop\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"psd\"]},\"image/vnd.airzip.accelerator.azv\":{\"source\":\"iana\",\"extensions\":[\"azv\"]},\"image/vnd.cns.inf2\":{\"source\":\"iana\"},\"image/vnd.dece.graphic\":{\"source\":\"iana\",\"extensions\":[\"uvi\",\"uvvi\",\"uvg\",\"uvvg\"]},\"image/vnd.djvu\":{\"source\":\"iana\",\"extensions\":[\"djvu\",\"djv\"]},\"image/vnd.dvb.subtitle\":{\"source\":\"iana\",\"extensions\":[\"sub\"]},\"image/vnd.dwg\":{\"source\":\"iana\",\"extensions\":[\"dwg\"]},\"image/vnd.dxf\":{\"source\":\"iana\",\"extensions\":[\"dxf\"]},\"image/vnd.fastbidsheet\":{\"source\":\"iana\",\"extensions\":[\"fbs\"]},\"image/vnd.fpx\":{\"source\":\"iana\",\"extensions\":[\"fpx\"]},\"image/vnd.fst\":{\"source\":\"iana\",\"extensions\":[\"fst\"]},\"image/vnd.fujixerox.edmics-mmr\":{\"source\":\"iana\",\"extensions\":[\"mmr\"]},\"image/vnd.fujixerox.edmics-rlc\":{\"source\":\"iana\",\"extensions\":[\"rlc\"]},\"image/vnd.globalgraphics.pgb\":{\"source\":\"iana\"},\"image/vnd.microsoft.icon\":{\"source\":\"iana\",\"extensions\":[\"ico\"]},\"image/vnd.mix\":{\"source\":\"iana\"},\"image/vnd.mozilla.apng\":{\"source\":\"iana\"},\"image/vnd.ms-dds\":{\"extensions\":[\"dds\"]},\"image/vnd.ms-modi\":{\"source\":\"iana\",\"extensions\":[\"mdi\"]},\"image/vnd.ms-photo\":{\"source\":\"apache\",\"extensions\":[\"wdp\"]},\"image/vnd.net-fpx\":{\"source\":\"iana\",\"extensions\":[\"npx\"]},\"image/vnd.radiance\":{\"source\":\"iana\"},\"image/vnd.sealed.png\":{\"source\":\"iana\"},\"image/vnd.sealedmedia.softseal.gif\":{\"source\":\"iana\"},\"image/vnd.sealedmedia.softseal.jpg\":{\"source\":\"iana\"},\"image/vnd.svf\":{\"source\":\"iana\"},\"image/vnd.tencent.tap\":{\"source\":\"iana\",\"extensions\":[\"tap\"]},\"image/vnd.valve.source.texture\":{\"source\":\"iana\",\"extensions\":[\"vtf\"]},\"image/vnd.wap.wbmp\":{\"source\":\"iana\",\"extensions\":[\"wbmp\"]},\"image/vnd.xiff\":{\"source\":\"iana\",\"extensions\":[\"xif\"]},\"image/vnd.zbrush.pcx\":{\"source\":\"iana\",\"extensions\":[\"pcx\"]},\"image/webp\":{\"source\":\"apache\",\"extensions\":[\"webp\"]},\"image/wmf\":{\"source\":\"iana\",\"extensions\":[\"wmf\"]},\"image/x-3ds\":{\"source\":\"apache\",\"extensions\":[\"3ds\"]},\"image/x-cmu-raster\":{\"source\":\"apache\",\"extensions\":[\"ras\"]},\"image/x-cmx\":{\"source\":\"apache\",\"extensions\":[\"cmx\"]},\"image/x-freehand\":{\"source\":\"apache\",\"extensions\":[\"fh\",\"fhc\",\"fh4\",\"fh5\",\"fh7\"]},\"image/x-icon\":{\"source\":\"apache\",\"compressible\":true,\"extensions\":[\"ico\"]},\"image/x-jng\":{\"source\":\"nginx\",\"extensions\":[\"jng\"]},\"image/x-mrsid-image\":{\"source\":\"apache\",\"extensions\":[\"sid\"]},\"image/x-ms-bmp\":{\"source\":\"nginx\",\"compressible\":true,\"extensions\":[\"bmp\"]},\"image/x-pcx\":{\"source\":\"apache\",\"extensions\":[\"pcx\"]},\"image/x-pict\":{\"source\":\"apache\",\"extensions\":[\"pic\",\"pct\"]},\"image/x-portable-anymap\":{\"source\":\"apache\",\"extensions\":[\"pnm\"]},\"image/x-portable-bitmap\":{\"source\":\"apache\",\"extensions\":[\"pbm\"]},\"image/x-portable-graymap\":{\"source\":\"apache\",\"extensions\":[\"pgm\"]},\"image/x-portable-pixmap\":{\"source\":\"apache\",\"extensions\":[\"ppm\"]},\"image/x-rgb\":{\"source\":\"apache\",\"extensions\":[\"rgb\"]},\"image/x-tga\":{\"source\":\"apache\",\"extensions\":[\"tga\"]},\"image/x-xbitmap\":{\"source\":\"apache\",\"extensions\":[\"xbm\"]},\"image/x-xcf\":{\"compressible\":false},\"image/x-xpixmap\":{\"source\":\"apache\",\"extensions\":[\"xpm\"]},\"image/x-xwindowdump\":{\"source\":\"apache\",\"extensions\":[\"xwd\"]},\"message/cpim\":{\"source\":\"iana\"},\"message/delivery-status\":{\"source\":\"iana\"},\"message/disposition-notification\":{\"source\":\"iana\",\"extensions\":[\"disposition-notification\"]},\"message/external-body\":{\"source\":\"iana\"},\"message/feedback-report\":{\"source\":\"iana\"},\"message/global\":{\"source\":\"iana\",\"extensions\":[\"u8msg\"]},\"message/global-delivery-status\":{\"source\":\"iana\",\"extensions\":[\"u8dsn\"]},\"message/global-disposition-notification\":{\"source\":\"iana\",\"extensions\":[\"u8mdn\"]},\"message/global-headers\":{\"source\":\"iana\",\"extensions\":[\"u8hdr\"]},\"message/http\":{\"source\":\"iana\",\"compressible\":false},\"message/imdn+xml\":{\"source\":\"iana\",\"compressible\":true},\"message/news\":{\"source\":\"iana\"},\"message/partial\":{\"source\":\"iana\",\"compressible\":false},\"message/rfc822\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"eml\",\"mime\"]},\"message/s-http\":{\"source\":\"iana\"},\"message/sip\":{\"source\":\"iana\"},\"message/sipfrag\":{\"source\":\"iana\"},\"message/tracking-status\":{\"source\":\"iana\"},\"message/vnd.si.simp\":{\"source\":\"iana\"},\"message/vnd.wfa.wsc\":{\"source\":\"iana\",\"extensions\":[\"wsc\"]},\"model/3mf\":{\"source\":\"iana\",\"extensions\":[\"3mf\"]},\"model/gltf+json\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"gltf\"]},\"model/gltf-binary\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"glb\"]},\"model/iges\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"igs\",\"iges\"]},\"model/mesh\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"msh\",\"mesh\",\"silo\"]},\"model/mtl\":{\"source\":\"iana\",\"extensions\":[\"mtl\"]},\"model/obj\":{\"source\":\"iana\",\"extensions\":[\"obj\"]},\"model/stl\":{\"source\":\"iana\",\"extensions\":[\"stl\"]},\"model/vnd.collada+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"dae\"]},\"model/vnd.dwf\":{\"source\":\"iana\",\"extensions\":[\"dwf\"]},\"model/vnd.flatland.3dml\":{\"source\":\"iana\"},\"model/vnd.gdl\":{\"source\":\"iana\",\"extensions\":[\"gdl\"]},\"model/vnd.gs-gdl\":{\"source\":\"apache\"},\"model/vnd.gs.gdl\":{\"source\":\"iana\"},\"model/vnd.gtw\":{\"source\":\"iana\",\"extensions\":[\"gtw\"]},\"model/vnd.moml+xml\":{\"source\":\"iana\",\"compressible\":true},\"model/vnd.mts\":{\"source\":\"iana\",\"extensions\":[\"mts\"]},\"model/vnd.opengex\":{\"source\":\"iana\",\"extensions\":[\"ogex\"]},\"model/vnd.parasolid.transmit.binary\":{\"source\":\"iana\",\"extensions\":[\"x_b\"]},\"model/vnd.parasolid.transmit.text\":{\"source\":\"iana\",\"extensions\":[\"x_t\"]},\"model/vnd.rosette.annotated-data-model\":{\"source\":\"iana\"},\"model/vnd.usdz+zip\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"usdz\"]},\"model/vnd.valve.source.compiled-map\":{\"source\":\"iana\",\"extensions\":[\"bsp\"]},\"model/vnd.vtu\":{\"source\":\"iana\",\"extensions\":[\"vtu\"]},\"model/vrml\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"wrl\",\"vrml\"]},\"model/x3d+binary\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"x3db\",\"x3dbz\"]},\"model/x3d+fastinfoset\":{\"source\":\"iana\",\"extensions\":[\"x3db\"]},\"model/x3d+vrml\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"x3dv\",\"x3dvz\"]},\"model/x3d+xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"x3d\",\"x3dz\"]},\"model/x3d-vrml\":{\"source\":\"iana\",\"extensions\":[\"x3dv\"]},\"multipart/alternative\":{\"source\":\"iana\",\"compressible\":false},\"multipart/appledouble\":{\"source\":\"iana\"},\"multipart/byteranges\":{\"source\":\"iana\"},\"multipart/digest\":{\"source\":\"iana\"},\"multipart/encrypted\":{\"source\":\"iana\",\"compressible\":false},\"multipart/form-data\":{\"source\":\"iana\",\"compressible\":false},\"multipart/header-set\":{\"source\":\"iana\"},\"multipart/mixed\":{\"source\":\"iana\"},\"multipart/multilingual\":{\"source\":\"iana\"},\"multipart/parallel\":{\"source\":\"iana\"},\"multipart/related\":{\"source\":\"iana\",\"compressible\":false},\"multipart/report\":{\"source\":\"iana\"},\"multipart/signed\":{\"source\":\"iana\",\"compressible\":false},\"multipart/vnd.bint.med-plus\":{\"source\":\"iana\"},\"multipart/voice-message\":{\"source\":\"iana\"},\"multipart/x-mixed-replace\":{\"source\":\"iana\"},\"text/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"text/cache-manifest\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"appcache\",\"manifest\"]},\"text/calendar\":{\"source\":\"iana\",\"extensions\":[\"ics\",\"ifb\"]},\"text/calender\":{\"compressible\":true},\"text/cmd\":{\"compressible\":true},\"text/coffeescript\":{\"extensions\":[\"coffee\",\"litcoffee\"]},\"text/css\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"css\"]},\"text/csv\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"csv\"]},\"text/csv-schema\":{\"source\":\"iana\"},\"text/directory\":{\"source\":\"iana\"},\"text/dns\":{\"source\":\"iana\"},\"text/ecmascript\":{\"source\":\"iana\"},\"text/encaprtp\":{\"source\":\"iana\"},\"text/enriched\":{\"source\":\"iana\"},\"text/flexfec\":{\"source\":\"iana\"},\"text/fwdred\":{\"source\":\"iana\"},\"text/grammar-ref-list\":{\"source\":\"iana\"},\"text/html\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"html\",\"htm\",\"shtml\"]},\"text/jade\":{\"extensions\":[\"jade\"]},\"text/javascript\":{\"source\":\"iana\",\"compressible\":true},\"text/jcr-cnd\":{\"source\":\"iana\"},\"text/jsx\":{\"compressible\":true,\"extensions\":[\"jsx\"]},\"text/less\":{\"compressible\":true,\"extensions\":[\"less\"]},\"text/markdown\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"markdown\",\"md\"]},\"text/mathml\":{\"source\":\"nginx\",\"extensions\":[\"mml\"]},\"text/mdx\":{\"compressible\":true,\"extensions\":[\"mdx\"]},\"text/mizar\":{\"source\":\"iana\"},\"text/n3\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"n3\"]},\"text/parameters\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/parityfec\":{\"source\":\"iana\"},\"text/plain\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"txt\",\"text\",\"conf\",\"def\",\"list\",\"log\",\"in\",\"ini\"]},\"text/provenance-notation\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/prs.fallenstein.rst\":{\"source\":\"iana\"},\"text/prs.lines.tag\":{\"source\":\"iana\",\"extensions\":[\"dsc\"]},\"text/prs.prop.logic\":{\"source\":\"iana\"},\"text/raptorfec\":{\"source\":\"iana\"},\"text/red\":{\"source\":\"iana\"},\"text/rfc822-headers\":{\"source\":\"iana\"},\"text/richtext\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtx\"]},\"text/rtf\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"rtf\"]},\"text/rtp-enc-aescm128\":{\"source\":\"iana\"},\"text/rtploopback\":{\"source\":\"iana\"},\"text/rtx\":{\"source\":\"iana\"},\"text/sgml\":{\"source\":\"iana\",\"extensions\":[\"sgml\",\"sgm\"]},\"text/shex\":{\"extensions\":[\"shex\"]},\"text/slim\":{\"extensions\":[\"slim\",\"slm\"]},\"text/strings\":{\"source\":\"iana\"},\"text/stylus\":{\"extensions\":[\"stylus\",\"styl\"]},\"text/t140\":{\"source\":\"iana\"},\"text/tab-separated-values\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"tsv\"]},\"text/troff\":{\"source\":\"iana\",\"extensions\":[\"t\",\"tr\",\"roff\",\"man\",\"me\",\"ms\"]},\"text/turtle\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"ttl\"]},\"text/ulpfec\":{\"source\":\"iana\"},\"text/uri-list\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"uri\",\"uris\",\"urls\"]},\"text/vcard\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"vcard\"]},\"text/vnd.a\":{\"source\":\"iana\"},\"text/vnd.abc\":{\"source\":\"iana\"},\"text/vnd.ascii-art\":{\"source\":\"iana\"},\"text/vnd.curl\":{\"source\":\"iana\",\"extensions\":[\"curl\"]},\"text/vnd.curl.dcurl\":{\"source\":\"apache\",\"extensions\":[\"dcurl\"]},\"text/vnd.curl.mcurl\":{\"source\":\"apache\",\"extensions\":[\"mcurl\"]},\"text/vnd.curl.scurl\":{\"source\":\"apache\",\"extensions\":[\"scurl\"]},\"text/vnd.debian.copyright\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/vnd.dmclientscript\":{\"source\":\"iana\"},\"text/vnd.dvb.subtitle\":{\"source\":\"iana\",\"extensions\":[\"sub\"]},\"text/vnd.esmertec.theme-descriptor\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/vnd.ficlab.flt\":{\"source\":\"iana\"},\"text/vnd.fly\":{\"source\":\"iana\",\"extensions\":[\"fly\"]},\"text/vnd.fmi.flexstor\":{\"source\":\"iana\",\"extensions\":[\"flx\"]},\"text/vnd.gml\":{\"source\":\"iana\"},\"text/vnd.graphviz\":{\"source\":\"iana\",\"extensions\":[\"gv\"]},\"text/vnd.hgl\":{\"source\":\"iana\"},\"text/vnd.in3d.3dml\":{\"source\":\"iana\",\"extensions\":[\"3dml\"]},\"text/vnd.in3d.spot\":{\"source\":\"iana\",\"extensions\":[\"spot\"]},\"text/vnd.iptc.newsml\":{\"source\":\"iana\"},\"text/vnd.iptc.nitf\":{\"source\":\"iana\"},\"text/vnd.latex-z\":{\"source\":\"iana\"},\"text/vnd.motorola.reflex\":{\"source\":\"iana\"},\"text/vnd.ms-mediapackage\":{\"source\":\"iana\"},\"text/vnd.net2phone.commcenter.command\":{\"source\":\"iana\"},\"text/vnd.radisys.msml-basic-layout\":{\"source\":\"iana\"},\"text/vnd.senx.warpscript\":{\"source\":\"iana\"},\"text/vnd.si.uricatalogue\":{\"source\":\"iana\"},\"text/vnd.sosi\":{\"source\":\"iana\"},\"text/vnd.sun.j2me.app-descriptor\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"extensions\":[\"jad\"]},\"text/vnd.trolltech.linguist\":{\"source\":\"iana\",\"charset\":\"UTF-8\"},\"text/vnd.wap.si\":{\"source\":\"iana\"},\"text/vnd.wap.sl\":{\"source\":\"iana\"},\"text/vnd.wap.wml\":{\"source\":\"iana\",\"extensions\":[\"wml\"]},\"text/vnd.wap.wmlscript\":{\"source\":\"iana\",\"extensions\":[\"wmls\"]},\"text/vtt\":{\"source\":\"iana\",\"charset\":\"UTF-8\",\"compressible\":true,\"extensions\":[\"vtt\"]},\"text/x-asm\":{\"source\":\"apache\",\"extensions\":[\"s\",\"asm\"]},\"text/x-c\":{\"source\":\"apache\",\"extensions\":[\"c\",\"cc\",\"cxx\",\"cpp\",\"h\",\"hh\",\"dic\"]},\"text/x-component\":{\"source\":\"nginx\",\"extensions\":[\"htc\"]},\"text/x-fortran\":{\"source\":\"apache\",\"extensions\":[\"f\",\"for\",\"f77\",\"f90\"]},\"text/x-gwt-rpc\":{\"compressible\":true},\"text/x-handlebars-template\":{\"extensions\":[\"hbs\"]},\"text/x-java-source\":{\"source\":\"apache\",\"extensions\":[\"java\"]},\"text/x-jquery-tmpl\":{\"compressible\":true},\"text/x-lua\":{\"extensions\":[\"lua\"]},\"text/x-markdown\":{\"compressible\":true,\"extensions\":[\"mkd\"]},\"text/x-nfo\":{\"source\":\"apache\",\"extensions\":[\"nfo\"]},\"text/x-opml\":{\"source\":\"apache\",\"extensions\":[\"opml\"]},\"text/x-org\":{\"compressible\":true,\"extensions\":[\"org\"]},\"text/x-pascal\":{\"source\":\"apache\",\"extensions\":[\"p\",\"pas\"]},\"text/x-processing\":{\"compressible\":true,\"extensions\":[\"pde\"]},\"text/x-sass\":{\"extensions\":[\"sass\"]},\"text/x-scss\":{\"extensions\":[\"scss\"]},\"text/x-setext\":{\"source\":\"apache\",\"extensions\":[\"etx\"]},\"text/x-sfv\":{\"source\":\"apache\",\"extensions\":[\"sfv\"]},\"text/x-suse-ymp\":{\"compressible\":true,\"extensions\":[\"ymp\"]},\"text/x-uuencode\":{\"source\":\"apache\",\"extensions\":[\"uu\"]},\"text/x-vcalendar\":{\"source\":\"apache\",\"extensions\":[\"vcs\"]},\"text/x-vcard\":{\"source\":\"apache\",\"extensions\":[\"vcf\"]},\"text/xml\":{\"source\":\"iana\",\"compressible\":true,\"extensions\":[\"xml\"]},\"text/xml-external-parsed-entity\":{\"source\":\"iana\"},\"text/yaml\":{\"extensions\":[\"yaml\",\"yml\"]},\"video/1d-interleaved-parityfec\":{\"source\":\"iana\"},\"video/3gpp\":{\"source\":\"iana\",\"extensions\":[\"3gp\",\"3gpp\"]},\"video/3gpp-tt\":{\"source\":\"iana\"},\"video/3gpp2\":{\"source\":\"iana\",\"extensions\":[\"3g2\"]},\"video/bmpeg\":{\"source\":\"iana\"},\"video/bt656\":{\"source\":\"iana\"},\"video/celb\":{\"source\":\"iana\"},\"video/dv\":{\"source\":\"iana\"},\"video/encaprtp\":{\"source\":\"iana\"},\"video/flexfec\":{\"source\":\"iana\"},\"video/h261\":{\"source\":\"iana\",\"extensions\":[\"h261\"]},\"video/h263\":{\"source\":\"iana\",\"extensions\":[\"h263\"]},\"video/h263-1998\":{\"source\":\"iana\"},\"video/h263-2000\":{\"source\":\"iana\"},\"video/h264\":{\"source\":\"iana\",\"extensions\":[\"h264\"]},\"video/h264-rcdo\":{\"source\":\"iana\"},\"video/h264-svc\":{\"source\":\"iana\"},\"video/h265\":{\"source\":\"iana\"},\"video/iso.segment\":{\"source\":\"iana\"},\"video/jpeg\":{\"source\":\"iana\",\"extensions\":[\"jpgv\"]},\"video/jpeg2000\":{\"source\":\"iana\"},\"video/jpm\":{\"source\":\"apache\",\"extensions\":[\"jpm\",\"jpgm\"]},\"video/mj2\":{\"source\":\"iana\",\"extensions\":[\"mj2\",\"mjp2\"]},\"video/mp1s\":{\"source\":\"iana\"},\"video/mp2p\":{\"source\":\"iana\"},\"video/mp2t\":{\"source\":\"iana\",\"extensions\":[\"ts\"]},\"video/mp4\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mp4\",\"mp4v\",\"mpg4\"]},\"video/mp4v-es\":{\"source\":\"iana\"},\"video/mpeg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"mpeg\",\"mpg\",\"mpe\",\"m1v\",\"m2v\"]},\"video/mpeg4-generic\":{\"source\":\"iana\"},\"video/mpv\":{\"source\":\"iana\"},\"video/nv\":{\"source\":\"iana\"},\"video/ogg\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"ogv\"]},\"video/parityfec\":{\"source\":\"iana\"},\"video/pointer\":{\"source\":\"iana\"},\"video/quicktime\":{\"source\":\"iana\",\"compressible\":false,\"extensions\":[\"qt\",\"mov\"]},\"video/raptorfec\":{\"source\":\"iana\"},\"video/raw\":{\"source\":\"iana\"},\"video/rtp-enc-aescm128\":{\"source\":\"iana\"},\"video/rtploopback\":{\"source\":\"iana\"},\"video/rtx\":{\"source\":\"iana\"},\"video/smpte291\":{\"source\":\"iana\"},\"video/smpte292m\":{\"source\":\"iana\"},\"video/ulpfec\":{\"source\":\"iana\"},\"video/vc1\":{\"source\":\"iana\"},\"video/vc2\":{\"source\":\"iana\"},\"video/vnd.cctv\":{\"source\":\"iana\"},\"video/vnd.dece.hd\":{\"source\":\"iana\",\"extensions\":[\"uvh\",\"uvvh\"]},\"video/vnd.dece.mobile\":{\"source\":\"iana\",\"extensions\":[\"uvm\",\"uvvm\"]},\"video/vnd.dece.mp4\":{\"source\":\"iana\"},\"video/vnd.dece.pd\":{\"source\":\"iana\",\"extensions\":[\"uvp\",\"uvvp\"]},\"video/vnd.dece.sd\":{\"source\":\"iana\",\"extensions\":[\"uvs\",\"uvvs\"]},\"video/vnd.dece.video\":{\"source\":\"iana\",\"extensions\":[\"uvv\",\"uvvv\"]},\"video/vnd.directv.mpeg\":{\"source\":\"iana\"},\"video/vnd.directv.mpeg-tts\":{\"source\":\"iana\"},\"video/vnd.dlna.mpeg-tts\":{\"source\":\"iana\"},\"video/vnd.dvb.file\":{\"source\":\"iana\",\"extensions\":[\"dvb\"]},\"video/vnd.fvt\":{\"source\":\"iana\",\"extensions\":[\"fvt\"]},\"video/vnd.hns.video\":{\"source\":\"iana\"},\"video/vnd.iptvforum.1dparityfec-1010\":{\"source\":\"iana\"},\"video/vnd.iptvforum.1dparityfec-2005\":{\"source\":\"iana\"},\"video/vnd.iptvforum.2dparityfec-1010\":{\"source\":\"iana\"},\"video/vnd.iptvforum.2dparityfec-2005\":{\"source\":\"iana\"},\"video/vnd.iptvforum.ttsavc\":{\"source\":\"iana\"},\"video/vnd.iptvforum.ttsmpeg2\":{\"source\":\"iana\"},\"video/vnd.motorola.video\":{\"source\":\"iana\"},\"video/vnd.motorola.videop\":{\"source\":\"iana\"},\"video/vnd.mpegurl\":{\"source\":\"iana\",\"extensions\":[\"mxu\",\"m4u\"]},\"video/vnd.ms-playready.media.pyv\":{\"source\":\"iana\",\"extensions\":[\"pyv\"]},\"video/vnd.nokia.interleaved-multimedia\":{\"source\":\"iana\"},\"video/vnd.nokia.mp4vr\":{\"source\":\"iana\"},\"video/vnd.nokia.videovoip\":{\"source\":\"iana\"},\"video/vnd.objectvideo\":{\"source\":\"iana\"},\"video/vnd.radgamettools.bink\":{\"source\":\"iana\"},\"video/vnd.radgamettools.smacker\":{\"source\":\"iana\"},\"video/vnd.sealed.mpeg1\":{\"source\":\"iana\"},\"video/vnd.sealed.mpeg4\":{\"source\":\"iana\"},\"video/vnd.sealed.swf\":{\"source\":\"iana\"},\"video/vnd.sealedmedia.softseal.mov\":{\"source\":\"iana\"},\"video/vnd.uvvu.mp4\":{\"source\":\"iana\",\"extensions\":[\"uvu\",\"uvvu\"]},\"video/vnd.vivo\":{\"source\":\"iana\",\"extensions\":[\"viv\"]},\"video/vnd.youtube.yt\":{\"source\":\"iana\"},\"video/vp8\":{\"source\":\"iana\"},\"video/webm\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"webm\"]},\"video/x-f4v\":{\"source\":\"apache\",\"extensions\":[\"f4v\"]},\"video/x-fli\":{\"source\":\"apache\",\"extensions\":[\"fli\"]},\"video/x-flv\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"flv\"]},\"video/x-m4v\":{\"source\":\"apache\",\"extensions\":[\"m4v\"]},\"video/x-matroska\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"mkv\",\"mk3d\",\"mks\"]},\"video/x-mng\":{\"source\":\"apache\",\"extensions\":[\"mng\"]},\"video/x-ms-asf\":{\"source\":\"apache\",\"extensions\":[\"asf\",\"asx\"]},\"video/x-ms-vob\":{\"source\":\"apache\",\"extensions\":[\"vob\"]},\"video/x-ms-wm\":{\"source\":\"apache\",\"extensions\":[\"wm\"]},\"video/x-ms-wmv\":{\"source\":\"apache\",\"compressible\":false,\"extensions\":[\"wmv\"]},\"video/x-ms-wmx\":{\"source\":\"apache\",\"extensions\":[\"wmx\"]},\"video/x-ms-wvx\":{\"source\":\"apache\",\"extensions\":[\"wvx\"]},\"video/x-msvideo\":{\"source\":\"apache\",\"extensions\":[\"avi\"]},\"video/x-sgi-movie\":{\"source\":\"apache\",\"extensions\":[\"movie\"]},\"video/x-smv\":{\"source\":\"apache\",\"extensions\":[\"smv\"]},\"x-conference/x-cooltalk\":{\"source\":\"apache\",\"extensions\":[\"ice\"]},\"x-shader/x-fragment\":{\"compressible\":true},\"x-shader/x-vertex\":{\"compressible\":true}}");

/***/ }),

/***/ "./node_modules/mime-db/index.js":
/*!***************************************!*\
  !*** ./node_modules/mime-db/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(/*! ./db.json */ "./node_modules/mime-db/db.json")


/***/ }),

/***/ "./node_modules/mime-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(/*! mime-db */ "./node_modules/mime-db/index.js")
var extname = __webpack_require__(/*! path */ "path").extname

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, main, license, repository, author, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"muhblog-reason\",\"version\":\"0.1.0\",\"main\":\"dist/index.js\",\"license\":\"MIT\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/elcr/muhblog-reason.git\"},\"author\":\"elcr\",\"scripts\":{\"build\":\"bsb -make-world -clean-world\"},\"dependencies\":{\"@emotion/core\":\"^10.0.28\",\"argparse\":\"^1.0.10\",\"bootstrap\":\"^4.5.0\",\"bs-bastet\":\"ssh://git@github.com:elcr/bs-bastet-without-bisect.git\",\"bs-css-emotion\":\"^1.2.0\",\"bs-platform\":\"^7.3.2\",\"emotion\":\"^10.0.27\",\"emotion-server\":\"^10.0.27\",\"markdown-metadata-bs\":\"ssh://git@github.com:elcr/markdown-metadata-bs.git\",\"mime-types\":\"^2.1.27\",\"node-fs-bs\":\"ssh://git@github.com:elcr/node-fs-bs.git\",\"node-stream-bs\":\"ssh://git@github.com:elcr/node-stream-bs.git\",\"react\":\"^16.13.1\",\"react-dom\":\"^16.13.1\",\"react-markdown\":\"^4.3.1\",\"react-syntax-highlighter\":\"^12.2.1\",\"reason-react\":\"^0.8.0\",\"relude\":\"ssh://git@github.com:elcr/relude-without-bisect.git\",\"slugify-bs\":\"ssh://git@github.com:elcr/slugify-bs.git\",\"sqlite-relude\":\"ssh://git@github.com:elcr/sqlite-relude.git\",\"squel\":\"^5.13.0\",\"url-parse\":\"^1.4.7\"},\"devDependencies\":{\"raw-loader\":\"^4.0.1\",\"source-map-loader\":\"^0.2.4\",\"webpack\":\"^4.43.0\",\"webpack-cli\":\"^3.3.11\",\"webpack-node-externals\":\"^1.7.2\"}}");

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

function setLastModified(date) {
  var partial_arg = date.toUTCString();
  return (function (param) {
      param.setHeader("Last-Modified", partial_arg);
      
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

/***/ "./src/bindings/MimeTypes.bs.js":
/*!**************************************!*\
  !*** ./src/bindings/MimeTypes.bs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");
var Js_types = __webpack_require__(/*! bs-platform/lib/js/js_types.js */ "bs-platform/lib/js/js_types.js");
var MimeTypes = __webpack_require__(/*! mime-types */ "./node_modules/mime-types/index.js");

function string(string$1) {
  return string$1;
}

function $$boolean($$boolean$1) {
  return $$boolean$1;
}

function classify(value) {
  if (Js_types.test(value, /* String */4)) {
    return /* String */Block.__(0, [value]);
  } else {
    return /* Boolean */Block.__(1, [value]);
  }
}

var StringBooleanUnion = {
  string: string,
  $$boolean: $$boolean,
  classify: classify
};

function contentType(filename) {
  var contentType$1 = classify(MimeTypes.contentType(filename));
  if (contentType$1.tag) {
    return ;
  } else {
    return contentType$1[0];
  }
}

exports.StringBooleanUnion = StringBooleanUnion;
exports.contentType = contentType;
/* mime-types Not a pure module */


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


var Path = __webpack_require__(/*! path */ "path");
var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "bs-platform/lib/js/block.js");
var Curry = __webpack_require__(/*! bs-platform/lib/js/curry.js */ "bs-platform/lib/js/curry.js");
var MimeTypes = __webpack_require__(/*! ../bindings/MimeTypes.bs.js */ "./src/bindings/MimeTypes.bs.js");
var Relude_IO = __webpack_require__(/*! relude/src/Relude_IO.bs.js */ "relude/src/Relude_IO.bs.js");
var NodeFS__Stat = __webpack_require__(/*! node-fs-bs/src/NodeFS__Stat.bs.js */ "node-fs-bs/src/NodeFS__Stat.bs.js");
var NodeFS__ReadStream = __webpack_require__(/*! node-fs-bs/src/NodeFS__ReadStream.bs.js */ "node-fs-bs/src/NodeFS__ReadStream.bs.js");

function makeResponse(directory, filename) {
  var path = Path.join(__dirname, directory, filename);
  return Curry._2(Relude_IO.mapError, (function (prim) {
                
              }), Relude_IO.flatMap((function (param) {
                    var mtime = param.mtime;
                    var size = param.size;
                    return Relude_IO.map((function (stream) {
                                  return /* Stream */Block.__(1, [
                                            /* stream */stream,
                                            /* type_ */MimeTypes.contentType(filename),
                                            /* length */size,
                                            /* modified */mtime
                                          ]);
                                }), NodeFS__ReadStream.make(path));
                  }), NodeFS__Stat.stat(path)));
}

exports.makeResponse = makeResponse;
/* path Not a pure module */


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

/***/ "bs-platform/lib/js/js_types.js":
/*!*************************************************!*\
  !*** external "bs-platform/lib/js/js_types.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bs-platform/lib/js/js_types.js");

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

/***/ "node-fs-bs/src/NodeFS__ReadStream.bs.js":
/*!**********************************************************!*\
  !*** external "node-fs-bs/src/NodeFS__ReadStream.bs.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fs-bs/src/NodeFS__ReadStream.bs.js");

/***/ }),

/***/ "node-fs-bs/src/NodeFS__Stat.bs.js":
/*!****************************************************!*\
  !*** external "node-fs-bs/src/NodeFS__Stat.bs.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fs-bs/src/NodeFS__Stat.bs.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAtcmVib290Lm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pbWUtZGIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pbWUtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NMSS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFyc2UuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3BvbnNlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9Sb3V0ZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbHMuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JpbmRpbmdzL0FyZ1BhcnNlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9EYXRlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9FbW90aW9uLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9IVFRQLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kaW5ncy9NaW1lVHlwZXMuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JpbmRpbmdzL1BhY2thZ2UuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0Fib3V0Q29udHJvbGxlci5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvRW50cnlDb250cm9sbGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9JbmRleENvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL1N0YXRpY0NvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL1RhZ1NlYXJjaENvbnRyb2xsZXIuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1BhZ2VfX0NvbXBvbmVudC5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUGFnZV9fUmVuZGVyLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9TdHlsZS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvQWJvdXRQYWdlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9FbnRyeVBhZ2UuYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL0luZGV4UGFnZS5icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTm90Rm91bmRQYWdlLmJzLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9UYWdTZWFyY2hQYWdlLmJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcmdwYXJzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJzLWNzcy1lbW90aW9uL3NyYy9Dc3MuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9pbnQzMi5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX29wdGlvbi5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJzLXBsYXRmb3JtL2xpYi9qcy9qc19kaWN0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnMtcGxhdGZvcm0vbGliL2pzL2pzX3R5cGVzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtb3Rpb24tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtkb3duLW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRGlyLmJzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRmlsZS5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZFN0cmVhbS5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fU3RhdC5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWx1ZGUvc3JjL1JlbHVkZV9BcnJheS5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVsdWRlL3NyYy9SZWx1ZGVfTGlzdC5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlbHVkZS9zcmMvUmVsdWRlX1Jlc3VsdC5icy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNsdWdp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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSW5kZXguYnMuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyohXFxuICogQm9vdHN0cmFwIFJlYm9vdCB2NC41LjAgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXFxuICogQ29weXJpZ2h0IDIwMTEtMjAyMCBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIwIFR3aXR0ZXIsIEluYy5cXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxcbiAqIEZvcmtlZCBmcm9tIE5vcm1hbGl6ZS5jc3MsIGxpY2Vuc2VkIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxcbiAqLyosOjphZnRlciw6OmJlZm9yZXtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbHtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xpbmUtaGVpZ2h0OjEuMTU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fWFydGljbGUsYXNpZGUsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfWJvZHl7bWFyZ2luOjA7Zm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sXFxcIkhlbHZldGljYSBOZXVlXFxcIixBcmlhbCxcXFwiTm90byBTYW5zXFxcIixzYW5zLXNlcmlmLFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNTtjb2xvcjojMjEyNTI5O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9W3RhYmluZGV4PVxcXCItMVxcXCJdOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSl7b3V0bGluZTowIWltcG9ydGFudH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9aDEsaDIsaDMsaDQsaDUsaDZ7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206LjVyZW19cHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToxcmVtfWFiYnJbZGF0YS1vcmlnaW5hbC10aXRsZV0sYWJiclt0aXRsZV17dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTstd2Via2l0LXRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkO2N1cnNvcjpoZWxwO2JvcmRlci1ib3R0b206MDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazpub25lO3RleHQtZGVjb3JhdGlvbi1za2lwLWluazpub25lfWFkZHJlc3N7bWFyZ2luLWJvdHRvbToxcmVtO2ZvbnQtc3R5bGU6bm9ybWFsO2xpbmUtaGVpZ2h0OmluaGVyaXR9ZGwsb2wsdWx7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MXJlbX1vbCBvbCxvbCB1bCx1bCBvbCx1bCB1bHttYXJnaW4tYm90dG9tOjB9ZHR7Zm9udC13ZWlnaHQ6NzAwfWRke21hcmdpbi1ib3R0b206LjVyZW07bWFyZ2luLWxlZnQ6MH1ibG9ja3F1b3Rle21hcmdpbjowIDAgMXJlbX1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWF7Y29sb3I6IzAwN2JmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWE6aG92ZXJ7Y29sb3I6IzAwNTZiMzt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfWE6bm90KFtocmVmXSl7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZX1hOm5vdChbaHJlZl0pOmhvdmVye2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6U0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLFxcXCJDb3VyaWVyIE5ld1xcXCIsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19cHJle21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjFyZW07b3ZlcmZsb3c6YXV0bzstbXMtb3ZlcmZsb3ctc3R5bGU6c2Nyb2xsYmFyfWZpZ3VyZXttYXJnaW46MCAwIDFyZW19aW1ne3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3JkZXItc3R5bGU6bm9uZX1zdmd7b3ZlcmZsb3c6aGlkZGVuO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2V9Y2FwdGlvbntwYWRkaW5nLXRvcDouNzVyZW07cGFkZGluZy1ib3R0b206Ljc1cmVtO2NvbG9yOiM2Yzc1N2Q7dGV4dC1hbGlnbjpsZWZ0O2NhcHRpb24tc2lkZTpib3R0b219dGh7dGV4dC1hbGlnbjppbmhlcml0fWxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206LjVyZW19YnV0dG9ue2JvcmRlci1yYWRpdXM6MH1idXR0b246Zm9jdXN7b3V0bGluZToxcHggZG90dGVkO291dGxpbmU6NXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7bWFyZ2luOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0fWJ1dHRvbixpbnB1dHtvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1bcm9sZT1idXR0b25de2N1cnNvcjpwb2ludGVyfXNlbGVjdHt3b3JkLXdyYXA6bm9ybWFsfVt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259W3R5cGU9YnV0dG9uXTpub3QoOmRpc2FibGVkKSxbdHlwZT1yZXNldF06bm90KDpkaXNhYmxlZCksW3R5cGU9c3VibWl0XTpub3QoOmRpc2FibGVkKSxidXR0b246bm90KDpkaXNhYmxlZCl7Y3Vyc29yOnBvaW50ZXJ9W3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7cGFkZGluZzowO2JvcmRlci1zdHlsZTpub25lfWlucHV0W3R5cGU9Y2hlY2tib3hdLGlucHV0W3R5cGU9cmFkaW9de2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0bztyZXNpemU6dmVydGljYWx9ZmllbGRzZXR7bWluLXdpZHRoOjA7cGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowfWxlZ2VuZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO21hcmdpbi1ib3R0b206LjVyZW07Zm9udC1zaXplOjEuNXJlbTtsaW5lLWhlaWdodDppbmhlcml0O2NvbG9yOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsfXByb2dyZXNze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hde291dGxpbmUtb2Zmc2V0Oi0ycHg7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9ue2ZvbnQ6aW5oZXJpdDstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufW91dHB1dHtkaXNwbGF5OmlubGluZS1ibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtO2N1cnNvcjpwb2ludGVyfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC1yZWJvb3QubWluLmNzcy5tYXAgKi9cIjsiLCIvKiFcbiAqIG1pbWUtZGJcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGIuanNvbicpXG4iLCIvKiFcbiAqIG1pbWUtdHlwZXNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkYiA9IHJlcXVpcmUoJ21pbWUtZGInKVxudmFyIGV4dG5hbWUgPSByZXF1aXJlKCdwYXRoJykuZXh0bmFtZVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBFWFRSQUNUX1RZUEVfUkVHRVhQID0gL15cXHMqKFteO1xcc10qKSg/Ojt8XFxzfCQpL1xudmFyIFRFWFRfVFlQRV9SRUdFWFAgPSAvXnRleHRcXC8vaVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuY2hhcnNldCA9IGNoYXJzZXRcbmV4cG9ydHMuY2hhcnNldHMgPSB7IGxvb2t1cDogY2hhcnNldCB9XG5leHBvcnRzLmNvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbmV4cG9ydHMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uXG5leHBvcnRzLmV4dGVuc2lvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5leHBvcnRzLmxvb2t1cCA9IGxvb2t1cFxuZXhwb3J0cy50eXBlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuLy8gUG9wdWxhdGUgdGhlIGV4dGVuc2lvbnMvdHlwZXMgbWFwc1xucG9wdWxhdGVNYXBzKGV4cG9ydHMuZXh0ZW5zaW9ucywgZXhwb3J0cy50eXBlcylcblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgY2hhcnNldCBmb3IgYSBNSU1FIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGNoYXJzZXQgKHR5cGUpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVE9ETzogdXNlIG1lZGlhLXR5cGVyXG4gIHZhciBtYXRjaCA9IEVYVFJBQ1RfVFlQRV9SRUdFWFAuZXhlYyh0eXBlKVxuICB2YXIgbWltZSA9IG1hdGNoICYmIGRiW21hdGNoWzFdLnRvTG93ZXJDYXNlKCldXG5cbiAgaWYgKG1pbWUgJiYgbWltZS5jaGFyc2V0KSB7XG4gICAgcmV0dXJuIG1pbWUuY2hhcnNldFxuICB9XG5cbiAgLy8gZGVmYXVsdCB0ZXh0LyogdG8gdXRmLThcbiAgaWYgKG1hdGNoICYmIFRFWFRfVFlQRV9SRUdFWFAudGVzdChtYXRjaFsxXSkpIHtcbiAgICByZXR1cm4gJ1VURi04J1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVsbCBDb250ZW50LVR5cGUgaGVhZGVyIGdpdmVuIGEgTUlNRSB0eXBlIG9yIGV4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBjb250ZW50VHlwZSAoc3RyKSB7XG4gIC8vIFRPRE86IHNob3VsZCB0aGlzIGV2ZW4gYmUgaW4gdGhpcyBtb2R1bGU/XG4gIGlmICghc3RyIHx8IHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIgbWltZSA9IHN0ci5pbmRleE9mKCcvJykgPT09IC0xXG4gICAgPyBleHBvcnRzLmxvb2t1cChzdHIpXG4gICAgOiBzdHJcblxuICBpZiAoIW1pbWUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBjb250ZW50LXR5cGUgb3Igb3RoZXIgbW9kdWxlXG4gIGlmIChtaW1lLmluZGV4T2YoJ2NoYXJzZXQnKSA9PT0gLTEpIHtcbiAgICB2YXIgY2hhcnNldCA9IGV4cG9ydHMuY2hhcnNldChtaW1lKVxuICAgIGlmIChjaGFyc2V0KSBtaW1lICs9ICc7IGNoYXJzZXQ9JyArIGNoYXJzZXQudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgcmV0dXJuIG1pbWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgZXh0ZW5zaW9uIGZvciBhIE1JTUUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZXh0ZW5zaW9uICh0eXBlKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBtZWRpYS10eXBlclxuICB2YXIgbWF0Y2ggPSBFWFRSQUNUX1RZUEVfUkVHRVhQLmV4ZWModHlwZSlcblxuICAvLyBnZXQgZXh0ZW5zaW9uc1xuICB2YXIgZXh0cyA9IG1hdGNoICYmIGV4cG9ydHMuZXh0ZW5zaW9uc1ttYXRjaFsxXS50b0xvd2VyQ2FzZSgpXVxuXG4gIGlmICghZXh0cyB8fCAhZXh0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBleHRzWzBdXG59XG5cbi8qKlxuICogTG9va3VwIHRoZSBNSU1FIHR5cGUgZm9yIGEgZmlsZSBwYXRoL2V4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gbG9va3VwIChwYXRoKSB7XG4gIGlmICghcGF0aCB8fCB0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGdldCB0aGUgZXh0ZW5zaW9uIChcImV4dFwiIG9yIFwiLmV4dFwiIG9yIGZ1bGwgcGF0aClcbiAgdmFyIGV4dGVuc2lvbiA9IGV4dG5hbWUoJ3guJyArIHBhdGgpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAuc3Vic3RyKDEpXG5cbiAgaWYgKCFleHRlbnNpb24pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLnR5cGVzW2V4dGVuc2lvbl0gfHwgZmFsc2Vcbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgZXh0ZW5zaW9ucyBhbmQgdHlwZXMgbWFwcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9wdWxhdGVNYXBzIChleHRlbnNpb25zLCB0eXBlcykge1xuICAvLyBzb3VyY2UgcHJlZmVyZW5jZSAobGVhc3QgLT4gbW9zdClcbiAgdmFyIHByZWZlcmVuY2UgPSBbJ25naW54JywgJ2FwYWNoZScsIHVuZGVmaW5lZCwgJ2lhbmEnXVxuXG4gIE9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hNaW1lVHlwZSAodHlwZSkge1xuICAgIHZhciBtaW1lID0gZGJbdHlwZV1cbiAgICB2YXIgZXh0cyA9IG1pbWUuZXh0ZW5zaW9uc1xuXG4gICAgaWYgKCFleHRzIHx8ICFleHRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gbWltZSAtPiBleHRlbnNpb25zXG4gICAgZXh0ZW5zaW9uc1t0eXBlXSA9IGV4dHNcblxuICAgIC8vIGV4dGVuc2lvbiAtPiBtaW1lXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0c1tpXVxuXG4gICAgICBpZiAodHlwZXNbZXh0ZW5zaW9uXSkge1xuICAgICAgICB2YXIgZnJvbSA9IHByZWZlcmVuY2UuaW5kZXhPZihkYlt0eXBlc1tleHRlbnNpb25dXS5zb3VyY2UpXG4gICAgICAgIHZhciB0byA9IHByZWZlcmVuY2UuaW5kZXhPZihtaW1lLnNvdXJjZSlcblxuICAgICAgICBpZiAodHlwZXNbZXh0ZW5zaW9uXSAhPT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgJiZcbiAgICAgICAgICAoZnJvbSA+IHRvIHx8IChmcm9tID09PSB0byAmJiB0eXBlc1tleHRlbnNpb25dLnN1YnN0cigwLCAxMikgPT09ICdhcHBsaWNhdGlvbi8nKSkpIHtcbiAgICAgICAgICAvLyBza2lwIHRoZSByZW1hcHBpbmdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZXh0ZW5zaW9uIC0+IG1pbWVcbiAgICAgIHR5cGVzW2V4dGVuc2lvbl0gPSB0eXBlXG4gICAgfVxuICB9KVxufVxuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQYWNrYWdlID0gcmVxdWlyZShcIi4vYmluZGluZ3MvUGFja2FnZS5icy5qc1wiKTtcbnZhciBBcmdQYXJzZSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdzL0FyZ1BhcnNlLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhwYXJhbSkge1xuICB2YXIgcGFyc2VyID0gQXJnUGFyc2UubWFrZShQYWNrYWdlLmpzb24udmVyc2lvbiwgUGFja2FnZS5qc29uLm5hbWUpO1xuICBBcmdQYXJzZS5hZGRBcmd1bWVudChcIi1zXCIsIFwiLS1zaXRlLW5hbWVcIiwgXCJzaXRlTmFtZVwiLCB0cnVlLCBcIlNUUklOR1wiLCBwYXJzZXIpO1xuICBBcmdQYXJzZS5hZGRBcmd1bWVudChcIi1lXCIsIFwiLS1lbnRyaWVzLWRpcmVjdG9yeVwiLCBcImVudHJpZXNEaXJlY3RvcnlcIiwgdHJ1ZSwgXCJQQVRIXCIsIHBhcnNlcik7XG4gIEFyZ1BhcnNlLmFkZEFyZ3VtZW50KFwiLWFcIiwgXCItLWFib3V0LXBhdGhcIiwgXCJhYm91dFBhdGhcIiwgdHJ1ZSwgXCJQQVRIXCIsIHBhcnNlcik7XG4gIHJldHVybiBwYXJzZXIucGFyc2VBcmdzKCk7XG59XG5cbmV4cG9ydHMucGFyc2VBcmd1bWVudHMgPSBwYXJzZUFyZ3VtZW50cztcbi8qIFBhY2thZ2UgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBlbnRyaWVzUGVyUGFnZSA9IDEwO1xuXG5leHBvcnRzLmVudHJpZXNQZXJQYWdlID0gZW50cmllc1BlclBhZ2U7XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDTEkgPSByZXF1aXJlKFwiLi9DTEkuYnMuanNcIik7XG52YXIgUGFyc2UgPSByZXF1aXJlKFwiLi9QYXJzZS5icy5qc1wiKTtcbnZhciBTZXJ2ZXIgPSByZXF1aXJlKFwiLi9TZXJ2ZXIuYnMuanNcIik7XG52YXIgUmVsdWRlX0lPID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBwcmludEVycm9yKGVycm9yKSB7XG4gIHZhciBtZXNzYWdlO1xuICBpZiAoZXJyb3IudGFnKSB7XG4gICAgdmFyIG1hdGNoID0gZXJyb3JbMF07XG4gICAgc3dpdGNoIChtYXRjaC50YWcgfCAwKSB7XG4gICAgICBjYXNlIC8qIFJlYWREaXJlY3RvcnlFcnJvciAqLzAgOlxuICAgICAgICAgIHN3aXRjaCAobWF0Y2hbMF0udGFnIHwgMCkge1xuICAgICAgICAgICAgY2FzZSAvKiBOb1N1Y2hGaWxlT3JEaXJlY3RvcnkgKi83IDpcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFbnRyaWVzIHBhdGggZG9lcyBub3QgZXhpc3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgLyogTm90QURpcmVjdG9yeSAqLzggOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVudHJpZXMgcGF0aCBpcyBub3QgYSBkaXJlY3RvcnlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yIHJlYWRpbmcgZW50cmllcyBkaXJlY3RvcnlcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIFJlYWRFbnRyeUVycm9yICovMSA6XG4gICAgICAgICAgbWVzc2FnZSA9IFwiRXJyb3IgcmVhZGluZyBlbnRyeTogXCIgKyBtYXRjaFsvKiBuYW1lICovMF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIFBhcnNlRXJyb3IgKi8yIDpcbiAgICAgICAgICBtZXNzYWdlID0gXCJFcnJvciBwYXJzaW5nIGVudHJ5OiBcIiArIG1hdGNoWy8qIG5hbWUgKi8wXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGVycm9yWzBdLnRhZyB8IDApIHtcbiAgICAgIGNhc2UgLyogSXNBRGlyZWN0b3J5ICovNSA6XG4gICAgICAgICAgbWVzc2FnZSA9IFwiQWJvdXQgcGF0aCBpcyBhIGRpcmVjdG9yeVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBOb1N1Y2hGaWxlT3JEaXJlY3RvcnkgKi83IDpcbiAgICAgICAgICBtZXNzYWdlID0gXCJBYm91dCBmaWxlIGRvZXMgbm90IGV4aXN0XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtZXNzYWdlID0gXCJFcnJvciByZWFkaW5nIGFib3V0IGZpbGVcIjtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgXG59XG5cbmZ1bmN0aW9uIG1haW4ocGFyYW0pIHtcbiAgdmFyIG1hdGNoID0gQ0xJLnBhcnNlQXJndW1lbnRzKHVuZGVmaW5lZCk7XG4gIHZhciBzaXRlTmFtZSA9IG1hdGNoLnNpdGVOYW1lO1xuICByZXR1cm4gUmVsdWRlX0lPLnVuc2FmZVJ1bkFzeW5jKChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmJpdGFwKFNlcnZlci5saXN0ZW4sIHByaW50RXJyb3IsIFJlbHVkZV9JTy5tYXAoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2VydmVyLm1ha2Uoc2l0ZU5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBQYXJzZS5yZWFkQW5kUGFyc2VBbGwobWF0Y2guYWJvdXRQYXRoLCBtYXRjaC5lbnRyaWVzRGlyZWN0b3J5KSkpKTtcbn1cblxubWFpbih1bmRlZmluZWQpO1xuXG5leHBvcnRzLnByaW50RXJyb3IgPSBwcmludEVycm9yO1xuZXhwb3J0cy5tYWluID0gbWFpbjtcbi8qICBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkJERhdGUgPSByZXF1aXJlKFwiLi9iaW5kaW5ncy9EYXRlLmJzLmpzXCIpO1xudmFyIFBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIEpzX2RpY3QgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2pzX2RpY3QuanNcIik7XG52YXIgUmVsdWRlX0lPID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JbnQgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIpO1xudmFyIENhbWxfb3B0aW9uID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX29wdGlvbi5qc1wiKTtcbnZhciBSZWx1ZGVfTGlzdCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9BcnJheSA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9BcnJheS5icy5qc1wiKTtcbnZhciBSZWx1ZGVfT3B0aW9uID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiKTtcbnZhciBSZWx1ZGVfUmVzdWx0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX1Jlc3VsdC5icy5qc1wiKTtcbnZhciBOb2RlRlNfX1JlYWREaXIgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRGlyLmJzLmpzXCIpO1xudmFyIE5vZGVGU19fUmVhZEZpbGUgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19SZWFkRmlsZS5icy5qc1wiKTtcbnZhciBNYXJrZG93bk1ldGFkYXRhID0gcmVxdWlyZShcIm1hcmtkb3duLW1ldGFkYXRhXCIpO1xuXG5mdW5jdGlvbiBwYXJzZVRpdGxlKG1ldGFkYXRhKSB7XG4gIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfT3B0aW9uLmZsYXRNYXAsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0FycmF5LmF0KDAsIHBhcmFtKTtcbiAgICAgICAgICAgICAgfSksIEpzX2RpY3QuZ2V0KG1ldGFkYXRhLCBcInRpdGxlXCIpKTtcbn1cblxudmFyIHBhcnRpYWxfYXJnID0gL14oWzAtOV17NH0pLShbMC05XXsyfSktKFswLTldezJ9KSAoWzAtOV17Mn0pOihbMC05XXsyfSkkLztcblxuZnVuY3Rpb24gbWF0Y2hEYXRlKHBhcmFtKSB7XG4gIHJldHVybiBDYW1sX29wdGlvbi5udWxsX3RvX29wdChwYXJ0aWFsX2FyZy5leGVjKHBhcmFtKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXN0YW1wKG1ldGFkYXRhKSB7XG4gIHJldHVybiBSZWx1ZGVfUmVzdWx0LmZsYXRNYXAoKGZ1bmN0aW9uIChtYXRjaF8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBtYXRjaF8uc2xpY2UoMSkubWFwKChmdW5jdGlvbiAoY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgUmVsdWRlX0ludC5mcm9tU3RyaW5nLCAoY2FwdHVyZSA9PSBudWxsKSA/IHVuZGVmaW5lZCA6IENhbWxfb3B0aW9uLnNvbWUoY2FwdHVyZSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FwdHVyZXMubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogTWFsZm9ybWVkICovMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgeWVhciA9IGNhcHR1cmVzWzBdO1xuICAgICAgICAgICAgICAgIGlmICh5ZWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtb250aCA9IGNhcHR1cmVzWzFdO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogTWFsZm9ybWVkICovMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZGF5ID0gY2FwdHVyZXNbMl07XG4gICAgICAgICAgICAgICAgaWYgKGRheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogTWFsZm9ybWVkICovMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaG91ciA9IGNhcHR1cmVzWzNdO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBNYWxmb3JtZWQgKi8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtaW51dGUgPSBjYXB0dXJlc1s0XTtcbiAgICAgICAgICAgICAgICBpZiAobWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBPayAqL0Jsb2NrLl9fKDAsIFskJERhdGUubWFrZSh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHVuZGVmaW5lZCldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIE1hbGZvcm1lZCAqLzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLCBSZWx1ZGVfUmVzdWx0LmZsYXRNYXAoKGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfUmVzdWx0LmZyb21PcHRpb24oLyogTWFsZm9ybWVkICovMSwgbWF0Y2hEYXRlKGRhdGUpKTtcbiAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfUmVzdWx0LmZyb21PcHRpb24oLyogTWlzc2luZyAqLzAsIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfQXJyYXkuYXQoMCwgcGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgSnNfZGljdC5nZXQobWV0YWRhdGEsIFwiZGF0ZVwiKSkpKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGFncyhtZXRhZGF0YSkge1xuICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoUmVsdWRlX0xpc3QuZnJvbUFycmF5LCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgIH0pKShKc19kaWN0LmdldChtZXRhZGF0YSwgXCJ0YWdzXCIpKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRW50cnkobWFya2Rvd24pIHtcbiAgdmFyIG1hdGNoID0gTWFya2Rvd25NZXRhZGF0YS5wYXJzZU1ldGFkYXRhKG1hcmtkb3duKTtcbiAgdmFyIG1ldGFkYXRhID0gbWF0Y2hbMF07XG4gIHZhciBtYXRjaCQxID0gcGFyc2VUaXRsZShtZXRhZGF0YSk7XG4gIHZhciBtYXRjaCQyID0gcGFyc2VUaW1lc3RhbXAobWV0YWRhdGEpO1xuICB2YXIgbWF0Y2gkMyA9IHBhcnNlVGFncyhtZXRhZGF0YSk7XG4gIGlmIChtYXRjaCQxICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAobWF0Y2gkMi50YWcpIHtcbiAgICAgIGlmIChtYXRjaCQzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIFRpbWVzdGFtcEVycm9yICovW21hdGNoJDJbMF1dXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLyogRXJyb3IgKi9CbG9jay5fXygxLCBbLyogQmFkTWV0YWRhdGEgKi8yXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaCQzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAvKiBPayAqL0Jsb2NrLl9fKDAsIFt7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogbWF0Y2gkMSxcbiAgICAgICAgICAgICAgICAgIGRhdGU6IG1hdGNoJDJbMF0sXG4gICAgICAgICAgICAgICAgICB0YWdzOiBtYXRjaCQzLFxuICAgICAgICAgICAgICAgICAgdGV4dDogbWF0Y2hbMV1cbiAgICAgICAgICAgICAgICB9XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBUYWdzTWlzc2luZyAqLzFdKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobWF0Y2gkMi50YWcgfHwgbWF0Y2gkMyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIC8qIEVycm9yICovQmxvY2suX18oMSwgWy8qIEJhZE1ldGFkYXRhICovMl0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBFcnJvciAqL0Jsb2NrLl9fKDEsIFsvKiBUaXRsZU1pc3NpbmcgKi8wXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZEFuZFBhcnNlRW50cmllc0RpcmVjdG9yeShkaXJlY3RvcnkpIHtcbiAgcmV0dXJuIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLmZpbHRlcigoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFlbnRyeS5pc0RpcmVjdG9yeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkubWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBwYXJhbS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IFBhdGguam9pbihkaXJlY3RvcnksIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9JTy5mcm9tUmVzdWx0KEN1cnJ5Ll8yKFJlbHVkZV9SZXN1bHQubWFwRXJyb3IsIChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogUGFyc2VFcnJvciAqL0Jsb2NrLl9fKDIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbmFtZSAqL25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVycm9yICovZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcGFyc2VFbnRyeSh0ZXh0KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0lPLm1hcEVycm9yLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBSZWFkRW50cnlFcnJvciAqL0Jsb2NrLl9fKDEsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG5hbWUgKi9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZXJyb3IgKi9lcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRlNfX1JlYWRGaWxlLnJlYWRGaWxlKHVuZGVmaW5lZCwgcGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8qIFN1c3BlbmQgKi9CbG9jay5fXygyLCBbKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVhZGluZyBlbnRyeSBmcm9tIFxcXCJcIiArIChTdHJpbmcocGF0aCkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV0pKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnJlZHVjZSgoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8ubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogOjogKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgYWNjdW11bGF0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvKiBQdXJlICovQmxvY2suX18oMCwgWy8qIFtdICovMF0pKTtcbiAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9JTy5tYXBFcnJvciwgKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogUmVhZERpcmVjdG9yeUVycm9yICovQmxvY2suX18oMCwgW2Vycm9yXSk7XG4gICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5vZGVGU19fUmVhZERpci5yZWFkRGlyKHVuZGVmaW5lZCwgZGlyZWN0b3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgLyogU3VzcGVuZCAqL0Jsb2NrLl9fKDIsIFsoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWFkaW5nIGZyb20gZW50cmllcyBkaXJlY3RvcnkgXFxcIlwiICsgKFN0cmluZyhkaXJlY3RvcnkpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSldKSkpKTtcbn1cblxuZnVuY3Rpb24gcmVhZEFuZFBhcnNlQWJvdXRQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZTX19SZWFkRmlsZS5yZWFkRmlsZSh1bmRlZmluZWQsIHBhdGgpO1xuICAgICAgICAgICAgICB9KSwgLyogU3VzcGVuZCAqL0Jsb2NrLl9fKDIsIFsoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVhZGluZyBhYm91dCB0ZXh0IGZyb20gXFxcIlwiICsgKFN0cmluZyhwYXRoKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSldKSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRBbmRQYXJzZUFsbChhYm91dFBhdGgsIGVudHJpZXNEaXJlY3RvcnkpIHtcbiAgcmV0dXJuIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfSU8uYmltYXAoKGZ1bmN0aW9uIChhYm91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQ6IGFib3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzOiBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogQWJvdXRGaWxlRXJyb3IgKi9CbG9jay5fXygwLCBbZXJyb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcmVhZEFuZFBhcnNlQWJvdXRQYXRoKGFib3V0UGF0aCkpO1xuICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0lPLm1hcEVycm9yLCAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFbnRyaWVzRGlyZWN0b3J5RXJyb3IgKi9CbG9jay5fXygxLCBbZXJyb3JdKTtcbiAgICAgICAgICAgICAgICAgIH0pLCByZWFkQW5kUGFyc2VFbnRyaWVzRGlyZWN0b3J5KGVudHJpZXNEaXJlY3RvcnkpKSk7XG59XG5cbmV4cG9ydHMucGFyc2VUaXRsZSA9IHBhcnNlVGl0bGU7XG5leHBvcnRzLm1hdGNoRGF0ZSA9IG1hdGNoRGF0ZTtcbmV4cG9ydHMucGFyc2VUaW1lc3RhbXAgPSBwYXJzZVRpbWVzdGFtcDtcbmV4cG9ydHMucGFyc2VUYWdzID0gcGFyc2VUYWdzO1xuZXhwb3J0cy5wYXJzZUVudHJ5ID0gcGFyc2VFbnRyeTtcbmV4cG9ydHMucmVhZEFuZFBhcnNlRW50cmllc0RpcmVjdG9yeSA9IHJlYWRBbmRQYXJzZUVudHJpZXNEaXJlY3Rvcnk7XG5leHBvcnRzLnJlYWRBbmRQYXJzZUFib3V0UGF0aCA9IHJlYWRBbmRQYXJzZUFib3V0UGF0aDtcbmV4cG9ydHMucmVhZEFuZFBhcnNlQWxsID0gcmVhZEFuZFBhcnNlQWxsO1xuLyogcGF0aCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG5cbnZhciBub3RGb3VuZCA9IC8qIFBhZ2UgKi9CbG9jay5fXygwLCBbXG4gICAgLyogZGF0YSAqL3VuZGVmaW5lZCxcbiAgICAvKiBzdGF0dXMgKi80MDBcbiAgXSk7XG5cbmV4cG9ydHMubm90Rm91bmQgPSBub3RGb3VuZDtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgUmVsdWRlX0ludCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JbnQuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG5cbmZ1bmN0aW9uIHJvdXRlKHNlZ21lbnRzKSB7XG4gIHZhciBsZW4gPSBzZWdtZW50cy5sZW5ndGg7XG4gIGlmIChsZW4gPj0gNSkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gLyogSW5kZXggKi9CbG9jay5fXygwLCBbLyogcGFnZSAqLzFdKTtcbiAgICBjYXNlIDEgOlxuICAgICAgICB2YXIgcGFnZSA9IHNlZ21lbnRzWzBdO1xuICAgICAgICBpZiAocGFnZSA9PT0gXCJhYm91dFwiKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEFib3V0ICovMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogSW5kZXggKi9CbG9jay5fXygwLCBbLyogcGFnZSAqL3BhZ2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZSA+PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfSW50LmZyb21TdHJpbmcocGFnZSkpKTtcbiAgICAgICAgfVxuICAgIGNhc2UgMiA6XG4gICAgICAgIHZhciBkaXJlY3RvcnkgPSBzZWdtZW50c1swXTtcbiAgICAgICAgc3dpdGNoIChkaXJlY3RvcnkpIHtcbiAgICAgICAgICBjYXNlIFwidGFnXCIgOlxuICAgICAgICAgICAgICB2YXIgc2x1ZyA9IHNlZ21lbnRzWzFdO1xuICAgICAgICAgICAgICByZXR1cm4gLyogVGFnU2VhcmNoICovQmxvY2suX18oMSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBwYWdlICovMVxuICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgIGNhc2UgXCJzdGF0aWNcIiA6XG4gICAgICAgICAgY2FzZSBcInVwbG9hZHNcIiA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IHNlZ21lbnRzWzFdO1xuICAgICAgICByZXR1cm4gLyogU3RhdGljICovQmxvY2suX18oMywgW1xuICAgICAgICAgICAgICAgICAgLyogZGlyZWN0b3J5ICovZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgICAgLyogZmlsZW5hbWUgKi9maWxlbmFtZVxuICAgICAgICAgICAgICAgIF0pO1xuICAgIGNhc2UgMyA6XG4gICAgICAgIHZhciBtYXRjaCA9IHNlZ21lbnRzWzBdO1xuICAgICAgICBpZiAobWF0Y2ggIT09IFwidGFnXCIpIHtcbiAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzbHVnJDEgPSBzZWdtZW50c1sxXTtcbiAgICAgICAgdmFyIHBhZ2UkMSA9IHNlZ21lbnRzWzJdO1xuICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qIFRhZ1NlYXJjaCAqL0Jsb2NrLl9fKDEsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWckMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcGFnZSAqL3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UgPj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JbnQuZnJvbVN0cmluZyhwYWdlJDEpKSk7XG4gICAgY2FzZSA0IDpcbiAgICAgICAgdmFyIHllYXIgPSBzZWdtZW50c1swXTtcbiAgICAgICAgdmFyIG1vbnRoID0gc2VnbWVudHNbMV07XG4gICAgICAgIHZhciBkYXkgPSBzZWdtZW50c1syXTtcbiAgICAgICAgdmFyIHNsdWckMiA9IHNlZ21lbnRzWzNdO1xuICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBFbnRyeSAqL0Jsb2NrLl9fKDIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogeWVhciAqL3BhcmFtWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBtb250aCAqL3BhcmFtWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBkYXkgKi9wYXJhbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc2x1ZyAqL3NsdWckMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfT3B0aW9uLmZsYXRNYXAsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vbnRoID0gcGFyYW1bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gcGFyYW1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKGRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfT3B0aW9uLmZpbHRlcigoZnVuY3Rpb24gKGRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheSA8PSAzMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JbnQuZnJvbVN0cmluZyhkYXkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHllYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiB0dXBsZSAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChtb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9udGggPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aCA8PSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfSW50LmZyb21TdHJpbmcobW9udGgpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JbnQuZnJvbVN0cmluZyh5ZWFyKSkpKTtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZChyb3V0ZSkge1xuICBpZiAodHlwZW9mIHJvdXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIFwiL2Fib3V0XCI7XG4gIH1cbiAgc3dpdGNoIChyb3V0ZS50YWcgfCAwKSB7XG4gICAgY2FzZSAvKiBJbmRleCAqLzAgOlxuICAgICAgICB2YXIgcGFnZSA9IHJvdXRlWy8qIHBhZ2UgKi8wXTtcbiAgICAgICAgaWYgKHBhZ2UgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gXCIvXCIgKyAoU3RyaW5nKHBhZ2UpICsgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiL1wiO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBUYWdTZWFyY2ggKi8xIDpcbiAgICAgICAgdmFyIHBhZ2UkMSA9IHJvdXRlWy8qIHBhZ2UgKi8xXTtcbiAgICAgICAgdmFyIHNsdWcgPSByb3V0ZVsvKiBzbHVnICovMF07XG4gICAgICAgIGlmIChwYWdlJDEgIT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gXCIvdGFnL1wiICsgKFN0cmluZyhzbHVnKSArIChcIi9cIiArIChTdHJpbmcocGFnZSQxKSArIFwiXCIpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiL3RhZy9cIiArIChTdHJpbmcoc2x1ZykgKyBcIlwiKTtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogRW50cnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiB5ZWFyICovMF0pICsgKFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBtb250aCAqLzFdKSArIChcIi9cIiArIChTdHJpbmcocm91dGVbLyogZGF5ICovMl0pICsgKFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBzbHVnICovM10pICsgXCJcIikpKSkpKSk7XG4gICAgY2FzZSAvKiBTdGF0aWMgKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgKFN0cmluZyhyb3V0ZVsvKiBkaXJlY3RvcnkgKi8wXSkgKyAoXCIvXCIgKyAoU3RyaW5nKHJvdXRlWy8qIGZpbGVuYW1lICovMV0pICsgXCJcIikpKTtcbiAgICBcbiAgfVxufVxuXG5leHBvcnRzLnJvdXRlID0gcm91dGU7XG5leHBvcnRzLmJ1aWxkID0gYnVpbGQ7XG4vKiBSZWx1ZGVfSW50IE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEhUVFAgPSByZXF1aXJlKFwiLi9iaW5kaW5ncy9IVFRQLmJzLmpzXCIpO1xudmFyIEh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKFwiLi9Sb3V0ZXIuYnMuanNcIik7XG52YXIgJCRSZXNwb25zZSA9IHJlcXVpcmUoXCIuL1Jlc3BvbnNlLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBDYW1sX29wdGlvbiA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9vcHRpb24uanNcIik7XG52YXIgUGFnZV9fUmVuZGVyID0gcmVxdWlyZShcIi4vdmlld3MvUGFnZV9fUmVuZGVyLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9PcHRpb24gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpO1xudmFyIEFib3V0Q29udHJvbGxlciA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL0Fib3V0Q29udHJvbGxlci5icy5qc1wiKTtcbnZhciBFbnRyeUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9FbnRyeUNvbnRyb2xsZXIuYnMuanNcIik7XG52YXIgSW5kZXhDb250cm9sbGVyID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvSW5kZXhDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIFN0YXRpY0NvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9TdGF0aWNDb250cm9sbGVyLmJzLmpzXCIpO1xudmFyIFRhZ1NlYXJjaENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9UYWdTZWFyY2hDb250cm9sbGVyLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBzcGxpdFVSTFNlZ21lbnRzKHVybCkge1xuICByZXR1cm4gdXJsLnNsaWNlKDEpLnNwbGl0KFwiL1wiKS5tYXAoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9KSkuZmlsdGVyKChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWdtZW50Lmxlbmd0aCA+PSAxO1xuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShwYXJhbSwgcm91dGUpIHtcbiAgdmFyIGVudHJpZXMgPSBwYXJhbS5lbnRyaWVzO1xuICBpZiAodHlwZW9mIHJvdXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIEFib3V0Q29udHJvbGxlci5tYWtlUmVzcG9uc2UocGFyYW0uYWJvdXQpO1xuICB9XG4gIHN3aXRjaCAocm91dGUudGFnIHwgMCkge1xuICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgcmV0dXJuIEluZGV4Q29udHJvbGxlci5tYWtlUmVzcG9uc2UoZW50cmllcywgcm91dGVbLyogcGFnZSAqLzBdKTtcbiAgICBjYXNlIC8qIFRhZ1NlYXJjaCAqLzEgOlxuICAgICAgICByZXR1cm4gVGFnU2VhcmNoQ29udHJvbGxlci5tYWtlUmVzcG9uc2UoZW50cmllcywgcm91dGVbLyogc2x1ZyAqLzBdLCByb3V0ZVsvKiBwYWdlICovMV0pO1xuICAgIGNhc2UgLyogRW50cnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIEVudHJ5Q29udHJvbGxlci5tYWtlUmVzcG9uc2UoZW50cmllcywgcm91dGVbLyogeWVhciAqLzBdLCByb3V0ZVsvKiBtb250aCAqLzFdLCByb3V0ZVsvKiBkYXkgKi8yXSwgcm91dGVbLyogc2x1ZyAqLzNdKTtcbiAgICBjYXNlIC8qIFN0YXRpYyAqLzMgOlxuICAgICAgICByZXR1cm4gU3RhdGljQ29udHJvbGxlci5tYWtlUmVzcG9uc2Uocm91dGVbLyogZGlyZWN0b3J5ICovMF0sIHJvdXRlWy8qIGZpbGVuYW1lICovMV0pO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2Uoc2l0ZU5hbWUsIGRhdGEpIHtcbiAgcmV0dXJuIEh0dHAuY3JlYXRlU2VydmVyKChmdW5jdGlvbiAocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gUmVsdWRlX09wdGlvbi5nZXRPckVsc2UoXCIvXCIsIENhbWxfb3B0aW9uLnVuZGVmaW5lZF90b19vcHQocmVxdWVzdC51cmwpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLnVuc2FmZVJ1bkFzeW5jKChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy50YXAoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uub24oXCJjbG9zZVwiLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXMgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIiArIChTdHJpbmcoc3RhdHVzKSArIChcIiBcIiArIChTdHJpbmcodXJsKSArIChcIiBcIiArIChTdHJpbmcobXMpICsgXCJtc1wiKSkpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRTdGF0dXNDb2RlKDIwMCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0Q29udGVudFR5cGUoUmVsdWRlX09wdGlvbi5nZXRPckVsc2UoXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgcmVzWy8qIHR5cGVfICovMV0pKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50TGVuZ3RoKHJlc1svKiBsZW5ndGggKi8yXSkocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0TGFzdE1vZGlmaWVkKHJlc1svKiBtb2RpZmllZCAqLzNdKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1svKiBzdHJlYW0gKi8wXS5waXBlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gUGFnZV9fUmVuZGVyLnJlbmRlcihzaXRlTmFtZSwgcmVzWy8qIGRhdGEgKi8wXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0U3RhdHVzQ29kZShyZXNbLyogc3RhdHVzICovMV0sIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAuJCRSZXNwb25zZS5zZXRDb250ZW50VHlwZShcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiKShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIVFRQLiQkUmVzcG9uc2Uuc2V0Q29udGVudExlbmd0aChsZW5ndGgpKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVuZChib2R5LCBcInV0Zi04XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9JTy5oYW5kbGVFcnJvcigoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJFJlc3BvbnNlLm5vdEZvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9JTy5mbGF0TWFwKChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlUmVzcG9uc2UoZGF0YSwgcGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfSU8uZnJvbU9wdGlvbigoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJvdXRlci5yb3V0ZShzcGxpdFVSTFNlZ21lbnRzKHVybCkpKSkpKSk7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuKHBhcmFtKSB7XG4gIHBhcmFtLmxpc3Rlbig1MDAwLCBcIjEyNy4wLjAuMVwiLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0ZW5pbmdcIik7XG4gICAgICAgICAgXG4gICAgICAgIH0pKTtcbiAgXG59XG5cbmV4cG9ydHMuc3BsaXRVUkxTZWdtZW50cyA9IHNwbGl0VVJMU2VnbWVudHM7XG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbmV4cG9ydHMubWFrZSA9IG1ha2U7XG5leHBvcnRzLmxpc3RlbiA9IGxpc3Rlbjtcbi8qIGh0dHAgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xudmFyIFNsdWdpZnkgPSByZXF1aXJlKFwic2x1Z2lmeS1icy9zcmMvU2x1Z2lmeS5icy5qc1wiKTtcblxuZnVuY3Rpb24gc2x1ZyhwYXJhbSkge1xuICByZXR1cm4gQ3VycnkuXzMoU2x1Z2lmeS5zbHVnaWZ5LCBcIi1cIiwgcGFyYW0sIHRydWUpO1xufVxuXG5leHBvcnRzLnNsdWcgPSBzbHVnO1xuLyogU2x1Z2lmeSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBBcmdwYXJzZSA9IHJlcXVpcmUoXCJhcmdwYXJzZVwiKTtcblxuZnVuY3Rpb24gbWFrZSh2ZXJzaW9uLCBwcm9nKSB7XG4gIHJldHVybiBuZXcgQXJncGFyc2UuQXJndW1lbnRQYXJzZXIoe1xuICAgICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgICAgICBwcm9nOiBwcm9nXG4gICAgICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQXJndW1lbnQoc2hvcnROYW1lLCBsb25nTmFtZSwgZGVzdCwgcmVxdWlyZWQsIG1ldGF2YXIsIHBhcnNlcikge1xuICBwYXJzZXIuYWRkQXJndW1lbnQoW1xuICAgICAgICBzaG9ydE5hbWUsXG4gICAgICAgIGxvbmdOYW1lXG4gICAgICBdLCB7XG4gICAgICAgIGRlc3Q6IGRlc3QsXG4gICAgICAgIG1ldGF2YXI6IG1ldGF2YXIsXG4gICAgICAgIHJlcXVpcmVkOiByZXF1aXJlZFxuICAgICAgfSk7XG4gIFxufVxuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuZXhwb3J0cy5hZGRBcmd1bWVudCA9IGFkZEFyZ3VtZW50O1xuLyogYXJncGFyc2UgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIG1ha2UoeWVhciwgbW9udGgsIGRheSwgaG91ck9wdCwgbWludXRlT3B0LCBwYXJhbSkge1xuICB2YXIgaG91ciA9IGhvdXJPcHQgIT09IHVuZGVmaW5lZCA/IGhvdXJPcHQgOiAwO1xuICB2YXIgbWludXRlID0gbWludXRlT3B0ICE9PSB1bmRlZmluZWQgPyBtaW51dGVPcHQgOiAwO1xuICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxIHwgMCwgZGF5LCBob3VyLCBtaW51dGUpO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aChkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxIHwgMDtcbn1cblxuZXhwb3J0cy5tYWtlID0gbWFrZTtcbmV4cG9ydHMuZ2V0TW9udGggPSBnZXRNb250aDtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEVtb3Rpb24gPSByZXF1aXJlKFwiZW1vdGlvblwiKTtcbnZhciBDb3JlID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7XG5cbnZhciBQcm92aWRlciA9IHsgfTtcblxudmFyIENhY2hlID0ge1xuICBQcm92aWRlcjogUHJvdmlkZXJcbn07XG5cbnZhciBTZXJ2ZXIgPSB7IH07XG5cbmZ1bmN0aW9uIEVtb3Rpb24kUHJvdmlkZXIoUHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gUHJvcHMuY2hpbGRyZW47XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvcmUuQ2FjaGVQcm92aWRlciwge1xuICAgICAgICAgICAgICB2YWx1ZTogRW1vdGlvbi5jYWNoZSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgICB9KTtcbn1cblxudmFyIFByb3ZpZGVyJDEgPSB7XG4gIG1ha2U6IEVtb3Rpb24kUHJvdmlkZXJcbn07XG5cbmV4cG9ydHMuQ2FjaGUgPSBDYWNoZTtcbmV4cG9ydHMuU2VydmVyID0gU2VydmVyO1xuZXhwb3J0cy5Qcm92aWRlciA9IFByb3ZpZGVyJDE7XG4vKiByZWFjdCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cblxudmFyICQkUmVxdWVzdCA9IHsgfTtcblxuZnVuY3Rpb24gc2V0U3RhdHVzQ29kZShzdGF0dXMsIHJlc3BvbnNlKSB7XG4gIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG4gIFxufVxuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZSh2YWx1ZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcGFyYW0uc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIHZhbHVlKTtcbiAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRDb250ZW50TGVuZ3RoKGxlbmd0aCkge1xuICB2YXIgcGFydGlhbF9hcmcgPSBTdHJpbmcobGVuZ3RoKTtcbiAgcmV0dXJuIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHBhcmFtLnNldEhlYWRlcihcIkNvbnRlbnQtTGVuZ3RoXCIsIHBhcnRpYWxfYXJnKTtcbiAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRMYXN0TW9kaWZpZWQoZGF0ZSkge1xuICB2YXIgcGFydGlhbF9hcmcgPSBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gIHJldHVybiAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBwYXJhbS5zZXRIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIsIHBhcnRpYWxfYXJnKTtcbiAgICAgIFxuICAgIH0pO1xufVxuXG52YXIgJCRSZXNwb25zZSA9IHtcbiAgc2V0U3RhdHVzQ29kZTogc2V0U3RhdHVzQ29kZSxcbiAgc2V0Q29udGVudFR5cGU6IHNldENvbnRlbnRUeXBlLFxuICBzZXRDb250ZW50TGVuZ3RoOiBzZXRDb250ZW50TGVuZ3RoLFxuICBzZXRMYXN0TW9kaWZpZWQ6IHNldExhc3RNb2RpZmllZFxufTtcblxudmFyIFNlcnZlciA9IHsgfTtcblxuZXhwb3J0cy4kJFJlcXVlc3QgPSAkJFJlcXVlc3Q7XG5leHBvcnRzLiQkUmVzcG9uc2UgPSAkJFJlc3BvbnNlO1xuZXhwb3J0cy5TZXJ2ZXIgPSBTZXJ2ZXI7XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG52YXIgSnNfdHlwZXMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2pzX3R5cGVzLmpzXCIpO1xudmFyIE1pbWVUeXBlcyA9IHJlcXVpcmUoXCJtaW1lLXR5cGVzXCIpO1xuXG5mdW5jdGlvbiBzdHJpbmcoc3RyaW5nJDEpIHtcbiAgcmV0dXJuIHN0cmluZyQxO1xufVxuXG5mdW5jdGlvbiAkJGJvb2xlYW4oJCRib29sZWFuJDEpIHtcbiAgcmV0dXJuICQkYm9vbGVhbiQxO1xufVxuXG5mdW5jdGlvbiBjbGFzc2lmeSh2YWx1ZSkge1xuICBpZiAoSnNfdHlwZXMudGVzdCh2YWx1ZSwgLyogU3RyaW5nICovNCkpIHtcbiAgICByZXR1cm4gLyogU3RyaW5nICovQmxvY2suX18oMCwgW3ZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIEJvb2xlYW4gKi9CbG9jay5fXygxLCBbdmFsdWVdKTtcbiAgfVxufVxuXG52YXIgU3RyaW5nQm9vbGVhblVuaW9uID0ge1xuICBzdHJpbmc6IHN0cmluZyxcbiAgJCRib29sZWFuOiAkJGJvb2xlYW4sXG4gIGNsYXNzaWZ5OiBjbGFzc2lmeVxufTtcblxuZnVuY3Rpb24gY29udGVudFR5cGUoZmlsZW5hbWUpIHtcbiAgdmFyIGNvbnRlbnRUeXBlJDEgPSBjbGFzc2lmeShNaW1lVHlwZXMuY29udGVudFR5cGUoZmlsZW5hbWUpKTtcbiAgaWYgKGNvbnRlbnRUeXBlJDEudGFnKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29udGVudFR5cGUkMVswXTtcbiAgfVxufVxuXG5leHBvcnRzLlN0cmluZ0Jvb2xlYW5VbmlvbiA9IFN0cmluZ0Jvb2xlYW5VbmlvbjtcbmV4cG9ydHMuY29udGVudFR5cGUgPSBjb250ZW50VHlwZTtcbi8qIG1pbWUtdHlwZXMgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFja2FnZUpzb24gPSByZXF1aXJlKFwiLi4vLi4vcGFja2FnZS5qc29uXCIpO1xuXG52YXIganNvbiA9IFBhY2thZ2VKc29uO1xuXG5leHBvcnRzLmpzb24gPSBqc29uO1xuLyoganNvbiBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBCbG9jayA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShhYm91dCkge1xuICByZXR1cm4gLyogUHVyZSAqL0Jsb2NrLl9fKDAsIFsvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgIC8qIGRhdGEgKi8vKiBBYm91dCAqL0Jsb2NrLl9fKDIsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogYWJvdXRcbiAgICAgICAgICAgICAgICAgICAgfV0pLFxuICAgICAgICAgICAgICAgIC8qIHN0YXR1cyAqLzIwMFxuICAgICAgICAgICAgICBdKV0pO1xufVxuXG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyICQkRGF0ZSA9IHJlcXVpcmUoXCIuLi9iaW5kaW5ncy9EYXRlLmJzLmpzXCIpO1xudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgVXRpbHMgPSByZXF1aXJlKFwiLi4vVXRpbHMuYnMuanNcIik7XG52YXIgUmVsdWRlX0lPID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JbnQgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9MaXN0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG5cbmZ1bmN0aW9uIGRheVRpbWVzdGFtcChkYXRlKSB7XG4gIHJldHVybiAkJERhdGUubWFrZShkYXRlLmdldEZ1bGxZZWFyKCksICQkRGF0ZS5nZXRNb250aChkYXRlKSwgZGF0ZS5nZXREYXRlKCksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpLmdldFRpbWUoKTtcbn1cblxuZnVuY3Rpb24gbWFrZVJlc3BvbnNlKGVudHJpZXMsIHllYXIsIG1vbnRoLCBkYXksIHNsdWcpIHtcbiAgdmFyIHRpbWVzdGFtcCA9ICQkRGF0ZS5tYWtlKHllYXIsIG1vbnRoLCBkYXksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpLmdldFRpbWUoKTtcbiAgcmV0dXJuIFJlbHVkZV9JTy5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAvKiBQYWdlICovQmxvY2suX18oMCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBkYXRhICovLyogRW50cnkgKi9CbG9jay5fXygzLCBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZW50cnkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGVudHJ5LmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVudHJ5LnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGVudHJ5LnRhZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0xpc3QuZmluZCwgKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5VGltZXN0YW1wKGVudHJ5LmRhdGUpIDwgdGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9MaXN0LnNvcnRCeSgoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfSW50LmNvbXBhcmUsIGIuZGF0ZS5nZXRUaW1lKCksIGEuZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBlbnRyaWVzKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiBSZWx1ZGVfT3B0aW9uLm1hcCgoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0xpc3QuZmluZCwgKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5VGltZXN0YW1wKGVudHJ5LmRhdGUpID4gdGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9MaXN0LnNvcnRCeSgoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfSW50LmNvbXBhcmUsIGEuZGF0ZS5nZXRUaW1lKCksIGIuZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBlbnRyaWVzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHN0YXR1cyAqLzIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgIH0pLCBSZWx1ZGVfSU8uZnJvbU9wdGlvbigoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX0xpc3QuZmluZCwgKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRheVRpbWVzdGFtcChlbnRyeS5kYXRlKSA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShVdGlscy5zbHVnKHVuZGVmaW5lZCksIGVudHJ5LnRpdGxlKSA9PT0gc2x1ZztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSwgZW50cmllcykpKTtcbn1cblxuZXhwb3J0cy5kYXlUaW1lc3RhbXAgPSBkYXlUaW1lc3RhbXA7XG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbi8qIFV0aWxzIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQlVDS0xFU0NSSVBULCBQTEVBU0UgRURJVCBXSVRIIENBUkVcbid1c2Ugc3RyaWN0JztcblxudmFyIEJsb2NrID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9ibG9jay5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgQ29uc3RhbnRzID0gcmVxdWlyZShcIi4uL0NvbnN0YW50cy5icy5qc1wiKTtcbnZhciBSZWx1ZGVfSU8gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSU8uYnMuanNcIik7XG52YXIgQ2FtbF9pbnQzMiA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY2FtbF9pbnQzMi5qc1wiKTtcbnZhciBSZWx1ZGVfSW50ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiKTtcbnZhciBSZWx1ZGVfTGlzdCA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9PcHRpb24gPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfT3B0aW9uLmJzLmpzXCIpO1xuXG5mdW5jdGlvbiBtYWtlUmVzcG9uc2UoZW50cmllcywgcGFnZSkge1xuICByZXR1cm4gUmVsdWRlX0lPLmZyb21PcHRpb24oKGZ1bmN0aW9uIChwcmltKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pLCBDdXJyeS5fMihSZWx1ZGVfT3B0aW9uLmZsYXRNYXAsIChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAocGFnZUVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZGF0YSAqLy8qIEluZGV4ICovQmxvY2suX18oMCwgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IEN1cnJ5Ll8xKFJlbHVkZV9MaXN0Lmxlbmd0aCwgZW50cmllcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXM6IFJlbHVkZV9MaXN0Lm1hcCgoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZW50cnkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGVudHJ5LmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVudHJ5LnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKHBhZ2VFbnRyaWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBzdGF0dXMgKi8yMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVsdWRlX09wdGlvbi5maWx0ZXIoKGZ1bmN0aW9uIChwYWdlRW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShSZWx1ZGVfTGlzdC5sZW5ndGgsIHBhZ2VFbnRyaWVzKSAhPT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKFJlbHVkZV9MaXN0LnRha2UoQ29uc3RhbnRzLmVudHJpZXNQZXJQYWdlLCBwYXJhbVsxXSkpKTtcbiAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfTGlzdC5zcGxpdEF0KENhbWxfaW50MzIuaW11bChwYWdlIC0gMSB8IDAsIENvbnN0YW50cy5lbnRyaWVzUGVyUGFnZSksIFJlbHVkZV9MaXN0LnNvcnRCeSgoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzIoUmVsdWRlX0ludC5jb21wYXJlLCBiLmRhdGUuZ2V0VGltZSgpLCBhLmRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGVudHJpZXMpKSkpO1xufVxuXG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbi8qIFJlbHVkZV9JTyBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xudmFyIEN1cnJ5ID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTtcbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKFwiLi4vYmluZGluZ3MvTWltZVR5cGVzLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBOb2RlRlNfX1N0YXQgPSByZXF1aXJlKFwibm9kZS1mcy1icy9zcmMvTm9kZUZTX19TdGF0LmJzLmpzXCIpO1xudmFyIE5vZGVGU19fUmVhZFN0cmVhbSA9IHJlcXVpcmUoXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1JlYWRTdHJlYW0uYnMuanNcIik7XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShkaXJlY3RvcnksIGZpbGVuYW1lKSB7XG4gIHZhciBwYXRoID0gUGF0aC5qb2luKF9fZGlybmFtZSwgZGlyZWN0b3J5LCBmaWxlbmFtZSk7XG4gIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfSU8ubWFwRXJyb3IsIChmdW5jdGlvbiAocHJpbSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KSwgUmVsdWRlX0lPLmZsYXRNYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXRpbWUgPSBwYXJhbS5tdGltZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNpemUgPSBwYXJhbS5zaXplO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX0lPLm1hcCgoZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiBTdHJlYW0gKi9CbG9jay5fXygxLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHN0cmVhbSAqL3N0cmVhbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdHlwZV8gKi9NaW1lVHlwZXMuY29udGVudFR5cGUoZmlsZW5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBsZW5ndGggKi9zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBtb2RpZmllZCAqL210aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIE5vZGVGU19fUmVhZFN0cmVhbS5tYWtlKHBhdGgpKTtcbiAgICAgICAgICAgICAgICAgIH0pLCBOb2RlRlNfX1N0YXQuc3RhdChwYXRoKSkpO1xufVxuXG5leHBvcnRzLm1ha2VSZXNwb25zZSA9IG1ha2VSZXNwb25zZTtcbi8qIHBhdGggTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmxvY2sgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2Jsb2NrLmpzXCIpO1xudmFyIEN1cnJ5ID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuLi9VdGlscy5icy5qc1wiKTtcbnZhciBDb25zdGFudHMgPSByZXF1aXJlKFwiLi4vQ29uc3RhbnRzLmJzLmpzXCIpO1xudmFyIFJlbHVkZV9JTyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9JTy5icy5qc1wiKTtcbnZhciBDYW1sX2ludDMyID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jYW1sX2ludDMyLmpzXCIpO1xudmFyIFJlbHVkZV9JbnQgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfSW50LmJzLmpzXCIpO1xudmFyIFJlbHVkZV9MaXN0ID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0xpc3QuYnMuanNcIik7XG52YXIgUmVsdWRlX09wdGlvbiA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9PcHRpb24uYnMuanNcIik7XG5cbmZ1bmN0aW9uIG1ha2VSZXNwb25zZShlbnRyaWVzLCBzbHVnLCBwYWdlKSB7XG4gIHJldHVybiBSZWx1ZGVfSU8uZnJvbU9wdGlvbigoZnVuY3Rpb24gKHByaW0pIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSksIEN1cnJ5Ll8yKFJlbHVkZV9PcHRpb24uZmxhdE1hcCwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gcGFyYW1bMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJlZEVudHJpZXMgPSBwYXJhbVswXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlbHVkZV9PcHRpb24ubWFwKChmdW5jdGlvbiAocGFnZUVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogUGFnZSAqL0Jsb2NrLl9fKDAsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZGF0YSAqLy8qIFRhZ1NlYXJjaCAqL0Jsb2NrLl9fKDEsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogdGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogQ3VycnkuXzEoUmVsdWRlX0xpc3QubGVuZ3RoLCBmaWx0ZXJlZEVudHJpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzOiBSZWx1ZGVfTGlzdC5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVudHJ5LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBlbnRyeS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbnRyeS50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShwYWdlRW50cmllcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc3RhdHVzICovMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9PcHRpb24uZmlsdGVyKChmdW5jdGlvbiAocGFnZUVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VycnkuXzEoUmVsdWRlX0xpc3QubGVuZ3RoLCBwYWdlRW50cmllcykgIT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKShSZWx1ZGVfTGlzdC50YWtlKENvbnN0YW50cy5lbnRyaWVzUGVyUGFnZSwgcGFyYW1bMV0pKSk7XG4gICAgICAgICAgICAgICAgICB9KSwgQ3VycnkuXzIoUmVsdWRlX09wdGlvbi5mbGF0TWFwLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFnID0gcGFyYW1bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWRFbnRyaWVzID0gcGFyYW1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVsdWRlX09wdGlvbi5tYXAoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRFbnRyaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFJlbHVkZV9MaXN0LnNwbGl0QXQoQ2FtbF9pbnQzMi5pbXVsKHBhZ2UgLSAxIHwgMCwgQ29uc3RhbnRzLmVudHJpZXNQZXJQYWdlKSwgUmVsdWRlX0xpc3Quc29ydEJ5KChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMihSZWx1ZGVfSW50LmNvbXBhcmUsIGIuZGF0ZS5nZXRUaW1lKCksIGEuZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZmlsdGVyZWRFbnRyaWVzKSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWx1ZGVfTGlzdC5mb2xkTGVmdCgoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IEN1cnJ5Ll8yKFJlbHVkZV9MaXN0LmZpbmQsIChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDdXJyeS5fMShVdGlscy5zbHVnKHVuZGVmaW5lZCksIHRhZykgPT09IHNsdWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZW50cnkudGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjY3VtdWxhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdG9yWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyogdHVwbGUgKi9bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgdW5kZWZpbmVkKShlbnRyaWVzKSkpKTtcbn1cblxuZXhwb3J0cy5tYWtlUmVzcG9uc2UgPSBtYWtlUmVzcG9uc2U7XG4vKiBVdGlscyBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDc3MgPSByZXF1aXJlKFwiYnMtY3NzLWVtb3Rpb24vc3JjL0Nzcy5qc1wiKTtcbnZhciBDdXJyeSA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvY3VycnkuanNcIik7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgRW1vdGlvbiA9IHJlcXVpcmUoXCIuLi9iaW5kaW5ncy9FbW90aW9uLmJzLmpzXCIpO1xudmFyIEFib3V0UGFnZSA9IHJlcXVpcmUoXCIuL3BhZ2VzL0Fib3V0UGFnZS5icy5qc1wiKTtcbnZhciBFbnRyeVBhZ2UgPSByZXF1aXJlKFwiLi9wYWdlcy9FbnRyeVBhZ2UuYnMuanNcIik7XG52YXIgSW5kZXhQYWdlID0gcmVxdWlyZShcIi4vcGFnZXMvSW5kZXhQYWdlLmJzLmpzXCIpO1xudmFyIE5vdEZvdW5kUGFnZSA9IHJlcXVpcmUoXCIuL3BhZ2VzL05vdEZvdW5kUGFnZS5icy5qc1wiKTtcbnZhciBUYWdTZWFyY2hQYWdlID0gcmVxdWlyZShcIi4vcGFnZXMvVGFnU2VhcmNoUGFnZS5icy5qc1wiKTtcbnZhciBCb290c3RyYXBSZWJvb3RNaW5Dc3MgPSByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzc1wiKTtcblxuZnVuY3Rpb24gZm9ybWF0VGl0bGUoc2l0ZU5hbWUsIHBhZ2VEYXRhKSB7XG4gIGlmIChwYWdlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFwiTm90IGZvdW5kIHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpO1xuICB9XG4gIHN3aXRjaCAocGFnZURhdGEudGFnIHwgMCkge1xuICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgcmV0dXJuIHNpdGVOYW1lO1xuICAgIGNhc2UgLyogVGFnU2VhcmNoICovMSA6XG4gICAgICAgIHJldHVybiBcIlwiICsgKFN0cmluZyhwYWdlRGF0YVswXS50YWcpICsgKFwiIHwgXCIgKyAoU3RyaW5nKHNpdGVOYW1lKSArIFwiXCIpKSk7XG4gICAgY2FzZSAvKiBBYm91dCAqLzIgOlxuICAgICAgICByZXR1cm4gXCJBYm91dCB8IFwiICsgKFN0cmluZyhzaXRlTmFtZSkgKyBcIlwiKTtcbiAgICBjYXNlIC8qIEVudHJ5ICovMyA6XG4gICAgICAgIHJldHVybiBcIlwiICsgKFN0cmluZyhwYWdlRGF0YVswXS50aXRsZSkgKyAoXCIgfCBcIiArIChTdHJpbmcoc2l0ZU5hbWUpICsgXCJcIikpKTtcbiAgICBcbiAgfVxufVxuXG52YXIgY2xhc3NOYW1lID0gQ3VycnkuXzEoQ3NzLnN0eWxlLCAvKiA6OiAqL1tcbiAgICAgIENzcy5kaXNwbGF5KENzcy5mbGV4Qm94KSxcbiAgICAgIC8qIDo6ICovW1xuICAgICAgICBDc3MuZmxleERpcmVjdGlvbihDc3MuY29sdW1uKSxcbiAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgQ3NzLm1pbkhlaWdodChDc3MudmgoMTAwLjApKSxcbiAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgXVxuICAgICAgXVxuICAgIF0pO1xuXG5mdW5jdGlvbiBQYWdlX19Db21wb25lbnQkUm9vdChQcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBQcm9wcy5jaGlsZHJlbjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICAgICAgfSwgY2hpbGRyZW4pO1xufVxuXG52YXIgUm9vdCA9IHtcbiAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gIG1ha2U6IFBhZ2VfX0NvbXBvbmVudCRSb290XG59O1xuXG5mdW5jdGlvbiBQYWdlX19Db21wb25lbnQoUHJvcHMpIHtcbiAgdmFyIHNpdGVOYW1lID0gUHJvcHMuc2l0ZU5hbWU7XG4gIHZhciBwYWdlRGF0YSA9IFByb3BzLnBhZ2VEYXRhO1xuICB2YXIgdGl0bGUgPSBmb3JtYXRUaXRsZShzaXRlTmFtZSwgcGFnZURhdGEpO1xuICB2YXIgY29udGVudDtcbiAgaWYgKHBhZ2VEYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICBzd2l0Y2ggKHBhZ2VEYXRhLnRhZyB8IDApIHtcbiAgICAgIGNhc2UgLyogSW5kZXggKi8wIDpcbiAgICAgICAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChJbmRleFBhZ2UubWFrZSwge1xuICAgICAgICAgICAgICAgIGRhdGE6IHBhZ2VEYXRhWzBdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBUYWdTZWFyY2ggKi8xIDpcbiAgICAgICAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUYWdTZWFyY2hQYWdlLm1ha2UsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBwYWdlRGF0YVswXVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogQWJvdXQgKi8yIDpcbiAgICAgICAgICBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChBYm91dFBhZ2UubWFrZSwge1xuICAgICAgICAgICAgICAgIGRhdGE6IHBhZ2VEYXRhWzBdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBFbnRyeSAqLzMgOlxuICAgICAgICAgIGNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEVudHJ5UGFnZS5tYWtlLCB7XG4gICAgICAgICAgICAgICAgZGF0YTogcGFnZURhdGFbMF1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90Rm91bmRQYWdlLm1ha2UsIHsgfSk7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1vdGlvbi5Qcm92aWRlci5tYWtlLCB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IFwiZW5cIlxuICAgICAgICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImhlYWRcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhclNldDogXCJ1dGYtOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIHVuZGVmaW5lZCwgdGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwgdW5kZWZpbmVkLCBCb290c3RyYXBSZWJvb3RNaW5Dc3MpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJvZHlcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VfX0NvbXBvbmVudCRSb290LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKVxuICAgICAgICAgICAgfSk7XG59XG5cbnZhciBtYWtlID0gUGFnZV9fQ29tcG9uZW50O1xuXG5leHBvcnRzLmZvcm1hdFRpdGxlID0gZm9ybWF0VGl0bGU7XG5leHBvcnRzLlJvb3QgPSBSb290O1xuZXhwb3J0cy5tYWtlID0gbWFrZTtcbi8qIGNsYXNzTmFtZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTdHlsZSA9IHJlcXVpcmUoXCIuL1N0eWxlLmJzLmpzXCIpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEVtb3Rpb25TZXJ2ZXIgPSByZXF1aXJlKFwiZW1vdGlvbi1zZXJ2ZXJcIik7XG52YXIgUGFnZV9fQ29tcG9uZW50ID0gcmVxdWlyZShcIi4vUGFnZV9fQ29tcG9uZW50LmJzLmpzXCIpO1xudmFyIFNlcnZlciA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5mdW5jdGlvbiByZW5kZXIoc2l0ZU5hbWUsIHBhZ2VEYXRhKSB7XG4gIFN0eWxlLnJlZ2lzdGVyR2xvYmFsU3R5bGVzKHVuZGVmaW5lZCk7XG4gIHZhciByZW5kZXJlZCA9IEVtb3Rpb25TZXJ2ZXIucmVuZGVyU3R5bGVzVG9TdHJpbmcoU2VydmVyLnJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZV9fQ29tcG9uZW50Lm1ha2UsIHtcbiAgICAgICAgICAgICAgICBzaXRlTmFtZTogc2l0ZU5hbWUsXG4gICAgICAgICAgICAgICAgcGFnZURhdGE6IHBhZ2VEYXRhXG4gICAgICAgICAgICAgIH0pKSk7XG4gIHJldHVybiBcIjwhRE9DVFlQRSBodG1sPlwiICsgcmVuZGVyZWQ7XG59XG5cbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyO1xuLyogU3R5bGUgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3NzID0gcmVxdWlyZShcImJzLWNzcy1lbW90aW9uL3NyYy9Dc3MuanNcIik7XG52YXIgQ3VycnkgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2N1cnJ5LmpzXCIpO1xuXG52YXIgYmx1ZSA9IENzcy5yZ2IoMjUsIDExNiwgMTk1KTtcblxudmFyIGdyZXkxID0gQ3NzLnJnYigyNDksIDI0OSwgMjUwKTtcblxudmFyIGdyZXkyID0gQ3NzLnJnYigyMzMsIDIzNiwgMjM5KTtcblxudmFyIGdyZXkzID0gQ3NzLnJnYigyMjIsIDIyNiwgMjMwKTtcblxudmFyIGdyZXk0ID0gQ3NzLnJnYigyMDYsIDIxMiwgMjE4KTtcblxudmFyIGdyZXk1ID0gQ3NzLnJnYigxNzMsIDE4MSwgMTg5KTtcblxudmFyIGdyZXk2ID0gQ3NzLnJnYigxMDgsIDExNywgMTI1KTtcblxudmFyIGdyZXk3ID0gQ3NzLnJnYig3MywgODAsIDg3KTtcblxudmFyIGdyZXk4ID0gQ3NzLnJnYig1MiwgNTgsIDY0KTtcblxudmFyIGdyZXk5ID0gQ3NzLnJnYigzMywgMzcsIDQxKTtcblxudmFyIGRlc2t0b3BDb2x1bW5XaWR0aCA9IENzcy53aWR0aChDc3MucmVtKDM3LjUpKTtcblxudmFyIHBhcnRpYWxfYXJnID0gXCIobWluLXdpZHRoOiBcIiArIChTdHJpbmcoMzcuNSkgKyBcInJlbSlcIik7XG5cbmZ1bmN0aW9uIGRlc2t0b3BNZWRpYVF1ZXJ5KHBhcmFtKSB7XG4gIHJldHVybiBDc3MubWVkaWEocGFydGlhbF9hcmcsIHBhcmFtKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHbG9iYWxTdHlsZXMocGFyYW0pIHtcbiAgQ3VycnkuXzIoQ3NzLiQkZ2xvYmFsLCBcImFcIiwgLyogOjogKi9bXG4gICAgICAgIENzcy50ZXh0RGVjb3JhdGlvbihDc3Mubm9uZSksXG4gICAgICAgIC8qIDo6ICovW1xuICAgICAgICAgIENzcy5jb2xvcihibHVlKSxcbiAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgXVxuICAgICAgXSk7XG4gIHZhciBjb2RlU3R5bGVfMDAwID0gQ3NzLmZvbnRTaXplKENzcy5yZW0oMC44NzUpKTtcbiAgdmFyIGNvZGVTdHlsZV8wMDEgPSAvKiA6OiAqL1tcbiAgICBDc3MuZm9udEZhbWlseSgvKiBtb25vc3BhY2UgKi8tNTU1MzYzOTAxKSxcbiAgICAvKiA6OiAqL1tcbiAgICAgIENzcy5iYWNrZ3JvdW5kQ29sb3IoZ3JleTIpLFxuICAgICAgLyogW10gKi8wXG4gICAgXVxuICBdO1xuICB2YXIgY29kZVN0eWxlID0gLyogOjogKi9bXG4gICAgY29kZVN0eWxlXzAwMCxcbiAgICBjb2RlU3R5bGVfMDAxXG4gIF07XG4gIEN1cnJ5Ll8yKENzcy4kJGdsb2JhbCwgXCJjb2RlXCIsIGNvZGVTdHlsZSk7XG4gIEN1cnJ5Ll8yKENzcy4kJGdsb2JhbCwgXCJwcmVcIiwgLyogOjogKi9bXG4gICAgICAgIENzcy5wYWRkaW5nKENzcy5yZW0oMC42MjUpKSxcbiAgICAgICAgLyogOjogKi9bXG4gICAgICAgICAgQ3NzLm92ZXJmbG93KENzcy5hdXRvKSxcbiAgICAgICAgICBjb2RlU3R5bGVcbiAgICAgICAgXVxuICAgICAgXSk7XG4gIHJldHVybiBDdXJyeS5fMihDc3MuJCRnbG9iYWwsIFwiaDEgY29kZSwgaDIgY29kZSwgaDMgY29kZVwiLCAvKiA6OiAqL1tcbiAgICAgICAgICAgICAgQ3NzLmZvbnRTaXplKENzcy5pbmhlcml0XyksXG4gICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgXSk7XG59XG5cbnZhciBkYXJrQm9yZGVyQ29sb3VyID0gZ3JleTI7XG5cbnZhciBsaWdodEJvcmRlckNvbG91ciA9IGdyZXkzO1xuXG52YXIgZGVza3RvcENvbHVtblJlbSA9IDM3LjU7XG5cbmV4cG9ydHMuYmx1ZSA9IGJsdWU7XG5leHBvcnRzLmdyZXkxID0gZ3JleTE7XG5leHBvcnRzLmdyZXkyID0gZ3JleTI7XG5leHBvcnRzLmdyZXkzID0gZ3JleTM7XG5leHBvcnRzLmdyZXk0ID0gZ3JleTQ7XG5leHBvcnRzLmdyZXk1ID0gZ3JleTU7XG5leHBvcnRzLmdyZXk2ID0gZ3JleTY7XG5leHBvcnRzLmdyZXk3ID0gZ3JleTc7XG5leHBvcnRzLmdyZXk4ID0gZ3JleTg7XG5leHBvcnRzLmdyZXk5ID0gZ3JleTk7XG5leHBvcnRzLmRhcmtCb3JkZXJDb2xvdXIgPSBkYXJrQm9yZGVyQ29sb3VyO1xuZXhwb3J0cy5saWdodEJvcmRlckNvbG91ciA9IGxpZ2h0Qm9yZGVyQ29sb3VyO1xuZXhwb3J0cy5kZXNrdG9wQ29sdW1uUmVtID0gZGVza3RvcENvbHVtblJlbTtcbmV4cG9ydHMuZGVza3RvcENvbHVtbldpZHRoID0gZGVza3RvcENvbHVtbldpZHRoO1xuZXhwb3J0cy5kZXNrdG9wTWVkaWFRdWVyeSA9IGRlc2t0b3BNZWRpYVF1ZXJ5O1xuZXhwb3J0cy5yZWdpc3Rlckdsb2JhbFN0eWxlcyA9IHJlZ2lzdGVyR2xvYmFsU3R5bGVzO1xuLyogYmx1ZSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuZnVuY3Rpb24gQWJvdXRQYWdlKFByb3BzKSB7XG4gIHZhciBwYXJhbSA9IFByb3BzLmRhdGE7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFwiYWJvdXRcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBwYXJhbS50ZXh0KSk7XG59XG5cbnZhciBtYWtlID0gQWJvdXRQYWdlO1xuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbmZ1bmN0aW9uIEVudHJ5UGFnZShQcm9wcykge1xuICB2YXIgcGFyYW0gPSBQcm9wcy5kYXRhO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBwYXJhbS50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBwYXJhbS50ZXh0KSk7XG59XG5cbnZhciBtYWtlID0gRW50cnlQYWdlO1xuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgUmVsdWRlX0xpc3QgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfTGlzdC5icy5qc1wiKTtcblxuZnVuY3Rpb24gSW5kZXhQYWdlKFByb3BzKSB7XG4gIHZhciBwYXJhbSA9IFByb3BzLmRhdGE7XG4gIHZhciBlbnRyaWVzID0gUmVsdWRlX0xpc3QudG9BcnJheShSZWx1ZGVfTGlzdC5tYXAoKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVudHJ5LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5LnRpdGxlKTtcbiAgICAgICAgICAgICAgfSkpKHBhcmFtLmVudHJpZXMpKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgdW5kZWZpbmVkLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJwYWdlIFwiICsgKFN0cmluZyhwYXJhbS5wYWdlKSArIFwiXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFwidG90YWwgXCIgKyAoU3RyaW5nKHBhcmFtLnRvdGFsKSArIFwiXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIGVudHJpZXMpKTtcbn1cblxudmFyIG1ha2UgPSBJbmRleFBhZ2U7XG5cbmV4cG9ydHMubWFrZSA9IG1ha2U7XG4vKiByZWFjdCBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IEJVQ0tMRVNDUklQVCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuZnVuY3Rpb24gTm90Rm91bmRQYWdlKFByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJub3QgZm91bmRcIik7XG59XG5cbnZhciBtYWtlID0gTm90Rm91bmRQYWdlO1xuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBCVUNLTEVTQ1JJUFQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgUmVsdWRlX0xpc3QgPSByZXF1aXJlKFwicmVsdWRlL3NyYy9SZWx1ZGVfTGlzdC5icy5qc1wiKTtcblxuZnVuY3Rpb24gVGFnU2VhcmNoUGFnZShQcm9wcykge1xuICB2YXIgcGFyYW0gPSBQcm9wcy5kYXRhO1xuICB2YXIgZW50cmllcyA9IFJlbHVkZV9MaXN0LnRvQXJyYXkoUmVsdWRlX0xpc3QubWFwKChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBlbnRyeS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeS50aXRsZSk7XG4gICAgICAgICAgICAgIH0pKShwYXJhbS5lbnRyaWVzKSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIFwidGFnIFwiICsgKFN0cmluZyhwYXJhbS50YWcpICsgXCJcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHVuZGVmaW5lZCwgXCJwYWdlIFwiICsgKFN0cmluZyhwYXJhbS5wYWdlKSArIFwiXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB1bmRlZmluZWQsIGVudHJpZXMpKTtcbn1cblxudmFyIG1ha2UgPSBUYWdTZWFyY2hQYWdlO1xuXG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuLyogcmVhY3QgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXJncGFyc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtY3NzLWVtb3Rpb24vc3JjL0Nzcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvYmxvY2suanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfaW50MzIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnMtcGxhdGZvcm0vbGliL2pzL2NhbWxfb3B0aW9uLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJzLXBsYXRmb3JtL2xpYi9qcy9jdXJyeS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvanNfZGljdC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJicy1wbGF0Zm9ybS9saWIvanMvanNfdHlwZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbW90aW9uLXNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtkb3duLW1ldGFkYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZERpci5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1JlYWRGaWxlLmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZnMtYnMvc3JjL05vZGVGU19fUmVhZFN0cmVhbS5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZzLWJzL3NyYy9Ob2RlRlNfX1N0YXQuYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0FycmF5LmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0lPLmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX0ludC5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9MaXN0LmJzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbHVkZS9zcmMvUmVsdWRlX09wdGlvbi5icy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWx1ZGUvc3JjL1JlbHVkZV9SZXN1bHQuYnMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2x1Z2lmeS1icy9zcmMvU2x1Z2lmeS5icy5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9