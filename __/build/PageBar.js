"use strict";

var React = znui.React || require('react');

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