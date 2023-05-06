import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const KEY = '5a1775956ea4e1cf9e88872469faee97';
const mediaType = 'movie'; // або "tv" або "person"
const timeWindow = 'day'; // або "week"
const option = `trending/${mediaType}/${timeWindow}`;

export const fetchMovieas = async () => {
  const requestURL = `${URL}/${option}?trending&movie&day&api_key=${KEY}`;

  const { data } = await axios.get(requestURL);
  return data;
};

// const base =
//   'https://api.themoviedb.org/3/movie/550?api_key=5a1775956ea4e1cf9e88872469faee97';
