import '../styles.css';

export function Button({ onClick }) {
  return (
    <button onClick={onClick} className="Button">
      Load more
    </button>
  );
}
