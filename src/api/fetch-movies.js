import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const KEY = '5a1775956ea4e1cf9e88872469faee97';

export const fetchMovies = async () => {
  const response = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);
  return response.data;
};

export const fetchSubmitMovies = async query => {
  const response = await axios.get(
    `${URL}/search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
};

export const fetchDetailsMovies = async movie_id => {
  const response = await axios.get(`${URL}/movie/${movie_id}?api_key=${KEY}`);
  return response.data;
};
