using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Application.Catalog
{
    public class EkGisException : Exception
    {
        public EkGisException() { }
        public EkGisException(string message) : base(message) { }
        public EkGisException(string message, Exception inner) : base(message, inner) { }
    }
}
