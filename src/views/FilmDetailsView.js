import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import FilmDataCard from '../components/FilmDataCard/FilmDataCard.jsx';

export default function FilmDetailsView() {
  let { filmId } = useParams();
  console.log(filmId);
  const [film, setFilm] = useState(null);
  useEffect(() => {
    moviesAPI.FetchFilmsDetails(filmId).then(r => setFilm(r));
  }, [filmId]);

  console.log(film);

  return (
    <>
      {film && <FilmDataCard film={film} />}
      <Outlet />
    </>
  );
}
