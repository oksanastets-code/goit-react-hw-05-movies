import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';

export default function HomeView() {
  //  const { url } = useRouteMatch();
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
      {films && (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={film.id}>{film.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
