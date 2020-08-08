using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Entities
{
    public class NhanVien
    {
        public int MaNV { set; get; }
        public string TenNV { set; get; }
        public string ChucVu { set; get; }
        public string Email { set; get; }
        public string SDT { set; get; }
        public string DiaChi { set; get; }
        public DateTime NgaySinh { set; get; }
        public List<YeuCau> YeuCaus { get; set; }
    }
}
