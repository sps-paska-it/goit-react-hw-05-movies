import { useState } from 'react';
import { SearchFormStyled, BtnSearch, Input } from './FormSearch.styled';
import { FiSearch } from 'react-icons/fi';

export const FormSearch = ({ propSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Enter the name fo the country');
      return;
    }
    propSubmit(query);
  };

  return (
    <SearchFormStyled onSubmit={onSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Input
        type="text"
        name="movie"
        pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Please enter a valid movie name consisting of only letters and optionally separated by spaces, commas, periods, apostrophes, or hyphens."
        placeholder="The name of the movies"
        autoComplete="off"
        required
        onChange={e => setQuery(e.target.value.trim())}
      />
    </SearchFormStyled>
  );
};
