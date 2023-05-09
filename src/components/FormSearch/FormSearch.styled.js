import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 250px;
  height: 20px;

  border-style: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;

  padding: 8px 32px 8px 8px;
  font: inherit;
  border-color: black;

  cursor: pointer;
`;

export const BtnSearch = styled.button`
  position: absolute;
  right: 3px;

  width: 30px;
  height: 30px;

  background-color: #fff;
`;
