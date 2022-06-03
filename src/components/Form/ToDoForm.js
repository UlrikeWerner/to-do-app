import { useState } from "react";
import { FormContainer, FormInputText, FormInputSubmit } from "./FormStyle.js";
import { useStore } from "../../Common/Hooks/useStore.js";

export default function ToDoForm({ id }) {
  const [newToDo, setNewToDo] = useState("");
  const addToDo = useStore((state) => state.addToDo);

  return (
    <FormContainer
      onSubmit={(event) => {
        event.preventDefault();
        addToDo(newToDo, id);
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
      {id ? (
        <>
          <FormInputSubmit type="submit" value="save" />
          <FormInputSubmit type="button" value="cancel" />
        </>
      ) : (
        <FormInputSubmit type="submit" value="add" />
      )}
    </FormContainer>
  );
}
