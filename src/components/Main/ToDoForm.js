import { useState } from "react";
import styled from "styled-components";

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

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  label {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

const FormInputText = styled.input`
  grid-area: 2 / 1 / 3 / 3;
  justify-self: stretch;
`;

const FormInputSubmit = styled.input`
  grid-area: 2 / 3 / 3 / 4;
  justify-self: end;
`;
