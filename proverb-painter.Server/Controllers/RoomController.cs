using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proverb_painter.Server.Data;
using proverb_painter.Server.Entities;

namespace proverb_painter.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly ILogger<RoomController> _logger;
        private readonly DataContext _context;

        public RoomController(ILogger<RoomController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Room>>> GetAllRooms()
        {
            var rooms = await _context.Rooms.ToListAsync();
            return Ok(rooms);
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Room>>> GetRoom(int id)
        {
            var room = await _context.Rooms.FindAsync(id);
            if (room == null)
            {
                return NotFound($"A room with the id {id} was not found.");
            }
            return Ok(room);
        }

        [HttpPost]
        public async Task<ActionResult<List<Room>>> CreateRoom(Room room)
        {
            try
            {
                _context.Rooms.Add(room);
                await _context.SaveChangesAsync();
                return StatusCode(201, "Room created.");
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500, "An error occurred while creating the resource.");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<List<Room>>> DeleteRoom(int id)
        {
            try
            {
                var room = await _context.Rooms.FindAsync(id);
                if (room == null)
                {
                    return NotFound($"A room with the id {id} was not found.");
                }
                _context.Rooms.Remove(room);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500, "An error occurred while deleting the resource.");
            }
        }

        [HttpGet("GetPlayersByRoom")]
        public async Task<ActionResult<List<Player>>> GetPlayersByRoom([FromQuery] string id)
        {
            try
            {
                var players = await _context.Players
                    .Where(p => p.RoomId == id)
                    .ToListAsync();
                return Ok(players);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500, "An error occurred while retrieving the players.");
            }
        }
    }
}
