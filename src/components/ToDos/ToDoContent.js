import React from "react";
import styled from "styled-components";
import { ToDoContainer, ButtonContainer } from "./Content.js";

export default function ToDoContent({
  text,
  completed,
  archived,
  setCompleted,
  setArchived,
  deleteItem,
}) {
  return (
    <ToDoContainer completed={completed}>
      <p>{text}</p>
      <ButtonContainer>
        <ButtonStyle
          archived={archived}
          type="button"
          onClick={() => {
            setCompleted();
          }}
        >
          {completed ? "uncomplete" : "complete"}
        </ButtonStyle>
        <ButtonStyle
          archived={archived}
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
