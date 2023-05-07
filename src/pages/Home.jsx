import { fetchMovies } from 'api/fetch-movies';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Text } from 'components/Text/Text.styled';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      {<Loader loading={isLoading} />}
      {error && <Text textAlign="center">{error}</Text>}
    </>
  );
};
