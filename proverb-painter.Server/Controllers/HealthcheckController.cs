using Microsoft.AspNetCore.Mvc;
using proverb_painter.Server.Data;

namespace proverb_painter.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthcheckController : ControllerBase
    {
        private readonly ILogger<ProverbController> _logger;
        private readonly DataContext _context;

        public HealthcheckController(ILogger<ProverbController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("ping")]
        public async Task<ActionResult<string>> PingBackend()
        {
            return Ok("pong");
        }
    }
}
