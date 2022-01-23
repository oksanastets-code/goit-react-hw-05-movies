import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import BackButton from '../components/BackButton/BackButton';
import FilmDataCard from '../components/FilmDataCard/FilmDataCard.jsx';

export default function FilmDetailsView() {
  const location = useLocation();
  console.log(location);
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    moviesAPI.FetchFilmsDetails(filmId).then(r => setFilm(r));
  }, [filmId]);

  console.log(film);

  return (
    <>
      <BackButton location={location} />
      {film && <FilmDataCard film={film} />}
      <Outlet />
    </>
  );
}
