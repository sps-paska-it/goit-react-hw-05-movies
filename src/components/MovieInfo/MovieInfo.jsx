export const MovieInfo = ({ belongs_to_collection, title, overview }) => {
  return (
    <>
      <div>
        <img src={belongs_to_collection} alt="" />
        <div>
          <h2>{title}</h2>
          <p>User Score: </p>
          <b>Overview</b>
          <p>{overview} </p>
          <b>Genres</b>
          <p>description </p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>Щось прийде 1</li>
          <li>Щось прийде 2</li>
        </ul>
      </div>{' '}
    </>
  );
};
