import { Link } from 'react-router-dom';
import {
  FilmCard,
  Poster,
  DetailsCard,
  FilmTitle,
  Datas,
  DatasTitle,
    AddTitle,
    AddList,
  AddItem
} from './FilmDataCard.styled';
export default function FilmDataCard({ film }) {
  return (
    <>
      <FilmCard>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt="poster"
        />
        <DetailsCard>
          <FilmTitle>
            {film.original_title} ({film.release_date})
          </FilmTitle>
          <Datas>User Score: {film.vote_average}</Datas>
          <DatasTitle>Overview</DatasTitle>
          <Datas>{film.overview}</Datas>
          <DatasTitle>Genres</DatasTitle>
          {/* <Datas>{film.genres}</Datas> */}
        </DetailsCard>
      </FilmCard>
      <AddTitle>Additional information</AddTitle>
      <AddList>
        <AddItem>
          <Link to={`/movies/${film.id}/cast`}>Cast</Link>
        </AddItem>
        <AddItem>
          <Link to={`/movies/${film.id}/reviews`}>Reviews</Link>
        </AddItem>
      </AddList>
    </>
  );
}
