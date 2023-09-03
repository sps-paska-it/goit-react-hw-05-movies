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
  overflow: hidden;
`;

export const LinkStyled = styled(Link)`
  color: rgba(0, 0, 0, 0);
  :hover {
    color: orange;
  }

  :hover + .overlay,
  :focus + .overlay {
    transform: translateY(-100%);
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

export const StyledGradient = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  bottom: 0;
  height: 30%;
  width: 100%;
  background-color: #161616;
`;
