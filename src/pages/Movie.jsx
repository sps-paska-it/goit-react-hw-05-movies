import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailsMovies } from 'api/fetch-movies';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchDetailsMovies(movieId).then(data => setMovie(data));
  }, [movieId]);
  console.log(movie);
  return (
    <>
      {/* <GoBackBtn path={goBackLink}>Back to coutries</GoBackBtn> */}
      <MovieInfo {...movie} />
    </>
  );
};
