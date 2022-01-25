import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import BackButton from '../components/BackButton/BackButton';

const FilmDataCard = lazy(() =>
  import(
    '../components/FilmDataCard/FilmDataCard.jsx' /* webpackChunkName: "film-data-card" */
  ),
);
export default function FilmDetailsView() {
  const location = useLocation();
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const [genres, setGenres] = useState('');

  useEffect(() => {
    moviesAPI.FetchFilmsDetails(filmId).then(setFilm);
  }, [filmId]);

  useEffect(() => {
    if (!film) {
      return;
    }
    let names = film.genres;
    const string = names.map(name => name.name).join(', ');
    setGenres(string);
  }, [film]);

  return (
    <>
      <BackButton location={location} />
      <Suspense fallback={<h4>Loading film-data</h4>}>
        {film && <FilmDataCard film={film} genres={genres} />}
      </Suspense>
      <Outlet />
    </>
  );
}
