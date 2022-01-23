import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import {useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    setSearchedMovies([]);
  }, [query]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    moviesAPI
      .FetchSearchingFilms(query)
      .then(r => r.results)
      .then(setSearchedMovies);
  }, [query]);

  const handleFormSubmit = keyWord => {
    setQuery(keyWord);
  };
  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {searchedMovies && <MoviesList movies={searchedMovies} />}
    </>
  );
}
