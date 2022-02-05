/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/dragula/dist/dragula.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/dragula/dist/dragula.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n", "",{"version":3,"sources":["webpack://./node_modules/dragula/dist/dragula.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,oBAAoB;EACpB,wBAAwB;EACxB,YAAY;EACZ,iEAAiE;EACjE,yBAAyB;AAC3B;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,oCAAoC;EACpC,iCAAiC;EACjC,gCAAgC;EAChC,4BAA4B;AAC9B;AACA;EACE,YAAY;EACZ,iEAAiE;EACjE,yBAAyB;AAC3B","sourcesContent":[".gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n#homepage-wrapper {\n  height: 200px;\n  margin: 10px auto;\n  display: flex;\n  flex-direction: column;\n}\n\n#homepage-title {\n  font-size: 56px;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n\n#start-game-btn {\n  font-size: 36;\n  font-weight: bold;\n  height: 50px;\n}\n\n#gameboardsWrapper {\n  display: flex;\n}\n\n.board-wrapper {\n  height: 600px;\n  display: inline-block;\n  margin: 5px;\n}\n\n.board-container {\n  height: 500px;\n  width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 20px;\n}\n\n.board-square {\n  height: 50px;\n  width: 50px;\n  background-color: rgb(255, 255, 255);\n  border: 0.25px solid rgba(0, 0, 0, 0.8);\n  font-size: 36px;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\n\n.board-square-player {\n  background-color: rgb(200, 200, 200);\n}\n\n.board-square-hit {\n  background-color: red;\n}\n\n.board-title {\n  text-align: center;\n  font-size: 24px;\n}\n\n#ships-wrapper {\n  margin: 5px;\n  padding: 5px;\n  width: 400px;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ship-container {\n  margin: 5px;\n  display: inline-block;\n}\n\n.ship-square {\n  height: 50px;\n  width: 50px;\n  border: 0.5px solid black;\n  background-color: rgb(200, 200, 200);\n}\n\n.ship-hover-target {\n  background-color: red;\n  opacity: 0.5;\n}\n\n.valid-target {\n  background-color: rgb(30, 184, 30);\n}\n.invalid-target {\n  background-color: red;\n}\n\n#overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 2;\n}\n\n#overlay-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 50px;\n  color: white;\n  transform: translate(-50%, -250%);\n  -ms-transform: translate(-50%, -250%);\n}\n#overlay-btn {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 50px;\n  padding: 15px;\n  background-color: rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n  border-style: none;\n  color: white;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n#overlay-btn:hover {\n  background-color: rgb(12, 156, 12);\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,uCAAuC;EACvC,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,qCAAqC;EACrC,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,eAAe;EACf,YAAY;EACZ,iCAAiC;EACjC,qCAAqC;AACvC;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,eAAe;EACf,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,gCAAgC;EAChC,oCAAoC;EACpC,eAAe;AACjB;AACA;EACE,kCAAkC;AACpC","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n#homepage-wrapper {\n  height: 200px;\n  margin: 10px auto;\n  display: flex;\n  flex-direction: column;\n}\n\n#homepage-title {\n  font-size: 56px;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n\n#start-game-btn {\n  font-size: 36;\n  font-weight: bold;\n  height: 50px;\n}\n\n#gameboardsWrapper {\n  display: flex;\n}\n\n.board-wrapper {\n  height: 600px;\n  display: inline-block;\n  margin: 5px;\n}\n\n.board-container {\n  height: 500px;\n  width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 20px;\n}\n\n.board-square {\n  height: 50px;\n  width: 50px;\n  background-color: rgb(255, 255, 255);\n  border: 0.25px solid rgba(0, 0, 0, 0.8);\n  font-size: 36px;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\n\n.board-square-player {\n  background-color: rgb(200, 200, 200);\n}\n\n.board-square-hit {\n  background-color: red;\n}\n\n.board-title {\n  text-align: center;\n  font-size: 24px;\n}\n\n#ships-wrapper {\n  margin: 5px;\n  padding: 5px;\n  width: 400px;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ship-container {\n  margin: 5px;\n  display: inline-block;\n}\n\n.ship-square {\n  height: 50px;\n  width: 50px;\n  border: 0.5px solid black;\n  background-color: rgb(200, 200, 200);\n}\n\n.ship-hover-target {\n  background-color: red;\n  opacity: 0.5;\n}\n\n.valid-target {\n  background-color: rgb(30, 184, 30);\n}\n.invalid-target {\n  background-color: red;\n}\n\n#overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.85);\n  z-index: 2;\n}\n\n#overlay-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 50px;\n  color: white;\n  transform: translate(-50%, -250%);\n  -ms-transform: translate(-50%, -250%);\n}\n#overlay-btn {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 50px;\n  padding: 15px;\n  background-color: rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n  border-style: none;\n  color: white;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n#overlay-btn:hover {\n  background-color: rgb(12, 156, 12);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dragula/dist/dragula.css":
/*!***********************************************!*\
  !*** ./node_modules/dragula/dist/dragula.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_dragula_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./dragula.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/dragula/dist/dragula.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_dragula_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_dragula_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_dragula_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_dragula_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/factories/ship.js");


const Gameboard = () => {
  const ships = [];
  const board = Array.from(Array(10), (_) => Array(10).fill(null));
  let allShipsSunk = false;
  const attackHistory = [];

  const placeShip = (x, y, shipID, length) => {
    const ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipID, length);
    ships.push(ship);
    ship.HP.forEach((hitPoint) => {
      // x and y need to be reversed due to 2D array mechanics
      board[y][x] = hitPoint;
      y++;
    });
  };

  /**
   * function to check if move has been made by either player
   * @param {x - coordinate} x
   * @param {y - coordinate} y
   * @returns true if move has mot been made by either player and false if it has been made by either player
   */
  const validateMove = (x, y) => {
    const attackCoords = `${x},${y}`;

    // searches attackHistory for the attackCoords if not found will return -1
    const moveAlreadyMade = attackHistory.indexOf(attackCoords);

    if (moveAlreadyMade === -1) {
      return true;
    } else return false;
  };

  const receiveAttack = (x, y) => {
    // Capture board location
    const target = board[x][y];

    if (validateMove(x, y)) {
      // store attack in history
      attackHistory.push(`${x},${y}`);

      // if attack was a miss then update board with miss
      if (target === null) {
        board[x][y] = 'miss';
        return true;
      } else {
        /**
         * if attack was a hit split target string into an ID and an Index so that they
         * can be used to both find and update the ship object HP array at the correct
         * index and the current board target
         */
        const targetID = target.split(',')[1];
        const hitShip = ships.filter((ship) => ship.shipID === targetID);
        const hitShipIndex = target.split(',')[0];
        hitShip[0].hit(hitShipIndex);
        hitShip[0].sunk = hitShip[0].isSunk(hitShip[0].HP);
        board[x][y] = 'hit';
        return true;
      }
    } else return false;
  };

  const checkIfAllShipsSunk = () => {
    /**
     * searches each ship object in the board.ship array for any false value
     * if none are found then -1 is returned which signals that all ships
     * have been sunk and to return true
     */
    if (ships.findIndex((ship) => ship.sunk === false) !== -1) {
      return false;
    } else return true;
  };

  return {
    ships,
    board,
    attackHistory,
    allShipsSunk,
    placeShip,
    validateMove,
    receiveAttack,
    checkIfAllShipsSunk,
  };
};




/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const Player = (name, computer = false) => {
  const generateRandomCoordinates = () => {
    let x = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(0, 9);
    let y = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(0, 9);
    return { x, y };
  };

  /**
   * completes a computer attack which includes generating random coordinates
   * and passing those coordinates to the attack()
   */
  const computerAttack = (gameboard) => {
    let coords = generateRandomCoordinates();
    while (!gameboard.validateMove(coords.x, coords.y)) {
      coords = generateRandomCoordinates();
    }
    attack(coords.x, coords.y, gameboard);
  };

  const attack = (x, y, gameboard) => {
    gameboard.receiveAttack(x, y);
  };

  return {
    name,
    computer,
    generateRandomCoordinates,
    computerAttack,
    attack,
  };
};




/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (shipID, length, sunk = false) => {
  const HP = Array.from(Array(length).keys()).map((x) => x + `,${shipID}`);
  const hit = (hitLocation) => (HP[hitLocation] = 'hit');
  const isSunk = (HP) => HP.every((val) => val === 'hit');
  return { shipID, length, HP, sunk, hit, isSunk };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _node_modules_dragula_dist_dragula_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/dragula/dist/dragula.css */ "./node_modules/dragula/dist/dragula.css");
/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/player.js */ "./src/factories/player.js");
/* harmony import */ var _factories_gameboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/gameboard.js */ "./src/factories/gameboard.js");
/* harmony import */ var _modules_gameboard_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/gameboard-dom-handler.js */ "./src/modules/gameboard-dom-handler.js");
/* harmony import */ var _modules_ships_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ships-dom-handler.js */ "./src/modules/ships-dom-handler.js");
/* harmony import */ var _modules_homepage_dom_handler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/homepage-dom-handler.js */ "./src/modules/homepage-dom-handler.js");








const init = () => {
  /// build players
  const player = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)('Matt', false);
  const computer = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)('Computer', true);

  /// build boards
  const playerBoard = (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();
  const computerBoard = (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();

  _modules_homepage_dom_handler_js__WEBPACK_IMPORTED_MODULE_6__.homepage.render();

  _modules_homepage_dom_handler_js__WEBPACK_IMPORTED_MODULE_6__.homepage.startGameBtn.addEventListener('click', (e) => {
    _modules_homepage_dom_handler_js__WEBPACK_IMPORTED_MODULE_6__.homepage.clearHomepageElements();

    /// start game by displaying player board
    _modules_gameboard_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.gameboardDomHandler.render(playerBoard, computerBoard, player, computer);

    /// set placeable ships number
    _modules_ships_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.shipsDomHandler.shipsLeftToPlaceOnBoard = 5;

    /// render draggable ships
    _modules_ships_dom_handler_js__WEBPACK_IMPORTED_MODULE_5__.shipsDomHandler.render();

    // /// allows player to initiate game by attacking the computer board by clicking on board square
    _modules_gameboard_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.gameboardDomHandler.bindClickAttackEvents(
      computerBoard,
      _modules_gameboard_dom_handler_js__WEBPACK_IMPORTED_MODULE_4__.gameboardDomHandler.computerBoardContainer
    );
  });

  return 1;
};

init();




/***/ }),

/***/ "./src/modules/gameboard-dom-handler.js":
/*!**********************************************!*\
  !*** ./src/modules/gameboard-dom-handler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardDomHandler": () => (/* binding */ gameboardDomHandler)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _homepage_dom_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage-dom-handler.js */ "./src/modules/homepage-dom-handler.js");
/* harmony import */ var _ships_dom_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships-dom-handler.js */ "./src/modules/ships-dom-handler.js");




const gameboardDomHandler = {
  // Store Dom Body for easy access
  domBody: document.querySelector('body'),
  // Render all elements
  render(playerBoard, computerBoard, player, computer) {
    this.player = player;
    this.computer = computer;
    this.playerBoard = playerBoard;
    this.computerBoard = computerBoard;
    this.buildWrappers();
    this.buildTitles();
    this.buildContainers();
    this.buildBoard(playerBoard, this.playerBoardContainer);
    this.buildBoard(computerBoard, this.computerBoardContainer);
    this.appendTitles();
    this.appendContainers();
    this.appendWrappers();
  },

  buildWrappers() {
    /// gameboardsWrapper
    this.gameboardsWrapper = document.createElement('div');
    this.gameboardsWrapper.id = 'gameboards-wrapper';

    /// player board wrapper
    this.playerBoardWrapper = document.createElement('div');
    this.playerBoardWrapper.classList.add('board-wrapper');
    this.playerBoardWrapper.id = 'player-board-wrapper';
    /// computer board wrapper
    this.computerBoardWrapper = document.createElement('div');
    this.computerBoardWrapper.classList.add('board-wrapper');
    this.computerBoardWrapper.id = 'computer-board-wrapper';
  },

  buildTitles() {
    /// player board wrapper
    this.playerBoardTitle = document.createElement('div');
    this.playerBoardTitle.classList.add('board-title');
    this.playerBoardTitle.id = 'player-board-title';
    this.playerBoardTitle.innerText = 'Player Board';
    /// computer board Title
    this.computerBoardTitle = document.createElement('div');
    this.computerBoardTitle.classList.add('board-title');
    this.computerBoardTitle.id = 'computer-board-title';
    this.computerBoardTitle.innerText = 'Computer Board';
  },

  buildContainers() {
    /// player board container
    this.playerBoardContainer = document.createElement('div');
    this.playerBoardContainer.classList.add('board-container');
    this.playerBoardContainer.id = 'player-board-container';
    /// computer board container
    this.computerBoardContainer = document.createElement('div');
    this.computerBoardContainer.classList.add('board-container');
    this.computerBoardContainer.id = 'computer-board-container';
  },

  buildBoard(gameboard, container) {
    const board = gameboard.board;
    board.forEach((row, i) => {
      row.forEach((rowElement, j) => {
        const boardSquare = document.createElement('div');
        boardSquare.classList.add('board-square');
        boardSquare.dataset.arrayIndex = `${j},${i}`;
        container.append(boardSquare);
        this.styleSquare(rowElement, boardSquare);
      });
    });
  },

  styleSquare(rowElement, boardSquare) {
    const boardID = boardSquare.parentElement.id;
    if (boardID === 'computer-board-container') {
      if (rowElement === 'hit') {
        boardSquare.classList.add('board-square-hit');
        boardSquare.innerText = 'X';
      } else if (rowElement === 'miss') {
        boardSquare.innerText = 'X';
      }
    } else {
      if (rowElement !== null && rowElement !== 'miss' && rowElement !== 'hit') {
        boardSquare.classList.add('board-square-player');
      } else if (rowElement === 'hit') {
        boardSquare.classList.add('board-square-hit');
        boardSquare.innerText = 'X';
      } else if (rowElement === 'miss') {
        boardSquare.innerText = 'X';
      }
    }
  },

  appendTitles() {
    this.playerBoardWrapper.append(this.playerBoardTitle);
    this.computerBoardWrapper.append(this.computerBoardTitle);
  },

  appendContainers() {
    this.playerBoardWrapper.append(this.playerBoardContainer);
    this.computerBoardWrapper.append(this.computerBoardContainer);
    this.domBody.append(this.playerBoardWrapper);
  },

  appendWrappers() {
    this.gameboardsWrapper.append(this.playerBoardWrapper);
    this.domBody.append(this.gameboardsWrapper);
  },

  bindClickAttackEvents(gameboard, container) {
    const domBoardSquares = [...container.children];
    domBoardSquares.forEach((square) => {
      square.addEventListener(
        'click',
        this.clickAttack.bind({ gameboard, container, domBoardSquares })
      );
    });
  },

  /**
   * @param {this} this - refers to the bound object { gameboard, container, domBoardSquares } from bindClickAttacks()
   * @param {event} e - refers to the clicked on gameboard square dom element which should be a div
   */
  clickAttack(event) {
    /// player attack
    if (
      gameboardDomHandler.initPlayerAttack(
        event,
        this.domBoardSquares,
        this.gameboard,
        this.container
      )
    ) {
      /// check if all ships on computer board have been sunk
      if (this.gameboard.checkIfAllShipsSunk()) {
        gameboardDomHandler.gameOver('Player');
        return;
      }

      /// computer attack follows
      gameboardDomHandler.initComputerAttack();

      /// check if all ships on player board have been sunk
      if (gameboardDomHandler.playerBoard.checkIfAllShipsSunk()) {
        gameboardDomHandler.gameOver('Computer');
        return;
      }

      /// adds click events to computer board so that player can make their next attack
      const boardContainerVariableName = gameboardDomHandler.getBoardContainerVariableName(
        this.container
      );
      gameboardDomHandler.bindClickAttackEvents(
        this.gameboard,
        gameboardDomHandler[boardContainerVariableName]
      );

      _ships_dom_handler_js__WEBPACK_IMPORTED_MODULE_2__.shipsDomHandler.setComputerBoardSquareMouseEvents();
    }
  },

  initPlayerAttack(event, domBoardSquares, playerBoard, container) {
    const coords = gameboardDomHandler.getCoordinatesFromDomBoard(event.target, domBoardSquares);

    if (!playerBoard.receiveAttack(coords.x, coords.y)) {
      /// tell user attack is invalid
      return;
    } else {
      /// player attack goes through and computer board is updated
      gameboardDomHandler.updateBoardDisplay(playerBoard, container);
      return true;
    }
  },

  initComputerAttack() {
    this.computer.computerAttack(this.playerBoard);
    this.updateBoardDisplay(this.playerBoard, this.playerBoardContainer);
  },

  getCoordinatesFromDomBoard(target, domBoardSquares) {
    const coords = domBoardSquares.indexOf(target).toString();
    let x = 0;
    let y = 0;
    if (coords.length < 2) {
      y = coords[0];
    } else {
      x = coords[0];
      y = coords[1];
    }
    return { x, y };
  },

  getBoardContainerId(container) {
    if (container.id === 'player-board-container') {
      return 'player-board-container';
    } else {
      return 'computer-board-container';
    }
  },

  getBoardContainerVariableName(container) {
    if (container.id === 'player-board-container') {
      return 'playerBoardContainer';
    } else {
      return 'computerBoardContainer';
    }
  },

  buildNewBoardContainer(newBoardContainerName, newBoardContainerId) {
    this[`${newBoardContainerName}`] = document.createElement('div');
    this[`${newBoardContainerName}`].classList.add('board-container');
    this[`${newBoardContainerName}`].id = newBoardContainerId;
  },

  /**
   *
   * @param {object} board - the gameboard that is to be updated/removed from the DOM
   * @param {dom element div} container - will hold the newly created gameboard sqaures
   */
  updateBoardDisplay(board, container) {
    // builds a new container to hold new gameboard squares so that they can be appended to the dom after the old board is removed
    const newBoardContainerName = this.getBoardContainerVariableName(container);
    const newBoardContainerId = this.getBoardContainerId(container);
    this.buildNewBoardContainer(newBoardContainerName, newBoardContainerId);
    this.buildBoard(board, this[`${newBoardContainerName}`]);

    container.remove();

    if (newBoardContainerId === 'player-board-container') {
      this.playerBoardWrapper.append(this[`${newBoardContainerName}`]);
    } else this.computerBoardWrapper.append(this[`${newBoardContainerName}`]);
  },

  gameOver(winner) {
    const gameBoardsWrapper = document.getElementById('gameboards-wrapper');
    const computerBoardWrapper = document.getElementById('computer-board-wrapper');
    const overlay = document.getElementById('overlay');

    _homepage_dom_handler_js__WEBPACK_IMPORTED_MODULE_1__.homepage.overlayText.innerText = `${winner} Wins!`;
    _homepage_dom_handler_js__WEBPACK_IMPORTED_MODULE_1__.homepage.overlayBtn.addEventListener('click', (e) => {
      gameBoardsWrapper.remove();
      computerBoardWrapper.remove();
      overlay.remove();
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.init)();
    });
    _homepage_dom_handler_js__WEBPACK_IMPORTED_MODULE_1__.homepage.overlayOn();
  },
};




/***/ }),

/***/ "./src/modules/homepage-dom-handler.js":
/*!*********************************************!*\
  !*** ./src/modules/homepage-dom-handler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepage": () => (/* binding */ homepage)
/* harmony export */ });
const homepage = {
  domBody: document.querySelector('body'),
  render() {
    this.buildHomepageWrapper();
    this.buildTitle();
    this.buildOverlay();
    this.overlayOff();
    this.buildStartBtn();
  },

  buildHomepageWrapper() {
    this.homepageWrapper = document.createElement('div');
    this.homepageWrapper.id = 'homepage-wrapper';
    this.domBody.append(this.homepageWrapper);
  },

  buildTitle() {
    this.homepageTitle = document.createElement('div');
    this.homepageTitle.id = 'homepage-title';
    this.homepageTitle.textContent = 'BATTLE SHIP';
    this.homepageWrapper.append(this.homepageTitle);
  },

  buildOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'overlay';
    this.overlayText = document.createElement('div');
    this.overlayText.id = 'overlay-text';
    this.overlayText.textContent = 'Computer Wins!';
    this.overlayBtn = document.createElement('button');
    this.overlayBtn.id = 'overlay-btn';
    this.overlayBtn.textContent = 'Play Again';
    this.overlay.append(this.overlayText, this.overlayBtn);
    this.domBody.append(this.overlay);
  },

  overlayOn() {
    this.overlay.style.display = 'block';
    this.overlayText.style.display = 'block';
    this.overlayBtn.style.display = 'block';
  },

  overlayOff() {
    this.overlay.style.display = 'none';
    this.overlayText.style.display = 'none';
    this.overlayBtn.style.display = 'none';
  },

  buildStartBtn() {
    this.startGameBtn = document.createElement('button');
    this.startGameBtn.id = 'start-game-btn';
    this.startGameBtn.textContent = 'Click here to start!';
    this.homepageWrapper.append(this.startGameBtn);
  },

  clearHomepageElements() {
    this.homepageWrapper.remove();
  },
};




/***/ }),

/***/ "./src/modules/ships-dom-handler.js":
/*!******************************************!*\
  !*** ./src/modules/ships-dom-handler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipsDomHandler": () => (/* binding */ shipsDomHandler)
/* harmony export */ });
/* harmony import */ var _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard-dom-handler */ "./src/modules/gameboard-dom-handler.js");


const shipsDomHandler = {
  body: document.querySelector('body'),
  containerArray: [],
  shipsArray: [],
  playerBoardSquares: document.getElementById('player-board-container'),

  shipsLeftToPlaceOnBoard: 5,

  shipLengths: {
    carrierLength: 5,
    battleshipLength: 4,
    cruiserLength: 3,
    submarine: 3,
    destroyer: 2,
  },

  render() {
    this.placeComputerShips();
    this.buildShipsWrapper();
    this.buildShipContainers();
    this.appendShipContainers();
    this.appendShipsWrapper();
    this.buildShips();
    this.setPlayerBoardSquareDragEvents();
    this.setShipContainerEvents();
  },

  placeComputerShips() {
    const computerBoard = _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.computerBoard;
    const computerShipYard = {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    };
    for (let prop in computerShipYard) {
      const shipLength = computerShipYard[prop];
      let coords = _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.computer.generateRandomCoordinates();
      let x = coords.x;
      let y = coords.y;
      while (!this.validateComputerShipPlacement(x, y, shipLength, computerBoard)) {
        coords = _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.computer.generateRandomCoordinates();
        x = coords.x;
        y = coords.y;
      }
      computerBoard.placeShip(x, y, prop, shipLength);
    }
    this.updateComputerBoardDisplay();
  },

  validateComputerShipPlacement(x, y, shipLength, computerBoard) {
    let shipPlacementValid = true;
    for (let i = 0; i < shipLength; i++) {
      // check if too high
      if (y > 9) {
        shipPlacementValid = false;
        break;
      }
      // check if too low
      if (y < 0) {
        shipPlacementValid = false;
        break;
      }
      // check if ship already there
      if (computerBoard.board[y][x] !== null) {
        shipPlacementValid = false;
        break;
      } else {
        y = +y + 1;
      }
    }
    return shipPlacementValid;
  },

  buildShipsWrapper() {
    this.shipsWrapper = document.createElement('div');
    this.shipsWrapper.id = 'ships-wrapper';
  },

  buildShipContainers() {
    /// divs
    this.carrierContainer = document.createElement('div');
    this.battleshipContainer = document.createElement('div');
    this.cruiserContainer = document.createElement('div');
    this.submarineContainer = document.createElement('div');
    this.destroyerContainer = document.createElement('div');

    /// set ID's
    this.carrierContainer.id = 'carrier-container';
    this.battleshipContainer.id = 'battleship-container';
    this.cruiserContainer.id = 'cruiser-container';
    this.submarineContainer.id = 'submarine-container';
    this.destroyerContainer.id = 'destroyer-container';

    /// set classes
    this.carrierContainer.classList.add('ship-container');
    this.battleshipContainer.classList.add('ship-container');
    this.cruiserContainer.classList.add('ship-container');
    this.submarineContainer.classList.add('ship-container');
    this.destroyerContainer.classList.add('ship-container');

    /// set draggable attribute to true
    this.carrierContainer.setAttribute('draggable', true);
    this.battleshipContainer.setAttribute('draggable', true);
    this.cruiserContainer.setAttribute('draggable', true);
    this.submarineContainer.setAttribute('draggable', true);
    this.destroyerContainer.setAttribute('draggable', true);

    /// push containers into array to make appending HP div elements easier
    this.containerArray.push(
      this.carrierContainer,
      this.battleshipContainer,
      this.cruiserContainer,
      this.submarineContainer,
      this.destroyerContainer
    );
  },

  appendShipsWrapper() {
    this.body.append(this.shipsWrapper);
  },

  appendShipContainers() {
    this.shipsWrapper.append(
      this.carrierContainer,
      this.battleshipContainer,
      this.cruiserContainer,
      this.submarineContainer,
      this.destroyerContainer
    );
  },

  buildShips() {
    for (const property in this.shipLengths) {
      this.shipsArray.push(Array.from(Array(this.shipLengths[property]).fill(null)));
    }
    this.shipsArray.forEach((ship, index) => {
      ship.forEach((shipHP) => {
        const shipSquare = document.createElement('div');
        shipSquare.classList.add('ship-square');
        this.containerArray[index].append(shipSquare);
      });
    });
  },

  setPlayerBoardSquareDragEvents() {
    const boardSquares = [...document.getElementById('player-board-container').children];
    boardSquares.forEach((square) => {
      square.addEventListener('dragenter', this.playerBoardDragEnter);
      square.addEventListener('dragover', this.playerBoardDragOver);
      square.addEventListener('dragleave', this.playerBoardDragLeave);
      square.addEventListener('drop', this.playerBoardDrop.bind(this));
    });
  },

  playerBoardDragEnter(e) {
    e.preventDefault();
  },

  playerBoardDragOver(e) {
    e.target.classList.add('ship-hover-target');
    e.preventDefault();
  },

  playerBoardDragLeave(e) {
    e.target.classList.remove('ship-hover-target');
    e.preventDefault();
  },

  playerBoardDrop(e) {
    e.target.classList.remove('ship-hover-target');
    this.setShipDropCoords(e);
    this.placeShip();
    e.preventDefault();
  },

  setComputerBoardSquareMouseEvents() {
    const boardSquares = [...document.getElementById('computer-board-container').children];
    boardSquares.forEach((square) => {
      square.addEventListener('mouseenter', this.computerBoardMouseenter);
      square.addEventListener('mouseleave', this.computerBoardMouseleave);
    });
  },

  computerBoardMouseenter(e) {
    if (e.target.textContent !== '') {
      e.target.classList.add('invalid-target');
    } else {
      e.target.classList.add('valid-target');
    }
    e.preventDefault();
  },

  computerBoardMouseleave(e) {
    e.target.classList.remove('invalid-target', 'valid-target');
    e.preventDefault();
  },

  setShipContainerEvents() {
    this.containerArray.forEach((container) => {
      container.addEventListener('mousedown', this.getIndexOfShipContainerSquare.bind(this));
      container.addEventListener('mousedown', this.setClickedShipName.bind(this));
    });
  },

  setShipDropCoords(e) {
    const coordsArray = e.target.dataset.arrayIndex.split(',');
    this.shipDropCoords = {
      x: coordsArray[0],
      y: coordsArray[1],
    };
  },

  correctShipDropCoords() {
    const correctedShipDropCoords = this.shipDropCoords.y - this.indexOfSquareClicked;
    this.shipDropCoords.y = correctedShipDropCoords;
  },

  getIndexOfShipContainerSquare(e) {
    this.shipContainer = e.target.parentElement;
    const containerSquares = [...this.shipContainer.children];
    this.indexOfSquareClicked = containerSquares.indexOf(e.target);
    this.lengthOfShipClicked = containerSquares.length;
  },

  setClickedShipName(e) {
    this.clickedShipName = e.target.parentElement.id.split('-')[0];
  },

  placeShip() {
    this.correctShipDropCoords();
    if (this.validateShipPlacement()) {
      this.placeShipOnPlayerboardObject();
      this.updateBoardDisplay();
      this.removePlacedShipFromShipYard();
      this.updateShipsLeft();
    } else this.incorrectShipPlacementMessage();
  },

  updateShipsLeft() {
    this.shipsLeftToPlaceOnBoard -= 1;
    if (this.shipsLeftToPlaceOnBoard === 0) {
      this.shipsWrapper.remove();
      this.body.append(_gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.computerBoardWrapper);
      this.setComputerBoardSquareMouseEvents();
    }
  },

  removePlacedShipFromShipYard() {
    this.shipContainer.remove();
  },

  validateShipPlacement() {
    let shipPlacementValid = true;
    let x = this.shipDropCoords.x;
    let y = this.shipDropCoords.y;
    const shipLength = this.lengthOfShipClicked;

    for (let i = 0; i < shipLength; i++) {
      // check if too high
      if (y > 9) {
        shipPlacementValid = false;
        break;
      }
      // check if too low
      if (y < 0) {
        shipPlacementValid = false;
        break;
      }
      // check if ship already there
      if (_gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.playerBoard.board[y][x] !== null) {
        shipPlacementValid = false;
        break;
      } else {
        y = +y + 1;
      }
    }
    return shipPlacementValid;
  },

  incorrectShipPlacementMessage() {
    return console.log(`Incorrect placement`);
  },

  placeShipOnPlayerboardObject() {
    const x = this.shipDropCoords.x;
    const y = this.shipDropCoords.y;
    const shipLength = this.lengthOfShipClicked;
    const ship = this.clickedShipName;
    _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.playerBoard.placeShip(x, y, ship, shipLength);
  },

  updateBoardDisplay() {
    _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.updateBoardDisplay(
      _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.playerBoard,
      _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.playerBoardContainer
    );
    this.setPlayerBoardSquareDragEvents();
  },

  updateComputerBoardDisplay() {
    _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.updateBoardDisplay(
      _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.computerBoard,
      _gameboard_dom_handler__WEBPACK_IMPORTED_MODULE_0__.gameboardDomHandler.computerBoardContainer
    );
  },
};




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomIntFromInterval": () => (/* binding */ randomIntFromInterval)
/* harmony export */ });
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map