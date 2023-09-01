var React = znui.React || require('react');

var PageColumnLayout = React.createClass({
	displayName: 'PageColumnLayout',
	render: function(){
		return (
			<div className={znui.react.classname("zr-page-column-layout", this.props.className)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
});

PageColumnLayout.Header = React.createClass({
	displayName: 'PageColumnLayout.Header',
	render: function(){
		return (
			<div className={znui.react.classname("warp-header", this.props.className)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
});

PageColumnLayout.Body = React.createClass({
	displayName: 'PageColumnLayout.Body',
	render: function(){
		return (
			<div className={znui.react.classname("warp-body", this.props.className)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
});

module.exports = PageColumnLayout;