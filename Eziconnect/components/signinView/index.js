'use strict';

app.signinView = kendo.observable({
    onShow: function () { },
    afterShow: function () { }
});
app.localization.registerView('signinView');

// START_CUSTOM_CODE_settingsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.signinView.set('title', 'Sign In');
})();

// END_CUSTOM_CODE_settingsView