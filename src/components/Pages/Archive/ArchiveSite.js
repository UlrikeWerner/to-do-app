import React from "react";
import { useStore } from "../../../Common/Hooks/useStore.js";
import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";

export default function ArchiveSite() {
  const toDoIds = useStore((state) =>
    state.toDos.filter((item) => item.archived).map((item) => item.id)
  );

  return (
    <>
      <Header text="ToDo Archive" />
      {toDoIds.length > 0 ? (
        toDoIds.map((id) => <ToDoContent key={id} id={id} />)
      ) : (
        <p>You have no archived task!</p>
      )}
    </>
  );
}
