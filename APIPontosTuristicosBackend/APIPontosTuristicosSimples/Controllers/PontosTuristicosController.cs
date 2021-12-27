using APIPontosTuristicosSimples.Data;
using APIPontosTuristicosSimples.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPontosTuristicosSimples.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PontosTuristicosController : ControllerBase
    {
        private readonly PontoTuristicoDbContext _context;

        public PontosTuristicosController(PontoTuristicoDbContext context)
        {
            _context = context;
        }

        //Get: api/<PontosTuristicosController>
        [HttpGet]
        public async Task<ActionResult<GenericList<PontoTuristico>>> GetPontoTuristico(int page = 1, string search = "")
        {
            int skip = (page -1) * 5;

            //Search-Paginação
            // 1 => 0
            // 2 => 5
            // 3 => 10
            // 4 => 15
            IQueryable<PontoTuristico> pontoTuristico = _context.PontoTuristico;

            GenericList<PontoTuristico> list = new GenericList<PontoTuristico>();
           
            if (!search.Trim().Equals(""))
            {
                pontoTuristico = pontoTuristico.Where(
                   pt => pt.name.Contains(search) || pt.description.Contains(search) || pt.address.Contains(search)
                   || pt.city.Contains(search) || pt.state.Contains(search)
                );
            }

            list.count = pontoTuristico.Count();

            list.list = await pontoTuristico.OrderByDescending((pt) => pt.created).Skip(skip).Take(5).ToListAsync();

            return list;
        }

        //Get api /<PontosTuristicos>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PontoTuristico>> GetPontoTuristico(int id)
        {
            var pontoTuristico = await _context.PontoTuristico.FindAsync(id);

            if (pontoTuristico == null)
            {
                return NotFound();
            }
            return pontoTuristico;
        }

        //Post api/<PontosTuristicosController>
        [HttpPost]
        public async Task<ActionResult<PontoTuristico>> PostPontoTuristico(PontoTuristico pontoTuristico)
        {
            pontoTuristico.created = DateTime.Now;
            _context.PontoTuristico.Add(pontoTuristico);
            await _context.SaveChangesAsync();

            return CreatedAtAction(actionName: "GetPontoTuristico", routeValues: new { id = pontoTuristico.id }, value: pontoTuristico);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutPontoTuristico(int id, PontoTuristico pontoTuristico)
        {
            if (id != pontoTuristico.id)
            {
                return BadRequest();
            }

            pontoTuristico.updated = DateTime.Now;
            _context.Entry(pontoTuristico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PontoTuristicoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        //Delete api/ <ClientesController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PontoTuristico>> DeletePontoTuristico(int id)
        {
            var pontoTuristico = await _context.PontoTuristico.FindAsync(id);
            if (pontoTuristico == null)
            {
                return NotFound();
            }
            _context.PontoTuristico.Remove(pontoTuristico);
            await _context.SaveChangesAsync();

            return pontoTuristico;
        }

        private bool PontoTuristicoExists(int id)
        {
            return _context.PontoTuristico.Any(e => e.id == id);
        }
    }
}
