using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParcialDotNet.Models;

namespace ParcialDotNet.Controllers
{
    

    public class ReservaController : ControllerBase{
        private readonly ReservaContext _context;
        public ReservaController(ReservaContext context){
            _context = context;
            if(_context.ReservaItem.Count()== 0){
                _context.ReservaItem.Add( new ReservaItem {id=2,codigo= 2, Nombre="Laura Perez", TipoSilla=true, NumeroSilla="1" });
                _context.ReservaItem.Add( new ReservaItem {id=3,codigo= 3, Nombre="Andres Parra", TipoSilla=true, NumeroSilla="2" });
                _context.SaveChanges();

            }
        }
        //GET: api/Reserva
        [HttpGet]
            public async Task<ActionResult<IEnumerable<ReservaItem>>> GetReservaItems(){
                return await _context.ReservaItem.ToListAsync();
            }

            
        
    }
}