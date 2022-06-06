import React from "react";
import styled from "styled-components";
import { ToDoContainer } from "./Content.js";
import { useStore } from "../../Common/Hooks/useStore";
import ToDoForm from "../Form/ToDoForm.js";

export default function ToDoContent({ id }) {
  const toggle = useStore((state) => state.toggleValue);
  const deleteItem = useStore((state) => state.deleteItem);
  const item = useStore((state) => state.toDos.find((item) => item.id === id));

  return (
    <ToDoContainer completed={item.completed}>
      {item.edit ? (
        <ToDoForm id={item.id} />
      ) : (
        <>
          <span>{item.text}</span>
          <ButtonContainer>
            {item.completed ? (
              <>
                <ButtonStyle
                  archived={item.archived}
                  type="button"
                  onClick={() => {
                    toggle("completed", item.id);
                  }}
                >
                  uncomplete
                </ButtonStyle>
                <ButtonStyle
                  archived={item.archived}
                  type="button"
                  onClick={() => {
                    toggle("archived", item.id);
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
                    toggle("completed", item.id);
                  }}
                >
                  complete
                </ButtonStyle>
                <ButtonStyle
                  edit={item.edit}
                  type="button"
                  onClick={() => {
                    toggle("edit", item.id);
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
        </>
      )}
    </ToDoContainer>
  );
}

const ButtonStyle = styled.button`
  align-self: center;
  display: ${({ archived }) => (archived ? "none" : "")};
  &:hover,
  &:active {
    transform: scale(1.1);
    background-color: lightblue;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  column-gap: 0.25rem;
`;
