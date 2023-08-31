import { fetchMovies } from 'api/fetch-movies';
import { useEffect, useState } from 'react';
import { TreydingMoviesList } from 'components/TreydingMoviesList/TreydingMoviesList';
import { Text } from 'components/Text/Text.styled';
import { Loader } from 'components/Loader/Loader';
// import { Filter } from 'components/Filter/Filter';
import { StyledMainDiv } from './Home.styled';
import { TypeMoviesList } from 'components/TypeMoviesList/TypeMoviesList';

const Home = () => {
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
  console.log(movies);
  return (
    <>
      {<Loader loading={isLoading} />}
      <StyledMainDiv>
        {/* <Filter /> */}
        <div>
          <TreydingMoviesList movies={movies} />
          {error && <Text textAlign="center">{error}</Text>}
          <TypeMoviesList />
        </div>
      </StyledMainDiv>
    </>
  );
};

export default Home;
