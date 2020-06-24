(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./PageBar.js":
/*!********************!*\
  !*** ./PageBar.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRPageBar',
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  render: function render() {
    var _canBack = true;
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page-bar", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar-left"
    }, _canBack && /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "arrow-left",
      className: "svg-inline--fa fa-arrow-left fa-w-14 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
    })), /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, this.props.title)), /*#__PURE__*/React.createElement("div", {
      className: "bar-right"
    }, this.props.rightRender && this.props.rightRender()));
  }
});

/***/ }),

/***/ "./PageNavigator.js":
/*!**************************!*\
  !*** ./PageNavigator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRRoutePage',
  getInitialState: function getInitialState() {
    return {
      Component: null,
      ComponentProps: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__initHandler();
  },
  __initHandler: function __initHandler() {},
  __hashchange: function __hashchange(sender, event) {},
  __handler: function __handler(sender, event, data) {},
  __request: function __request(sender, request, route) {
    this.setState({
      Component: route.component,
      ComponentProps: zn.extend({}, route.props, {
        application: this.props.application,
        request: request,
        router: this,
        route: route
      })
    });
  },
  push: function push() {},
  forward: function forward() {},
  notfound: function notfound(request) {
    this.setState({
      Component: error.Error404,
      ComponentProps: {
        request: request
      }
    });
  },
  __notfound: function __notfound(sender, request) {
    this.notfound(request);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page-navigator", this.props.className),
      style: this.props.style
    }, this.state.Component && /*#__PURE__*/React.createElement(this.state.Component, this.state.ComponentProps));
  }
});

/***/ }),

/***/ "./PageRouter.js":
/*!***********************!*\
  !*** ./PageRouter.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRRoutePage',
  getInitialState: function getInitialState() {
    return {
      Component: null,
      ComponentProps: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__initHandler();
  },
  __initHandler: function __initHandler() {},
  __hashchange: function __hashchange(sender, event) {},
  __handler: function __handler(sender, event, data) {},
  __request: function __request(sender, request, route) {
    this.setState({
      Component: route.component,
      ComponentProps: zn.extend({}, route.props, {
        application: this.props.application,
        request: request,
        router: this,
        route: route
      })
    });
  },
  push: function push() {},
  forward: function forward() {},
  notfound: function notfound(request) {},
  __notfound: function __notfound(sender, request) {
    this.notfound(request);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page-router", this.props.className),
      style: this.props.style
    }, this.state.Component && /*#__PURE__*/React.createElement(this.state.Component, this.state.ComponentProps));
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'PageBar': __webpack_require__(/*! ./PageBar.js */ "./PageBar.js"),
  'PageNavigator': __webpack_require__(/*! ./PageNavigator.js */ "./PageNavigator.js"),
  'PageRouter': __webpack_require__(/*! ./PageRouter.js */ "./PageRouter.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL1BhZ2VSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsIl9jYW5CYWNrIiwicmVhY3QiLCJjbGFzc25hbWUiLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwidGl0bGUiLCJyaWdodFJlbmRlciIsIkNvbXBvbmVudCIsIkNvbXBvbmVudFByb3BzIiwiX19pbml0SGFuZGxlciIsIl9faGFzaGNoYW5nZSIsInNlbmRlciIsImV2ZW50IiwiX19oYW5kbGVyIiwiZGF0YSIsIl9fcmVxdWVzdCIsInJlcXVlc3QiLCJyb3V0ZSIsInNldFN0YXRlIiwiY29tcG9uZW50Iiwiem4iLCJleHRlbmQiLCJhcHBsaWNhdGlvbiIsInJvdXRlciIsInB1c2giLCJmb3J3YXJkIiwibm90Zm91bmQiLCJlcnJvciIsIkVycm9yNDA0IiwiX19ub3Rmb3VuZCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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d0JBQ0M7QUFBSyxlQUFTLEVBQUVSLElBQUksQ0FBQ1UsS0FBTCxDQUFXQyxTQUFYLENBQXFCLGdCQUFyQixFQUF1QyxLQUFLQyxLQUFMLENBQVdDLFNBQWxELENBQWhCO0FBQThFLFdBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdFO0FBQWhHLE9BQ0UsS0FBSzBCLEtBQUwsQ0FBV3ZCLFNBQVgsaUJBQXdCLHlCQUFNLEtBQU4sQ0FBWSxTQUFaLEVBQTBCLEtBQUt1QixLQUFMLENBQVd0QixjQUFyQyxDQUQxQixDQUREO0FBS0E7QUFqRGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDREFoQixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYixhQUFXRixtQkFBTyxDQUFDLGtDQUFELENBREw7QUFFYixtQkFBaUJBLG1CQUFPLENBQUMsOENBQUQsQ0FGWDtBQUdiLGdCQUFjQSxtQkFBTyxDQUFDLHdDQUFEO0FBSFIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJQYWdlQmFyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcblx0XHRcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfY2FuQmFjayA9IHRydWU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBhZ2UtYmFyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYXItbGVmdFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdF9jYW5CYWNrICYmIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImFycm93LWxlZnRcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1sZWZ0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU3LjUgNDQ1LjFsLTIyLjIgMjIuMmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBMNyAyNzNjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDIwMS40IDQ0LjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMjIuMiAyMi4yYzkuNSA5LjUgOS4zIDI1LS40IDM0LjNMMTM2LjYgMjE2SDQyNGMxMy4zIDAgMjQgMTAuNyAyNCAyNHYzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNEgxMzYuNmwxMjAuNSAxMTQuOGM5LjggOS4zIDEwIDI0LjguNCAzNC4zelwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFyLXJpZ2h0XCI+XG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLnJpZ2h0UmVuZGVyICYmIHRoaXMucHJvcHMucmlnaHRSZW5kZXIoKSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJvdXRlUGFnZScsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRDb21wb25lbnQ6IG51bGwsXG5cdFx0XHRDb21wb25lbnRQcm9wczogbnVsbFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLl9faW5pdEhhbmRsZXIoKTtcblx0fSxcblx0X19pbml0SGFuZGxlcjogZnVuY3Rpb24gKCl7XG5cdFx0XG5cdH0sXG5cdF9faGFzaGNoYW5nZTogZnVuY3Rpb24gKHNlbmRlciwgZXZlbnQpe1xuXHRcdFxuXHR9LFxuXHRfX2hhbmRsZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50LCBkYXRhKXtcblx0XHRcblx0fSxcblx0X19yZXF1ZXN0OiBmdW5jdGlvbiAoc2VuZGVyLCByZXF1ZXN0LCByb3V0ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRDb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCxcblx0XHRcdENvbXBvbmVudFByb3BzOiB6bi5leHRlbmQoe30sIHJvdXRlLnByb3BzLCB7XG5cdFx0XHRcdGFwcGxpY2F0aW9uOiB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLFxuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0LFxuXHRcdFx0XHRyb3V0ZXI6IHRoaXMsXG5cdFx0XHRcdHJvdXRlOiByb3V0ZVxuXHRcdFx0fSlcblx0XHR9KTtcblx0fSxcblx0cHVzaDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0Zm9yd2FyZDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0bm90Zm91bmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdENvbXBvbmVudDogZXJyb3IuRXJyb3I0MDQsXG5cdFx0XHRDb21wb25lbnRQcm9wczoge1xuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdF9fbm90Zm91bmQ6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3Qpe1xuXHRcdHRoaXMubm90Zm91bmQocmVxdWVzdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZS1uYXZpZ2F0b3JcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJSb3V0ZVBhZ2UnLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Q29tcG9uZW50OiBudWxsLFxuXHRcdFx0Q29tcG9uZW50UHJvcHM6IG51bGxcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5fX2luaXRIYW5kbGVyKCk7XG5cdH0sXG5cdF9faW5pdEhhbmRsZXI6IGZ1bmN0aW9uICgpe1xuXHRcdFxuXHR9LFxuXHRfX2hhc2hjaGFuZ2U6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50KXtcblx0XHRcblx0fSxcblx0X19oYW5kbGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBldmVudCwgZGF0YSl7XG5cdFx0XG5cdH0sXG5cdF9fcmVxdWVzdDogZnVuY3Rpb24gKHNlbmRlciwgcmVxdWVzdCwgcm91dGUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Q29tcG9uZW50OiByb3V0ZS5jb21wb25lbnQsXG5cdFx0XHRDb21wb25lbnRQcm9wczogem4uZXh0ZW5kKHt9LCByb3V0ZS5wcm9wcywge1xuXHRcdFx0XHRhcHBsaWNhdGlvbjogdGhpcy5wcm9wcy5hcHBsaWNhdGlvbixcblx0XHRcdFx0cmVxdWVzdDogcmVxdWVzdCxcblx0XHRcdFx0cm91dGVyOiB0aGlzLFxuXHRcdFx0XHRyb3V0ZTogcm91dGVcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH0sXG5cdHB1c2g6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdGZvcndhcmQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdG5vdGZvdW5kOiBmdW5jdGlvbiAocmVxdWVzdCl7XG5cdFx0XG5cdH0sXG5cdF9fbm90Zm91bmQ6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3Qpe1xuXHRcdHRoaXMubm90Zm91bmQocmVxdWVzdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZS1yb3V0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdQYWdlQmFyJzogcmVxdWlyZSgnLi9QYWdlQmFyLmpzJyksXG4gICAgJ1BhZ2VOYXZpZ2F0b3InOiByZXF1aXJlKCcuL1BhZ2VOYXZpZ2F0b3IuanMnKSxcbiAgICAnUGFnZVJvdXRlcic6IHJlcXVpcmUoJy4vUGFnZVJvdXRlci5qcycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==