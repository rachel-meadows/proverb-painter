using Microsoft.EntityFrameworkCore;
using proverb_painter.Server.Entities;

namespace proverb_painter.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Guess> Guesses { get; set; }
        public DbSet<Proverb> Proverbs { get; set; }
        public DbSet<Room> Rooms { get; set; }
    }
}
