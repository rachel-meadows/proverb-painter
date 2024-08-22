const API_URL = 'http://localhost:5025/api/room';

export const getRoom = async (roomId) => {
  const response = await fetch(`${API_URL}/?id=${roomId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(
      `Response status was ${response.status} when attempting to get room data`
    );
  }

  return response;
};

export const getPlayersByRoom = async (roomId) => {
  const response = await fetch(`${API_URL}/GetPlayersByRoom/?id=${roomId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(
      `Response status was ${response.status} when attempting to get room data`
    );
  }

  const data = await response.json();
  return data;
};
