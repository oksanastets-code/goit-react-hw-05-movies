import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/Navigation/AppBar';
import HomeView from './views/HomeView';
import MovieView from './views/MovieView';
import NotFoundView from './views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies" element={<MovieView />}></Route>
        <Route element={<NotFoundView />}></Route>
      </Routes>
    </Container>
  );
}
