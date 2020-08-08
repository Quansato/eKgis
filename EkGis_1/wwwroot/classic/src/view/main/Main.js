/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MRequest.view.main.Main', {
    extend: 'Ext.tab.Panel',
    // extend: 'Ext.data.TreeStore',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.data.TreeStore',

        'MRequest.view.main.MainController',
        'MRequest.view.main.MainModel',
        'MRequest.view.main.List',
        'MRequest.view.type.TypeForm',
        'MRequest.view.state.StateForm',
        'MRequest.view.require.RequireForm',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    scollable:true,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'MRequire'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 80
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            // xtype: 'mainlist'
            html:'Index'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Yêu cầu',
        iconCls: 'fa-flag',
        items: [{
            xtype: 'require'
        }]
    },{
        title:'Loại yêu cầu',
        iconCls:'fa-thumbs-up',
        items:[{
            xtype:'type',
        }]

    },{
        title:'Trạng thái',
        iconCls:'fa-question',
        items:[{
            xtype:'state',
        }]

    },{
        title:'Components',
        iconCls:'fa-book',
        expanded: false,
        selectable: false,
        children: [
            {
                text: 'Grid',
                iconCls: 'x-fa fa-file',
                viewType: 'pageblank',
                leaf: true
            },

            {
                text: 'Form',
                iconCls: 'x-fa fa-exclamation-triangle',
                viewType: 'page404',
                leaf: true
            },
            {
                text: 'Message Box',
                iconCls: 'x-fa fa-times-circle',
                viewType: 'page500',
                leaf: true
            },
            {
                text: 'Window',
                iconCls: 'x-fa fa-lock',
                viewType: 'lockscreen',
                leaf: true
            },
        ]
    }


]
});
