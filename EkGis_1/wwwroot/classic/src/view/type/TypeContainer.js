Ext.define('MRequest.view.type.TypeContainer',{
    extend:'Ext.tab.Panel',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    xtype:'typec',
    width:1100,
    cls:'xcontainer',
    items: [
        {
            xtype: 'mainlist',
            // cls: 'user-grid',
            // routeId: 'user',
            // bind: '{usersResults}',
            // scrollable: false,
            columns:[{
                xtype: 'gridcolumn',
                width: 40,  
                dataIndex: 'identifier',
                text: '#',
                flex: 0.5
            },{
                xtype: 'gridcolumn',
                cls: 'content-column',
                // dataIndex: 'email',
                text: 'Mã',
                flex: 1
            },{
                xtype: 'gridcolumn',
                cls: 'content-column',
                // dataIndex: 'email',
                text: 'Tên',
                flex: 2
            },
            {
                xtype: 'gridcolumn',
                cls: 'content-column',
                // dataIndex: 'email',
                text: 'Ngày tạo',
                flex: 1
            }
                ]
        }
        ]

})