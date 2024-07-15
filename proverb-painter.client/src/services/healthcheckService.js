const API_URL = 'https://localhost:5025/api';

export const ping = async () => {
  const response = await fetch(`${API_URL}/ping`);
  if (!response.ok) {
    throw new Error(`Network response status was ${response.status}`);
  }
  return response.json();
};
