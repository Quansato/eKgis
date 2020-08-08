using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Application.Catalog.YeuCaus.Dtos
{
    public class YeuCauViewModel
    {
        public int MaYeuCau { set; get; }
        public int MaLoai { set; get; }
        public string TenLoai { set; get; }
        public int MaTrangThai { set; get; }
        public string TenTrangThai { set; get; }
        public int? MaMucDo { set; get; }
        public int? MaNV { set; get; }
        public string TenNV { set; get; }
        public int? MaKH { set; get; }
        public string TenKH { set; get; }
        public DateTime NgayTiepNhan { set; get; }
        public string Noidung { set; get; }
        public string? DiaDiem { set; get; }
        public string? MoTa { set; get; }

    }
}
