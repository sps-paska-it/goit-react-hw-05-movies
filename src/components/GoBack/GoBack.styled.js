import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  color: black;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: orange;
  }
`;
