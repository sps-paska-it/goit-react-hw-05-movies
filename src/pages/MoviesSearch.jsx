import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSubmitMovies } from 'api/fetch-movies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchFormStyled, BtnSearch, Input } from './MovieSearch.styled';
import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text.styled';

export const MoviesSearch = () => {
  const [queryMovies, setQuerytMovies] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

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

  const handleSubmit = e => {
    e.preventDefault();
    if (!queryMovies) {
      alert('Enter the name fo the country');
      return;
    }
    const q = queryMovies;
    setSearchParams({ q });
  };
  return (
    <div>
      <SearchFormStyled onSubmit={handleSubmit}>
        <BtnSearch type="submit">
          <FiSearch size="16px" />
        </BtnSearch>
        <Input
          type="text"
          name="movie"
          pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Please enter a valid movie name consisting of only letters and optionally separated by spaces, commas, periods, apostrophes, or hyphens."
          placeholder="The name of the movies"
          autoComplete="off"
          required
          onChange={e => setQuerytMovies(e.target.value.trim())}
        />
      </SearchFormStyled>
      <MoviesList movies={movies} />
      {<Loader loading={isLoading} />}
      {error && <Text textAlign="center">{error}</Text>}
    </div>
  );
};
