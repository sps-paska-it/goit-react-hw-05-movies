import { Button, List } from './Pagination.styled';

export const Pagination = ({ amount }) => {
  const arr = [];
  for (let index = 0; index < amount; index++) {
    arr.push({ index });
  }
  return (
    <>
      <List>
        {arr.map(index => {
          return (
            <li key={index}>
              <Button />
            </li>
          );
        })}
      </List>
    </>
  );
};
