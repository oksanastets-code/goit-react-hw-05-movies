import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import FilmDataCard from '../components/FilmDataCard/FilmDataCard.jsx';
import Cast from '../components/AddInfo/Cast';
import Reviews from '../components/AddInfo/Reviews';

export default function FilmDetailsView() {
  let { filmId } = useParams();
  console.log(filmId);
  const [film, setFilm] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    moviesAPI.FetchFilmsDetails(filmId).then(r => setFilm(r));
  }, [filmId]);
  useEffect(() => {
    moviesAPI.FetchFilmsCredits(filmId).then(r => {
      console.log(r.cast);
      setCast(r.cast);
    });
  }, [filmId]);
  useEffect(() => {
    moviesAPI.FetchFilmsReviews(filmId).then(r => {
      console.log(r.results);
      setReviews(r.results);
    });
  }, [filmId]);

  console.log(film);

  return (
    <>
      {film && <FilmDataCard film={film} />}

      <Cast cast={cast} />
      <Reviews reviews={reviews} />
      <Outlet />
    </>
  );
}
