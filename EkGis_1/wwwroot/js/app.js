/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MRequest.Application',

    name: 'MRequest',

    requires: [
        // This will automatically load all classes in the MRequest namespace
        // so that application classes do not need to require each other.
        'MRequest.*'
    ],

    // The name of the initial view to create.
    mainView: 'MRequest.view.main.Main'
});
