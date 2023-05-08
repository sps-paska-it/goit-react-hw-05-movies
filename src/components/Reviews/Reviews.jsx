import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api/fetch-movies';
import { List, Paragraf } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(err => setError(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return isLoading ? (
    <Loader loading={isLoading} />
  ) : !reviews.length ? (
    <p>We don't have any reviews for this movie.</p>
  ) : (
    <List>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h4>Author: {author}</h4>
            <Paragraf>{content}</Paragraf>
          </li>
        );
      })}
      {error && <Text textAlign="center">{error}</Text>}
    </List>
  );
};

export default Reviews;
