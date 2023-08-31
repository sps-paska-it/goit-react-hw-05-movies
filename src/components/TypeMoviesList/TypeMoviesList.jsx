// import { useLocation } from 'react-router-dom';
// import { List, LinkStyled } from './TreydingMoviesList.styled';

export const TypeMoviesList = ({ movies }) => {
  //   const location = useLocation();
  return (
    <>
      <h2>Films</h2>
      {/* <List>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </LinkStyled>
            </li>
          );
        })}
      </List> */}
    </>
  );
};
