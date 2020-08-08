using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Entities
{
    public class YeuCau
    {
        public int MaYeuCau { set; get; }
        public int MaLoai { set; get; }
        public int MaTrangThai { set; get; }
        public int? MaMucDo { set; get; }
        public int? MaNV { set; get; }
        public int? MaKH { set; get; }
        public DateTime NgayTiepNhan { set; get; }
        public string Noidung { set; get; }
        public string? DiaDiem { set; get; }
        public string? MoTa { set; get; }

        public Loai Loai { get; set; }
        public MucDo MucDo { get; set; }
        public NhanVien NhanVien { get; set; }
        public TrangThai TrangThai { get; set; }
        public KhachHang KhachHang { get; set; }
    }
}
