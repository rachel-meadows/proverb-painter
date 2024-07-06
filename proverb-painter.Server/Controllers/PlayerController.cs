using Microsoft.AspNetCore.Mvc;
using proverb_painter.Server.Data;
using proverb_painter.Server.Entities;

namespace proverb_painter.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly ILogger<PlayerController> _logger;
        private readonly DataContext _context;

        public PlayerController(ILogger<PlayerController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Player>>> GetPlayer(int id)
        {
            var player = await _context.Players.FindAsync(id);
            if (player == null)
            {
                return NotFound($"A player with the id {id} was not found.");
            }
            return Ok(player);
        }

        [HttpPost]
        public async Task<ActionResult<List<Player>>> CreatePlayer(Player player)
        {
            try
            {
                _context.Players.Add(player);
                await _context.SaveChangesAsync();
                return StatusCode(201, "Player created.");
            } catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500, "An error occurred while creating the resource.");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<List<Player>>> DeletePlayer(int id)
        {
            try
            {
                var player = await _context.Players.FindAsync(id);
                if (player == null)
                {
                    return NotFound($"A player with the id {id} was not found.");
                }
                _context.Players.Remove(player);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500, "An error occurred while deleting the resource.");
            }
        }
    }
}
