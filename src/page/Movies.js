import { useState } from 'react';

export const Movies = () => {
  const [queryMovie, seQuerytMovie] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // onAddContact(newContact);
    seQuerytMovie('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movie"
        value={queryMovie}
        pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Please enter a valid movie name consisting of only letters and optionally separated by spaces, commas, periods, apostrophes, or hyphens."
        placeholder="The name of the movies"
        required
        onChange={e => seQuerytMovie(e.target.value.trim())}
      />

      <button type="submit">Search</button>
    </form>
  );
};
