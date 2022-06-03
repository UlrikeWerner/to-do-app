import React from "react";
import styled from "styled-components";
import { ToDoContainer, ButtonContainer } from "./Content.js";
import { useStore } from "../../Common/Hooks/useStore";

export default function ToDoContent({ id }) {
  const setCompleted = useStore((state) => state.setCompleted);
  const setArchived = useStore((state) => state.setArchived);
  const setEdit = useStore((state) => state.setEdit);
  const deleteItem = useStore((state) => state.deleteItem);
  const item = useStore((state) => state.toDos.find((item) => item.id === id));

  return (
    <ToDoContainer completed={item.completed}>
      <p>{item.text}</p>
      <ButtonContainer>
        {item.completed ? (
          <>
            <ButtonStyle
              archived={item.archived}
              type="button"
              onClick={() => {
                setCompleted(item.id);
              }}
            >
              uncomplete
            </ButtonStyle>
            <ButtonStyle
              archived={item.archived}
              type="button"
              onClick={() => {
                setArchived(item.id);
              }}
            >
              archive
            </ButtonStyle>
          </>
        ) : (
          <>
            <ButtonStyle
              archived={item.archived}
              type="button"
              onClick={() => {
                setCompleted(item.id);
              }}
            >
              complete
            </ButtonStyle>
            <ButtonStyle
              edit={item.edit}
              type="button"
              onClick={() => {
                setEdit(item.id);
              }}
            >
              edit
            </ButtonStyle>
            <ButtonStyle
              archived={item.archived}
              type="button"
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              delete
            </ButtonStyle>
          </>
        )}
      </ButtonContainer>
    </ToDoContainer>
  );
}

const ButtonStyle = styled.button`
  display: ${({ archived }) => (archived ? "none" : "")};
  &:hover,
  &:active {
    transform: scale(1.1);
    background-color: lightblue;
  }
`;
