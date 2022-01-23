import { useState, useEffect } from 'react';
// import {useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesView() {
  const location = useLocation();
  console.log(location);
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    setSearched([]);
  }, [query]);

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
      <SearchBar onSubmit={handleFormSubmit} />
      {searched && <MoviesList movies={searched} location={location} />}
    </>
  );
}
