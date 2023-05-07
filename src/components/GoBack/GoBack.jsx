import { BsBoxArrowLeft } from 'react-icons/bs';
import { StyledLink } from './GoBack.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsBoxArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
