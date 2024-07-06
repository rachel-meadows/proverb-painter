using Microsoft.EntityFrameworkCore;
using proverb_painter.Server.Entities;

namespace proverb_painter.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Proverb>().HasData(
                new Proverb { Id = 1, ProverbText = "It's always darkest before dawn"},
                new Proverb { Id = 2, ProverbText = "A stitch in time saves nine"}
            );

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Guess> Guesses { get; set; }
        public DbSet<Proverb> Proverbs { get; set; }
        public DbSet<Room> Rooms { get; set; }
    }
}
