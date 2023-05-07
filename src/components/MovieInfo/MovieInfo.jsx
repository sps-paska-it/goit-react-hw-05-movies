import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { BackLink } from 'components/GoBack/GoBack';

export const MovieInfo = ({
  poster_path,
  title,
  overview,
  genres = [],
  vote_average,
  vote_count,
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const stringGenres = genres.map(genre => genre.name).join(' ');
  const userScore = Math.round(vote_average * 10);

  const location = useLocation();
  const backLinkHref = location?.state?.from || '/';

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div>
        <img src={posterUrl} alt="" />
        <div>
          <h2>{title}</h2>
          <p>
            User Score: {userScore}% ({vote_count})
          </p>
          <b>Overview</b>
          <p>{overview} </p>
          <b>Genres</b>
          <p>{stringGenres} </p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>{' '}
    </>
  );
};
