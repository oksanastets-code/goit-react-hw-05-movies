import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [keyWord, setKeyWord] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (keyWord.trim() === '') {
      return;
    }
    onSubmit(keyWord);
    setKeyWord('');
    e.currentTarget.reset();
  };
  const handleKeyWordChange = e => {
    setKeyWord(e.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <label>Search</label>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleKeyWordChange}
        />
      </form>
    </>
  );
}
