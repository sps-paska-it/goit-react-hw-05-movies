import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
// import { Home } from 'pages/Home';
// import { MoviesSearch } from 'pages/MoviesSearch';
import { Header } from 'components/Header/Header';
// import { Movie } from 'pages/Movie';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';

const Home = lazy(() => import('../../pages/Home'));
const MoviesSearch = lazy(() => import('../../pages/MoviesSearch'));
const Movie = lazy(() => import('../../pages/Movie'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesSearch />} />
          <Route path="/movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
