import { useState } from "react";

export default function ToDoForm({ addItem }) {
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(newToDo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-toDo">new ToDo:</label>
      <input
        id="inpute-toDo"
        type="text"
        value={newToDo}
        onChange={(event) => setNewToDo(event.target.value)}
      />
      <input type="submit" value="add" />
    </form>
  );
}
