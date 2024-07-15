using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proverb_painter.Server.Data;
using proverb_painter.Server.Entities;

namespace proverb_painter.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProverbController : ControllerBase
    {
        private readonly ILogger<ProverbController> _logger;
        private readonly DataContext _context;

        public ProverbController(ILogger<ProverbController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("GetAllProverbs")]
        public async Task<ActionResult<List<Proverb>>> GetAllProverbs()
        {
            var proverbs = await _context.Proverbs.ToListAsync();
            return Ok(proverbs);
        }

        [HttpGet("GetRandomProverb")]
        public async Task<ActionResult<Proverb>> GetRandomProverb()
        {
            // New GUID --> LINQ random ordering
            var proverb = await _context.Proverbs
                .OrderBy(p => Guid.NewGuid())
                .FirstOrDefaultAsync();

            if (proverb == null)
            {
                return NotFound();
            }

            return proverb;
        }
    }
}
