import React from "react";
import { useStore } from "../../../Common/Hooks/useStore";

import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";
import ToDoForm from "../../Form/ToDoForm.js";

export default function Main() {
  const toDoIds = useStore((state) =>
    state.toDos.filter((item) => !item.archived).map((item) => item.id)
  );

  return (
    <main>
      <Header text="ToDo App" />
      <ToDoForm />
      {toDoIds.map((id) => {
        return <ToDoContent key={id} id={id} />;
      })}
    </main>
  );
}
