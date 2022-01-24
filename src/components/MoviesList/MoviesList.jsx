import { useLocation } from 'react-router-dom';
import { TrendMoviesList, MovieItem, LinkStyle } from './MovieList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();
  // console.log(location);
  return (
    <TrendMoviesList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <LinkStyle
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.original_title}
          </LinkStyle>
        </MovieItem>
      ))}
    </TrendMoviesList>
  );
}
