import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = ({ loading }) => {
  return (
    <ClipLoader
      color="orange"
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
