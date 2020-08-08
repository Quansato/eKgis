using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Application.Catalog.YeuCaus.Dtos
{
    public class YeuCauEditRequest
    {
        public int MaYeuCau { set; get; }
        public int MaLoai { set; get; }
        public int MaMucDo { set; get; }
        public int MaNV { set; get; }
        public DateTime NgayTiepNhan { set; get; }
        public string Noidung { set; get; }
        public string DiaDiem { set; get; }
    }
}
