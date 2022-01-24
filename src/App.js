import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/Navigation/AppBar';

const Cast = lazy(() =>
  import('./components/AddInfo/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('./components/AddInfo/Reviews' /* webpackChunkName: "cast" */),
);
const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView.js' /* webpackChunkName: "movies-view" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
);
const FilmDetailsView = lazy(() =>
  import(
    './views/FilmDetailsView.js' /* webpackChunkName: "film-details-view" */
  ),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/movies/:filmId" element={<FilmDetailsView />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="/movies" element={<MoviesView />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
