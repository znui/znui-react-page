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
        <page.Page title="xxxx" >
            <div>xxx</div>
        </page.Page>
        <page.PageColumnLayout>
            <page.PageColumnLayout.Header>
                header
            </page.PageColumnLayout.Header>
            <page.PageColumnLayout.Header>
                body
            </page.PageColumnLayout.Header>
        </page.PageColumnLayout>

        <page.PageRowLayout>
            <page.PageRowLayout.Left>
                left
            </page.PageRowLayout.Left>
            <page.PageRowLayout.Right>
                right
            </page.PageRowLayout.Right>
        </page.PageRowLayout>
    </div>
});