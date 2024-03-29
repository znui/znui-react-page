"use strict";

var React = znui.React || require('react');
var PageBar = require('./PageBar');
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