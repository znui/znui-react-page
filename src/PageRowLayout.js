var React = znui.React || require('react');

var PageRowLayout = React.createClass({
	displayName: 'PageRowLayout',
	render: function(){
		return (
			<div className={znui.react.classname("zr-page-row-layout", this.props.className)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
});

PageRowLayout.Left = React.createClass({
	displayName: 'PageRowLayout.Left',
	render: function(){
		return (
			<div className={znui.react.classname("warp-left", this.props.className)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
});

PageRowLayout.Right = React.createClass({
	displayName: 'PageRowLayout.Right',
	render: function(){
		return (
			<div className={znui.react.classname("warp-right", this.props.className)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
});

module.exports = PageRowLayout;