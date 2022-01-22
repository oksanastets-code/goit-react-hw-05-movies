import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';


export default function Cast() {
    let { filmId } = useParams();
    const [cast, setCast] = useState([]);
     useEffect(() => {
    moviesAPI.FetchFilmsCredits(filmId).then(r => {
      console.log(r.cast);
      setCast(r.cast);
    });
  }, [filmId]);
  return (
    <>
      <p>Cast</p>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={{ name }}
            />
            <p>Character: {character}</p>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
