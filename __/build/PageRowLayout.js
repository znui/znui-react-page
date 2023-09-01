"use strict";

var React = znui.React || require('react');
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