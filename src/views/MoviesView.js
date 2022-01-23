import { useState, useEffect } from 'react';
// import {useParams } from 'react-router-dom';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesView() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('q')); // ▶ URLSearchParams {}

  useEffect(() => {
    // read the params on component load and when any changes occur
    const currentParams = Object.fromEntries([...searchParams]);
    // get new values on change
    console.log('useEffect:', currentParams);
    // update the search params programmatically
    setSearchParams({ q: `${searchParams.get(`q`)}` });
  }, [searchParams]);

  const location = useLocation();
  // console.log(location);
  // const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState([]);

  // const memory = new URLSearchParams(location.search).get('query');
  // console.log(memory);
  // console.log(location.search);
  // const rememberQuery = keyWord => {
  //   navigate({
  //     ...location,
  //     search: `query=${keyWord}`
  //   })

  // }

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
