import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSubmitMovies } from 'api/fetch-movies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text.styled';
import { FormSearch } from 'components/FormSearch/FormSearch';

const MoviesSearch = ({ locationMovieList }) => {
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
  const saveLocation = location => location;
  return (
    <>
      <FormSearch propSubmit={onSubmit} id={saveLocation} />
      <MoviesList movies={movies} locationMovieList={locationMovieList} />
      {<Loader loading={isLoading} />}
      {error && <Text textAlign="center">{error}</Text>}
    </>
  );
};

export default MoviesSearch;
