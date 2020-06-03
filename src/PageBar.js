var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRPageBar',
	getInitialState:function(){
		return {
			
		}
	},
	componentDidMount:function(){
		
	},
	render: function(){
		var _canBack = true;
		return (
			<div className={znui.react.classname("zr-page-bar", this.props.className)} style={this.props.style} >
				<div className="bar-left">
					{
						_canBack && <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
						</svg>
					}
					<span className="title">{this.props.title}</span>
				</div>
				<div className="bar-right">
					{ this.props.rightRender && this.props.rightRender() }
				</div>
			</div>
		);
	}
});