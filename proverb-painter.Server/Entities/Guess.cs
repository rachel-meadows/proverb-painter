namespace proverb_painter.Server.Entities
{
    public class Guess
    {
        public int Id { get; set; }
        public required int PlayerId { get; set; }
        public required string GuessText { get; set; }
        public required bool IsCorrect { get; set; }
        public required bool IsClose { get; set; }
        public required int ProverbId { get; set; }
        public required int LikedCount { get; set; }
    }
}
