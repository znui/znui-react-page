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
      canBack: true,
      loading: false
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
      loading: this.props.loading,
      title: this.props.title,
      leftRender: this.props.leftRender,
      centerRender: this.props.centerRender,
      rightRender: this.props.rightRender
    })), /*#__PURE__*/React.createElement("div", {
      className: "page-body",
      style: this.props.headerStyle
    }, this.props.loading ? /*#__PURE__*/React.createElement("div", {
      className: "loading-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "loader"
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "sync-alt",
      className: "self-loading svg-inline--fa fa-sync-alt fa-w-16 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"
    })), /*#__PURE__*/React.createElement("span", null, this.props.loadingText || 'Loading'))) : this.props.children), /*#__PURE__*/React.createElement("div", {
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
      canBack: true,
      loading: false
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
  __renderIcon: function __renderIcon() {
    if (this.props.loading) {
      return /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "circle-notch",
        className: "svg-inline--fa self-loading fa-circle-notch fa-w-16 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"
      }));
    }

    var _canBack = this.props.canBack;

    if (_canBack) {
      return /*#__PURE__*/React.createElement("svg", {
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
      }));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page-bar", this.props.className, this.props.loading ? 'loading' : ''),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar-left"
    }, this.__renderIcon(), /*#__PURE__*/React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlQmFyLmpzIiwid2VicGFjazovLy8uL1BhZ2VOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vUGFnZVJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJQYWdlQmFyIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJjYW5CYWNrIiwibG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVhZGVyU3R5bGUiLCJ0aXRsZSIsImxlZnRSZW5kZXIiLCJjZW50ZXJSZW5kZXIiLCJyaWdodFJlbmRlciIsImxvYWRpbmdUZXh0IiwiY2hpbGRyZW4iLCJmb290ZXJTdHlsZSIsImZvb3RlciIsIl9fcmVuZGVyQ2VudGVyIiwiX3JldHVybiIsIl9fZG9CYWNrIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJfX3JlbmRlckljb24iLCJfY2FuQmFjayIsImdldEluaXRpYWxTdGF0ZSIsIkNvbXBvbmVudCIsIkNvbXBvbmVudFByb3BzIiwiX19pbml0SGFuZGxlciIsIl9faGFzaGNoYW5nZSIsInNlbmRlciIsImV2ZW50IiwiX19oYW5kbGVyIiwiZGF0YSIsIl9fcmVxdWVzdCIsInJlcXVlc3QiLCJyb3V0ZSIsInNldFN0YXRlIiwiY29tcG9uZW50Iiwiem4iLCJleHRlbmQiLCJhcHBsaWNhdGlvbiIsInJvdXRlciIsInB1c2giLCJmb3J3YXJkIiwibm90Zm91bmQiLCJlcnJvciIsIkVycm9yNDA0IiwiX19ub3Rmb3VuZCIsInN0YXRl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QUFsRCxDQUFoQjtBQUE4RSxXQUFLLEVBQUUsS0FBS0QsS0FBTCxDQUFXRTtBQUFoRyxPQUNFLEtBQUswQyxLQUFMLENBQVd2QixTQUFYLGlCQUF3Qix5QkFBTSxLQUFOLENBQVksU0FBWixFQUEwQixLQUFLdUIsS0FBTCxDQUFXdEIsY0FBckMsQ0FEMUIsQ0FERDtBQUtBO0FBakRpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0RBakMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2J1RCxNQUFJLEVBQUUxRCxtQkFBTyxDQUFDLHlCQUFELENBREE7QUFFYkMsU0FBTyxFQUFFRCxtQkFBTyxDQUFDLGtDQUFELENBRkg7QUFHYjJELGVBQWEsRUFBRTNELG1CQUFPLENBQUMsOENBQUQsQ0FIVDtBQUliNEQsWUFBVSxFQUFFNUQsbUJBQU8sQ0FBQyx3Q0FBRDtBQUpOLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFBhZ2VCYXIgPSByZXF1aXJlKCcuL1BhZ2VCYXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJQYWdlJyxcblx0Z2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNhbkJhY2s6IHRydWUsXG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcblx0XHRcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cblx0XHRcdFx0XHQ8UGFnZUJhciBcblx0XHRcdFx0XHRcdGNhbkJhY2s9e3RoaXMucHJvcHMuY2FuQmFja30gXG5cdFx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9XG5cdFx0XHRcdFx0XHR0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gXG5cdFx0XHRcdFx0XHRsZWZ0UmVuZGVyPXt0aGlzLnByb3BzLmxlZnRSZW5kZXJ9XG5cdFx0XHRcdFx0XHRjZW50ZXJSZW5kZXI9e3RoaXMucHJvcHMuY2VudGVyUmVuZGVyfVxuXHRcdFx0XHRcdFx0cmlnaHRSZW5kZXI9e3RoaXMucHJvcHMucmlnaHRSZW5kZXJ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYm9keVwiIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5sb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInN5bmMtYWx0XCIgY2xhc3NOYW1lPVwic2VsZi1sb2FkaW5nIHN2Zy1pbmxpbmUtLWZhIGZhLXN5bmMtYWx0IGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNzAuNzIgMTMzLjI4QzMzOS40NTggMTA0LjAwOCAyOTguODg4IDg3Ljk2MiAyNTUuODQ4IDg4Yy03Ny40NTguMDY4LTE0NC4zMjggNTMuMTc4LTE2Mi43OTEgMTI2Ljg1LTEuMzQ0IDUuMzYzLTYuMTIyIDkuMTUtMTEuNjUxIDkuMTVIMjQuMTAzYy03LjQ5OCAwLTEzLjE5NC02LjgwNy0xMS44MDctMTQuMTc2QzMzLjkzMyA5NC45MjQgMTM0LjgxMyA4IDI1NiA4YzY2LjQ0OCAwIDEyNi43OTEgMjYuMTM2IDE3MS4zMTUgNjguNjg1TDQ2My4wMyA0MC45N0M0NzguMTQ5IDI1Ljg1MSA1MDQgMzYuNTU5IDUwNCA1Ny45NDFWMTkyYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNEgzNDUuOTQxYy0yMS4zODIgMC0zMi4wOS0yNS44NTEtMTYuOTcxLTQwLjk3MWw0MS43NS00MS43NDl6TTMyIDI5NmgxMzQuMDU5YzIxLjM4MiAwIDMyLjA5IDI1Ljg1MSAxNi45NzEgNDAuOTcxbC00MS43NSA0MS43NWMzMS4yNjIgMjkuMjczIDcxLjgzNSA0NS4zMTkgMTE0Ljg3NiA0NS4yOCA3Ny40MTgtLjA3IDE0NC4zMTUtNTMuMTQ0IDE2Mi43ODctMTI2Ljg0OSAxLjM0NC01LjM2MyA2LjEyMi05LjE1IDExLjY1MS05LjE1aDU3LjMwNGM3LjQ5OCAwIDEzLjE5NCA2LjgwNyAxMS44MDcgMTQuMTc2QzQ3OC4wNjcgNDE3LjA3NiAzNzcuMTg3IDUwNCAyNTYgNTA0Yy02Ni40NDggMC0xMjYuNzkxLTI2LjEzNi0xNzEuMzE1LTY4LjY4NUw0OC45NyA0NzEuMDNDMzMuODUxIDQ4Ni4xNDkgOCA0NzUuNDQxIDggNDU0LjA1OVYzMjBjMC0xMy4yNTUgMTAuNzQ1LTI0IDI0LTI0elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy5sb2FkaW5nVGV4dCB8fCAnTG9hZGluZyd9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PiA6IHRoaXMucHJvcHMuY2hpbGRyZW4gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWZvb3RlclwiIHN0eWxlPXt0aGlzLnByb3BzLmZvb3RlclN0eWxlfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5mb290ZXJ9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUGFnZUJhcicsXG5cdGdldERlZmF1bHRQcm9wczpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjYW5CYWNrOiB0cnVlLFxuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VudGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY2VudGVyUmVuZGVyICYmIHRoaXMucHJvcHMuY2VudGVyUmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4pIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJhci1jZW50ZXJcIj5cblx0XHRcdFx0eyB0aGlzLnByb3BzLnJpZ2h0UmVuZGVyICYmIHRoaXMucHJvcHMucmlnaHRSZW5kZXIodGhpcykgfVxuXHRcdFx0PC9kaXY+O1xuXHRcdH1cblx0fSxcblx0X19kb0JhY2s6IGZ1bmN0aW9uICgpe1xuXHRcdHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcblx0fSxcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmxvYWRpbmcpIHtcblx0XHRcdHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJjaXJjbGUtbm90Y2hcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBzZWxmLWxvYWRpbmcgZmEtY2lyY2xlLW5vdGNoIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMzkuMDU2djE2LjY1OWMwIDEwLjgwNCA3LjI4MSAyMC4xNTkgMTcuNjg2IDIzLjA2NkMzODMuMjA0IDEwMC40MzQgNDQwIDE3MS41MTggNDQwIDI1NmMwIDEwMS42ODktODIuMjk1IDE4NC0xODQgMTg0LTEwMS42ODkgMC0xODQtODIuMjk1LTE4NC0xODQgMC04NC40NyA1Ni43ODYtMTU1LjU2NCAxMzQuMzEyLTE3Ny4yMTlDMjE2LjcxOSA3NS44NzQgMjI0IDY2LjUxNyAyMjQgNTUuNzEyVjM5LjA2NGMwLTE1LjcwOS0xNC44MzQtMjcuMTUzLTMwLjA0Ni0yMy4yMzRDODYuNjAzIDQzLjQ4MiA3LjM5NCAxNDEuMjA2IDguMDAzIDI1Ny4zMzJjLjcyIDEzNy4wNTIgMTExLjQ3NyAyNDYuOTU2IDI0OC41MzEgMjQ2LjY2N0MzOTMuMjU1IDUwMy43MTEgNTA0IDM5Mi43ODggNTA0IDI1NmMwLTExNS42MzMtNzkuMTQtMjEyLjc3OS0xODYuMjExLTI0MC4yMzZDMzAyLjY3OCAxMS44ODkgMjg4IDIzLjQ1NiAyODggMzkuMDU2elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0fVxuXHRcdHZhciBfY2FuQmFjayA9IHRoaXMucHJvcHMuY2FuQmFjaztcblx0XHRpZihfY2FuQmFjaykge1xuXHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2RvQmFja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImFycm93LWxlZnRcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1sZWZ0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cblx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU3LjUgNDQ1LjFsLTIyLjIgMjIuMmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBMNyAyNzNjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDIwMS40IDQ0LjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMjIuMiAyMi4yYzkuNSA5LjUgOS4zIDI1LS40IDM0LjNMMTM2LjYgMjE2SDQyNGMxMy4zIDAgMjQgMTAuNyAyNCAyNHYzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNEgxMzYuNmwxMjAuNSAxMTQuOGM5LjggOS4zIDEwIDI0LjguNCAzNC4zelwiPjwvcGF0aD5cblx0XHRcdDwvc3ZnPjtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZS1iYXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsICh0aGlzLnByb3BzLmxvYWRpbmc/J2xvYWRpbmcnOicnKSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFyLWxlZnRcIj5cblx0XHRcdFx0XHR7dGhpcy5fX3JlbmRlckljb24oKX1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLmxlZnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5sZWZ0UmVuZGVyKHRoaXMpIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLl9fcmVuZGVyQ2VudGVyKClcblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhci1yaWdodFwiPlxuXHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5yaWdodFJlbmRlciAmJiB0aGlzLnByb3BzLnJpZ2h0UmVuZGVyKHRoaXMpIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSUm91dGVQYWdlJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdENvbXBvbmVudDogbnVsbCxcblx0XHRcdENvbXBvbmVudFByb3BzOiBudWxsXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe1xuXHRcdHRoaXMuX19pbml0SGFuZGxlcigpO1xuXHR9LFxuXHRfX2luaXRIYW5kbGVyOiBmdW5jdGlvbiAoKXtcblx0XHRcblx0fSxcblx0X19oYXNoY2hhbmdlOiBmdW5jdGlvbiAoc2VuZGVyLCBldmVudCl7XG5cdFx0XG5cdH0sXG5cdF9faGFuZGxlcjogZnVuY3Rpb24gKHNlbmRlciwgZXZlbnQsIGRhdGEpe1xuXHRcdFxuXHR9LFxuXHRfX3JlcXVlc3Q6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3QsIHJvdXRlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdENvbXBvbmVudDogcm91dGUuY29tcG9uZW50LFxuXHRcdFx0Q29tcG9uZW50UHJvcHM6IHpuLmV4dGVuZCh7fSwgcm91dGUucHJvcHMsIHtcblx0XHRcdFx0YXBwbGljYXRpb246IHRoaXMucHJvcHMuYXBwbGljYXRpb24sXG5cdFx0XHRcdHJlcXVlc3Q6IHJlcXVlc3QsXG5cdFx0XHRcdHJvdXRlcjogdGhpcyxcblx0XHRcdFx0cm91dGU6IHJvdXRlXG5cdFx0XHR9KVxuXHRcdH0pO1xuXHR9LFxuXHRwdXNoOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRmb3J3YXJkOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRub3Rmb3VuZDogZnVuY3Rpb24gKHJlcXVlc3Qpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Q29tcG9uZW50OiBlcnJvci5FcnJvcjQwNCxcblx0XHRcdENvbXBvbmVudFByb3BzOiB7XG5cdFx0XHRcdHJlcXVlc3Q6IHJlcXVlc3Rcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0X19ub3Rmb3VuZDogZnVuY3Rpb24gKHNlbmRlciwgcmVxdWVzdCl7XG5cdFx0dGhpcy5ub3Rmb3VuZChyZXF1ZXN0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlLW5hdmlnYXRvclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLkNvbXBvbmVudCAmJiA8dGhpcy5zdGF0ZS5Db21wb25lbnQgey4uLnRoaXMuc3RhdGUuQ29tcG9uZW50UHJvcHN9IC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlJvdXRlUGFnZScsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRDb21wb25lbnQ6IG51bGwsXG5cdFx0XHRDb21wb25lbnRQcm9wczogbnVsbFxuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLl9faW5pdEhhbmRsZXIoKTtcblx0fSxcblx0X19pbml0SGFuZGxlcjogZnVuY3Rpb24gKCl7XG5cdFx0XG5cdH0sXG5cdF9faGFzaGNoYW5nZTogZnVuY3Rpb24gKHNlbmRlciwgZXZlbnQpe1xuXHRcdFxuXHR9LFxuXHRfX2hhbmRsZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50LCBkYXRhKXtcblx0XHRcblx0fSxcblx0X19yZXF1ZXN0OiBmdW5jdGlvbiAoc2VuZGVyLCByZXF1ZXN0LCByb3V0ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRDb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudCxcblx0XHRcdENvbXBvbmVudFByb3BzOiB6bi5leHRlbmQoe30sIHJvdXRlLnByb3BzLCB7XG5cdFx0XHRcdGFwcGxpY2F0aW9uOiB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLFxuXHRcdFx0XHRyZXF1ZXN0OiByZXF1ZXN0LFxuXHRcdFx0XHRyb3V0ZXI6IHRoaXMsXG5cdFx0XHRcdHJvdXRlOiByb3V0ZVxuXHRcdFx0fSlcblx0XHR9KTtcblx0fSxcblx0cHVzaDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0Zm9yd2FyZDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0bm90Zm91bmQ6IGZ1bmN0aW9uIChyZXF1ZXN0KXtcblx0XHRcblx0fSxcblx0X19ub3Rmb3VuZDogZnVuY3Rpb24gKHNlbmRlciwgcmVxdWVzdCl7XG5cdFx0dGhpcy5ub3Rmb3VuZChyZXF1ZXN0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlLXJvdXRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLkNvbXBvbmVudCAmJiA8dGhpcy5zdGF0ZS5Db21wb25lbnQgey4uLnRoaXMuc3RhdGUuQ29tcG9uZW50UHJvcHN9IC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZTogcmVxdWlyZSgnLi9QYWdlJyksXG4gICAgUGFnZUJhcjogcmVxdWlyZSgnLi9QYWdlQmFyLmpzJyksXG4gICAgUGFnZU5hdmlnYXRvcjogcmVxdWlyZSgnLi9QYWdlTmF2aWdhdG9yLmpzJyksXG4gICAgUGFnZVJvdXRlcjogcmVxdWlyZSgnLi9QYWdlUm91dGVyLmpzJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9