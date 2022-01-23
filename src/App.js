import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/Navigation/AppBar';
import Cast from './components/AddInfo/Cast';
import Reviews from './components/AddInfo/Reviews';
// import HomeView from './views/HomeView';
// import MoviesView from './views/MoviesView';
// import NotFoundView from './views/NotFoundView';
// import FilmDetailsView from './views/FilmDetailsView';

const HomeView = lazy(() => import('./views/HomeView.js'));
const MoviesView = lazy(() => import('./views/MoviesView.js'));
const NotFoundView = lazy(() => import('./views/NotFoundView.js'));
const FilmDetailsView = lazy(() => import('./views/FilmDetailsView.js'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
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
