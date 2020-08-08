using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Application.Catalog
{
    public class PagingRequestBase
    {
        public int PageIndex { set; get; }
        public int PageSize { set; get; }
    }
}
