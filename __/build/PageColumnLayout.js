"use strict";

require('./PageColumnLayout.less');
var React = znui.React || require('react');
var PageColumnLayout = React.createClass({
  displayName: 'PageColumnLayout',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-page-column-layout"
    }, this.props.children);
  }
});
PageColumnLayout.Header = React.createClass({
  displayName: 'PageColumnLayout.Header',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "warp-header"
    }, this.props.children);
  }
});
PageColumnLayout.Body = React.createClass({
  displayName: 'PageColumnLayout.Body',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "warp-body"
    }, this.props.children);
  }
});
module.exports = PageColumnLayout;