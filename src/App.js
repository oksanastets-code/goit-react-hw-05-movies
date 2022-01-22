import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/Navigation/AppBar';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import NotFoundView from './views/NotFoundView';
import FilmDetailsView from './views/FilmDetailsView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies/:filmId" element={<FilmDetailsView />} />
        <Route path="/movies" element={<MoviesView />}></Route>
        {/* <Route path="*" element={<NotFoundView />}></Route> */}
      </Routes>
    </Container>
  );
}
