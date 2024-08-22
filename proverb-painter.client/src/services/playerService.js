const API_URL = 'http://localhost:5025/api/player';

export const addPlayer = async (userName, avatarUrl, roomId, isAdmin) => {
  const player = {
    Name: userName,
    AvatarId: avatarUrl,
    RoomId: roomId,
    Points: 0,
    IsAdmin: isAdmin,
  };

  const response = await fetch(`${API_URL}/CreatePlayer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });

  if (!response.ok) {
    throw new Error(
      `Response status was ${response.status} when attempting to make new user`
    );
  }
};
