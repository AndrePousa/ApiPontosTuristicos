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
        private readonly PontoTuristicoDbContest _context;

        public PontosTuristicosController(PontoTuristicoDbContest context)
        {
            _context = context;
        }

        //Get: api/<PontosTuristicosController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PontoTuristico>>> GetPontoTuristico()
        {
            return await _context.PontoTuristico.ToListAsync();
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
