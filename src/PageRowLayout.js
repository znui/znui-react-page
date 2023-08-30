require('./PageRowLayout.less');
var React = znui.React || require('react');

var PageRowLayout = React.createClass({
	displayName: 'PageRowLayout',
	render: function(){
		return (
			<div className="zr-page-row-layout">
				{this.props.children}
			</div>
		);
	}
});

PageRowLayout.Left = React.createClass({
	displayName: 'PageRowLayout.Left',
	render: function(){
		return (
			<div className="warp-left">
				{this.props.children}
			</div>
		);
	}
});

PageRowLayout.Right = React.createClass({
	displayName: 'PageRowLayout.Right',
	render: function(){
		return (
			<div className="warp-right">
				{this.props.children}
			</div>
		);
	}
});

module.exports = PageRowLayout;