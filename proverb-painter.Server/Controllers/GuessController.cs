using Microsoft.AspNetCore.Mvc;
using proverb_painter.Server.Data;
using proverb_painter.Server.Entities;

namespace proverb_painter.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuessController : ControllerBase
    {
        private readonly ILogger<GuessController> _logger;
        private readonly DataContext _context;

        public GuessController(ILogger<GuessController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("id")]
        public async Task<ActionResult<List<Guess>>> GetGuess(int id)
        {
            var guess = await _context.Guesses.FindAsync(id);
            if (guess == null)
            {
                return NotFound($"A guess with the id {id} was not found.");
            }
            return Ok(guess);
        }

        [HttpPost]
        public async Task<ActionResult<List<Guess>>> CreateGuess(Guess guess)
        {
            try
            {
                _context.Guesses.Add(guess);
                await _context.SaveChangesAsync();
                return StatusCode(201, "Guess created.");
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500, "An error occurred while creating the resource.");
            }
        }

        [HttpPut]
        public async Task<ActionResult<List<Guess>>> UpdateGuess(Guess updatedGuess)
        {
            try
            {
                var guess = await _context.Guesses.FindAsync(updatedGuess.Id);
                if (guess is null)
                {
                    return NotFound($"A guess with the id {updatedGuess.Id} was not found.");
                }

                guess.LikedCount = updatedGuess.LikedCount;

                return Ok("Guess updated.");
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500, "An error occurred while updating the resource.");
            }
        }

        [HttpDelete]
        public async Task<ActionResult<List<Guess>>> DeleteGuess(int id)
        {
            try
            {
                var guess = await _context.Guesses.FindAsync(id);
                if (guess == null)
                {
                    return NotFound($"A guess with the id {id} was not found.");
                }
                _context.Guesses.Remove(guess);
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
