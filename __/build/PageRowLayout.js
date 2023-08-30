"use strict";

require('./PageRowLayout.less');
var React = znui.React || require('react');
var PageRowLayout = React.createClass({
  displayName: 'PageRowLayout',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-page-row-layout"
    }, this.props.children);
  }
});
PageRowLayout.Left = React.createClass({
  displayName: 'PageRowLayout.Left',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "warp-left"
    }, this.props.children);
  }
});
PageRowLayout.Right = React.createClass({
  displayName: 'PageRowLayout.Right',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "warp-right"
    }, this.props.children);
  }
});
module.exports = PageRowLayout;