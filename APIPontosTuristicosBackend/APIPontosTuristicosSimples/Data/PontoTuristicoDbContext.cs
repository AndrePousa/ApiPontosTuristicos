using APIPontosTuristicosSimples.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPontosTuristicosSimples.Data
{
    public class PontoTuristicoDbContest : DbContext
    {
        public PontoTuristicoDbContest(DbContextOptions options) : base(options)
        {

        }
        public DbSet<PontoTuristico> PontoTuristico { get; set; }  
    }
}
