export default function Cast({ cast }) {
  return (
    <>
      <p>Cast</p>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={{ name }}
            />
            <p>Character: {character}</p>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
