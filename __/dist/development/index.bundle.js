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

/***/ "./Page.js":
/*!*****************!*\
  !*** ./Page.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var PageBar = __webpack_require__(/*! ./PageBar */ "./PageBar.js");

module.exports = React.createClass({
  displayName: 'ZRPage',
  getDefaultProps: function getDefaultProps() {
    return {
      canBack: true
    };
  },
  componentDidMount: function componentDidMount() {},
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-header",
      style: this.props.headerStyle
    }, /*#__PURE__*/React.createElement(PageBar, {
      canBack: this.props.canBack,
      title: this.props.title,
      leftRender: this.props.leftRender,
      centerRender: this.props.centerRender,
      rightRender: this.props.rightRender
    })), /*#__PURE__*/React.createElement("div", {
      className: "page-body",
      style: this.props.headerStyle
    }, this.props.children), /*#__PURE__*/React.createElement("div", {
      className: "page-footer",
      style: this.props.footerStyle
    }, this.props.footer));
  }
});

/***/ }),

/***/ "./PageBar.js":
/*!********************!*\
  !*** ./PageBar.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRPageBar',
  getDefaultProps: function getDefaultProps() {
    return {
      canBack: true
    };
  },
  __renderCenter: function __renderCenter() {
    var _return = this.props.centerRender && this.props.centerRender(this);

    if (_return) {
      return /*#__PURE__*/React.createElement("div", {
        className: "bar-center"
      }, this.props.rightRender && this.props.rightRender(this));
    }
  },
  __doBack: function __doBack() {
    window.history.back();
  },
  render: function render() {
    var _canBack = this.props.canBack;
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page-bar", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar-left"
    }, _canBack && /*#__PURE__*/React.createElement("svg", {
      onClick: this.__doBack,
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
    })), /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, this.props.title), this.props.leftRender && this.props.leftRender(this)), this.__renderCenter(), /*#__PURE__*/React.createElement("div", {
      className: "bar-right"
    }, this.props.rightRender && this.props.rightRender(this)));
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
  Page: __webpack_require__(/*! ./Page */ "./Page.js"),
  PageBar: __webpack_require__(/*! ./PageBar.js */ "./PageBar.js"),
  PageNavigator: __webpack_require__(/*! ./PageNavigator.js */ "./PageNavigator.js"),
  PageRouter: __webpack_require__(/*! ./PageRouter.js */ "./PageRouter.js")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlQmFyLmpzIiwid2VicGFjazovLy8uL1BhZ2VOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vUGFnZVJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJQYWdlQmFyIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJjYW5CYWNrIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsInByb3BzIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoZWFkZXJTdHlsZSIsInRpdGxlIiwibGVmdFJlbmRlciIsImNlbnRlclJlbmRlciIsInJpZ2h0UmVuZGVyIiwiY2hpbGRyZW4iLCJmb290ZXJTdHlsZSIsImZvb3RlciIsIl9fcmVuZGVyQ2VudGVyIiwiX3JldHVybiIsIl9fZG9CYWNrIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJfY2FuQmFjayIsImdldEluaXRpYWxTdGF0ZSIsIkNvbXBvbmVudCIsIkNvbXBvbmVudFByb3BzIiwiX19pbml0SGFuZGxlciIsIl9faGFzaGNoYW5nZSIsInNlbmRlciIsImV2ZW50IiwiX19oYW5kbGVyIiwiZGF0YSIsIl9fcmVxdWVzdCIsInJlcXVlc3QiLCJyb3V0ZSIsInNldFN0YXRlIiwiY29tcG9uZW50Iiwiem4iLCJleHRlbmQiLCJhcHBsaWNhdGlvbiIsInJvdXRlciIsInB1c2giLCJmb3J3YXJkIiwibm90Zm91bmQiLCJlcnJvciIsIkVycm9yNDA0IiwiX19ub3Rmb3VuZCIsInN0YXRlIiwiUGFnZSIsIlBhZ2VOYXZpZ2F0b3IiLCJQYWdlUm91dGVyIl0s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LFdBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdFO0FBQWhHLE9BQ0UsS0FBS3dDLEtBQUwsQ0FBV3ZCLFNBQVgsaUJBQXdCLHlCQUFNLEtBQU4sQ0FBWSxTQUFaLEVBQTBCLEtBQUt1QixLQUFMLENBQVd0QixjQUFyQyxDQUQxQixDQUREO0FBS0E7QUFqRGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDREE5QixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYm9ELE1BQUksRUFBRXZELG1CQUFPLENBQUMseUJBQUQsQ0FEQTtBQUViQyxTQUFPLEVBQUVELG1CQUFPLENBQUMsa0NBQUQsQ0FGSDtBQUdid0QsZUFBYSxFQUFFeEQsbUJBQU8sQ0FBQyw4Q0FBRCxDQUhUO0FBSWJ5RCxZQUFVLEVBQUV6RCxtQkFBTyxDQUFDLHdDQUFEO0FBSk4sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUGFnZUJhciA9IHJlcXVpcmUoJy4vUGFnZUJhcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBhZ2UnLFxuXHRnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2FuQmFjazogdHJ1ZVxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcblx0XHRcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cblx0XHRcdFx0XHQ8UGFnZUJhciBcblx0XHRcdFx0XHRcdGNhbkJhY2s9e3RoaXMucHJvcHMuY2FuQmFja30gXG5cdFx0XHRcdFx0XHR0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gXG5cdFx0XHRcdFx0XHRsZWZ0UmVuZGVyPXt0aGlzLnByb3BzLmxlZnRSZW5kZXJ9XG5cdFx0XHRcdFx0XHRjZW50ZXJSZW5kZXI9e3RoaXMucHJvcHMuY2VudGVyUmVuZGVyfVxuXHRcdFx0XHRcdFx0cmlnaHRSZW5kZXI9e3RoaXMucHJvcHMucmlnaHRSZW5kZXJ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYm9keVwiIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnZS1mb290ZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5mb290ZXJTdHlsZX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuZm9vdGVyfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBhZ2VCYXInLFxuXHRnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2FuQmFjazogdHJ1ZVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZW50ZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5jZW50ZXJSZW5kZXIgJiYgdGhpcy5wcm9wcy5jZW50ZXJSZW5kZXIodGhpcyk7XG5cdFx0aWYoX3JldHVybikge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWNlbnRlclwiPlxuXHRcdFx0XHR7IHRoaXMucHJvcHMucmlnaHRSZW5kZXIgJiYgdGhpcy5wcm9wcy5yaWdodFJlbmRlcih0aGlzKSB9XG5cdFx0XHQ8L2Rpdj47XG5cdFx0fVxuXHR9LFxuXHRfX2RvQmFjazogZnVuY3Rpb24gKCl7XG5cdFx0d2luZG93Lmhpc3RvcnkuYmFjaygpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9jYW5CYWNrID0gdGhpcy5wcm9wcy5jYW5CYWNrO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlLWJhclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFyLWxlZnRcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfY2FuQmFjayAmJiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19kb0JhY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJhcnJvdy1sZWZ0XCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtYXJyb3ctbGVmdCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1Ny41IDQ0NS4xbC0yMi4yIDIyLjJjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDEuNCA0NC43YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjIgMjIuMmM5LjUgOS41IDkuMyAyNS0uNCAzNC4zTDEzNi42IDIxNkg0MjRjMTMuMyAwIDI0IDEwLjcgMjQgMjR2MzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMTM2LjZsMTIwLjUgMTE0LjhjOS44IDkuMyAxMCAyNC44LjQgMzQuM3pcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuXHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5sZWZ0UmVuZGVyICYmIHRoaXMucHJvcHMubGVmdFJlbmRlcih0aGlzKSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5fX3JlbmRlckNlbnRlcigpXG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYXItcmlnaHRcIj5cblx0XHRcdFx0XHR7IHRoaXMucHJvcHMucmlnaHRSZW5kZXIgJiYgdGhpcy5wcm9wcy5yaWdodFJlbmRlcih0aGlzKSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJvdXRlUGFnZScsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRDb21wb25lbnQ6IG51bGwsXG5cdFx0XHRDb21wb25lbnRQcm9wczogbnVsbFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLl9faW5pdEhhbmRsZXIoKTtcblx0fSxcblx0X19pbml0SGFuZGxlcjogZnVuY3Rpb24gKCl7XG5cdFx0XG5cdH0sXG5cdF9faGFzaGNoYW5nZTogZnVuY3Rpb24gKHNlbmRlciwgZXZlbnQpe1xuXHRcdFxuXHR9LFxuXHRfX2hhbmRsZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50LCBkYXRhKXtcblx0XHRcblx0fSxcblx0X19yZXF1ZXN0OiBmdW5jdGlvbiAoc2VuZGVyLCByZXF1ZXN0LCByb3V0ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRDb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCxcblx0XHRcdENvbXBvbmVudFByb3BzOiB6bi5leHRlbmQoe30sIHJvdXRlLnByb3BzLCB7XG5cdFx0XHRcdGFwcGxpY2F0aW9uOiB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLFxuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0LFxuXHRcdFx0XHRyb3V0ZXI6IHRoaXMsXG5cdFx0XHRcdHJvdXRlOiByb3V0ZVxuXHRcdFx0fSlcblx0XHR9KTtcblx0fSxcblx0cHVzaDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0Zm9yd2FyZDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0bm90Zm91bmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdENvbXBvbmVudDogZXJyb3IuRXJyb3I0MDQsXG5cdFx0XHRDb21wb25lbnRQcm9wczoge1xuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdF9fbm90Zm91bmQ6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3Qpe1xuXHRcdHRoaXMubm90Zm91bmQocmVxdWVzdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZS1uYXZpZ2F0b3JcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJSb3V0ZVBhZ2UnLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Q29tcG9uZW50OiBudWxsLFxuXHRcdFx0Q29tcG9uZW50UHJvcHM6IG51bGxcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5fX2luaXRIYW5kbGVyKCk7XG5cdH0sXG5cdF9faW5pdEhhbmRsZXI6IGZ1bmN0aW9uICgpe1xuXHRcdFxuXHR9LFxuXHRfX2hhc2hjaGFuZ2U6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50KXtcblx0XHRcblx0fSxcblx0X19oYW5kbGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBldmVudCwgZGF0YSl7XG5cdFx0XG5cdH0sXG5cdF9fcmVxdWVzdDogZnVuY3Rpb24gKHNlbmRlciwgcmVxdWVzdCwgcm91dGUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Q29tcG9uZW50OiByb3V0ZS5jb21wb25lbnQsXG5cdFx0XHRDb21wb25lbnRQcm9wczogem4uZXh0ZW5kKHt9LCByb3V0ZS5wcm9wcywge1xuXHRcdFx0XHRhcHBsaWNhdGlvbjogdGhpcy5wcm9wcy5hcHBsaWNhdGlvbixcblx0XHRcdFx0cmVxdWVzdDogcmVxdWVzdCxcblx0XHRcdFx0cm91dGVyOiB0aGlzLFxuXHRcdFx0XHRyb3V0ZTogcm91dGVcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH0sXG5cdHB1c2g6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdGZvcndhcmQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdG5vdGZvdW5kOiBmdW5jdGlvbiAocmVxdWVzdCl7XG5cdFx0XG5cdH0sXG5cdF9fbm90Zm91bmQ6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3Qpe1xuXHRcdHRoaXMubm90Zm91bmQocmVxdWVzdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZS1yb3V0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2U6IHJlcXVpcmUoJy4vUGFnZScpLFxuICAgIFBhZ2VCYXI6IHJlcXVpcmUoJy4vUGFnZUJhci5qcycpLFxuICAgIFBhZ2VOYXZpZ2F0b3I6IHJlcXVpcmUoJy4vUGFnZU5hdmlnYXRvci5qcycpLFxuICAgIFBhZ2VSb3V0ZXI6IHJlcXVpcmUoJy4vUGFnZVJvdXRlci5qcycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==