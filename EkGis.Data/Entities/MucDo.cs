using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Entities
{
    public class MucDo
    {
        public int MaMucDo { set; get; }
        public string TenMucDo { set; get; }
        public List<YeuCau> YeuCaus { get; set; }
    }
}
