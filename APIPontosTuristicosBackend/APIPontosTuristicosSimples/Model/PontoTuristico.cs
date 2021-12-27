using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIPontosTuristicosSimples.Model
{
    public class PontoTuristico
    {
        [Key]
        public int id { get; set; }
        [StringLength(100, ErrorMessage = "Ocampo {0} precisa ter entre {2} a {100} caracteres", MinimumLength = 4)]
        public string name { get; set; }
        [DataType(DataType.Date)]
        public DateTime created { get; set; }

        [DataType(DataType.Date)]
        public DateTime updated { get; set; }
        public string description { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
    }
}
