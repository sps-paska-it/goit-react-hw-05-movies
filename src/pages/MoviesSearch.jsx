import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSubmitMovies } from 'api/fetch-movies';
import { TreydingMoviesList } from 'components/TreydingMoviesList/TreydingMoviesList';
import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text.styled';
import { FormSearch } from 'components/FormSearch/FormSearch';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = searchParams.get('q');
    if (!query) return;
    setIsLoading(true);
    fetchSubmitMovies(query)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  const onSubmit = q => {
    setSearchParams({ q });
  };
  return (
    <>
      {<Loader loading={isLoading} />}
      <FormSearch propSubmit={onSubmit} />
      <TreydingMoviesList movies={movies} />
      {error && <Text textAlign="center">{error}</Text>}
    </>
  );
};

export default MoviesSearch;
