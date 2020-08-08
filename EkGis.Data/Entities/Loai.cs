using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Entities
{
    public class Loai
    {
        public int MaLoai { set; get; }
        public string TenLoai { set; get; }
        public DateTime? NgayTao { set; get; }

        public List<YeuCau> YeuCaus { get; set; }
    }
}
