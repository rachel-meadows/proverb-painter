const API_URL = 'http://localhost:5025/api/proverb';

export const getAllProverbs = async () => {
  const response = await fetch(`${API_URL}/GetAllProverbs`);
  if (!response.ok) {
    throw new Error(`Network response status was ${response.status}`);
  }
  return response.json();
};

export const getRandomProverb = async () => {
  const response = await fetch(`${API_URL}/GetRandomProverb`);

  if (!response.ok) {
    throw new Error(`Network response status was ${response.status}`);
  }
  return response.json();
};
