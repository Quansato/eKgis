using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Application.Catalog.YeuCaus.Dtos
{
    public class YeuCauCreateRequest
    {
        public int MaYeuCau { get; set; }
        public int MaLoai { set; get; }
        public int MaTrangThai { set; get; }
        public int MaMucDo { set; get; }
        public int MaNV { set; get; }
        public int MaKH { set; get; }
        public DateTime NgayTiepNhan { set; get; }
        public string Noidung { set; get; }
        public string DiaDiem { set; get; }
        public string MoTa { set; get; }


    }
}
