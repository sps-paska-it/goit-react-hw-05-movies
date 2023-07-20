import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 12px;
  margin-bottom: 16px;
  background-color: #edfc68;
  border-radius: 10px;

  > nav {
    display: flex;
    margin-left: 15px;
    column-gap: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 7px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
