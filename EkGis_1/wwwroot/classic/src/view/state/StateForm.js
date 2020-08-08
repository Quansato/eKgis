Ext.define('MRequest.view.state.StateForm',{
    extend:'Ext.form.Panel',
    // controller:'type',
    xtype:'state',
    cls:'type-wrap',
    title:{
        iconCls:'x-fa fa-thumbs-up',
        pressed: true,
        text:'Danh sách trạng thái',
        cls:'title-state'
    },
    items:[{
        xtype:'sbar'
    },{
        xtype:'statec'
    },{
        dockedItems:[{
            
        },
        {
            buttons:[
                {
                    cls:'btn',
                    iconCls:'fas fa-plus',
                    text:'Thêm ',
                    listeners:{
                        click:function(){
                            win = new Ext.Window ({
                                cls:'form-state',
                                scrollable: true,
                                title:{
                                    iconCls:'fas fa-briefcase',
                                    text:'Thêm mới trạng thái',
                                    cls : 'header-title-cls',
                                },
                                layout:'form',
                                width:700,
                                height:300,
                                // height:'auto',
                                closeAction:'close',
                                // target : document.getElementById('buttonId'),
                                plain: true,
                                items:[
                                    {
                                        // xtype: 'fieldset',
                                        // title:'Thông tin người yêu cầu',
                                        // cls: 'infor',
                                        // height: 'auto',
                                        // width:850,
                                        items:[
                                            {
                                                xtype: 'textfield',
                                                // cls:'custom-input',
                                                fieldLabel: 'Mã (*)'
                                            },
                                            {
                                                xtype: 'textarea',
                                                // cls:'custom-input',
                                                fieldLabel: 'Tên (*)'
                                            }
                                            
                                            
                                        ]
                                    }

                                ],///items
                                buttons: [   {
                                    text: 'Lưu và thêm mới',
                                    iconCls:'fas fa-save',
                                    cls:'btn-save-add',
                                    handler: function(){Ext.Msg.alert('Lưu', 'Lưu thành công');}
                                 },
                                 {
                                    text: 'Lưu thông tin',
                                    cls:'btn-save',
                                    iconCls:'fas fa-save',
                                    handler: function(){Ext.Msg.alert('Lưu', 'Thành công');}
                                 },
                                 {
                                    text: 'Hủy bỏ',
                                    iconCls:'fas fa-times',
                                    cls:'btn-cancel',
                                    handler: function(){
                                        Ext.Msg.alert('Đóng', 'Đã đóng');
                                    }
                                 }],
                                 buttonAlign: 'end',
                              });
                             win.show();
                        }
                    }
                },
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
                
            ],
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            // itemId: 'userPaginationToolbar',
            displayInfo: true,
            // bind: '{usersResults}'
        }
        ]
    }
]


})