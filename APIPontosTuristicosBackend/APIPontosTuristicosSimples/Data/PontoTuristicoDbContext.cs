using APIPontosTuristicosSimples.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPontosTuristicosSimples.Data
{
    public class PontoTuristicoDbContext : DbContext
    {
        public PontoTuristicoDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<PontoTuristico> PontoTuristico { get; set; }  
    }
}
