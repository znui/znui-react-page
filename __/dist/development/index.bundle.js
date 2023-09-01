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

/***/ "./PageColumnLayout.js":
/*!*****************************!*\
  !*** ./PageColumnLayout.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var PageColumnLayout = React.createClass({
  displayName: 'PageColumnLayout',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page-column-layout", this.props.className),
      style: this.props.style
    }, this.props.children);
  }
});
PageColumnLayout.Header = React.createClass({
  displayName: 'PageColumnLayout.Header',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("warp-header", this.props.className),
      style: this.props.style
    }, this.props.children);
  }
});
PageColumnLayout.Body = React.createClass({
  displayName: 'PageColumnLayout.Body',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("warp-body", this.props.className),
      style: this.props.style
    }, this.props.children);
  }
});
module.exports = PageColumnLayout;

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

/***/ "./PageRowLayout.js":
/*!**************************!*\
  !*** ./PageRowLayout.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var PageRowLayout = React.createClass({
  displayName: 'PageRowLayout',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-page-row-layout", this.props.className),
      style: this.props.style
    }, this.props.children);
  }
});
PageRowLayout.Left = React.createClass({
  displayName: 'PageRowLayout.Left',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("warp-left", this.props.className),
      style: this.props.style
    }, this.props.children);
  }
});
PageRowLayout.Right = React.createClass({
  displayName: 'PageRowLayout.Right',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("warp-right", this.props.className),
      style: this.props.style
    }, this.props.children);
  }
});
module.exports = PageRowLayout;

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
  PageColumnLayout: __webpack_require__(/*! ./PageColumnLayout */ "./PageColumnLayout.js"),
  PageRowLayout: __webpack_require__(/*! ./PageRowLayout */ "./PageRowLayout.js"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlQmFyLmpzIiwid2VicGFjazovLy8uL1BhZ2VDb2x1bW5MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vUGFnZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9QYWdlUm91dGVyLmpzIiwid2VicGFjazovLy8uL1BhZ2VSb3dMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiUGFnZUJhciIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2FuQmFjayIsImxvYWRpbmciLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZWFjdCIsImNsYXNzbmFtZSIsInByb3BzIiwic3R5bGUiLCJoZWFkZXJTdHlsZSIsInRpdGxlIiwibGVmdFJlbmRlciIsImNlbnRlclJlbmRlciIsInJpZ2h0UmVuZGVyIiwiZm9jdXNhYmxlIiwicm9sZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJkIiwibG9hZGluZ1RleHQiLCJjaGlsZHJlbiIsImZvb3RlclN0eWxlIiwiZm9vdGVyIiwiX19yZW5kZXJDZW50ZXIiLCJfcmV0dXJuIiwiX19kb0JhY2siLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsIl9fcmVuZGVySWNvbiIsIl9jYW5CYWNrIiwib25DbGljayIsIlBhZ2VDb2x1bW5MYXlvdXQiLCJIZWFkZXIiLCJCb2R5IiwiZ2V0SW5pdGlhbFN0YXRlIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50UHJvcHMiLCJfX2luaXRIYW5kbGVyIiwiX19oYXNoY2hhbmdlIiwic2VuZGVyIiwiZXZlbnQiLCJfX2hhbmRsZXIiLCJkYXRhIiwiX19yZXF1ZXN0IiwicmVxdWVzdCIsInJvdXRlIiwic2V0U3RhdGUiLCJjb21wb25lbnQiLCJ6biIsImV4dGVuZCIsImFwcGxpY2F0aW9uIiwicm91dGVyIiwicHVzaCIsImZvcndhcmQiLCJub3Rmb3VuZCIsImVycm9yIiwiRXJyb3I0MDQiLCJfX25vdGZvdW5kIiwic3RhdGUiLCJQYWdlUm93TGF5b3V0IiwiTGVmdCIsIlJpZ2h0IiwiUGFnZSIsIlBhZ2VOYXZpZ2F0b3IiLCJQYWdlUm91dGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBQzFDLElBQUlDLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQywrQkFBVyxDQUFDO0FBQ2xDRSxNQUFNLENBQUNDLE9BQU8sR0FBR0wsS0FBSyxDQUFDTSxX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TyxDQUFDLDhDQUFvQixDQUFDO0VBQzVDMEUsVUFBVSxFQUFFMUUsbUJBQU8sQ0FBQyx3Q0FBaUI7QUFDekMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ1BELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFBhZ2VCYXIgPSByZXF1aXJlKCcuL1BhZ2VCYXInKTtcclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6J1pSUGFnZScsXHJcblx0Z2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjYW5CYWNrOiB0cnVlLFxyXG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcclxuXHRcdFxyXG5cdH0sXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItcGFnZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSA+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cclxuXHRcdFx0XHRcdDxQYWdlQmFyIFxyXG5cdFx0XHRcdFx0XHRjYW5CYWNrPXt0aGlzLnByb3BzLmNhbkJhY2t9IFxyXG5cdFx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9XHJcblx0XHRcdFx0XHRcdHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBcclxuXHRcdFx0XHRcdFx0bGVmdFJlbmRlcj17dGhpcy5wcm9wcy5sZWZ0UmVuZGVyfVxyXG5cdFx0XHRcdFx0XHRjZW50ZXJSZW5kZXI9e3RoaXMucHJvcHMuY2VudGVyUmVuZGVyfVxyXG5cdFx0XHRcdFx0XHRyaWdodFJlbmRlcj17dGhpcy5wcm9wcy5yaWdodFJlbmRlcn0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYm9keVwiIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cclxuXHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMubG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic3luYy1hbHRcIiBjbGFzc05hbWU9XCJzZWxmLWxvYWRpbmcgc3ZnLWlubGluZS0tZmEgZmEtc3luYy1hbHQgZmEtdy0xNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM3MC43MiAxMzMuMjhDMzM5LjQ1OCAxMDQuMDA4IDI5OC44ODggODcuOTYyIDI1NS44NDggODhjLTc3LjQ1OC4wNjgtMTQ0LjMyOCA1My4xNzgtMTYyLjc5MSAxMjYuODUtMS4zNDQgNS4zNjMtNi4xMjIgOS4xNS0xMS42NTEgOS4xNUgyNC4xMDNjLTcuNDk4IDAtMTMuMTk0LTYuODA3LTExLjgwNy0xNC4xNzZDMzMuOTMzIDk0LjkyNCAxMzQuODEzIDggMjU2IDhjNjYuNDQ4IDAgMTI2Ljc5MSAyNi4xMzYgMTcxLjMxNSA2OC42ODVMNDYzLjAzIDQwLjk3QzQ3OC4xNDkgMjUuODUxIDUwNCAzNi41NTkgNTA0IDU3Ljk0MVYxOTJjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDM0NS45NDFjLTIxLjM4MiAwLTMyLjA5LTI1Ljg1MS0xNi45NzEtNDAuOTcxbDQxLjc1LTQxLjc0OXpNMzIgMjk2aDEzNC4wNTljMjEuMzgyIDAgMzIuMDkgMjUuODUxIDE2Ljk3MSA0MC45NzFsLTQxLjc1IDQxLjc1YzMxLjI2MiAyOS4yNzMgNzEuODM1IDQ1LjMxOSAxMTQuODc2IDQ1LjI4IDc3LjQxOC0uMDcgMTQ0LjMxNS01My4xNDQgMTYyLjc4Ny0xMjYuODQ5IDEuMzQ0LTUuMzYzIDYuMTIyLTkuMTUgMTEuNjUxLTkuMTVoNTcuMzA0YzcuNDk4IDAgMTMuMTk0IDYuODA3IDExLjgwNyAxNC4xNzZDNDc4LjA2NyA0MTcuMDc2IDM3Ny4xODcgNTA0IDI1NiA1MDRjLTY2LjQ0OCAwLTEyNi43OTEtMjYuMTM2LTE3MS4zMTUtNjguNjg1TDQ4Ljk3IDQ3MS4wM0MzMy44NTEgNDg2LjE0OSA4IDQ3NS40NDEgOCA0NTQuMDU5VjMyMGMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjR6XCI+PC9wYXRoPjwvc3ZnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3RoaXMucHJvcHMubG9hZGluZ1RleHQgfHwgJ0xvYWRpbmcnfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+IDogdGhpcy5wcm9wcy5jaGlsZHJlbiBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyXCIgc3R5bGU9e3RoaXMucHJvcHMuZm9vdGVyU3R5bGV9PlxyXG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuZm9vdGVyfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRkaXNwbGF5TmFtZTonWlJQYWdlQmFyJyxcclxuXHRnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNhbkJhY2s6IHRydWUsXHJcblx0XHRcdGxvYWRpbmc6IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHRfX3JlbmRlckNlbnRlcjogZnVuY3Rpb24gKCl7XHJcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMuY2VudGVyUmVuZGVyICYmIHRoaXMucHJvcHMuY2VudGVyUmVuZGVyKHRoaXMpO1xyXG5cdFx0aWYoX3JldHVybikge1xyXG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiYXItY2VudGVyXCI+XHJcblx0XHRcdFx0eyB0aGlzLnByb3BzLnJpZ2h0UmVuZGVyICYmIHRoaXMucHJvcHMucmlnaHRSZW5kZXIodGhpcykgfVxyXG5cdFx0XHQ8L2Rpdj47XHJcblx0XHR9XHJcblx0fSxcclxuXHRfX2RvQmFjazogZnVuY3Rpb24gKCl7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcblx0fSxcclxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5sb2FkaW5nKSB7XHJcblx0XHRcdHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJjaXJjbGUtbm90Y2hcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBzZWxmLWxvYWRpbmcgZmEtY2lyY2xlLW5vdGNoIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yODggMzkuMDU2djE2LjY1OWMwIDEwLjgwNCA3LjI4MSAyMC4xNTkgMTcuNjg2IDIzLjA2NkMzODMuMjA0IDEwMC40MzQgNDQwIDE3MS41MTggNDQwIDI1NmMwIDEwMS42ODktODIuMjk1IDE4NC0xODQgMTg0LTEwMS42ODkgMC0xODQtODIuMjk1LTE4NC0xODQgMC04NC40NyA1Ni43ODYtMTU1LjU2NCAxMzQuMzEyLTE3Ny4yMTlDMjE2LjcxOSA3NS44NzQgMjI0IDY2LjUxNyAyMjQgNTUuNzEyVjM5LjA2NGMwLTE1LjcwOS0xNC44MzQtMjcuMTUzLTMwLjA0Ni0yMy4yMzRDODYuNjAzIDQzLjQ4MiA3LjM5NCAxNDEuMjA2IDguMDAzIDI1Ny4zMzJjLjcyIDEzNy4wNTIgMTExLjQ3NyAyNDYuOTU2IDI0OC41MzEgMjQ2LjY2N0MzOTMuMjU1IDUwMy43MTEgNTA0IDM5Mi43ODggNTA0IDI1NmMwLTExNS42MzMtNzkuMTQtMjEyLjc3OS0xODYuMjExLTI0MC4yMzZDMzAyLjY3OCAxMS44ODkgMjg4IDIzLjQ1NiAyODggMzkuMDU2elwiPjwvcGF0aD48L3N2Zz47XHJcblx0XHR9XHJcblx0XHR2YXIgX2NhbkJhY2sgPSB0aGlzLnByb3BzLmNhbkJhY2s7XHJcblx0XHRpZihfY2FuQmFjaykge1xyXG5cdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9fZG9CYWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiYXJyb3ctbGVmdFwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LWxlZnQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxyXG5cdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1Ny41IDQ0NS4xbC0yMi4yIDIyLjJjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDEuNCA0NC43YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjIgMjIuMmM5LjUgOS41IDkuMyAyNS0uNCAzNC4zTDEzNi42IDIxNkg0MjRjMTMuMyAwIDI0IDEwLjcgMjQgMjR2MzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMTM2LjZsMTIwLjUgMTE0LjhjOS44IDkuMyAxMCAyNC44LjQgMzQuM3pcIj48L3BhdGg+XHJcblx0XHRcdDwvc3ZnPjtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBhZ2UtYmFyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAodGhpcy5wcm9wcy5sb2FkaW5nPydsb2FkaW5nJzonJykpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFyLWxlZnRcIj5cclxuXHRcdFx0XHRcdHt0aGlzLl9fcmVuZGVySWNvbigpfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxyXG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLmxlZnRSZW5kZXIgJiYgdGhpcy5wcm9wcy5sZWZ0UmVuZGVyKHRoaXMpIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLl9fcmVuZGVyQ2VudGVyKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYXItcmlnaHRcIj5cclxuXHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5yaWdodFJlbmRlciAmJiB0aGlzLnByb3BzLnJpZ2h0UmVuZGVyKHRoaXMpIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG5cclxudmFyIFBhZ2VDb2x1bW5MYXlvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6ICdQYWdlQ29sdW1uTGF5b3V0JyxcclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlLWNvbHVtbi1sYXlvdXRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuUGFnZUNvbHVtbkxheW91dC5IZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6ICdQYWdlQ29sdW1uTGF5b3V0LkhlYWRlcicsXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwid2FycC1oZWFkZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuUGFnZUNvbHVtbkxheW91dC5Cb2R5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdGRpc3BsYXlOYW1lOiAnUGFnZUNvbHVtbkxheW91dC5Cb2R5JyxcclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ3YXJwLWJvZHlcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQYWdlQ29sdW1uTGF5b3V0OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6J1pSUm91dGVQYWdlJyxcclxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdENvbXBvbmVudDogbnVsbCxcclxuXHRcdFx0Q29tcG9uZW50UHJvcHM6IG51bGxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLl9faW5pdEhhbmRsZXIoKTtcclxuXHR9LFxyXG5cdF9faW5pdEhhbmRsZXI6IGZ1bmN0aW9uICgpe1xyXG5cdFx0XHJcblx0fSxcclxuXHRfX2hhc2hjaGFuZ2U6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50KXtcclxuXHRcdFxyXG5cdH0sXHJcblx0X19oYW5kbGVyOiBmdW5jdGlvbiAoc2VuZGVyLCBldmVudCwgZGF0YSl7XHJcblx0XHRcclxuXHR9LFxyXG5cdF9fcmVxdWVzdDogZnVuY3Rpb24gKHNlbmRlciwgcmVxdWVzdCwgcm91dGUpe1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdENvbXBvbmVudDogcm91dGUuY29tcG9uZW50LFxyXG5cdFx0XHRDb21wb25lbnRQcm9wczogem4uZXh0ZW5kKHt9LCByb3V0ZS5wcm9wcywge1xyXG5cdFx0XHRcdGFwcGxpY2F0aW9uOiB0aGlzLnByb3BzLmFwcGxpY2F0aW9uLFxyXG5cdFx0XHRcdHJlcXVlc3Q6IHJlcXVlc3QsXHJcblx0XHRcdFx0cm91dGVyOiB0aGlzLFxyXG5cdFx0XHRcdHJvdXRlOiByb3V0ZVxyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRwdXNoOiBmdW5jdGlvbiAoKXtcclxuXHJcblx0fSxcclxuXHRmb3J3YXJkOiBmdW5jdGlvbiAoKXtcclxuXHJcblx0fSxcclxuXHRub3Rmb3VuZDogZnVuY3Rpb24gKHJlcXVlc3Qpe1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdENvbXBvbmVudDogZXJyb3IuRXJyb3I0MDQsXHJcblx0XHRcdENvbXBvbmVudFByb3BzOiB7XHJcblx0XHRcdFx0cmVxdWVzdDogcmVxdWVzdFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdF9fbm90Zm91bmQ6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3Qpe1xyXG5cdFx0dGhpcy5ub3Rmb3VuZChyZXF1ZXN0KTtcclxuXHR9LFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBhZ2UtbmF2aWdhdG9yXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cclxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRkaXNwbGF5TmFtZTonWlJSb3V0ZVBhZ2UnLFxyXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Q29tcG9uZW50OiBudWxsLFxyXG5cdFx0XHRDb21wb25lbnRQcm9wczogbnVsbFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuX19pbml0SGFuZGxlcigpO1xyXG5cdH0sXHJcblx0X19pbml0SGFuZGxlcjogZnVuY3Rpb24gKCl7XHJcblx0XHRcclxuXHR9LFxyXG5cdF9faGFzaGNoYW5nZTogZnVuY3Rpb24gKHNlbmRlciwgZXZlbnQpe1xyXG5cdFx0XHJcblx0fSxcclxuXHRfX2hhbmRsZXI6IGZ1bmN0aW9uIChzZW5kZXIsIGV2ZW50LCBkYXRhKXtcclxuXHRcdFxyXG5cdH0sXHJcblx0X19yZXF1ZXN0OiBmdW5jdGlvbiAoc2VuZGVyLCByZXF1ZXN0LCByb3V0ZSl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0Q29tcG9uZW50OiByb3V0ZS5jb21wb25lbnQsXHJcblx0XHRcdENvbXBvbmVudFByb3BzOiB6bi5leHRlbmQoe30sIHJvdXRlLnByb3BzLCB7XHJcblx0XHRcdFx0YXBwbGljYXRpb246IHRoaXMucHJvcHMuYXBwbGljYXRpb24sXHJcblx0XHRcdFx0cmVxdWVzdDogcmVxdWVzdCxcclxuXHRcdFx0XHRyb3V0ZXI6IHRoaXMsXHJcblx0XHRcdFx0cm91dGU6IHJvdXRlXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHB1c2g6IGZ1bmN0aW9uICgpe1xyXG5cclxuXHR9LFxyXG5cdGZvcndhcmQ6IGZ1bmN0aW9uICgpe1xyXG5cclxuXHR9LFxyXG5cdG5vdGZvdW5kOiBmdW5jdGlvbiAocmVxdWVzdCl7XHJcblx0XHRcclxuXHR9LFxyXG5cdF9fbm90Zm91bmQ6IGZ1bmN0aW9uIChzZW5kZXIsIHJlcXVlc3Qpe1xyXG5cdFx0dGhpcy5ub3Rmb3VuZChyZXF1ZXN0KTtcclxuXHR9LFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBhZ2Utcm91dGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9ID5cclxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5Db21wb25lbnQgJiYgPHRoaXMuc3RhdGUuQ29tcG9uZW50IHsuLi50aGlzLnN0YXRlLkNvbXBvbmVudFByb3BzfSAvPn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG5cclxudmFyIFBhZ2VSb3dMYXlvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6ICdQYWdlUm93TGF5b3V0JyxcclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wYWdlLXJvdy1sYXlvdXRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuUGFnZVJvd0xheW91dC5MZWZ0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdGRpc3BsYXlOYW1lOiAnUGFnZVJvd0xheW91dC5MZWZ0JyxcclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ3YXJwLWxlZnRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuUGFnZVJvd0xheW91dC5SaWdodCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRkaXNwbGF5TmFtZTogJ1BhZ2VSb3dMYXlvdXQuUmlnaHQnLFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcIndhcnAtcmlnaHRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQYWdlUm93TGF5b3V0OyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgUGFnZTogcmVxdWlyZSgnLi9QYWdlJyksXHJcbiAgICBQYWdlQmFyOiByZXF1aXJlKCcuL1BhZ2VCYXIuanMnKSxcclxuICAgIFBhZ2VDb2x1bW5MYXlvdXQ6IHJlcXVpcmUoJy4vUGFnZUNvbHVtbkxheW91dCcpLFxyXG4gICAgUGFnZVJvd0xheW91dDogcmVxdWlyZSgnLi9QYWdlUm93TGF5b3V0JyksXHJcbiAgICBQYWdlTmF2aWdhdG9yOiByZXF1aXJlKCcuL1BhZ2VOYXZpZ2F0b3IuanMnKSxcclxuICAgIFBhZ2VSb3V0ZXI6IHJlcXVpcmUoJy4vUGFnZVJvdXRlci5qcycpXHJcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9