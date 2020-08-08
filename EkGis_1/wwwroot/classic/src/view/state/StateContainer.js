Ext.define('MRequest.view.state.stateContainer',{
    extend:'Ext.tab.Panel',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    xtype:'statec',
    width:1100,
    cls:'state-container',
    items: [
        {
            xtype: 'mainlist',
            // cls: 'user-grid',
            // routeId: 'user',
            // bind: '{usersResults}',
            // scrollable: false,
            columns:[{
                xtype: 'gridcolumn',
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