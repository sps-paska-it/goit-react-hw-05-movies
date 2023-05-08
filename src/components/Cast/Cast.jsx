import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api/fetch-movies';
import { Img, Item, List, Paragraf } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(err => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  return (
    <List>
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <Item key={id}>
            <Img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : ''
              }
              alt={name}
            />
            <Paragraf>{name}</Paragraf>
            <Paragraf>Character: {character}</Paragraf>
          </Item>
        );
      })}
      {<Loader loading={isLoading} />}
      {error && <Text textAlign="center">{error}</Text>}
    </List>
  );
};

export default Cast;
