"use strict";

var React = znui.React || require('react');

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