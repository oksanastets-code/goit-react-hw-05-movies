import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';
export default function Reviews() {
    let { filmId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
    moviesAPI.FetchFilmsReviews(filmId).then(r => {
      console.log(r.results);
      setReviews(r.results);
    });
  }, [filmId]);
  return (
    <>
      <p>Reviews</p>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
