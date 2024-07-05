namespace proverb_painter.Server.Entities
{
    public class Player
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required int AvatarId { get; set; }
        public required string RoomId { get; set; }
        public required int Points { get; set; }
        public required bool IsAdmin { get; set; }
    }
}
