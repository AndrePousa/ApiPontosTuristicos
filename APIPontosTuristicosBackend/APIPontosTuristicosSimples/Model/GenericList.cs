using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPontosTuristicosSimples.Model
{
    public class GenericList<T>
    {
        public IEnumerable<T> list { get; set; }
        public int count { get; set; }
    }
}
