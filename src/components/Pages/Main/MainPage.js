import React from "react";
import { Routes, Route } from "react-router-dom";
import { useStore } from "../../../Common/Hooks/useStore";

import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";
import ToDoForm from "../../Form/ToDoForm.js";
import ArchiveSite from "../Archive/ArchiveSite.js";
import RandomSite from "../Random/RandomSite.js";
import Footer from "../../Footer/Footer.js";

export default function Main() {
  const toDoList = useStore((state) => state.toDos);

  return (
    <main>
      <Header text="ToDo App" />
      <ToDoForm />
      {toDoList
        .filter((item) => item.archived !== true)
        .map((item) => {
          return <ToDoContent key={item.id} item={item} />;
        })}
    </main>
  );
}
