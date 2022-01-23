import { Link } from 'react-router-dom';
export default function MoviesList({ movies }) {
  return (<ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
      </li>
    ))}
  </ul>);
}
