import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-top: 15px;
  gap: 5px;
`;

export const StyledItem = styled.li`
  position: relative;
`;

export const LinkStyled = styled(Link)`
  color: rgba(0, 0, 0, 0);
  :hover {
    color: orange;
  }
`;

export const Img = styled.img`
  width: 200px;
`;

export const StyledTitle = styled.h3`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;
