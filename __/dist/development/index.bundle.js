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
    return {
      Component: null,
      ComponentProps: null
    };
  },
  componentDidMount: function componentDidMount() {},
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page-bar", this.props.className),
      style: this.props.style
    }, this.state.Component && /*#__PURE__*/React.createElement(this.state.Component, this.state.ComponentProps));
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
  __initHandler: function __initHandler() {
    new HashHandler(this.props, {
      hashchange: this.__hashchange,
      handler: this.__handler,
      request: this.__request,
      notfound: this.__notfound
    });
  },
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
  __initHandler: function __initHandler() {
    new HashHandler(this.props, {
      hashchange: this.__hashchange,
      handler: this.__handler,
      request: this.__request,
      notfound: this.__notfound
    });
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL1BhZ2VSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJDb21wb25lbnQiLCJDb21wb25lbnRQcm9wcyIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwic3RhdGUiLCJfX2luaXRIYW5kbGVyIiwiSGFzaEhhbmRsZXIiLCJoYXNoY2hhbmdlIiwiX19oYXNoY2hhbmdlIiwiaGFuZGxlciIsIl9faGFuZGxlciIsInJlcXVlc3QiLCJfX3JlcXVlc3QiLCJub3Rmb3VuZCIsIl9fbm90Zm91bmQiLCJzZW5kZXIiLCJldmVudCIsImRhdGEiLCJyb3V0ZSIsInNldFN0YXRlIiwiY29tcG9uZW50Iiwiem4iLCJleHRlbmQiLCJhcHBsaWNhdGlvbiIsInJvdXRlciIsInB1c2giLCJmb3J3YXJkIiwiZXJyb3IiLCJFcnJvcjQwNCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7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QWtEbENHLFlBQVUsRUFBRSxvQkFBVUMsTUFBVixFQUFrQkosT0FBbEIsRUFBMEI7QUFDckMsU0FBS0UsUUFBTCxDQUFjRixPQUFkO0FBQ0EsR0FwRGlDO0FBcURsQ2IsUUFBTSxFQUFFLGtCQUFVO0FBQ2pCLHdCQUNDO0FBQUssZUFBUyxFQUFFVixJQUFJLENBQUNXLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixnQkFBckIsRUFBdUMsS0FBS0MsS0FBTCxDQUFXQyxTQUFsRCxDQUFoQjtBQUE4RSxXQUFLLEVBQUUsS0FBS0QsS0FBTCxDQUFXRTtBQUFoRyxPQUNFLEtBQUtDLEtBQUwsQ0FBV1QsU0FBWCxpQkFBd0IseUJBQU0sS0FBTixDQUFZLFNBQVosRUFBMEIsS0FBS1MsS0FBTCxDQUFXUixjQUFyQyxDQUQxQixDQUREO0FBS0E7QUEzRGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDREFOLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLGFBQVdGLG1CQUFPLENBQUMsa0NBQUQsQ0FETDtBQUViLG1CQUFpQkEsbUJBQU8sQ0FBQyw4Q0FBRCxDQUZYO0FBR2IsZ0JBQWNBLG1CQUFPLENBQUMsd0NBQUQ7QUFIUixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlBhZ2VCYXInLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Q29tcG9uZW50OiBudWxsLFxuXHRcdFx0Q29tcG9uZW50UHJvcHM6IG51bGxcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7XG5cdFx0XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZS1iYXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJSb3V0ZVBhZ2UnLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Q29tcG9uZW50OiBudWxsLFxuXHRcdFx0Q29tcG9uZW50UHJvcHM6IG51bGxcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5fX2luaXRIYW5kbGVyKCk7XG5cdH0sXG5cdF9faW5pdEhhbmRsZXI6IGZ1bmN0aW9uICgpe1xuXHRcdG5ldyBIYXNoSGFuZGxlcih0aGlzLnByb3BzLCB7XG5cdFx0XHRoYXNoY2hhbmdlOiB0aGlzLl9faGFzaGNoYW5nZSxcblx0XHRcdGhhbmRsZXI6IHRoaXMuX19oYW5kbGVyLFxuXHRcdFx0cmVxdWVzdDogdGhpcy5fX3JlcXVlc3QsXG5cdFx0XHRub3Rmb3VuZDogdGhpcy5fX25vdGZvdW5kXG5cdFx0fSk7XG5cdH0sXG5cdF9faGFzaGNoYW5nZTogZnVuY3Rpb24gKHNlbmRlciwgZXZlbnQpe1xuXHRcdFxuXHR9LFxuXHRfX2hhbmRsZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50LCBkYXRhKXtcblx0XHRcblx0fSxcblx0X19yZXF1ZXN0OiBmdW5jdGlvbiAoc2VuZGVyLCByZXF1ZXN0LCByb3V0ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRDb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCxcblx0XHRcdENvbXBvbmVudFByb3BzOiB6bi5leHRlbmQoe30sIHJvdXRlLnByb3BzLCB7XG5cdFx0XHRcdGFwcGxpY2F0aW9uOiB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLFxuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0LFxuXHRcdFx0XHRyb3V0ZXI6IHRoaXMsXG5cdFx0XHRcdHJvdXRlOiByb3V0ZVxuXHRcdFx0fSlcblx0XHR9KTtcblx0fSxcblx0cHVzaDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0Zm9yd2FyZDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0bm90Zm91bmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdENvbXBvbmVudDogZXJyb3IuRXJyb3I0MDQsXG5cdFx0XHRDb21wb25lbnRQcm9wczoge1xuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdF9fbm90Zm91bmQ6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3Qpe1xuXHRcdHRoaXMubm90Zm91bmQocmVxdWVzdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZS1uYXZpZ2F0b3JcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJSb3V0ZVBhZ2UnLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Q29tcG9uZW50OiBudWxsLFxuXHRcdFx0Q29tcG9uZW50UHJvcHM6IG51bGxcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5fX2luaXRIYW5kbGVyKCk7XG5cdH0sXG5cdF9faW5pdEhhbmRsZXI6IGZ1bmN0aW9uICgpe1xuXHRcdG5ldyBIYXNoSGFuZGxlcih0aGlzLnByb3BzLCB7XG5cdFx0XHRoYXNoY2hhbmdlOiB0aGlzLl9faGFzaGNoYW5nZSxcblx0XHRcdGhhbmRsZXI6IHRoaXMuX19oYW5kbGVyLFxuXHRcdFx0cmVxdWVzdDogdGhpcy5fX3JlcXVlc3QsXG5cdFx0XHRub3Rmb3VuZDogdGhpcy5fX25vdGZvdW5kXG5cdFx0fSk7XG5cdH0sXG5cdF9faGFzaGNoYW5nZTogZnVuY3Rpb24gKHNlbmRlciwgZXZlbnQpe1xuXHRcdFxuXHR9LFxuXHRfX2hhbmRsZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50LCBkYXRhKXtcblx0XHRcblx0fSxcblx0X19yZXF1ZXN0OiBmdW5jdGlvbiAoc2VuZGVyLCByZXF1ZXN0LCByb3V0ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRDb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCxcblx0XHRcdENvbXBvbmVudFByb3BzOiB6bi5leHRlbmQoe30sIHJvdXRlLnByb3BzLCB7XG5cdFx0XHRcdGFwcGxpY2F0aW9uOiB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLFxuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0LFxuXHRcdFx0XHRyb3V0ZXI6IHRoaXMsXG5cdFx0XHRcdHJvdXRlOiByb3V0ZVxuXHRcdFx0fSlcblx0XHR9KTtcblx0fSxcblx0cHVzaDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0Zm9yd2FyZDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0bm90Zm91bmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdENvbXBvbmVudDogZXJyb3IuRXJyb3I0MDQsXG5cdFx0XHRDb21wb25lbnRQcm9wczoge1xuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdF9fbm90Zm91bmQ6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3Qpe1xuXHRcdHRoaXMubm90Zm91bmQocmVxdWVzdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZS1yb3V0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdQYWdlQmFyJzogcmVxdWlyZSgnLi9QYWdlQmFyLmpzJyksXG4gICAgJ1BhZ2VOYXZpZ2F0b3InOiByZXF1aXJlKCcuL1BhZ2VOYXZpZ2F0b3IuanMnKSxcbiAgICAnUGFnZVJvdXRlcic6IHJlcXVpcmUoJy4vUGFnZVJvdXRlci5qcycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==