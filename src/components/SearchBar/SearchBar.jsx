import { useState } from 'react';
import { BsSearch} from 'react-icons/bs'
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput
} from './SearchBar.styled';

export default function Searchbar({ onSubmit}) {
  const [keyWord, setKeyWord] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (keyWord.trim() === '') {
      return;
    }
      onSubmit(keyWord);
    // setKeyWord('');
    // e.currentTarget.reset();
  };
  const handleKeyWordChange = e => {
    setKeyWord(e.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BsSearch/>
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleKeyWordChange}
        />
      </SearchForm>
    </>
  );
}
