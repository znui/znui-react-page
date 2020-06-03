var React = znui.React || require('react');
module.exports = React.createClass({
	displayName:'ZRRoutePage',
	getInitialState:function(){
		return {
			Component: null,
			ComponentProps: null
		}
	},
	componentDidMount:function(){
		this.__initHandler();
	},
	__initHandler: function (){
		
	},
	__hashchange: function (sender, event){
		
	},
	__handler: function (sender, event, data){
		
	},
	__request: function (sender, request, route){
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
	push: function (){

	},
	forward: function (){

	},
	notfound: function (request){
		
	},
	__notfound: function (sender, request){
		this.notfound(request);
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-page-router", this.props.className)} style={this.props.style} >
				{this.state.Component && <this.state.Component {...this.state.ComponentProps} />}
			</div>
		);
	}
});