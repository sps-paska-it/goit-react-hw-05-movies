import { useLocation } from 'react-router-dom';
import {
  List,
  LinkStyled,
  Img,
  StyledItem,
  StyledTitle,
} from './TreydingMoviesList.styled';

export const TreydingMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <h2>Trending today</h2>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <StyledItem key={id}>
              <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <StyledTitle>{title}</StyledTitle>
              </LinkStyled>
            </StyledItem>
          );
        })}
      </List>
    </>
  );
};
