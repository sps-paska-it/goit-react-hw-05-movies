import { Link, useLocation } from 'react-router-dom';
import {
  List,
  Img,
  StyledItem,
  StyledTitle,
  StyledGradient,
  Title,
} from './TreydingMoviesList.styled';
import { Pagination } from './Pagination/Pagination';

export const TreydingMoviesList = ({ movies }) => {
  const location = useLocation();
  const amountMoviesAll = movies.length;
  const media = window.innerWidth;
  let amountMovies = 2;
  if (media > 767) amountMovies = 4;
  if (media > 1200) amountMovies = 5;
  const moviesVisibility = movies.slice(0, amountMovies);
  const amountPagination = Math.ceil(amountMoviesAll / amountMovies);

  return (
    <>
      <Title>Trending today</Title>
      <List>
        {moviesVisibility.map(({ id, title, poster_path }) => {
          return (
            <StyledItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <StyledGradient className="overlay">
                  <StyledTitle>{title}</StyledTitle>
                </StyledGradient>
                <Img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
              </Link>
            </StyledItem>
          );
        })}
      </List>
      {amountPagination && <Pagination amount={amountPagination} />}
    </>
  );
};
