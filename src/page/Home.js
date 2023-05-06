import { fetchMovieas } from 'api/fetch-movies';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    fetchMovieas().then(({ results }) => {
      setMovies(results);
      console.log(results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </>
  );
};
