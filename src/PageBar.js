var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRPageBar',
	getDefaultProps:function(){
		return {
			canBack: true,
			loading: false
		}
	},
	__renderCenter: function (){
		var _return = this.props.centerRender && this.props.centerRender(this);
		if(_return) {
			return <div className="bar-center">
				{ this.props.rightRender && this.props.rightRender(this) }
			</div>;
		}
	},
	__doBack: function (){
		window.history.back();
	},
	__renderIcon: function (){
		if(this.props.loading) {
			return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-notch" className="svg-inline--fa self-loading fa-circle-notch fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path></svg>;
		}
		var _canBack = this.props.canBack;
		if(_canBack) {
			return <svg onClick={this.__doBack} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
			</svg>;
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-page-bar", this.props.className, (this.props.loading?'loading':''))} style={this.props.style} >
				<div className="bar-left">
					{this.__renderIcon()}
					<div className="title">{this.props.title}</div>
					{ this.props.leftRender && this.props.leftRender(this) }
				</div>
				{
					this.__renderCenter()
				}
				<div className="bar-right">
					{ this.props.rightRender && this.props.rightRender(this) }
				</div>
			</div>
		);
	}
});