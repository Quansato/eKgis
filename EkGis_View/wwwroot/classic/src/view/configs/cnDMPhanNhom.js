Ext.define("Ek.view.configs.cnDMPhanNhomModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.configs-cndmphannhom",
    data: {
        record: null,
        fnSauKhiSave: null
    }
});

Ext.define("Ek.view.configs.cnDMPhanNhom", {
    extend: "Ext.window.Window",
    requires: ["Ek.view.configs.cnDMPhanNhomController", "Ek.view.configs.cnDMPhanNhomModel"],
    controller: "configs-cndmphannhom",
    viewModel: {
        type: "configs-cndmphannhom"
    },
    width: 580,
    modal: true,
    items: [{
        xtype: "form",
        padding: 5,
        reference: "frmPhanNhom",
        layout: {
            type: "vbox",
            align: "stretch"
        },
        defaults: {
            flex: 1,
            labelAlign: "right",
            labelWidth: 100
        },
        items: [{
            xtype: "textfield",
            name: "ma",
            fieldLabel: "Mã",
            allowBlank: true,
            bind: {
                value: "{record.maLoai}"
            },
            listeners: {
                blur: "blurMa"
            }
        }, {
            xtype: "textarea",
            name: "moTa",
            fieldLabel: "Mô tả",
            bind: "{record.tenLoai}"
        }]
    }],
    buttons: [{
        text: "Lưu và Làm mới",
        iconCls: "far fa-save",
        /*ui: "soft-green",*/
        reference: "btnSaveAndNew",
        handler: "onSaveAndNew"
    }, {
        text: "Save",
        iconCls: "far fa-save",
        /*ui: "soft-blue",*/
        reference: "btnSave",
        handler: "onSave"
    }, {
        text: "Cancel",
        /*ui: "soft-red",*/
        handler: function () {
            this.up("window").close();
        },
        iconCls: "fas fa-times"
    }],
    listeners: {
        afterRender: "onAfterrender",
        close: "onClose"
    }
});

Ext.define("Ek.view.configs.cnDMPhanNhomController", {
    extend: "Ext.app.ViewController",
    alias: "controller.configs-cndmphannhom",
    refs: null,
    storeInfo: null,

    init: function () {
        var me = this;
        me.callParent(arguments);
    },

    onAfterrender: function () {
        var me = this;
        me.refs = me.getReferences();
        me.storeInfo = me.getViewModel().storeInfo;
    },

    blurMa: function () {
        var me = this;
        var record = me.getViewModel().get("record");

    },

    onSave: function () {
        this.fnSave();
    },

    onSaveAndNew: function () {
        var me = this;
        me.fnSave();
        var newRecord = Ext.create("Ek.model.mDMPhanNhom", { maLoai: 0 });
        me.getViewModel().set("record", newRecord);
    },

    fnSave: function () {
        var me = this;
        var frm = me.refs.frmPhanNhom;
        if (!frm.getForm().isValid()) {
           // abp.notify.warn(app.localize("TaiSan_isValid"));
            return;
        }
        var view = me.getView();
        var fnSauKhiSave = me.getViewModel().get("fnSauKhiSave");
        var record = me.getViewModel().get("record");

        view.setLoading(true);
        if (record.data.maLoai != 0) {
            this.fnPUTAjax();
            console.log('Update successfully');
            view.setLoading(false);
        } else {
            me.fnPOSTAjax();
            console.log('Add successfully');
            view.setLoading(false);
        }
    },

    onClose: function () {
        var record = this.getViewModel().get("record");
        if (record) record.reject();
    },

    fnGETAjax: function (url, fnSauKhiSave) {
        console.log(url);
        $.ajax({
            type: 'GET',
            dataType: 'json',
            async: false,
            url: url,
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

    fnDELETEAjax: function (url, fnSauKhiSave) {
        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'DELETE',
            dataType: 'json',
            async: true,
            url: 'api/loai/' + record.get('maLoai'),
            success: function (responseData) {
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function () {
            },
            error: function (exx) {
                abp.notify.warn(exx);
            }
        });
    },

    fnPUTAjax: function (url, data, fnSauKhiSave) {

        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'PUT',
            context: this,
            async: true,
            url: 'api/loai/' + record.get('maLoai') + '/' + record.get('tenLoai'),
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: 'jsonp',
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

    fnPOSTAjax: function (url, data, fnSauKhiSave) {
        var fnSauKhiSave = this.getViewModel().get("fnSauKhiSave");
        var record = this.getViewModel().get("record");
        $.ajax({
            type: 'POST',
            context: this,
            async: true,
            url: 'api/loai',
            data: JSON.stringify(record.data),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (responseData) {
                record.set('maLoai', responseData.maLoai);
                if (fnSauKhiSave) fnSauKhiSave(responseData);
            },
            complete: function (responseData) {
                if (fnSauKhiSave) fnSauKhiSave();
            },
            error: function (exx) {
                console.log(exx);
                //abp.notify.warn(exx);
            }
        });
    }

});
