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
    }
}
