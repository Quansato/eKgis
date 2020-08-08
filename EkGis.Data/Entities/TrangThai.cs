using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Entities
{
    public class TrangThai
    {
        public int MaTrangThai { set; get; }
        public string TenTrangThai { set; get; }
        public List<YeuCau> YeuCaus { get; set; }
    }
}
