export default function ToDoContent({
  text,
  completed,
  setCompleted,
  setArchived,
  deleteItem,
}) {
  return (
    <section>
      <p>{text}</p>
      <button
        type="button"
        onClick={() => {
          setCompleted();
        }}
      >
        {completed ? "uncomplete" : "complete"}
      </button>
      <button
        type="button"
        onClick={() => {
          if (completed) {
            setArchived();
          } else {
            deleteItem();
          }
        }}
      >
        {completed ? "archive" : "delete"}
      </button>
    </section>
  );
}
