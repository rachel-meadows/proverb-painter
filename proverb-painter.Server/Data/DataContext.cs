using CsvHelper;
using Microsoft.EntityFrameworkCore;
using proverb_painter.Server.Entities;
using System.Formats.Asn1;
using System.Globalization;

namespace proverb_painter.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var proverbs = LoadProverbsFromCsv();
            modelBuilder.Entity<Proverb>().HasData(proverbs);

            base.OnModelCreating(modelBuilder);
        }

        private List<Proverb> LoadProverbsFromCsv()
        {
            using (var reader = new StreamReader("proverbs.csv"))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                return new List<Proverb>(csv.GetRecords<Proverb>());
            }
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Guess> Guesses { get; set; }
        public DbSet<Proverb> Proverbs { get; set; }
        public DbSet<Room> Rooms { get; set; }
    }
}
