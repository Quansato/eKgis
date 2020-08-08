Ext.define('MRequest.view.require.SearchForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.plugin.Viewport',
    ],
    xtype: 'wform',
    cls:'container-form',
    height: 'auto',
    anchor:'100%',

    width:900,
    // layout: 'card',
    items: [       
        {
            xtype:'button',
            text:'Thêm mới',
            width:100,
            height:100,
            cls:'btn-add',
            listeners: {
                click: function() {
                //    Ext.MessageBox.alert('Alert box', 'Button is clicked');	
                win = new Ext.Window ({
                    cls:'add-form',
                    scrollable: true,
                    title:{
                        iconCls:'fas fa-briefcase',
                        text:'Thêm mới yêu cầu',
                        cls : 'header-title-cls',
                    },
                    layout:'form',
                    width:900,
                    height:650,
                    closeAction:'close',
                    // target : document.getElementById('buttonId'),
                    plain: true,
                    
                    items: [{
                        xtype: 'fieldset',
                        title:'Thông tin người yêu cầu',
                        cls: 'infor',
                        height: 'auto',
                        width:850,
                        items:[
                            {
                                xtype: 'textfield',
                                emptyText: 'admin',
                                fieldLabel: 'Người yêu cầu',
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Nhập số điện thoại',
                                fieldLabel: 'Số điện thoại',
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel:'Email'
                            }
                            
                            
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title:'Thông tin yêu cầu',
                        cls: 'infor',
                        height: 'auto',
                        width:850,
                        items:[
                            {
                                xtype: 'textfield',
                                emptyText: 'Loại yêu cầu',
                                fieldLabel: 'Loại yêu cầu',
                            },
                            {
                                xtype: 'datefield',
                                fieldLabel: 'Ngày tiếp nhận'
                            }
                            ,
                            {
                                xtype:'textfield',
                                fieldLabel:'Mức độ'
                            },
                            {
                                xtype : 'textarea',
                                fieldLabel: 'Nội dung yêu cầu (*)'
                             },
                            {
                                xtype: 'textfield',
                                emptyText: 'Nhập địa điểm',
                                fieldLabel: 'Địa điểm'
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Chọn người xử lý',
                                fieldLabel: 'Người xử lý',
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Trạng thái',
                            }
                        
                ]
            }
                ],///items
                    
                    buttons: [   {
                       text: 'Lưu',
                       iconCls:'fas fa-save',
                       handler: function(){Ext.Msg.alert('Save Draft', 'Your msg is saved');}
                    },{
                       text: 'Đóng',
                       iconCls:'fas fa-times',
                       cls:'btn-danger',
                       handler: function(){Ext.Msg.alert('Message Sent', 'Your msg is sent');}
                    }],
                    buttonAlign: 'end',
                 });
                win.show();
                }
             }

        },
        {
            xtype: 'fieldset',
            title:'Tìm kiêm yêu cầu',
            cls: 'f-set',
            height: 'auto',
            width:900,
            items:[
                
                {
                    xtype: 'datefield',
                    fieldLabel: 'Ngày'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Loại yêu cầu',
                    value:'Tất cả'
                },
                {
                    xtype: 'textfield',
                    emptyText: 'Người yêu cầu',
                    fieldLabel: 'Người yêu cầu'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Trạng thái',
                    value:'Tất cả'
                },
                {
                    xtype: 'textfield',
                    emptyText: 'Nhập từ khóa tìm kiếm',
                    fieldLabel: 'Từ khóa',
                    width:320,
                    cls:'key-search'
                },
                {
                    iconCls: "fas fa-sync-alt",
                    xtype: 'button',
                    text:'Tìm mới',
                    cls:'btn-s-new btn-orange'
                },
                {
                    xtype: 'button',
                    text:'Tìm ',
                    cls:'btn-search'
                }
                
            ]
        }
        
    ]


});