require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var page = require('../../src/index');

znui.react.createApplication({
    render: <div className="form-container">
        <page.PageBar title="Page Title" />
        <page.PageNavigator />
        <page.PageRouter />
    </div>
});