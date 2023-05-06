import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSubmitMovies } from 'api/fetch-movies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const MoviesSearch = () => {
  const [queryMovies, setQuerytMovies] = useState('');
  // const [submitMovies, setSubmitMovies] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q');
    if (!query) return;
    // setIsLoading(true);
    fetchSubmitMovies(query).then(({ results }) => {
      setMovies(results);
    });
    // .catch(err => {
    //   setError(err.message);
    // })
    // .finally(() => {
    //   setIsLoading(false);
    // });
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Please enter a valid movie name consisting of only letters and optionally separated by spaces, commas, periods, apostrophes, or hyphens."
          placeholder="The name of the movies"
          autoComplete="off"
          required
          onChange={e => setQuerytMovies(e.target.value.trim())}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};
