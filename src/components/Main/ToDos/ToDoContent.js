import React from "react";
import { ToDoContainer, Buttons } from "./Content.js";

export default function ToDoContent({
  text,
  completed,
  setCompleted,
  setArchived,
  deleteItem,
}) {
  return (
    <ToDoContainer completed={completed}>
      <p>{text}</p>
      <Buttons>
        <button
          type="button"
          onClick={() => {
            setCompleted();
          }}
        >
          {completed ? "uncomplete" : "complete"}
        </button>
        <button
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
        </button>
      </Buttons>
    </ToDoContainer>
  );
}
