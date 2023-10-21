import axios from 'axios';

export const getArticles = async () => {
  const response = await axios.get(
    'https://blog.sweetndivine.com/api/v.1.0/all-articles'
  );
  return response.data;
};
