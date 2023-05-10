import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BackLink } from 'components/GoBack/GoBack';
import {
  Box,
  BoxInfo,
  BoxInfoMovie,
  Img,
  LinkStyled,
  List,
} from './MovieInfo.styled';

export const MovieInfo = ({
  locationMovieListSearch,
  poster_path,
  title,
  overview,
  genres = [],
  vote_average,
  vote_count,
  release_date = '',
}) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/300x450';
  const stringGenres = genres.map(genre => genre.name).join(', ');
  const userScore = Math.round(vote_average * 10);
  const date = release_date.split('-')[0];

  const location = useLocation();
  console.log(location);
  const backLinkHref = location?.state?.from || '/';

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Box>
        <Img src={posterUrl} alt={title} />
        <BoxInfoMovie>
          <h2>
            {title} ({date})
          </h2>
          <p>
            User Score: {userScore}% ({vote_count})
          </p>
          <b>Overview</b>
          <p>{overview} </p>
          <b>Genres</b>
          <p>{stringGenres} </p>
        </BoxInfoMovie>
      </Box>
      <BoxInfo>
        <h3>Additional information</h3>
        <List>
          <li>
            <LinkStyled to="cast" state={{ from: locationMovieListSearch }}>
              Cast
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews" state={{ from: locationMovieListSearch }}>
              Reviews
            </LinkStyled>
          </li>
        </List>
        <Suspense>
          <Outlet />
        </Suspense>
      </BoxInfo>{' '}
    </>
  );
};
