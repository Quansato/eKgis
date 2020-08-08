Ext.define('MRequest.view.type.TypeForm',{
    extend:'Ext.form.Panel',
    // controller:'type',
    xtype:'type',
    cls:'type-wrap',
    title:{
        iconCls:'x-fa fa-thumbs-up',
        pressed: true,
        text:'Danh sách loại yêu cầu',
        cls:'title-type'
    },
    items:[{
        xtype:'sbar'
    },{
        xtype:'typec'
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
                                cls:'form-type',
                                scrollable: true,
                                title:{
                                    iconCls:'fas fa-briefcase',
                                    text:'Thêm mới loại yêu cầu',
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
                                    cls:'btn-save-add',
                                    iconCls:'fas fa-save',
                                    handler: function(){Ext.Msg.alert('Save Draft', 'Your msg is saved');}
                                 },
                                 {
                                    text: 'Lưu thông tin',
                                    cls:'btn-save',
                                    iconCls:'fas fa-save',
                                    handler: function(){Ext.Msg.alert('Save Draft', 'Your msg is saved');}
                                 },
                                 {
                                    text: 'Hủy bỏ',
                                    cls:'btn-cancel',
                                    iconCls:'fas fa-times',
                                    handler: function(){Ext.Msg.alert('Message Sent', 'Your msg is sent');}
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