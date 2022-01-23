import { Link, useLocation } from 'react-router-dom';
export default function MoviesList({ movies }) {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
            <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location.pathname }}
                //   search={{ from: location.search }}
              >
                  {movie.original_title}
            </Link>
        </li>
      ))}
    </ul>
  );
}
