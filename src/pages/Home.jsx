import { fetchMovies } from 'api/fetch-movies';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    fetchMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};
