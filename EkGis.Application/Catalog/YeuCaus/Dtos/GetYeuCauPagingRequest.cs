using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Application.Catalog.YeuCaus.Dtos
{
    public class GetYeuCauPagingRequest : PagingRequestBase
    {
        public string keywords { set; get; }
        public List<int> MaYeuCau { get; set; }
    }
}
