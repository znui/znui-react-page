require('./PageColumnLayout.less');
var React = znui.React || require('react');

var PageColumnLayout = React.createClass({
	displayName: 'PageColumnLayout',
	render: function(){
		return (
			<div className="zr-page-column-layout">
				{this.props.children}
			</div>
		);
	}
});

PageColumnLayout.Header = React.createClass({
	displayName: 'PageColumnLayout.Header',
	render: function(){
		return (
			<div className="warp-header">
				{this.props.children}
			</div>
		);
	}
});

PageColumnLayout.Body = React.createClass({
	displayName: 'PageColumnLayout.Body',
	render: function(){
		return (
			<div className="warp-body">
				{this.props.children}
			</div>
		);
	}
});

module.exports = PageColumnLayout;