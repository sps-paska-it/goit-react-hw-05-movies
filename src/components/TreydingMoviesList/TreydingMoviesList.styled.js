import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  color: orange;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  gap: 15px;
`;

export const StyledItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  color: orange;

  :hover .overlay,
  :focus .overlay {
    transform: translateY(-100%);
  }
`;

export const Img = styled.img`
  width: 200px;
`;

export const StyledGradient = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  height: 30%;
  background-color: rgba(22, 22, 22, 0.8);
`;

export const StyledTitle = styled.h3`
  color: orange;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
