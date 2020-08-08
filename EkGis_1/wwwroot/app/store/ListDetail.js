Ext.define('MRequest.store.ListDetail', {
    extend: 'Ext.data.Store',

    alias: 'store.listdetail',

    model: 'MRequest.model.ListDetail',

    data: { items: [
        { identifier:'1',day: '04/07/2020', content: 'Yêu cầu từ tài sản', name: 'Nguyen Long',type: '',state: 'Đang xử lý' },
        { identifier:'2',day: '03/07/2020', content: 'Lịch làm việc', name: 'Lê Chí Công',type: '',state: 'Đang xử lý' },
        { identifier:'3',day: '03/07/2020', content: 'Kiểm tra hệ thông', name: 'Nguyen Long',type: '',state: 'Đang xử lý' },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
