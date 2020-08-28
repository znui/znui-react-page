var React = znui.React || require('react');
var PageBar = require('./PageBar');
module.exports = React.createClass({
	displayName:'ZRPage',
	getDefaultProps:function(){
		return {
			canBack: true
		}
	},
	componentDidMount:function(){
		
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-page", this.props.className)} style={this.props.style} >
				<div className="page-header" style={this.props.headerStyle}>
					<PageBar 
						canBack={this.props.canBack} 
						title={this.props.title} 
						leftRender={this.props.leftRender}
						centerRender={this.props.centerRender}
						rightRender={this.props.rightRender} />
				</div>
				<div className="page-body" style={this.props.headerStyle}>
					{this.props.children}
				</div>
				<div className="page-footer" style={this.props.footerStyle}>
					{this.props.footer}
				</div>
			</div>
		);
	}
});