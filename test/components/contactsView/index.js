'use strict';

app.contactsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('contactsView');

// START_CUSTOM_CODE_contactsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.contactsView.set('title', 'Services');
    
    var dataSource = new kendo.data.DataSource({
        data: [{ id: 1, href: 'components/login.html', name: 'EziMaps' }, { id: 2, href: 222, name: 'EziPay' }, { id: 3, href: 333, name: 'EziJobs' }, { id: 4, href: 444, name: 'EziScan' }]
    });
    app.contactsView.set('dataSource', dataSource);
    
    app.contactsView.set('alert', function (e) { alert(e.data.name + ' ID ' + e.data.href ); });
    app.contactsView.set('link', function (e) { window.location.href = e.data.href; });
})();
// END_CUSTOM_CODE_contactsView