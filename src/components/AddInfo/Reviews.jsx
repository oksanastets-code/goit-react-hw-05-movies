export default function Reviews({ reviews }) {
  return (
    <>
      <p>Reviews</p>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
