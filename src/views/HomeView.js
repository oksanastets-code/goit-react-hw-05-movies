import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeView() {
  const location = useLocation();
  console.log(location);
  const [films, setFilms] = useState(null);

  useEffect(() => {
    moviesAPI
      .FetchTrendingFilms()
      .then(r => r.results)
      .then(setFilms);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {films && <MoviesList movies={films} location={location} />}
    </>
  );
}
