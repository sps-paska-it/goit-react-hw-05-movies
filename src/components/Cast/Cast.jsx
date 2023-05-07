import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api/fetch-movies';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    // setIsLoading(true);
    fetchCast(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, []);

  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
