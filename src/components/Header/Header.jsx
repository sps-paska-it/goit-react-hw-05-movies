import { HeaderStyled, Link } from './Header.styled';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderStyled>
      <Outlet />
    </>
  );
};
