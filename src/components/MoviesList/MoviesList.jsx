import { Link } from 'react-router-dom';
export default function MoviesList({ movies, location }) {
    
  return (<ul>
    {movies.map(movie => (
      <li key={movie.id}>
            <Link to={{
                pathname: `/movies/${movie.id}`,
                state: { from:  location }
            }}>{movie.original_title}</Link>
      </li>
    ))}
  </ul>);
}
