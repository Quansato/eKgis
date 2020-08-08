/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Ek.Application',

    name: 'Ek',

    requires: [
        // This will automatically load all classes in the Ek namespace
        // so that application classes do not need to require each other.
        'Ek.*'
    ],

    // The name of the initial view to create.
    mainView: 'Ek.view.main.Main'
});
