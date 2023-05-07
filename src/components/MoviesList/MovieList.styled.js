import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 15px;
  gap: 5px;
`;

export const LinkStyled = styled(Link)`
  :hover {
    color: orange;
  }
`;
