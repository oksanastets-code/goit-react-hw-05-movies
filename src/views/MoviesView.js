import { useState, useEffect } from 'react';
// import {useParams } from 'react-router-dom';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesView() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('query')); // ▶ URLSearchParams {}

  const search = useLocation().search;
  console.log(search);
  const q = new URLSearchParams(search).get('query');
  console.log(q);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    moviesAPI
      .FetchSearchingFilms(query)
      .then(r => r.results)
      .then(setSearched);
  }, [query]);

  const handleFormSubmit = keyWord => {
    setQuery(keyWord);
    setSearchParams(`query=${keyWord}`);
  };
  return (
    <>
      <SearchBar
        onSubmit={handleFormSubmit}
        // onSubmit={rememberQuery}
        // onMemory={rememberQuery}
      />
      {searched && <MoviesList movies={searched} />}
    </>
  );
}
