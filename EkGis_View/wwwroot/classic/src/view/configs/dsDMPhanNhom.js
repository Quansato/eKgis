var _phanNhomServices = "";
Ext.define("Ek.view.configs.dsDMPhanNhomModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-dsdmphannhom",
    data: {
        rSelected: null
    },
    stores: {
        store: { type: "sdmphannhom" }
    }
});

Ext.define("Ek.view.configs.dsDMPhanNhom", {
    extend: "Ext.grid.Panel",
    alias: "widget.dsdmphannhom",
    requires: ["Ek.view.configs.dsDMPhanNhomController", "Ek.view.configs.dsDMPhanNhomModel"],
    controller: "configs-dsdmphannhom",
    viewModel: {
        type: "configs-dsdmphannhom"
    },
    layout: "fit",
    bind: {
        selection: "{rSelected}",
        store: "{store}"
    },
    ui: "light",
    title: "phân nhóm",
    iconCls: "x-fa fa-object-group",
    columns: [{
        xtype: 'rownumberer',
        text: '#',
        width: 40,
        align: 'center',
        sortable: false
    }, {
        text: "Mã",
        width: 120,
        dataIndex: "maLoai"
    }, {
        text: "Mô tả",
        flex: 1,
        minWidth: 200,
        dataIndex: "tenLoai"
    }, {
        xtype: "datecolumn",
        text: "Ngày tạo",
        width: 100,
        dataIndex: "ngayTao",
        format: "d/m/Y"
    }],
    viewConfig: {
        emptyText: "Không có dữ liệu"
    },
    dockedItems: [{
        xtype: "toolbar",
        border: false,
        layout: "fit",
        style: {
            borderTop: "solid 1px #d0d0d0 !important",
            paddingBottom: "0px",
            paddingTop: "4px"
        },
        items: [{
            xtype: "panel",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [{
                xtype: "fieldcontainer",
                layout: "hbox",
                combineErrors: true,
                defaultType: "textfield",
                defaults: {
                    labelWidth: 60,
                    labelAlign: "right",
                    margin: "5 0 0 0"
                },
                items: [{
                    xtype: "textfield",
                    fieldLabel: "Search",
                    reference: "txtSearch",
                    emptyText: "search",
                    tabIndex: 1,
                    flex: 1,
                    cls: "EnterToTab",
                    listeners: {
                        specialkey: 'specialkey'
                    }
                }, {
                    xtype: "button",
                    reference: "btnTimKiem",
                    iconCls: "x-fa fa-search",
                    text: "Search",
                    width: 70,
                    tabIndex: 12,
                    cls: "EnterToTab",
                    handler: "onSearch"
                }]
            }]
        }]
    }, {
        xtype: "toolbar",
        dock: "bottom",
        items: [{
            xtype: "button",
            iconCls: "fa fa-plus",
            reference: "btnAdd",
            text:"Add",
           /* ui: "soft-blue",*/
            tooltip:"addtooltip",
            handler: "onAdd"
        }, {
            xtype: "button",
            iconCls: "fas fa-pencil-alt",
            reference: "btnUpdate",
            /*bind: { disabled: "{!rSelected}" },*/
            text: "Edit",
           /* ui: "blue",*/
            tooltip:"edittooltip",
            handler: "onUpdate"
        }, {
            xtype: "button",
            iconCls: "fa fa-minus",
            reference: "btnDelete",
           /* bind: { disabled: "{!rSelected}" },*/
            text: "Delete",
           /* ui: "soft-red",*/
            tooltip: "deletetooltip",
            handler: "onDelete"
        }, "->", {
            xtype: "pagingtoolbar",
            displayInfo: true,
            bind: {
                store: "{store}"
            },
            style: "padding: 0px !important",
            lastText: "lasttext",
            prevText: "prevext",
            firstText: "firsttext",
            nextText: "nexttext",
            refreshText: "refreshtext",
            beforePageText: "beforetext",
            afterPageText: "aftertext",
            displayMsg: "page",
            emptyMsg: "lastext",
            listeners: {
                beforechange: function (page, currentPage) {
                    //--- Get Proxy ------//
                    var myProxy = this.store.getProxy();
                    //--- Define Your Parameter for send to server ----//
                    myProxy.params = {
                        skipCount: 0,
                        maxResultCount: 0
                    };
                    //--- Set value to your parameter  ----//
                    myProxy.setExtraParam("skipCount", (currentPage - 1) * this.store.pageSize);
                    myProxy.setExtraParam("maxResultCount", this.store.pageSize);
                }
            }
        }]
    }],
    listeners: {
        afterRender: "onAfterrender"
    }
});

Ext.define("Ek.view.configs.dsDMPhanNhomController", {
    extend: "Ext.app.ViewController",
    alias: "controller.configs-dsdmphannhom",
    storeInfo: null,
    refs: null,
    init: function () {
        var me = this;
        me.callParent(arguments);
    },
    onAfterrender: function () {
        var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
        me.onSearch();
    },

    specialkey: function (field, e) {
        var me = this;
        if (e.getKey() == e.ENTER) {
            me.onSearch();
        }
    },

    onSearch: function () {
        var me = this;
        var store = me.storeInfo.store;
       
        // var query = abp.utils.buildQueryString([{ name: "filter", value: txt }]);
         var url = '/api/loai';
         store.proxy.api.read = url;
        store.load({
            params: {
                skipCount: 0,
                maxResultCount: store.pageSize
            },
            scope: this,
            callback: function (records, operation, success) {
                if (records == null) {
                    store.removeAll();
                }
            }
        });
    },

    onAdd: function () {
        var me = this;
        var record = Ext.create("Ek.model.mDMPhanNhom", { maLoai: 0 });
        Ext.create("Ek.view.configs.cnDMPhanNhom", {
            title: "Thêm mới danh mục",
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                }
            }
        }).show();
    },

    onUpdate: function () {
        var me = this;
        var record = me.getViewModel().get("rSelected");
        Ext.create("Ek.view.configs.cnDMPhanNhom", {
            title: 'Cập nhật danh mục',
            viewModel: {
                data: {
                    record: record,
                    fnSauKhiSave: function () {
                        me.onSearch();
                    }
                }
            }
        }).show();
    },

    onDelete: function () {
        var me = this;
        var record = this.getViewModel().get("rSelected");
        if (record != undefined && record != null) {
            this.fnDELETEAjax();
            console.log('Delete successfully')
            this.onSearch();
        }
            
    },

    fnDELETEAjax: function (url, fnSauKhiSave) {
        var record = this.getViewModel().get("rSelected");
        $.ajax({
            type: 'DELETE',
            dataType: 'json',
            async: false,
            url: 'api/loai/' + record.get('maLoai'),
            success: function (responseData) {
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function () {
            },
            error: function (exx) {
                console.log(exx);
            }
        });
    },



});
