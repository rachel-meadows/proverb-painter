using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proverb_painter.Server.Entities;

namespace proverb_painter.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly ILogger<PlayerController> _logger;

        public PlayerController(ILogger<PlayerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<List<Player>>> GetAllPlayers()
        {
            var players = new List<Player> {
                new Player
                {
                    Id = 1,
                    Name = "Test player 1",
                    AvatarId = 1,
                    RoomId = "1s6eygs5g",
                    Points = 0,
                    IsAdmin = true
                }
            };
            return Ok(players);
        }

    }
}
