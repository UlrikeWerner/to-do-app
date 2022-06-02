import { useState } from "react";
import { FormContainer, FormInputText, FormInputSubmit } from "./Form.js";
import { useStore } from "../Hooks/useStore.js";

export default function ToDoForm() {
  const [newToDo, setNewToDo] = useState("");

  const addToDo = useStore((state) => state.addToDo);

  return (
    <FormContainer
      onSubmit={(event) => {
        event.preventDefault();
        addToDo(newToDo);
        setNewToDo("");
      }}
    >
      <label htmlFor="input-toDo">new ToDo:</label>
      <FormInputText
        required
        id="inpute-toDo"
        type="text"
        value={newToDo}
        onChange={(event) => {
          setNewToDo(event.target.value);
        }}
      />
      <FormInputSubmit type="submit" value="add" />
    </FormContainer>
  );
}
