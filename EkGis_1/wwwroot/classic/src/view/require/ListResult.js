Ext.define('MRequest.view.require.ListResult',{
    extend:'Ext.grid.Panel',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date',
        'MRequest.store.ListDetail'
    ],
    title:'Thông tin',
    store: {
        type: 'listdetail'
    },
    xtype:'listresult',
    width:1100,

            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 40,  
                    dataIndex: 'identifier',    
                    text: '#',
                    flex: 0.5
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value) {
                        return "<i class='fas fa-calendar-alt'></i>";
                    },
                    width: 75,
                    // dataIndex: 'profile_pic',
                    text: '',
                    flex:0.5
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    renderer: function(value) {
                        return "<i class='fas fa-wrench'></i>";
                    },
                    text: '',
                    flex: 0.5
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'day',
                    text: 'Ngày yêu cầu',
                    
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'content',
                    text: 'Nội dung',
                    flex:2
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'name',
                    text: 'Người Yêu cầu',
                    flex:2
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'type',
                    text: 'Loại yêu cầu',
                    flex:2
                },
                {
                    xtype: 'gridcolumn',
                    cls: 'content-column',
                    dataIndex: 'state',
                    text: 'Trạng thái',
                    flex:1
                },
                
            ],


            dockedItems: [
                

                {
                    buttons:[
                        {
                            cls:'btn',
                            iconCls:'fas fa-pencil-alt',
                            text:'Sửa'
                        },
                        {
                            cls:'btn-del',
                            iconCls:'fas fa-trash-alt',
                            text:'Xóa',
                            listeners:{
                                click: function(){
                                    Ext.Msg.alert('Xóa?','Bạn có muốn xóa?')
                                }
                            }
                        },
                        {
                            cls:'btn',
                            iconCls:'far fa-calendar-plus',
                            text:'Thêm công việc'
                        },
                        {
                            cls:'btn',
                            iconCls:'fas fa-sync-alt',
                            text:'Chuyển trạng thái',
                            listeners:{
                                click: function(){
                                    win2 = new Ext.Window ({
                                        cls:'add-form',
                                        scrollable: true,
                                        title:{
                                            iconCls:'fas fa-briefcase',
                                            ui: 'soft-green',
                                            text:'Chuyển trạng thái',
                                            cls : 'header-title-cls',
                                        },
                                        layout:'form',
                                        width:900,
                                        height:450,
                                        // height:'auto',
                                        closeAction:'close',
                                        // target : document.getElementById('buttonId'),
                                        plain: true,
                                        items:[
                                            {
                                                xtype: 'fieldset',
                                                title:'Thông tin người yêu cầu',
                                                cls: 'infor',
                                                height: 'auto',
                                                width:850,
                                                items:[
                                                    {
                                                        xtype: 'textfield',
                                                        cls:'custom-input',
                                                        fieldLabel: 'Mã yêu cầu'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        cls:'custom-input',
                                                        fieldLabel: 'Nội dung'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        cls:'custom-input',
                                                        fieldLabel: 'Trạng thái'
                                                    }
                                                    
                                                    
                                                ]
                                            },{
                                                items:[
                                            {
                                                width:850,
                                                xtype:'combobox',
                                                fieldLabel:'Trạng thái mới :'
                                            },
                                            {
                                                width:850,
                                                xtype:'textarea',
                                                fieldLabel:'Mô tả :'
                                            }
                                        ]
                                        }
    
                                        ],///items
                                        buttons: [   {
                                            text: 'Lưu thông tin',
                                            iconCls:'fas fa-save',
                                            handler: function(){Ext.Msg.alert('Lưu', 'Thành công');}
                                         },{
                                            text: 'Đóng',
                                            iconCls:'fas fa-times',
                                            cls:'btn-danger',
                                            handler: function(){Ext.Msg.alert('Đóng', 'Đã đóng');}
                                         }],
                                         buttonAlign: 'end',
                                      });
                                     win2.show();
                                }
                            }
    
                        },
                       
                    ],
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    itemId: 'userPaginationToolbar',
                    displayInfo: true,
                    bind: '{usersResults}'
                }
            ]



})




