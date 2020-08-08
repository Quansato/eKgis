Ext.define('MRequest.view.require.RequireForm',{
    // extend: 'Ext.grid.Panel',
    extend:'Ext.form.Panel',
    controller:'require',
    xtype: 'require',
    scrollable:true,
    cls: 'wrap',
    title:{
        iconCls:'x-fa fa-bars',
        pressed: true,
        enableToggle: true,
        handler: 'onToggleNavigationSize',
        id: 'main-navigation-btn',
        text:'Yêu cầu',
        cls:'gridTitle'
    }, 
    items:[{
        xtype: 'wform',
    },
    {
        xtype:'listresult',
    },
 
    
    ],
});