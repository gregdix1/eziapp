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
        data: [{ id: 1, lnk: 'components/maps/index.html', name: 'EziMaps' }, { id: 2, lnk: 'components/settingsView/view.html', name: 'EziPay' }, { id: 3, lnk: 333, name: 'EziJobs' }, { id: 4, lnk: 444, name: 'EziScan' }]
    });
    app.contactsView.set('dataSource', dataSource);
    
    app.contactsView.set('alert', function (e) { alert(e.data.name + ' ID ' + e.data.href ); });
    app.contactsView.set('link', function (e) { window.location.href = e.data.lnk; });
})();
// END_CUSTOM_CODE_contactsView