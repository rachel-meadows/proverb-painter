const API_URL = 'https://localhost:5025/api';

export const getAllProverbs = async () => {
  const response = await fetch(`${API_URL}/GetAllProverbs`);
  if (!response.ok) {
    throw new Error(`Network response status was ${response.status}`);
  }
  return response.json();
};

export const getRandomProverb = async () => {
  const allProverbs = await fetch(`${API_URL}/GetAllProverbs`);
    console.log('allProverbs', allProverbs);
    var response = allProverbs[0];
    console.log('response', response);

  if (!response.ok) {
    throw new Error(`Network response status was ${response.status}`);
  }
  return response.json();
};
