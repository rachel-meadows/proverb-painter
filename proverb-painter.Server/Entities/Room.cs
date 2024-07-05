namespace proverb_painter.Server.Entities
{
    public class Room
    {
        public int Id { get; set; }
        public required int AdminId { get; set; }
        public required string RoomId { get; set; }
        public required int UserCount { get; set; }
        public required int RoundsCount { get; set; }
        public required int ProverbId { get; set; }
    }
}
