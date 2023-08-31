import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderStyled, Link } from './Header.styled';
// import { SvgLight, SvgLogIn, SvgLogo, SvgNight } from './SvgLogo';
import { SvgLogo } from './SvgLogo';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <SvgLogo />
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
        {/* <SvgLogIn />
        <SvgLight />
        <SvgNight /> */}
      </HeaderStyled>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
