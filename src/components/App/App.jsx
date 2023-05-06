import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from 'pages/Home';
import { MoviesSearch } from 'pages/MoviesSearch';
import { Header } from 'components/Header/Header';
import { Movie } from 'pages/Movie';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesSearch />} />
          <Route path="/movies/:movieId" element={<Movie />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
