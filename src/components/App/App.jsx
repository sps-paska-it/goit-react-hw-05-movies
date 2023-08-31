import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { Header } from 'components/Header/Header';

const Home = lazy(() => import('../../pages/Home/Home'));
const MoviesSearch = lazy(() => import('../../pages/MoviesSearch'));
const Movie = lazy(() => import('../../pages/Movie'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <>
      {' '}
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
