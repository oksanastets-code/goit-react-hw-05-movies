import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';

export default function FilmDetailsView() {
  let { filmId } = useParams();
  console.log(filmId);

  const [film, setFilm] = useState(null);
  useEffect(() => {
    moviesAPI.FetchFilmsDetails(filmId).then(r => console.log(r));
  }, [filmId]);
  return (
    <>
      <h2>Details {filmId}</h2>
    </>
  );
}
