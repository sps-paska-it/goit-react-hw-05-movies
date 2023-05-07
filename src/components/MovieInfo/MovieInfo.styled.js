import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Box = styled.div`
  margin: 10px 0;
  display: flex;
  gap: 20px;
`;

export const Img = styled.img`
  width: 300px;
`;

export const BoxInfoMovie = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const BoxInfo = styled.div`
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  gap: 15px;
  border-top: 1px solid #9c9c9c;
  background-color: #e8e7e6;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0 10px 20px;
  gap: 10px;
  border-bottom: 1px solid #9c9c9c;
`;

export const LinkStyled = styled(Link)`
  font-weight: 500;
  :hover {
    color: orange;
  }
`;
