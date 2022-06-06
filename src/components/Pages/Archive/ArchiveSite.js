import React from "react";
import { useStore } from "../../../Common/Hooks/useStore.js";
import { useState } from "react";
import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";
import {
  FormContainer,
  FormInputText,
  FormInputSubmit,
} from "../../Form/FormStyle.js";

export default function ArchiveSite() {
  const [input, setInput] = useState("");
  const archivedToDos = useStore((state) =>
    state.toDos.filter((item) => item.archived)
  );

  return (
    <>
      <Header text="ToDo Archive" />
      <FormContainer>
        <label htmlFor="filterInput">Filter:</label>
        <FormInputText
          id="filterInput"
          type="text"
          onKeyUp={(event) => {
            setInput(event.target.value.toLowerCase());
          }}
        ></FormInputText>
      </FormContainer>
      {archivedToDos.length > 0 ? (
        archivedToDos
          .filter((item) => {
            return item.text.toLowerCase().includes(input);
          })
          .map((item) => <ToDoContent key={item.id} id={item.id} />)
      ) : (
        <p>You have no archived task!</p>
      )}
    </>
  );
}
