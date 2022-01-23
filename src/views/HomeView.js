import { useState, useEffect } from 'react';
import * as moviesAPI from '../services/movies-api';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeView() {
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
      {films && <MoviesList movies={films} />}
    </>
  );
}
