import { Link } from 'react-router-dom';
export default function FilmDataCard({ film }) { 
    return (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="poster" />
          <h2>{film.original_title} ({ film.release_date})</h2>
          <p>User Score: { film.vote_average}</p>        
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Genres</h3>
            {/* <p>{film.genres}</p> */}
            <hr />
            <h4>Additional information</h4>
            <ul>
                <li>
                    <Link to={`/movies/${film.id}/cast`}>Cast</Link>
                </li>
                <li>
                    <Link to={`/movies/${film.id}/reviews`}>Reviews</Link>
                </li>
            </ul>
            <hr />
            {/* <Outlet/> */}
        </>
    )

}