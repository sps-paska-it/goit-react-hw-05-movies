import { Route, Routes } from 'react-router-dom';
import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { Header, Link } from './App.styled';

export const App = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
