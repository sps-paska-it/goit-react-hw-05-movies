import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailsMovies } from 'api/fetch-movies';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Text } from 'components/Text/Text.styled';
import { Loader } from 'components/Loader/Loader';

const Movie = ({ locationMovieListSearch }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchDetailsMovies(movieId)
      .then(data => setMovie(data))
      .catch(err => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  return (
    <>
      {<Loader loading={isLoading} />}
      <MovieInfo {...movie} locationMovieListSearch={locationMovieListSearch} />
      {error && <Text textAlign="center">{error}</Text>}
    </>
  );
};

export default Movie;
