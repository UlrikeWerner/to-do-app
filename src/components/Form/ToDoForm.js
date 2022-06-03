import { useState } from "react";
import { FormContainer, FormInputText, FormInputSubmit } from "./FormStyle.js";
import { useStore } from "../../Common/Hooks/useStore.js";

export default function ToDoForm({ id }) {
  const item = useStore((state) => state.toDos.find((item) => item.id === id));
  const [newToDo, setNewToDo] = useState(id ? item.text : "");
  const addToDo = useStore((state) => state.addToDo);
  const setEdit = useStore((state) => state.setEdit);
  const edit = id ? true : false;

  return (
    <FormContainer
      editStyle={edit}
      onSubmit={(event) => {
        event.preventDefault();
        addToDo(newToDo, id);
        setNewToDo("");
      }}
    >
      {edit ? "" : <label htmlFor="input-toDo">new ToDo:</label>}
      <FormInputText
        editStyle={edit}
        required
        id="inpute-toDo"
        type="text"
        value={newToDo}
        onChange={(event) => {
          setNewToDo(event.target.value);
        }}
      />
      {edit ? (
        <>
          <FormInputSubmit editStyle={edit} type="submit" value="save" />
          <FormInputSubmit
            editStyle={edit}
            type="button"
            value="cancel"
            onClick={() => {
              setEdit(id);
            }}
          />
        </>
      ) : (
        <FormInputSubmit editStyle={edit} type="submit" value="add" />
      )}
    </FormContainer>
  );
}
