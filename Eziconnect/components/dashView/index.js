'use strict';

app.dashView = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('dashView');

// START_CUSTOM_CODE_settingsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
   // app.dashView.set('title', 'Dashboard');
})();
// END_CUSTOM_CODE_settingsView