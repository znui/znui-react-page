"use strict";

var React = znui.React || require('react');
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