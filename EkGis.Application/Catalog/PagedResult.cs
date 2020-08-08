using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Application.Catalog
{
    public class PagedResult<T> : PagingRequestBase
    {
        public List<T> Items { set; get; }
        public int TotalRecord { set; get; }
    }
}
