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
  function Item(parent, thisClass, title, category, brand, price, discountPercentage, rating, stock, images) {
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
                productItem = new _item__WEBPACK_IMPORTED_MODULE_8__["default"](catalog, 'item', item.title, item.category, item.brand, item.price, item.discountPercentage, item.rating, item.stock, item.images[0]);
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
      } else if (idPage === PageId.ItemPage) {
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 2951);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 1976);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 7591);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 9492);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 7597);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4649);
/* harmony import */ var _core_templates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/templates/page */ 5175);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ItemPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ItemPage, _Page);
  var _super = _createSuper(ItemPage);
  function ItemPage(id) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemPage);
    return _super.call(this, id);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemPage, [{
    key: "render",
    value: function render() {
      var title = this.createHeaderTitle(ItemPage.TextObject.mainTitle);
      this.container.append(title);
      return this.container;
    }
  }]);
  return ItemPage;
}(_core_templates_page__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(ItemPage, "TextObject", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguN2MyZTk4NmQyNDRiNTkyOTgyOTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtRDtBQUFBLElBRTdDQyxNQUFNO0VBQUE7RUFBQTtFQUNWLGdCQUFZQyxNQUFtQixFQUFFQyxRQUFnQixFQUFFO0lBQUE7SUFBQSx5QkFDM0NELE1BQU0sRUFBRSxRQUFRLFlBQUtDLFFBQVE7RUFDckM7RUFBQztBQUFBLEVBSGtCSCw4REFBUTtBQU03QixpRUFBZUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7QUFDbUM7QUFDSztBQUN4Qzs7QUFFQTtBQUFBLElBRU1LLElBQUk7RUFBQTtFQUFBO0VBR1IsY0FBWUosTUFBbUIsRUFBRUssR0FBVyxFQUFFO0lBQUE7SUFBQTtJQUM1QywwQkFBTUwsTUFBTSxFQUFFLGlDQUFpQyxFQUFFO01BQy9DTSxJQUFJLEVBQUUsVUFBVTtNQUNoQkMsS0FBSyxZQUFLRixHQUFHLENBQUU7TUFDZkcsRUFBRSxFQUFFLFVBQUdILEdBQUcsRUFBR0ksV0FBVztJQUMxQixDQUFDO0lBRUQsTUFBS0MsVUFBVSxDQUFDVixNQUFNLEVBQUVLLEdBQUcsQ0FBQztJQUU1QixJQUFJRCxJQUFJLENBQUNPLE9BQU8sSUFBSVAsSUFBSSxDQUFDTyxPQUFPLENBQUNDLE9BQU8sQ0FBQ1AsR0FBRyxDQUFDSSxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNoRUksT0FBTyxDQUFDQyxHQUFHLGdCQUFTVCxHQUFHLEVBQUc7TUFDMUIsTUFBS1UsT0FBTyxDQUFDSixPQUFPLEdBQUcsSUFBSTtJQUM3QjtJQUFDO0VBQ0g7RUFBQztJQUFBO0lBQUEsT0FFRCxvQkFBV0ssS0FBa0IsRUFBRVQsS0FBYSxFQUFFO01BQzVDLElBQU1VLEVBQUUsR0FBRyxJQUFJZixrREFBTyxDQUFDYyxLQUFLLEVBQUVULEtBQUssRUFBRSxPQUFPLENBQUM7TUFFN0NVLEVBQUUsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2I7RUFBQztFQUFBO0FBQUEsRUF0QmdCZixvREFBVztBQXlCOUIsaUVBQWVDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaENiRCxXQUFXO0VBR2YscUJBQ0VILE1BQW1CLEVBQ25CbUIsUUFBZ0IsRUFDaEJDLElBQThCLEVBQzlCO0lBQUE7SUFBQTtJQUNBLElBQUksQ0FBQ0wsT0FBTyxHQUFHTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQXFCO0lBRWxFLElBQUksT0FBT0gsUUFBUSxLQUFLLFFBQVEsRUFBRSw2QkFBSSxDQUFDSixPQUFPLENBQUNRLFNBQVMsRUFBQ0MsR0FBRyxtSEFBSUwsUUFBUSxDQUFDTSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUM7SUFFcEYsSUFBSXpCLE1BQU0sRUFBRUEsTUFBTSxDQUFDMEIsTUFBTSxDQUFDLElBQUksQ0FBQ1gsT0FBTyxDQUFDO0lBRXZDLElBQUlLLElBQUksRUFBRTtNQUNSLG1DQUEyQk8sTUFBTSxDQUFDQyxPQUFPLENBQUNSLElBQUksQ0FBQyxxQ0FBRTtRQUE1QztVQUFPUyxHQUFHO1VBQUV0QixLQUFLO1FBQ3BCLElBQUksQ0FBQ1EsT0FBTyxDQUFDZSxZQUFZLENBQUNELEdBQUcsRUFBRXRCLEtBQUssQ0FBVztNQUNqRDtJQUNGO0VBQ0Y7RUFBQztJQUFBO0lBQUEsT0FFRCx5QkFBc0I7TUFDcEIsSUFBSSxDQUFDUSxPQUFPLENBQUNnQixNQUFNLEVBQUU7SUFDdkI7RUFBQztJQUFBO0lBQUEsT0FFRCxrQkFBc0I7TUFDcEIsT0FBTyxJQUFJLENBQUNoQixPQUFPO0lBQ3JCO0VBQUM7RUFBQTtBQUFBO0FBR0gsaUVBQWVaLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnlCO0FBQUEsSUFFN0M2QixHQUFHO0VBQUE7RUFBQTtFQUNQLGFBQVloQyxNQUFtQixFQUFFQyxRQUFnQixFQUFFO0lBQUE7SUFBQSx5QkFDM0NELE1BQU0sRUFBRSxLQUFLLFlBQUtDLFFBQVE7RUFDbEM7RUFBQztBQUFBLEVBSGVILDhEQUFRO0FBTTFCLGlFQUFla0MsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmlDO0FBQ1g7QUFDTDtBQUNuQztBQUMyRDtBQUFBLElBRXJERyxNQUFNO0VBQUE7RUFBQTtFQUdWLGdCQUFZQyxPQUFvQixFQUFFOUIsSUFBWSxFQUFFK0IsS0FBd0IsRUFBRTtJQUFBO0lBQUE7SUFDeEUsMEJBQU1ELE9BQU8sRUFBRSxLQUFLLEVBQUU5QixJQUFJO0lBQzFCLE1BQUtBLElBQUksR0FBR0EsSUFBSTtJQUNoQixNQUFLZ0MsS0FBSyxDQUFDRCxLQUFLLENBQUM7SUFBQztFQUNwQjtFQUFDO0lBQUE7SUFBQTtNQUFBLDBNQUVELGlCQUF3Q3BCLEVBQVU7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNoRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Z0JBQ1VzQixRQUE0QixHQUFHbEIsUUFBUSxDQUFDbUIsYUFBYSxDQUFDLFdBQVcsQ0FBQztnQkFDbEVDLEtBQUssR0FBRyxJQUFJUixvREFBSyxDQUFDTSxRQUFRLEVBQUcsVUFBVSxDQUFDO2dCQUN4Q0csUUFBUSxHQUFHLElBQUl0QywwREFBSSxDQUFDcUMsS0FBSyxDQUFDMUIsT0FBTyxFQUFFRSxFQUFFLENBQUM7Z0JBRTVDeUIsUUFBUSxDQUFDeEIsTUFBTSxFQUFFO2dCQUNqQnVCLEtBQUssQ0FBQ3ZCLE1BQU0sRUFBRTtnQkFDZHdCLFFBQVEsQ0FBQzNCLE9BQU8sQ0FBQzRCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO2tCQUNoRFQsb0ZBQStCLENBQUMsVUFBVSxFQUFFUSxRQUFRLENBQUMzQixPQUFPLENBQUNSLEtBQUssQ0FBQztnQkFDckUsQ0FBQyxDQUFDO2NBQUM7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBQ0o7TUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO0VBQUE7SUFBQTtJQUFBO01BQUEsc01BRUQsa0JBQW9DVSxFQUFVO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDdEM0QixLQUF5QixHQUFHeEIsUUFBUSxDQUFDbUIsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDNURDLEtBQUssR0FBRyxJQUFJUixvREFBSyxDQUFDWSxLQUFLLEVBQUcsVUFBVSxDQUFDO2dCQUNyQ0gsUUFBUSxHQUFHLElBQUl0QywwREFBSSxDQUFDcUMsS0FBSyxDQUFDMUIsT0FBTyxFQUFFRSxFQUFFLENBQUM7Z0JBRTVDeUIsUUFBUSxDQUFDeEIsTUFBTSxFQUFFO2dCQUNqQnVCLEtBQUssQ0FBQ3ZCLE1BQU0sRUFBRTtnQkFDZHdCLFFBQVEsQ0FBQzNCLE9BQU8sQ0FBQzRCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO2tCQUNoRDtrQkFDQVQsb0ZBQStCLENBQUMsT0FBTyxFQUFFUSxRQUFRLENBQUMzQixPQUFPLENBQUNSLEtBQUssQ0FBQztnQkFDbEUsQ0FBQyxDQUFDO2NBQUM7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBQ0o7TUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO0VBQUE7SUFBQTtJQUFBLE9BRUQsZUFBYzhCLEtBQXdCLEVBQUU7TUFBQTtNQUN0QyxJQUFJLElBQUksQ0FBQy9CLElBQUksS0FBSyxVQUFVLEVBQUU7UUFDNUIrQixLQUFLLENBQ0ZTLElBQUksQ0FBQyxVQUFDUCxRQUFRLEVBQUs7VUFDbEJBLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDLE1BQUksQ0FBQ0MseUJBQXlCLENBQUM7UUFDbEQsQ0FBQyxDQUFDO01BQ047TUFFQSxJQUFJLElBQUksQ0FBQzFDLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDekIrQixLQUFLLENBQ0ZTLElBQUksQ0FBQyxVQUFDRCxLQUFLLEVBQUs7VUFDZkEsS0FBSyxDQUFDRSxPQUFPLENBQUMsTUFBSSxDQUFDRSxxQkFBcUIsQ0FBQztRQUMzQyxDQUFDLENBQUM7TUFDTjtJQUNGO0VBQUM7RUFBQTtBQUFBLEVBdERrQm5ELDhEQUFRO0FBeUQ3QixpRUFBZXFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRDRDO0FBQzNCO0FBQ0E7QUFDZTtBQUNSO0FBQ2M7QUFDeEI7QUFDRDtBQUUzQixTQUFlc0IsY0FBYztFQUFBO0FBQUE7QUFtQ25DO0VBQUEsMkxBbkNNO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUNDQyxRQUFRLEdBQUdGLGdFQUFpQixFQUFFO1lBQUEsY0FDTkksT0FBTztZQUFBO1lBQUEsT0FBV0YsUUFBUTtVQUFBO1lBQUE7WUFBQTtZQUFBLG1CQUFsQkcsR0FBRztVQUFBO1lBQW5DQyxjQUFjLGlCQUF1Q0MsTUFBTTtZQUFBO1lBQUEsT0FDNUNQLG1FQUFvQixFQUFFO1VBQUE7WUFBckNTLE1BQU07WUFBQTtZQUFBLE9BQ1FULG1FQUFvQixFQUFFO1VBQUE7WUFBcENXLEtBQUs7WUFDTEMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtZQUMxQkMsWUFBWSxHQUFHSixHQUFHLENBQUN4RCxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQUEsZ0JBQ3BCc0MsZ0ZBQVksRUFBRSxFQUFqQ0wsS0FBSyxpQkFBTEEsS0FBSyxFQUFFTixRQUFRLGlCQUFSQSxRQUFRO1lBQ2hCa0MsUUFBUSxHQUFHTCxHQUFHLENBQUNNLEtBQUssQ0FBQyxDQUFDLEVBQUVGLFlBQVksQ0FBQztZQUUzQ2pDLFFBQVEsQ0FBQ29DLE1BQU0sQ0FBQzlCLEtBQUssQ0FBQyxDQUFDK0IsTUFBTSxDQUFDLFVBQUMzRCxFQUFFO2NBQUEsT0FBS0EsRUFBRSxLQUFLLEVBQUU7WUFBQSxFQUFDLENBQUM4QixPQUFPLENBQUMsVUFBQzlCLEVBQUUsRUFBSztjQUMvRCxJQUFNeUIsUUFBUSxHQUFxQnJCLFFBQVEsQ0FBQ3dELGNBQWMsV0FBSTVELEVBQUUsRUFBRztjQUVuRXlCLFFBQVEsQ0FBRS9CLE9BQU8sR0FBRyxLQUFLO1lBQzNCLENBQUMsQ0FBQztZQUNGMEQsTUFBTSxDQUFDUyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUVOLFFBQVEsQ0FBQztZQUMvRHRCLCtEQUFlLEdBQUcsYUFBYTtZQUMvQkEsa0VBQWtCLEdBQUcsRUFBRTtZQUN2QkMsK0RBQWUsR0FBRyxFQUFFO1lBQ3BCQSxxRUFBcUIsR0FBRyxFQUFFO1lBQzFCQyxpRkFBNEIsR0FBRyxFQUFFO1lBQ2pDQywwRUFBMkIsR0FBRyxHQUFHO1lBQ2pDQSw4RUFBK0IsYUFBTVcsTUFBTSxDQUFDcUIsR0FBRyxPQUFJO1lBQ25EaEMsMEVBQTJCLEdBQUcsUUFBUTtZQUN0Q0EsOEVBQStCLGFBQU1XLE1BQU0sQ0FBQ3dCLEdBQUcsT0FBSTtZQUNuRG5DLDBFQUEyQixHQUFHLEdBQUc7WUFDakNBLDhFQUErQixhQUFNYSxLQUFLLENBQUNtQixHQUFHLENBQUU7WUFDaERoQywwRUFBMkIsR0FBRyxRQUFRO1lBQ3RDQSw4RUFBK0IsYUFBTWEsS0FBSyxDQUFDc0IsR0FBRyxDQUFFO1lBQ2hEdkQscUZBQWlDLEdBQUcsRUFBRTtZQUN0Q0Esa0ZBQThCLEdBQUcsRUFBRTtZQUNuQ0Esa0ZBQThCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1lBQzVDQSxrRkFBOEIsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7WUFDNUNtQixzRUFBaUIsQ0FBQ0ssUUFBUSxDQUFDO1lBQzNCSCwrREFBZ0IsQ0FBQ08sY0FBYyxDQUFDO1VBQUM7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FDbEM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDcUM7QUFDVDtBQUNvQjtBQUFBLElBRTNDbUMsYUFBYTtFQUFBO0VBQUE7RUFDakIsdUJBQVlqRyxNQUFtQixFQUFFbUIsUUFBZ0IsRUFBRTtJQUFBO0lBQUE7SUFDakQsMEJBQU1uQixNQUFNLEVBQUVtQixRQUFRO0lBRXRCLE1BQUttQixLQUFLLEVBQUU7SUFBQztFQUNmO0VBQUM7SUFBQTtJQUFBO01BQUEsc0xBRUQ7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNRNEQsS0FBSyxHQUFHLElBQUluRyxzREFBTSxDQUFDLElBQUksQ0FBQ2dCLE9BQU8sRUFBRSw4Q0FBOEMsQ0FBQztnQkFDaEZvRixJQUFJLEdBQUcsSUFBSXBHLHNEQUFNLENBQUMsSUFBSSxDQUFDZ0IsT0FBTyxFQUFFLDZDQUE2QyxDQUFDO2dCQUVwRm1GLEtBQUssQ0FBQ25GLE9BQU8sQ0FBQ29FLFdBQVcsR0FBRyxPQUFPO2dCQUNuQ2dCLElBQUksQ0FBQ3BGLE9BQU8sQ0FBQ29FLFdBQVcsR0FBRyxXQUFXO2dCQUV0Q2UsS0FBSyxDQUFDbkYsT0FBTyxDQUFDcUYsT0FBTyxHQUFHLFNBQVNDLEtBQUssR0FBRztrQkFDdkM1QyxnRUFBYyxFQUFFO2dCQUNsQixDQUFDO2dCQUVEMEMsSUFBSSxDQUFDcEYsT0FBTyxDQUFDcUYsT0FBTyxHQUFHLFNBQVNDLEtBQUssR0FBRztrQkFDdENoQyxNQUFNLENBQUNpQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDbkMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQztnQkFDNUQsQ0FBQztnQkFFRCxJQUFJLENBQUN4RCxPQUFPLENBQUNXLE1BQU0sQ0FBQ3dFLEtBQUssQ0FBQ25GLE9BQU8sRUFBRW9GLElBQUksQ0FBQ3BGLE9BQU8sQ0FBQztjQUFDO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQUNsRDtNQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUEsRUF2QnlCaUIsZ0RBQUc7QUEwQi9CLGlFQUFlaUUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkM7QUFFOEI7QUFDekI7QUFBQSxJQUU1QjFDLEtBQUs7RUFBQTtFQUFBO0VBR1QsZUFBWXZELE1BQW1CLEVBQUVtQixRQUFnQixFQUFFO0lBQUE7SUFBQTtJQUNqRCwwQkFBTW5CLE1BQU0sRUFBRW1CLFFBQVE7SUFDdEJvQyxLQUFLLENBQUMyQixJQUFJLEdBQUcsTUFBS25FLE9BQU87SUFDekIsTUFBS3VCLEtBQUssRUFBRTtJQUFDO0VBQ2Y7RUFBQztJQUFBO0lBQUE7TUFBQSxzTEFFRDtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BQzJDLElBQUksQ0FBQ21FLFNBQVMsRUFBRTtjQUFBO2dCQUFBO2dCQUF6RGxELEtBQUssQ0FBQzJCLElBQUksQ0FBQ0MsV0FBVztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQUN2QjtNQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQSwwTEFFRDtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsZUFDbUN2QixPQUFPO2dCQUFBO2dCQUFBLE9BQVkxQixpRkFBNkI7Y0FBQTtnQkFBQTtnQkFBN0V3QixRQUEwQixnQkFBV0csR0FBRztnQkFBQTtnQkFBQSxPQUVqQ0gsUUFBUTtjQUFBO2dCQUFBLDhCQUFFLENBQUMsRUFBRWlELEtBQUs7Z0JBQUEsdUJBQUssT0FBTztrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUN0Qm5ELGdFQUFpQixFQUFFO2NBQUE7Z0JBQXBDRSxRQUFRO2dCQUFBLGVBQ0dFLE9BQU87Z0JBQUE7Z0JBQUEsT0FBV0YsUUFBUTtjQUFBO2dCQUFBO2dCQUFyQ0EsUUFBUSxnQkFBV0csR0FBRztjQUFBO2dCQUFBO2dCQUFBLE9BR1ZILFFBQVE7Y0FBQTtnQkFBQSxpREFBRUssTUFBTTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQUMvQjtNQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTtJQUFBO0lBQUEsT0FFRCxvQkFBa0I2QyxDQUFTLEVBQUU7TUFDM0JyRCxLQUFLLENBQUMyQixJQUFJLENBQUNDLFdBQVcsb0JBQWF5QixDQUFDLENBQUU7SUFDeEM7RUFBQztFQUFBO0FBQUEsRUExQmlCNUUsZ0RBQUc7QUE2QnZCLGlFQUFldUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZ0M7QUFFcEQsSUFBTXVELE9BQU8sR0FBRyxDQUNkO0VBQ0V0RyxFQUFFLEVBQUUsWUFBWTtFQUNoQnVHLElBQUksRUFBRTtBQUNSLENBQUMsRUFDRDtFQUNFdkcsRUFBRSxFQUFFLGFBQWE7RUFDakJ1RyxJQUFJLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsQ0FDRDtBQUFDLElBRUlDLE1BQU07RUFBQTtFQUFBO0VBQ1YsZ0JBQVlDLE9BQWUsRUFBRUMsU0FBaUIsRUFBRTtJQUFBO0lBQUEseUJBQ3hDRCxPQUFPLEVBQUVDLFNBQVM7RUFDMUI7RUFBQztJQUFBO0lBQUEsT0FFRCw2QkFBb0I7TUFDbEIsSUFBTUMsV0FBVyxHQUFHOUYsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BRWpEd0YsT0FBTyxDQUFDL0QsT0FBTyxDQUFDLFVBQUNxRSxNQUFNLEVBQUs7UUFDMUJ2RyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3NHLE1BQU0sQ0FBQzVHLEVBQUUsQ0FBQztRQUN0QixJQUFNNkcsVUFBVSxHQUFHaEcsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBRTlDK0YsVUFBVSxDQUFDOUMsSUFBSSxjQUFPNkMsTUFBTSxDQUFDNUcsRUFBRSxDQUFFO1FBQ2pDNkcsVUFBVSxDQUFDQyxTQUFTLEdBQUdGLE1BQU0sQ0FBQ0wsSUFBSTtRQUNsQ0ksV0FBVyxDQUFDekYsTUFBTSxDQUFDMkYsVUFBVSxDQUFDO01BQ2hDLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ0UsU0FBUyxDQUFDN0YsTUFBTSxDQUFDeUYsV0FBVyxDQUFDO0lBQ3BDO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQVM7TUFDUCxJQUFJLENBQUNLLGlCQUFpQixFQUFFO01BRXhCLE9BQU8sSUFBSSxDQUFDRCxTQUFTO0lBQ3ZCO0VBQUM7RUFBQTtBQUFBLEVBdkJrQlYsa0VBQVM7QUF5QjlCLGlFQUFlRyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUM4QjtBQUFBLElBRTdDL0UsS0FBSztFQUFBO0VBQUE7RUFDVCxlQUFZakMsTUFBbUIsRUFBRXlILFVBQWtCLEVBQUU7SUFBQTtJQUFBLHlCQUM3Q3pILE1BQU0sRUFBRSxPQUFPLFlBQUt5SCxVQUFVO0VBQ3RDO0VBQUM7QUFBQSxFQUhpQjNILDhEQUFRO0FBTTVCLGlFQUFlbUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JTO0FBQUEsSUFFdkJ5RixJQUFJO0VBQUE7RUFBQTtFQW1CUixjQUNFMUgsTUFBbUIsRUFDbkIySCxTQUFpQixFQUNqQmhCLEtBQWEsRUFDYnBFLFFBQWdCLEVBQ2hCTSxLQUFhLEVBQ2JrRCxLQUFhLEVBQ2I2QixrQkFBMEIsRUFDMUJDLE1BQWMsRUFDZDFELEtBQWEsRUFDYjtJQUFBO0lBQUE7SUFDQSwwQkFBTW5FLE1BQU0sWUFBSzJILFNBQVM7SUFDMUIsTUFBSzNILE1BQU0sR0FBR0EsTUFBTTtJQUNwQixNQUFLMkgsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLE1BQUtoQixLQUFLLEdBQUdBLEtBQUs7SUFDbEIsTUFBS3BFLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixNQUFLTSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsTUFBS2tELEtBQUssR0FBR0EsS0FBSztJQUNsQixNQUFLNkIsa0JBQWtCLEdBQUdBLGtCQUFrQjtJQUM1QyxNQUFLQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsTUFBSzFELEtBQUssR0FBR0EsS0FBSztJQUNsQixNQUFLMkQsVUFBVSxFQUFFO0lBQUM7RUFDcEI7RUFBQztJQUFBO0lBQUEsT0FFRCxzQkFBYTtNQUNYLElBQU12RixRQUFRLEdBQUcsSUFBSVAsZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyxnQkFBYTtNQUNyRSxJQUFNSSxhQUFhLEdBQUcsSUFBSS9GLGdEQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxZQUFLLElBQUksQ0FBQzRHLFNBQVMscUJBQWtCO01BQy9FLElBQU1LLGVBQWUsR0FBRyxJQUFJaEcsZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyx3QkFBcUI7TUFDcEYsSUFBTTlFLEtBQUssR0FBRyxJQUFJYixnREFBRyxDQUFDLElBQUksQ0FBQ2pCLE9BQU8sWUFBSyxJQUFJLENBQUM0RyxTQUFTLGFBQVU7TUFDL0QsSUFBTU0sVUFBVSxHQUFHLElBQUlqRyxnREFBRyxDQUFDLElBQUksQ0FBQ2pCLE9BQU8sWUFBSyxJQUFJLENBQUM0RyxTQUFTLGtCQUFlO01BQ3pFLElBQU1PLFlBQVksR0FBRyxJQUFJbEcsZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyxxQkFBa0I7TUFDOUUsSUFBTTVCLEtBQUssR0FBRyxJQUFJL0QsZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyxhQUFVO01BQy9ELElBQU1RLFVBQVUsR0FBRyxJQUFJbkcsZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyxrQkFBZTtNQUN6RSxJQUFNUyxZQUFZLEdBQUcsSUFBSXBHLGdEQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxZQUFLLElBQUksQ0FBQzRHLFNBQVMscUJBQWtCO01BQzlFLElBQU1VLFFBQVEsR0FBRyxJQUFJckcsZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyxnQkFBYTtNQUNyRSxJQUFNVyxhQUFhLEdBQUcsSUFBSXRHLGdEQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxZQUFLLElBQUksQ0FBQzRHLFNBQVMscUJBQWtCO01BQy9FLElBQU1ZLGVBQWUsR0FBRyxJQUFJdkcsZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyx3QkFBcUI7TUFDcEYsSUFBTUUsTUFBTSxHQUFHLElBQUk3RixnREFBRyxDQUFDLElBQUksQ0FBQ2pCLE9BQU8sWUFBSyxJQUFJLENBQUM0RyxTQUFTLGNBQVc7TUFDakUsSUFBTWEsV0FBVyxHQUFHLElBQUl4RyxnREFBRyxDQUFDLElBQUksQ0FBQ2pCLE9BQU8sWUFBSyxJQUFJLENBQUM0RyxTQUFTLG1CQUFnQjtNQUMzRSxJQUFNYyxhQUFhLEdBQUcsSUFBSXpHLGdEQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxZQUFLLElBQUksQ0FBQzRHLFNBQVMsc0JBQW1CO01BQ2hGLElBQU14RCxLQUFLLEdBQUcsSUFBSW5DLGdEQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxZQUFLLElBQUksQ0FBQzRHLFNBQVMsYUFBVTtNQUMvRCxJQUFNZSxVQUFVLEdBQUcsSUFBSTFHLGdEQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxZQUFLLElBQUksQ0FBQzRHLFNBQVMsa0JBQWU7TUFDekUsSUFBTWdCLFlBQVksR0FBRyxJQUFJM0csZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyxxQkFBa0I7TUFFOUVJLGFBQWEsQ0FBQ2hILE9BQU8sQ0FBQ29FLFdBQVcsR0FBRyxZQUFZO01BQ2hENkMsZUFBZSxDQUFDakgsT0FBTyxDQUFDb0UsV0FBVyxHQUFHLElBQUksQ0FBQzVDLFFBQVE7TUFDbkQwRixVQUFVLENBQUNsSCxPQUFPLENBQUNvRSxXQUFXLEdBQUcsU0FBUztNQUMxQytDLFlBQVksQ0FBQ25ILE9BQU8sQ0FBQ29FLFdBQVcsR0FBRyxJQUFJLENBQUN0QyxLQUFLO01BQzdDc0YsVUFBVSxDQUFDcEgsT0FBTyxDQUFDb0UsV0FBVyxHQUFHLFNBQVM7TUFDMUNpRCxZQUFZLENBQUNySCxPQUFPLENBQUNvRSxXQUFXLGFBQU0sSUFBSSxDQUFDWSxLQUFLLENBQUU7TUFDbER1QyxhQUFhLENBQUN2SCxPQUFPLENBQUNvRSxXQUFXLEdBQUcsWUFBWTtNQUNoRG9ELGVBQWUsQ0FBQ3hILE9BQU8sQ0FBQ29FLFdBQVcsYUFBTSxJQUFJLENBQUN5QyxrQkFBa0IsT0FBSTtNQUNwRVksV0FBVyxDQUFDekgsT0FBTyxDQUFDb0UsV0FBVyxHQUFHLFVBQVU7TUFDNUNzRCxhQUFhLENBQUMxSCxPQUFPLENBQUNvRSxXQUFXLGFBQU0sSUFBSSxDQUFDMEMsTUFBTSxDQUFFO01BQ3BEYSxVQUFVLENBQUMzSCxPQUFPLENBQUNvRSxXQUFXLEdBQUcsU0FBUztNQUMxQ3dELFlBQVksQ0FBQzVILE9BQU8sQ0FBQ29FLFdBQVcsYUFBTSxJQUFJLENBQUNoQixLQUFLLENBQUU7TUFDbEQ1QixRQUFRLENBQUN4QixPQUFPLENBQUNXLE1BQU0sQ0FBQ3FHLGFBQWEsQ0FBQ2hILE9BQU8sRUFBRWlILGVBQWUsQ0FBQ2pILE9BQU8sQ0FBQztNQUN2RThCLEtBQUssQ0FBQzlCLE9BQU8sQ0FBQ1csTUFBTSxDQUFDdUcsVUFBVSxDQUFDbEgsT0FBTyxFQUFFbUgsWUFBWSxDQUFDbkgsT0FBTyxDQUFDO01BQzlEZ0YsS0FBSyxDQUFDaEYsT0FBTyxDQUFDVyxNQUFNLENBQUN5RyxVQUFVLENBQUNwSCxPQUFPLEVBQUVxSCxZQUFZLENBQUNySCxPQUFPLENBQUM7TUFDOURzSCxRQUFRLENBQUN0SCxPQUFPLENBQUNXLE1BQU0sQ0FBQzRHLGFBQWEsQ0FBQ3ZILE9BQU8sRUFBRXdILGVBQWUsQ0FBQ3hILE9BQU8sQ0FBQztNQUN2RThHLE1BQU0sQ0FBQzlHLE9BQU8sQ0FBQ1csTUFBTSxDQUFDOEcsV0FBVyxDQUFDekgsT0FBTyxFQUFFMEgsYUFBYSxDQUFDMUgsT0FBTyxDQUFDO01BQ2pFb0QsS0FBSyxDQUFDcEQsT0FBTyxDQUFDVyxNQUFNLENBQUNnSCxVQUFVLENBQUMzSCxPQUFPLEVBQUU0SCxZQUFZLENBQUM1SCxPQUFPLENBQUM7TUFDOUQsSUFBSSxDQUFDQSxPQUFPLENBQUNXLE1BQU0sQ0FDakJhLFFBQVEsQ0FBQ3hCLE9BQU8sRUFDaEI4QixLQUFLLENBQUM5QixPQUFPLEVBQ2JnRixLQUFLLENBQUNoRixPQUFPLEVBQ2JzSCxRQUFRLENBQUN0SCxPQUFPLEVBQ2hCOEcsTUFBTSxDQUFDOUcsT0FBTyxFQUNkb0QsS0FBSyxDQUFDcEQsT0FBTyxDQUNkO0lBQ0g7RUFBQztFQUFBO0FBQUEsRUF6RmdCaUIsZ0RBQUc7QUE0RnRCLGlFQUFlMEYsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGZ0M7QUFDdEI7QUFDSDtBQUNZO0FBQUEsSUFFaENrQixJQUFJO0VBQUE7RUFBQTtFQXFCUixjQUNFNUksTUFBbUIsRUFDbkIySCxTQUFpQixFQUNqQmhCLEtBQWEsRUFDYnBFLFFBQWdCLEVBQ2hCTSxLQUFhLEVBQ2JrRCxLQUFhLEVBQ2I2QixrQkFBMEIsRUFDMUJDLE1BQWMsRUFDZDFELEtBQWEsRUFDYjBFLE1BQWMsRUFDZDtJQUFBO0lBQUE7SUFDQSwwQkFBTTdJLE1BQU0sRUFBRSxLQUFLLFlBQUsySCxTQUFTO0lBQ2pDLE1BQUszSCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsTUFBSzJILFNBQVMsR0FBR0EsU0FBUztJQUMxQixNQUFLaEIsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLE1BQUtwRSxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsTUFBS00sS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLE1BQUtrRCxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsTUFBSzZCLGtCQUFrQixHQUFHQSxrQkFBa0I7SUFDNUMsTUFBS0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLE1BQUsxRCxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsTUFBSzBFLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixNQUFLZixVQUFVLEVBQUU7SUFBQztFQUNwQjtFQUFDO0lBQUE7SUFBQSxPQUVELHNCQUFxQjtNQUNuQixJQUFNZ0IsU0FBUyxHQUFHLElBQUk5RyxnREFBRyxDQUFDLElBQUksQ0FBQ2pCLE9BQU8sWUFBSyxJQUFJLENBQUM0RyxTQUFTLGFBQVU7TUFFbkUsSUFBSSxDQUFDNUcsT0FBTyxDQUFDZ0ksS0FBSyxDQUFDQyxlQUFlLGlCQUFVLElBQUksQ0FBQ0gsTUFBTSxNQUFHO01BQzFEQyxTQUFTLENBQUMvSCxPQUFPLENBQUNvRSxXQUFXLEdBQUcsSUFBSSxDQUFDd0IsS0FBSztNQUMxQyxJQUFNc0MsUUFBUSxHQUFHLElBQUl2Qiw2Q0FBSSxDQUN2QixJQUFJLENBQUMzRyxPQUFPLFlBQ1QsSUFBSSxDQUFDNEcsU0FBUyxHQUNqQixJQUFJLENBQUNoQixLQUFLLEVBQ1YsSUFBSSxDQUFDcEUsUUFBUSxFQUNiLElBQUksQ0FBQ00sS0FBSyxFQUNWLElBQUksQ0FBQ2tELEtBQUssRUFDVixJQUFJLENBQUM2QixrQkFBa0IsRUFDdkIsSUFBSSxDQUFDQyxNQUFNLEVBQ1gsSUFBSSxDQUFDMUQsS0FBSyxDQUNYO01BQ0QsSUFBTStFLFNBQVMsR0FBRyxJQUFJbkosc0RBQU0sQ0FBQyxJQUFJLENBQUNnQixPQUFPLFlBQUssSUFBSSxDQUFDNEcsU0FBUyxrQkFBZTtNQUUzRXVCLFNBQVMsQ0FBQ25JLE9BQU8sQ0FBQ29FLFdBQVcsR0FBRyxhQUFhO01BRTdDLElBQUksQ0FBQ3BFLE9BQU8sQ0FBQ1csTUFBTSxDQUFDb0gsU0FBUyxDQUFDL0gsT0FBTyxFQUFFa0ksUUFBUSxDQUFDbEksT0FBTyxFQUFFbUksU0FBUyxDQUFDbkksT0FBTyxDQUFDO0lBQzdFO0VBQUM7RUFBQTtBQUFBLEVBcEVnQmpCLDhEQUFRO0FBdUUzQixpRUFBZThJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RWdDO0FBQ3pCO0FBQUEsSUFHcEJ2RixXQUFXO0VBQUE7RUFBQTtFQUdmLHFCQUFZckQsTUFBbUIsRUFBRTJILFNBQWlCLEVBQUV0RixLQUF1QixFQUFFO0lBQUE7SUFBQTtJQUMzRSwwQkFBTXJDLE1BQU0sRUFBRSxLQUFLLEVBQUUySCxTQUFTO0lBQzlCdEUsV0FBVyxDQUFDNkIsSUFBSSxHQUFHLE1BQUtuRSxPQUFPO0lBQy9Cc0MsV0FBVyxDQUFDZixLQUFLLENBQUNELEtBQUssQ0FBQztJQUFDO0VBQzNCO0VBQUM7SUFBQTtJQUFBO01BQUEsZ01BRUQsaUJBQTZCOEcsSUFBVztRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ2hDQyxPQUEyQixHQUFHL0gsUUFBUSxDQUFDbUIsYUFBYSxDQUFDLGVBQWUsQ0FBQztnQkFDckU2RyxXQUFXLEdBQUcsSUFBSVQsNkNBQUksQ0FDMUJRLE9BQU8sRUFDUCxNQUFNLEVBQ05ELElBQUksQ0FBQ3hDLEtBQUssRUFDVndDLElBQUksQ0FBQzVHLFFBQVEsRUFDYjRHLElBQUksQ0FBQ3RHLEtBQUssRUFDVnNHLElBQUksQ0FBQ3BELEtBQUssRUFDVm9ELElBQUksQ0FBQ3ZCLGtCQUFrQixFQUN2QnVCLElBQUksQ0FBQ3RCLE1BQU0sRUFDWHNCLElBQUksQ0FBQ2hGLEtBQUssRUFDVmdGLElBQUksQ0FBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUNmO2dCQUVETyxPQUFPLENBQUUxSCxNQUFNLENBQUMySCxXQUFXLENBQUN0SSxPQUFPLENBQUM7Y0FBQztjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQ0FDdEM7TUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO0VBQUE7SUFBQTtJQUFBO01BQUEsc0xBRUQsa0JBQW1Cc0IsS0FBdUI7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUN4Q0EsS0FBSyxDQUNGUyxJQUFJLENBQUMsVUFBQ3dHLE9BQU8sRUFBSztrQkFDakJBLE9BQU8sQ0FBQ3ZHLE9BQU8sQ0FBQyxNQUFJLENBQUN3RyxlQUFlLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQztjQUFDO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQUNOO01BQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQSxFQWhDdUJ6Siw4REFBUTtBQW1DbEMsaUVBQWV1RCxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ25CLFNBQVNtRyxRQUFRLENBQ3RCQyxNQUFjLEVBQ2RDLFFBQWUsRUFDZmpFLEdBQVEsRUFDUmtFLE9BQWUsRUFDZkMsUUFBZSxFQUNmO0VBQ0FILE1BQU0sR0FBR0MsUUFBUSxDQUFDM0ksT0FBTyxDQUFDUixLQUFLO0VBQy9Ca0YsR0FBRyxDQUFDMUUsT0FBTyxDQUFDb0UsV0FBVyxhQUFNc0UsTUFBTSxjQUFJRSxPQUFPLENBQUU7RUFDaERELFFBQVEsQ0FBQzNJLE9BQU8sQ0FBQ1IsS0FBSyxHQUFHa0osTUFBTTtFQUMvQixJQUFJLENBQUNDLFFBQVEsQ0FBQzNJLE9BQU8sQ0FBQ1IsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDcUosUUFBUSxDQUFDN0ksT0FBTyxDQUFDUixLQUFLLEVBQUU7SUFDekRtSixRQUFRLENBQUMzSSxPQUFPLENBQUNSLEtBQUssYUFBTSxDQUFDcUosUUFBUSxDQUFDN0ksT0FBTyxDQUFDUixLQUFLLEdBQUcsQ0FBQyxDQUFFO0lBQ3pEa0YsR0FBRyxDQUFDMUUsT0FBTyxDQUFDb0UsV0FBVyxHQUFHdUUsUUFBUSxDQUFDM0ksT0FBTyxDQUFDUixLQUFLLEdBQUdvSixPQUFPO0VBQzVEO0VBRUEsT0FBT0YsTUFBTTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7QUNoQk8sU0FBU0ksUUFBUSxDQUN0QkMsTUFBYyxFQUNkRixRQUFlLEVBQ2Z0RSxHQUFRLEVBQ1JxRSxPQUFlLEVBQ2ZELFFBQWUsRUFDZjtFQUNBSSxNQUFNLEdBQUdGLFFBQVEsQ0FBQzdJLE9BQU8sQ0FBQ1IsS0FBSztFQUMvQitFLEdBQUcsQ0FBQ3ZFLE9BQU8sQ0FBQ29FLFdBQVcsYUFBTTJFLE1BQU0sU0FBR0gsT0FBTyxDQUFFO0VBQy9DQyxRQUFRLENBQUM3SSxPQUFPLENBQUNSLEtBQUssR0FBR3VKLE1BQU07RUFDL0IsSUFBSSxDQUFDRixRQUFRLENBQUM3SSxPQUFPLENBQUNSLEtBQUssR0FBRyxDQUFDbUosUUFBUSxDQUFDM0ksT0FBTyxDQUFDUixLQUFLLEdBQUcsQ0FBQyxFQUFFO0lBQ3pEcUosUUFBUSxDQUFDN0ksT0FBTyxDQUFDUixLQUFLLGFBQU0sQ0FBQ21KLFFBQVEsQ0FBQzNJLE9BQU8sQ0FBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBRTtJQUN6RCtFLEdBQUcsQ0FBQ3ZFLE9BQU8sQ0FBQ29FLFdBQVcsR0FBR3lFLFFBQVEsQ0FBQzdJLE9BQU8sQ0FBQ1IsS0FBSyxHQUFHb0osT0FBTztFQUM1RDtFQUVBLE9BQU9HLE1BQU07QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CNkI7QUFDcUI7QUFDUztBQUN2QjtBQUNBO0FBQUEsSUFFOUJ4RyxVQUFVO0VBQUE7RUFBQTtFQW1CZCxvQkFBWXRELE1BQW1CLEVBQUUyRyxLQUFhLEVBQUVwRyxLQUEwQyxFQUFFO0lBQUE7SUFBQTtJQUMxRiwwQkFBTVAsTUFBTSxFQUFFLFlBQVk7SUFDMUIsTUFBSzJHLEtBQUssR0FBR0EsS0FBSztJQUNsQixNQUFLckUsS0FBSyxDQUFDL0IsS0FBSyxDQUFDO0lBQUM7RUFDcEI7RUFBQztJQUFBO0lBQUE7TUFBQSxzTEFFRCxpQkFBWXlKLE1BQTJDO1FBQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUMvQ0wsT0FBTyxjQUFPLElBQUksQ0FBQ2hELEtBQUssS0FBSyxPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUU7Z0JBQy9DQSxLQUFLLEdBQUcsSUFBSTNFLGdEQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxFQUFFLG1CQUFtQixDQUFDO2dCQUFBLGNBQ25DZ0osb0VBQUs7Z0JBQUEsY0FBQyxJQUFJLENBQUNoSixPQUFPO2dCQUFBO2dCQUFBO2dCQUFBLE9BRXRCaUosTUFBTTtjQUFBO2dCQUFBLDRCQUFFMUUsR0FBRztnQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUNYMEUsTUFBTTtjQUFBO2dCQUFBLDRCQUFFdkUsR0FBRztnQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUNUdUUsTUFBTTtjQUFBO2dCQUFBLDRCQUFFMUUsR0FBRztnQkFBQTtnQkFBQTtrQkFINUJoRixJQUFJLEVBQUUsT0FBTztrQkFDYmdGLEdBQUc7a0JBQ0hHLEdBQUc7a0JBQ0hsRixLQUFLO2dCQUFBO2dCQUpEcUosUUFBUSxnQ0FBMkIsS0FBSztnQkFBQSxlQU16Qkcsb0VBQUs7Z0JBQUEsZUFBQyxJQUFJLENBQUNoSixPQUFPO2dCQUFBO2dCQUFBO2dCQUFBLE9BRXRCaUosTUFBTTtjQUFBO2dCQUFBLDZCQUFFMUUsR0FBRztnQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUNYMEUsTUFBTTtjQUFBO2dCQUFBLDZCQUFFdkUsR0FBRztnQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUNUdUUsTUFBTTtjQUFBO2dCQUFBLDZCQUFFdkUsR0FBRztnQkFBQTtnQkFBQTtrQkFINUJuRixJQUFJLEVBQUUsT0FBTztrQkFDYmdGLEdBQUc7a0JBQ0hHLEdBQUc7a0JBQ0hsRixLQUFLO2dCQUFBO2dCQUpEbUosUUFBUSxrQ0FBMkIsS0FBSztnQkFNeENwRSxHQUFHLEdBQUcsSUFBSXRELGdEQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxFQUFFLG9DQUFvQyxDQUFDO2dCQUNqRTBFLEdBQUcsR0FBRyxJQUFJekQsZ0RBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLEVBQUUsdURBQXVELENBQUM7Z0JBQ3RGK0ksTUFBTSxHQUFHLEVBQUU7Z0JBQ1hMLE1BQU0sR0FBRyxFQUFFO2dCQUFBO2dCQUFBO2dCQUFBLE9BRXFCTyxNQUFNO2NBQUE7Z0JBQUEsNkJBQUUxRSxHQUFHO2dCQUEvQ0EsR0FBRyxDQUFDdkUsT0FBTyxDQUFDb0UsV0FBVywrREFBMkJ3RSxPQUFPO2dCQUFBO2dCQUFBO2dCQUFBLE9BQ3JCSyxNQUFNO2NBQUE7Z0JBQUEsNkJBQUV2RSxHQUFHO2dCQUEvQ0EsR0FBRyxDQUFDMUUsT0FBTyxDQUFDb0UsV0FBVywrREFBMkJ3RSxPQUFPO2dCQUN6REMsUUFBUSxDQUFDN0ksT0FBTyxDQUFDNEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07a0JBQy9DbUgsTUFBTSxHQUFHRCxvREFBUSxDQUFDQyxNQUFNLEVBQUVGLFFBQVEsRUFBRXRFLEdBQUcsRUFBRXFFLE9BQU8sRUFBRUQsUUFBUSxDQUFDO2dCQUM3RCxDQUFDLENBQUM7Z0JBQ0ZBLFFBQVEsQ0FBQzNJLE9BQU8sQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO2tCQUMvQzhHLE1BQU0sR0FBR0Qsb0RBQVEsQ0FBQ0MsTUFBTSxFQUFFQyxRQUFRLEVBQUVqRSxHQUFHLEVBQUVrRSxPQUFPLEVBQUVDLFFBQVEsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDO2dCQUNGQSxRQUFRLENBQUM3SSxPQUFPLENBQUM0QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtrQkFDaERULG1GQUErQixDQUFDLE1BQUksQ0FBQ3lFLEtBQUssS0FBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLFVBQVUsRUFBRSxDQUFDbUQsTUFBTSxDQUFDO2dCQUM1RixDQUFDLENBQUM7Z0JBQ0ZKLFFBQVEsQ0FBQzNJLE9BQU8sQ0FBQzRCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO2tCQUNoRFQsbUZBQStCLENBQUMsTUFBSSxDQUFDeUUsS0FBSyxLQUFLLE9BQU8sR0FBRyxVQUFVLEdBQUcsVUFBVSxFQUFFLENBQUM4QyxNQUFNLENBQUM7Z0JBQzVGLENBQUMsQ0FBQztnQkFDRjlDLEtBQUssQ0FBQzVGLE9BQU8sQ0FBQ29FLFdBQVcsR0FBRyxJQUFJLENBQUN3QixLQUFLO2dCQUN0QyxJQUFJLENBQUM1RixPQUFPLENBQUNXLE1BQU0sQ0FBQ2tJLFFBQVEsQ0FBQzdJLE9BQU8sRUFBRTJJLFFBQVEsQ0FBQzNJLE9BQU8sRUFBRXVFLEdBQUcsQ0FBQ3ZFLE9BQU8sRUFBRTBFLEdBQUcsQ0FBQzFFLE9BQU8sQ0FBQztnQkFDakYsSUFBSSxJQUFJLENBQUM0RixLQUFLLEtBQUssT0FBTyxFQUFFO2tCQUMxQnJELFVBQVUsQ0FBQzhCLFVBQVUsR0FBR3dFLFFBQVEsQ0FBQzdJLE9BQU87a0JBQ3hDdUMsVUFBVSxDQUFDaUMsVUFBVSxHQUFHbUUsUUFBUSxDQUFDM0ksT0FBTztrQkFDeEN1QyxVQUFVLENBQUMrQixRQUFRLEdBQUdDLEdBQUcsQ0FBQ3ZFLE9BQU87a0JBQ2pDdUMsVUFBVSxDQUFDa0MsUUFBUSxHQUFHQyxHQUFHLENBQUMxRSxPQUFPO2dCQUNuQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM0RixLQUFLLEtBQUssT0FBTyxFQUFFO2tCQUNqQ3JELFVBQVUsQ0FBQ29DLFVBQVUsR0FBR2tFLFFBQVEsQ0FBQzdJLE9BQU87a0JBQ3hDdUMsVUFBVSxDQUFDc0MsVUFBVSxHQUFHOEQsUUFBUSxDQUFDM0ksT0FBTztrQkFDeEN1QyxVQUFVLENBQUNxQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ3ZFLE9BQU87a0JBQ2pDdUMsVUFBVSxDQUFDdUMsUUFBUSxHQUFHSixHQUFHLENBQUMxRSxPQUFPO2dCQUNuQztjQUFDO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQUNGO01BQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQSxFQXhFc0JpQixnREFBRztBQTBFNUIsaUVBQWVzQixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hGbkJ5RyxLQUFLO0VBR1QsZUFBWS9KLE1BQW1CLEVBQUVtQixRQUFnQixFQUFFQyxJQUE2QixFQUFFO0lBQUE7SUFBQTtJQUNoRixJQUFJLENBQUNMLE9BQU8sR0FBR00sUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBRTlDLElBQUksT0FBT0gsUUFBUSxLQUFLLFFBQVEsRUFBRSw2QkFBSSxDQUFDSixPQUFPLENBQUNRLFNBQVMsRUFBQ0MsR0FBRyxtSEFBSUwsUUFBUSxDQUFDTSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUM7SUFFcEYsSUFBSXpCLE1BQU0sRUFBRUEsTUFBTSxDQUFDMEIsTUFBTSxDQUFDLElBQUksQ0FBQ1gsT0FBTyxDQUFDO0lBRXZDLG1DQUEyQlksTUFBTSxDQUFDQyxPQUFPLENBQUNSLElBQUksQ0FBQyxxQ0FBRTtNQUE1QztRQUFPUyxHQUFHO1FBQUV0QixLQUFLO01BQ3BCLElBQUksQ0FBQ1EsT0FBTyxDQUFDZSxZQUFZLENBQUNELEdBQUcsRUFBRXRCLEtBQUssQ0FBVztJQUNqRDtFQUNGO0VBQUM7SUFBQTtJQUFBLE9BRUQseUJBQXNCO01BQ3BCLElBQUksQ0FBQ1EsT0FBTyxDQUFDZ0IsTUFBTSxFQUFFO0lBQ3ZCO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQXNCO01BQ3BCLE9BQU8sSUFBSSxDQUFDaEIsT0FBTztJQUNyQjtFQUFDO0VBQUE7QUFBQTtBQUdILGlFQUFlZ0osS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeEJkRSxRQUFRO0VBR1osa0JBQVlqSyxNQUFtQixFQUFFbUIsUUFBZ0IsRUFBRTtJQUFBO0lBQUE7SUFDakQsSUFBSSxDQUFDSixPQUFPLEdBQUdNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUU5QyxJQUFJLE9BQU9ILFFBQVEsS0FBSyxRQUFRLEVBQUUsNkJBQUksQ0FBQ0osT0FBTyxDQUFDUSxTQUFTLEVBQUNDLEdBQUcsbUhBQUlMLFFBQVEsQ0FBQ00sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDO0lBRXBGLElBQUl6QixNQUFNLEVBQUVBLE1BQU0sQ0FBQzBCLE1BQU0sQ0FBQyxJQUFJLENBQUNYLE9BQU8sQ0FBQztJQUV2QyxJQUFJLENBQUNBLE9BQU8sQ0FBQ2UsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7RUFDNUM7RUFBQztJQUFBO0lBQUEsT0FFRCx5QkFBc0I7TUFDcEIsSUFBSSxDQUFDZixPQUFPLENBQUNnQixNQUFNLEVBQUU7SUFDdkI7RUFBQztJQUFBO0lBQUEsT0FFRCxrQkFBc0I7TUFDcEIsT0FBTyxJQUFJLENBQUNoQixPQUFPO0lBQ3JCO0VBQUM7RUFBQTtBQUFBO0FBR0gsaUVBQWVrSixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJXO0FBRXlCO0FBQ047QUFBQSxJQUUvQzdHLE1BQU07RUFBQTtFQUFBO0VBT1YsZ0JBQVlwRCxNQUFtQixFQUFFbUssU0FBaUIsRUFBRTtJQUFBO0lBQUE7SUFDbEQsMEJBQU1uSyxNQUFNLEVBQUVtSyxTQUFTO0lBRXZCLE1BQUs3SCxLQUFLLEVBQUU7SUFBQztFQUNmO0VBQUM7SUFBQTtJQUFBLE9BRUQsaUJBQVE7TUFBQTtNQUNOLElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQzNDUyxNQUFNLENBQUM2QixjQUFjLEdBQUcsTUFBSSxDQUFDbEUsT0FBTyxDQUFDUixLQUFLLENBQUNFLFdBQVcsRUFBRTtRQUV4RHlCLG1GQUErQixDQUFDLFFBQVEsRUFBRWtCLE1BQU0sQ0FBQzZCLGNBQWMsQ0FBQztNQUNsRSxDQUFDLENBQUM7TUFFRixJQUFJLENBQUNsRSxPQUFPLENBQUNxSixXQUFXLEdBQUcsZ0JBQWdCO01BQzNDaEgsTUFBTSxDQUFDbkMsRUFBRSxHQUFHLElBQUksQ0FBQ0YsT0FBTztJQUMxQjtFQUFDO0lBQUE7SUFBQTtNQUFBLHVMQUVELGlCQUFvQlIsS0FBYSxFQUFFOEIsS0FBdUI7UUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsY0FDekN1QixPQUFPO2dCQUFBO2dCQUFBLE9BQVd2QixLQUFLO2NBQUE7Z0JBQUE7Z0JBQWxDcUIsUUFBUSxlQUFXRyxHQUFHO2dCQUFBLGNBRWZELE9BQU87Z0JBQUE7Z0JBQUEsT0FBWUYsUUFBUTtjQUFBO2dCQUFBLDRCQUFFa0IsTUFBTSxDQUFDLFVBQUN1RSxJQUFJO2tCQUFBLE9BQUssTUFBSSxDQUFDa0IsbUJBQW1CLENBQUNsQixJQUFJLEVBQUU1SSxLQUFLLENBQUM7Z0JBQUE7Z0JBQTlGbUQsUUFBUSxlQUFXRyxHQUFHO2dCQUFBLGlDQUVmSCxRQUFRO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBQ2hCO01BQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0lBQUE7SUFBQSxPQUVELDZCQUEyQnlGLElBQVcsRUFBRTVJLEtBQWEsRUFBRTtNQUNyRCxJQUFJK0osTUFBTSxHQUFHLEtBQUs7TUFFbEIsSUFBSW5CLElBQUksQ0FBQ3hDLEtBQUssQ0FBQ2xHLFdBQVcsRUFBRSxDQUFDRyxPQUFPLENBQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoRCtKLE1BQU0sR0FBRyxJQUFJO01BQ2YsQ0FBQyxNQUFNLElBQUluQixJQUFJLENBQUN0RyxLQUFLLENBQUNwQyxXQUFXLEVBQUUsQ0FBQ0csT0FBTyxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkQrSixNQUFNLEdBQUcsSUFBSTtNQUNmLENBQUMsTUFBTSxJQUFJbkIsSUFBSSxDQUFDNUcsUUFBUSxDQUFDOUIsV0FBVyxFQUFFLENBQUNHLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFEK0osTUFBTSxHQUFHLElBQUk7TUFDZixDQUFDLE1BQU0sSUFBSW5CLElBQUksQ0FBQ29CLFdBQVcsQ0FBQzlKLFdBQVcsRUFBRSxDQUFDRyxPQUFPLENBQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3RCtKLE1BQU0sR0FBRyxJQUFJO01BQ2YsQ0FBQyxNQUFNLElBQUksVUFBR25CLElBQUksQ0FBQ3ZCLGtCQUFrQixFQUFHaEgsT0FBTyxXQUFJTCxLQUFLLEVBQUcsSUFBSSxDQUFDLEVBQUU7UUFDaEUrSixNQUFNLEdBQUcsSUFBSTtNQUNmLENBQUMsTUFBTSxJQUFJLFVBQUduQixJQUFJLENBQUNwRCxLQUFLLEVBQUduRixPQUFPLFdBQUlMLEtBQUssRUFBRyxJQUFJLENBQUMsRUFBRTtRQUNuRCtKLE1BQU0sR0FBRyxJQUFJO01BQ2YsQ0FBQyxNQUFNLElBQUksVUFBR25CLElBQUksQ0FBQ3RCLE1BQU0sRUFBR2pILE9BQU8sV0FBSUwsS0FBSyxFQUFHLElBQUksQ0FBQyxFQUFFO1FBQ3BEK0osTUFBTSxHQUFHLElBQUk7TUFDZixDQUFDLE1BQU0sSUFBSSxVQUFHbkIsSUFBSSxDQUFDaEYsS0FBSyxFQUFHdkQsT0FBTyxXQUFJTCxLQUFLLEVBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbkQrSixNQUFNLEdBQUcsSUFBSTtNQUNmO01BRUEsT0FBT0EsTUFBTTtJQUNmO0VBQUM7RUFBQTtBQUFBLEVBdERrQkwsaURBQVE7QUFBQSxrRkFBdkI3RyxNQUFNLG9CQUNzQixFQUFFO0FBQUEsa0ZBRDlCQSxNQUFNLGNBRzBCOEcsaUVBQVk7QUFzRGxELGlFQUFlOUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDOURkLFNBQVNvSCxhQUFhLENBQUN0RixJQUF1QixFQUFFO0VBQ3JELElBQU11RixXQUFXLEdBQUcsSUFBSUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUM7RUFDN0QsSUFBTUMsWUFBWSxHQUFHLElBQUlELE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUM7RUFDaEUsSUFBTUUsWUFBWSxHQUFHLElBQUlGLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUM7RUFDbEUsSUFBTUcsYUFBYSxHQUFHLElBQUlILE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUM7RUFDbkUsSUFBTUksYUFBYSxHQUFHLElBQUlKLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUM7RUFDckUsSUFBTUssZUFBZSxHQUFHLElBQUlMLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxhQUFhLENBQUM7RUFDekUsSUFBTU0sZUFBZSxHQUFHLElBQUlOLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxjQUFjLENBQUM7RUFDM0UsSUFBTU8sY0FBYyxHQUFHLElBQUlQLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7RUFDdkUsSUFBTVEsY0FBYyxHQUFHLElBQUlSLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUM7RUFFekVELFdBQVcsQ0FBQ1UsUUFBUSxHQUFHLElBQUk7RUFDM0JWLFdBQVcsQ0FBQzNFLFFBQVEsR0FBRyxJQUFJO0VBRTNCWixJQUFJLENBQUN4RCxNQUFNLENBQ1QrSSxXQUFXLEVBQ1hFLFlBQVksRUFDWkMsWUFBWSxFQUNaQyxhQUFhLEVBQ2JDLGFBQWEsRUFDYkMsZUFBZSxFQUNmQyxlQUFlLEVBQ2ZDLGNBQWMsRUFDZEMsY0FBYyxDQUNmO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJvQztBQUN1QjtBQUNiO0FBQ1I7QUFBQSxJQUdoQy9ILE1BQU07RUFBQTtFQUFBO0VBS1YsZ0JBQVluRCxNQUFtQixFQUFFbUIsUUFBZ0IsRUFBRTtJQUFBO0lBQUE7SUFDakQsMEJBQU1uQixNQUFNLEVBQUVtQixRQUFRO0lBQ3RCZ0MsTUFBTSxDQUFDbEMsRUFBRSxHQUFHLE1BQUtGLE9BQU87SUFDeEIsTUFBS3VCLEtBQUssRUFBRTtJQUFDO0VBQ2Y7RUFBQztJQUFBO0lBQUEsT0FFRCxpQkFBUTtNQUFBO01BQ05rSSw4REFBYSxDQUFDLElBQUksQ0FBQ3pKLE9BQU8sQ0FBQztNQUUzQixJQUFJLENBQUNBLE9BQU8sQ0FBQzRCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO1FBQzVDLElBQU9wQyxLQUFLLEdBQUksTUFBSSxDQUFDUSxPQUFPLENBQXJCUixLQUFLO1FBRVoyQixtRkFBK0IsQ0FBQyxNQUFNLEVBQUUzQixLQUFLLENBQUM7UUFFOUM0QyxNQUFNLENBQUM2QixXQUFXLEdBQUd6RSxLQUFLO01BQzVCLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTtJQUFBO01BQUEscUxBRUQsaUJBQWtCQSxLQUFhLEVBQUU4QixLQUF1QjtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUEsY0FDckN1QixPQUFPO2dCQUFBO2dCQUFBLE9BQVd2QixLQUFLO2NBQUE7Z0JBQUE7Z0JBQWxDcUIsUUFBUSxlQUFXRyxHQUFHO2dCQUU1QndILHNEQUFTLENBQUMzSCxRQUFRLEVBQUVuRCxLQUFLLENBQUM7Z0JBQUMsaUNBRXBCbUQsUUFBUTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDQUNoQjtNQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUEsRUE3QmtCMEgsa0RBQVM7QUFBQSxrRkFBeEJqSSxNQUFNLGlCQUNtQixFQUFFO0FBK0JqQyxpRUFBZUEsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdENmaUksU0FBUztFQUdiLG1CQUFZcEwsTUFBbUIsRUFBRW1CLFFBQWdCLEVBQUU7SUFBQTtJQUFBO0lBQ2pELElBQUksQ0FBQ0osT0FBTyxHQUFHTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFFL0MsSUFBSSxPQUFPSCxRQUFRLEtBQUssUUFBUSxFQUFFLDZCQUFJLENBQUNKLE9BQU8sQ0FBQ1EsU0FBUyxFQUFDQyxHQUFHLG1IQUFJTCxRQUFRLENBQUNNLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQztJQUVwRixJQUFJekIsTUFBTSxFQUFFQSxNQUFNLENBQUMwQixNQUFNLENBQUMsSUFBSSxDQUFDWCxPQUFPLENBQUM7RUFDekM7RUFBQztJQUFBO0lBQUEsT0FFRCx5QkFBc0I7TUFDcEIsSUFBSSxDQUFDQSxPQUFPLENBQUNnQixNQUFNLEVBQUU7SUFDdkI7RUFBQztJQUFBO0lBQUEsT0FFRCxrQkFBc0I7TUFDcEIsT0FBTyxJQUFJLENBQUNoQixPQUFPO0lBQ3JCO0VBQUM7RUFBQTtBQUFBO0FBR0gsaUVBQWVxSyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCakIsU0FBZUMsU0FBUztFQUFBO0FBQUE7QUFrQjlCO0VBQUEsc0xBbEJNLGlCQUF5QmhKLEtBQXVCLEVBQUVpSixNQUFjO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQSxNQUNqRUEsTUFBTSxLQUFLLFVBQVU7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBLE9BQ2hCakosS0FBSztVQUFBO1lBQUEsY0FBRWtKLElBQUksQ0FBQyxVQUFDM0UsQ0FBQyxFQUFFNEUsQ0FBQztjQUFBLE9BQUs1RSxDQUFDLENBQUNiLEtBQUssR0FBR3lGLENBQUMsQ0FBQ3pGLEtBQUs7WUFBQTtZQUFBO1lBQUE7VUFBQTtZQUFBLE1BQ3JDdUYsTUFBTSxLQUFLLFdBQVc7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBLE9BQ3hCakosS0FBSztVQUFBO1lBQUEsY0FBRWtKLElBQUksQ0FBQyxVQUFDM0UsQ0FBQyxFQUFFNEUsQ0FBQztjQUFBLE9BQUtBLENBQUMsQ0FBQ3pGLEtBQUssR0FBR2EsQ0FBQyxDQUFDYixLQUFLO1lBQUE7WUFBQTtZQUFBO1VBQUE7WUFBQSxNQUNyQ3VGLE1BQU0sS0FBSyxXQUFXO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQSxPQUN4QmpKLEtBQUs7VUFBQTtZQUFBLGNBQUVrSixJQUFJLENBQUMsVUFBQzNFLENBQUMsRUFBRTRFLENBQUM7Y0FBQSxPQUFLNUUsQ0FBQyxDQUFDaUIsTUFBTSxHQUFHMkQsQ0FBQyxDQUFDM0QsTUFBTTtZQUFBO1lBQUE7WUFBQTtVQUFBO1lBQUEsTUFDdkN5RCxNQUFNLEtBQUssWUFBWTtjQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUEsT0FDekJqSixLQUFLO1VBQUE7WUFBQSxjQUFFa0osSUFBSSxDQUFDLFVBQUMzRSxDQUFDLEVBQUU0RSxDQUFDO2NBQUEsT0FBS0EsQ0FBQyxDQUFDM0QsTUFBTSxHQUFHakIsQ0FBQyxDQUFDaUIsTUFBTTtZQUFBO1lBQUE7WUFBQTtVQUFBO1lBQUEsTUFDdkN5RCxNQUFNLEtBQUssYUFBYTtjQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUEsT0FDMUJqSixLQUFLO1VBQUE7WUFBQSxjQUFFa0osSUFBSSxDQUFDLFVBQUMzRSxDQUFDLEVBQUU0RSxDQUFDO2NBQUEsT0FBSzVFLENBQUMsQ0FBQ2dCLGtCQUFrQixHQUFHNEQsQ0FBQyxDQUFDNUQsa0JBQWtCO1lBQUE7WUFBQTtZQUFBO1VBQUE7WUFBQSxNQUMvRDBELE1BQU0sS0FBSyxjQUFjO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQSxPQUMzQmpKLEtBQUs7VUFBQTtZQUFBLGNBQUVrSixJQUFJLENBQUMsVUFBQzNFLENBQUMsRUFBRTRFLENBQUM7Y0FBQSxPQUFLQSxDQUFDLENBQUM1RCxrQkFBa0IsR0FBR2hCLENBQUMsQ0FBQ2dCLGtCQUFrQjtZQUFBO1lBQUE7WUFBQTtVQUFBO1lBQUEsTUFDL0QwRCxNQUFNLEtBQUssWUFBWTtjQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUEsT0FDekJqSixLQUFLO1VBQUE7WUFBQSxjQUFFa0osSUFBSSxDQUFDLFVBQUMzRSxDQUFDLEVBQUU0RSxDQUFDO2NBQUEsT0FBSzVFLENBQUMsQ0FBQ3pDLEtBQUssR0FBR3FILENBQUMsQ0FBQ3JILEtBQUs7WUFBQTtZQUFBO1lBQUE7VUFBQTtZQUFBLE1BQ3JDbUgsTUFBTSxLQUFLLGFBQWE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBLE9BQzFCakosS0FBSztVQUFBO1lBQUEsY0FBRWtKLElBQUksQ0FBQyxVQUFDM0UsQ0FBQyxFQUFFNEUsQ0FBQztjQUFBLE9BQUtBLENBQUMsQ0FBQ3JILEtBQUssR0FBR3lDLENBQUMsQ0FBQ3pDLEtBQUs7WUFBQTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBRWpEO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCa0Q7QUFBQSxJQUU3Q2pFLE9BQU87RUFBQTtFQUFBO0VBQ1gsaUJBQVlGLE1BQW1CLEVBQUV5TCxPQUFlLEVBQUV2RSxTQUFpQixFQUFFO0lBQUE7SUFBQSx5QkFDN0RsSCxNQUFNLEVBQUUsTUFBTSxZQUFLa0gsU0FBUywwQkFBZ0J1RSxPQUFPO0VBQzNEO0VBQUM7QUFBQSxFQUhtQjNMLDhEQUFRO0FBTTlCLGlFQUFlSSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUlAyRyxTQUFTO0VBR3RCLG1CQUFZSSxPQUFlLEVBQUVDLFNBQWlCLEVBQUU7SUFBQTtJQUM5QyxJQUFJLENBQUNLLFNBQVMsR0FBR2xHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDMkYsT0FBTyxDQUFDO0lBQ2hELElBQUksQ0FBQ00sU0FBUyxDQUFDTCxTQUFTLEdBQUdBLFNBQVM7RUFDdEM7RUFBQztJQUFBO0lBQUEsT0FFRCxrQkFBUztNQUNQLE9BQU8sSUFBSSxDQUFDSyxTQUFTO0lBQ3ZCO0VBQUM7RUFBQTtBQUFBO0FBR0gsaUVBQWVWLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2JUNkUsSUFBSTtFQUtqQixjQUFZbEwsRUFBVSxFQUFFO0lBQUE7SUFDdEIsSUFBSSxDQUFDK0csU0FBUyxHQUFHbEcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzlDLElBQUksQ0FBQ2lHLFNBQVMsQ0FBQy9HLEVBQUUsR0FBR0EsRUFBRTtFQUN4QjtFQUFDO0lBQUE7SUFBQSxPQUVELDJCQUE0QnVHLElBQVksRUFBRTtNQUN4QyxJQUFNNEUsV0FBVyxHQUFHdEssUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO01BRWhEcUssV0FBVyxDQUFDckUsU0FBUyxHQUFHUCxJQUFJO01BRTVCLE9BQU80RSxXQUFXO0lBQ3BCO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQVM7TUFDUCxPQUFPLElBQUksQ0FBQ3BFLFNBQVM7SUFDdkI7RUFBQztFQUFBO0FBQUE7QUFBQSxrRkFwQlltRSxJQUFJLGdCQUdHLENBQUMsQ0FBQztBQW9CeEIsaUVBQWVBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJaLElBQWU1TCxRQUFRO0VBRzVCLGtCQUNFRSxNQUFtQixFQUtuQjtJQUFBO0lBQUEsSUFKQWlILE9BQW9DLHVFQUFHLEtBQUs7SUFBQSxJQUM1Q0MsU0FBa0I7SUFBQSxJQUNsQjNHLEtBQWU7SUFBQSxJQUNmYSxJQUE4QjtJQUFBO0lBRTlCLElBQUksQ0FBQ0wsT0FBTyxHQUFHTSxRQUFRLENBQUNDLGFBQWEsQ0FBQzJGLE9BQU8sQ0FBQztJQUU5QyxJQUFJLE9BQU8xRyxLQUFLLEtBQUssUUFBUSxFQUFFLElBQUksQ0FBQ1EsT0FBTyxDQUFDNkssU0FBUyxHQUFHckwsS0FBSztJQUU3RCxJQUFJLE9BQU8yRyxTQUFTLEtBQUssUUFBUSxFQUFFLDZCQUFJLENBQUNuRyxPQUFPLENBQUNRLFNBQVMsRUFBQ0MsR0FBRyxtSEFBSTBGLFNBQVMsQ0FBQ3pGLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQztJQUV0RixJQUFJekIsTUFBTSxFQUFFQSxNQUFNLENBQUMwQixNQUFNLENBQUMsSUFBSSxDQUFDWCxPQUFPLENBQUM7SUFFdkMsSUFBSUssSUFBSSxFQUFFO01BQ1IsbUNBQTJCTyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1IsSUFBSSxDQUFDLHFDQUFFO1FBQTVDO1VBQU9TLEdBQUc7VUFBRXRCLE1BQUs7UUFDcEIsSUFBSSxDQUFDUSxPQUFPLENBQUNlLFlBQVksQ0FBQ0QsR0FBRyxFQUFFdEIsTUFBSyxDQUFXO1FBQy9DO01BQ0Y7SUFDRjtFQUNGO0VBQUM7SUFBQTtJQUFBLE9BRUQseUJBQXNCO01BQ3BCLElBQUksQ0FBQ1EsT0FBTyxDQUFDZ0IsTUFBTSxFQUFFO0lBQ3ZCO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQXNCO01BQ3BCLE9BQU8sSUFBSSxDQUFDaEIsT0FBTztJQUNyQjtFQUFDO0VBQUE7QUFBQTs7QUFHSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q08sU0FBUzhLLFVBQVUsQ0FDeEJDLElBQVksRUFDWlIsTUFBdUIsRUFDdkJTLEdBQTRDLEVBQzVDO0VBQ0EsSUFBSSxDQUFDRCxJQUFJLEtBQUssVUFBVSxJQUFJQSxJQUFJLEtBQUssT0FBTyxLQUFLLE9BQU9SLE1BQU0sS0FBSyxRQUFRLEVBQUU7SUFDM0U7SUFDQSxJQUFJUyxHQUFHLENBQUNELElBQUksQ0FBQyxDQUFDbEwsT0FBTyxDQUFDMEssTUFBTSxDQUFDN0ssV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDaERzTCxHQUFHLENBQUNELElBQUksQ0FBQyxDQUFDRSxNQUFNLENBQUNELEdBQUcsQ0FBQ0QsSUFBSSxDQUFDLENBQUNsTCxPQUFPLENBQUMwSyxNQUFNLENBQUM3SyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUM1REksT0FBTyxDQUFDQyxHQUFHLENBQUNnTCxJQUFJLEVBQUVSLE1BQU0sQ0FBQztJQUMzQixDQUFDLE1BQU07TUFDTFMsR0FBRyxDQUFDRCxJQUFJLENBQUMsQ0FBQ0csSUFBSSxDQUFDWCxNQUFNLENBQUM3SyxXQUFXLEVBQUUsQ0FBQztJQUN0QztFQUNGLENBQUMsTUFBTSxJQUFJcUwsSUFBSSxLQUFLLFVBQVUsSUFBSSxPQUFPUixNQUFNLEtBQUssUUFBUSxFQUFFO0lBQzVEUyxHQUFHLENBQUNoRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUd1RixNQUFNO0VBQ3ZCLENBQUMsTUFBTSxJQUFJUSxJQUFJLEtBQUssVUFBVSxJQUFJLE9BQU9SLE1BQU0sS0FBSyxRQUFRLEVBQUU7SUFDNURTLEdBQUcsQ0FBQ2hHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR3VGLE1BQU07RUFDdkIsQ0FBQyxNQUFNLElBQUlRLElBQUksS0FBSyxVQUFVLElBQUksT0FBT1IsTUFBTSxLQUFLLFFBQVEsRUFBRTtJQUM1RFMsR0FBRyxDQUFDNUgsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHbUgsTUFBTTtFQUN2QixDQUFDLE1BQU0sSUFBSVEsSUFBSSxLQUFLLFVBQVUsSUFBSSxPQUFPUixNQUFNLEtBQUssUUFBUSxFQUFFO0lBQzVEUyxHQUFHLENBQUM1SCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdtSCxNQUFNO0VBQ3ZCO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ3BCTyxTQUFTWSxhQUFhLENBQUMvQyxJQUFXLEVBQUU0QyxHQUE0QyxFQUFFO0VBQ3ZGLElBQUlJLGFBQWEsR0FBRyxDQUFDO0VBQ3JCLElBQUk3QixNQUFNLEdBQUcsQ0FBQztFQUVkLEtBQUssSUFBTThCLFFBQVEsSUFBSUwsR0FBRyxFQUFFO0lBQzFCLElBQUlBLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQUNySSxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzVCb0ksYUFBYSxFQUFFO0lBQ2pCO0VBQ0Y7RUFFQSxLQUFLLElBQU1DLFNBQVEsSUFBSUwsR0FBRyxFQUFFO0lBQzFCLElBQUlLLFNBQVEsS0FBSyxVQUFVLElBQUlBLFNBQVEsS0FBSyxPQUFPLEVBQUU7TUFDbkQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdOLEdBQUcsQ0FBQ0ssU0FBUSxDQUFDLENBQUNySSxNQUFNLEVBQUVzSSxDQUFDLEVBQUUsRUFBRTtRQUM3QyxJQUFJbEQsSUFBSSxDQUFDaUQsU0FBUSxDQUFDLENBQUMzTCxXQUFXLEVBQUUsS0FBS3NMLEdBQUcsQ0FBQ0ssU0FBUSxDQUFDLENBQUNDLENBQUMsQ0FBQyxFQUFFO1VBQ3JEL0IsTUFBTSxFQUFFO1FBQ1Y7TUFDRjtJQUNGO0VBQ0Y7RUFFQSxJQUFJbkIsSUFBSSxDQUFDcEQsS0FBSyxJQUFJZ0csR0FBRyxDQUFDaEcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJb0QsSUFBSSxDQUFDcEQsS0FBSyxJQUFJZ0csR0FBRyxDQUFDaEcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzVEdUUsTUFBTSxFQUFFO0VBQ1Y7RUFFQSxJQUFJbkIsSUFBSSxDQUFDaEYsS0FBSyxJQUFJNEgsR0FBRyxDQUFDNUgsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJZ0YsSUFBSSxDQUFDaEYsS0FBSyxJQUFJNEgsR0FBRyxDQUFDNUgsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzVEbUcsTUFBTSxFQUFFO0VBQ1Y7RUFFQSxPQUFPNkIsYUFBYSxLQUFLN0IsTUFBTTtBQUNqQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBLElBQU1KLFlBQThCLEdBQUcsSUFBSXRHLE9BQU8sQ0FBQyxVQUFDMEksT0FBTyxFQUFLO0VBQzlELElBQU1wQyxZQUFZLEdBQUcsQ0FBQztJQUNwQnZELEtBQUssRUFBRSxPQUFPO0lBQ2Q5RCxLQUFLLEVBQUUsT0FBTztJQUNkTixRQUFRLEVBQUUsT0FBTztJQUNqQmdJLFdBQVcsRUFBRSxPQUFPO0lBQ3BCM0Msa0JBQWtCLEVBQUUsQ0FBQztJQUNyQnBILEVBQUUsRUFBRSxDQUFDO0lBQ0xxSSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDWjlDLEtBQUssRUFBRSxDQUFDO0lBQ1I4QixNQUFNLEVBQUUsQ0FBQztJQUNUMUQsS0FBSyxFQUFFLENBQUM7SUFDUm9JLFNBQVMsRUFBRTtFQUNiLENBQUMsQ0FBQztFQUVGRCxPQUFPLENBQUNwQyxZQUFZLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsaUVBQWVBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnNDO0FBQ2hCO0FBQ2Y7QUFDYztBQUNVO0FBQ1Y7QUFDRTtBQUNLO0FBQUEsU0FFeEMwQyxTQUFTO0VBQUE7QUFBQTtBQUFBO0VBQUEsc0xBQXhCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBLGNBQ3NCQyxLQUFLO1lBQUE7WUFBQSxPQUFZckosOERBQWUsRUFBRTtVQUFBO1lBQUE7WUFBaERzSixXQUFXLGVBQVNDLElBQUk7WUFBQSxpQ0FFdkJELFdBQVc7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNuQjtFQUFBO0FBQUE7QUFBQSxTQUVjRSxhQUFhO0VBQUE7QUFBQTtBQUFBO0VBQUEsMExBQTVCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBLGVBQzBCSCxLQUFLO1lBQUE7WUFBQSxPQUFZckosa0VBQW1CLEVBQUU7VUFBQTtZQUFBO1lBQXhEeUosZUFBZSxnQkFBU0YsSUFBSTtZQUFBLGtDQUUzQkUsZUFBZTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQ3ZCO0VBQUE7QUFBQTtBQUVNLFNBQWVDLG1CQUFtQjtFQUFBO0FBQUE7QUErQnhDO0VBQUEsZ01BL0JNO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUNDQyxPQUFnRCxHQUFHakssZ0ZBQVksRUFBRSxFQUN2RTtZQUNPTCxLQUFLLEdBQTBDc0ssT0FBTyxDQUF0RHRLLEtBQUssRUFBRU4sUUFBUSxHQUFnQzRLLE9BQU8sQ0FBL0M1SyxRQUFRLEVBQUVnSixJQUFJLEdBQTBCNEIsT0FBTyxDQUFyQzVCLElBQUksRUFBRXhGLEtBQUssR0FBbUJvSCxPQUFPLENBQS9CcEgsS0FBSyxFQUFFNUIsS0FBSyxHQUFZZ0osT0FBTyxDQUF4QmhKLEtBQUssRUFBRWlKLE1BQU0sR0FBSUQsT0FBTyxDQUFqQkMsTUFBTTtZQUVsRGhOLGtGQUFZLEdBQUd5QyxLQUFLLENBQUM4QixNQUFNLENBQUNwQyxRQUFRLENBQUM7WUFBQyx1Q0FDbkJNLEtBQUs7WUFBQTtZQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFic0csSUFBSTtZQUNUa0UsSUFBSTtZQUVSLElBQUksT0FBT2xFLElBQUksS0FBSyxRQUFRLEVBQUU7Y0FDNUJrRSxJQUFJLEdBQUdsRSxJQUFJLENBQUNtRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHcEUsSUFBSSxDQUFDekUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyRDtZQUFDO1lBQUEsT0FFVWtJLFNBQVMsRUFBRTtVQUFBO1lBQUEsb0JBQUVZLFFBQVEsV0FBSUgsSUFBSTtjQUFBO2NBQUE7WUFBQTtZQUN0Q25MLHdFQUErQixDQUFDLE9BQU8sRUFBRSxVQUFHaUgsSUFBSSxFQUFHb0UsV0FBVyxFQUFFLENBQUM7VUFBQztZQUFBO1lBQUE7VUFBQTtZQUFBO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7WUFBQSx3Q0FJbkRoTCxRQUFRO1lBQUE7WUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBaEI0RyxLQUFJO1lBQUE7WUFBQSxPQUNGNkQsYUFBYSxFQUFFO1VBQUE7WUFBQSxvQkFBRVEsUUFBUSxXQUFJckUsS0FBSTtjQUFBO2NBQUE7WUFBQTtZQUMxQ2pILHdFQUErQixDQUFDLFVBQVUsRUFBRWlILEtBQUksQ0FBQztVQUFDO1lBQUE7WUFBQTtVQUFBO1lBQUE7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtZQUl0RHNELHlFQUFtQixDQUFDbEIsSUFBSSxDQUFDO1lBRXpCaUIsK0RBQWMsQ0FBQ3pHLEtBQUssQ0FBQztZQUVyQjJHLCtEQUFjLENBQUN2SSxLQUFLLENBQUM7WUFFckJ3SSxpRUFBZSxXQUFJUyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUc7VUFBQztVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNqQztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BERDtBQUNBLElBQU1BLE1BQWdCLEdBQUcsRUFBRTtBQUMzQixJQUFNN0IsSUFBYyxHQUFHLEVBQUU7QUFFbEIsU0FBU2tDLFVBQVUsQ0FBQzNCLElBQVksRUFBRTNDLElBQXFCLEVBQUU0QyxHQUE0QyxFQUFFO0VBQzVHO0VBQ0E7RUFDQSxJQUFNMkIsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUM5QixHQUFHLENBQUMsQ0FBQztFQUU5QyxJQUFJRCxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8zQyxJQUFJLEtBQUssUUFBUSxFQUFFO0lBQ2pEaUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHakUsSUFBSTtFQUNsQjtFQUVBLElBQUkyQyxJQUFJLEtBQUssTUFBTSxJQUFJLE9BQU8zQyxJQUFJLEtBQUssUUFBUSxFQUFFO0lBQy9Db0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHcEMsSUFBSTtFQUNoQjtFQUVBdUUsTUFBTSxDQUFDTixNQUFNLEdBQUdBLE1BQU07RUFDdEJNLE1BQU0sQ0FBQ25DLElBQUksR0FBR0EsSUFBSTtFQUNsQixJQUFJakIsTUFBTSxHQUFHLEVBQUU7RUFFZixLQUFLLElBQU1ySixFQUFFLElBQUl5TSxNQUFNLEVBQUU7SUFDdkIsSUFBSXpNLEVBQUUsRUFBRTtNQUNOcUosTUFBTSxjQUFPckosRUFBRSxNQUFHO01BQ2xCLElBQUl5TSxNQUFNLENBQUN6TSxFQUFFLENBQUMsQ0FBQzhDLE1BQU0sS0FBSyxDQUFDLEVBQUV1RyxNQUFNLElBQUksR0FBRztNQUMxQyxLQUFLLElBQUl3RCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdKLE1BQU0sQ0FBQ3pNLEVBQUUsQ0FBQyxDQUFDOEMsTUFBTSxFQUFFK0osQ0FBQyxFQUFFLEVBQUU7UUFDMUMsSUFBSUEsQ0FBQyxLQUFLSixNQUFNLENBQUN6TSxFQUFFLENBQUMsQ0FBQzhDLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDL0J1RyxNQUFNLGNBQU9vRCxNQUFNLENBQUN6TSxFQUFFLENBQUMsQ0FBQzZNLENBQUMsQ0FBQyxNQUFHO1FBQy9CLENBQUMsTUFBTTtVQUNMeEQsTUFBTSxjQUFPb0QsTUFBTSxDQUFDek0sRUFBRSxDQUFDLENBQUM2TSxDQUFDLENBQUMsTUFBRztRQUMvQjtNQUNGO0lBQ0Y7RUFDRjtFQUVBekosTUFBTSxDQUFDUyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLGFBQU11RixNQUFNLEVBQUc7QUFDckU7Ozs7Ozs7Ozs7Ozs7OztBQ3BDTyxTQUFTcEgsWUFBWSxHQUE0QztFQUN0RSxJQUFNWCxRQUFrQixHQUFHLEVBQUU7RUFDN0IsSUFBTU0sS0FBZSxHQUFHLEVBQUU7RUFDMUIsSUFBTWtELEtBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7RUFDbkMsSUFBTTVCLEtBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7RUFDbkMsSUFBTWlKLE1BQWdCLEdBQUcsRUFBRTtFQUMzQixJQUFNN0IsSUFBYyxHQUFHLEVBQUU7RUFDekIsSUFBTXpGLFFBQWlELEdBQUc7SUFBQ3ZELFFBQVEsRUFBUkEsUUFBUTtJQUFFTSxLQUFLLEVBQUxBLEtBQUs7SUFBRWtELEtBQUssRUFBTEEsS0FBSztJQUFFNUIsS0FBSyxFQUFMQSxLQUFLO0lBQUVpSixNQUFNLEVBQU5BLE1BQU07SUFBRTdCLElBQUksRUFBSkE7RUFBSSxDQUFDO0VBQ3ZHLElBQU1uSCxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDeUosUUFBUSxFQUFFO0VBRXRDLElBQU1DLGFBQWEsR0FBRzVKLEdBQUcsQ0FBQzZKLFNBQVMsQ0FBQzdKLEdBQUcsQ0FBQ3hELE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7RUFFbEUsSUFBSW9OLGFBQWEsQ0FBQ3BOLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDMUMsSUFBTXNOLEdBQUcsR0FBR0YsYUFBYSxDQUFDdk0sS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwQyxJQUFNME0sTUFBTSxHQUFHRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxVQUFDbk4sRUFBRTtNQUFBLE9BQUtBLEVBQUUsQ0FBQ1EsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUFBLEVBQUMsQ0FBQ21ELE1BQU0sQ0FBQyxVQUFDeUosQ0FBQyxFQUFFaEMsQ0FBQztNQUFBLE9BQUtBLENBQUMsR0FBRyxDQUFDO0lBQUEsRUFBQztJQUNyRSxJQUFNaUMsS0FBSyxHQUFHLE1BQU07SUFFcEJ4SSxRQUFRLENBQUN2RCxRQUFRLEdBQUc0TCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMxTSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNDcUUsUUFBUSxDQUFDakQsS0FBSyxHQUFHc0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxPQUFPLENBQUNELEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQzdNLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNURxRSxRQUFRLENBQUNDLEtBQUssR0FBR29JLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzJNLEdBQUcsQ0FBQyxVQUFDbk4sRUFBRTtNQUFBLE9BQUssQ0FBQ0EsRUFBRTtJQUFBLEVBQUM7SUFDekQ2RSxRQUFRLENBQUMzQixLQUFLLEdBQUdnSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMxTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMyTSxHQUFHLENBQUMsVUFBQ25OLEVBQUU7TUFBQSxPQUFLLENBQUNBLEVBQUU7SUFBQSxFQUFDO0lBQ3pEO0lBQ0E2RSxRQUFRLENBQUNzSCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUdlLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakM7SUFDQXJJLFFBQVEsQ0FBQ3lGLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzRDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakM7RUFFQSxPQUFPckksUUFBUTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmlEO0FBQ1c7QUFFckQsU0FBUzBHLGNBQWMsQ0FBQ25LLEtBQTZCLEVBQVE7RUFDbEUsSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNoQixJQUFNbU0sUUFBUSxHQUFHbk0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV6Qkgsd0VBQStCLENBQUMsVUFBVSxFQUFFc00sUUFBUSxDQUFDO0lBQ3JEbEwsMEZBQTJCLGFBQU1rTCxRQUFRLENBQUU7SUFDM0NsTCw4RkFBK0IsYUFBTWtMLFFBQVEsT0FBSTtFQUNuRDtFQUVBLElBQUluTSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFO0lBQ3JCLElBQU1vTSxRQUFRLEdBQUdwTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXpCSCx3RUFBK0IsQ0FBQyxVQUFVLEVBQUV1TSxRQUFRLENBQUM7SUFDckRuTCwwRkFBMkIsYUFBTW1MLFFBQVEsQ0FBRTtJQUMzQ25MLDhGQUErQixhQUFNbUwsUUFBUSxPQUFJO0VBQ25EO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJpRDtBQUNJO0FBRTlDLFNBQVM5QixlQUFlLENBQUNwTSxLQUFhLEVBQUU7RUFDN0MsSUFBSUEsS0FBSyxDQUFDd0QsTUFBTSxHQUFHLENBQUMsSUFBSXhELEtBQUssS0FBSyxXQUFXLEVBQUU7SUFDN0NNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFLLENBQUM7SUFDbEIyQix3RUFBK0IsQ0FBQyxRQUFRLEVBQUUzQixLQUFLLENBQUM7SUFDaEQ2QywrRUFBZSxHQUFHN0MsS0FBSztJQUN2QjZDLHFGQUFxQixHQUFHN0MsS0FBSztFQUMvQjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpRDtBQUNJO0FBRTlDLFNBQVNrTSxtQkFBbUIsQ0FBQ2xCLElBQTRCLEVBQVE7RUFDdEUsSUFBSUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsSUFDckJBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLElBQ3ZCQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxJQUN2QkEsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksSUFDeEJBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxhQUFhLElBQ3pCQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxJQUMxQkEsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksSUFDeEJBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxhQUFhLEVBQzVCO0lBQ0EsSUFBTXBDLElBQUksR0FBR29DLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFcEJySix3RUFBK0IsQ0FBQyxNQUFNLEVBQUVpSCxJQUFJLENBQUM7SUFDN0NoRywrRUFBZSxHQUFHZ0csSUFBSTtJQUN0QmhHLGtGQUFrQixHQUFHZ0csSUFBSTtFQUMzQjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CaUQ7QUFDVztBQUVyRCxTQUFTdUQsY0FBYyxDQUFDckssS0FBNkIsRUFBRTtFQUM1RCxJQUFJQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQ2hCLElBQU1zRCxRQUFRLEdBQUd0RCxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXpCSCx3RUFBK0IsQ0FBQyxVQUFVLEVBQUV5RCxRQUFRLENBQUM7SUFDckRyQywwRkFBMkIsYUFBTXFDLFFBQVEsQ0FBRTtJQUMzQ3JDLDhGQUErQixhQUFNcUMsUUFBUSxDQUFFO0VBQ2pEO0VBRUEsSUFBSXRELEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUU7SUFDckIsSUFBTXdELFFBQVEsR0FBR3hELEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFekJILHdFQUErQixDQUFDLFVBQVUsRUFBRTJELFFBQVEsQ0FBQztJQUNyRHZDLDBGQUEyQixhQUFNdUMsUUFBUSxDQUFFO0lBQzNDdkMsOEZBQStCLGFBQU11QyxRQUFRLENBQUU7RUFDakQ7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm9FO0FBQ2xDO0FBRVE7QUFDRjtBQUNhO0FBQ0E7QUFDSDtBQUNKO0FBQ0k7QUFFbEQsSUFBTXRELFFBQWtCLEdBQUcsRUFBRTtBQUM3QixJQUFNTSxLQUFlLEdBQUcsRUFBRTtBQUMxQixJQUFNa0QsS0FBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztBQUNuQyxJQUFNNUIsS0FBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztBQUFDLElBRTlCakMsZUFBZTtFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBLGdNQUtuQixpQkFBNkI0SixJQUFZLEVBQUU0QyxjQUErQjtRQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDeEU3Qyx1REFBVSxDQUFDQyxJQUFJLEVBQUU0QyxjQUFjLEVBQUUsSUFBSSxDQUFDNUksUUFBUSxDQUFDO2dCQUMvQzJILGtFQUFVLENBQUMzQixJQUFJLEVBQUU0QyxjQUFjLEVBQUUsSUFBSSxDQUFDNUksUUFBUSxDQUFDO2dCQUFDO2dCQUFBLE9BRVB0QyxnRUFBaUIsRUFBRTtjQUFBO2dCQUF0REUsUUFBMEI7Z0JBQUEsY0FFWEUsT0FBTztnQkFBQTtnQkFBQSxPQUFZRixRQUFRO2NBQUE7Z0JBQUEsNEJBQUVrQixNQUFNLENBQUMsVUFBQ3VFLElBQUk7a0JBQUEsT0FBSytDLDhEQUFhLENBQUMvQyxJQUFJLEVBQUUsS0FBSSxDQUFDckQsUUFBUSxDQUFDO2dCQUFBO2dCQUFyRyxJQUFJLENBQUNZLGFBQWEsZUFBVzdDLEdBQUc7Z0JBQ2hDLElBQUlpSSxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU80QyxjQUFjLEtBQUssUUFBUSxFQUFFO2tCQUMzRCxJQUFJLENBQUNoSSxhQUFhLEdBQUd0RCw4RUFBYSxDQUFDc0wsY0FBYyxFQUFFLElBQUksQ0FBQ2hJLGFBQWEsQ0FBQztnQkFDeEUsQ0FBQyxNQUFNO2tCQUNMLElBQUksQ0FBQ0EsYUFBYSxHQUFHdEQsOEVBQWEsQ0FBQ0Esc0ZBQXFCLEVBQUUsSUFBSSxDQUFDc0QsYUFBYSxDQUFDO2dCQUMvRTtnQkFFQSxJQUFJb0YsSUFBSSxLQUFLLE1BQU0sSUFBSSxPQUFPNEMsY0FBYyxLQUFLLFFBQVEsRUFBRTtrQkFDekQsSUFBSSxDQUFDaEksYUFBYSxHQUFHdkQsMkVBQVcsQ0FBQ3VMLGNBQWMsRUFBRSxJQUFJLENBQUNoSSxhQUFhLENBQUM7Z0JBQ3RFLENBQUMsTUFBTTtrQkFDTCxJQUFJLENBQUNBLGFBQWEsR0FBR3ZELDJFQUFXLENBQUNBLGtGQUFrQixFQUFFLElBQUksQ0FBQ3VELGFBQWEsQ0FBQztnQkFDMUU7Z0JBRUFyRCxpR0FBNEIsR0FBRyxFQUFFO2dCQUNqQ0Esc0ZBQWlCLENBQUMsSUFBSSxDQUFDcUQsYUFBYSxDQUFDO2dCQUFDLGNBRXRDbkQscUVBQUs7Z0JBQUE7Z0JBQUEsT0FBbUIsSUFBSSxDQUFDbUQsYUFBYTtjQUFBO2dCQUFBLDRCQUFFM0MsTUFBTTtnQkFBQSxZQUE1Q2lDLFVBQVU7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQ0FDakI7TUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUEsa0ZBNUJHOUQsZUFBZSxjQUN3QztFQUFDSyxRQUFRLEVBQVJBLFFBQVE7RUFBRU0sS0FBSyxFQUFMQSxLQUFLO0VBQUVrRCxLQUFLLEVBQUxBLEtBQUs7RUFBRTVCLEtBQUssRUFBTEE7QUFBSyxDQUFDO0FBQUEsa0ZBRHRGakMsZUFBZSxtQkFHc0JnSSxxREFBWTtBQTRCdkQsaUVBQWVoSSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DdkIsSUFBTXlNLGNBQWM7RUFBQSxvTEFBRztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBLE9BQ0xDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQztVQUFBO1lBQXpFQyxRQUFRO1lBQUE7WUFBQSxPQUNLQSxRQUFRLENBQUNDLElBQUksRUFBRTtVQUFBO1lBQTVCQyxJQUFJO1lBQUEsaUNBRUhBLElBQUk7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNaO0VBQUEsZ0JBTFlKLGNBQWM7SUFBQTtFQUFBO0FBQUEsR0FLMUI7Ozs7Ozs7Ozs7Ozs7O0FDTHVCO0FBQ007QUFFOUIsSUFBTU0sR0FBRyxHQUFHLElBQUlELGtEQUFHLEVBQUU7QUFFckJDLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDJCO0FBRUQ7QUFDSjtBQUNzQjtBQUNkO0FBQ3dDO0FBRXhFLElBQVdLLE1BQU07QUFJdkIsV0FKaUJBLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQU5BLE1BQU07QUFBQSxHQUFOQSxNQUFNLEtBQU5BLE1BQU07QUFBQSxJQU1sQlAsR0FBRztFQTZDUCxlQUFjO0lBQUE7SUFDWixJQUFJLENBQUNRLFdBQVcsR0FBRyxJQUFJTCxrREFBUSxDQUFDLFdBQVcsQ0FBQztJQUM1QyxJQUFJLENBQUNNLE1BQU0sR0FBRyxJQUFJekksc0VBQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDO0lBQzdDO0VBQ0Y7RUFBQztJQUFBO0lBQUEsT0FmRCw2QkFBNEI7TUFDMUIzQyxNQUFNLENBQUMxQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtRQUMxQyxJQUFNK00sSUFBSSxHQUFHckwsTUFBTSxDQUFDQyxRQUFRLENBQUNvTCxJQUFJLENBQUNoTCxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTFDc0ssR0FBRyxDQUFDVyxhQUFhLENBQUNELElBQUksQ0FBQztNQUN6QixDQUFDLENBQUM7TUFDRixJQUFNQSxJQUFJLEdBQUdyTCxNQUFNLENBQUNDLFFBQVEsQ0FBQ29MLElBQUksQ0FBQ2hMLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFFMUNzSyxHQUFHLENBQUNXLGFBQWEsQ0FBQ0QsSUFBSSxDQUFDO0lBQ3pCO0VBQUM7SUFBQTtJQUFBLE9BUUQsZUFBTTtNQUNKVixHQUFHLENBQUN6SCxTQUFTLENBQUM3RixNQUFNLENBQUMsSUFBSSxDQUFDK04sTUFBTSxDQUFDdk8sTUFBTSxFQUFFLENBQUM7TUFDMUM4TixHQUFHLENBQUNXLGFBQWEsQ0FBQyxXQUFXLENBQUM7TUFDOUIsSUFBSSxDQUFDQyxpQkFBaUIsRUFBRTtJQUMxQjtFQUFDO0lBQUE7SUFBQSxPQTlDRCx1QkFBcUJDLE1BQWMsRUFBRTtNQUNuQyxJQUFNQyxlQUFlLEdBQUd6TyxRQUFRLENBQUNtQixhQUFhLFlBQUt3TSxHQUFHLENBQUNlLGFBQWEsRUFBRztNQUV2RSxJQUFJRCxlQUFlLEVBQUVBLGVBQWUsQ0FBQy9OLE1BQU0sRUFBRTtNQUM3QyxJQUFJaU8sSUFBaUIsR0FBRyxJQUFJO01BRTVCLElBQUlILE1BQU0sS0FBSyxFQUFFLElBQUlBLE1BQU0sS0FBS04sTUFBTSxDQUFDVSxTQUFTLEVBQUU7UUFDaERELElBQUksR0FBRyxJQUFJYixrREFBUSxDQUFDSSxNQUFNLENBQUNVLFNBQVMsQ0FBQztRQUNyQy9DLDhGQUFtQixFQUFFO01BQ3ZCLENBQUMsTUFBTSxJQUFJMkMsTUFBTSxLQUFLTixNQUFNLENBQUNILFVBQVUsRUFBRTtRQUN2Q1ksSUFBSSxHQUFHLElBQUlaLCtDQUFVLENBQUNTLE1BQU0sQ0FBQztNQUMvQixDQUFDLE1BQU0sSUFBSUEsTUFBTSxLQUFLTixNQUFNLENBQUNGLFFBQVEsRUFBRTtRQUNyQ1csSUFBSSxHQUFHLElBQUlYLDZDQUFRLENBQUNRLE1BQU0sQ0FBQztNQUM3QixDQUFDLE1BQU07UUFDTEcsSUFBSSxHQUFHLElBQUlWLGlEQUFZLENBQUMsVUFBVSxDQUFDO01BQ3JDO01BRUEsSUFBSVUsSUFBSSxFQUFFO1FBQ1IsSUFBTUUsUUFBUSxHQUFHRixJQUFJLENBQUM5TyxNQUFNLEVBQUU7UUFFOUJnUCxRQUFRLENBQUMxUCxFQUFFLEdBQUd3TyxHQUFHLENBQUNlLGFBQWE7UUFDL0JmLEdBQUcsQ0FBQ3pILFNBQVMsQ0FBQzdGLE1BQU0sQ0FBQ3dPLFFBQVEsQ0FBQztNQUNoQztJQUNGO0VBQUM7RUFBQTtBQUFBO0FBQUEsa0ZBaENHbEIsR0FBRyxlQUNpQzNOLFFBQVEsQ0FBQzhPLElBQUk7QUFBQSxrRkFEakRuQixHQUFHLG1CQUtnQyxjQUFjO0FBcUR2RCxpRUFBZUEsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEV1QjtBQUFBLElBRW5DSSxVQUFVO0VBQUE7RUFBQTtFQUtkLG9CQUFZNU8sRUFBVSxFQUFFO0lBQUE7SUFBQSx5QkFDaEJBLEVBQUU7RUFDVjtFQUFDO0lBQUE7SUFBQSxPQUVELGtCQUFTO01BQ1AsSUFBTW1HLEtBQUssR0FBRyxJQUFJLENBQUN5SixpQkFBaUIsQ0FBQ2hCLFVBQVUsQ0FBQ2lCLFVBQVUsQ0FBQ0MsU0FBUyxDQUFDO01BRXJFLElBQUksQ0FBQy9JLFNBQVMsQ0FBQzdGLE1BQU0sQ0FBQ2lGLEtBQUssQ0FBQztNQUU1QixPQUFPLElBQUksQ0FBQ1ksU0FBUztJQUN2QjtFQUFDO0VBQUE7QUFBQSxFQWZzQm1FLDREQUFJO0FBQUEsa0ZBQXZCMEQsVUFBVSxnQkFDTTtFQUNsQmtCLFNBQVMsRUFBRTtBQUNiLENBQUM7QUFlSCxpRUFBZWxCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZ0I7QUFBQSxJQUVuQ0MsUUFBUTtFQUFBO0VBQUE7RUFLWixrQkFBWTdPLEVBQVUsRUFBRTtJQUFBO0lBQUEseUJBQ2hCQSxFQUFFO0VBQ1Y7RUFBQztJQUFBO0lBQUEsT0FFRCxrQkFBUztNQUNQLElBQU1tRyxLQUFLLEdBQUcsSUFBSSxDQUFDeUosaUJBQWlCLENBQUNmLFFBQVEsQ0FBQ2dCLFVBQVUsQ0FBQ0MsU0FBUyxDQUFDO01BRW5FLElBQUksQ0FBQy9JLFNBQVMsQ0FBQzdGLE1BQU0sQ0FBQ2lGLEtBQUssQ0FBQztNQUU1QixPQUFPLElBQUksQ0FBQ1ksU0FBUztJQUN2QjtFQUFDO0VBQUE7QUFBQSxFQWZvQm1FLDREQUFJO0FBQUEsa0ZBQXJCMkQsUUFBUSxnQkFDUTtFQUNsQmlCLFNBQVMsRUFBRTtBQUNiLENBQUM7QUFlSCxpRUFBZWpCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCa0I7QUFDWTtBQUNUO0FBQ3dCO0FBQ1I7QUFDMUI7QUFDbUI7QUFDQTtBQUNIO0FBQ2xEO0FBQzBFO0FBQUEsSUFFcEVGLFFBQVE7RUFBQTtFQUFBO0VBS1osa0JBQVkzTyxFQUFVLEVBQUU7SUFBQTtJQUFBLHlCQUNoQkEsRUFBRTtFQUNWO0VBQUM7SUFBQTtJQUFBLE9BRUQsa0JBQVM7TUFDUCxJQUFNbUcsS0FBSyxHQUFHLElBQUksQ0FBQ3lKLGlCQUFpQixDQUFDakIsUUFBUSxDQUFDa0IsVUFBVSxDQUFDQyxTQUFTLENBQUM7TUFDbkUsSUFBTUMsUUFBUSxHQUFHLElBQUl2TyxnRUFBRyxDQUFDLElBQUksQ0FBQ3VGLFNBQVMsRUFBRSxXQUFXLENBQUM7TUFDckQsSUFBTTNDLE1BQU0sR0FBRyxJQUFJNUMsZ0VBQUcsQ0FBQ3VPLFFBQVEsQ0FBQ3hQLE9BQU8sRUFBRSxRQUFRLENBQUM7TUFDbEQsSUFBTXdCLFFBQVEsR0FBRyxJQUFJSixzRUFBTSxDQUFDLElBQUksQ0FBQ29GLFNBQVMsRUFBRSxVQUFVLEVBQUUvRCxtRUFBbUIsRUFBRSxDQUFDO01BQzlFLElBQU1YLEtBQUssR0FBRyxJQUFJVixzRUFBTSxDQUFDLElBQUksQ0FBQ29GLFNBQVMsRUFBRSxPQUFPLEVBQUUvRCwrREFBZSxFQUFFLENBQUM7TUFDcEUsSUFBTWdOLFVBQVUsR0FBRyxJQUFJbE4sMEVBQVUsQ0FBQyxJQUFJLENBQUNpRSxTQUFTLEVBQUUsT0FBTyxFQUFFL0Qsb0VBQW9CLEVBQUUsQ0FBQztNQUNsRixJQUFNaU4sVUFBVSxHQUFHLElBQUluTiwwRUFBVSxDQUFDLElBQUksQ0FBQ2lFLFNBQVMsRUFBRSxPQUFPLEVBQUUvRCxvRUFBb0IsRUFBRSxDQUFDO01BQ2xGLElBQU1rTixXQUFXLEdBQUcsSUFBSTFPLGdFQUFHLENBQUMsSUFBSSxDQUFDdUYsU0FBUyxFQUFFLGNBQWMsQ0FBQztNQUMzRCxJQUFNb0osWUFBWSxHQUFHLElBQUkzTyxnRUFBRyxDQUFDLElBQUksQ0FBQ3VGLFNBQVMsRUFBRSxlQUFlLENBQUM7TUFDN0QsSUFBTXFKLE1BQU0sR0FBRyxJQUFJek4sdUVBQU0sQ0FBQyxJQUFJLENBQUNvRSxTQUFTLEVBQUUsUUFBUSxDQUFDO01BQ25ELElBQU1zSixLQUFLLEdBQUcsSUFBSXROLHFFQUFLLENBQUMsSUFBSSxDQUFDZ0UsU0FBUyxFQUFFLE9BQU8sQ0FBQztNQUNoRCxJQUFNNkYsTUFBTSxHQUFHLElBQUloSyx1RUFBTSxDQUFDLElBQUksQ0FBQ21FLFNBQVMsRUFBRSxRQUFRLENBQUM7TUFDbkQsSUFBTXVKLFdBQVcsR0FBRyxJQUFJek4sZ0ZBQVcsQ0FBQyxJQUFJLENBQUNrRSxTQUFTLEVBQUUsY0FBYyxFQUFFL0QsaUVBQWlCLEVBQUUsQ0FBQztNQUN4RixJQUFNdU4sYUFBYSxHQUFHLElBQUk5SyxxRkFBYSxDQUFDLElBQUksQ0FBQ3NCLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztNQUV6RW9KLFlBQVksQ0FBQzVQLE9BQU8sQ0FBQ1csTUFBTSxDQUFDa1AsTUFBTSxDQUFDN1AsT0FBTyxFQUFFOFAsS0FBSyxDQUFDOVAsT0FBTyxFQUFFcU0sTUFBTSxDQUFDck0sT0FBTyxDQUFDO01BQzFFNkQsTUFBTSxDQUFDN0QsT0FBTyxDQUFDVyxNQUFNLENBQ25CcVAsYUFBYSxDQUFDaFEsT0FBTyxFQUNyQndCLFFBQVEsQ0FBQ3hCLE9BQU8sRUFDaEI4QixLQUFLLENBQUM5QixPQUFPLEVBQ2J5UCxVQUFVLENBQUN6UCxPQUFPLEVBQ2xCMFAsVUFBVSxDQUFDMVAsT0FBTyxDQUNuQjtNQUNEMlAsV0FBVyxDQUFDM1AsT0FBTyxDQUFDVyxNQUFNLENBQUNpUCxZQUFZLENBQUM1UCxPQUFPLEVBQUUrUCxXQUFXLENBQUMvUCxPQUFPLENBQUM7TUFDckV3UCxRQUFRLENBQUN4UCxPQUFPLENBQUNXLE1BQU0sQ0FBQ2tELE1BQU0sQ0FBQzdELE9BQU8sRUFBRTJQLFdBQVcsQ0FBQzNQLE9BQU8sQ0FBQztNQUM1RCxJQUFJLENBQUN3RyxTQUFTLENBQUM3RixNQUFNLENBQUNpRixLQUFLLEVBQUU0SixRQUFRLENBQUN4UCxPQUFPLENBQUM7O01BRTlDOztNQUVBLE9BQU8sSUFBSSxDQUFDd0csU0FBUztJQUN2QjtFQUFDO0VBQUE7QUFBQSxFQXhDb0JtRSw0REFBSTtBQUFBLGtGQUFyQnlELFFBQVEsZ0JBQ1E7RUFDbEJtQixTQUFTLEVBQUU7QUFDYixDQUFDO0FBd0NILGlFQUFlbkIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRrQjtBQUFBLElBRW5DRyxZQUFZO0VBQUE7RUFBQTtFQUtoQixzQkFBWTlPLEVBQVUsRUFBRTtJQUFBO0lBQUEseUJBQ2hCQSxFQUFFO0VBQ1Y7RUFBQztJQUFBO0lBQUEsT0FFRCxrQkFBUztNQUNQLElBQU1tRyxLQUFLLEdBQUcsSUFBSSxDQUFDeUosaUJBQWlCLENBQUNkLFlBQVksQ0FBQ2UsVUFBVSxDQUFDQyxTQUFTLENBQUM7TUFFdkUsSUFBSSxDQUFDL0ksU0FBUyxDQUFDN0YsTUFBTSxDQUFDaUYsS0FBSyxDQUFDO01BRTVCLE9BQU8sSUFBSSxDQUFDWSxTQUFTO0lBQ3ZCO0VBQUM7RUFBQTtBQUFBLEVBZndCbUUsNERBQUk7QUFBQSxrRkFBekI0RCxZQUFZLGdCQUNJO0VBQ2xCZ0IsU0FBUyxFQUFFO0FBQ2IsQ0FBQztBQWVILGlFQUFlaEIsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJzQjtBQUFBLElBRzNDOUwsS0FBSztFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBLDRMQUNUO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUMyQm1MLGdFQUFjLEVBQUU7Y0FBQTtnQkFBQTtnQkFBbENqTCxRQUFRLHlCQUFSQSxRQUFRO2dCQUFBLGlDQUVSQSxRQUFRO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBQ2hCO01BQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBLDBMQUVEO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUNxQyxJQUFJLENBQUNDLFdBQVcsRUFBRTtjQUFBO2dCQUEvQzJHLE1BQW9CO2dCQUVwQjBHLE1BQXFCLEdBQUcsRUFBRTtnQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSwyQkFFUDFHLE1BQU07Y0FBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFkbkIsSUFBSTtnQkFDYjhILFNBQVMsR0FBRzlILElBQUksQ0FBQ3RHLEtBQUssQ0FBQ3BDLFdBQVcsRUFBRTtnQkFDcEM2SixPQUFNLEdBQUcyRyxTQUFTLENBQUMzRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHMEQsU0FBUyxDQUFDdk0sS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFFckVzTSxNQUFNLENBQUMvRSxJQUFJLENBQUMzQixPQUFNLENBQUM7Y0FBQztnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtjQUFBO2dCQUFBLGtDQUdmdUMsS0FBSyxDQUFDRSxJQUFJLENBQUMsSUFBSW1FLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDLENBQUM7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQ0FDbkM7TUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO0VBQUE7SUFBQTtJQUFBO01BQUEsOExBRUQ7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ3FDeE4sS0FBSyxDQUFDRyxXQUFXLEVBQUU7Y0FBQTtnQkFBaEQyRyxNQUFvQjtnQkFFcEI2RyxVQUF5QixHQUFHLEVBQUU7Z0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsNEJBRVg3RyxNQUFNO2NBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBZG5CLElBQUk7Z0JBQ25CZ0ksVUFBVSxDQUFDbEYsSUFBSSxDQUFDOUMsSUFBSSxDQUFDNUcsUUFBUSxDQUFDOUIsV0FBVyxFQUFFLENBQUM7Y0FBQztnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtjQUFBO2dCQUFBLGtDQUd4Q29NLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLElBQUltRSxHQUFHLENBQUNDLFVBQVUsQ0FBQyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBQ3ZDO01BQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBLCtMQUVEO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUNxQyxJQUFJLENBQUN4TixXQUFXLEVBQUU7Y0FBQTtnQkFBL0MyRyxNQUFvQjtnQkFFMUJBLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxVQUFDM0UsQ0FBQyxFQUFFNEUsQ0FBQztrQkFBQSxPQUFLNUUsQ0FBQyxDQUFDYixLQUFLLEdBQUd5RixDQUFDLENBQUN6RixLQUFLO2dCQUFBLEVBQUM7Z0JBQUMsa0NBRWxDO2tCQUFDVCxHQUFHLEVBQUVnRixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUN2RSxLQUFLO2tCQUFFTixHQUFHLEVBQUU2RSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUN2RTtnQkFBSyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBQ3JEO01BQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0lBQUE7SUFBQTtNQUFBLCtMQUVEO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUNxQyxJQUFJLENBQUNwQyxXQUFXLEVBQUU7Y0FBQTtnQkFBL0MyRyxNQUFvQjtnQkFFMUJBLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxVQUFDM0UsQ0FBQyxFQUFFNEUsQ0FBQztrQkFBQSxPQUFLNUUsQ0FBQyxDQUFDekMsS0FBSyxHQUFHcUgsQ0FBQyxDQUFDckgsS0FBSztnQkFBQSxFQUFDO2dCQUFDLGtDQUVsQztrQkFBQ21CLEdBQUcsRUFBRWdGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ25HLEtBQUs7a0JBQUVzQixHQUFHLEVBQUU2RSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUNuRztnQkFBSyxDQUFDO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBQ3JEO01BQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUdILGlFQUFlWCxLQUFLOzs7Ozs7Ozs7O0FDdERwQixjQUFjLHlEQUFpQztBQUMvQztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsR0FBRyxFQUFFLHlCQUF5QixTQUFTLHlCQUF5QjtBQUNoRSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQyx5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7Ozs7QUNyVGpHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUcsRUFBRSx5QkFBeUIsU0FBUyx5QkFBeUI7QUFDaEU7QUFDQSwwQkFBMEIseUJBQXlCLFNBQVMseUJBQXlCOzs7Ozs7Ozs7O0FDVHJGOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx5Q0FBK0I7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcUQ7QUFDdEM7QUFDZixpQ0FBaUMsZ0VBQWdCO0FBQ2pEOzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKK0M7QUFDL0M7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZEQUFhO0FBQy9DO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQitDO0FBQ2hDO0FBQ2YsUUFBUSw2REFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMaUQ7QUFDbEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsOERBQWM7QUFDaEM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFlBQVksNkVBQTZFO0FBQ2pHO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGa0M7QUFDNkI7QUFDaEQ7QUFDZixlQUFlLHNEQUFPO0FBQ3RCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxTQUFTLHFFQUFxQjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDWTtBQUNZO0FBQ3RCO0FBQ3BDO0FBQ2YsU0FBUyw4REFBYyxTQUFTLG9FQUFvQixZQUFZLDBFQUEwQixZQUFZLCtEQUFlO0FBQ3JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVEO0FBQ0o7QUFDc0I7QUFDbEI7QUFDeEM7QUFDZixTQUFTLGlFQUFpQixTQUFTLCtEQUFlLFNBQVMsMEVBQTBCLFNBQVMsaUVBQWlCO0FBQy9HOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ25CO0FBQ2YsTUFBTSxzREFBTztBQUNiO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWa0M7QUFDUztBQUM1QjtBQUNmLFlBQVksMkRBQVc7QUFDdkIsU0FBUyxzREFBTztBQUNoQjs7Ozs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDUnFEO0FBQ3RDO0FBQ2Y7QUFDQSxvQ0FBb0MsZ0VBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixnRUFBZ0I7QUFDdEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguc2Nzcz9mNTU3Iiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvY2hlY2tib3gvY2hla2Nib3hUbXAudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2Rpdi9kaXYudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2ZpbHRlckJ1dHRvbnMvYWN0aW9uc0ZvclJlc2V0LnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9maWx0ZXJCdXR0b25zL2ZpbHRlckJ1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL2ZvdW5kL2ZvdW5kLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9sYWJlbC9sYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvcHJvZHVjdExpc3QvaW5mby50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvcHJvZHVjdExpc3QvaXRlbS50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvcHJvZHVjdExpc3QvcHJvZHVjdExpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL3JhbmdlL2RvRm9yTWF4LnRzIiwid2VicGFjazovLy8uL2NvcmUvY29tcG9uZW50cy9yYW5nZS9kb0Zvck1pbi50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvcmFuZ2UvbXVsdGVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvcmFuZ2UvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL3NlYXJjaC9pbnB1dFRtcC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbXBvbmVudHMvc2VsZWN0L2NyZWF0ZU9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3RUbXAudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL3NlbGVjdC9zb3J0SXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb21wb25lbnRzL3NwYW4vc3Bhbi50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL3RlbXBsYXRlcy9jb21wb25lbnRzLnRzIiwid2VicGFjazovLy8uL2NvcmUvdGVtcGxhdGVzL3BhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS90ZW1wbGF0ZXMvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vZmlsdHJhdGlvbi9hZGRPcHRpb25zLnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vY2hlY2tBbGxJdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9maWx0cmF0aW9uL2VtcHR5UHJvbWlzZS50cyIsIndlYnBhY2s6Ly8vLi9maWx0cmF0aW9uL2Zyb21RdWVyeS9hZGRGaWx0ZXJzRnJvbVF1ZXJ5LnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vZnJvbVF1ZXJ5L2FkZFRvUXVlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZmlsdHJhdGlvbi9mcm9tUXVlcnkvZ2V0RnJvbVF1ZXJ5LnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vZnJvbVF1ZXJ5L3ByaWNlRnJvbVF1ZXJ5LnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vZnJvbVF1ZXJ5L3NlYXJjaEZyb21RdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9maWx0cmF0aW9uL2Zyb21RdWVyeS9zZWxlY3RTb3J0RnJvbVF1ZXJ5LnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vZnJvbVF1ZXJ5L3N0b2NrRnJvbVF1ZXJ5LnRzIiwid2VicGFjazovLy8uL2ZpbHRyYXRpb24vZ2V0RmlsdGVyZWRJdGVtLnRzIiwid2VicGFjazovLy8uL2h0dHAvY2F0YWxvZ0FQSS50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmFza2V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2l0ZW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFpbi9tYWluLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL25vdEZvdW5kL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRlL3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge1RlbXBsYXRlfSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3RlbXBsYXRlJztcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBkaXZDbGFzczogU3RyaW5nKSB7XG4gICAgc3VwZXIocGFyZW50LCAnYnV0dG9uJywgYCR7ZGl2Q2xhc3N9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiLy8gaW1wb3J0IHtUZW1wbGF0ZX0gZnJvbSAnQC9jb3JlL3RlbXBsYXRlcy90ZW1wbGF0ZSc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9zcGFuL3NwYW4nO1xuaW1wb3J0IENoZWNrYm94VG1wIGZyb20gJy4vY2hla2Nib3hUbXAnO1xuLy8gaW1wb3J0IHtnZXRGcm9tUXVlcnl9IGZyb20gJ0AvZmlsdHJhdGlvbi9nZXRGcm9tUXVlcnknO1xuXG4vLyBjb25zdCBjaGVja2VkQ0hieCA9IGdldEZyb21RdWVyeSgpLmNhdGVnb3J5LmNvbmNhdChnZXRGcm9tUXVlcnkoKS5icmFuZCk7XG5cbmNsYXNzIENoYnggZXh0ZW5kcyBDaGVja2JveFRtcCB7XG4gIHN0YXRpYyBjaGVja2VkOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIHZhbDogc3RyaW5nKSB7XG4gICAgc3VwZXIocGFyZW50LCAnbGFiZWxfX2NoZWNrYm94IHZpc3VhbGx5LWhpZGRlbicsIHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICB2YWx1ZTogYCR7dmFsfWAsXG4gICAgICBpZDogYCR7dmFsfWAudG9Mb3dlckNhc2UoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29udGVudChwYXJlbnQsIHZhbCk7XG5cbiAgICBpZiAoQ2hieC5jaGVja2VkICYmIENoYnguY2hlY2tlZC5pbmRleE9mKHZhbC50b0xvd2VyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgd29yayAke3ZhbH1gKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBhZGRDb250ZW50KGlubmVyOiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGVsID0gbmV3IENvbnRlbnQoaW5uZXIsIHZhbHVlLCAnbGFiZWwnKTtcblxuICAgIGVsLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYng7XG4iLCJjbGFzcyBDaGVja2JveFRtcCB7XG4gIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgICB0YWdDbGFzczogc3RyaW5nLFxuICAgIGF0dHI/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgaWYgKHR5cGVvZiB0YWdDbGFzcyA9PT0gJ3N0cmluZycpIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnRhZ0NsYXNzLnNwbGl0KCcgJykpO1xuXG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgaWYgKGF0dHIpIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHIpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94VG1wO1xuIiwiaW1wb3J0IHtUZW1wbGF0ZX0gZnJvbSAnQC9jb3JlL3RlbXBsYXRlcy90ZW1wbGF0ZSc7XG5cbmNsYXNzIERpdiBleHRlbmRzIFRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgZGl2Q2xhc3M6IFN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudCwgJ2RpdicsIGAke2RpdkNsYXNzfWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpdjtcbiIsImltcG9ydCB7VGVtcGxhdGV9IGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuaW1wb3J0IENoYnggZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3gnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uL2xhYmVsL2xhYmVsJztcbi8vIGltcG9ydCB7ZmlsdGVyQnlDYXRlZ29yeX0gZnJvbSAnQC9maWx0cmF0aW9uL2ZpbHRyYXRpb24nO1xuaW1wb3J0IEdldEZpbHRlcmVkSXRlbSBmcm9tICdAL2ZpbHRyYXRpb24vZ2V0RmlsdGVyZWRJdGVtJztcblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgVGVtcGxhdGUge1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocGFycmVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZywgaXRlbXM6IFByb21pc2U8c3RyaW5nW10+KSB7XG4gICAgc3VwZXIocGFycmVudCwgJ2RpdicsIHR5cGUpO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zdGFydChpdGVtcyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRyYXdWYXJpYW50c0ZvckNhdGVnb3JpZXMoZWw6IHN0cmluZykge1xuICAgIC8qXG4gICAgKiDQkiDRjdGC0L7QvCDQvNC10YLQvtC00LUg0LggZHJhd0NoZWNrYm94ZXNGb3JCcmFuZHMg0LrQsNC60L7QuSDRgtC+INC90LXQvtCx0YvRh9Cw0LnQvdGL0Lkg0L/RgNC40LrQvtC7XG4gICAgKiDQndC1INC80L7Qs9GDINC/0L7Qu9GD0YfQuNGC0YwgdGhpcy5lbGVtZW50INC4INC40Lcg0LfQsCDRjdGC0L7Qs9C+INC80LXRgtC+0LTRiyDQtNGD0LHQu9C40YDRg9GO0YLRgdGPINC4XG4gICAgKiDQvdCwINC60LDQttC00YvQuSDRjdC70LXQvNC10L3RgiDQvtCx0YDQsNGJ0LDRjtGC0YHRjyDQuiDQlNCe0Jwg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDRgNC+0LTQuNGC0LXQu9GPINGH0YLQvtCx0Ysg0LJcbiAgICAqINC90LXQs9C+INC00L7QsdCw0LLQuNGC0Ywg0YfQtdC60LHQvtC60YEg0YEg0L3QsNC30LLQsNC90LjQtdC8XG4gICAgKi9cbiAgICBjb25zdCBjYXRlZ29yeTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5Jyk7XG4gICAgY29uc3QgbGFiZWwgPSBuZXcgTGFiZWwoY2F0ZWdvcnkhLCAnY2F0ZWdvcnknKTtcbiAgICBjb25zdCBjaGVja2JveCA9IG5ldyBDaGJ4KGxhYmVsLmVsZW1lbnQsIGVsKTtcblxuICAgIGNoZWNrYm94LnJlbmRlcigpO1xuICAgIGxhYmVsLnJlbmRlcigpO1xuICAgIGNoZWNrYm94LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnY2F0ZWdvcnknLCBjaGVja2JveC5lbGVtZW50LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZHJhd1ZhcmlhbnRzRm9yQnJhbmRzKGVsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBicmFuZDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJyYW5kJyk7XG4gICAgY29uc3QgbGFiZWwgPSBuZXcgTGFiZWwoYnJhbmQhLCAnY2F0ZWdvcnknKTtcbiAgICBjb25zdCBjaGVja2JveCA9IG5ldyBDaGJ4KGxhYmVsLmVsZW1lbnQsIGVsKTtcblxuICAgIGNoZWNrYm94LnJlbmRlcigpO1xuICAgIGxhYmVsLnJlbmRlcigpO1xuICAgIGNoZWNrYm94LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2cobGFiZWwuZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKCdicmFuZCcsIGNoZWNrYm94LmVsZW1lbnQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydChpdGVtczogUHJvbWlzZTxzdHJpbmdbXT4pIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICBpdGVtc1xuICAgICAgICAudGhlbigoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICBjYXRlZ29yeS5mb3JFYWNoKHRoaXMuZHJhd1ZhcmlhbnRzRm9yQ2F0ZWdvcmllcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdicmFuZCcpIHtcbiAgICAgIGl0ZW1zXG4gICAgICAgIC50aGVuKChicmFuZCkgPT4ge1xuICAgICAgICAgIGJyYW5kLmZvckVhY2godGhpcy5kcmF3VmFyaWFudHNGb3JCcmFuZHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiaW1wb3J0IHtnZXRGcm9tUXVlcnl9IGZyb20gJ0AvZmlsdHJhdGlvbi9mcm9tUXVlcnkvZ2V0RnJvbVF1ZXJ5JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL3NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL3Byb2R1Y3RMaXN0L3Byb2R1Y3RMaXN0JztcbmltcG9ydCBNdWx0aVJhbmdlIGZyb20gJy4uL3JhbmdlL211bHRlUmFuZ2UnO1xuaW1wb3J0IEdldEZpbHRlcmVkSXRlbSBmcm9tICdAL2ZpbHRyYXRpb24vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCBGb3VuZCBmcm9tICcuLi9mb3VuZC9mb3VuZCc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnQC9zdGF0ZS9zdGF0ZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb25Gb3JSZXNldCgpIHtcbiAgY29uc3QgcHJvZHVjdHMgPSBTdGF0ZS5nZXRQcm9kdWN0cygpO1xuICBjb25zdCBwcm9kdWN0c0xlbmd0aCA9IChhd2FpdCBQcm9taXNlLmFsbChhd2FpdCBwcm9kdWN0cykpLmxlbmd0aDtcbiAgY29uc3QgcHJpY2VzID0gYXdhaXQgU3RhdGUuZ2V0TWluTWF4UHJpY2UoKTtcbiAgY29uc3Qgc3RvY2sgPSBhd2FpdCBTdGF0ZS5nZXRNaW5NYXhTdG9jaygpO1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgY29uc3QgcG9zaXRpb25Gcm9tID0gdXJsLmluZGV4T2YoJy8/Y2F0ZWdvcnknKTtcbiAgY29uc3Qge2JyYW5kLCBjYXRlZ29yeX0gPSBnZXRGcm9tUXVlcnkoKTtcbiAgY29uc3QgY2xlYW5VcmwgPSB1cmwuc2xpY2UoMCwgcG9zaXRpb25Gcm9tKTtcblxuICBjYXRlZ29yeS5jb25jYXQoYnJhbmQpLmZpbHRlcigoZWwpID0+IGVsICE9PSAnJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBjaGVja2JveCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2VsfWApO1xuXG4gICAgY2hlY2tib3ghLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSk7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgnb2JqZWN0IG9yIHN0cmluZycsICdUaXRsZScsIGNsZWFuVXJsKTtcbiAgU2VsZWN0LmVsLnZhbHVlID0gJ3NvcnRPcHRpb25zJztcbiAgU2VsZWN0LnNlbGVjdFZhbHVlID0gJyc7XG4gIFNlYXJjaC5lbC52YWx1ZSA9ICcnO1xuICBTZWFyY2guc2VhcmNoaW5nVmFsdWUgPSAnJztcbiAgUHJvZHVjdExpc3QuZWxlbS50ZXh0Q29udGVudCA9ICcnO1xuICBNdWx0aVJhbmdlLm1pblByaWNlRWwudmFsdWUgPSAnMCc7XG4gIE11bHRpUmFuZ2UubWluUHJpY2UudGV4dENvbnRlbnQgPSBgJHtwcmljZXMubWlufSAkYDtcbiAgTXVsdGlSYW5nZS5tYXhQcmljZUVsLnZhbHVlID0gJzk5OTk5OSc7XG4gIE11bHRpUmFuZ2UubWF4UHJpY2UudGV4dENvbnRlbnQgPSBgJHtwcmljZXMubWF4fSAkYDtcbiAgTXVsdGlSYW5nZS5taW5Tcm9ja0VsLnZhbHVlID0gJzAnO1xuICBNdWx0aVJhbmdlLm1pblN0b2NrLnRleHRDb250ZW50ID0gYCR7c3RvY2subWlufWA7XG4gIE11bHRpUmFuZ2UubWF4U3JvY2tFbC52YWx1ZSA9ICc5OTk5OTknO1xuICBNdWx0aVJhbmdlLm1heFN0b2NrLnRleHRDb250ZW50ID0gYCR7c3RvY2subWF4fWA7XG4gIEdldEZpbHRlcmVkSXRlbS5zZWxlY3RlZC5jYXRlZ29yeSA9IFtdO1xuICBHZXRGaWx0ZXJlZEl0ZW0uc2VsZWN0ZWQuYnJhbmQgPSBbXTtcbiAgR2V0RmlsdGVyZWRJdGVtLnNlbGVjdGVkLnByaWNlID0gWzAsIDk5OTk5OV07XG4gIEdldEZpbHRlcmVkSXRlbS5zZWxlY3RlZC5zdG9jayA9IFswLCA5OTk5OTldO1xuICBQcm9kdWN0TGlzdC5zdGFydChwcm9kdWN0cyk7XG4gIEZvdW5kLmZyb21GaWx0ZXIocHJvZHVjdHNMZW5ndGgpO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vZGl2L2Rpdic7XG5pbXBvcnQge2FjdGlvbkZvclJlc2V0fSBmcm9tICcuL2FjdGlvbnNGb3JSZXNldCc7XG5cbmNsYXNzIEZpbHRlckJ1dHRvbnMgZXh0ZW5kcyBEaXYge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0YWdDbGFzczogc3RyaW5nKSB7XG4gICAgc3VwZXIocGFyZW50LCB0YWdDbGFzcyk7XG5cbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBhc3luYyBzdGFydCgpIHtcbiAgICBjb25zdCByZXNldCA9IG5ldyBCdXR0b24odGhpcy5lbGVtZW50LCAnZmlsdGVyLWJ1dHRvbnNfX3Jlc2V0IGZpbHRlci1idXR0b25zX19idXR0b24nKTtcbiAgICBjb25zdCBjb3B5ID0gbmV3IEJ1dHRvbih0aGlzLmVsZW1lbnQsICdmaWx0ZXItYnV0dG9uc19fY29weSBmaWx0ZXItYnV0dG9uc19fYnV0dG9uJyk7XG5cbiAgICByZXNldC5lbGVtZW50LnRleHRDb250ZW50ID0gJ1Jlc2V0JztcbiAgICBjb3B5LmVsZW1lbnQudGV4dENvbnRlbnQgPSAnQ29weSBsaW5rJztcblxuICAgIHJlc2V0LmVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uIGNsaWNrKCkge1xuICAgICAgYWN0aW9uRm9yUmVzZXQoKTtcbiAgICB9O1xuXG4gICAgY29weS5lbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiBjbGljaygpIHtcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgfTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQocmVzZXQuZWxlbWVudCwgY29weS5lbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b25zO1xuIiwiaW1wb3J0IERpdiBmcm9tICcuLi9kaXYvZGl2JztcbmltcG9ydCB7SUl0ZW19IGZyb20gJ0AvdHlwZXMvdHlwZSc7XG5pbXBvcnQgR2V0RmlsdGVyZWRJdGVtIGZyb20gJ0AvZmlsdHJhdGlvbi9nZXRGaWx0ZXJlZEl0ZW0nO1xuaW1wb3J0IFN0YXRlIGZyb20gJ0Avc3RhdGUvc3RhdGUnO1xuXG5jbGFzcyBGb3VuZCBleHRlbmRzIERpdiB7XG4gIHN0YXRpYyBlbGVtOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0YWdDbGFzczogc3RyaW5nKSB7XG4gICAgc3VwZXIocGFyZW50LCB0YWdDbGFzcyk7XG4gICAgRm91bmQuZWxlbSA9IHRoaXMuZWxlbWVudDtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBhc3luYyBzdGFydCgpIHtcbiAgICBGb3VuZC5lbGVtLnRleHRDb250ZW50ID0gYEZvdW5kOiAke2F3YWl0IHRoaXMuZ2V0QW1vdW50KCl9YDtcbiAgfVxuXG4gIGFzeW5jIGdldEFtb3VudCgpIHtcbiAgICBsZXQgcHJvZHVjdHM6IFByb21pc2U8SUl0ZW1bXT4gPSBQcm9taXNlLmFsbCgoYXdhaXQgR2V0RmlsdGVyZWRJdGVtLmZpbHRlcmVkSXRlbXMpKTtcblxuICAgIGlmICgoYXdhaXQgcHJvZHVjdHMpWzBdLnRpdGxlID09PSAnZW1wdHknKSB7XG4gICAgICBwcm9kdWN0cyA9IGF3YWl0IFN0YXRlLmdldFByb2R1Y3RzKCk7XG4gICAgICBwcm9kdWN0cyA9IFByb21pc2UuYWxsKGF3YWl0IHByb2R1Y3RzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGF3YWl0IHByb2R1Y3RzKS5sZW5ndGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbHRlcihhOiBudW1iZXIpIHtcbiAgICBGb3VuZC5lbGVtLnRleHRDb250ZW50ID0gYEZvdW5kOiAke2F9YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3VuZDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnQC9jb3JlL3RlbXBsYXRlcy9jb21wb25lbnRzJztcblxuY29uc3QgYnV0dG9ucyA9IFtcbiAge1xuICAgIGlkOiAnc3RvcmUtcGFnZScsXG4gICAgdGV4dDogJ1N0b3JlIFBhZ2UnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdiYXNrZXQtcGFnZScsXG4gICAgdGV4dDogJ0Jhc2tldCBQYWdlJyxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIGlkOiAnaXRlbS1wYWdlJyxcbiAgLy8gICB0ZXh0OiAnSXRlbSBQYWdlJyxcbiAgLy8gfSxcbl07XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YWdOYW1lLCBjbGFzc05hbWUpO1xuICB9XG5cbiAgcmVuZGVyUGFnZUJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcGFnZUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhidXR0b24uaWQpO1xuICAgICAgY29uc3QgYnV0dG9uSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgYnV0dG9uSFRNTC5ocmVmID0gYCMke2J1dHRvbi5pZH1gO1xuICAgICAgYnV0dG9uSFRNTC5pbm5lclRleHQgPSBidXR0b24udGV4dDtcbiAgICAgIHBhZ2VCdXR0b25zLmFwcGVuZChidXR0b25IVE1MKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQocGFnZUJ1dHRvbnMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMucmVuZGVyUGFnZUJ1dHRvbnMoKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHtUZW1wbGF0ZX0gZnJvbSAnQC9jb3JlL3RlbXBsYXRlcy90ZW1wbGF0ZSc7XG5cbmNsYXNzIExhYmVsIGV4dGVuZHMgVGVtcGxhdGUge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBwYXJlbnROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihwYXJlbnQsICdsYWJlbCcsIGAke3BhcmVudE5hbWV9X19sYWJlbCBsYWJlbGApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIiwiaW1wb3J0IERpdiBmcm9tICcuLi9kaXYvZGl2JztcblxuY2xhc3MgSW5mbyBleHRlbmRzIERpdiB7XG4gIHBhcmVudDogSFRNTEVsZW1lbnQ7XG5cbiAgdGhpc0NsYXNzOiBzdHJpbmc7XG5cbiAgdGl0bGU6IHN0cmluZztcblxuICBjYXRlZ29yeTogc3RyaW5nO1xuXG4gIGJyYW5kOiBzdHJpbmc7XG5cbiAgcHJpY2U6IG51bWJlcjtcblxuICBkaXNjb3VudFBlcmNlbnRhZ2U6IG51bWJlcjtcblxuICByYXRpbmc6IG51bWJlcjtcblxuICBzdG9jazogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gICAgdGhpc0NsYXNzOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjYXRlZ29yeTogc3RyaW5nLFxuICAgIGJyYW5kOiBzdHJpbmcsXG4gICAgcHJpY2U6IG51bWJlcixcbiAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IG51bWJlcixcbiAgICByYXRpbmc6IG51bWJlcixcbiAgICBzdG9jazogbnVtYmVyLFxuICApIHtcbiAgICBzdXBlcihwYXJlbnQsIGAke3RoaXNDbGFzc31fX2luZm9gKTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnRoaXNDbGFzcyA9IHRoaXNDbGFzcztcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMuYnJhbmQgPSBicmFuZDtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5kaXNjb3VudFBlcmNlbnRhZ2UgPSBkaXNjb3VudFBlcmNlbnRhZ2U7XG4gICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XG4gICAgdGhpcy5zdG9jayA9IHN0b2NrO1xuICAgIHRoaXMuaXRlbUNyZWF0ZSgpO1xuICB9XG5cbiAgaXRlbUNyZWF0ZSgpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX2NhdGVnb3J5YCk7XG4gICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX2NhdGVnb3J5LXRpbGVgKTtcbiAgICBjb25zdCBjYXRlZ29yeUNvbnRlbnQgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19jYXRlZ29yeS1jb250ZW50YCk7XG4gICAgY29uc3QgYnJhbmQgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19icmFuZGApO1xuICAgIGNvbnN0IGJyYW5kVGl0bGUgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19icmFuZC10aWxlYCk7XG4gICAgY29uc3QgYnJhbmRDb250ZW50ID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fYnJhbmQtY29udGVudGApO1xuICAgIGNvbnN0IHByaWNlID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fcHJpY2VgKTtcbiAgICBjb25zdCBwcmljZVRpdGxlID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fcHJpY2UtdGlsZWApO1xuICAgIGNvbnN0IHByaWNlQ29udGVudCA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX3ByaWNlLWNvbnRlbnRgKTtcbiAgICBjb25zdCBkaXNjb3VudCA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX2Rpc2NvdW50YCk7XG4gICAgY29uc3QgZGlzY291bnRUaXRsZSA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX2Rpc2NvdW50LXRpbGVgKTtcbiAgICBjb25zdCBkaXNjb3VudENvbnRlbnQgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19kaXNjb3VudC1jb250ZW50YCk7XG4gICAgY29uc3QgcmF0aW5nID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fcmF0aW5nYCk7XG4gICAgY29uc3QgcmF0aW5nVGl0bGUgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19yYXRpbmctdGlsZWApO1xuICAgIGNvbnN0IHJhdGluZ0NvbnRlbnQgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgYCR7dGhpcy50aGlzQ2xhc3N9X19yYXRpbmctY29udGVudGApO1xuICAgIGNvbnN0IHN0b2NrID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fc3RvY2tgKTtcbiAgICBjb25zdCBzdG9ja1RpdGxlID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fc3RvY2stdGlsZWApO1xuICAgIGNvbnN0IHN0b2NrQ29udGVudCA9IG5ldyBEaXYodGhpcy5lbGVtZW50LCBgJHt0aGlzLnRoaXNDbGFzc31fX3N0b2NrLWNvbnRlbnRgKTtcblxuICAgIGNhdGVnb3J5VGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9ICdDYXRlZ29yeTogJztcbiAgICBjYXRlZ29yeUNvbnRlbnQuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuY2F0ZWdvcnk7XG4gICAgYnJhbmRUaXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gJ0JyYW5kOiAnO1xuICAgIGJyYW5kQ29udGVudC5lbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5icmFuZDtcbiAgICBwcmljZVRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnUHJpY2U6ICc7XG4gICAgcHJpY2VDb250ZW50LmVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0aGlzLnByaWNlfWA7XG4gICAgZGlzY291bnRUaXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gJ0Rpc2NvdW50OiAnO1xuICAgIGRpc2NvdW50Q29udGVudC5lbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGhpcy5kaXNjb3VudFBlcmNlbnRhZ2V9ICVgO1xuICAgIHJhdGluZ1RpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnUmF0aW5nOiAnO1xuICAgIHJhdGluZ0NvbnRlbnQuZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RoaXMucmF0aW5nfWA7XG4gICAgc3RvY2tUaXRsZS5lbGVtZW50LnRleHRDb250ZW50ID0gJ1N0b2NrOiAnO1xuICAgIHN0b2NrQ29udGVudC5lbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGhpcy5zdG9ja31gO1xuICAgIGNhdGVnb3J5LmVsZW1lbnQuYXBwZW5kKGNhdGVnb3J5VGl0bGUuZWxlbWVudCwgY2F0ZWdvcnlDb250ZW50LmVsZW1lbnQpO1xuICAgIGJyYW5kLmVsZW1lbnQuYXBwZW5kKGJyYW5kVGl0bGUuZWxlbWVudCwgYnJhbmRDb250ZW50LmVsZW1lbnQpO1xuICAgIHByaWNlLmVsZW1lbnQuYXBwZW5kKHByaWNlVGl0bGUuZWxlbWVudCwgcHJpY2VDb250ZW50LmVsZW1lbnQpO1xuICAgIGRpc2NvdW50LmVsZW1lbnQuYXBwZW5kKGRpc2NvdW50VGl0bGUuZWxlbWVudCwgZGlzY291bnRDb250ZW50LmVsZW1lbnQpO1xuICAgIHJhdGluZy5lbGVtZW50LmFwcGVuZChyYXRpbmdUaXRsZS5lbGVtZW50LCByYXRpbmdDb250ZW50LmVsZW1lbnQpO1xuICAgIHN0b2NrLmVsZW1lbnQuYXBwZW5kKHN0b2NrVGl0bGUuZWxlbWVudCwgc3RvY2tDb250ZW50LmVsZW1lbnQpO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoXG4gICAgICBjYXRlZ29yeS5lbGVtZW50LFxuICAgICAgYnJhbmQuZWxlbWVudCxcbiAgICAgIHByaWNlLmVsZW1lbnQsXG4gICAgICBkaXNjb3VudC5lbGVtZW50LFxuICAgICAgcmF0aW5nLmVsZW1lbnQsXG4gICAgICBzdG9jay5lbGVtZW50LFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mbztcbiIsImltcG9ydCB7VGVtcGxhdGV9IGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvdGVtcGxhdGUnO1xuaW1wb3J0IERpdiBmcm9tICcuLi9kaXYvZGl2JztcbmltcG9ydCBJbmZvIGZyb20gJy4vaW5mbyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuXG5jbGFzcyBJdGVtIGV4dGVuZHMgVGVtcGxhdGUge1xuICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuXG4gIHRoaXNDbGFzczogc3RyaW5nO1xuXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgY2F0ZWdvcnk6IHN0cmluZztcblxuICBicmFuZDogc3RyaW5nO1xuXG4gIHByaWNlOiBudW1iZXI7XG5cbiAgZGlzY291bnRQZXJjZW50YWdlOiBudW1iZXI7XG5cbiAgcmF0aW5nOiBudW1iZXI7XG5cbiAgc3RvY2s6IG51bWJlcjtcblxuICBpbWFnZXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRoaXNDbGFzczogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY2F0ZWdvcnk6IHN0cmluZyxcbiAgICBicmFuZDogc3RyaW5nLFxuICAgIHByaWNlOiBudW1iZXIsXG4gICAgZGlzY291bnRQZXJjZW50YWdlOiBudW1iZXIsXG4gICAgcmF0aW5nOiBudW1iZXIsXG4gICAgc3RvY2s6IG51bWJlcixcbiAgICBpbWFnZXM6IHN0cmluZyxcbiAgKSB7XG4gICAgc3VwZXIocGFyZW50LCAnZGl2JywgYCR7dGhpc0NsYXNzfWApO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMudGhpc0NsYXNzID0gdGhpc0NsYXNzO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgdGhpcy5icmFuZCA9IGJyYW5kO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRpc2NvdW50UGVyY2VudGFnZSA9IGRpc2NvdW50UGVyY2VudGFnZTtcbiAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcbiAgICB0aGlzLnN0b2NrID0gc3RvY2s7XG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgdGhpcy5pdGVtQ3JlYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGl0ZW1DcmVhdGUoKSB7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gbmV3IERpdih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fdGl0bGVgKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pbWFnZXN9KWA7XG4gICAgaXRlbVRpdGxlLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIGNvbnN0IGl0ZW1JbmZvID0gbmV3IEluZm8oXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICBgJHt0aGlzLnRoaXNDbGFzc31gLFxuICAgICAgdGhpcy50aXRsZSxcbiAgICAgIHRoaXMuY2F0ZWdvcnksXG4gICAgICB0aGlzLmJyYW5kLFxuICAgICAgdGhpcy5wcmljZSxcbiAgICAgIHRoaXMuZGlzY291bnRQZXJjZW50YWdlLFxuICAgICAgdGhpcy5yYXRpbmcsXG4gICAgICB0aGlzLnN0b2NrLFxuICAgICk7XG4gICAgY29uc3QgYnV0dG9uQWRkID0gbmV3IEJ1dHRvbih0aGlzLmVsZW1lbnQsIGAke3RoaXMudGhpc0NsYXNzfV9fYnV0dG9uLWFkZGApO1xuXG4gICAgYnV0dG9uQWRkLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnYWRkIHRvIGNhcnQnO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChpdGVtVGl0bGUuZWxlbWVudCwgaXRlbUluZm8uZWxlbWVudCwgYnV0dG9uQWRkLmVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJpbXBvcnQge1RlbXBsYXRlfSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3RlbXBsYXRlJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuXG5jbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIFRlbXBsYXRlIHtcbiAgc3RhdGljIGVsZW06IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIHRoaXNDbGFzczogc3RyaW5nLCBpdGVtczogUHJvbWlzZTxJSXRlbVtdPikge1xuICAgIHN1cGVyKHBhcmVudCwgJ2RpdicsIHRoaXNDbGFzcyk7XG4gICAgUHJvZHVjdExpc3QuZWxlbSA9IHRoaXMuZWxlbWVudDtcbiAgICBQcm9kdWN0TGlzdC5zdGFydChpdGVtcyk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgcHJvZEl0ZW1DcmVhdG9yKGl0ZW06IElJdGVtKSB7XG4gICAgY29uc3QgY2F0YWxvZzogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtbGlzdCcpO1xuICAgIGNvbnN0IHByb2R1Y3RJdGVtID0gbmV3IEl0ZW0oXG4gICAgICBjYXRhbG9nISxcbiAgICAgICdpdGVtJyxcbiAgICAgIGl0ZW0udGl0bGUsXG4gICAgICBpdGVtLmNhdGVnb3J5LFxuICAgICAgaXRlbS5icmFuZCxcbiAgICAgIGl0ZW0ucHJpY2UsXG4gICAgICBpdGVtLmRpc2NvdW50UGVyY2VudGFnZSxcbiAgICAgIGl0ZW0ucmF0aW5nLFxuICAgICAgaXRlbS5zdG9jayxcbiAgICAgIGl0ZW0uaW1hZ2VzWzBdLFxuICAgICk7XG5cbiAgICBjYXRhbG9nIS5hcHBlbmQocHJvZHVjdEl0ZW0uZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc3RhcnQoaXRlbXM6IFByb21pc2U8SUl0ZW1bXT4pIHtcbiAgICBpdGVtc1xuICAgICAgLnRoZW4oKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcHJvZHVjdC5mb3JFYWNoKHRoaXMucHJvZEl0ZW1DcmVhdG9yKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuIiwiaW1wb3J0IFJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IERpdiBmcm9tICcuLi9kaXYvZGl2JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRvRm9yTWF4KFxuICBtYXhWYWw6IHN0cmluZyxcbiAgcmFuZ2VNYXg6IFJhbmdlLFxuICBtYXg6IERpdixcbiAgcG9zdGZpeDogc3RyaW5nLFxuICByYW5nZU1pbjogUmFuZ2UsXG4pIHtcbiAgbWF4VmFsID0gcmFuZ2VNYXguZWxlbWVudC52YWx1ZTtcbiAgbWF4LmVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHttYXhWYWx9ICR7cG9zdGZpeH1gO1xuICByYW5nZU1heC5lbGVtZW50LnZhbHVlID0gbWF4VmFsO1xuICBpZiAoK3JhbmdlTWF4LmVsZW1lbnQudmFsdWUgLSA1IDwgK3JhbmdlTWluLmVsZW1lbnQudmFsdWUpIHtcbiAgICByYW5nZU1heC5lbGVtZW50LnZhbHVlID0gYCR7K3JhbmdlTWluLmVsZW1lbnQudmFsdWUgLSA1fWA7XG4gICAgbWF4LmVsZW1lbnQudGV4dENvbnRlbnQgPSByYW5nZU1heC5lbGVtZW50LnZhbHVlICsgcG9zdGZpeDtcbiAgfVxuXG4gIHJldHVybiBtYXhWYWw7XG59XG4iLCJpbXBvcnQgUmFuZ2UgZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQgRGl2IGZyb20gJy4uL2Rpdi9kaXYnO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9Gb3JNaW4oXG4gIG1pblZhbDogc3RyaW5nLFxuICByYW5nZU1pbjogUmFuZ2UsXG4gIG1pbjogRGl2LFxuICBwb3N0Zml4OiBzdHJpbmcsXG4gIHJhbmdlTWF4OiBSYW5nZSxcbikge1xuICBtaW5WYWwgPSByYW5nZU1pbi5lbGVtZW50LnZhbHVlO1xuICBtaW4uZWxlbWVudC50ZXh0Q29udGVudCA9IGAke21pblZhbH0ke3Bvc3RmaXh9YDtcbiAgcmFuZ2VNaW4uZWxlbWVudC52YWx1ZSA9IG1pblZhbDtcbiAgaWYgKCtyYW5nZU1pbi5lbGVtZW50LnZhbHVlID4gK3JhbmdlTWF4LmVsZW1lbnQudmFsdWUgLSA1KSB7XG4gICAgcmFuZ2VNaW4uZWxlbWVudC52YWx1ZSA9IGAkeytyYW5nZU1heC5lbGVtZW50LnZhbHVlIC0gNX1gO1xuICAgIG1pbi5lbGVtZW50LnRleHRDb250ZW50ID0gcmFuZ2VNaW4uZWxlbWVudC52YWx1ZSArIHBvc3RmaXg7XG4gIH1cblxuICByZXR1cm4gbWluVmFsO1xufVxuIiwiaW1wb3J0IERpdiBmcm9tICcuLi9kaXYvZGl2JztcbmltcG9ydCBSYW5nZSBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9yYW5nZS9yYW5nZSc7XG5pbXBvcnQgR2V0RmlsdGVyZWRJdGVtIGZyb20gJ0AvZmlsdHJhdGlvbi9nZXRGaWx0ZXJlZEl0ZW0nO1xuaW1wb3J0IHtkb0Zvck1pbn0gZnJvbSAnLi9kb0Zvck1pbic7XG5pbXBvcnQge2RvRm9yTWF4fSBmcm9tICcuL2RvRm9yTWF4JztcblxuY2xhc3MgTXVsdGlSYW5nZSBleHRlbmRzIERpdiB7XG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgc3RhdGljIG1pblByaWNlRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1heFByaWNlRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1pblNyb2NrRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1heFNyb2NrRWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1pblByaWNlOiBIVE1MRWxlbWVudDtcblxuICBzdGF0aWMgbWF4UHJpY2U6IEhUTUxFbGVtZW50O1xuXG4gIHN0YXRpYyBtaW5TdG9jazogSFRNTEVsZW1lbnQ7XG5cbiAgc3RhdGljIG1heFN0b2NrOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0aXRsZTogc3RyaW5nLCB2YWx1ZTogUHJvbWlzZTx7bWluOiBudW1iZXIsIG1heDogbnVtYmVyfT4pIHtcbiAgICBzdXBlcihwYXJlbnQsICdtdWx0aXJhbmdlJyk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuc3RhcnQodmFsdWUpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQobWluTWF4OiBQcm9taXNlPHttaW46IG51bWJlciwgbWF4OiBudW1iZXJ9Pikge1xuICAgIGNvbnN0IHBvc3RmaXggPSBgICR7dGhpcy50aXRsZSA9PT0gJ3ByaWNlJyA/ICckJyA6ICcnfWA7XG4gICAgY29uc3QgdGl0bGUgPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgJ211bHRpcmFuZ2VfX3RpdGxlJyk7XG4gICAgY29uc3QgcmFuZ2VNaW4gPSBuZXcgUmFuZ2UodGhpcy5lbGVtZW50LCAnbWluJywge1xuICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgIG1pbjogYCR7KGF3YWl0IG1pbk1heCkubWlufWAsXG4gICAgICBtYXg6IGAkeyhhd2FpdCBtaW5NYXgpLm1heH1gLFxuICAgICAgdmFsdWU6IGAkeyhhd2FpdCBtaW5NYXgpLm1pbn1gLFxuICAgIH0pO1xuICAgIGNvbnN0IHJhbmdlTWF4ID0gbmV3IFJhbmdlKHRoaXMuZWxlbWVudCwgJ21heCcsIHtcbiAgICAgIHR5cGU6ICdyYW5nZScsXG4gICAgICBtaW46IGAkeyhhd2FpdCBtaW5NYXgpLm1pbn1gLFxuICAgICAgbWF4OiBgJHsoYXdhaXQgbWluTWF4KS5tYXh9YCxcbiAgICAgIHZhbHVlOiBgJHsoYXdhaXQgbWluTWF4KS5tYXh9YCxcbiAgICB9KTtcbiAgICBjb25zdCBtaW4gPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgJ3JhbmdlX21pbiBsZWZ0IG11bHRpcmFuZ2VfX2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYXggPSBuZXcgRGl2KHRoaXMuZWxlbWVudCwgJ3JhbmdlX21heCByaWdodCBtdWx0aXJhbmdlX19jb250ZW50IG11bHRpcmFuZ2VfX3JpZ2h0Jyk7XG4gICAgbGV0IG1pblZhbCA9ICcnO1xuICAgIGxldCBtYXhWYWwgPSAnJztcblxuICAgIG1pbi5lbGVtZW50LnRleHRDb250ZW50ID0gYCR7KGF3YWl0IG1pbk1heCkubWlufSR7cG9zdGZpeH1gO1xuICAgIG1heC5lbGVtZW50LnRleHRDb250ZW50ID0gYCR7KGF3YWl0IG1pbk1heCkubWF4fSR7cG9zdGZpeH1gO1xuICAgIHJhbmdlTWluLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBtaW5WYWwgPSBkb0Zvck1pbihtaW5WYWwsIHJhbmdlTWluLCBtaW4sIHBvc3RmaXgsIHJhbmdlTWF4KTtcbiAgICB9KTtcbiAgICByYW5nZU1heC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgbWF4VmFsID0gZG9Gb3JNYXgobWF4VmFsLCByYW5nZU1heCwgbWF4LCBwb3N0Zml4LCByYW5nZU1pbik7XG4gICAgfSk7XG4gICAgcmFuZ2VNaW4uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKHRoaXMudGl0bGUgPT09ICdwcmljZScgPyAnbWluUHJpY2UnIDogJ21pblN0b2NrJywgK21pblZhbCk7XG4gICAgfSk7XG4gICAgcmFuZ2VNYXguZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKHRoaXMudGl0bGUgPT09ICdwcmljZScgPyAnbWF4UHJpY2UnIDogJ21heFN0b2NrJywgK21heFZhbCk7XG4gICAgfSk7XG4gICAgdGl0bGUuZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChyYW5nZU1pbi5lbGVtZW50LCByYW5nZU1heC5lbGVtZW50LCBtaW4uZWxlbWVudCwgbWF4LmVsZW1lbnQpO1xuICAgIGlmICh0aGlzLnRpdGxlID09PSAncHJpY2UnKSB7XG4gICAgICBNdWx0aVJhbmdlLm1pblByaWNlRWwgPSByYW5nZU1pbi5lbGVtZW50O1xuICAgICAgTXVsdGlSYW5nZS5tYXhQcmljZUVsID0gcmFuZ2VNYXguZWxlbWVudDtcbiAgICAgIE11bHRpUmFuZ2UubWluUHJpY2UgPSBtaW4uZWxlbWVudDtcbiAgICAgIE11bHRpUmFuZ2UubWF4UHJpY2UgPSBtYXguZWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGl0bGUgPT09ICdzdG9jaycpIHtcbiAgICAgIE11bHRpUmFuZ2UubWluU3JvY2tFbCA9IHJhbmdlTWluLmVsZW1lbnQ7XG4gICAgICBNdWx0aVJhbmdlLm1heFNyb2NrRWwgPSByYW5nZU1heC5lbGVtZW50O1xuICAgICAgTXVsdGlSYW5nZS5taW5TdG9jayA9IG1pbi5lbGVtZW50O1xuICAgICAgTXVsdGlSYW5nZS5tYXhTdG9jayA9IG1heC5lbGVtZW50O1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTXVsdGlSYW5nZTtcbiIsImNsYXNzIFJhbmdlIHtcbiAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0YWdDbGFzczogc3RyaW5nLCBhdHRyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBpZiAodHlwZW9mIHRhZ0NsYXNzID09PSAnc3RyaW5nJykgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGFnQ2xhc3Muc3BsaXQoJyAnKSk7XG5cbiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyKSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlIGFzIHN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWxlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7XG4iLCJjbGFzcyBJbnB1dFRtcCB7XG4gIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGFnQ2xhc3M6IHN0cmluZykge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBpZiAodHlwZW9mIHRhZ0NsYXNzID09PSAnc3RyaW5nJykgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGFnQ2xhc3Muc3BsaXQoJyAnKSk7XG5cbiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdpbnB1dCcsICd0ZXh0Jyk7XG4gIH1cblxuICByZW1vdmVFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRtcDtcbiIsImltcG9ydCBJbnB1dFRtcCBmcm9tICcuL2lucHV0VG1wJztcbmltcG9ydCB7SUl0ZW19IGZyb20gJ0AvdHlwZXMvdHlwZSc7XG5pbXBvcnQgR2V0RmlsdGVyZWRJdGVtIGZyb20gJ0AvZmlsdHJhdGlvbi9nZXRGaWx0ZXJlZEl0ZW0nO1xuaW1wb3J0IGVtcHR5UHJvbWlzZSBmcm9tICdAL2ZpbHRyYXRpb24vZW1wdHlQcm9taXNlJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgSW5wdXRUbXAge1xuICBzdGF0aWMgc2VhcmNoaW5nVmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIHN0YXRpYyBwcm9kdWN0czogUHJvbWlzZTxJSXRlbVtdPiA9IGVtcHR5UHJvbWlzZTtcblxuICBzdGF0aWMgZWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgbmFtZUNsYXNzOiBzdHJpbmcpIHtcbiAgICBzdXBlcihwYXJlbnQsIG5hbWVDbGFzcyk7XG5cbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBTZWFyY2guc2VhcmNoaW5nVmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnc2VhcmNoJywgU2VhcmNoLnNlYXJjaGluZ1ZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggcHJvZHVjdCc7XG4gICAgU2VhcmNoLmVsID0gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHNlYXJjaCh2YWx1ZTogc3RyaW5nLCBpdGVtczogUHJvbWlzZTxJSXRlbVtdPikge1xuICAgIGxldCBwcm9kdWN0cyA9IFByb21pc2UuYWxsKGF3YWl0IGl0ZW1zKTtcblxuICAgIHByb2R1Y3RzID0gUHJvbWlzZS5hbGwoKGF3YWl0IHByb2R1Y3RzKS5maWx0ZXIoKGl0ZW0pID0+IHRoaXMuc2VhcmNoU3VpdGFibGVJdGVtcyhpdGVtLCB2YWx1ZSkpKTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxuXG4gIHN0YXRpYyBzZWFyY2hTdWl0YWJsZUl0ZW1zKGl0ZW06IElJdGVtLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA+PSAwKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5icmFuZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUpID49IDApIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZSkgPj0gMCkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA+PSAwKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYCR7aXRlbS5kaXNjb3VudFBlcmNlbnRhZ2V9YC5pbmRleE9mKGAke3ZhbHVlfWApID49IDApIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChgJHtpdGVtLnByaWNlfWAuaW5kZXhPZihgJHt2YWx1ZX1gKSA+PSAwKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYCR7aXRlbS5yYXRpbmd9YC5pbmRleE9mKGAke3ZhbHVlfWApID49IDApIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChgJHtpdGVtLnN0b2NrfWAuaW5kZXhPZihgJHt2YWx1ZX1gKSA+PSAwKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoZWxlbTogSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBuZXcgT3B0aW9uKCdTb3J0IE9wdGlvbnMnLCAnc29ydE9wdGlvbnMnKTtcbiAgY29uc3Qgc29ydEJ5UHJpY2VBID0gbmV3IE9wdGlvbignU29ydCBieSBwcmljZSBBU0MnLCAncHJpY2VBU0MnKTtcbiAgY29uc3Qgc29ydEJ5UHJpY2VEID0gbmV3IE9wdGlvbignU29ydCBieSBwcmljZSBERVNDJywgJ3ByaWNlREVTQycpO1xuICBjb25zdCBzb3J0QnlSYXRpbmdBID0gbmV3IE9wdGlvbignU29ydCBieSByYXRpbmcgQVNDJywgJ3JhdGluZ0FTQycpO1xuICBjb25zdCBzb3J0QnlSYXRpbmdEID0gbmV3IE9wdGlvbignU29ydCBieSByYXRpbmcgREVTQycsICdyYXRpbmdERVNDJyk7XG4gIGNvbnN0IHNvcnRCeURpc2NvdW50QSA9IG5ldyBPcHRpb24oJ1NvcnQgYnkgZGlzY291bnQgQVNDJywgJ2Rpc2NvdW50QVNDJyk7XG4gIGNvbnN0IHNvcnRCeURpc2NvdW50RCA9IG5ldyBPcHRpb24oJ1NvcnQgYnkgZGlzY291bnQgREVTQycsICdkaXNjb3VudERFU0MnKTtcbiAgY29uc3Qgc29ydEJ5SW5TdG9ja0EgPSBuZXcgT3B0aW9uKCdTb3J0IGJ5IGluIHN0b2NrIEFTQycsICdpblN0b2NrQVNDJyk7XG4gIGNvbnN0IHNvcnRCeUluU3RvY2tEID0gbmV3IE9wdGlvbignU29ydCBieSBpbiBzdG9jayBERVNDJywgJ2luU3RvY2tERVNDJyk7XG5cbiAgc29ydE9wdGlvbnMuZGlzYWJsZWQgPSB0cnVlO1xuICBzb3J0T3B0aW9ucy5zZWxlY3RlZCA9IHRydWU7XG5cbiAgZWxlbS5hcHBlbmQoXG4gICAgc29ydE9wdGlvbnMsXG4gICAgc29ydEJ5UHJpY2VBLFxuICAgIHNvcnRCeVByaWNlRCxcbiAgICBzb3J0QnlSYXRpbmdBLFxuICAgIHNvcnRCeVJhdGluZ0QsXG4gICAgc29ydEJ5RGlzY291bnRBLFxuICAgIHNvcnRCeURpc2NvdW50RCxcbiAgICBzb3J0QnlJblN0b2NrQSxcbiAgICBzb3J0QnlJblN0b2NrRCxcbiAgKTtcbn1cbiIsImltcG9ydCBTZWxlY3RUbXAgZnJvbSAnLi9zZWxlY3RUbXAnO1xuaW1wb3J0IEdldEZpbHRlcmVkSXRlbSBmcm9tICdAL2ZpbHRyYXRpb24vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCB7Y3JlYXRlT3B0aW9uc30gZnJvbSAnLi9jcmVhdGVPcHRpb25zJztcbmltcG9ydCB7c29ydEl0ZW1zfSBmcm9tICcuL3NvcnRJdGVtcyc7XG5pbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBTZWxlY3RUbXAge1xuICBzdGF0aWMgc2VsZWN0VmFsdWU6IHN0cmluZyA9ICcnO1xuXG4gIHN0YXRpYyBlbDogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGFnQ2xhc3M6IHN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudCwgdGFnQ2xhc3MpO1xuICAgIFNlbGVjdC5lbCA9IHRoaXMuZWxlbWVudDtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjcmVhdGVPcHRpb25zKHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlfSA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnc29ydCcsIHZhbHVlKTtcblxuICAgICAgU2VsZWN0LnNlbGVjdFZhbHVlID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc29ydCh2YWx1ZTogc3RyaW5nLCBpdGVtczogUHJvbWlzZTxJSXRlbVtdPikge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gUHJvbWlzZS5hbGwoYXdhaXQgaXRlbXMpO1xuXG4gICAgc29ydEl0ZW1zKHByb2R1Y3RzLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwiY2xhc3MgU2VsZWN0VG1wIHtcbiAgZWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGFnQ2xhc3M6IHN0cmluZykge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgaWYgKHR5cGVvZiB0YWdDbGFzcyA9PT0gJ3N0cmluZycpIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnRhZ0NsYXNzLnNwbGl0KCcgJykpO1xuXG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlRWxlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0VG1wO1xuIiwiaW1wb3J0IHtJSXRlbX0gZnJvbSAnQC90eXBlcy90eXBlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNvcnRJdGVtcyhpdGVtczogUHJvbWlzZTxJSXRlbVtdPiwgb3B0aW9uOiBzdHJpbmcpIHtcbiAgaWYgKG9wdGlvbiA9PT0gJ3ByaWNlQVNDJykge1xuICAgIChhd2FpdCBpdGVtcykuc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xuICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gJ3ByaWNlREVTQycpIHtcbiAgICAoYXdhaXQgaXRlbXMpLnNvcnQoKGEsIGIpID0+IGIucHJpY2UgLSBhLnByaWNlKTtcbiAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdyYXRpbmdBU0MnKSB7XG4gICAgKGF3YWl0IGl0ZW1zKS5zb3J0KChhLCBiKSA9PiBhLnJhdGluZyAtIGIucmF0aW5nKTtcbiAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdyYXRpbmdERVNDJykge1xuICAgIChhd2FpdCBpdGVtcykuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZyk7XG4gIH0gZWxzZSBpZiAob3B0aW9uID09PSAnZGlzY291bnRBU0MnKSB7XG4gICAgKGF3YWl0IGl0ZW1zKS5zb3J0KChhLCBiKSA9PiBhLmRpc2NvdW50UGVyY2VudGFnZSAtIGIuZGlzY291bnRQZXJjZW50YWdlKTtcbiAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdkaXNjb3VudERFU0MnKSB7XG4gICAgKGF3YWl0IGl0ZW1zKS5zb3J0KChhLCBiKSA9PiBiLmRpc2NvdW50UGVyY2VudGFnZSAtIGEuZGlzY291bnRQZXJjZW50YWdlKTtcbiAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdpblN0b2NrQVNDJykge1xuICAgIChhd2FpdCBpdGVtcykuc29ydCgoYSwgYikgPT4gYS5zdG9jayAtIGIuc3RvY2spO1xuICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gJ2luU3RvY2tERVNDJykge1xuICAgIChhd2FpdCBpdGVtcykuc29ydCgoYSwgYikgPT4gYi5zdG9jayAtIGEuc3RvY2spO1xuICB9XG59XG4iLCJpbXBvcnQge1RlbXBsYXRlfSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3RlbXBsYXRlJztcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgY29udGVudDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHBhcmVudCwgJ3NwYW4nLCBgJHtjbGFzc05hbWV9X19jb250ZW50YCwgYCR7Y29udGVudH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IodGFnTmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImFic3RyYWN0IGNsYXNzIFBhZ2Uge1xuICBwcm90ZWN0ZWQgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBzdGF0aWMgVGV4dE9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlSGVhZGVyVGl0bGUodGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgaGVhZGVyVGl0bGUuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHJldHVybiBoZWFkZXJUaXRsZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsInR5cGUgY29udGVudCA9IHN0cmluZyB8IEFycmF5PHN0cmluZz4gfCBudWxsO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGVtcGxhdGUge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRhZ05hbWU6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA9ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogY29udGVudCxcbiAgICB2YWx1ZT86IGNvbnRlbnQsXG4gICAgYXR0cj86IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcblxuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnc3RyaW5nJykgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lLnNwbGl0KCcgJykpO1xuXG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgaWYgKGF0dHIpIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHIpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgICAvLyDQvdC+INC70YPRh9GI0LUg0YHQtNC10LvQsNGC0Ywg0L/RgNC+0LLQtdGA0LrRgyDQvdCwINC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0Ywg0YfQtdGA0LXQtyB0eXBlb2YgfHwgaW5zdGFuY2VvZlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVsZW1lbnQoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG59XG5cbi8vINC/0YDQuNC80LXQvdGP0LXRgtGB0Y8g0YHQu9C10LTRg9GO0YnQuNC8INC+0LHRgNCw0LfQvtC8XG4vLyBuZXcgVGVtcGxhdGUoZG9jdW1lbnQuYm9keSwgJ2RpdicsICd3cmFwcGVyJywgJ0hlbGxvIHdvcmxkJywge2lkOiAnMSd9KVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZE9wdGlvbnMoXG4gIGZsYWc6IHN0cmluZyxcbiAgb3B0aW9uOiBzdHJpbmcgfCBudW1iZXIsXG4gIG9iajoge1trZXk6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IG51bWJlcj59LFxuKSB7XG4gIGlmICgoZmxhZyA9PT0gJ2NhdGVnb3J5JyB8fCBmbGFnID09PSAnYnJhbmQnKSAmJiB0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgIC8vIGlmICghb2JqW2ZsYWddLmluY2x1ZGVzKG9wdGlvbi50b0xvd2VyQ2FzZSgpKSkgb2JqW2ZsYWddLnB1c2gob3B0aW9uLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChvYmpbZmxhZ10uaW5kZXhPZihvcHRpb24udG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuICAgICAgb2JqW2ZsYWddLnNwbGljZShvYmpbZmxhZ10uaW5kZXhPZihvcHRpb24udG9Mb3dlckNhc2UoKSksIDEpO1xuICAgICAgY29uc29sZS5sb2coZmxhZywgb3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2ZsYWddLnB1c2gob3B0aW9uLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChmbGFnID09PSAnbWluUHJpY2UnICYmIHR5cGVvZiBvcHRpb24gPT09ICdudW1iZXInKSB7XG4gICAgb2JqLnByaWNlWzBdID0gb3B0aW9uO1xuICB9IGVsc2UgaWYgKGZsYWcgPT09ICdtYXhQcmljZScgJiYgdHlwZW9mIG9wdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICBvYmoucHJpY2VbMV0gPSBvcHRpb247XG4gIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ21pblN0b2NrJyAmJiB0eXBlb2Ygb3B0aW9uID09PSAnbnVtYmVyJykge1xuICAgIG9iai5zdG9ja1swXSA9IG9wdGlvbjtcbiAgfSBlbHNlIGlmIChmbGFnID09PSAnbWF4U3RvY2snICYmIHR5cGVvZiBvcHRpb24gPT09ICdudW1iZXInKSB7XG4gICAgb2JqLnN0b2NrWzFdID0gb3B0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBbGxJdGVtcyhpdGVtOiBJSXRlbSwgb2JqOiB7W2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPn0pIHtcbiAgbGV0IHNlbGVjdGVkVHlwZXMgPSAwO1xuICBsZXQgcmVzdWx0ID0gMDtcblxuICBmb3IgKGNvbnN0IHZhcmlhYmxlIGluIG9iaikge1xuICAgIGlmIChvYmpbdmFyaWFibGVdLmxlbmd0aCA+IDApIHtcbiAgICAgIHNlbGVjdGVkVHlwZXMrKztcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IHZhcmlhYmxlIGluIG9iaikge1xuICAgIGlmICh2YXJpYWJsZSA9PT0gJ2NhdGVnb3J5JyB8fCB2YXJpYWJsZSA9PT0gJ2JyYW5kJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpbdmFyaWFibGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVtW3ZhcmlhYmxlXS50b0xvd2VyQ2FzZSgpID09PSBvYmpbdmFyaWFibGVdW2ldKSB7XG4gICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaXRlbS5wcmljZSA+PSBvYmoucHJpY2VbMF0gJiYgaXRlbS5wcmljZSA8PSBvYmoucHJpY2VbMV0pIHtcbiAgICByZXN1bHQrKztcbiAgfVxuXG4gIGlmIChpdGVtLnN0b2NrID49IG9iai5zdG9ja1swXSAmJiBpdGVtLnN0b2NrIDw9IG9iai5zdG9ja1sxXSkge1xuICAgIHJlc3VsdCsrO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGVkVHlwZXMgPT09IHJlc3VsdDtcbn1cbiIsImltcG9ydCB7SUl0ZW19IGZyb20gJ0AvdHlwZXMvdHlwZSc7XG5cbmNvbnN0IGVtcHR5UHJvbWlzZTogUHJvbWlzZTxJSXRlbVtdPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGVtcHR5UHJvbWlzZSA9IFt7XG4gICAgdGl0bGU6ICdlbXB0eScsXG4gICAgYnJhbmQ6ICdlbXB0eScsXG4gICAgY2F0ZWdvcnk6ICdlbXB0eScsXG4gICAgZGVzY3JpcHRpb246ICdlbXB0eScsXG4gICAgZGlzY291bnRQZXJjZW50YWdlOiAwLFxuICAgIGlkOiAwLFxuICAgIGltYWdlczogWycnXSxcbiAgICBwcmljZTogMCxcbiAgICByYXRpbmc6IDAsXG4gICAgc3RvY2s6IDAsXG4gICAgdGh1bWJuYWlsOiAnZW1wdHknLFxuICB9XTtcblxuICByZXNvbHZlKGVtcHR5UHJvbWlzZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZW1wdHlQcm9taXNlO1xuIiwiaW1wb3J0IHtnZXRGcm9tUXVlcnl9IGZyb20gJ0AvZmlsdHJhdGlvbi9mcm9tUXVlcnkvZ2V0RnJvbVF1ZXJ5JztcbmltcG9ydCBHZXRGaWx0ZXJlZEl0ZW0gZnJvbSAnLi4vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCBTdGF0ZSBmcm9tICdAL3N0YXRlL3N0YXRlJztcbmltcG9ydCB7cHJpY2VGcm9tUXVlcnl9IGZyb20gJy4vcHJpY2VGcm9tUXVlcnknO1xuaW1wb3J0IHtzZWxlY3RTb3J0RnJvbVF1ZXJ5fSBmcm9tICcuL3NlbGVjdFNvcnRGcm9tUXVlcnknO1xuaW1wb3J0IHtzdG9ja0Zyb21RdWVyeX0gZnJvbSAnLi9zdG9ja0Zyb21RdWVyeSc7XG5pbXBvcnQge3NlYXJjaEZyb21RdWVyeX0gZnJvbSAnLi9zZWFyY2hGcm9tUXVlcnknO1xuaW1wb3J0IENoYnggZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRCcmFuZHMoKSB7XG4gIGNvbnN0IGV4aXN0QnJhbmRzID0gQXJyYXkuZnJvbShhd2FpdCBTdGF0ZS5nZXRCcmFuZHMoKSk7XG5cbiAgcmV0dXJuIGV4aXN0QnJhbmRzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICBjb25zdCBleGlzdENhdGVnb3JpZXMgPSBBcnJheS5mcm9tKGF3YWl0IFN0YXRlLmdldENhdGVnb3JpZXMoKSk7XG5cbiAgcmV0dXJuIGV4aXN0Q2F0ZWdvcmllcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEZpbHRlcnNGcm9tUXVlcnkoKSB7XG4gIGNvbnN0IGZpbHRlcnM6IHtba2V5OiBzdHJpbmddOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+fSA9IGdldEZyb21RdWVyeSgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3Qge2JyYW5kLCBjYXRlZ29yeSwgc29ydCwgcHJpY2UsIHN0b2NrLCBzZWFyY2h9ID0gZmlsdGVycztcblxuICBDaGJ4LmNoZWNrZWQgPSBicmFuZC5jb25jYXQoY2F0ZWdvcnkpO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgYnJhbmQpIHtcbiAgICBsZXQgbmFtZTtcblxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAoKGF3YWl0IGdldEJyYW5kcygpKS5pbmNsdWRlcyhgJHtuYW1lfWApKSB7XG4gICAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKCdicmFuZCcsIGAke2l0ZW19YC50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2F0ZWdvcnkpIHtcbiAgICBpZiAoKGF3YWl0IGdldENhdGVnb3JpZXMoKSkuaW5jbHVkZXMoYCR7aXRlbX1gKSkge1xuICAgICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnY2F0ZWdvcnknLCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RTb3J0RnJvbVF1ZXJ5KHNvcnQpO1xuXG4gIHByaWNlRnJvbVF1ZXJ5KHByaWNlKTtcblxuICBzdG9ja0Zyb21RdWVyeShzdG9jayk7XG5cbiAgc2VhcmNoRnJvbVF1ZXJ5KGAke3NlYXJjaFswXX1gKTtcbn1cbiIsIi8vIGNvbnN0IGZpbHRlcnM6IHN0cmluZ1tdID0gW107XG5jb25zdCBzZWFyY2g6IHN0cmluZ1tdID0gW107XG5jb25zdCBzb3J0OiBzdHJpbmdbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9RdWVyeShmbGFnOiBzdHJpbmcsIGl0ZW06IHN0cmluZyB8IG51bWJlciwgb2JqOiB7W2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPn0pIHtcbiAgLy8gZmlsdGVycy5wdXNoKGAke2l0ZW19YCk7XG4gIC8vIGNvbnNvbGUubG9nKG9iaik7XG4gIGNvbnN0IG5ld09iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cbiAgaWYgKGZsYWcgPT09ICdzZWFyY2gnICYmIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgIHNlYXJjaFswXSA9IGl0ZW07XG4gIH1cblxuICBpZiAoZmxhZyA9PT0gJ3NvcnQnICYmIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgIHNvcnRbMF0gPSBpdGVtO1xuICB9XG5cbiAgbmV3T2JqLnNlYXJjaCA9IHNlYXJjaDtcbiAgbmV3T2JqLnNvcnQgPSBzb3J0O1xuICBsZXQgcmVzdWx0ID0gJyc7XG5cbiAgZm9yIChjb25zdCBlbCBpbiBuZXdPYmopIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHJlc3VsdCArPSBgJHtlbH09YDtcbiAgICAgIGlmIChuZXdPYmpbZWxdLmxlbmd0aCA9PT0gMCkgcmVzdWx0ICs9ICcmJztcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgbmV3T2JqW2VsXS5sZW5ndGg7IHIrKykge1xuICAgICAgICBpZiAociAhPT0gbmV3T2JqW2VsXS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGAke25ld09ialtlbF1bcl19LGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ICs9IGAke25ld09ialtlbF1bcl19JmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoJ29iamVjdCBvciBzdHJpbmcnLCAnVGl0bGUnLCBgPyR7cmVzdWx0fWApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEZyb21RdWVyeSgpOiB7W2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPn0ge1xuICBjb25zdCBjYXRlZ29yeTogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgYnJhbmQ6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHByaWNlOiBudW1iZXJbXSA9IFswLCA5OTk5OTldO1xuICBjb25zdCBzdG9jazogbnVtYmVyW10gPSBbMCwgOTk5OTk5XTtcbiAgY29uc3Qgc2VhcmNoOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBzb3J0OiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBzZWxlY3RlZDoge1trZXk6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IG51bWJlcj59ID0ge2NhdGVnb3J5LCBicmFuZCwgcHJpY2UsIHN0b2NrLCBzZWFyY2gsIHNvcnR9O1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKTtcblxuICBjb25zdCB1cmxGb3JGaWx0ZXJzID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZignLz9jYXRlZ29yeScpICsgMik7XG5cbiAgaWYgKHVybEZvckZpbHRlcnMuaW5kZXhPZignY2F0ZWdvcnknKSA+PSAwKSB7XG4gICAgY29uc3QgYXJyID0gdXJsRm9yRmlsdGVycy5zcGxpdCgnJicpO1xuICAgIGNvbnN0IG5ld0FyciA9IGFyci5tYXAoKGVsKSA9PiBlbC5zcGxpdCgnPScpKS5maWx0ZXIoKF8sIGkpID0+IGkgPCA2KTtcbiAgICBjb25zdCByZWdleCA9IC8lMjAvZztcblxuICAgIHNlbGVjdGVkLmNhdGVnb3J5ID0gbmV3QXJyWzBdWzFdLnNwbGl0KCcsJyk7XG4gICAgc2VsZWN0ZWQuYnJhbmQgPSBuZXdBcnJbMV1bMV0ucmVwbGFjZShyZWdleCwgJyAnKS5zcGxpdCgnLCcpO1xuICAgIHNlbGVjdGVkLnByaWNlID0gbmV3QXJyWzJdWzFdLnNwbGl0KCcsJykubWFwKChlbCkgPT4gK2VsKTtcbiAgICBzZWxlY3RlZC5zdG9jayA9IG5ld0FyclszXVsxXS5zcGxpdCgnLCcpLm1hcCgoZWwpID0+ICtlbCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgc2VsZWN0ZWQuc2VhcmNoWzBdID0gbmV3QXJyWzRdWzFdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHNlbGVjdGVkLnNvcnRbMF0gPSBuZXdBcnJbNV1bMV07XG4gIH1cblxuICByZXR1cm4gc2VsZWN0ZWQ7XG59XG4iLCJpbXBvcnQgR2V0RmlsdGVyZWRJdGVtIGZyb20gJy4uL2dldEZpbHRlcmVkSXRlbSc7XG5pbXBvcnQgTXVsdGlSYW5nZSBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9yYW5nZS9tdWx0ZVJhbmdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByaWNlRnJvbVF1ZXJ5KGl0ZW1zOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KTogdm9pZCB7XG4gIGlmIChpdGVtc1swXSA+IDApIHtcbiAgICBjb25zdCBtaW5WYWx1ZSA9IGl0ZW1zWzBdO1xuXG4gICAgR2V0RmlsdGVyZWRJdGVtLmdldEZpbHRlcmVkSXRlbSgnbWluUHJpY2UnLCBtaW5WYWx1ZSk7XG4gICAgTXVsdGlSYW5nZS5taW5QcmljZUVsLnZhbHVlID0gYCR7bWluVmFsdWV9YDtcbiAgICBNdWx0aVJhbmdlLm1pblByaWNlLnRleHRDb250ZW50ID0gYCR7bWluVmFsdWV9ICRgO1xuICB9XG5cbiAgaWYgKGl0ZW1zWzFdIDwgOTk5OTk5KSB7XG4gICAgY29uc3QgbWF4VmFsdWUgPSBpdGVtc1sxXTtcblxuICAgIEdldEZpbHRlcmVkSXRlbS5nZXRGaWx0ZXJlZEl0ZW0oJ21heFByaWNlJywgbWF4VmFsdWUpO1xuICAgIE11bHRpUmFuZ2UubWF4UHJpY2VFbC52YWx1ZSA9IGAke21heFZhbHVlfWA7XG4gICAgTXVsdGlSYW5nZS5tYXhQcmljZS50ZXh0Q29udGVudCA9IGAke21heFZhbHVlfSAkYDtcbiAgfVxufVxuIiwiaW1wb3J0IEdldEZpbHRlcmVkSXRlbSBmcm9tICcuLi9nZXRGaWx0ZXJlZEl0ZW0nO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEZyb21RdWVyeSh2YWx1ZTogc3RyaW5nKSB7XG4gIGlmICh2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKCdzZWFyY2gnLCB2YWx1ZSk7XG4gICAgU2VhcmNoLmVsLnZhbHVlID0gdmFsdWU7XG4gICAgU2VhcmNoLnNlYXJjaGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCBHZXRGaWx0ZXJlZEl0ZW0gZnJvbSAnLi4vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RTb3J0RnJvbVF1ZXJ5KHNvcnQ6IEFycmF5PHN0cmluZyB8IG51bWJlcj4pOiB2b2lkIHtcbiAgaWYgKHNvcnRbMF0gPT09ICdwcmljZUFTQydcbiAgICB8fCBzb3J0WzBdID09PSAncHJpY2VERVNDJ1xuICAgIHx8IHNvcnRbMF0gPT09ICdyYXRpbmdBU0MnXG4gICAgfHwgc29ydFswXSA9PT0gJ3JhdGluZ0RFU0MnXG4gICAgfHwgc29ydFswXSA9PT0gJ2Rpc2NvdW50QVNDJ1xuICAgIHx8IHNvcnRbMF0gPT09ICdkaXNjb3VudERFU0MnXG4gICAgfHwgc29ydFswXSA9PT0gJ2luU3RvY2tBU0MnXG4gICAgfHwgc29ydFswXSA9PT0gJ2luU3RvY2tERVNDJ1xuICApIHtcbiAgICBjb25zdCBpdGVtID0gc29ydFswXTtcblxuICAgIEdldEZpbHRlcmVkSXRlbS5nZXRGaWx0ZXJlZEl0ZW0oJ3NvcnQnLCBpdGVtKTtcbiAgICBTZWxlY3QuZWwudmFsdWUgPSBpdGVtO1xuICAgIFNlbGVjdC5zZWxlY3RWYWx1ZSA9IGl0ZW07XG4gIH1cbn1cbiIsImltcG9ydCBHZXRGaWx0ZXJlZEl0ZW0gZnJvbSAnLi4vZ2V0RmlsdGVyZWRJdGVtJztcbmltcG9ydCBNdWx0aVJhbmdlIGZyb20gJ0AvY29yZS9jb21wb25lbnRzL3JhbmdlL211bHRlUmFuZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvY2tGcm9tUXVlcnkoaXRlbXM6IEFycmF5PHN0cmluZyB8IG51bWJlcj4pIHtcbiAgaWYgKGl0ZW1zWzBdID4gMCkge1xuICAgIGNvbnN0IG1pblN0b2NrID0gaXRlbXNbMF07XG5cbiAgICBHZXRGaWx0ZXJlZEl0ZW0uZ2V0RmlsdGVyZWRJdGVtKCdtaW5TdG9jaycsIG1pblN0b2NrKTtcbiAgICBNdWx0aVJhbmdlLm1pblNyb2NrRWwudmFsdWUgPSBgJHttaW5TdG9ja31gO1xuICAgIE11bHRpUmFuZ2UubWluU3RvY2sudGV4dENvbnRlbnQgPSBgJHttaW5TdG9ja31gO1xuICB9XG5cbiAgaWYgKGl0ZW1zWzFdIDwgOTk5OTk5KSB7XG4gICAgY29uc3QgbWF4U3RvY2sgPSBpdGVtc1sxXTtcblxuICAgIEdldEZpbHRlcmVkSXRlbS5nZXRGaWx0ZXJlZEl0ZW0oJ21heFN0b2NrJywgbWF4U3RvY2spO1xuICAgIE11bHRpUmFuZ2UubWF4U3JvY2tFbC52YWx1ZSA9IGAke21heFN0b2NrfWA7XG4gICAgTXVsdGlSYW5nZS5tYXhTdG9jay50ZXh0Q29udGVudCA9IGAke21heFN0b2NrfWA7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9wcm9kdWN0TGlzdC9wcm9kdWN0TGlzdCc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnQC9zdGF0ZS9zdGF0ZSc7XG5pbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuaW1wb3J0IGVtcHR5UHJvbWlzZSBmcm9tICcuL2VtcHR5UHJvbWlzZSc7XG5pbXBvcnQge2FkZE9wdGlvbnN9IGZyb20gJy4vYWRkT3B0aW9ucyc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0AvY29yZS9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBGb3VuZCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9mb3VuZC9mb3VuZCc7XG5pbXBvcnQge2NoZWNrQWxsSXRlbXN9IGZyb20gJy4vY2hlY2tBbGxJdGVtcyc7XG5pbXBvcnQge2FkZFRvUXVlcnl9IGZyb20gJy4vZnJvbVF1ZXJ5L2FkZFRvUXVlcnknO1xuXG5jb25zdCBjYXRlZ29yeTogc3RyaW5nW10gPSBbXTtcbmNvbnN0IGJyYW5kOiBzdHJpbmdbXSA9IFtdO1xuY29uc3QgcHJpY2U6IG51bWJlcltdID0gWzAsIDk5OTk5OV07XG5jb25zdCBzdG9jazogbnVtYmVyW10gPSBbMCwgOTk5OTk5XTtcblxuY2xhc3MgR2V0RmlsdGVyZWRJdGVtIHtcbiAgc3RhdGljIHNlbGVjdGVkOiB7W2tleTogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPn0gPSB7Y2F0ZWdvcnksIGJyYW5kLCBwcmljZSwgc3RvY2t9O1xuXG4gIHN0YXRpYyBmaWx0ZXJlZEl0ZW1zOiBQcm9taXNlPElJdGVtW10+ID0gZW1wdHlQcm9taXNlO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRGaWx0ZXJlZEl0ZW0oZmxhZzogc3RyaW5nLCBzZWxlY3RlZFBvaW50czogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgYWRkT3B0aW9ucyhmbGFnLCBzZWxlY3RlZFBvaW50cywgdGhpcy5zZWxlY3RlZCk7XG4gICAgYWRkVG9RdWVyeShmbGFnLCBzZWxlY3RlZFBvaW50cywgdGhpcy5zZWxlY3RlZCk7XG5cbiAgICBjb25zdCBwcm9kdWN0czogUHJvbWlzZTxJSXRlbVtdPiA9IGF3YWl0IFN0YXRlLmdldFByb2R1Y3RzKCk7XG5cbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBQcm9taXNlLmFsbCgoYXdhaXQgcHJvZHVjdHMpLmZpbHRlcigoaXRlbSkgPT4gY2hlY2tBbGxJdGVtcyhpdGVtLCB0aGlzLnNlbGVjdGVkKSkpO1xuICAgIGlmIChmbGFnID09PSAnc2VhcmNoJyAmJiB0eXBlb2Ygc2VsZWN0ZWRQb2ludHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBTZWFyY2guc2VhcmNoKHNlbGVjdGVkUG9pbnRzLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBTZWFyY2guc2VhcmNoKFNlYXJjaC5zZWFyY2hpbmdWYWx1ZSwgdGhpcy5maWx0ZXJlZEl0ZW1zKTtcbiAgICB9XG5cbiAgICBpZiAoZmxhZyA9PT0gJ3NvcnQnICYmIHR5cGVvZiBzZWxlY3RlZFBvaW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IFNlbGVjdC5zb3J0KHNlbGVjdGVkUG9pbnRzLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBTZWxlY3Quc29ydChTZWxlY3Quc2VsZWN0VmFsdWUsIHRoaXMuZmlsdGVyZWRJdGVtcyk7XG4gICAgfVxuXG4gICAgUHJvZHVjdExpc3QuZWxlbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIFByb2R1Y3RMaXN0LnN0YXJ0KHRoaXMuZmlsdGVyZWRJdGVtcyk7XG5cbiAgICBGb3VuZC5mcm9tRmlsdGVyKChhd2FpdCB0aGlzLmZpbHRlcmVkSXRlbXMpLmxlbmd0aCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0RmlsdGVyZWRJdGVtO1xuIiwiZXhwb3J0IGNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJnNraXA9MCcpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXgnO1xuaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2FwcCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuYXBwLnJ1bigpO1xuIiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4uL21haW4vbWFpbic7XG5pbXBvcnQgUGFnZSBmcm9tICdAL2NvcmUvdGVtcGxhdGVzL3BhZ2UnO1xuaW1wb3J0IEJhc2tldFBhZ2UgZnJvbSAnLi4vYmFza2V0JztcbmltcG9ydCBJdGVtUGFnZSBmcm9tICcuLi9pdGVtJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4uL25vdEZvdW5kJztcbmltcG9ydCB7YWRkRmlsdGVyc0Zyb21RdWVyeX0gZnJvbSAnQC9maWx0cmF0aW9uL2Zyb21RdWVyeS9hZGRGaWx0ZXJzRnJvbVF1ZXJ5JztcblxuZXhwb3J0IGNvbnN0IGVudW0gUGFnZUlkIHtcbiAgU3RvcmVQYWdlID0gJ3N0b3JlLXBhZ2UnLFxuICBCYXNrZXRQYWdlID0gJ2Jhc2tldC1wYWdlJyxcbiAgSXRlbVBhZ2UgPSAnaXRlbS1wYWdlJyxcbn1cblxuY2xhc3MgQXBwIHtcbiAgcHJpdmF0ZSBzdGF0aWMgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cbiAgcHJpdmF0ZSBpbml0aWFsUGFnZTogTWFpblBhZ2U7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFBhZ2VJZDogc3RyaW5nID0gJ2N1cnJlbnQtcGFnZSc7XG5cbiAgcHJpdmF0ZSBoZWFkZXI6IEhlYWRlcjtcblxuICBzdGF0aWMgcmVuZGVyTmV3UGFnZShpZFBhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0FwcC5kZWZhdWx0UGFnZUlkfWApO1xuXG4gICAgaWYgKGN1cnJlbnRQYWdlSFRNTCkgY3VycmVudFBhZ2VIVE1MLnJlbW92ZSgpO1xuICAgIGxldCBwYWdlOiBQYWdlIHwgbnVsbCA9IG51bGw7XG5cbiAgICBpZiAoaWRQYWdlID09PSAnJyB8fCBpZFBhZ2UgPT09IFBhZ2VJZC5TdG9yZVBhZ2UpIHtcbiAgICAgIHBhZ2UgPSBuZXcgTWFpblBhZ2UoUGFnZUlkLlN0b3JlUGFnZSk7XG4gICAgICBhZGRGaWx0ZXJzRnJvbVF1ZXJ5KCk7XG4gICAgfSBlbHNlIGlmIChpZFBhZ2UgPT09IFBhZ2VJZC5CYXNrZXRQYWdlKSB7XG4gICAgICBwYWdlID0gbmV3IEJhc2tldFBhZ2UoaWRQYWdlKTtcbiAgICB9IGVsc2UgaWYgKGlkUGFnZSA9PT0gUGFnZUlkLkl0ZW1QYWdlKSB7XG4gICAgICBwYWdlID0gbmV3IEl0ZW1QYWdlKGlkUGFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2UgPSBuZXcgTm90Rm91bmRQYWdlKCdub3RGb3VuZCcpO1xuICAgIH1cblxuICAgIGlmIChwYWdlKSB7XG4gICAgICBjb25zdCBwYWdlSFRNTCA9IHBhZ2UucmVuZGVyKCk7XG5cbiAgICAgIHBhZ2VIVE1MLmlkID0gQXBwLmRlZmF1bHRQYWdlSWQ7XG4gICAgICBBcHAuY29udGFpbmVyLmFwcGVuZChwYWdlSFRNTCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbmFibGVSb3V0ZUNoYW5nZSgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcblxuICAgICAgQXBwLnJlbmRlck5ld1BhZ2UoaGFzaCk7XG4gICAgfSk7XG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpO1xuXG4gICAgQXBwLnJlbmRlck5ld1BhZ2UoaGFzaCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxQYWdlID0gbmV3IE1haW5QYWdlKCdtYWluLXBhZ2UnKTtcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoJ2RpdicsICduYXZpZ2F0aW9uJyk7XG4gICAgLy8gYWRkRmlsdGVyc0Zyb21RdWVyeSgpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLnJlbmRlcigpKTtcbiAgICBBcHAucmVuZGVyTmV3UGFnZSgnbWFpbi1wYWdlJyk7XG4gICAgdGhpcy5lbmFibGVSb3V0ZUNoYW5nZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBQYWdlIGZyb20gJ0AvY29yZS90ZW1wbGF0ZXMvcGFnZSc7XG5cbmNsYXNzIEJhc2tldFBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgc3RhdGljIFRleHRPYmplY3QgPSB7XG4gICAgbWFpblRpdGxlOiAnQmFza2V0IFBhZ2UnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihpZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUhlYWRlclRpdGxlKEJhc2tldFBhZ2UuVGV4dE9iamVjdC5tYWluVGl0bGUpO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRpdGxlKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNrZXRQYWdlO1xuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnQC9jb3JlL3RlbXBsYXRlcy9wYWdlJztcblxuY2xhc3MgSXRlbVBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgc3RhdGljIFRleHRPYmplY3QgPSB7XG4gICAgbWFpblRpdGxlOiAnSXRlbSBQYWdlJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVIZWFkZXJUaXRsZShJdGVtUGFnZS5UZXh0T2JqZWN0Lm1haW5UaXRsZSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1QYWdlO1xuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnQC9jb3JlL3RlbXBsYXRlcy9wYWdlJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgRGl2IGZyb20gJ0AvY29yZS9jb21wb25lbnRzL2Rpdi9kaXYnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJ0AvY29yZS9jb21wb25lbnRzL3Byb2R1Y3RMaXN0L3Byb2R1Y3RMaXN0JztcbmltcG9ydCBNdWx0aVJhbmdlIGZyb20gJ0AvY29yZS9jb21wb25lbnRzL3JhbmdlL211bHRlUmFuZ2UnO1xuaW1wb3J0IFN0YXRlIGZyb20gJ0Avc3RhdGUvc3RhdGUnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAL2NvcmUvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgRm91bmQgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvZm91bmQvZm91bmQnO1xuLy8gaW1wb3J0IHthZGRGaWx0ZXJzRnJvbVF1ZXJ5fSBmcm9tICdAL2ZpbHRyYXRpb24vZnJvbVF1ZXJ5L2FkZEZpbHRlcnNGcm9tUXVlcnknO1xuaW1wb3J0IEZpbHRlckJ1dHRvbnMgZnJvbSAnQC9jb3JlL2NvbXBvbmVudHMvZmlsdGVyQnV0dG9ucy9maWx0ZXJCdXR0b25zJztcblxuY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgc3RhdGljIFRleHRPYmplY3QgPSB7XG4gICAgbWFpblRpdGxlOiAnT25saW5lIFN0b3JlJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVIZWFkZXJUaXRsZShNYWluUGFnZS5UZXh0T2JqZWN0Lm1haW5UaXRsZSk7XG4gICAgY29uc3QgbWFpblBhZ2UgPSBuZXcgRGl2KHRoaXMuY29udGFpbmVyLCAnbWFpbi1wYWdlJyk7XG4gICAgY29uc3QgZmlsdGVyID0gbmV3IERpdihtYWluUGFnZS5lbGVtZW50LCAnZmlsdGVyJyk7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBuZXcgRmlsdGVyKHRoaXMuY29udGFpbmVyLCAnY2F0ZWdvcnknLCBTdGF0ZS5nZXRDYXRlZ29yaWVzKCkpO1xuICAgIGNvbnN0IGJyYW5kID0gbmV3IEZpbHRlcih0aGlzLmNvbnRhaW5lciwgJ2JyYW5kJywgU3RhdGUuZ2V0QnJhbmRzKCkpO1xuICAgIGNvbnN0IHByaWNlUmFuZ2UgPSBuZXcgTXVsdGlSYW5nZSh0aGlzLmNvbnRhaW5lciwgJ3ByaWNlJywgU3RhdGUuZ2V0TWluTWF4UHJpY2UoKSk7XG4gICAgY29uc3Qgc3RvY2tSYW5nZSA9IG5ldyBNdWx0aVJhbmdlKHRoaXMuY29udGFpbmVyLCAnc3RvY2snLCBTdGF0ZS5nZXRNaW5NYXhTdG9jaygpKTtcbiAgICBjb25zdCBwcm9kdWN0UGFnZSA9IG5ldyBEaXYodGhpcy5jb250YWluZXIsICdwcm9kdWN0LXBhZ2UnKTtcbiAgICBjb25zdCBzb3J0UHJvZHVjdHMgPSBuZXcgRGl2KHRoaXMuY29udGFpbmVyLCAnc29ydC1wcm9kdWN0cycpO1xuICAgIGNvbnN0IHNlbGVjdCA9IG5ldyBTZWxlY3QodGhpcy5jb250YWluZXIsICdzZWxlY3QnKTtcbiAgICBjb25zdCBmb3VuZCA9IG5ldyBGb3VuZCh0aGlzLmNvbnRhaW5lciwgJ2ZvdW5kJyk7XG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFNlYXJjaCh0aGlzLmNvbnRhaW5lciwgJ3NlYXJjaCcpO1xuICAgIGNvbnN0IHByb2R1Y3RMaXN0ID0gbmV3IFByb2R1Y3RMaXN0KHRoaXMuY29udGFpbmVyLCAncHJvZHVjdC1saXN0JywgU3RhdGUuZ2V0UHJvZHVjdHMoKSk7XG4gICAgY29uc3QgZmlsdGVyQnV0dG9ucyA9IG5ldyBGaWx0ZXJCdXR0b25zKHRoaXMuY29udGFpbmVyLCAnZmlsdGVyLWJ1dHRvbnMnKTtcblxuICAgIHNvcnRQcm9kdWN0cy5lbGVtZW50LmFwcGVuZChzZWxlY3QuZWxlbWVudCwgZm91bmQuZWxlbWVudCwgc2VhcmNoLmVsZW1lbnQpO1xuICAgIGZpbHRlci5lbGVtZW50LmFwcGVuZChcbiAgICAgIGZpbHRlckJ1dHRvbnMuZWxlbWVudCxcbiAgICAgIGNhdGVnb3J5LmVsZW1lbnQsXG4gICAgICBicmFuZC5lbGVtZW50LFxuICAgICAgcHJpY2VSYW5nZS5lbGVtZW50LFxuICAgICAgc3RvY2tSYW5nZS5lbGVtZW50LFxuICAgICk7XG4gICAgcHJvZHVjdFBhZ2UuZWxlbWVudC5hcHBlbmQoc29ydFByb2R1Y3RzLmVsZW1lbnQsIHByb2R1Y3RMaXN0LmVsZW1lbnQpO1xuICAgIG1haW5QYWdlLmVsZW1lbnQuYXBwZW5kKGZpbHRlci5lbGVtZW50LCBwcm9kdWN0UGFnZS5lbGVtZW50KTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGl0bGUsIG1haW5QYWdlLmVsZW1lbnQpO1xuXG4gICAgLy8gYWRkRmlsdGVyc0Zyb21RdWVyeSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnQC9jb3JlL3RlbXBsYXRlcy9wYWdlJztcblxuY2xhc3MgTm90Rm91bmRQYWdlIGV4dGVuZHMgUGFnZSB7XG4gIHN0YXRpYyBUZXh0T2JqZWN0ID0ge1xuICAgIG1haW5UaXRsZTogJ1BhZ2Ugbm90IGZvdW5kJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVIZWFkZXJUaXRsZShOb3RGb3VuZFBhZ2UuVGV4dE9iamVjdC5tYWluVGl0bGUpO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRpdGxlKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFBhZ2U7XG4iLCJpbXBvcnQge2dldEFsbFByb2R1Y3RzfSBmcm9tICdAL2h0dHAvY2F0YWxvZ0FQSSc7XG5pbXBvcnQge0lJdGVtfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuXG5jbGFzcyBTdGF0ZSB7XG4gIHN0YXRpYyBhc3luYyBnZXRQcm9kdWN0cygpIHtcbiAgICBjb25zdCB7cHJvZHVjdHN9ID0gYXdhaXQgZ2V0QWxsUHJvZHVjdHMoKTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRCcmFuZHMoKSB7XG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTxJSXRlbT4gPSBhd2FpdCB0aGlzLmdldFByb2R1Y3RzKCk7XG5cbiAgICBjb25zdCBicmFuZHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGZvciBhd2FpdCAoY29uc3QgaXRlbSBvZiByZXN1bHQpIHtcbiAgICAgIGNvbnN0IGJyYW5kTmFtZSA9IGl0ZW0uYnJhbmQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGJyYW5kTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGJyYW5kTmFtZS5zbGljZSgxKTtcblxuICAgICAgYnJhbmRzLnB1c2gocmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGJyYW5kcykpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldENhdGVnb3JpZXMoKSB7XG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTxJSXRlbT4gPSBhd2FpdCBTdGF0ZS5nZXRQcm9kdWN0cygpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgZm9yIGF3YWl0IChjb25zdCBpdGVtIG9mIHJlc3VsdCkge1xuICAgICAgY2F0ZWdvcmllcy5wdXNoKGl0ZW0uY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChjYXRlZ29yaWVzKSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0TWluTWF4UHJpY2UoKSB7XG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTxJSXRlbT4gPSBhd2FpdCB0aGlzLmdldFByb2R1Y3RzKCk7XG5cbiAgICByZXN1bHQuc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpO1xuXG4gICAgcmV0dXJuIHttaW46IHJlc3VsdFswXS5wcmljZSwgbWF4OiByZXN1bHRbOTldLnByaWNlfTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRNaW5NYXhTdG9jaygpIHtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PElJdGVtPiA9IGF3YWl0IHRoaXMuZ2V0UHJvZHVjdHMoKTtcblxuICAgIHJlc3VsdC5zb3J0KChhLCBiKSA9PiBhLnN0b2NrIC0gYi5zdG9jayk7XG5cbiAgICByZXR1cm4ge21pbjogcmVzdWx0WzBdLnN0b2NrLCBtYXg6IHJlc3VsdFs5OV0uc3RvY2t9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xuIiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHtcbiAgICAgIG9ialtrZXldID0gZGVzYy52YWx1ZTtcbiAgICB9LFxuICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KVxuICAgIH0pLCBnZW5lcmF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZih2YWx1ZSkgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLFxuICAgICAgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSByZXR1cm4gY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykge1xuICAgICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiAhMFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmVQcm9wZXJ0eShHcCwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIGRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCksXG4gICAgICBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgXCJ0XCIgPT09IG5hbWUuY2hhckF0KDApICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkgJiYgKHRoaXNbbmFtZV0gPSB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJvb3RSZWNvcmQudHlwZSkgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSxcbiAgICAgICAgICByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGVudHJ5LnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTtcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHJlY29yZC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gcmVjb3JkLnR5cGUgPyB0aGlzLm5leHQgPSByZWNvcmQuYXJnIDogXCJyZXR1cm5cIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfSwgZXhwb3J0cztcbn1cbm1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gbnVsbCA9PSBhcnIgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChudWxsICE9IF9pKSB7XG4gICAgdmFyIF9zLFxuICAgICAgX2UsXG4gICAgICBfeCxcbiAgICAgIF9yLFxuICAgICAgX2FyciA9IFtdLFxuICAgICAgX24gPSAhMCxcbiAgICAgIF9kID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChfeCA9IChfaSA9IF9pLmNhbGwoYXJyKSkubmV4dCwgMCA9PT0gaSkge1xuICAgICAgICBpZiAoT2JqZWN0KF9pKSAhPT0gX2kpIHJldHVybjtcbiAgICAgICAgX24gPSAhMTtcbiAgICAgIH0gZWxzZSBmb3IgKDsgIShfbiA9IChfcyA9IF94LmNhbGwoX2kpKS5kb25lKSAmJiAoX2Fyci5wdXNoKF9zLnZhbHVlKSwgX2Fyci5sZW5ndGggIT09IGkpOyBfbiA9ICEwKSB7XG4gICAgICAgIDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gITAsIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIG51bGwgIT0gX2lbXCJyZXR1cm5cIl0gJiYgKF9yID0gX2lbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KF9yKSAhPT0gX3IpKSByZXR1cm47XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2FycjtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iXSwibmFtZXMiOlsiVGVtcGxhdGUiLCJCdXR0b24iLCJwYXJlbnQiLCJkaXZDbGFzcyIsIkNvbnRlbnQiLCJDaGVja2JveFRtcCIsIkNoYngiLCJ2YWwiLCJ0eXBlIiwidmFsdWUiLCJpZCIsInRvTG93ZXJDYXNlIiwiYWRkQ29udGVudCIsImNoZWNrZWQiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImVsZW1lbnQiLCJpbm5lciIsImVsIiwicmVuZGVyIiwidGFnQ2xhc3MiLCJhdHRyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3BsaXQiLCJhcHBlbmQiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiRGl2IiwiTGFiZWwiLCJHZXRGaWx0ZXJlZEl0ZW0iLCJGaWx0ZXIiLCJwYXJyZW50IiwiaXRlbXMiLCJzdGFydCIsImNhdGVnb3J5IiwicXVlcnlTZWxlY3RvciIsImxhYmVsIiwiY2hlY2tib3giLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RmlsdGVyZWRJdGVtIiwiYnJhbmQiLCJ0aGVuIiwiZm9yRWFjaCIsImRyYXdWYXJpYW50c0ZvckNhdGVnb3JpZXMiLCJkcmF3VmFyaWFudHNGb3JCcmFuZHMiLCJnZXRGcm9tUXVlcnkiLCJTZWxlY3QiLCJTZWFyY2giLCJQcm9kdWN0TGlzdCIsIk11bHRpUmFuZ2UiLCJGb3VuZCIsIlN0YXRlIiwiYWN0aW9uRm9yUmVzZXQiLCJwcm9kdWN0cyIsImdldFByb2R1Y3RzIiwiUHJvbWlzZSIsImFsbCIsInByb2R1Y3RzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TWluTWF4UHJpY2UiLCJwcmljZXMiLCJnZXRNaW5NYXhTdG9jayIsInN0b2NrIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicG9zaXRpb25Gcm9tIiwiY2xlYW5VcmwiLCJzbGljZSIsImNvbmNhdCIsImZpbHRlciIsImdldEVsZW1lbnRCeUlkIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInNlbGVjdFZhbHVlIiwic2VhcmNoaW5nVmFsdWUiLCJlbGVtIiwidGV4dENvbnRlbnQiLCJtaW5QcmljZUVsIiwibWluUHJpY2UiLCJtaW4iLCJtYXhQcmljZUVsIiwibWF4UHJpY2UiLCJtYXgiLCJtaW5Tcm9ja0VsIiwibWluU3RvY2siLCJtYXhTcm9ja0VsIiwibWF4U3RvY2siLCJzZWxlY3RlZCIsInByaWNlIiwiZnJvbUZpbHRlciIsIkZpbHRlckJ1dHRvbnMiLCJyZXNldCIsImNvcHkiLCJvbmNsaWNrIiwiY2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJnZXRBbW91bnQiLCJmaWx0ZXJlZEl0ZW1zIiwidGl0bGUiLCJhIiwiQ29tcG9uZW50IiwiYnV0dG9ucyIsInRleHQiLCJIZWFkZXIiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwicGFnZUJ1dHRvbnMiLCJidXR0b24iLCJidXR0b25IVE1MIiwiaW5uZXJUZXh0IiwiY29udGFpbmVyIiwicmVuZGVyUGFnZUJ1dHRvbnMiLCJwYXJlbnROYW1lIiwiSW5mbyIsInRoaXNDbGFzcyIsImRpc2NvdW50UGVyY2VudGFnZSIsInJhdGluZyIsIml0ZW1DcmVhdGUiLCJjYXRlZ29yeVRpdGxlIiwiY2F0ZWdvcnlDb250ZW50IiwiYnJhbmRUaXRsZSIsImJyYW5kQ29udGVudCIsInByaWNlVGl0bGUiLCJwcmljZUNvbnRlbnQiLCJkaXNjb3VudCIsImRpc2NvdW50VGl0bGUiLCJkaXNjb3VudENvbnRlbnQiLCJyYXRpbmdUaXRsZSIsInJhdGluZ0NvbnRlbnQiLCJzdG9ja1RpdGxlIiwic3RvY2tDb250ZW50IiwiSXRlbSIsImltYWdlcyIsIml0ZW1UaXRsZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaXRlbUluZm8iLCJidXR0b25BZGQiLCJpdGVtIiwiY2F0YWxvZyIsInByb2R1Y3RJdGVtIiwicHJvZHVjdCIsInByb2RJdGVtQ3JlYXRvciIsImRvRm9yTWF4IiwibWF4VmFsIiwicmFuZ2VNYXgiLCJwb3N0Zml4IiwicmFuZ2VNaW4iLCJkb0Zvck1pbiIsIm1pblZhbCIsIlJhbmdlIiwibWluTWF4IiwiSW5wdXRUbXAiLCJlbXB0eVByb21pc2UiLCJuYW1lQ2xhc3MiLCJwbGFjZWhvbGRlciIsInNlYXJjaFN1aXRhYmxlSXRlbXMiLCJyZXN1bHQiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZU9wdGlvbnMiLCJzb3J0T3B0aW9ucyIsIk9wdGlvbiIsInNvcnRCeVByaWNlQSIsInNvcnRCeVByaWNlRCIsInNvcnRCeVJhdGluZ0EiLCJzb3J0QnlSYXRpbmdEIiwic29ydEJ5RGlzY291bnRBIiwic29ydEJ5RGlzY291bnREIiwic29ydEJ5SW5TdG9ja0EiLCJzb3J0QnlJblN0b2NrRCIsImRpc2FibGVkIiwiU2VsZWN0VG1wIiwic29ydEl0ZW1zIiwib3B0aW9uIiwic29ydCIsImIiLCJjb250ZW50IiwiUGFnZSIsImhlYWRlclRpdGxlIiwiaW5uZXJIVE1MIiwiYWRkT3B0aW9ucyIsImZsYWciLCJvYmoiLCJzcGxpY2UiLCJwdXNoIiwiY2hlY2tBbGxJdGVtcyIsInNlbGVjdGVkVHlwZXMiLCJ2YXJpYWJsZSIsImkiLCJyZXNvbHZlIiwidGh1bWJuYWlsIiwicHJpY2VGcm9tUXVlcnkiLCJzZWxlY3RTb3J0RnJvbVF1ZXJ5Iiwic3RvY2tGcm9tUXVlcnkiLCJzZWFyY2hGcm9tUXVlcnkiLCJnZXRCcmFuZHMiLCJBcnJheSIsImV4aXN0QnJhbmRzIiwiZnJvbSIsImdldENhdGVnb3JpZXMiLCJleGlzdENhdGVnb3JpZXMiLCJhZGRGaWx0ZXJzRnJvbVF1ZXJ5IiwiZmlsdGVycyIsInNlYXJjaCIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwiYWRkVG9RdWVyeSIsIm5ld09iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInIiLCJ0b1N0cmluZyIsInVybEZvckZpbHRlcnMiLCJzdWJzdHJpbmciLCJhcnIiLCJuZXdBcnIiLCJtYXAiLCJfIiwicmVnZXgiLCJyZXBsYWNlIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsInNlbGVjdGVkUG9pbnRzIiwiZ2V0QWxsUHJvZHVjdHMiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJBcHAiLCJhcHAiLCJydW4iLCJNYWluUGFnZSIsIkJhc2tldFBhZ2UiLCJJdGVtUGFnZSIsIk5vdEZvdW5kUGFnZSIsIlBhZ2VJZCIsImluaXRpYWxQYWdlIiwiaGVhZGVyIiwiaGFzaCIsInJlbmRlck5ld1BhZ2UiLCJlbmFibGVSb3V0ZUNoYW5nZSIsImlkUGFnZSIsImN1cnJlbnRQYWdlSFRNTCIsImRlZmF1bHRQYWdlSWQiLCJwYWdlIiwiU3RvcmVQYWdlIiwicGFnZUhUTUwiLCJib2R5IiwiY3JlYXRlSGVhZGVyVGl0bGUiLCJUZXh0T2JqZWN0IiwibWFpblRpdGxlIiwibWFpblBhZ2UiLCJwcmljZVJhbmdlIiwic3RvY2tSYW5nZSIsInByb2R1Y3RQYWdlIiwic29ydFByb2R1Y3RzIiwic2VsZWN0IiwiZm91bmQiLCJwcm9kdWN0TGlzdCIsImZpbHRlckJ1dHRvbnMiLCJicmFuZHMiLCJicmFuZE5hbWUiLCJTZXQiLCJjYXRlZ29yaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==