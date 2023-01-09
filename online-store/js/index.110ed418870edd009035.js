(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ 208:
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2267:
/*!****************************************************!*\
  !*** ./core/components/breadcrumps/breadcrumps.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _span_span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../span/span */ 4724);
/* harmony import */ var _div_div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../div/div */ 3528);




var Breadcrumps = /*#__PURE__*/function () {
  function Breadcrumps(parent, category, brand, title) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Breadcrumps);
    this.category = category;
    this.brand = brand;
    this.title = title;
    this.parent = parent;
    this.start();
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Breadcrumps, [{
    key: "start",
    value: function start() {
      var breadcrumps = new _div_div__WEBPACK_IMPORTED_MODULE_3__["default"](this.parent, 'breadrcumps');
      var address0 = new _span_span__WEBPACK_IMPORTED_MODULE_2__["default"](this.parent, 'Store', 'breadrcumps');
      var address1 = new _span_span__WEBPACK_IMPORTED_MODULE_2__["default"](this.parent, this.category, 'breadrcumps');
      var address2 = new _span_span__WEBPACK_IMPORTED_MODULE_2__["default"](this.parent, this.brand, 'breadrcumps');
      var address3 = new _span_span__WEBPACK_IMPORTED_MODULE_2__["default"](this.parent, this.title, 'breadrcumps');
      breadcrumps.element.append(address0.element, address1.element, address2.element, address3.element);
      this.parent.append(breadcrumps.element);
    }
  }]);
  return Breadcrumps;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumps);

/***/ }),

/***/ 9170:
/*!******************************************!*\
  !*** ./core/components/button/button.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _core_templates_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/templates/template */ 225);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Button = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Button, _Template);
  var _super = _createSuper(Button);
  function Button(parent, divClass) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Button);
    return _super.call(this, parent, 'button', "".concat(divClass));
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Button);
}(_core_templates_template__WEBPACK_IMPORTED_MODULE_5__.Template);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 9043:
/*!************************************************!*\
  !*** ./core/components/checkHash/checkHash.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkHash": () => (/* binding */ checkHash)
/* harmony export */ });
function checkHash(str) {
  var strArr = str.split('-');
  var page = strArr[0] === 'page';
  var item = strArr[1] === 'item';
  var itemId = +strArr[2] >= 0 && +strArr[2] <= 100;
  return page && item && itemId;
}

/***/ }),

/***/ 5830:
/*!**********************************************!*\
  !*** ./core/components/checkbox/checkbox.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _span_span__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../span/span */ 4724);
/* harmony import */ var _chekcboxTmp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chekcboxTmp */ 4837);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
// import {Template} from '@/core/templates/template';


// import {getFromQuery} from '@/filtration/getFromQuery';

// const checkedCHbx = getFromQuery().category.concat(getFromQuery().brand);
var Chbx = /*#__PURE__*/function (_CheckboxTmp) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Chbx, _CheckboxTmp);
  var _super = _createSuper(Chbx);
  function Chbx(parent, val) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chbx);
    _this = _super.call(this, parent, 'label__checkbox visually-hidden', {
      type: 'checkbox',
      value: "".concat(val),
      id: "".concat(val).toLowerCase()
    });
    _this.addContent(parent, val);
    if (Chbx.checked && Chbx.checked.indexOf(val.toLowerCase()) >= 0) {
      console.log("work ".concat(val));
      _this.element.checked = true;
    }
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chbx, [{
    key: "addContent",
    value: function addContent(inner, value) {
      var el = new _span_span__WEBPACK_IMPORTED_MODULE_5__["default"](inner, value, 'label');
      el.render();
    }
  }]);
  return Chbx;
}(_chekcboxTmp__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chbx);

/***/ }),

/***/ 4837:
/*!*************************************************!*\
  !*** ./core/components/checkbox/chekcboxTmp.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 6886);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 228);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);




var CheckboxTmp = /*#__PURE__*/function () {
  function CheckboxTmp(parent, tagClass, attr) {
    var _this$element$classLi;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CheckboxTmp);
    this.element = document.createElement('input');
    if (typeof tagClass === 'string') (_this$element$classLi = this.element.classList).add.apply(_this$element$classLi, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tagClass.split(' ')));
    if (parent) parent.append(this.element);
    if (attr) {
      for (var _i = 0, _Object$entries = Object.entries(attr); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        this.element.setAttribute(key, value);
      }
    }
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CheckboxTmp, [{
    key: "removeElement",
    value: function removeElement() {
      this.element.remove();
    }
  }, {
    key: "render",
    value: function render() {
      return this.element;
    }
  }]);
  return CheckboxTmp;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxTmp);

/***/ }),

/***/ 3528:
/*!************************************!*\
  !*** ./core/components/div/div.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _core_templates_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/templates/template */ 225);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Div = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Div, _Template);
  var _super = _createSuper(Div);
  function Div(parent, divClass) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Div);
    return _super.call(this, parent, 'div', "".concat(divClass));
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Div);
}(_core_templates_template__WEBPACK_IMPORTED_MODULE_5__.Template);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Div);

/***/ }),

/***/ 2466:
/*!******************************************!*\
  !*** ./core/components/filter/filter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_templates_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/templates/template */ 225);
/* harmony import */ var _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checkbox/checkbox */ 5830);
/* harmony import */ var _label_label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../label/label */ 3854);
/* harmony import */ var _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/filtration/getFilteredItem */ 8697);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



// import {filterByCategory} from '@/filtration/filtration';

var Filter = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Filter, _Template);
  var _super = _createSuper(Filter);
  function Filter(parrent, type, items) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Filter);
    _this = _super.call(this, parrent, 'div', type);
    _this.type = type;
    _this.start(items);
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Filter, [{
    key: "drawVariantsForCategories",
    value: function () {
      var _drawVariantsForCategories = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(el) {
        var category, label, checkbox;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /*
                * В этом методе и drawCheckboxesForBrands какой то необычайный прикол
                * Не могу получить this.element и из за этого методы дублируются и
                * на каждый элемент обращаются к ДОМ для получения родителя чтобы в
                * него добавить чекбокс с названием
                */
                category = document.querySelector('.category');
                label = new _label_label__WEBPACK_IMPORTED_MODULE_9__["default"](category, 'category');
                checkbox = new _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8__["default"](label.element, el);
                checkbox.render();
                label.render();
                checkbox.element.addEventListener('change', function () {
                  _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_10__["default"].getFilteredItem('category', checkbox.element.value);
                });
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function drawVariantsForCategories(_x) {
        return _drawVariantsForCategories.apply(this, arguments);
      }
      return drawVariantsForCategories;
    }()
  }, {
    key: "drawVariantsForBrands",
    value: function () {
      var _drawVariantsForBrands = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2(el) {
        var brand, label, checkbox;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                brand = document.querySelector('.brand');
                label = new _label_label__WEBPACK_IMPORTED_MODULE_9__["default"](brand, 'category');
                checkbox = new _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8__["default"](label.element, el);
                checkbox.render();
                label.render();
                checkbox.element.addEventListener('change', function () {
                  // console.log(label.element.textContent);
                  _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_10__["default"].getFilteredItem('brand', checkbox.element.value);
                });
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function drawVariantsForBrands(_x2) {
        return _drawVariantsForBrands.apply(this, arguments);
      }
      return drawVariantsForBrands;
    }()
  }, {
    key: "start",
    value: function start(items) {
      var _this2 = this;
      if (this.type === 'category') {
        items.then(function (category) {
          category.forEach(_this2.drawVariantsForCategories);
        });
      }
      if (this.type === 'brand') {
        items.then(function (brand) {
          brand.forEach(_this2.drawVariantsForBrands);
        });
      }
    }
  }]);
  return Filter;
}(_core_templates_template__WEBPACK_IMPORTED_MODULE_7__.Template);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ 5848:
/*!**********************************************************!*\
  !*** ./core/components/filterButtons/actionsForReset.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionForReset": () => (/* binding */ actionForReset)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filtration_fromQuery_getFromQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/filtration/fromQuery/getFromQuery */ 5743);
/* harmony import */ var _select_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select/select */ 3520);
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search */ 6040);
/* harmony import */ var _productList_productList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../productList/productList */ 7656);
/* harmony import */ var _range_multeRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../range/multeRange */ 7512);
/* harmony import */ var _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/filtration/getFilteredItem */ 8697);
/* harmony import */ var _found_found__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../found/found */ 1938);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/state/state */ 6454);










function actionForReset() {
  return _actionForReset.apply(this, arguments);
}
function _actionForReset() {
  _actionForReset = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var products, productsLength, prices, stock, url, positionFrom, _getFromQuery, brand, category, cleanUrl;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            products = _state_state__WEBPACK_IMPORTED_MODULE_9__["default"].getProducts();
            _context.t0 = Promise;
            _context.next = 4;
            return products;
          case 4:
            _context.t1 = _context.sent;
            _context.next = 7;
            return _context.t0.all.call(_context.t0, _context.t1);
          case 7:
            productsLength = _context.sent.length;
            _context.next = 10;
            return _state_state__WEBPACK_IMPORTED_MODULE_9__["default"].getMinMaxPrice();
          case 10:
            prices = _context.sent;
            _context.next = 13;
            return _state_state__WEBPACK_IMPORTED_MODULE_9__["default"].getMinMaxStock();
          case 13:
            stock = _context.sent;
            url = window.location.href;
            positionFrom = url.indexOf('/?category');
            _getFromQuery = (0,_filtration_fromQuery_getFromQuery__WEBPACK_IMPORTED_MODULE_2__.getFromQuery)(), brand = _getFromQuery.brand, category = _getFromQuery.category;
            cleanUrl = url.slice(0, positionFrom);
            category.concat(brand).filter(function (el) {
              return el !== '';
            }).forEach(function (el) {
              var checkbox = document.getElementById("".concat(el));
              checkbox.checked = false;
            });
            window.history.pushState('object or string', 'Title', cleanUrl);
            _select_select__WEBPACK_IMPORTED_MODULE_3__["default"].el.value = 'sortOptions';
            _select_select__WEBPACK_IMPORTED_MODULE_3__["default"].selectValue = '';
            _search_search__WEBPACK_IMPORTED_MODULE_4__["default"].el.value = '';
            _search_search__WEBPACK_IMPORTED_MODULE_4__["default"].searchingValue = '';
            _productList_productList__WEBPACK_IMPORTED_MODULE_5__["default"].elem.textContent = '';
            _range_multeRange__WEBPACK_IMPORTED_MODULE_6__["default"].minPriceEl.value = '0';
            _range_multeRange__WEBPACK_IMPORTED_MODULE_6__["default"].minPrice.textContent = "".concat(prices.min, " $");
            _range_multeRange__WEBPACK_IMPORTED_MODULE_6__["default"].maxPriceEl.value = '999999';
            _range_multeRange__WEBPACK_IMPORTED_MODULE_6__["default"].maxPrice.textContent = "".concat(prices.max, " $");
            _range_multeRange__WEBPACK_IMPORTED_MODULE_6__["default"].minSrockEl.value = '0';
            _range_multeRange__WEBPACK_IMPORTED_MODULE_6__["default"].minStock.textContent = "".concat(stock.min);
            _range_multeRange__WEBPACK_IMPORTED_MODULE_6__["default"].maxSrockEl.value = '999999';
            _range_multeRange__WEBPACK_IMPORTED_MODULE_6__["default"].maxStock.textContent = "".concat(stock.max);
            _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_7__["default"].selected.category = [];
            _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_7__["default"].selected.brand = [];
            _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_7__["default"].selected.price = [0, 999999];
            _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_7__["default"].selected.stock = [0, 999999];
            _productList_productList__WEBPACK_IMPORTED_MODULE_5__["default"].start(products);
            _found_found__WEBPACK_IMPORTED_MODULE_8__["default"].fromFilter(productsLength);
          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _actionForReset.apply(this, arguments);
}

/***/ }),

/***/ 6991:
/*!********************************************************!*\
  !*** ./core/components/filterButtons/filterButtons.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button/button */ 9170);
/* harmony import */ var _div_div__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../div/div */ 3528);
/* harmony import */ var _actionsForReset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actionsForReset */ 5848);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var FilterButtons = /*#__PURE__*/function (_Div) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FilterButtons, _Div);
  var _super = _createSuper(FilterButtons);
  function FilterButtons(parent, tagClass) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FilterButtons);
    _this = _super.call(this, parent, tagClass);
    _this.start();
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FilterButtons, [{
    key: "start",
    value: function () {
      var _start = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        var reset, copy;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reset = new _button_button__WEBPACK_IMPORTED_MODULE_7__["default"](this.element, 'filter-buttons__reset filter-buttons__button');
                copy = new _button_button__WEBPACK_IMPORTED_MODULE_7__["default"](this.element, 'filter-buttons__copy filter-buttons__button');
                reset.element.textContent = 'Reset';
                copy.element.textContent = 'Copy link';
                reset.element.onclick = function click() {
                  (0,_actionsForReset__WEBPACK_IMPORTED_MODULE_9__.actionForReset)();
                };
                copy.element.onclick = function click() {
                  window.navigator.clipboard.writeText(window.location.href);
                };
                this.element.append(reset.element, copy.element);
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }]);
  return FilterButtons;
}(_div_div__WEBPACK_IMPORTED_MODULE_8__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterButtons);

/***/ }),

/***/ 1938:
/*!****************************************!*\
  !*** ./core/components/found/found.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _div_div__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../div/div */ 3528);
/* harmony import */ var _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/filtration/getFilteredItem */ 8697);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/state/state */ 6454);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Found = /*#__PURE__*/function (_Div) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Found, _Div);
  var _super = _createSuper(Found);
  function Found(parent, tagClass) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Found);
    _this = _super.call(this, parent, tagClass);
    Found.elem = _this.element;
    _this.start();
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Found, [{
    key: "start",
    value: function () {
      var _start = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = "Found: ";
                _context.next = 3;
                return this.getAmount();
              case 3:
                _context.t1 = _context.sent;
                Found.elem.textContent = _context.t0.concat.call(_context.t0, _context.t1);
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "getAmount",
    value: function () {
      var _getAmount = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2() {
        var products;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = Promise;
                _context2.next = 3;
                return _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_8__["default"].filteredItems;
              case 3:
                _context2.t1 = _context2.sent;
                products = _context2.t0.all.call(_context2.t0, _context2.t1);
                _context2.next = 7;
                return products;
              case 7:
                _context2.t2 = _context2.sent[0].title;
                if (!(_context2.t2 === 'empty')) {
                  _context2.next = 17;
                  break;
                }
                _context2.next = 11;
                return _state_state__WEBPACK_IMPORTED_MODULE_9__["default"].getProducts();
              case 11:
                products = _context2.sent;
                _context2.t3 = Promise;
                _context2.next = 15;
                return products;
              case 15:
                _context2.t4 = _context2.sent;
                products = _context2.t3.all.call(_context2.t3, _context2.t4);
              case 17:
                _context2.next = 19;
                return products;
              case 19:
                return _context2.abrupt("return", _context2.sent.length);
              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function getAmount() {
        return _getAmount.apply(this, arguments);
      }
      return getAmount;
    }()
  }], [{
    key: "fromFilter",
    value: function fromFilter(a) {
      Found.elem.textContent = "Found: ".concat(a);
    }
  }]);
  return Found;
}(_div_div__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Found);

/***/ }),

/***/ 3782:
/*!******************************************!*\
  !*** ./core/components/header/header.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _core_templates_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/templates/components */ 8399);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var buttons = [{
  id: 'store-page',
  text: 'Store Page'
}, {
  id: 'basket-page',
  text: 'Basket Page'
}
// {
//   id: 'item-page',
//   text: 'Item Page',
// },
];
var Header = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, _Component);
  var _super = _createSuper(Header);
  function Header(tagName, className) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);
    return _super.call(this, tagName, className);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "renderPageButtons",
    value: function renderPageButtons() {
      var pageButtons = document.createElement('div');
      buttons.forEach(function (button) {
        console.log(button.id);
        var buttonHTML = document.createElement('a');
        buttonHTML.href = "#".concat(button.id);
        buttonHTML.innerText = button.text;
        pageButtons.append(buttonHTML);
      });
      this.container.append(pageButtons);
    }
  }, {
    key: "render",
    value: function render() {
      this.renderPageButtons();
      return this.container;
    }
  }]);
  return Header;
}(_core_templates_components__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 3854:
/*!****************************************!*\
  !*** ./core/components/label/label.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _core_templates_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/templates/template */ 225);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Label = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Label, _Template);
  var _super = _createSuper(Label);
  function Label(parent, parentName) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Label);
    return _super.call(this, parent, 'label', "".concat(parentName, "__label label"));
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Label);
}(_core_templates_template__WEBPACK_IMPORTED_MODULE_5__.Template);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

/***/ }),

/***/ 3965:
/*!********************************************!*\
  !*** ./core/components/product/product.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _div_div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../div/div */ 3528);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Product = /*#__PURE__*/function (_Div) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Product, _Div);
  var _super = _createSuper(Product);
  function Product(parent, title, description, discountPercentage, rating, stock, brand, category, price, images) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Product);
    _this = _super.call(this, parent, 'product');
    _this.parent = parent;
    _this.title = title;
    _this.description = description;
    _this.discountPercentage = discountPercentage;
    _this.rating = rating;
    _this.stock = stock;
    _this.brand = brand;
    _this.category = category;
    _this.price = price;
    _this.images = images;
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Product, [{
    key: "start",
    value: function start() {
      var title = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, 'product__title');
      var content = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, 'product__content');
      var images = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, 'product__img');
      content.element.append(images.element);
      images.element.style.backgroundImage = "url('".concat(this.images[0], "')");
      title.element.textContent = this.title;
    }
  }]);
  return Product;
}(_div_div__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ 2546:
/*!*********************************************!*\
  !*** ./core/components/productList/info.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _div_div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../div/div */ 3528);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Info = /*#__PURE__*/function (_Div) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Info, _Div);
  var _super = _createSuper(Info);
  function Info(parent, thisClass, title, category, brand, price, discountPercentage, rating, stock) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Info);
    _this = _super.call(this, parent, "".concat(thisClass, "__info"));
    _this.parent = parent;
    _this.thisClass = thisClass;
    _this.title = title;
    _this.category = category;
    _this.brand = brand;
    _this.price = price;
    _this.discountPercentage = discountPercentage;
    _this.rating = rating;
    _this.stock = stock;
    _this.itemCreate();
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Info, [{
    key: "itemCreate",
    value: function itemCreate() {
      var category = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__category"));
      var categoryTitle = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__category-tile"));
      var categoryContent = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__category-content"));
      var brand = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__brand"));
      var brandTitle = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__brand-tile"));
      var brandContent = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__brand-content"));
      var price = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__price"));
      var priceTitle = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__price-tile"));
      var priceContent = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__price-content"));
      var discount = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__discount"));
      var discountTitle = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__discount-tile"));
      var discountContent = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__discount-content"));
      var rating = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__rating"));
      var ratingTitle = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__rating-tile"));
      var ratingContent = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__rating-content"));
      var stock = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__stock"));
      var stockTitle = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__stock-tile"));
      var stockContent = new _div_div__WEBPACK_IMPORTED_MODULE_5__["default"](this.element, "".concat(this.thisClass, "__stock-content"));
      categoryTitle.element.textContent = 'Category: ';
      categoryContent.element.textContent = this.category;
      brandTitle.element.textContent = 'Brand: ';
      brandContent.element.textContent = this.brand;
      priceTitle.element.textContent = 'Price: ';
      priceContent.element.textContent = "".concat(this.price);
      discountTitle.element.textContent = 'Discount: ';
      discountContent.element.textContent = "".concat(this.discountPercentage, " %");
      ratingTitle.element.textContent = 'Rating: ';
      ratingContent.element.textContent = "".concat(this.rating);
      stockTitle.element.textContent = 'Stock: ';
      stockContent.element.textContent = "".concat(this.stock);
      category.element.append(categoryTitle.element, categoryContent.element);
      brand.element.append(brandTitle.element, brandContent.element);
      price.element.append(priceTitle.element, priceContent.element);
      discount.element.append(discountTitle.element, discountContent.element);
      rating.element.append(ratingTitle.element, ratingContent.element);
      stock.element.append(stockTitle.element, stockContent.element);
      this.element.append(category.element, brand.element, price.element, discount.element, rating.element, stock.element);
    }
  }]);
  return Info;
}(_div_div__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);

/***/ }),

/***/ 2272:
/*!*********************************************!*\
  !*** ./core/components/productList/item.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _core_templates_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/templates/template */ 225);
/* harmony import */ var _div_div__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../div/div */ 3528);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info */ 2546);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../button/button */ 9170);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Item = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Item, _Template);
  var _super = _createSuper(Item);
  function Item(parent, thisClass, title, category, brand, price, discountPercentage, rating, stock, images, id) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Item);
    _this = _super.call(this, parent, 'div', "".concat(thisClass));
    _this.parent = parent;
    _this.thisClass = thisClass;
    _this.title = title;
    _this.category = category;
    _this.brand = brand;
    _this.price = price;
    _this.discountPercentage = discountPercentage;
    _this.rating = rating;
    _this.stock = stock;
    _this.images = images;
    _this.id = id;
    _this.itemCreate();
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Item, [{
    key: "itemCreate",
    value: function itemCreate() {
      var itemTitle = new _div_div__WEBPACK_IMPORTED_MODULE_6__["default"](this.element, "".concat(this.thisClass, "__title"));
      this.element.style.backgroundImage = "url(".concat(this.images, ")");
      itemTitle.element.textContent = this.title;
      var itemInfo = new _info__WEBPACK_IMPORTED_MODULE_7__["default"](this.element, "".concat(this.thisClass), this.title, this.category, this.brand, this.price, this.discountPercentage, this.rating, this.stock);
      var buttonAdd = new _button_button__WEBPACK_IMPORTED_MODULE_8__["default"](this.element, "".concat(this.thisClass, "__button-add"));
      buttonAdd.element.textContent = 'add to cart';
      var currentItem = this.id;
      this.element.id = "".concat(currentItem);
      this.element.onclick = function openItem() {
        window.location.hash = "page-item-".concat(currentItem);
      };
      this.element.append(itemTitle.element, itemInfo.element, buttonAdd.element);
    }
  }]);
  return Item;
}(_core_templates_template__WEBPACK_IMPORTED_MODULE_5__.Template);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ 7656:
/*!****************************************************!*\
  !*** ./core/components/productList/productList.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_templates_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/templates/template */ 225);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item */ 2272);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var ProductList = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductList, _Template);
  var _super = _createSuper(ProductList);
  function ProductList(parent, thisClass, items) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProductList);
    _this = _super.call(this, parent, 'div', thisClass);
    ProductList.elem = _this.element;
    ProductList.start(items);
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductList, null, [{
    key: "prodItemCreator",
    value: function () {
      var _prodItemCreator = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(item) {
        var catalog, productItem;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                catalog = document.querySelector('.product-list');
                productItem = new _item__WEBPACK_IMPORTED_MODULE_8__["default"](catalog, 'item', item.title, item.category, item.brand, item.price, item.discountPercentage, item.rating, item.stock, item.images[0], item.id);
                catalog.append(productItem.element);
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function prodItemCreator(_x) {
        return _prodItemCreator.apply(this, arguments);
      }
      return prodItemCreator;
    }()
  }, {
    key: "start",
    value: function () {
      var _start = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2(items) {
        var _this2 = this;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                items.then(function (product) {
                  product.forEach(_this2.prodItemCreator);
                });
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function start(_x2) {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }]);
  return ProductList;
}(_core_templates_template__WEBPACK_IMPORTED_MODULE_7__.Template);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);

/***/ }),

/***/ 6205:
/*!*******************************************!*\
  !*** ./core/components/range/doForMax.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doForMax": () => (/* binding */ doForMax)
/* harmony export */ });
function doForMax(maxVal, rangeMax, max, postfix, rangeMin) {
  maxVal = rangeMax.element.value;
  max.element.textContent = "".concat(maxVal, " ").concat(postfix);
  rangeMax.element.value = maxVal;
  if (+rangeMax.element.value - 5 < +rangeMin.element.value) {
    rangeMax.element.value = "".concat(+rangeMin.element.value - 5);
    max.element.textContent = rangeMax.element.value + postfix;
  }
  return maxVal;
}

/***/ }),

/***/ 4420:
/*!*******************************************!*\
  !*** ./core/components/range/doForMin.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doForMin": () => (/* binding */ doForMin)
/* harmony export */ });
function doForMin(minVal, rangeMin, min, postfix, rangeMax) {
  minVal = rangeMin.element.value;
  min.element.textContent = "".concat(minVal).concat(postfix);
  rangeMin.element.value = minVal;
  if (+rangeMin.element.value > +rangeMax.element.value - 5) {
    rangeMin.element.value = "".concat(+rangeMax.element.value - 5);
    min.element.textContent = rangeMin.element.value + postfix;
  }
  return minVal;
}

/***/ }),

/***/ 7512:
/*!*********************************************!*\
  !*** ./core/components/range/multeRange.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _div_div__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../div/div */ 3528);
/* harmony import */ var _core_components_range_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/components/range/range */ 3456);
/* harmony import */ var _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/filtration/getFilteredItem */ 8697);
/* harmony import */ var _doForMin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./doForMin */ 4420);
/* harmony import */ var _doForMax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./doForMax */ 6205);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var MultiRange = /*#__PURE__*/function (_Div) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MultiRange, _Div);
  var _super = _createSuper(MultiRange);
  function MultiRange(parent, title, value) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MultiRange);
    _this = _super.call(this, parent, 'multirange');
    _this.title = title;
    _this.start(value);
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MultiRange, [{
    key: "start",
    value: function () {
      var _start = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(minMax) {
        var _this2 = this;
        var postfix, title, rangeMin, rangeMax, min, max, minVal, maxVal;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                postfix = " ".concat(this.title === 'price' ? '$' : '');
                title = new _div_div__WEBPACK_IMPORTED_MODULE_7__["default"](this.element, 'multirange__title');
                _context.t0 = _core_components_range_range__WEBPACK_IMPORTED_MODULE_8__["default"];
                _context.t1 = this.element;
                _context.t2 = "";
                _context.next = 7;
                return minMax;
              case 7:
                _context.t3 = _context.sent.min;
                _context.t4 = _context.t2.concat.call(_context.t2, _context.t3);
                _context.t5 = "";
                _context.next = 12;
                return minMax;
              case 12:
                _context.t6 = _context.sent.max;
                _context.t7 = _context.t5.concat.call(_context.t5, _context.t6);
                _context.t8 = "";
                _context.next = 17;
                return minMax;
              case 17:
                _context.t9 = _context.sent.min;
                _context.t10 = _context.t8.concat.call(_context.t8, _context.t9);
                _context.t11 = {
                  type: 'range',
                  min: _context.t4,
                  max: _context.t7,
                  value: _context.t10
                };
                rangeMin = new _context.t0(_context.t1, 'min', _context.t11);
                _context.t12 = _core_components_range_range__WEBPACK_IMPORTED_MODULE_8__["default"];
                _context.t13 = this.element;
                _context.t14 = "";
                _context.next = 26;
                return minMax;
              case 26:
                _context.t15 = _context.sent.min;
                _context.t16 = _context.t14.concat.call(_context.t14, _context.t15);
                _context.t17 = "";
                _context.next = 31;
                return minMax;
              case 31:
                _context.t18 = _context.sent.max;
                _context.t19 = _context.t17.concat.call(_context.t17, _context.t18);
                _context.t20 = "";
                _context.next = 36;
                return minMax;
              case 36:
                _context.t21 = _context.sent.max;
                _context.t22 = _context.t20.concat.call(_context.t20, _context.t21);
                _context.t23 = {
                  type: 'range',
                  min: _context.t16,
                  max: _context.t19,
                  value: _context.t22
                };
                rangeMax = new _context.t12(_context.t13, 'max', _context.t23);
                min = new _div_div__WEBPACK_IMPORTED_MODULE_7__["default"](this.element, 'range_min left multirange__content');
                max = new _div_div__WEBPACK_IMPORTED_MODULE_7__["default"](this.element, 'range_max right multirange__content multirange__right');
                minVal = '';
                maxVal = '';
                _context.t24 = "";
                _context.next = 47;
                return minMax;
              case 47:
                _context.t25 = _context.sent.min;
                min.element.textContent = _context.t24.concat.call(_context.t24, _context.t25).concat(postfix);
                _context.t26 = "";
                _context.next = 52;
                return minMax;
              case 52:
                _context.t27 = _context.sent.max;
                max.element.textContent = _context.t26.concat.call(_context.t26, _context.t27).concat(postfix);
                rangeMin.element.addEventListener('input', function () {
                  minVal = (0,_doForMin__WEBPACK_IMPORTED_MODULE_10__.doForMin)(minVal, rangeMin, min, postfix, rangeMax);
                });
                rangeMax.element.addEventListener('input', function () {
                  maxVal = (0,_doForMax__WEBPACK_IMPORTED_MODULE_11__.doForMax)(maxVal, rangeMax, max, postfix, rangeMin);
                });
                rangeMin.element.addEventListener('change', function () {
                  _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_9__["default"].getFilteredItem(_this2.title === 'price' ? 'minPrice' : 'minStock', +minVal);
                });
                rangeMax.element.addEventListener('change', function () {
                  _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_9__["default"].getFilteredItem(_this2.title === 'price' ? 'maxPrice' : 'maxStock', +maxVal);
                });
                title.element.textContent = this.title;
                this.element.append(rangeMin.element, rangeMax.element, min.element, max.element);
                if (this.title === 'price') {
                  MultiRange.minPriceEl = rangeMin.element;
                  MultiRange.maxPriceEl = rangeMax.element;
                  MultiRange.minPrice = min.element;
                  MultiRange.maxPrice = max.element;
                } else if (this.title === 'stock') {
                  MultiRange.minSrockEl = rangeMin.element;
                  MultiRange.maxSrockEl = rangeMax.element;
                  MultiRange.minStock = min.element;
                  MultiRange.maxStock = max.element;
                }
              case 61:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function start(_x) {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }]);
  return MultiRange;
}(_div_div__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiRange);

/***/ }),

/***/ 3456:
/*!****************************************!*\
  !*** ./core/components/range/range.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 6886);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 228);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);




var Range = /*#__PURE__*/function () {
  function Range(parent, tagClass, attr) {
    var _this$element$classLi;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Range);
    this.element = document.createElement('input');
    if (typeof tagClass === 'string') (_this$element$classLi = this.element.classList).add.apply(_this$element$classLi, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(tagClass.split(' ')));
    if (parent) parent.append(this.element);
    for (var _i = 0, _Object$entries = Object.entries(attr); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      this.element.setAttribute(key, value);
    }
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Range, [{
    key: "removeElement",
    value: function removeElement() {
      this.element.remove();
    }
  }, {
    key: "render",
    value: function render() {
      return this.element;
    }
  }]);
  return Range;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Range);

/***/ }),

/***/ 6290:
/*!********************************************!*\
  !*** ./core/components/search/inputTmp.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 228);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);



var InputTmp = /*#__PURE__*/function () {
  function InputTmp(parent, tagClass) {
    var _this$element$classLi;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InputTmp);
    this.element = document.createElement('input');
    if (typeof tagClass === 'string') (_this$element$classLi = this.element.classList).add.apply(_this$element$classLi, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tagClass.split(' ')));
    if (parent) parent.append(this.element);
    this.element.setAttribute('input', 'text');
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InputTmp, [{
    key: "removeElement",
    value: function removeElement() {
      this.element.remove();
    }
  }, {
    key: "render",
    value: function render() {
      return this.element;
    }
  }]);
  return InputTmp;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputTmp);

/***/ }),

/***/ 6040:
/*!******************************************!*\
  !*** ./core/components/search/search.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _inputTmp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inputTmp */ 6290);
/* harmony import */ var _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/filtration/getFilteredItem */ 8697);
/* harmony import */ var _filtration_emptyPromise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/filtration/emptyPromise */ 804);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Search = /*#__PURE__*/function (_InputTmp) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Search, _InputTmp);
  var _super = _createSuper(Search);
  function Search(parent, nameClass) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Search);
    _this = _super.call(this, parent, nameClass);
    _this.start();
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Search, [{
    key: "start",
    value: function start() {
      var _this2 = this;
      this.element.addEventListener('input', function () {
        Search.searchingValue = _this2.element.value.toLowerCase();
        _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_9__["default"].getFilteredItem('search', Search.searchingValue);
      });
      this.element.placeholder = 'Search product';
      Search.el = this.element;
    }
  }], [{
    key: "search",
    value: function () {
      var _search = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(value, items) {
        var _this3 = this;
        var products;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = Promise;
                _context.next = 3;
                return items;
              case 3:
                _context.t1 = _context.sent;
                products = _context.t0.all.call(_context.t0, _context.t1);
                _context.t2 = Promise;
                _context.next = 8;
                return products;
              case 8:
                _context.t3 = _context.sent.filter(function (item) {
                  return _this3.searchSuitableItems(item, value);
                });
                products = _context.t2.all.call(_context.t2, _context.t3);
                return _context.abrupt("return", products);
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function search(_x, _x2) {
        return _search.apply(this, arguments);
      }
      return search;
    }()
  }, {
    key: "searchSuitableItems",
    value: function searchSuitableItems(item, value) {
      var result = false;
      if (item.title.toLowerCase().indexOf(value) >= 0) {
        result = true;
      } else if (item.brand.toLowerCase().indexOf(value) >= 0) {
        result = true;
      } else if (item.category.toLowerCase().indexOf(value) >= 0) {
        result = true;
      } else if (item.description.toLowerCase().indexOf(value) >= 0) {
        result = true;
      } else if ("".concat(item.discountPercentage).indexOf("".concat(value)) >= 0) {
        result = true;
      } else if ("".concat(item.price).indexOf("".concat(value)) >= 0) {
        result = true;
      } else if ("".concat(item.rating).indexOf("".concat(value)) >= 0) {
        result = true;
      } else if ("".concat(item.stock).indexOf("".concat(value)) >= 0) {
        result = true;
      }
      return result;
    }
  }]);
  return Search;
}(_inputTmp__WEBPACK_IMPORTED_MODULE_8__["default"]);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Search, "searchingValue", '');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Search, "products", _filtration_emptyPromise__WEBPACK_IMPORTED_MODULE_10__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ 3055:
/*!*************************************************!*\
  !*** ./core/components/select/createOptions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOptions": () => (/* binding */ createOptions)
/* harmony export */ });
function createOptions(elem) {
  var sortOptions = new Option('Sort Options', 'sortOptions');
  var sortByPriceA = new Option('Sort by price ASC', 'priceASC');
  var sortByPriceD = new Option('Sort by price DESC', 'priceDESC');
  var sortByRatingA = new Option('Sort by rating ASC', 'ratingASC');
  var sortByRatingD = new Option('Sort by rating DESC', 'ratingDESC');
  var sortByDiscountA = new Option('Sort by discount ASC', 'discountASC');
  var sortByDiscountD = new Option('Sort by discount DESC', 'discountDESC');
  var sortByInStockA = new Option('Sort by in stock ASC', 'inStockASC');
  var sortByInStockD = new Option('Sort by in stock DESC', 'inStockDESC');
  sortOptions.disabled = true;
  sortOptions.selected = true;
  elem.append(sortOptions, sortByPriceA, sortByPriceD, sortByRatingA, sortByRatingD, sortByDiscountA, sortByDiscountD, sortByInStockA, sortByInStockD);
}

/***/ }),

/***/ 3520:
/*!******************************************!*\
  !*** ./core/components/select/select.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _selectTmp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selectTmp */ 2306);
/* harmony import */ var _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/filtration/getFilteredItem */ 8697);
/* harmony import */ var _createOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createOptions */ 3055);
/* harmony import */ var _sortItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sortItems */ 1301);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Select = /*#__PURE__*/function (_SelectTmp) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Select, _SelectTmp);
  var _super = _createSuper(Select);
  function Select(parent, tagClass) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Select);
    _this = _super.call(this, parent, tagClass);
    Select.el = _this.element;
    _this.start();
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Select, [{
    key: "start",
    value: function start() {
      var _this2 = this;
      (0,_createOptions__WEBPACK_IMPORTED_MODULE_10__.createOptions)(this.element);
      this.element.addEventListener('change', function () {
        var value = _this2.element.value;
        _filtration_getFilteredItem__WEBPACK_IMPORTED_MODULE_9__["default"].getFilteredItem('sort', value);
        Select.selectValue = value;
      });
    }
  }], [{
    key: "sort",
    value: function () {
      var _sort = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(value, items) {
        var products;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = Promise;
                _context.next = 3;
                return items;
              case 3:
                _context.t1 = _context.sent;
                products = _context.t0.all.call(_context.t0, _context.t1);
                (0,_sortItems__WEBPACK_IMPORTED_MODULE_11__.sortItems)(products, value);
                return _context.abrupt("return", products);
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function sort(_x, _x2) {
        return _sort.apply(this, arguments);
      }
      return sort;
    }()
  }]);
  return Select;
}(_selectTmp__WEBPACK_IMPORTED_MODULE_8__["default"]);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Select, "selectValue", '');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ }),

/***/ 2306:
/*!*********************************************!*\
  !*** ./core/components/select/selectTmp.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 228);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);



var SelectTmp = /*#__PURE__*/function () {
  function SelectTmp(parent, tagClass) {
    var _this$element$classLi;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SelectTmp);
    this.element = document.createElement('select');
    if (typeof tagClass === 'string') (_this$element$classLi = this.element.classList).add.apply(_this$element$classLi, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tagClass.split(' ')));
    if (parent) parent.append(this.element);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SelectTmp, [{
    key: "removeElement",
    value: function removeElement() {
      this.element.remove();
    }
  }, {
    key: "render",
    value: function render() {
      return this.element;
    }
  }]);
  return SelectTmp;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectTmp);

/***/ }),

/***/ 1301:
/*!*********************************************!*\
  !*** ./core/components/select/sortItems.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortItems": () => (/* binding */ sortItems)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


function sortItems(_x, _x2) {
  return _sortItems.apply(this, arguments);
}
function _sortItems() {
  _sortItems = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(items, option) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(option === 'priceASC')) {
              _context.next = 6;
              break;
            }
            _context.next = 3;
            return items;
          case 3:
            _context.sent.sort(function (a, b) {
              return a.price - b.price;
            });
            _context.next = 46;
            break;
          case 6:
            if (!(option === 'priceDESC')) {
              _context.next = 12;
              break;
            }
            _context.next = 9;
            return items;
          case 9:
            _context.sent.sort(function (a, b) {
              return b.price - a.price;
            });
            _context.next = 46;
            break;
          case 12:
            if (!(option === 'ratingASC')) {
              _context.next = 18;
              break;
            }
            _context.next = 15;
            return items;
          case 15:
            _context.sent.sort(function (a, b) {
              return a.rating - b.rating;
            });
            _context.next = 46;
            break;
          case 18:
            if (!(option === 'ratingDESC')) {
              _context.next = 24;
              break;
            }
            _context.next = 21;
            return items;
          case 21:
            _context.sent.sort(function (a, b) {
              return b.rating - a.rating;
            });
            _context.next = 46;
            break;
          case 24:
            if (!(option === 'discountASC')) {
              _context.next = 30;
              break;
            }
            _context.next = 27;
            return items;
          case 27:
            _context.sent.sort(function (a, b) {
              return a.discountPercentage - b.discountPercentage;
            });
            _context.next = 46;
            break;
          case 30:
            if (!(option === 'discountDESC')) {
              _context.next = 36;
              break;
            }
            _context.next = 33;
            return items;
          case 33:
            _context.sent.sort(function (a, b) {
              return b.discountPercentage - a.discountPercentage;
            });
            _context.next = 46;
            break;
          case 36:
            if (!(option === 'inStockASC')) {
              _context.next = 42;
              break;
            }
            _context.next = 39;
            return items;
          case 39:
            _context.sent.sort(function (a, b) {
              return a.stock - b.stock;
            });
            _context.next = 46;
            break;
          case 42:
            if (!(option === 'inStockDESC')) {
              _context.next = 46;
              break;
            }
            _context.next = 45;
            return items;
          case 45:
            _context.sent.sort(function (a, b) {
              return b.stock - a.stock;
            });
          case 46:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sortItems.apply(this, arguments);
}

/***/ }),

/***/ 4724:
/*!**************************************!*\
  !*** ./core/components/span/span.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _core_templates_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/templates/template */ 225);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Content = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Content, _Template);
  var _super = _createSuper(Content);
  function Content(parent, content, className) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Content);
    return _super.call(this, parent, 'span', "".concat(className, "__content"), "".concat(content));
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Content);
}(_core_templates_template__WEBPACK_IMPORTED_MODULE_5__.Template);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ 8399:
/*!**************************************!*\
  !*** ./core/templates/components.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);


var Component = /*#__PURE__*/function () {
  function Component(tagName, className) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Component);
    this.container = document.createElement(tagName);
    this.container.className = className;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, [{
    key: "render",
    value: function render() {
      return this.container;
    }
  }]);
  return Component;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ 5175:
/*!********************************!*\
  !*** ./core/templates/page.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);



var Page = /*#__PURE__*/function () {
  function Page(id) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);
    this.container = document.createElement('div');
    this.container.id = id;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "createHeaderTitle",
    value: function createHeaderTitle(text) {
      var headerTitle = document.createElement('h1');
      headerTitle.innerText = text;
      return headerTitle;
    }
  }, {
    key: "render",
    value: function render() {
      return this.container;
    }
  }]);
  return Page;
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, "TextObject", {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 225:
/*!************************************!*\
  !*** ./core/templates/template.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 6886);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 228);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);




var Template = /*#__PURE__*/function () {
  function Template(parent) {
    var _this$element$classLi;
    var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
    var className = arguments.length > 2 ? arguments[2] : undefined;
    var value = arguments.length > 3 ? arguments[3] : undefined;
    var attr = arguments.length > 4 ? arguments[4] : undefined;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Template);
    this.element = document.createElement(tagName);
    if (typeof value === 'string') this.element.innerHTML = value;
    if (typeof className === 'string') (_this$element$classLi = this.element.classList).add.apply(_this$element$classLi, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(className.split(' ')));
    if (parent) parent.append(this.element);
    if (attr) {
      for (var _i = 0, _Object$entries = Object.entries(attr); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          _value = _Object$entries$_i[1];
        this.element.setAttribute(key, _value);
        // но лучше сделать проверку на принадлежность через typeof || instanceof
      }
    }
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Template, [{
    key: "removeElement",
    value: function removeElement() {
      this.element.remove();
    }
  }, {
    key: "render",
    value: function render() {
      return this.element;
    }
  }]);
  return Template;
}();

// применяется следующим образом
// new Template(document.body, 'div', 'wrapper', 'Hello world', {id: '1'})

/***/ }),

/***/ 529:
/*!**********************************!*\
  !*** ./filtration/addOptions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOptions": () => (/* binding */ addOptions)
/* harmony export */ });
function addOptions(flag, option, obj) {
  if ((flag === 'category' || flag === 'brand') && typeof option === 'string') {
    // if (!obj[flag].includes(option.toLowerCase())) obj[flag].push(option.toLowerCase());
    if (obj[flag].indexOf(option.toLowerCase()) >= 0) {
      obj[flag].splice(obj[flag].indexOf(option.toLowerCase()), 1);
      console.log(flag, option);
    } else {
      obj[flag].push(option.toLowerCase());
    }
  } else if (flag === 'minPrice' && typeof option === 'number') {
    obj.price[0] = option;
  } else if (flag === 'maxPrice' && typeof option === 'number') {
    obj.price[1] = option;
  } else if (flag === 'minStock' && typeof option === 'number') {
    obj.stock[0] = option;
  } else if (flag === 'maxStock' && typeof option === 'number') {
    obj.stock[1] = option;
  }
}

/***/ }),

/***/ 5658:
/*!*************************************!*\
  !*** ./filtration/checkAllItems.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAllItems": () => (/* binding */ checkAllItems)
/* harmony export */ });
function checkAllItems(item, obj) {
  var selectedTypes = 0;
  var result = 0;
  for (var variable in obj) {
    if (obj[variable].length > 0) {
      selectedTypes++;
    }
  }
  for (var _variable in obj) {
    if (_variable === 'category' || _variable === 'brand') {
      for (var i = 0; i < obj[_variable].length; i++) {
        if (item[_variable].toLowerCase() === obj[_variable][i]) {
          result++;
        }
      }
    }
  }
  if (item.price >= obj.price[0] && item.price <= obj.price[1]) {
    result++;
  }
  if (item.stock >= obj.stock[0] && item.stock <= obj.stock[1]) {
    result++;
  }
  return selectedTypes === result;
}

/***/ }),

/***/ 804:
/*!************************************!*\
  !*** ./filtration/emptyPromise.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var emptyPromise = new Promise(function (resolve) {
  var emptyPromise = [{
    title: 'empty',
    brand: 'empty',
    category: 'empty',
    description: 'empty',
    discountPercentage: 0,
    id: 0,
    images: [''],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: 'empty'
  }];
  resolve(emptyPromise);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyPromise);

/***/ }),

/***/ 4483:
/*!*****************************************************!*\
  !*** ./filtration/fromQuery/addFiltersFromQuery.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFiltersFromQuery": () => (/* binding */ addFiltersFromQuery)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filtration_fromQuery_getFromQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/filtration/fromQuery/getFromQuery */ 5743);
/* harmony import */ var _getFilteredItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getFilteredItem */ 8697);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/state/state */ 6454);
/* harmony import */ var _priceFromQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./priceFromQuery */ 9555);
/* harmony import */ var _selectSortFromQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectSortFromQuery */ 9998);
/* harmony import */ var _stockFromQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stockFromQuery */ 9776);
/* harmony import */ var _searchFromQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchFromQuery */ 1640);
/* harmony import */ var _core_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/components/checkbox/checkbox */ 5830);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









function getBrands() {
  return _getBrands.apply(this, arguments);
}
function _getBrands() {
  _getBrands = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var existBrands;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = Array;
            _context.next = 3;
            return _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].getBrands();
          case 3:
            _context.t1 = _context.sent;
            existBrands = _context.t0.from.call(_context.t0, _context.t1);
            return _context.abrupt("return", existBrands);
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getBrands.apply(this, arguments);
}
function getCategories() {
  return _getCategories.apply(this, arguments);
}
function _getCategories() {
  _getCategories = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var existCategories;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = Array;
            _context2.next = 3;
            return _state_state__WEBPACK_IMPORTED_MODULE_4__["default"].getCategories();
          case 3:
            _context2.t1 = _context2.sent;
            existCategories = _context2.t0.from.call(_context2.t0, _context2.t1);
            return _context2.abrupt("return", existCategories);
          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCategories.apply(this, arguments);
}
function addFiltersFromQuery() {
  return _addFiltersFromQuery.apply(this, arguments);
}
function _addFiltersFromQuery() {
  _addFiltersFromQuery = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    var filters, brand, category, sort, price, stock, search, _iterator, _step, item, name, _iterator2, _step2, _item;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            filters = (0,_filtration_fromQuery_getFromQuery__WEBPACK_IMPORTED_MODULE_2__.getFromQuery)(); // eslint-disable-next-line
            brand = filters.brand, category = filters.category, sort = filters.sort, price = filters.price, stock = filters.stock, search = filters.search;
            _core_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_9__["default"].checked = brand.concat(category);
            _iterator = _createForOfIteratorHelper(brand);
            _context3.prev = 4;
            _iterator.s();
          case 6:
            if ((_step = _iterator.n()).done) {
              _context3.next = 16;
              break;
            }
            item = _step.value;
            name = void 0;
            if (typeof item === 'string') {
              name = item.charAt(0).toUpperCase() + item.slice(1);
            }
            _context3.next = 12;
            return getBrands();
          case 12:
            if (!_context3.sent.includes("".concat(name))) {
              _context3.next = 14;
              break;
            }
            _getFilteredItem__WEBPACK_IMPORTED_MODULE_3__["default"].getFilteredItem('brand', "".concat(item).toUpperCase());
          case 14:
            _context3.next = 6;
            break;
          case 16:
            _context3.next = 21;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](4);
            _iterator.e(_context3.t0);
          case 21:
            _context3.prev = 21;
            _iterator.f();
            return _context3.finish(21);
          case 24:
            _iterator2 = _createForOfIteratorHelper(category);
            _context3.prev = 25;
            _iterator2.s();
          case 27:
            if ((_step2 = _iterator2.n()).done) {
              _context3.next = 35;
              break;
            }
            _item = _step2.value;
            _context3.next = 31;
            return getCategories();
          case 31:
            if (!_context3.sent.includes("".concat(_item))) {
              _context3.next = 33;
              break;
            }
            _getFilteredItem__WEBPACK_IMPORTED_MODULE_3__["default"].getFilteredItem('category', _item);
          case 33:
            _context3.next = 27;
            break;
          case 35:
            _context3.next = 40;
            break;
          case 37:
            _context3.prev = 37;
            _context3.t1 = _context3["catch"](25);
            _iterator2.e(_context3.t1);
          case 40:
            _context3.prev = 40;
            _iterator2.f();
            return _context3.finish(40);
          case 43:
            (0,_selectSortFromQuery__WEBPACK_IMPORTED_MODULE_6__.selectSortFromQuery)(sort);
            (0,_priceFromQuery__WEBPACK_IMPORTED_MODULE_5__.priceFromQuery)(price);
            (0,_stockFromQuery__WEBPACK_IMPORTED_MODULE_7__.stockFromQuery)(stock);
            (0,_searchFromQuery__WEBPACK_IMPORTED_MODULE_8__.searchFromQuery)("".concat(search[0]));
          case 47:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 18, 21, 24], [25, 37, 40, 43]]);
  }));
  return _addFiltersFromQuery.apply(this, arguments);
}

/***/ }),

/***/ 9450:
/*!********************************************!*\
  !*** ./filtration/fromQuery/addToQuery.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToQuery": () => (/* binding */ addToQuery)
/* harmony export */ });
// const filters: string[] = [];
var search = [];
var sort = [];
function addToQuery(flag, item, obj) {
  // filters.push(`${item}`);
  // console.log(obj);
  var newObj = JSON.parse(JSON.stringify(obj));
  if (flag === 'search' && typeof item === 'string') {
    search[0] = item;
  }
  if (flag === 'sort' && typeof item === 'string') {
    sort[0] = item;
  }
  newObj.search = search;
  newObj.sort = sort;
  var result = '';
  for (var el in newObj) {
    if (el) {
      result += "".concat(el, "=");
      if (newObj[el].length === 0) result += '&';
      for (var r = 0; r < newObj[el].length; r++) {
        if (r !== newObj[el].length - 1) {
          result += "".concat(newObj[el][r], ",");
        } else {
          result += "".concat(newObj[el][r], "&");
        }
      }
    }
  }
  window.history.pushState('object or string', 'Title', "?".concat(result));
}

/***/ }),

/***/ 5743:
/*!**********************************************!*\
  !*** ./filtration/fromQuery/getFromQuery.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFromQuery": () => (/* binding */ getFromQuery)
/* harmony export */ });
function getFromQuery() {
  var category = [];
  var brand = [];
  var price = [0, 999999];
  var stock = [0, 999999];
  var search = [];
  var sort = [];
  var selected = {
    category: category,
    brand: brand,
    price: price,
    stock: stock,
    search: search,
    sort: sort
  };
  var url = window.location.toString();
  var urlForFilters = url.substring(url.indexOf('/?category') + 2);
  if (urlForFilters.indexOf('category') >= 0) {
    var arr = urlForFilters.split('&');
    var newArr = arr.map(function (el) {
      return el.split('=');
    }).filter(function (_, i) {
      return i < 6;
    });
    var regex = /%20/g;
    selected.category = newArr[0][1].split(',');
    selected.brand = newArr[1][1].replace(regex, ' ').split(',');
    selected.price = newArr[2][1].split(',').map(function (el) {
      return +el;
    });
    selected.stock = newArr[3][1].split(',').map(function (el) {
      return +el;
    });
    // eslint-disable-next-line
    selected.search[0] = newArr[4][1];
    // eslint-disable-next-line
    selected.sort[0] = newArr[5][1];
  }
  return selected;
}

/***/ }),

/***/ 9555:
/*!************************************************!*\
  !*** ./filtration/fromQuery/priceFromQuery.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "priceFromQuery": () => (/* binding */ priceFromQuery)
/* harmony export */ });
/* harmony import */ var _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getFilteredItem */ 8697);
/* harmony import */ var _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/components/range/multeRange */ 7512);


function priceFromQuery(items) {
  if (items[0] > 0) {
    var minValue = items[0];
    _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredItem('minPrice', minValue);
    _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__["default"].minPriceEl.value = "".concat(minValue);
    _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__["default"].minPrice.textContent = "".concat(minValue, " $");
  }
  if (items[1] < 999999) {
    var maxValue = items[1];
    _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredItem('maxPrice', maxValue);
    _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__["default"].maxPriceEl.value = "".concat(maxValue);
    _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__["default"].maxPrice.textContent = "".concat(maxValue, " $");
  }
}

/***/ }),

/***/ 1640:
/*!*************************************************!*\
  !*** ./filtration/fromQuery/searchFromQuery.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchFromQuery": () => (/* binding */ searchFromQuery)
/* harmony export */ });
/* harmony import */ var _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getFilteredItem */ 8697);
/* harmony import */ var _core_components_search_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/components/search/search */ 6040);


function searchFromQuery(value) {
  if (value.length > 0 && value !== 'undefined') {
    console.log(value);
    _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredItem('search', value);
    _core_components_search_search__WEBPACK_IMPORTED_MODULE_1__["default"].el.value = value;
    _core_components_search_search__WEBPACK_IMPORTED_MODULE_1__["default"].searchingValue = value;
  }
}

/***/ }),

/***/ 9998:
/*!*****************************************************!*\
  !*** ./filtration/fromQuery/selectSortFromQuery.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectSortFromQuery": () => (/* binding */ selectSortFromQuery)
/* harmony export */ });
/* harmony import */ var _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getFilteredItem */ 8697);
/* harmony import */ var _core_components_select_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/components/select/select */ 3520);


function selectSortFromQuery(sort) {
  if (sort[0] === 'priceASC' || sort[0] === 'priceDESC' || sort[0] === 'ratingASC' || sort[0] === 'ratingDESC' || sort[0] === 'discountASC' || sort[0] === 'discountDESC' || sort[0] === 'inStockASC' || sort[0] === 'inStockDESC') {
    var item = sort[0];
    _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredItem('sort', item);
    _core_components_select_select__WEBPACK_IMPORTED_MODULE_1__["default"].el.value = item;
    _core_components_select_select__WEBPACK_IMPORTED_MODULE_1__["default"].selectValue = item;
  }
}

/***/ }),

/***/ 9776:
/*!************************************************!*\
  !*** ./filtration/fromQuery/stockFromQuery.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stockFromQuery": () => (/* binding */ stockFromQuery)
/* harmony export */ });
/* harmony import */ var _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getFilteredItem */ 8697);
/* harmony import */ var _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/components/range/multeRange */ 7512);


function stockFromQuery(items) {
  if (items[0] > 0) {
    var minStock = items[0];
    _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredItem('minStock', minStock);
    _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__["default"].minSrockEl.value = "".concat(minStock);
    _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__["default"].minStock.textContent = "".concat(minStock);
  }
  if (items[1] < 999999) {
    var maxStock = items[1];
    _getFilteredItem__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredItem('maxStock', maxStock);
    _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__["default"].maxSrockEl.value = "".concat(maxStock);
    _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_1__["default"].maxStock.textContent = "".concat(maxStock);
  }
}

/***/ }),

/***/ 8697:
/*!***************************************!*\
  !*** ./filtration/getFilteredItem.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_components_productList_productList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/components/productList/productList */ 7656);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/state/state */ 6454);
/* harmony import */ var _emptyPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emptyPromise */ 804);
/* harmony import */ var _addOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addOptions */ 529);
/* harmony import */ var _core_components_select_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/components/select/select */ 3520);
/* harmony import */ var _core_components_search_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/core/components/search/search */ 6040);
/* harmony import */ var _core_components_found_found__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/core/components/found/found */ 1938);
/* harmony import */ var _checkAllItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkAllItems */ 5658);
/* harmony import */ var _fromQuery_addToQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fromQuery/addToQuery */ 9450);














var category = [];
var brand = [];
var price = [0, 999999];
var stock = [0, 999999];
var GetFilteredItem = /*#__PURE__*/function () {
  function GetFilteredItem() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GetFilteredItem);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GetFilteredItem, null, [{
    key: "getFilteredItem",
    value: function () {
      var _getFilteredItem = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(flag, selectedPoints) {
        var _this = this;
        var products;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_addOptions__WEBPACK_IMPORTED_MODULE_8__.addOptions)(flag, selectedPoints, this.selected);
                (0,_fromQuery_addToQuery__WEBPACK_IMPORTED_MODULE_13__.addToQuery)(flag, selectedPoints, this.selected);
                _context.next = 4;
                return _state_state__WEBPACK_IMPORTED_MODULE_6__["default"].getProducts();
              case 4:
                products = _context.sent;
                _context.t0 = Promise;
                _context.next = 8;
                return products;
              case 8:
                _context.t1 = _context.sent.filter(function (item) {
                  return (0,_checkAllItems__WEBPACK_IMPORTED_MODULE_12__.checkAllItems)(item, _this.selected);
                });
                this.filteredItems = _context.t0.all.call(_context.t0, _context.t1);
                if (flag === 'search' && typeof selectedPoints === 'string') {
                  this.filteredItems = _core_components_search_search__WEBPACK_IMPORTED_MODULE_10__["default"].search(selectedPoints, this.filteredItems);
                } else {
                  this.filteredItems = _core_components_search_search__WEBPACK_IMPORTED_MODULE_10__["default"].search(_core_components_search_search__WEBPACK_IMPORTED_MODULE_10__["default"].searchingValue, this.filteredItems);
                }
                if (flag === 'sort' && typeof selectedPoints === 'string') {
                  this.filteredItems = _core_components_select_select__WEBPACK_IMPORTED_MODULE_9__["default"].sort(selectedPoints, this.filteredItems);
                } else {
                  this.filteredItems = _core_components_select_select__WEBPACK_IMPORTED_MODULE_9__["default"].sort(_core_components_select_select__WEBPACK_IMPORTED_MODULE_9__["default"].selectValue, this.filteredItems);
                }
                _core_components_productList_productList__WEBPACK_IMPORTED_MODULE_5__["default"].elem.textContent = '';
                _core_components_productList_productList__WEBPACK_IMPORTED_MODULE_5__["default"].start(this.filteredItems);
                _context.t2 = _core_components_found_found__WEBPACK_IMPORTED_MODULE_11__["default"];
                _context.next = 17;
                return this.filteredItems;
              case 17:
                _context.t3 = _context.sent.length;
                _context.t2.fromFilter.call(_context.t2, _context.t3);
              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function getFilteredItem(_x, _x2) {
        return _getFilteredItem.apply(this, arguments);
      }
      return getFilteredItem;
    }()
  }]);
  return GetFilteredItem;
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(GetFilteredItem, "selected", {
  category: category,
  brand: brand,
  price: price,
  stock: stock
});
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(GetFilteredItem, "filteredItems", _emptyPromise__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetFilteredItem);

/***/ }),

/***/ 2818:
/*!****************************!*\
  !*** ./http/catalogAPI.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllProducts": () => (/* binding */ getAllProducts)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var getAllProducts = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://dummyjson.com/products?limit=100&skip=0');
          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();
          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getAllProducts() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 5202:
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index */ 208);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/app */ 1762);


var app = new _pages_app__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.run();

/***/ }),

/***/ 1762:
/*!****************************!*\
  !*** ./pages/app/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageId": () => (/* binding */ PageId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/main */ 9121);
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basket */ 889);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item */ 4492);
/* harmony import */ var _core_components_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/components/header/header */ 3782);
/* harmony import */ var _notFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notFound */ 3823);
/* harmony import */ var _filtration_fromQuery_addFiltersFromQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/filtration/fromQuery/addFiltersFromQuery */ 4483);
/* harmony import */ var _core_components_checkHash_checkHash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/components/checkHash/checkHash */ 9043);










var PageId;
(function (PageId) {
  PageId["StorePage"] = "store-page";
  PageId["BasketPage"] = "basket-page";
  PageId["ItemPage"] = "item-page";
})(PageId || (PageId = {}));
var App = /*#__PURE__*/function () {
  function App() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);
    this.initialPage = new _main_main__WEBPACK_IMPORTED_MODULE_3__["default"]('main-page');
    this.header = new _core_components_header_header__WEBPACK_IMPORTED_MODULE_6__["default"]('div', 'navigation');
    // addFiltersFromQuery();
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "enableRouteChange",
    value: function enableRouteChange() {
      window.addEventListener('hashchange', function () {
        var hash = window.location.hash.slice(1);
        App.renderNewPage(hash);
      });
      var hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    }
  }, {
    key: "run",
    value: function run() {
      App.container.append(this.header.render());
      App.renderNewPage('main-page');
      this.enableRouteChange();
    }
  }], [{
    key: "renderNewPage",
    value: function renderNewPage(idPage) {
      var currentPageHTML = document.querySelector("#".concat(App.defaultPageId));
      if (currentPageHTML) currentPageHTML.remove();
      var page = null;
      if (idPage === '' || idPage === PageId.StorePage) {
        page = new _main_main__WEBPACK_IMPORTED_MODULE_3__["default"](PageId.StorePage);
        (0,_filtration_fromQuery_addFiltersFromQuery__WEBPACK_IMPORTED_MODULE_8__.addFiltersFromQuery)();
      } else if (idPage === PageId.BasketPage) {
        page = new _basket__WEBPACK_IMPORTED_MODULE_4__["default"](idPage);
      } else if ((0,_core_components_checkHash_checkHash__WEBPACK_IMPORTED_MODULE_9__.checkHash)(idPage)) {
        page = new _item__WEBPACK_IMPORTED_MODULE_5__["default"](idPage);
      } else {
        page = new _notFound__WEBPACK_IMPORTED_MODULE_7__["default"]('notFound');
      }
      if (page) {
        var pageHTML = page.render();
        pageHTML.id = App.defaultPageId;
        App.container.append(pageHTML);
      }
    }
  }]);
  return App;
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(App, "container", document.body);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(App, "defaultPageId", 'current-page');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 889:
/*!*******************************!*\
  !*** ./pages/basket/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _core_templates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/templates/page */ 5175);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BasketPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BasketPage, _Page);
  var _super = _createSuper(BasketPage);
  function BasketPage(id) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BasketPage);
    return _super.call(this, id);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BasketPage, [{
    key: "render",
    value: function render() {
      var title = this.createHeaderTitle(BasketPage.TextObject.mainTitle);
      this.container.append(title);
      return this.container;
    }
  }]);
  return BasketPage;
}(_core_templates_page__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(BasketPage, "TextObject", {
  mainTitle: 'Basket Page'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketPage);

/***/ }),

/***/ 4492:
/*!*****************************!*\
  !*** ./pages/item/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_components_breadcrumps_breadcrumps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/components/breadcrumps/breadcrumps */ 2267);
/* harmony import */ var _core_templates_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/templates/page */ 5175);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/state/state */ 6454);
/* harmony import */ var _core_components_product_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/core/components/product/product */ 3965);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ItemPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ItemPage, _Page);
  var _super = _createSuper(ItemPage);
  function ItemPage(id) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ItemPage);
    return _super.call(this, id);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ItemPage, [{
    key: "render",
    value: function render() {
      var title = this.createHeaderTitle(ItemPage.TextObject.mainTitle);
      this.container.append(title);
      this.addContent();
      return this.container;
    }
  }, {
    key: "addContent",
    value: function () {
      var _addContent = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee() {
        var numberOfItem, item, title, brand, category, description, discountPercentage, rating, stock, price, images, breadcrumps, product;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                numberOfItem = +window.location.hash.slice(11) - 1;
                _context.next = 3;
                return _state_state__WEBPACK_IMPORTED_MODULE_10__["default"].getProducts();
              case 3:
                _context.t0 = numberOfItem;
                item = _context.sent[_context.t0];
                title = item.title, brand = item.brand, category = item.category, description = item.description, discountPercentage = item.discountPercentage, rating = item.rating, stock = item.stock, price = item.price, images = item.images; // eslint-disable-next-line
                breadcrumps = new _core_components_breadcrumps_breadcrumps__WEBPACK_IMPORTED_MODULE_8__["default"](this.container, category, brand, title);
                product = new _core_components_product_product__WEBPACK_IMPORTED_MODULE_11__["default"](this.container, title, description, discountPercentage, rating, stock, brand, category, price, images);
                product.start();
              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function addContent() {
        return _addContent.apply(this, arguments);
      }
      return addContent;
    }()
  }]);
  return ItemPage;
}(_core_templates_page__WEBPACK_IMPORTED_MODULE_9__["default"]);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ItemPage, "TextObject", {
  mainTitle: 'Item Page'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemPage);

/***/ }),

/***/ 9121:
/*!****************************!*\
  !*** ./pages/main/main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _core_templates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/templates/page */ 5175);
/* harmony import */ var _core_components_filter_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/components/filter/filter */ 2466);
/* harmony import */ var _core_components_div_div__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/components/div/div */ 3528);
/* harmony import */ var _core_components_productList_productList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/components/productList/productList */ 7656);
/* harmony import */ var _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/core/components/range/multeRange */ 7512);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/state/state */ 6454);
/* harmony import */ var _core_components_select_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/core/components/select/select */ 3520);
/* harmony import */ var _core_components_search_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/core/components/search/search */ 6040);
/* harmony import */ var _core_components_found_found__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/core/components/found/found */ 1938);
/* harmony import */ var _core_components_filterButtons_filterButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/core/components/filterButtons/filterButtons */ 6991);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









// import {addFiltersFromQuery} from '@/filtration/fromQuery/addFiltersFromQuery';

var MainPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MainPage, _Page);
  var _super = _createSuper(MainPage);
  function MainPage(id) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPage);
    return _super.call(this, id);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPage, [{
    key: "render",
    value: function render() {
      var title = this.createHeaderTitle(MainPage.TextObject.mainTitle);
      var mainPage = new _core_components_div_div__WEBPACK_IMPORTED_MODULE_8__["default"](this.container, 'main-page');
      var filter = new _core_components_div_div__WEBPACK_IMPORTED_MODULE_8__["default"](mainPage.element, 'filter');
      var category = new _core_components_filter_filter__WEBPACK_IMPORTED_MODULE_7__["default"](this.container, 'category', _state_state__WEBPACK_IMPORTED_MODULE_11__["default"].getCategories());
      var brand = new _core_components_filter_filter__WEBPACK_IMPORTED_MODULE_7__["default"](this.container, 'brand', _state_state__WEBPACK_IMPORTED_MODULE_11__["default"].getBrands());
      var priceRange = new _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_10__["default"](this.container, 'price', _state_state__WEBPACK_IMPORTED_MODULE_11__["default"].getMinMaxPrice());
      var stockRange = new _core_components_range_multeRange__WEBPACK_IMPORTED_MODULE_10__["default"](this.container, 'stock', _state_state__WEBPACK_IMPORTED_MODULE_11__["default"].getMinMaxStock());
      var productPage = new _core_components_div_div__WEBPACK_IMPORTED_MODULE_8__["default"](this.container, 'product-page');
      var sortProducts = new _core_components_div_div__WEBPACK_IMPORTED_MODULE_8__["default"](this.container, 'sort-products');
      var select = new _core_components_select_select__WEBPACK_IMPORTED_MODULE_12__["default"](this.container, 'select');
      var found = new _core_components_found_found__WEBPACK_IMPORTED_MODULE_14__["default"](this.container, 'found');
      var search = new _core_components_search_search__WEBPACK_IMPORTED_MODULE_13__["default"](this.container, 'search');
      var productList = new _core_components_productList_productList__WEBPACK_IMPORTED_MODULE_9__["default"](this.container, 'product-list', _state_state__WEBPACK_IMPORTED_MODULE_11__["default"].getProducts());
      var filterButtons = new _core_components_filterButtons_filterButtons__WEBPACK_IMPORTED_MODULE_15__["default"](this.container, 'filter-buttons');
      sortProducts.element.append(select.element, found.element, search.element);
      filter.element.append(filterButtons.element, category.element, brand.element, priceRange.element, stockRange.element);
      productPage.element.append(sortProducts.element, productList.element);
      mainPage.element.append(filter.element, productPage.element);
      this.container.append(title, mainPage.element);

      // addFiltersFromQuery();

      return this.container;
    }
  }]);
  return MainPage;
}(_core_templates_page__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(MainPage, "TextObject", {
  mainTitle: 'Online Store'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ 3823:
/*!*********************************!*\
  !*** ./pages/notFound/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _core_templates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/templates/page */ 5175);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NotFoundPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NotFoundPage, _Page);
  var _super = _createSuper(NotFoundPage);
  function NotFoundPage(id) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotFoundPage);
    return _super.call(this, id);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotFoundPage, [{
    key: "render",
    value: function render() {
      var title = this.createHeaderTitle(NotFoundPage.TextObject.mainTitle);
      this.container.append(title);
      return this.container;
    }
  }]);
  return NotFoundPage;
}(_core_templates_page__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(NotFoundPage, "TextObject", {
  mainTitle: 'Page not found'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ 6454:
/*!************************!*\
  !*** ./state/state.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7791);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ 824);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_catalogAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/http/catalogAPI */ 2818);




function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

var State = /*#__PURE__*/function () {
  function State() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, State);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(State, null, [{
    key: "getProducts",
    value: function () {
      var _getProducts = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var _yield$getAllProducts, products;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_http_catalogAPI__WEBPACK_IMPORTED_MODULE_4__.getAllProducts)();
              case 2:
                _yield$getAllProducts = _context.sent;
                products = _yield$getAllProducts.products;
                return _context.abrupt("return", products);
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getProducts() {
        return _getProducts.apply(this, arguments);
      }
      return getProducts;
    }()
  }, {
    key: "getBrands",
    value: function () {
      var _getBrands = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var result, brands, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, brandName, _result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getProducts();
              case 2:
                result = _context2.sent;
                brands = [];
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context2.prev = 6;
                _iterator = _asyncIterator(result);
              case 8:
                _context2.next = 10;
                return _iterator.next();
              case 10:
                if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                  _context2.next = 18;
                  break;
                }
                item = _step.value;
                brandName = item.brand.toLowerCase();
                _result = brandName.charAt(0).toUpperCase() + brandName.slice(1);
                brands.push(_result);
              case 15:
                _iteratorAbruptCompletion = false;
                _context2.next = 8;
                break;
              case 18:
                _context2.next = 24;
                break;
              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](6);
                _didIteratorError = true;
                _iteratorError = _context2.t0;
              case 24:
                _context2.prev = 24;
                _context2.prev = 25;
                if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                  _context2.next = 29;
                  break;
                }
                _context2.next = 29;
                return _iterator.return();
              case 29:
                _context2.prev = 29;
                if (!_didIteratorError) {
                  _context2.next = 32;
                  break;
                }
                throw _iteratorError;
              case 32:
                return _context2.finish(29);
              case 33:
                return _context2.finish(24);
              case 34:
                return _context2.abrupt("return", Array.from(new Set(brands)));
              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 20, 24, 34], [25,, 29, 33]]);
      }));
      function getBrands() {
        return _getBrands.apply(this, arguments);
      }
      return getBrands;
    }()
  }, {
    key: "getCategories",
    value: function () {
      var _getCategories = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        var result, categories, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return State.getProducts();
              case 2:
                result = _context3.sent;
                categories = [];
                _iteratorAbruptCompletion2 = false;
                _didIteratorError2 = false;
                _context3.prev = 6;
                _iterator2 = _asyncIterator(result);
              case 8:
                _context3.next = 10;
                return _iterator2.next();
              case 10:
                if (!(_iteratorAbruptCompletion2 = !(_step2 = _context3.sent).done)) {
                  _context3.next = 16;
                  break;
                }
                item = _step2.value;
                categories.push(item.category.toLowerCase());
              case 13:
                _iteratorAbruptCompletion2 = false;
                _context3.next = 8;
                break;
              case 16:
                _context3.next = 22;
                break;
              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](6);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t0;
              case 22:
                _context3.prev = 22;
                _context3.prev = 23;
                if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                  _context3.next = 27;
                  break;
                }
                _context3.next = 27;
                return _iterator2.return();
              case 27:
                _context3.prev = 27;
                if (!_didIteratorError2) {
                  _context3.next = 30;
                  break;
                }
                throw _iteratorError2;
              case 30:
                return _context3.finish(27);
              case 31:
                return _context3.finish(22);
              case 32:
                return _context3.abrupt("return", Array.from(new Set(categories)));
              case 33:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[6, 18, 22, 32], [23,, 27, 31]]);
      }));
      function getCategories() {
        return _getCategories.apply(this, arguments);
      }
      return getCategories;
    }()
  }, {
    key: "getMinMaxPrice",
    value: function () {
      var _getMinMaxPrice = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getProducts();
              case 2:
                result = _context4.sent;
                result.sort(function (a, b) {
                  return a.price - b.price;
                });
                return _context4.abrupt("return", {
                  min: result[0].price,
                  max: result[99].price
                });
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function getMinMaxPrice() {
        return _getMinMaxPrice.apply(this, arguments);
      }
      return getMinMaxPrice;
    }()
  }, {
    key: "getMinMaxStock",
    value: function () {
      var _getMinMaxStock = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getProducts();
              case 2:
                result = _context5.sent;
                result.sort(function (a, b) {
                  return a.stock - b.stock;
                });
                return _context5.abrupt("return", {
                  min: result[0].stock,
                  max: result[99].stock
                });
              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function getMinMaxStock() {
        return _getMinMaxStock.apply(this, arguments);
      }
      return getMinMaxStock;
    }()
  }]);
  return State;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);

/***/ }),

/***/ 1337:
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ 7501)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7501:
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 824:
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 1337)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 1793:
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

/***/ }),

/***/ 6470:
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 8138:
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ 1793);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ 7169:
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ 7791:
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ 2951:
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 1976:
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ 7543);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 4649:
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ 7543);

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ 7597:
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 7591:
/*!**************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ 6983);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ 5181:
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ 2446:
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ 3764:
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 3314:
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 9492:
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ 3940);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ 7169);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ 6983:
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 6886:
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ 6470);
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ 2446);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 4013);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ 3764);




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ 228:
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ 8138);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ 5181);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 4013);
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ 3314);




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ 4868:
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ 3940);

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ 7543:
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ 3940);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ 4868);


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 3940:
/*!************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ 4013:
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ 1793);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(5202));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUk7QUFDSjtBQUNBO0FBQ0EsU0FBUyxxRUFBcUI7QUFDOUI7Ozs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ1k7QUFDWTtBQUN0QjtBQUNwQztBQUNmLFNBQVMsOERBQWMsU0FBUyxvRUFBb0IsWUFBWSwwRUFBMEIsWUFBWSwrREFBZTtBQUNySDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ051RDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3hDO0FBQ2YsU0FBUyxpRUFBaUIsU0FBUywrREFBZSxTQUFTLDBFQUEwQixTQUFTLGlFQUFpQjtBQUMvRzs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNuQjtBQUNmLE1BQU0sc0RBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmtDO0FBQ1M7QUFDNUI7QUFDZixZQUFZLDJEQUFXO0FBQ3ZCLFNBQVMsc0RBQU87QUFDaEI7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxRDtBQUN0QztBQUNmO0FBQ0Esb0NBQW9DLGdFQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsZ0VBQWdCO0FBQ3RHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2JyZWFkY3J1bXBzL2JyZWFkY3J1bXBzLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9jaGVja0hhc2gvY2hlY2tIYXNoLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvY2hlY2tib3gvY2hla2Nib3hUbXAudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2Rpdi9kaXYudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2ZpbHRlckJ1dHRvbnMvYWN0aW9uc0ZvclJlc2V0LnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9maWx0ZXJCdXR0b25zL2ZpbHRlckJ1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2ZvdW5kL2ZvdW5kLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9sYWJlbC9sYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9wcm9kdWN0TGlzdC9pbmZvLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9wcm9kdWN0TGlzdC9pdGVtLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9wcm9kdWN0TGlzdC9wcm9kdWN0TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvcmFuZ2UvZG9Gb3JNYXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL3JhbmdlL2RvRm9yTWluLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9yYW5nZS9tdWx0ZVJhbmdlLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9yYW5nZS9yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvc2VhcmNoL2lucHV0VG1wLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9zZWxlY3QvY3JlYXRlT3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdFRtcC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvc2VsZWN0L3NvcnRJdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvc3Bhbi9zcGFuLnRzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9maWx0cmF0aW9uL2FkZE9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vZmlsdHJhdGlvbi9jaGVja0FsbEl0ZW1zLnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vZW1wdHlQcm9taXNlLnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vZnJvbVF1ZXJ5L2FkZEZpbHRlcnNGcm9tUXVlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZmlsdHJhdGlvbi9mcm9tUXVlcnkvYWRkVG9RdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9maWx0cmF0aW9uL2Zyb21RdWVyeS9nZXRGcm9tUXVlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZmlsdHJhdGlvbi9mcm9tUXVlcnkvcHJpY2VGcm9tUXVlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZmlsdHJhdGlvbi9mcm9tUXVlcnkvc2VhcmNoRnJvbVF1ZXJ5LnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vZnJvbVF1ZXJ5L3NlbGVjdFNvcnRGcm9tUXVlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZmlsdHJhdGlvbi9mcm9tUXVlcnkvc3RvY2tGcm9tUXVlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZmlsdHJhdGlvbi9nZXRGaWx0ZXJlZEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vaHR0cC9jYXRhbG9nQVBJLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9iYXNrZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaXRlbS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbm90Rm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBDb250ZW50IGZyb20gJy4uL3NwYW4vc3Bhbic7XG5pbXBvcnQgRGl2IGZyb20gJy4uL2Rpdi9kaXYnO1xuXG5jbGFzcyBCcmVhZGNydW1wcyB7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG5cbiAgYnJhbmQ6IHN0cmluZztcblxuICB0aXRsZTogc3RyaW5nO1xuXG4gIHBhcmVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgY2F0ZWdvcnk6IHN0cmluZywgYnJhbmQ6IHN0cmluZywgdGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IGJyZWFkY3J1bXBzID0gbmV3IERpdih0aGlzLnBhcmVudCwgJ2JyZWFkcmN1bXBzJyk7XG4gICAgY29uc3QgYWRkcmVzczAgPSBuZXcgQ29udGVudCh0aGlzLnBhcmVudCwgJ1N0b3JlJywgJ2JyZWFkcmN1bXBzJyk7XG4gICAgY29uc3QgYWRkcmVzczEgPSBuZXcgQ29udGVudCh0aGlzLnBhcmVudCwgdGhpcy5jYXRlZ29yeSwgJ2JyZWFkcmN1bXBzJyk7XG4gICAgY29uc3QgYWRkcmVzczIgPSBuZXcgQ29udGVudCh0aGlzLnBhcmVudCwgdGhpcy5icmFuZCwgJ2JyZWFkcmN1bXBzJyk7XG4gICAgY29uc3QgYWRkcmVzczMgPSBuZXcgQ29udGVudCh0aGlzLnBhcmVudCwgdGhpcy50aXRsZSwgJ2JyZWFkcmN1bXBzJyk7XG5cbiAgICBicmVhZGNydW1wcy5lbGVtZW50LmFwcGVuZChhZGRyZXNzMC5lbGVtZW50LCBhZGRyZXNzMS5lbGVtZW50LCBhZGRyZXNzMi5lbGVtZW50LCBhZGRyZXNzMy5lbGVtZW50KTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmQoYnJlYWRjcnVtcHMuZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtcHM7XG4iLCJpbXBvcnQge1RlbXBsYXRlfSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3RlbXBsYXRlJztcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBkaXZDbGFzczogU3RyaW5nKSB7XG4gICAgc3VwZXIocGFyZW50LCAnYnV0dG9uJywgYCR7ZGl2Q2xhc3N9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSGFzaChzdHI6IHN0cmluZykge1xuICBjb25zdCBzdHJBcnIgPSBzdHIuc3BsaXQoJy0nKTtcbiAgY29uc3QgcGFnZSA9IHN0ckFyclswXSA9PT0gJ3BhZ2UnO1xuICBjb25zdCBpdGVtID0gc3RyQXJyWzFdID09PSAnaXRlbSc7XG4gIGNvbnN0IGl0ZW1JZCA9ICtzdHJBcnJbMl0gPj0gMCAmJiArc3RyQXJyWzJdIDw9IDEwMDtcblxuICByZXR1cm4gcGFnZSAmJiBpdGVtICYmIGl0ZW1JZDtcbn1cbiIsIi8vIGltcG9ydCB7VGVtcGxhdGV9IGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vc3Bhbi9zcGFuJztcbmltcG9ydCBDaGVja2JveFRtcCBmcm9tICcuL2NoZWtjYm94VG1wJztcbi8vIGltcG9ydCB7Z2V0RnJvbVF1ZXJ5fSBmcm9tICdAL2ZpbHRyYXRpb24vZ2V0RnJvbVF1ZXJ5JztcblxuLy8gY29uc3QgY2hlY2tlZENIYnggPSBnZXRGcm9tUXVlcnkoKS5jYXRlZ29yeS5jb25jYXQoZ2V0RnJvbVF1ZXJ5KCkuYnJhbmQpO1xuXG5jbGFzcyBDaGJ4IGV4dGVuZHMgQ2hlY2tib3hUbXAge1xuICBzdGF0aWMgY2hlY2tlZDogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB2YWw6IHN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudCwgJ2xhYmVsX19jaGVja2JveCB2aXN1YWxseS1oaWRkZW4nLCB7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgdmFsdWU6IGAke3ZhbH1gLFxuICAgICAgaWQ6IGAke3ZhbH1gLnRvTG93ZXJDYXNlKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbnRlbnQocGFyZW50LCB2YWwpO1xuXG4gICAgaWYgKENoYnguY2hlY2tlZCAmJiBDaGJ4LmNoZWNrZWQuaW5kZXhPZih2YWwudG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuICAgICAgY29uc29sZS5sb2coYHdvcmsgJHt2YWx9YCk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYWRkQ29udGVudChpbm5lcjogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbCA9IG5ldyBDb250ZW50KGlubmVyLCB2YWx1ZSwgJ2xhYmVsJyk7XG5cbiAgICBlbC5yZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGJ4O1xuIiwiY2xhc3MgQ2hlY2tib3hUbXAge1xuICBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gICAgdGFnQ2xhc3M6IHN0cmluZyxcbiAgICBhdHRyPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGlmICh0eXBlb2YgdGFnQ2xhc3MgPT09ICdzdHJpbmcnKSB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi50YWdDbGFzcy5zcGxpdCgnICcpKTtcblxuICAgIGlmIChwYXJlbnQpIHBhcmVudC5hcHBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgIGlmIChhdHRyKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFRtcDtcbiIsImltcG9ydCB7VGVtcGxhdGV9IGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuXG5jbGFzcyBEaXYgZXh0ZW5kcyBUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGRpdkNsYXNzOiBTdHJpbmcpIHtcbiAgICBzdXBlcihwYXJlbnQsICdkaXYnLCBgJHtkaXZDbGFzc31gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXY7XG4iLCJpbXBvcnQge1RlbXBsYXRlfSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3RlbXBsYXRlJztcbmltcG9ydCBDaGJ4IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94JztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9sYWJlbC9sYWJlbCc7XG4vLyBpbXBvcnQge2ZpbHRlckJ5Q2F0ZWdvcnl9IGZyb20gJ0AvZmlsdHJhdGlvbi9maWx0cmF0aW9uJztcbmltcG9ydCBHZXRGaWx0ZXJlZEl0ZW0gZnJvbSAnQC9maWx0cmF0aW9uL2dldEZpbHRlcmVkSXRlbSc7XG5cbmNsYXNzIEZpbHRlciBleHRlbmRzIFRlbXBsYXRlIHtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHBhcnJlbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcsIGl0ZW1zOiBQcm9taXNlPHN0cmluZ1tdPikge1xuICAgIHN1cGVyKHBhcnJlbnQsICdkaXYnLCB0eXBlKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuc3RhcnQoaXRlbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkcmF3VmFyaWFudHNGb3JDYXRlZ29yaWVzKGVsOiBzdHJpbmcpIHtcbiAgICAvKlxuICAgICog0JIg0Y3RgtC+0Lwg0LzQtdGC0L7QtNC1INC4IGRyYXdDaGVja2JveGVzRm9yQnJhbmRzINC60LDQutC+0Lkg0YLQviDQvdC10L7QsdGL0YfQsNC50L3Ri9C5INC/0YDQuNC60L7Qu1xuICAgICog0J3QtSDQvNC+0LPRgyDQv9C+0LvRg9GH0LjRgtGMIHRoaXMuZWxlbWVudCDQuCDQuNC3INC30LAg0Y3RgtC+0LPQviDQvNC10YLQvtC00Ysg0LTRg9Cx0LvQuNGA0YPRjtGC0YHRjyDQuFxuICAgICog0L3QsCDQutCw0LbQtNGL0Lkg0Y3Qu9C10LzQtdC90YIg0L7QsdGA0LDRidCw0Y7RgtGB0Y8g0Log0JTQntCcINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0YDQvtC00LjRgtC10LvRjyDRh9GC0L7QsdGLINCyXG4gICAgKiDQvdC10LPQviDQtNC+0LHQsNCy0LjRgtGMINGH0LXQutCx0L7QutGBINGBINC90LDQt9Cy0LDQvdC40LXQvFxuICAgICovXG4gICAgY29uc3QgY2F0ZWdvcnk6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeScpO1xuICAgIGNvbnN0IGxhYmVsID0gbmV3IExhYmVsKGNhdGVnb3J5ISwgJ2NhdGVnb3J5Jyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBuZXcgQ2hieChsYWJlbC5lbGVtZW50LCBlbCk7XG5cbiAgICBjaGVja2JveC5yZW5kZXIoKTtcbiAgICBsYWJlbC5yZW5kZXIoKTtcbiAgICBjaGVja2JveC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIEdldEZpbHRlcmVkSXRlbS5nZXRGaWx0ZXJlZEl0ZW0oJ2NhdGVnb3J5JywgY2hlY2tib3guZWxlbWVudC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRyYXdWYXJpYW50c0ZvckJyYW5kcyhlbDogc3RyaW5nKSB7XG4gICAgY29uc3QgYnJhbmQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmFuZCcpO1xuICAgIGNvbnN0IGxhYmVsID0gbmV3IExhYmVsKGJyYW5kISwgJ2NhdGVnb3J5Jyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBuZXcgQ2hieChsYWJlbC5lbGVtZW50LCBlbCk7XG5cbiAgICBjaGVja2JveC5yZW5kZXIoKTtcbiAgICBsYWJlbC5yZW5kZXIoKTtcbiAgICBjaGVja2JveC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxhYmVsLmVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnYnJhbmQnLCBjaGVja2JveC5lbGVtZW50LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnQoaXRlbXM6IFByb21pc2U8c3RyaW5nW10+KSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NhdGVnb3J5Jykge1xuICAgICAgaXRlbXNcbiAgICAgICAgLnRoZW4oKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgY2F0ZWdvcnkuZm9yRWFjaCh0aGlzLmRyYXdWYXJpYW50c0ZvckNhdGVnb3JpZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlID09PSAnYnJhbmQnKSB7XG4gICAgICBpdGVtc1xuICAgICAgICAudGhlbigoYnJhbmQpID0+IHtcbiAgICAgICAgICBicmFuZC5mb3JFYWNoKHRoaXMuZHJhd1ZhcmlhbnRzRm9yQnJhbmRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsImltcG9ydCB7Z2V0RnJvbVF1ZXJ5fSBmcm9tICdAL2ZpbHRyYXRpb24vZnJvbVF1ZXJ5L2dldEZyb21RdWVyeSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9wcm9kdWN0TGlzdC9wcm9kdWN0TGlzdCc7XG5pbXBvcnQgTXVsdGlSYW5nZSBmcm9tICcuLi9yYW5nZS9tdWx0ZVJhbmdlJztcbmltcG9ydCBHZXRGaWx0ZXJlZEl0ZW0gZnJvbSAnQC9maWx0cmF0aW9uL2dldEZpbHRlcmVkSXRlbSc7XG5pbXBvcnQgRm91bmQgZnJvbSAnLi4vZm91bmQvZm91bmQnO1xuaW1wb3J0IFN0YXRlIGZyb20gJ0Avc3RhdGUvc3RhdGUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uRm9yUmVzZXQoKSB7XG4gIGNvbnN0IHByb2R1Y3RzID0gU3RhdGUuZ2V0UHJvZHVjdHMoKTtcbiAgY29uc3QgcHJvZHVjdHNMZW5ndGggPSAoYXdhaXQgUHJvbWlzZS5hbGwoYXdhaXQgcHJvZHVjdHMpKS5sZW5ndGg7XG4gIGNvbnN0IHByaWNlcyA9IGF3YWl0IFN0YXRlLmdldE1pbk1heFByaWNlKCk7XG4gIGNvbnN0IHN0b2NrID0gYXdhaXQgU3RhdGUuZ2V0TWluTWF4U3RvY2soKTtcbiAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIGNvbnN0IHBvc2l0aW9uRnJvbSA9IHVybC5pbmRleE9mKCcvP2NhdGVnb3J5Jyk7XG4gIGNvbnN0IHticmFuZCwgY2F0ZWdvcnl9ID0gZ2V0RnJvbVF1ZXJ5KCk7XG4gIGNvbnN0IGNsZWFuVXJsID0gdXJsLnNsaWNlKDAsIHBvc2l0aW9uRnJvbSk7XG5cbiAgY2F0ZWdvcnkuY29uY2F0KGJyYW5kKS5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gJycpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlbH1gKTtcblxuICAgIGNoZWNrYm94IS5jaGVja2VkID0gZmFsc2U7XG4gIH0pO1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoJ29iamVjdCBvciBzdHJpbmcnLCAnVGl0bGUnLCBjbGVhblVybCk7XG4gIFNlbGVjdC5lbC52YWx1ZSA9ICdzb3J0T3B0aW9ucyc7XG4gIFNlbGVjdC5zZWxlY3RWYWx1ZSA9ICcnO1xuICBTZWFyY2guZWwudmFsdWUgPSAnJztcbiAgU2VhcmNoLnNlYXJjaGluZ1ZhbHVlID0gJyc7XG4gIFByb2R1Y3RMaXN0LmVsZW0udGV4dENvbnRlbnQgPSAnJztcbiAgTXVsdGlSYW5nZS5taW5QcmljZUVsLnZhbHVlID0gJzAnO1xuICBNdWx0aVJhbmdlLm1pblByaWNlLnRleHRDb250ZW50ID0gYCR7cHJpY2VzLm1pbn0gJGA7XG4gIE11bHRpUmFuZ2UubWF4UHJpY2VFbC52YWx1ZSA9ICc5OTk5OTknO1xuICBNdWx0aVJhbmdlLm1heFByaWNlLnRleHRDb250ZW50ID0gYCR7cHJpY2VzLm1heH0gJGA7XG4gIE11bHRpUmFuZ2UubWluU3JvY2tFbC52YWx1ZSA9ICcwJztcbiAgTXVsdGlSYW5nZS5taW5TdG9jay50ZXh0Q29udGVudCA9IGAke3N0b2NrLm1pbn1gO1xuICBNdWx0aVJhbmdlLm1heFNyb2NrRWwudmFsdWUgPSAnOTk5OTk5JztcbiAgTXVsdGlSYW5nZS5tYXhTdG9jay50ZXh0Q29udGVudCA9IGAke3N0b2NrLm1heH1gO1xuICBHZXRGaWx0ZXJlZEl0ZW0uc2VsZWN0ZWQuY2F0ZWdvcnkgPSBbXTtcbiAgR2V0RmlsdGVyZWRJdGVtLnNlbGVjdGVkLmJyYW5kID0gW107XG4gIEdldEZpbHRlcmVkSXRlbS5zZWxlY3RlZC5wcmljZSA9IFswLCA5OTk5OTldO1xuICBHZXRGaWx0ZXJlZEl0ZW0uc2VsZWN0ZWQuc3RvY2sgPSBbMCwgOTk5OTk5XTtcbiAgUHJvZHVjdExpc3Quc3RhcnQocHJvZHVjdHMpO1xuICBGb3VuZC5mcm9tRmlsdGVyKHByb2R1Y3RzTGVuZ3RoKTtcbn1cbiIsImltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgRGl2IGZyb20gJy4uL2Rpdi9kaXYnO1xuaW1wb3J0IHthY3Rpb25Gb3JSZXNldH0gZnJvbSAnLi9hY3Rpb25zRm9yUmVzZXQnO1xuXG5jbGFzcyBGaWx0ZXJCdXR0b25zIGV4dGVuZHMgRGl2IHtcbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGFnQ2xhc3M6IHN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudCwgdGFnQ2xhc3MpO1xuXG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQoKSB7XG4gICAgY29uc3QgcmVzZXQgPSBuZXcgQnV0dG9uKHRoaXMuZWxlbWVudCwgJ2ZpbHRlci1idXR0b25zX19yZXNldCBmaWx0ZXItYnV0dG9uc19fYnV0dG9uJyk7XG4gICAgY29uc3QgY29weSA9IG5ldyBCdXR0b24odGhpcy5lbGVtZW50LCAnZmlsdGVyLWJ1dHRvbnNfX2NvcHkgZmlsdGVyLWJ1dHRvbnNfX2J1dHRvbicpO1xuXG4gICAgcmVzZXQuZWxlbWVudC50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gICAgY29weS5lbGVtZW50LnRleHRDb250ZW50ID0gJ0NvcHkgbGluayc7XG5cbiAgICByZXNldC5lbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiBjbGljaygpIHtcbiAgICAgIGFjdGlvbkZvclJlc2V0KCk7XG4gICAgfTtcblxuICAgIGNvcHkuZWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gY2xpY2soKSB7XG4gICAgICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIH07XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHJlc2V0LmVsZW1lbnQsIGNvcHkuZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQnV0dG9ucztcbiIsImltcG9ydCBEaXYgZnJvbSAnLi4vZGl2L2Rpdic7XG5pbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuaW1wb3J0IEdldEZpbHRlcmVkSXRlbSBmcm9tICdAL2ZpbHRyYXRpb24vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCBTdGF0ZSBmcm9tICdAL3N0YXRlL3N0YXRlJztcblxuY2xhc3MgRm91bmQgZXh0ZW5kcyBEaXYge1xuICBzdGF0aWMgZWxlbTogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGFnQ2xhc3M6IHN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudCwgdGFnQ2xhc3MpO1xuICAgIEZvdW5kLmVsZW0gPSB0aGlzLmVsZW1lbnQ7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQoKSB7XG4gICAgRm91bmQuZWxlbS50ZXh0Q29udGVudCA9IGBGb3VuZDogJHthd2FpdCB0aGlzLmdldEFtb3VudCgpfWA7XG4gIH1cblxuICBhc3luYyBnZXRBbW91bnQoKSB7XG4gICAgbGV0IHByb2R1Y3RzOiBQcm9taXNlPElJdGVtW10+ID0gUHJvbWlzZS5hbGwoKGF3YWl0IEdldEZpbHRlcmVkSXRlbS5maWx0ZXJlZEl0ZW1zKSk7XG5cbiAgICBpZiAoKGF3YWl0IHByb2R1Y3RzKVswXS50aXRsZSA9PT0gJ2VtcHR5Jykge1xuICAgICAgcHJvZHVjdHMgPSBhd2FpdCBTdGF0ZS5nZXRQcm9kdWN0cygpO1xuICAgICAgcHJvZHVjdHMgPSBQcm9taXNlLmFsbChhd2FpdCBwcm9kdWN0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChhd2FpdCBwcm9kdWN0cykubGVuZ3RoO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWx0ZXIoYTogbnVtYmVyKSB7XG4gICAgRm91bmQuZWxlbS50ZXh0Q29udGVudCA9IGBGb3VuZDogJHthfWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm91bmQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvY29tcG9uZW50cyc7XG5cbmNvbnN0IGJ1dHRvbnMgPSBbXG4gIHtcbiAgICBpZDogJ3N0b3JlLXBhZ2UnLFxuICAgIHRleHQ6ICdTdG9yZSBQYWdlJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnYmFza2V0LXBhZ2UnLFxuICAgIHRleHQ6ICdCYXNrZXQgUGFnZScsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogJ2l0ZW0tcGFnZScsXG4gIC8vICAgdGV4dDogJ0l0ZW0gUGFnZScsXG4gIC8vIH0sXG5dO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGFnTmFtZSwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbmRlclBhZ2VCdXR0b25zKCkge1xuICAgIGNvbnN0IHBhZ2VCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coYnV0dG9uLmlkKTtcbiAgICAgIGNvbnN0IGJ1dHRvbkhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgIGJ1dHRvbkhUTUwuaHJlZiA9IGAjJHtidXR0b24uaWR9YDtcbiAgICAgIGJ1dHRvbkhUTUwuaW5uZXJUZXh0ID0gYnV0dG9uLnRleHQ7XG4gICAgICBwYWdlQnV0dG9ucy5hcHBlbmQoYnV0dG9uSFRNTCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHBhZ2VCdXR0b25zKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlclBhZ2VCdXR0b25zKCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCB7VGVtcGxhdGV9IGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuXG5jbGFzcyBMYWJlbCBleHRlbmRzIFRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgcGFyZW50TmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIocGFyZW50LCAnbGFiZWwnLCBgJHtwYXJlbnROYW1lfV9fbGFiZWwgbGFiZWxgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcbiIsImltcG9ydCBEaXYgZnJvbSAnLi4vZGl2L2Rpdic7XG5cbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBEaXYge1xuICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBkaXNjb3VudFBlcmNlbnRhZ2U6IG51bWJlcjtcblxuICByYXRpbmc6IG51bWJlcjtcblxuICBzdG9jazogbnVtYmVyO1xuXG4gIGJyYW5kOiBzdHJpbmc7XG5cbiAgY2F0ZWdvcnk6IHN0cmluZztcblxuICBwcmljZTogbnVtYmVyO1xuXG4gIGltYWdlczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgZGlzY291bnRQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgcmF0aW5nOiBudW1iZXIsXG4gICAgc3RvY2s6IG51bWJlcixcbiAgICBicmFuZDogc3RyaW5nLFxuICAgIGNhdGVnb3J5OiBzdHJpbmcsXG4gICAgcHJpY2U6IG51bWJlcixcbiAgICBpbWFnZXM6IHN0cmluZ1tdLFxuICApIHtcbiAgICBzdXBlcihwYXJlbnQsICdwcm9kdWN0Jyk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRpc2NvdW50UGVyY2VudGFnZSA9IGRpc2NvdW50UGVyY2VudGFnZTtcbiAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcbiAgICB0aGlzLnN0b2NrID0gc3RvY2s7XG4gICAgdGhpcy5icmFuZCA9IGJyYW5kO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB0aXRsZSA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCAncHJvZHVjdF9fdGl0bGUnKTtcbiAgICBjb25zdCBjb250ZW50ID0gbmV3IERpdih0aGlzLmVsZW1lbnQsICdwcm9kdWN0X19jb250ZW50Jyk7XG4gICAgY29uc3QgaW1hZ2VzID0gbmV3IERpdih0aGlzLmVsZW1lbnQsICdwcm9kdWN0X19pbWcnKTtcblxuICAgIGNvbnRlbnQuZWxlbWVudC5hcHBlbmQoaW1hZ2VzLmVsZW1lbnQpO1xuICAgIGltYWdlcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7dGhpcy5pbWFnZXNbMF19JylgO1xuXG4gICAgdGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiIsImltcG9ydCBEaXYgZnJvbSAnLi4vZGl2L2Rpdic7XG5cbmNsYXNzIEluZm8gZXh0ZW5kcyBEaXYge1xuICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuXG4gIHRoaXNDbGFzczogc3RyaW5nO1xuXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgY2F0ZWdvcnk6IHN0cmluZztcblxuICBicmFuZDogc3RyaW5nO1xuXG4gIHByaWNlOiBudW1iZXI7XG5cbiAgZGlzY291bnRQZXJjZW50YWdlOiBudW1iZXI7XG5cbiAgcmF0aW5nOiBudW1iZXI7XG5cbiAgc3RvY2s6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRoaXNDbGFzczogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY2F0ZWdvcnk6IHN0cmluZyxcbiAgICBicmFuZDogc3RyaW5nLFxuICAgIHByaWNlOiBudW1iZXIsXG4gICAgZGlzY291bnRQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgcmF0aW5nOiBudW1iZXIsXG4gICAgc3RvY2s6IG51bWJlcixcbiAgKSB7XG4gICAgc3VwZXIocGFyZW50LCBgJHt0aGlzQ2xhc3N9X19pbmZvYCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy50aGlzQ2xhc3MgPSB0aGlzQ2xhc3M7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuZGlzY291bnRQZXJjZW50YWdlID0gZGlzY291bnRQZXJjZW50YWdlO1xuICAgIHRoaXMucmF0aW5nID0gcmF0aW5nO1xuICAgIHRoaXMuc3RvY2sgPSBzdG9jaztcbiAgICB0aGlzLml0ZW1DcmVhdGUoKTtcbiAgfVxuXG4gIGl0ZW1DcmVhdGUoKSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19jYXRlZ29yeWApO1xuICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19jYXRlZ29yeS10aWxlYCk7XG4gICAgY29uc3QgY2F0ZWdvcnlDb250ZW50ID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fY2F0ZWdvcnktY29udGVudGApO1xuICAgIGNvbnN0IGJyYW5kID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fYnJhbmRgKTtcbiAgICBjb25zdCBicmFuZFRpdGxlID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fYnJhbmQtdGlsZWApO1xuICAgIGNvbnN0IGJyYW5kQ29udGVudCA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX2JyYW5kLWNvbnRlbnRgKTtcbiAgICBjb25zdCBwcmljZSA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX3ByaWNlYCk7XG4gICAgY29uc3QgcHJpY2VUaXRsZSA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX3ByaWNlLXRpbGVgKTtcbiAgICBjb25zdCBwcmljZUNvbnRlbnQgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19wcmljZS1jb250ZW50YCk7XG4gICAgY29uc3QgZGlzY291bnQgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19kaXNjb3VudGApO1xuICAgIGNvbnN0IGRpc2NvdW50VGl0bGUgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19kaXNjb3VudC10aWxlYCk7XG4gICAgY29uc3QgZGlzY291bnRDb250ZW50ID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fZGlzY291bnQtY29udGVudGApO1xuICAgIGNvbnN0IHJhdGluZyA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX3JhdGluZ2ApO1xuICAgIGNvbnN0IHJhdGluZ1RpdGxlID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fcmF0aW5nLXRpbGVgKTtcbiAgICBjb25zdCByYXRpbmdDb250ZW50ID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fcmF0aW5nLWNvbnRlbnRgKTtcbiAgICBjb25zdCBzdG9jayA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX3N0b2NrYCk7XG4gICAgY29uc3Qgc3RvY2tUaXRsZSA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX3N0b2NrLXRpbGVgKTtcbiAgICBjb25zdCBzdG9ja0NvbnRlbnQgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19zdG9jay1jb250ZW50YCk7XG5cbiAgICBjYXRlZ29yeVRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnQ2F0ZWdvcnk6ICc7XG4gICAgY2F0ZWdvcnlDb250ZW50LmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNhdGVnb3J5O1xuICAgIGJyYW5kVGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9ICdCcmFuZDogJztcbiAgICBicmFuZENvbnRlbnQuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuYnJhbmQ7XG4gICAgcHJpY2VUaXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gJ1ByaWNlOiAnO1xuICAgIHByaWNlQ29udGVudC5lbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGhpcy5wcmljZX1gO1xuICAgIGRpc2NvdW50VGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9ICdEaXNjb3VudDogJztcbiAgICBkaXNjb3VudENvbnRlbnQuZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RoaXMuZGlzY291bnRQZXJjZW50YWdlfSAlYDtcbiAgICByYXRpbmdUaXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gJ1JhdGluZzogJztcbiAgICByYXRpbmdDb250ZW50LmVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0aGlzLnJhdGluZ31gO1xuICAgIHN0b2NrVGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9ICdTdG9jazogJztcbiAgICBzdG9ja0NvbnRlbnQuZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RoaXMuc3RvY2t9YDtcbiAgICBjYXRlZ29yeS5lbGVtZW50LmFwcGVuZChjYXRlZ29yeVRpdGxlLmVsZW1lbnQsIGNhdGVnb3J5Q29udGVudC5lbGVtZW50KTtcbiAgICBicmFuZC5lbGVtZW50LmFwcGVuZChicmFuZFRpdGxlLmVsZW1lbnQsIGJyYW5kQ29udGVudC5lbGVtZW50KTtcbiAgICBwcmljZS5lbGVtZW50LmFwcGVuZChwcmljZVRpdGxlLmVsZW1lbnQsIHByaWNlQ29udGVudC5lbGVtZW50KTtcbiAgICBkaXNjb3VudC5lbGVtZW50LmFwcGVuZChkaXNjb3VudFRpdGxlLmVsZW1lbnQsIGRpc2NvdW50Q29udGVudC5lbGVtZW50KTtcbiAgICByYXRpbmcuZWxlbWVudC5hcHBlbmQocmF0aW5nVGl0bGUuZWxlbWVudCwgcmF0aW5nQ29udGVudC5lbGVtZW50KTtcbiAgICBzdG9jay5lbGVtZW50LmFwcGVuZChzdG9ja1RpdGxlLmVsZW1lbnQsIHN0b2NrQ29udGVudC5lbGVtZW50KTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKFxuICAgICAgY2F0ZWdvcnkuZWxlbWVudCxcbiAgICAgIGJyYW5kLmVsZW1lbnQsXG4gICAgICBwcmljZS5lbGVtZW50LFxuICAgICAgZGlzY291bnQuZWxlbWVudCxcbiAgICAgIHJhdGluZy5lbGVtZW50LFxuICAgICAgc3RvY2suZWxlbWVudCxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm87XG4iLCJpbXBvcnQge1RlbXBsYXRlfSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3RlbXBsYXRlJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vZGl2L2Rpdic7XG5pbXBvcnQgSW5mbyBmcm9tICcuL2luZm8nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcblxuY2xhc3MgSXRlbSBleHRlbmRzIFRlbXBsYXRlIHtcbiAgcGFyZW50OiBIVE1MRWxlbWVudDtcblxuICB0aGlzQ2xhc3M6IHN0cmluZztcblxuICB0aXRsZTogc3RyaW5nO1xuXG4gIGNhdGVnb3J5OiBzdHJpbmc7XG5cbiAgYnJhbmQ6IHN0cmluZztcblxuICBwcmljZTogbnVtYmVyO1xuXG4gIGRpc2NvdW50UGVyY2VudGFnZTogbnVtYmVyO1xuXG4gIHJhdGluZzogbnVtYmVyO1xuXG4gIHN0b2NrOiBudW1iZXI7XG5cbiAgaW1hZ2VzOiBzdHJpbmc7XG5cbiAgaWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRoaXNDbGFzczogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY2F0ZWdvcnk6IHN0cmluZyxcbiAgICBicmFuZDogc3RyaW5nLFxuICAgIHByaWNlOiBudW1iZXIsXG4gICAgZGlzY291bnRQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgcmF0aW5nOiBudW1iZXIsXG4gICAgc3RvY2s6IG51bWJlcixcbiAgICBpbWFnZXM6IHN0cmluZyxcbiAgICBpZDogbnVtYmVyLFxuICApIHtcbiAgICBzdXBlcihwYXJlbnQsICdkaXYnLCBgJHt0aGlzQ2xhc3N9YCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy50aGlzQ2xhc3MgPSB0aGlzQ2xhc3M7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmJyYW5kID0gYnJhbmQ7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuZGlzY291bnRQZXJjZW50YWdlID0gZGlzY291bnRQZXJjZW50YWdlO1xuICAgIHRoaXMucmF0aW5nID0gcmF0aW5nO1xuICAgIHRoaXMuc3RvY2sgPSBzdG9jaztcbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5pdGVtQ3JlYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGl0ZW1DcmVhdGUoKSB7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fdGl0bGVgKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pbWFnZXN9KWA7XG4gICAgaXRlbVRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIGNvbnN0IGl0ZW1JbmZvID0gbmV3IEluZm8oXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICBgJHt0aGlzLnRoaXNDbGFzc31gLFxuICAgICAgdGhpcy50aXRsZSxcbiAgICAgIHRoaXMuY2F0ZWdvcnksXG4gICAgICB0aGlzLmJyYW5kLFxuICAgICAgdGhpcy5wcmljZSxcbiAgICAgIHRoaXMuZGlzY291bnRQZXJjZW50YWdlLFxuICAgICAgdGhpcy5yYXRpbmcsXG4gICAgICB0aGlzLnN0b2NrLFxuICAgICk7XG4gICAgY29uc3QgYnV0dG9uQWRkID0gbmV3IEJ1dHRvbih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fYnV0dG9uLWFkZGApO1xuXG4gICAgYnV0dG9uQWRkLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnYWRkIHRvIGNhcnQnO1xuXG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLmlkO1xuXG4gICAgdGhpcy5lbGVtZW50LmlkID0gYCR7Y3VycmVudEl0ZW19YDtcblxuICAgIHRoaXMuZWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gb3Blbkl0ZW0oKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBwYWdlLWl0ZW0tJHtjdXJyZW50SXRlbX1gO1xuICAgIH07XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKGl0ZW1UaXRsZS5lbGVtZW50LCBpdGVtSW5mby5lbGVtZW50LCBidXR0b25BZGQuZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsImltcG9ydCB7VGVtcGxhdGV9IGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCB7SUl0ZW19IGZyb20gJ0AvdHlwZXMvdHlwZSc7XG5cbmNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgVGVtcGxhdGUge1xuICBzdGF0aWMgZWxlbTogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGhpc0NsYXNzOiBzdHJpbmcsIGl0ZW1zOiBQcm9taXNlPElJdGVtW10+KSB7XG4gICAgc3VwZXIocGFyZW50LCAnZGl2JywgdGhpc0NsYXNzKTtcbiAgICBQcm9kdWN0TGlzdC5lbGVtID0gdGhpcy5lbGVtZW50O1xuICAgIFByb2R1Y3RMaXN0LnN0YXJ0KGl0ZW1zKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBwcm9kSXRlbUNyZWF0b3IoaXRlbTogSUl0ZW0pIHtcbiAgICBjb25zdCBjYXRhbG9nOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1saXN0Jyk7XG4gICAgY29uc3QgcHJvZHVjdEl0ZW0gPSBuZXcgSXRlbShcbiAgICAgIGNhdGFsb2chLFxuICAgICAgJ2l0ZW0nLFxuICAgICAgaXRlbS50aXRsZSxcbiAgICAgIGl0ZW0uY2F0ZWdvcnksXG4gICAgICBpdGVtLmJyYW5kLFxuICAgICAgaXRlbS5wcmljZSxcbiAgICAgIGl0ZW0uZGlzY291bnRQZXJjZW50YWdlLFxuICAgICAgaXRlbS5yYXRpbmcsXG4gICAgICBpdGVtLnN0b2NrLFxuICAgICAgaXRlbS5pbWFnZXNbMF0sXG4gICAgICBpdGVtLmlkLFxuICAgICk7XG5cbiAgICBjYXRhbG9nIS5hcHBlbmQocHJvZHVjdEl0ZW0uZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc3RhcnQoaXRlbXM6IFByb21pc2U8SUl0ZW1bXT4pIHtcbiAgICBpdGVtc1xuICAgICAgLnRoZW4oKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcHJvZHVjdC5mb3JFYWNoKHRoaXMucHJvZEl0ZW1DcmVhdG9yKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuIiwiaW1wb3J0IFJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IERpdiBmcm9tICcuLi9kaXYvZGl2JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRvRm9yTWF4KFxuICBtYXhWYWw6IHN0cmluZyxcbiAgcmFuZ2VNYXg6IFJhbmdlLFxuICBtYXg6IERpdixcbiAgcG9zdGZpeDogc3RyaW5nLFxuICByYW5nZU1pbjogUmFuZ2UsXG4pIHtcbiAgbWF4VmFsID0gcmFuZ2VNYXguZWxlbWVudC52YWx1ZTtcbiAgbWF4LmVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHttYXhWYWx9ICR7cG9zdGZpeH1gO1xuICByYW5nZU1heC5lbGVtZW50LnZhbHVlID0gbWF4VmFsO1xuICBpZiAoK3JhbmdlTWF4LmVsZW1lbnQudmFsdWUgLSA1IDwgK3JhbmdlTWluLmVsZW1lbnQudmFsdWUpIHtcbiAgICByYW5nZU1heC5lbGVtZW50LnZhbHVlID0gYCR7K3JhbmdlTWluLmVsZW1lbnQudmFsdWUgLSA1fWA7XG4gICAgbWF4LmVsZW1lbnQudGV4dENvbnRlbnQgPSByYW5nZU1heC5lbGVtZW50LnZhbHVlICsgcG9zdGZpeDtcbiAgfVxuXG4gIHJldHVybiBtYXhWYWw7XG59XG4iLCJpbXBvcnQgUmFuZ2UgZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQgRGl2IGZyb20gJy4uL2Rpdi9kaXYnO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9Gb3JNaW4oXG4gIG1pblZhbDogc3RyaW5nLFxuICByYW5nZU1pbjogUmFuZ2UsXG4gIG1pbjogRGl2LFxuICBwb3N0Zml4OiBzdHJpbmcsXG4gIHJhbmdlTWF4OiBSYW5nZSxcbikge1xuICBtaW5WYWwgPSByYW5nZU1pbi5lbGVtZW50LnZhbHVlO1xuICBtaW4uZWxlbWVudC50ZXh0Q29udGVudCA9IGAke21pblZhbH0ke3Bvc3RmaXh9YDtcbiAgcmFuZ2VNaW4uZWxlbWVudC52YWx1ZSA9IG1pblZhbDtcbiAgaWYgKCtyYW5nZU1pbi5lbGVtZW50LnZhbHVlID4gK3JhbmdlTWF4LmVsZW1lbnQudmFsdWUgLSA1KSB7XG4gICAgcmFuZ2VNaW4uZWxlbWVudC52YWx1ZSA9IGAkeytyYW5nZU1heC5lbGVtZW50LnZhbHVlIC0gNX1gO1xuICAgIG1pbi5lbGVtZW50LnRleHRDb250ZW50ID0gcmFuZ2VNaW4uZWxlbWVudC52YWx1ZSArIHBvc3RmaXg7XG4gIH1cblxuICByZXR1cm4gbWluVmFsO1xufVxuIiwiaW1wb3J0IERpdiBmcm9tICcuLi9kaXYvZGl2JztcbmltcG9ydCBSYW5nZSBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9yYW5nZS9yYW5nZSc7XG5pbXBvcnQgR2V0RmlsdGVyZWRJdGVtIGZyb20gJ0AvZmlsdHJhdGlvbi9nZXRGaWx0ZXJlZEl0ZW0nO1xuaW1wb3J0IHtkb0Zvck1pbn0gZnJvbSAnLi9kb0Zvck1pbic7XG5pbXBvcnQge2RvRm9yTWF4fSBmcm9tICcuL2RvRm9yTWF4JztcblxuY2xhc3MgTXVsdGlSYW5nZSBleHRlbmRzIERpdiB7XG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgc3RhdGljIG1pblByaWNlRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1heFByaWNlRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1pblNyb2NrRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1heFNyb2NrRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1pblByaWNlOiBIVE1MRWxlbWVudDtcblxuICBzdGF0aWMgbWF4UHJpY2U6IEhUTUxFbGVtZW50O1xuXG4gIHN0YXRpYyBtaW5TdG9jazogSFRNTEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1heFN0b2NrOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0aXRsZTogc3RyaW5nLCB2YWx1ZTogUHJvbWlzZTx7bWluOiBudW1iZXIsIG1heDogbnVtYmVyfT4pIHtcbiAgICBzdXBlcihwYXJlbnQsICdtdWx0aXJhbmdlJyk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuc3RhcnQodmFsdWUpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQobWluTWF4OiBQcm9taXNlPHttaW46IG51bWJlciwgbWF4OiBudW1iZXJ9Pikge1xuICAgIGNvbnN0IHBvc3RmaXggPSBgICR7dGhpcy50aXRsZSA9PT0gJ3ByaWNlJyA/ICckJyA6ICcnfWA7XG4gICAgY29uc3QgdGl0bGUgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgJ211bHRpcmFuZ2VfX3RpdGxlJyk7XG4gICAgY29uc3QgcmFuZ2VNaW4gPSBuZXcgUmFuZ2UodGhpcy5lbGVtZW50LCAnbWluJywge1xuICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgIG1pbjogYCR7KGF3YWl0IG1pbk1heCkubWlufWAsXG4gICAgICBtYXg6IGAkeyhhd2FpdCBtaW5NYXgpLm1heH1gLFxuICAgICAgdmFsdWU6IGAkeyhhd2FpdCBtaW5NYXgpLm1pbn1gLFxuICAgIH0pO1xuICAgIGNvbnN0IHJhbmdlTWF4ID0gbmV3IFJhbmdlKHRoaXMuZWxlbWVudCwgJ21heCcsIHtcbiAgICAgIHR5cGU6ICdyYW5nZScsXG4gICAgICBtaW46IGAkeyhhd2FpdCBtaW5NYXgpLm1pbn1gLFxuICAgICAgbWF4OiBgJHsoYXdhaXQgbWluTWF4KS5tYXh9YCxcbiAgICAgIHZhbHVlOiBgJHsoYXdhaXQgbWluTWF4KS5tYXh9YCxcbiAgICB9KTtcbiAgICBjb25zdCBtaW4gPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgJ3JhbmdlX21pbiBsZWZ0IG11bHRpcmFuZ2VfX2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYXggPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgJ3JhbmdlX21heCByaWdodCBtdWx0aXJhbmdlX19jb250ZW50IG11bHRpcmFuZ2VfX3JpZ2h0Jyk7XG4gICAgbGV0IG1pblZhbCA9ICcnO1xuICAgIGxldCBtYXhWYWwgPSAnJztcblxuICAgIG1pbi5lbGVtZW50LnRleHRDb250ZW50ID0gYCR7KGF3YWl0IG1pbk1heCkubWlufSR7cG9zdGZpeH1gO1xuICAgIG1heC5lbGVtZW50LnRleHRDb250ZW50ID0gYCR7KGF3YWl0IG1pbk1heCkubWF4fSR7cG9zdGZpeH1gO1xuICAgIHJhbmdlTWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBtaW5WYWwgPSBkb0Zvck1pbihtaW5WYWwsIHJhbmdlTWluLCBtaW4sIHBvc3RmaXgsIHJhbmdlTWF4KTtcbiAgICB9KTtcbiAgICByYW5nZU1heC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgbWF4VmFsID0gZG9Gb3JNYXgobWF4VmFsLCByYW5nZU1heCwgbWF4LCBwb3N0Zml4LCByYW5nZU1pbik7XG4gICAgfSk7XG4gICAgcmFuZ2VNaW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKHRoaXMudGl0bGUgPT09ICdwcmljZScgPyAnbWluUHJpY2UnIDogJ21pblN0b2NrJywgK21pblZhbCk7XG4gICAgfSk7XG4gICAgcmFuZ2VNYXguZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKHRoaXMudGl0bGUgPT09ICdwcmljZScgPyAnbWF4UHJpY2UnIDogJ21heFN0b2NrJywgK21heFZhbCk7XG4gICAgfSk7XG4gICAgdGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChyYW5nZU1pbi5lbGVtZW50LCByYW5nZU1heC5lbGVtZW50LCBtaW4uZWxlbWVudCwgbWF4LmVsZW1lbnQpO1xuICAgIGlmICh0aGlzLnRpdGxlID09PSAncHJpY2UnKSB7XG4gICAgICBNdWx0aVJhbmdlLm1pblByaWNlRWwgPSByYW5nZU1pbi5lbGVtZW50O1xuICAgICAgTXVsdGlSYW5nZS5tYXhQcmljZUVsID0gcmFuZ2VNYXguZWxlbWVudDtcbiAgICAgIE11bHRpUmFuZ2UubWluUHJpY2UgPSBtaW4uZWxlbWVudDtcbiAgICAgIE11bHRpUmFuZ2UubWF4UHJpY2UgPSBtYXguZWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGl0bGUgPT09ICdzdG9jaycpIHtcbiAgICAgIE11bHRpUmFuZ2UubWluU3JvY2tFbCA9IHJhbmdlTWluLmVsZW1lbnQ7XG4gICAgICBNdWx0aVJhbmdlLm1heFNyb2NrRWwgPSByYW5nZU1heC5lbGVtZW50O1xuICAgICAgTXVsdGlSYW5nZS5taW5TdG9jayA9IG1pbi5lbGVtZW50O1xuICAgICAgTXVsdGlSYW5nZS5tYXhTdG9jayA9IG1heC5lbGVtZW50O1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTXVsdGlSYW5nZTtcbiIsImNsYXNzIFJhbmdlIHtcbiAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0YWdDbGFzczogc3RyaW5nLCBhdHRyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBpZiAodHlwZW9mIHRhZ0NsYXNzID09PSAnc3RyaW5nJykgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGFnQ2xhc3Muc3BsaXQoJyAnKSk7XG5cbiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyKSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlIGFzIHN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWxlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7XG4iLCJjbGFzcyBJbnB1dFRtcCB7XG4gIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGFnQ2xhc3M6IHN0cmluZykge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBpZiAodHlwZW9mIHRhZ0NsYXNzID09PSAnc3RyaW5nJykgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGFnQ2xhc3Muc3BsaXQoJyAnKSk7XG5cbiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdpbnB1dCcsICd0ZXh0Jyk7XG4gIH1cblxuICByZW1vdmVFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRtcDtcbiIsImltcG9ydCBJbnB1dFRtcCBmcm9tICcuL2lucHV0VG1wJztcbmltcG9ydCB7SUl0ZW19IGZyb20gJ0AvdHlwZXMvdHlwZSc7XG5pbXBvcnQgR2V0RmlsdGVyZWRJdGVtIGZyb20gJ0AvZmlsdHJhdGlvbi9nZXRGaWx0ZXJlZEl0ZW0nO1xuaW1wb3J0IGVtcHR5UHJvbWlzZSBmcm9tICdAL2ZpbHRyYXRpb24vZW1wdHlQcm9taXNlJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgSW5wdXRUbXAge1xuICBzdGF0aWMgc2VhcmNoaW5nVmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIHN0YXRpYyBwcm9kdWN0czogUHJvbWlzZTxJSXRlbVtdPiA9IGVtcHR5UHJvbWlzZTtcblxuICBzdGF0aWMgZWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgbmFtZUNsYXNzOiBzdHJpbmcpIHtcbiAgICBzdXBlcihwYXJlbnQsIG5hbWVDbGFzcyk7XG5cbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBTZWFyY2guc2VhcmNoaW5nVmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnc2VhcmNoJywgU2VhcmNoLnNlYXJjaGluZ1ZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggcHJvZHVjdCc7XG4gICAgU2VhcmNoLmVsID0gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHNlYXJjaCh2YWx1ZTogc3RyaW5nLCBpdGVtczogUHJvbWlzZTxJSXRlbVtdPikge1xuICAgIGxldCBwcm9kdWN0cyA9IFByb21pc2UuYWxsKGF3YWl0IGl0ZW1zKTtcblxuICAgIHByb2R1Y3RzID0gUHJvbWlzZS5hbGwoKGF3YWl0IHByb2R1Y3RzKS5maWx0ZXIoKGl0ZW0pID0+IHRoaXMuc2VhcmNoU3VpdGFibGVJdGVtcyhpdGVtLCB2YWx1ZSkpKTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxuXG4gIHN0YXRpYyBzZWFyY2hTdWl0YWJsZUl0ZW1zKGl0ZW06IElJdGVtLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA+PSAwKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5icmFuZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUpID49IDApIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZSkgPj0gMCkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA+PSAwKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYCR7aXRlbS5kaXNjb3VudFBlcmNlbnRhZ2V9YC5pbmRleE9mKGAke3ZhbHVlfWApID49IDApIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChgJHtpdGVtLnByaWNlfWAuaW5kZXhPZihgJHt2YWx1ZX1gKSA+PSAwKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYCR7aXRlbS5yYXRpbmd9YC5pbmRleE9mKGAke3ZhbHVlfWApID49IDApIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChgJHtpdGVtLnN0b2NrfWAuaW5kZXhPZihgJHt2YWx1ZX1gKSA+PSAwKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoZWxlbTogSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBuZXcgT3B0aW9uKCdTb3J0IE9wdGlvbnMnLCAnc29ydE9wdGlvbnMnKTtcbiAgY29uc3Qgc29ydEJ5UHJpY2VBID0gbmV3IE9wdGlvbignU29ydCBieSBwcmljZSBBU0MnLCAncHJpY2VBU0MnKTtcbiAgY29uc3Qgc29ydEJ5UHJpY2VEID0gbmV3IE9wdGlvbignU29ydCBieSBwcmljZSBERVNDJywgJ3ByaWNlREVTQycpO1xuICBjb25zdCBzb3J0QnlSYXRpbmdBID0gbmV3IE9wdGlvbignU29ydCBieSByYXRpbmcgQVNDJywgJ3JhdGluZ0FTQycpO1xuICBjb25zdCBzb3J0QnlSYXRpbmdEID0gbmV3IE9wdGlvbignU29ydCBieSByYXRpbmcgREVTQycsICdyYXRpbmdERVNDJyk7XG4gIGNvbnN0IHNvcnRCeURpc2NvdW50QSA9IG5ldyBPcHRpb24oJ1NvcnQgYnkgZGlzY291bnQgQVNDJywgJ2Rpc2NvdW50QVNDJyk7XG4gIGNvbnN0IHNvcnRCeURpc2NvdW50RCA9IG5ldyBPcHRpb24oJ1NvcnQgYnkgZGlzY291bnQgREVTQycsICdkaXNjb3VudERFU0MnKTtcbiAgY29uc3Qgc29ydEJ5SW5TdG9ja0EgPSBuZXcgT3B0aW9uKCdTb3J0IGJ5IGluIHN0b2NrIEFTQycsICdpblN0b2NrQVNDJyk7XG4gIGNvbnN0IHNvcnRCeUluU3RvY2tEID0gbmV3IE9wdGlvbignU29ydCBieSBpbiBzdG9jayBERVNDJywgJ2luU3RvY2tERVNDJyk7XG5cbiAgc29ydE9wdGlvbnMuZGlzYWJsZWQgPSB0cnVlO1xuICBzb3J0T3B0aW9ucy5zZWxlY3RlZCA9IHRydWU7XG5cbiAgZWxlbS5hcHBlbmQoXG4gICAgc29ydE9wdGlvbnMsXG4gICAgc29ydEJ5UHJpY2VBLFxuICAgIHNvcnRCeVByaWNlRCxcbiAgICBzb3J0QnlSYXRpbmdBLFxuICAgIHNvcnRCeVJhdGluZ0QsXG4gICAgc29ydEJ5RGlzY291bnRBLFxuICAgIHNvcnRCeURpc2NvdW50RCxcbiAgICBzb3J0QnlJblN0b2NrQSxcbiAgICBzb3J0QnlJblN0b2NrRCxcbiAgKTtcbn1cbiIsImltcG9ydCBTZWxlY3RUbXAgZnJvbSAnLi9zZWxlY3RUbXAnO1xuaW1wb3J0IEdldEZpbHRlcmVkSXRlbSBmcm9tICdAL2ZpbHRyYXRpb24vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCB7Y3JlYXRlT3B0aW9uc30gZnJvbSAnLi9jcmVhdGVPcHRpb25zJztcbmltcG9ydCB7c29ydEl0ZW1zfSBmcm9tICcuL3NvcnRJdGVtcyc7XG5pbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBTZWxlY3RUbXAge1xuICBzdGF0aWMgc2VsZWN0VmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIHN0YXRpYyBlbDogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGFnQ2xhc3M6IHN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudCwgdGFnQ2xhc3MpO1xuICAgIFNlbGVjdC5lbCA9IHRoaXMuZWxlbWVudDtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjcmVhdGVPcHRpb25zKHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnc29ydCcsIHZhbHVlKTtcblxuICAgICAgU2VsZWN0LnNlbGVjdFZhbHVlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc29ydCh2YWx1ZTogc3RyaW5nLCBpdGVtczogUHJvbWlzZTxJSXRlbVtdPikge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gUHJvbWlzZS5hbGwoYXdhaXQgaXRlbXMpO1xuXG4gICAgc29ydEl0ZW1zKHByb2R1Y3RzLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwiY2xhc3MgU2VsZWN0VG1wIHtcbiAgZWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGFnQ2xhc3M6IHN0cmluZykge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgaWYgKHR5cGVvZiB0YWdDbGFzcyA9PT0gJ3N0cmluZycpIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnRhZ0NsYXNzLnNwbGl0KCcgJykpO1xuXG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlRWxlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0VG1wO1xuIiwiaW1wb3J0IHtJSXRlbX0gZnJvbSAnQC90eXBlcy90eXBlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNvcnRJdGVtcyhpdGVtczogUHJvbWlzZTxJSXRlbVtdPiwgb3B0aW9uOiBzdHJpbmcpIHtcbiAgaWYgKG9wdGlvbiA9PT0gJ3ByaWNlQVNDJykge1xuICAgIChhd2FpdCBpdGVtcykuc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xuICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gJ3ByaWNlREVTQycpIHtcbiAgICAoYXdhaXQgaXRlbXMpLnNvcnQoKGEsIGIpID0+IGIucHJpY2UgLSBhLnByaWNlKTtcbiAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdyYXRpbmdBU0MnKSB7XG4gICAgKGF3YWl0IGl0ZW1zKS5zb3J0KChhLCBiKSA9PiBhLnJhdGluZyAtIGIucmF0aW5nKTtcbiAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdyYXRpbmdERVNDJykge1xuICAgIChhd2FpdCBpdGVtcykuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZyk7XG4gIH0gZWxzZSBpZiAob3B0aW9uID09PSAnZGlzY291bnRBU0MnKSB7XG4gICAgKGF3YWl0IGl0ZW1zKS5zb3J0KChhLCBiKSA9PiBhLmRpc2NvdW50UGVyY2VudGFnZSAtIGIuZGlzY291bnRQZXJjZW50YWdlKTtcbiAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdkaXNjb3VudERFU0MnKSB7XG4gICAgKGF3YWl0IGl0ZW1zKS5zb3J0KChhLCBiKSA9PiBiLmRpc2NvdW50UGVyY2VudGFnZSAtIGEuZGlzY291bnRQZXJjZW50YWdlKTtcbiAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdpblN0b2NrQVNDJykge1xuICAgIChhd2FpdCBpdGVtcykuc29ydCgoYSwgYikgPT4gYS5zdG9jayAtIGIuc3RvY2spO1xuICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gJ2luU3RvY2tERVNDJykge1xuICAgIChhd2FpdCBpdGVtcykuc29ydCgoYSwgYikgPT4gYi5zdG9jayAtIGEuc3RvY2spO1xuICB9XG59XG4iLCJpbXBvcnQge1RlbXBsYXRlfSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3RlbXBsYXRlJztcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgY29udGVudDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudCwgJ3NwYW4nLCBgJHtjbGFzc05hbWV9X19jb250ZW50YCwgYCR7Y29udGVudH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IodGFnTmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImFic3RyYWN0IGNsYXNzIFBhZ2Uge1xuICBwcm90ZWN0ZWQgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBzdGF0aWMgVGV4dE9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlSGVhZGVyVGl0bGUodGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHJldHVybiBoZWFkZXJUaXRsZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsInR5cGUgY29udGVudCA9IHN0cmluZyB8IEFycmF5PHN0cmluZz4gfCBudWxsO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGVtcGxhdGUge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRhZ05hbWU6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA9ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogY29udGVudCxcbiAgICB2YWx1ZT86IGNvbnRlbnQsXG4gICAgYXR0cj86IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcblxuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnc3RyaW5nJykgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lLnNwbGl0KCcgJykpO1xuXG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgaWYgKGF0dHIpIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHIpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgICAvLyDQvdC+INC70YPRh9GI0LUg0YHQtNC10LvQsNGC0Ywg0L/RgNC+0LLQtdGA0LrRgyDQvdCwINC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0Ywg0YfQtdGA0LXQtyB0eXBlb2YgfHwgaW5zdGFuY2VvZlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG59XG5cbi8vINC/0YDQuNC80LXQvdGP0LXRgtGB0Y8g0YHQu9C10LTRg9GO0YnQuNC8INC+0LHRgNCw0LfQvtC8XG4vLyBuZXcgVGVtcGxhdGUoZG9jdW1lbnQuYm9keSwgJ2RpdicsICd3cmFwcGVyJywgJ0hlbGxvIHdvcmxkJywge2lkOiAnMSd9KVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZE9wdGlvbnMoXG4gIGZsYWc6IHN0cmluZyxcbiAgb3B0aW9uOiBzdHJpbmcgfCBudW1iZXIsXG4gIG9iajoge1trZXk6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IG51bWJlcj59LFxuKSB7XG4gIGlmICgoZmxhZyA9PT0gJ2NhdGVnb3J5JyB8fCBmbGFnID09PSAnYnJhbmQnKSAmJiB0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgIC8vIGlmICghb2JqW2ZsYWddLmluY2x1ZGVzKG9wdGlvbi50b0xvd2VyQ2FzZSgpKSkgb2JqW2ZsYWddLnB1c2gob3B0aW9uLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChvYmpbZmxhZ10uaW5kZXhPZihvcHRpb24udG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuICAgICAgb2JqW2ZsYWddLnNwbGljZShvYmpbZmxhZ10uaW5kZXhPZihvcHRpb24udG9Mb3dlckNhc2UoKSksIDEpO1xuICAgICAgY29uc29sZS5sb2coZmxhZywgb3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2ZsYWddLnB1c2gob3B0aW9uLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChmbGFnID09PSAnbWluUHJpY2UnICYmIHR5cGVvZiBvcHRpb24gPT09ICdudW1iZXInKSB7XG4gICAgb2JqLnByaWNlWzBdID0gb3B0aW9uO1xuICB9IGVsc2UgaWYgKGZsYWcgPT09ICdtYXhQcmljZScgJiYgdHlwZW9mIG9wdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICBvYmoucHJpY2VbMV0gPSBvcHRpb247XG4gIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ21pblN0b2NrJyAmJiB0eXBlb2Ygb3B0aW9uID09PSAnbnVtYmVyJykge1xuICAgIG9iai5zdG9ja1swXSA9IG9wdGlvbjtcbiAgfSBlbHNlIGlmIChmbGFnID09PSAnbWF4U3RvY2snICYmIHR5cGVvZiBvcHRpb24gPT09ICdudW1iZXInKSB7XG4gICAgb2JqLnN0b2NrWzFdID0gb3B0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBbGxJdGVtcyhpdGVtOiBJSXRlbSwgb2JqOiB7W2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPn0pIHtcbiAgbGV0IHNlbGVjdGVkVHlwZXMgPSAwO1xuICBsZXQgcmVzdWx0ID0gMDtcblxuICBmb3IgKGNvbnN0IHZhcmlhYmxlIGluIG9iaikge1xuICAgIGlmIChvYmpbdmFyaWFibGVdLmxlbmd0aCA+IDApIHtcbiAgICAgIHNlbGVjdGVkVHlwZXMrKztcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IHZhcmlhYmxlIGluIG9iaikge1xuICAgIGlmICh2YXJpYWJsZSA9PT0gJ2NhdGVnb3J5JyB8fCB2YXJpYWJsZSA9PT0gJ2JyYW5kJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpbdmFyaWFibGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVtW3ZhcmlhYmxlXS50b0xvd2VyQ2FzZSgpID09PSBvYmpbdmFyaWFibGVdW2ldKSB7XG4gICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaXRlbS5wcmljZSA+PSBvYmoucHJpY2VbMF0gJiYgaXRlbS5wcmljZSA8PSBvYmoucHJpY2VbMV0pIHtcbiAgICByZXN1bHQrKztcbiAgfVxuXG4gIGlmIChpdGVtLnN0b2NrID49IG9iai5zdG9ja1swXSAmJiBpdGVtLnN0b2NrIDw9IG9iai5zdG9ja1sxXSkge1xuICAgIHJlc3VsdCsrO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGVkVHlwZXMgPT09IHJlc3VsdDtcbn1cbiIsImltcG9ydCB7SUl0ZW19IGZyb20gJ0AvdHlwZXMvdHlwZSc7XG5cbmNvbnN0IGVtcHR5UHJvbWlzZTogUHJvbWlzZTxJSXRlbVtdPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGVtcHR5UHJvbWlzZSA9IFt7XG4gICAgdGl0bGU6ICdlbXB0eScsXG4gICAgYnJhbmQ6ICdlbXB0eScsXG4gICAgY2F0ZWdvcnk6ICdlbXB0eScsXG4gICAgZGVzY3JpcHRpb246ICdlbXB0eScsXG4gICAgZGlzY291bnRQZXJjZW50YWdlOiAwLFxuICAgIGlkOiAwLFxuICAgIGltYWdlczogWycnXSxcbiAgICBwcmljZTogMCxcbiAgICByYXRpbmc6IDAsXG4gICAgc3RvY2s6IDAsXG4gICAgdGh1bWJuYWlsOiAnZW1wdHknLFxuICB9XTtcblxuICByZXNvbHZlKGVtcHR5UHJvbWlzZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZW1wdHlQcm9taXNlO1xuIiwiaW1wb3J0IHtnZXRGcm9tUXVlcnl9IGZyb20gJ0AvZmlsdHJhdGlvbi9mcm9tUXVlcnkvZ2V0RnJvbVF1ZXJ5JztcbmltcG9ydCBHZXRGaWx0ZXJlZEl0ZW0gZnJvbSAnLi4vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCBTdGF0ZSBmcm9tICdAL3N0YXRlL3N0YXRlJztcbmltcG9ydCB7cHJpY2VGcm9tUXVlcnl9IGZyb20gJy4vcHJpY2VGcm9tUXVlcnknO1xuaW1wb3J0IHtzZWxlY3RTb3J0RnJvbVF1ZXJ5fSBmcm9tICcuL3NlbGVjdFNvcnRGcm9tUXVlcnknO1xuaW1wb3J0IHtzdG9ja0Zyb21RdWVyeX0gZnJvbSAnLi9zdG9ja0Zyb21RdWVyeSc7XG5pbXBvcnQge3NlYXJjaEZyb21RdWVyeX0gZnJvbSAnLi9zZWFyY2hGcm9tUXVlcnknO1xuaW1wb3J0IENoYnggZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRCcmFuZHMoKSB7XG4gIGNvbnN0IGV4aXN0QnJhbmRzID0gQXJyYXkuZnJvbShhd2FpdCBTdGF0ZS5nZXRCcmFuZHMoKSk7XG5cbiAgcmV0dXJuIGV4aXN0QnJhbmRzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICBjb25zdCBleGlzdENhdGVnb3JpZXMgPSBBcnJheS5mcm9tKGF3YWl0IFN0YXRlLmdldENhdGVnb3JpZXMoKSk7XG5cbiAgcmV0dXJuIGV4aXN0Q2F0ZWdvcmllcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEZpbHRlcnNGcm9tUXVlcnkoKSB7XG4gIGNvbnN0IGZpbHRlcnM6IHtba2V5OiBzdHJpbmddOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+fSA9IGdldEZyb21RdWVyeSgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3Qge2JyYW5kLCBjYXRlZ29yeSwgc29ydCwgcHJpY2UsIHN0b2NrLCBzZWFyY2h9ID0gZmlsdGVycztcblxuICBDaGJ4LmNoZWNrZWQgPSBicmFuZC5jb25jYXQoY2F0ZWdvcnkpO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYnJhbmQpIHtcbiAgICBsZXQgbmFtZTtcblxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoKGF3YWl0IGdldEJyYW5kcygpKS5pbmNsdWRlcyhgJHtuYW1lfWApKSB7XG4gICAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKCdicmFuZCcsIGAke2l0ZW19YC50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2F0ZWdvcnkpIHtcbiAgICBpZiAoKGF3YWl0IGdldENhdGVnb3JpZXMoKSkuaW5jbHVkZXMoYCR7aXRlbX1gKSkge1xuICAgICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnY2F0ZWdvcnknLCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RTb3J0RnJvbVF1ZXJ5KHNvcnQpO1xuXG4gIHByaWNlRnJvbVF1ZXJ5KHByaWNlKTtcblxuICBzdG9ja0Zyb21RdWVyeShzdG9jayk7XG5cbiAgc2VhcmNoRnJvbVF1ZXJ5KGAke3NlYXJjaFswXX1gKTtcbn1cbiIsIi8vIGNvbnN0IGZpbHRlcnM6IHN0cmluZ1tdID0gW107XG5jb25zdCBzZWFyY2g6IHN0cmluZ1tdID0gW107XG5jb25zdCBzb3J0OiBzdHJpbmdbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9RdWVyeShmbGFnOiBzdHJpbmcsIGl0ZW06IHN0cmluZyB8IG51bWJlciwgb2JqOiB7W2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPn0pIHtcbiAgLy8gZmlsdGVycy5wdXNoKGAke2l0ZW19YCk7XG4gIC8vIGNvbnNvbGUubG9nKG9iaik7XG4gIGNvbnN0IG5ld09iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cbiAgaWYgKGZsYWcgPT09ICdzZWFyY2gnICYmIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgIHNlYXJjaFswXSA9IGl0ZW07XG4gIH1cblxuICBpZiAoZmxhZyA9PT0gJ3NvcnQnICYmIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgIHNvcnRbMF0gPSBpdGVtO1xuICB9XG5cbiAgbmV3T2JqLnNlYXJjaCA9IHNlYXJjaDtcbiAgbmV3T2JqLnNvcnQgPSBzb3J0O1xuICBsZXQgcmVzdWx0ID0gJyc7XG5cbiAgZm9yIChjb25zdCBlbCBpbiBuZXdPYmopIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHJlc3VsdCArPSBgJHtlbH09YDtcbiAgICAgIGlmIChuZXdPYmpbZWxdLmxlbmd0aCA9PT0gMCkgcmVzdWx0ICs9ICcmJztcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgbmV3T2JqW2VsXS5sZW5ndGg7IHIrKykge1xuICAgICAgICBpZiAociAhPT0gbmV3T2JqW2VsXS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGAke25ld09ialtlbF1bcl19LGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGAke25ld09ialtlbF1bcl19JmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoJ29iamVjdCBvciBzdHJpbmcnLCAnVGl0bGUnLCBgPyR7cmVzdWx0fWApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEZyb21RdWVyeSgpOiB7W2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPn0ge1xuICBjb25zdCBjYXRlZ29yeTogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgYnJhbmQ6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHByaWNlOiBudW1iZXJbXSA9IFswLCA5OTk5OTldO1xuICBjb25zdCBzdG9jazogbnVtYmVyW10gPSBbMCwgOTk5OTk5XTtcbiAgY29uc3Qgc2VhcmNoOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBzb3J0OiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RlZDoge1trZXk6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IG51bWJlcj59ID0ge2NhdGVnb3J5LCBicmFuZCwgcHJpY2UsIHN0b2NrLCBzZWFyY2gsIHNvcnR9O1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKTtcblxuICBjb25zdCB1cmxGb3JGaWx0ZXJzID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZignLz9jYXRlZ29yeScpICsgMik7XG5cbiAgaWYgKHVybEZvckZpbHRlcnMuaW5kZXhPZignY2F0ZWdvcnknKSA+PSAwKSB7XG4gICAgY29uc3QgYXJyID0gdXJsRm9yRmlsdGVycy5zcGxpdCgnJicpO1xuICAgIGNvbnN0IG5ld0FyciA9IGFyci5tYXAoKGVsKSA9PiBlbC5zcGxpdCgnPScpKS5maWx0ZXIoKF8sIGkpID0+IGkgPCA2KTtcbiAgICBjb25zdCByZWdleCA9IC8lMjAvZztcblxuICAgIHNlbGVjdGVkLmNhdGVnb3J5ID0gbmV3QXJyWzBdWzFdLnNwbGl0KCcsJyk7XG4gICAgc2VsZWN0ZWQuYnJhbmQgPSBuZXdBcnJbMV1bMV0ucmVwbGFjZShyZWdleCwgJyAnKS5zcGxpdCgnLCcpO1xuICAgIHNlbGVjdGVkLnByaWNlID0gbmV3QXJyWzJdWzFdLnNwbGl0KCcsJykubWFwKChlbCkgPT4gK2VsKTtcbiAgICBzZWxlY3RlZC5zdG9jayA9IG5ld0FyclszXVsxXS5zcGxpdCgnLCcpLm1hcCgoZWwpID0+ICtlbCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgc2VsZWN0ZWQuc2VhcmNoWzBdID0gbmV3QXJyWzRdWzFdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHNlbGVjdGVkLnNvcnRbMF0gPSBuZXdBcnJbNV1bMV07XG4gIH1cblxuICByZXR1cm4gc2VsZWN0ZWQ7XG59XG4iLCJpbXBvcnQgR2V0RmlsdGVyZWRJdGVtIGZyb20gJy4uL2dldEZpbHRlcmVkSXRlbSc7XG5pbXBvcnQgTXVsdGlSYW5nZSBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9yYW5nZS9tdWx0ZVJhbmdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByaWNlRnJvbVF1ZXJ5KGl0ZW1zOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KTogdm9pZCB7XG4gIGlmIChpdGVtc1swXSA+IDApIHtcbiAgICBjb25zdCBtaW5WYWx1ZSA9IGl0ZW1zWzBdO1xuXG4gICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnbWluUHJpY2UnLCBtaW5WYWx1ZSk7XG4gICAgTXVsdGlSYW5nZS5taW5QcmljZUVsLnZhbHVlID0gYCR7bWluVmFsdWV9YDtcbiAgICBNdWx0aVJhbmdlLm1pblByaWNlLnRleHRDb250ZW50ID0gYCR7bWluVmFsdWV9ICRgO1xuICB9XG5cbiAgaWYgKGl0ZW1zWzFdIDwgOTk5OTk5KSB7XG4gICAgY29uc3QgbWF4VmFsdWUgPSBpdGVtc1sxXTtcblxuICAgIEdldEZpbHRlcmVkSXRlbS5nZXRGaWx0ZXJlZEl0ZW0oJ21heFByaWNlJywgbWF4VmFsdWUpO1xuICAgIE11bHRpUmFuZ2UubWF4UHJpY2VFbC52YWx1ZSA9IGAke21heFZhbHVlfWA7XG4gICAgTXVsdGlSYW5nZS5tYXhQcmljZS50ZXh0Q29udGVudCA9IGAke21heFZhbHVlfSAkYDtcbiAgfVxufVxuIiwiaW1wb3J0IEdldEZpbHRlcmVkSXRlbSBmcm9tICcuLi9nZXRGaWx0ZXJlZEl0ZW0nO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEZyb21RdWVyeSh2YWx1ZTogc3RyaW5nKSB7XG4gIGlmICh2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKCdzZWFyY2gnLCB2YWx1ZSk7XG4gICAgU2VhcmNoLmVsLnZhbHVlID0gdmFsdWU7XG4gICAgU2VhcmNoLnNlYXJjaGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCBHZXRGaWx0ZXJlZEl0ZW0gZnJvbSAnLi4vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RTb3J0RnJvbVF1ZXJ5KHNvcnQ6IEFycmF5PHN0cmluZyB8IG51bWJlcj4pOiB2b2lkIHtcbiAgaWYgKHNvcnRbMF0gPT09ICdwcmljZUFTQydcbiAgICB8fCBzb3J0WzBdID09PSAncHJpY2VERVNDJ1xuICAgIHx8IHNvcnRbMF0gPT09ICdyYXRpbmdBU0MnXG4gICAgfHwgc29ydFswXSA9PT0gJ3JhdGluZ0RFU0MnXG4gICAgfHwgc29ydFswXSA9PT0gJ2Rpc2NvdW50QVNDJ1xuICAgIHx8IHNvcnRbMF0gPT09ICdkaXNjb3VudERFU0MnXG4gICAgfHwgc29ydFswXSA9PT0gJ2luU3RvY2tBU0MnXG4gICAgfHwgc29ydFswXSA9PT0gJ2luU3RvY2tERVNDJ1xuICApIHtcbiAgICBjb25zdCBpdGVtID0gc29ydFswXTtcblxuICAgIEdldEZpbHRlcmVkSXRlbS5nZXRGaWx0ZXJlZEl0ZW0oJ3NvcnQnLCBpdGVtKTtcbiAgICBTZWxlY3QuZWwudmFsdWUgPSBpdGVtO1xuICAgIFNlbGVjdC5zZWxlY3RWYWx1ZSA9IGl0ZW07XG4gIH1cbn1cbiIsImltcG9ydCBHZXRGaWx0ZXJlZEl0ZW0gZnJvbSAnLi4vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCBNdWx0aVJhbmdlIGZyb20gJ0AvY29yZS9jb21wb25lbnRzL3JhbmdlL211bHRlUmFuZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvY2tGcm9tUXVlcnkoaXRlbXM6IEFycmF5PHN0cmluZyB8IG51bWJlcj4pIHtcbiAgaWYgKGl0ZW1zWzBdID4gMCkge1xuICAgIGNvbnN0IG1pblN0b2NrID0gaXRlbXNbMF07XG5cbiAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKCdtaW5TdG9jaycsIG1pblN0b2NrKTtcbiAgICBNdWx0aVJhbmdlLm1pblNyb2NrRWwudmFsdWUgPSBgJHttaW5TdG9ja31gO1xuICAgIE11bHRpUmFuZ2UubWluU3RvY2sudGV4dENvbnRlbnQgPSBgJHttaW5TdG9ja31gO1xuICB9XG5cbiAgaWYgKGl0ZW1zWzFdIDwgOTk5OTk5KSB7XG4gICAgY29uc3QgbWF4U3RvY2sgPSBpdGVtc1sxXTtcblxuICAgIEdldEZpbHRlcmVkSXRlbS5nZXRGaWx0ZXJlZEl0ZW0oJ21heFN0b2NrJywgbWF4U3RvY2spO1xuICAgIE11bHRpUmFuZ2UubWF4U3JvY2tFbC52YWx1ZSA9IGAke21heFN0b2NrfWA7XG4gICAgTXVsdGlSYW5nZS5tYXhTdG9jay50ZXh0Q29udGVudCA9IGAke21heFN0b2NrfWA7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9wcm9kdWN0TGlzdC9wcm9kdWN0TGlzdCc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnQC9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuaW1wb3J0IGVtcHR5UHJvbWlzZSBmcm9tICcuL2VtcHR5UHJvbWlzZSc7XG5pbXBvcnQge2FkZE9wdGlvbnN9IGZyb20gJy4vYWRkT3B0aW9ucyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0AvY29yZS9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBGb3VuZCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9mb3VuZC9mb3VuZCc7XG5pbXBvcnQge2NoZWNrQWxsSXRlbXN9IGZyb20gJy4vY2hlY2tBbGxJdGVtcyc7XG5pbXBvcnQge2FkZFRvUXVlcnl9IGZyb20gJy4vZnJvbVF1ZXJ5L2FkZFRvUXVlcnknO1xuXG5jb25zdCBjYXRlZ29yeTogc3RyaW5nW10gPSBbXTtcbmNvbnN0IGJyYW5kOiBzdHJpbmdbXSA9IFtdO1xuY29uc3QgcHJpY2U6IG51bWJlcltdID0gWzAsIDk5OTk5OV07XG5jb25zdCBzdG9jazogbnVtYmVyW10gPSBbMCwgOTk5OTk5XTtcblxuY2xhc3MgR2V0RmlsdGVyZWRJdGVtIHtcbiAgc3RhdGljIHNlbGVjdGVkOiB7W2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPn0gPSB7Y2F0ZWdvcnksIGJyYW5kLCBwcmljZSwgc3RvY2t9O1xuXG4gIHN0YXRpYyBmaWx0ZXJlZEl0ZW1zOiBQcm9taXNlPElJdGVtW10+ID0gZW1wdHlQcm9taXNlO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRGaWx0ZXJlZEl0ZW0oZmxhZzogc3RyaW5nLCBzZWxlY3RlZFBvaW50czogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgYWRkT3B0aW9ucyhmbGFnLCBzZWxlY3RlZFBvaW50cywgdGhpcy5zZWxlY3RlZCk7XG4gICAgYWRkVG9RdWVyeShmbGFnLCBzZWxlY3RlZFBvaW50cywgdGhpcy5zZWxlY3RlZCk7XG5cbiAgICBjb25zdCBwcm9kdWN0czogUHJvbWlzZTxJSXRlbVtdPiA9IGF3YWl0IFN0YXRlLmdldFByb2R1Y3RzKCk7XG5cbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBQcm9taXNlLmFsbCgoYXdhaXQgcHJvZHVjdHMpLmZpbHRlcigoaXRlbSkgPT4gY2hlY2tBbGxJdGVtcyhpdGVtLCB0aGlzLnNlbGVjdGVkKSkpO1xuICAgIGlmIChmbGFnID09PSAnc2VhcmNoJyAmJiB0eXBlb2Ygc2VsZWN0ZWRQb2ludHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBTZWFyY2guc2VhcmNoKHNlbGVjdGVkUG9pbnRzLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBTZWFyY2guc2VhcmNoKFNlYXJjaC5zZWFyY2hpbmdWYWx1ZSwgdGhpcy5maWx0ZXJlZEl0ZW1zKTtcbiAgICB9XG5cbiAgICBpZiAoZmxhZyA9PT0gJ3NvcnQnICYmIHR5cGVvZiBzZWxlY3RlZFBvaW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IFNlbGVjdC5zb3J0KHNlbGVjdGVkUG9pbnRzLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBTZWxlY3Quc29ydChTZWxlY3Quc2VsZWN0VmFsdWUsIHRoaXMuZmlsdGVyZWRJdGVtcyk7XG4gICAgfVxuXG4gICAgUHJvZHVjdExpc3QuZWxlbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIFByb2R1Y3RMaXN0LnN0YXJ0KHRoaXMuZmlsdGVyZWRJdGVtcyk7XG5cbiAgICBGb3VuZC5mcm9tRmlsdGVyKChhd2FpdCB0aGlzLmZpbHRlcmVkSXRlbXMpLmxlbmd0aCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0RmlsdGVyZWRJdGVtO1xuIiwiZXhwb3J0IGNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJnNraXA9MCcpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2FwcCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuYXBwLnJ1bigpO1xuIiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4uL21haW4vbWFpbic7XG5pbXBvcnQgUGFnZSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3BhZ2UnO1xuaW1wb3J0IEJhc2tldFBhZ2UgZnJvbSAnLi4vYmFza2V0JztcbmltcG9ydCBJdGVtUGFnZSBmcm9tICcuLi9pdGVtJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4uL25vdEZvdW5kJztcbmltcG9ydCB7YWRkRmlsdGVyc0Zyb21RdWVyeX0gZnJvbSAnQC9maWx0cmF0aW9uL2Zyb21RdWVyeS9hZGRGaWx0ZXJzRnJvbVF1ZXJ5JztcbmltcG9ydCB7Y2hlY2tIYXNofSBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9jaGVja0hhc2gvY2hlY2tIYXNoJztcblxuZXhwb3J0IGNvbnN0IGVudW0gUGFnZUlkIHtcbiAgU3RvcmVQYWdlID0gJ3N0b3JlLXBhZ2UnLFxuICBCYXNrZXRQYWdlID0gJ2Jhc2tldC1wYWdlJyxcbiAgSXRlbVBhZ2UgPSAnaXRlbS1wYWdlJyxcbn1cblxuY2xhc3MgQXBwIHtcbiAgcHJpdmF0ZSBzdGF0aWMgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cbiAgcHJpdmF0ZSBpbml0aWFsUGFnZTogTWFpblBhZ2U7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFBhZ2VJZDogc3RyaW5nID0gJ2N1cnJlbnQtcGFnZSc7XG5cbiAgcHJpdmF0ZSBoZWFkZXI6IEhlYWRlcjtcblxuICBzdGF0aWMgcmVuZGVyTmV3UGFnZShpZFBhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0FwcC5kZWZhdWx0UGFnZUlkfWApO1xuXG4gICAgaWYgKGN1cnJlbnRQYWdlSFRNTCkgY3VycmVudFBhZ2VIVE1MLnJlbW92ZSgpO1xuICAgIGxldCBwYWdlOiBQYWdlIHwgbnVsbCA9IG51bGw7XG5cbiAgICBpZiAoaWRQYWdlID09PSAnJyB8fCBpZFBhZ2UgPT09IFBhZ2VJZC5TdG9yZVBhZ2UpIHtcbiAgICAgIHBhZ2UgPSBuZXcgTWFpblBhZ2UoUGFnZUlkLlN0b3JlUGFnZSk7XG4gICAgICBhZGRGaWx0ZXJzRnJvbVF1ZXJ5KCk7XG4gICAgfSBlbHNlIGlmIChpZFBhZ2UgPT09IFBhZ2VJZC5CYXNrZXRQYWdlKSB7XG4gICAgICBwYWdlID0gbmV3IEJhc2tldFBhZ2UoaWRQYWdlKTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrSGFzaChpZFBhZ2UpKSB7XG4gICAgICBwYWdlID0gbmV3IEl0ZW1QYWdlKGlkUGFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2UgPSBuZXcgTm90Rm91bmRQYWdlKCdub3RGb3VuZCcpO1xuICAgIH1cblxuICAgIGlmIChwYWdlKSB7XG4gICAgICBjb25zdCBwYWdlSFRNTCA9IHBhZ2UucmVuZGVyKCk7XG5cbiAgICAgIHBhZ2VIVE1MLmlkID0gQXBwLmRlZmF1bHRQYWdlSWQ7XG4gICAgICBBcHAuY29udGFpbmVyLmFwcGVuZChwYWdlSFRNTCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVSb3V0ZUNoYW5nZSgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcblxuICAgICAgQXBwLnJlbmRlck5ld1BhZ2UoaGFzaCk7XG4gICAgfSk7XG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuXG4gICAgQXBwLnJlbmRlck5ld1BhZ2UoaGFzaCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxQYWdlID0gbmV3IE1haW5QYWdlKCdtYWluLXBhZ2UnKTtcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoJ2RpdicsICduYXZpZ2F0aW9uJyk7XG4gICAgLy8gYWRkRmlsdGVyc0Zyb21RdWVyeSgpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLnJlbmRlcigpKTtcbiAgICBBcHAucmVuZGVyTmV3UGFnZSgnbWFpbi1wYWdlJyk7XG4gICAgdGhpcy5lbmFibGVSb3V0ZUNoYW5nZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBQYWdlIGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvcGFnZSc7XG5cbmNsYXNzIEJhc2tldFBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgc3RhdGljIFRleHRPYmplY3QgPSB7XG4gICAgbWFpblRpdGxlOiAnQmFza2V0IFBhZ2UnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihpZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUhlYWRlclRpdGxlKEJhc2tldFBhZ2UuVGV4dE9iamVjdC5tYWluVGl0bGUpO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRpdGxlKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNrZXRQYWdlO1xuIiwiaW1wb3J0IEJyZWFkY3J1bXBzIGZyb20gJ0AvY29yZS9jb21wb25lbnRzL2JyZWFkY3J1bXBzL2JyZWFkY3J1bXBzJztcbmltcG9ydCBQYWdlIGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvcGFnZSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnQC9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0JztcblxuY2xhc3MgSXRlbVBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgc3RhdGljIFRleHRPYmplY3QgPSB7XG4gICAgbWFpblRpdGxlOiAnSXRlbSBQYWdlJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVIZWFkZXJUaXRsZShJdGVtUGFnZS5UZXh0T2JqZWN0Lm1haW5UaXRsZSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuICAgIHRoaXMuYWRkQ29udGVudCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgYXN5bmMgYWRkQ29udGVudCgpIHtcbiAgICBjb25zdCBudW1iZXJPZkl0ZW0gPSArd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMTEpIC0gMTtcbiAgICBjb25zdCBpdGVtOiBJSXRlbSA9IChhd2FpdCBTdGF0ZS5nZXRQcm9kdWN0cygpKVtudW1iZXJPZkl0ZW1dO1xuICAgIGNvbnN0IHt0aXRsZSwgYnJhbmQsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgZGlzY291bnRQZXJjZW50YWdlLCByYXRpbmcsIHN0b2NrLCBwcmljZSwgaW1hZ2VzfSA9IGl0ZW07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3QgYnJlYWRjcnVtcHMgPSBuZXcgQnJlYWRjcnVtcHModGhpcy5jb250YWluZXIsIGNhdGVnb3J5LCBicmFuZCwgdGl0bGUpO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdChcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGRpc2NvdW50UGVyY2VudGFnZSxcbiAgICAgIHJhdGluZyxcbiAgICAgIHN0b2NrLFxuICAgICAgYnJhbmQsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIHByaWNlLFxuICAgICAgaW1hZ2VzLFxuICAgICk7XG5cbiAgICBwcm9kdWN0LnN0YXJ0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbVBhZ2U7XG4iLCJpbXBvcnQgUGFnZSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3BhZ2UnO1xuaW1wb3J0IEZpbHRlciBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBEaXYgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvZGl2L2Rpdic7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvcHJvZHVjdExpc3QvcHJvZHVjdExpc3QnO1xuaW1wb3J0IE11bHRpUmFuZ2UgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvcmFuZ2UvbXVsdGVSYW5nZSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnQC9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0AvY29yZS9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBGb3VuZCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9mb3VuZC9mb3VuZCc7XG4vLyBpbXBvcnQge2FkZEZpbHRlcnNGcm9tUXVlcnl9IGZyb20gJ0AvZmlsdHJhdGlvbi9mcm9tUXVlcnkvYWRkRmlsdGVyc0Zyb21RdWVyeSc7XG5pbXBvcnQgRmlsdGVyQnV0dG9ucyBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9maWx0ZXJCdXR0b25zL2ZpbHRlckJ1dHRvbnMnO1xuXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIFBhZ2Uge1xuICBzdGF0aWMgVGV4dE9iamVjdCA9IHtcbiAgICBtYWluVGl0bGU6ICdPbmxpbmUgU3RvcmUnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihpZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUhlYWRlclRpdGxlKE1haW5QYWdlLlRleHRPYmplY3QubWFpblRpdGxlKTtcbiAgICBjb25zdCBtYWluUGFnZSA9IG5ldyBEaXYodGhpcy5jb250YWluZXIsICdtYWluLXBhZ2UnKTtcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgRGl2KG1haW5QYWdlLmVsZW1lbnQsICdmaWx0ZXInKTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IG5ldyBGaWx0ZXIodGhpcy5jb250YWluZXIsICdjYXRlZ29yeScsIFN0YXRlLmdldENhdGVnb3JpZXMoKSk7XG4gICAgY29uc3QgYnJhbmQgPSBuZXcgRmlsdGVyKHRoaXMuY29udGFpbmVyLCAnYnJhbmQnLCBTdGF0ZS5nZXRCcmFuZHMoKSk7XG4gICAgY29uc3QgcHJpY2VSYW5nZSA9IG5ldyBNdWx0aVJhbmdlKHRoaXMuY29udGFpbmVyLCAncHJpY2UnLCBTdGF0ZS5nZXRNaW5NYXhQcmljZSgpKTtcbiAgICBjb25zdCBzdG9ja1JhbmdlID0gbmV3IE11bHRpUmFuZ2UodGhpcy5jb250YWluZXIsICdzdG9jaycsIFN0YXRlLmdldE1pbk1heFN0b2NrKCkpO1xuICAgIGNvbnN0IHByb2R1Y3RQYWdlID0gbmV3IERpdih0aGlzLmNvbnRhaW5lciwgJ3Byb2R1Y3QtcGFnZScpO1xuICAgIGNvbnN0IHNvcnRQcm9kdWN0cyA9IG5ldyBEaXYodGhpcy5jb250YWluZXIsICdzb3J0LXByb2R1Y3RzJyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gbmV3IFNlbGVjdCh0aGlzLmNvbnRhaW5lciwgJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGZvdW5kID0gbmV3IEZvdW5kKHRoaXMuY29udGFpbmVyLCAnZm91bmQnKTtcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgU2VhcmNoKHRoaXMuY29udGFpbmVyLCAnc2VhcmNoJyk7XG4gICAgY29uc3QgcHJvZHVjdExpc3QgPSBuZXcgUHJvZHVjdExpc3QodGhpcy5jb250YWluZXIsICdwcm9kdWN0LWxpc3QnLCBTdGF0ZS5nZXRQcm9kdWN0cygpKTtcbiAgICBjb25zdCBmaWx0ZXJCdXR0b25zID0gbmV3IEZpbHRlckJ1dHRvbnModGhpcy5jb250YWluZXIsICdmaWx0ZXItYnV0dG9ucycpO1xuXG4gICAgc29ydFByb2R1Y3RzLmVsZW1lbnQuYXBwZW5kKHNlbGVjdC5lbGVtZW50LCBmb3VuZC5lbGVtZW50LCBzZWFyY2guZWxlbWVudCk7XG4gICAgZmlsdGVyLmVsZW1lbnQuYXBwZW5kKFxuICAgICAgZmlsdGVyQnV0dG9ucy5lbGVtZW50LFxuICAgICAgY2F0ZWdvcnkuZWxlbWVudCxcbiAgICAgIGJyYW5kLmVsZW1lbnQsXG4gICAgICBwcmljZVJhbmdlLmVsZW1lbnQsXG4gICAgICBzdG9ja1JhbmdlLmVsZW1lbnQsXG4gICAgKTtcbiAgICBwcm9kdWN0UGFnZS5lbGVtZW50LmFwcGVuZChzb3J0UHJvZHVjdHMuZWxlbWVudCwgcHJvZHVjdExpc3QuZWxlbWVudCk7XG4gICAgbWFpblBhZ2UuZWxlbWVudC5hcHBlbmQoZmlsdGVyLmVsZW1lbnQsIHByb2R1Y3RQYWdlLmVsZW1lbnQpO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgbWFpblBhZ2UuZWxlbWVudCk7XG5cbiAgICAvLyBhZGRGaWx0ZXJzRnJvbVF1ZXJ5KCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XG4iLCJpbXBvcnQgUGFnZSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3BhZ2UnO1xuXG5jbGFzcyBOb3RGb3VuZFBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgc3RhdGljIFRleHRPYmplY3QgPSB7XG4gICAgbWFpblRpdGxlOiAnUGFnZSBub3QgZm91bmQnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihpZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUhlYWRlclRpdGxlKE5vdEZvdW5kUGFnZS5UZXh0T2JqZWN0Lm1haW5UaXRsZSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kUGFnZTtcbiIsImltcG9ydCB7Z2V0QWxsUHJvZHVjdHN9IGZyb20gJ0AvaHR0cC9jYXRhbG9nQVBJJztcbmltcG9ydCB7SUl0ZW19IGZyb20gJ0AvdHlwZXMvdHlwZSc7XG5cbmNsYXNzIFN0YXRlIHtcbiAgc3RhdGljIGFzeW5jIGdldFByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHtwcm9kdWN0c30gPSBhd2FpdCBnZXRBbGxQcm9kdWN0cygpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEJyYW5kcygpIHtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PElJdGVtPiA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcblxuICAgIGNvbnN0IGJyYW5kczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgZm9yIGF3YWl0IChjb25zdCBpdGVtIG9mIHJlc3VsdCkge1xuICAgICAgY29uc3QgYnJhbmROYW1lID0gaXRlbS5icmFuZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYnJhbmROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYnJhbmROYW1lLnNsaWNlKDEpO1xuXG4gICAgICBicmFuZHMucHVzaChyZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYnJhbmRzKSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PElJdGVtPiA9IGF3YWl0IFN0YXRlLmdldFByb2R1Y3RzKCk7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBmb3IgYXdhaXQgKGNvbnN0IGl0ZW0gb2YgcmVzdWx0KSB7XG4gICAgICBjYXRlZ29yaWVzLnB1c2goaXRlbS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGNhdGVnb3JpZXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRNaW5NYXhQcmljZSgpIHtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PElJdGVtPiA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcblxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XG5cbiAgICByZXR1cm4ge21pbjogcmVzdWx0WzBdLnByaWNlLCBtYXg6IHJlc3VsdFs5OV0ucHJpY2V9O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldE1pbk1heFN0b2NrKCkge1xuICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8SUl0ZW0+ID0gYXdhaXQgdGhpcy5nZXRQcm9kdWN0cygpO1xuXG4gICAgcmVzdWx0LnNvcnQoKGEsIGIpID0+IGEuc3RvY2sgLSBiLnN0b2NrKTtcblxuICAgIHJldHVybiB7bWluOiByZXN1bHRbMF0uc3RvY2ssIG1heDogcmVzdWx0Wzk5XS5zdG9ja307XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGU7XG4iLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykge1xuICAgICAgb2JqW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgIH0sXG4gICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSxcbiAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpXG4gICAgfSksIGdlbmVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKHZhbHVlKSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgfVxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtZXRob2QsIGFyZykge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBtZXRob2QpIHRocm93IGFyZztcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gY29udGV4dC5tZXRob2QsXG4gICAgICBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAodW5kZWZpbmVkID09PSBtZXRob2QpIHJldHVybiBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBtZXRob2ROYW1lICYmIGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbWV0aG9kTmFtZSAmJiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIikpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICB0cnlMb2M6IGxvY3NbMF1cbiAgICB9O1xuICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7XG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHJldHVybiBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV0sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZ2VuRnVuICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpO1xuICB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApLCBnZW5GdW47XG4gIH0sIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IGFyZ1xuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICB2b2lkIDAgPT09IFByb21pc2VJbXBsICYmIChQcm9taXNlSW1wbCA9IFByb21pc2UpO1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksIFByb21pc2VJbXBsKTtcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKSxcbiAgICAgIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLFxuICAgICAgICAgIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzRmluYWxseSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmluYWxseUVudHJ5ICYmIChcImJyZWFrXCIgPT09IHR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0eXBlKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MgJiYgKGZpbmFsbHlFbnRyeSA9IG51bGwpO1xuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9LCBleHBvcnRzO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBudWxsID09IGFyciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKG51bGwgIT0gX2kpIHtcbiAgICB2YXIgX3MsXG4gICAgICBfZSxcbiAgICAgIF94LFxuICAgICAgX3IsXG4gICAgICBfYXJyID0gW10sXG4gICAgICBfbiA9ICEwLFxuICAgICAgX2QgPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKF94ID0gKF9pID0gX2kuY2FsbChhcnIpKS5uZXh0LCAwID09PSBpKSB7XG4gICAgICAgIGlmIChPYmplY3QoX2kpICE9PSBfaSkgcmV0dXJuO1xuICAgICAgICBfbiA9ICExO1xuICAgICAgfSBlbHNlIGZvciAoOyAhKF9uID0gKF9zID0gX3guY2FsbChfaSkpLmRvbmUpICYmIChfYXJyLnB1c2goX3MudmFsdWUpLCBfYXJyLmxlbmd0aCAhPT0gaSk7IF9uID0gITApIHtcbiAgICAgICAgO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSAhMCwgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgbnVsbCAhPSBfaVtcInJldHVyblwiXSAmJiAoX3IgPSBfaVtcInJldHVyblwiXSgpLCBPYmplY3QoX3IpICE9PSBfcikpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfYXJyO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSJdLCJuYW1lcyI6WyJDb250ZW50IiwiRGl2IiwiQnJlYWRjcnVtcHMiLCJwYXJlbnQiLCJjYXRlZ29yeSIsImJyYW5kIiwidGl0bGUiLCJzdGFydCIsImJyZWFkY3J1bXBzIiwiYWRkcmVzczAiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiYWRkcmVzczMiLCJlbGVtZW50IiwiYXBwZW5kIiwiVGVtcGxhdGUiLCJCdXR0b24iLCJkaXZDbGFzcyIsImNoZWNrSGFzaCIsInN0ciIsInN0ckFyciIsInNwbGl0IiwicGFnZSIsIml0ZW0iLCJpdGVtSWQiLCJDaGVja2JveFRtcCIsIkNoYngiLCJ2YWwiLCJ0eXBlIiwidmFsdWUiLCJpZCIsInRvTG93ZXJDYXNlIiwiYWRkQ29udGVudCIsImNoZWNrZWQiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImlubmVyIiwiZWwiLCJyZW5kZXIiLCJ0YWdDbGFzcyIsImF0dHIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiTGFiZWwiLCJHZXRGaWx0ZXJlZEl0ZW0iLCJGaWx0ZXIiLCJwYXJyZW50IiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yIiwibGFiZWwiLCJjaGVja2JveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRGaWx0ZXJlZEl0ZW0iLCJ0aGVuIiwiZm9yRWFjaCIsImRyYXdWYXJpYW50c0ZvckNhdGVnb3JpZXMiLCJkcmF3VmFyaWFudHNGb3JCcmFuZHMiLCJnZXRGcm9tUXVlcnkiLCJTZWxlY3QiLCJTZWFyY2giLCJQcm9kdWN0TGlzdCIsIk11bHRpUmFuZ2UiLCJGb3VuZCIsIlN0YXRlIiwiYWN0aW9uRm9yUmVzZXQiLCJwcm9kdWN0cyIsImdldFByb2R1Y3RzIiwiUHJvbWlzZSIsImFsbCIsInByb2R1Y3RzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TWluTWF4UHJpY2UiLCJwcmljZXMiLCJnZXRNaW5NYXhTdG9jayIsInN0b2NrIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicG9zaXRpb25Gcm9tIiwiY2xlYW5VcmwiLCJzbGljZSIsImNvbmNhdCIsImZpbHRlciIsImdldEVsZW1lbnRCeUlkIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInNlbGVjdFZhbHVlIiwic2VhcmNoaW5nVmFsdWUiLCJlbGVtIiwidGV4dENvbnRlbnQiLCJtaW5QcmljZUVsIiwibWluUHJpY2UiLCJtaW4iLCJtYXhQcmljZUVsIiwibWF4UHJpY2UiLCJtYXgiLCJtaW5Tcm9ja0VsIiwibWluU3RvY2siLCJtYXhTcm9ja0VsIiwibWF4U3RvY2siLCJzZWxlY3RlZCIsInByaWNlIiwiZnJvbUZpbHRlciIsIkZpbHRlckJ1dHRvbnMiLCJyZXNldCIsImNvcHkiLCJvbmNsaWNrIiwiY2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJnZXRBbW91bnQiLCJmaWx0ZXJlZEl0ZW1zIiwiYSIsIkNvbXBvbmVudCIsImJ1dHRvbnMiLCJ0ZXh0IiwiSGVhZGVyIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsInBhZ2VCdXR0b25zIiwiYnV0dG9uIiwiYnV0dG9uSFRNTCIsImlubmVyVGV4dCIsImNvbnRhaW5lciIsInJlbmRlclBhZ2VCdXR0b25zIiwicGFyZW50TmFtZSIsIlByb2R1Y3QiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50UGVyY2VudGFnZSIsInJhdGluZyIsImltYWdlcyIsImNvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIkluZm8iLCJ0aGlzQ2xhc3MiLCJpdGVtQ3JlYXRlIiwiY2F0ZWdvcnlUaXRsZSIsImNhdGVnb3J5Q29udGVudCIsImJyYW5kVGl0bGUiLCJicmFuZENvbnRlbnQiLCJwcmljZVRpdGxlIiwicHJpY2VDb250ZW50IiwiZGlzY291bnQiLCJkaXNjb3VudFRpdGxlIiwiZGlzY291bnRDb250ZW50IiwicmF0aW5nVGl0bGUiLCJyYXRpbmdDb250ZW50Iiwic3RvY2tUaXRsZSIsInN0b2NrQ29udGVudCIsIkl0ZW0iLCJpdGVtVGl0bGUiLCJpdGVtSW5mbyIsImJ1dHRvbkFkZCIsImN1cnJlbnRJdGVtIiwib3Blbkl0ZW0iLCJoYXNoIiwiY2F0YWxvZyIsInByb2R1Y3RJdGVtIiwicHJvZHVjdCIsInByb2RJdGVtQ3JlYXRvciIsImRvRm9yTWF4IiwibWF4VmFsIiwicmFuZ2VNYXgiLCJwb3N0Zml4IiwicmFuZ2VNaW4iLCJkb0Zvck1pbiIsIm1pblZhbCIsIlJhbmdlIiwibWluTWF4IiwiSW5wdXRUbXAiLCJlbXB0eVByb21pc2UiLCJuYW1lQ2xhc3MiLCJwbGFjZWhvbGRlciIsInNlYXJjaFN1aXRhYmxlSXRlbXMiLCJyZXN1bHQiLCJjcmVhdGVPcHRpb25zIiwic29ydE9wdGlvbnMiLCJPcHRpb24iLCJzb3J0QnlQcmljZUEiLCJzb3J0QnlQcmljZUQiLCJzb3J0QnlSYXRpbmdBIiwic29ydEJ5UmF0aW5nRCIsInNvcnRCeURpc2NvdW50QSIsInNvcnRCeURpc2NvdW50RCIsInNvcnRCeUluU3RvY2tBIiwic29ydEJ5SW5TdG9ja0QiLCJkaXNhYmxlZCIsIlNlbGVjdFRtcCIsInNvcnRJdGVtcyIsIm9wdGlvbiIsInNvcnQiLCJiIiwiUGFnZSIsImhlYWRlclRpdGxlIiwiaW5uZXJIVE1MIiwiYWRkT3B0aW9ucyIsImZsYWciLCJvYmoiLCJzcGxpY2UiLCJwdXNoIiwiY2hlY2tBbGxJdGVtcyIsInNlbGVjdGVkVHlwZXMiLCJ2YXJpYWJsZSIsImkiLCJyZXNvbHZlIiwidGh1bWJuYWlsIiwicHJpY2VGcm9tUXVlcnkiLCJzZWxlY3RTb3J0RnJvbVF1ZXJ5Iiwic3RvY2tGcm9tUXVlcnkiLCJzZWFyY2hGcm9tUXVlcnkiLCJnZXRCcmFuZHMiLCJBcnJheSIsImV4aXN0QnJhbmRzIiwiZnJvbSIsImdldENhdGVnb3JpZXMiLCJleGlzdENhdGVnb3JpZXMiLCJhZGRGaWx0ZXJzRnJvbVF1ZXJ5IiwiZmlsdGVycyIsInNlYXJjaCIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwiYWRkVG9RdWVyeSIsIm5ld09iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInIiLCJ0b1N0cmluZyIsInVybEZvckZpbHRlcnMiLCJzdWJzdHJpbmciLCJhcnIiLCJuZXdBcnIiLCJtYXAiLCJfIiwicmVnZXgiLCJyZXBsYWNlIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsInNlbGVjdGVkUG9pbnRzIiwiZ2V0QWxsUHJvZHVjdHMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJBcHAiLCJhcHAiLCJydW4iLCJNYWluUGFnZSIsIkJhc2tldFBhZ2UiLCJJdGVtUGFnZSIsIk5vdEZvdW5kUGFnZSIsIlBhZ2VJZCIsImluaXRpYWxQYWdlIiwiaGVhZGVyIiwicmVuZGVyTmV3UGFnZSIsImVuYWJsZVJvdXRlQ2hhbmdlIiwiaWRQYWdlIiwiY3VycmVudFBhZ2VIVE1MIiwiZGVmYXVsdFBhZ2VJZCIsIlN0b3JlUGFnZSIsInBhZ2VIVE1MIiwiYm9keSIsImNyZWF0ZUhlYWRlclRpdGxlIiwiVGV4dE9iamVjdCIsIm1haW5UaXRsZSIsIm51bWJlck9mSXRlbSIsIm1haW5QYWdlIiwicHJpY2VSYW5nZSIsInN0b2NrUmFuZ2UiLCJwcm9kdWN0UGFnZSIsInNvcnRQcm9kdWN0cyIsInNlbGVjdCIsImZvdW5kIiwicHJvZHVjdExpc3QiLCJmaWx0ZXJCdXR0b25zIiwiYnJhbmRzIiwiYnJhbmROYW1lIiwiU2V0IiwiY2F0ZWdvcmllcyJdLCJzb3VyY2VSb290IjoiIn0=