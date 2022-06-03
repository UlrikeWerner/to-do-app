import React from "react";
import styled from "styled-components";
import { ToDoContainer, ButtonContainer } from "./Content.js";
import { useStore } from "../../Common/Hooks/useStore";

export default function ToDoContent({ id }) {
  const setCompleted = useStore((state) => state.setCompleted);
  const setArchived = useStore((state) => state.setArchived);
  const deleteItem = useStore((state) => state.deleteItem);
  const item = useStore((state) => state.toDos.find((item) => item.id === id));

  return (
    <ToDoContainer completed={item.completed}>
      <p>{item.text}</p>
      <ButtonContainer>
        <ButtonStyle
          archived={item.archived}
          type="button"
          onClick={() => {
            setCompleted(item.id);
          }}
        >
          {item.completed ? "uncomplete" : "complete"}
        </ButtonStyle>
        <ButtonStyle
          archived={item.archived}
          type="button"
          onClick={() => {
            if (item.completed) {
              setArchived(item.id);
            } else {
              deleteItem(item.id);
            }
          }}
        >
          {item.completed ? "archive" : "delete"}
        </ButtonStyle>
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
