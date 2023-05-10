import { useLocation } from 'react-router-dom';
import { List, LinkStyled } from './MovieList.styled';

export const MoviesList = ({ movies, locationMovieList }) => {
  const location = useLocation();
  locationMovieList(location);
  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </LinkStyled>
          </li>
        );
      })}
    </List>
  );
};
