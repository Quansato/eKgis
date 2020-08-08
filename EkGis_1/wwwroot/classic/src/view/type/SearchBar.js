Ext.define('MRequest.view.type.SearchBar', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.plugin.Viewport',
    ],
    xtype: 'sbar',
    cls:'search-bar',
    height: 'auto',
    anchor:'100%',
    width:900,

    items:[
        {
            xtype:'textfield',
            emptyText:'Tìm kiếm .....',
            fieldLabel:'Tìm ',
            cls:'input-search'
        },
        {
            xtype:'button',
            text:'Tìm',
            iconCls:'fas fa-search',
            cls:'btn-type-search'
        }
    ]
})
