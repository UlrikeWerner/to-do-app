import { useState } from "react";
import { FormContainer, FormInputText, FormInputSubmit } from "./Form.js";

export default function ToDoForm({ addItem }) {
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(newToDo);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="input-toDo">new ToDo:</label>
      <FormInputText
        id="inpute-toDo"
        type="text"
        value={newToDo}
        onChange={(event) => setNewToDo(event.target.value)}
      />
      <FormInputSubmit type="submit" value="add" />
    </FormContainer>
  );
}
