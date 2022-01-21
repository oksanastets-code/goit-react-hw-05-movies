import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';

export default function FilmDetailsView() {
  const location = useLocation();
  console.log(location);
  // const filmId = useParams();
  // console.log(filmId);

  // const [film, setFilm] = useState(null);
  // useEffect(() => {
  //     moviesAPI.FetchFilmsDetails(filmId).then(r => console.log(r))
  // }, [filmId]);
  return (
    <>
      <h2>
        Details
        {/* `${filmId}` */}
      </h2>
    </>
  );
}
