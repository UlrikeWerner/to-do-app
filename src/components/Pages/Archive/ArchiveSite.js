import React from "react";
import { useStore } from "../../../Common/Hooks/useStore.js";
import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";

export default function ArchiveSite() {
  const toDoList = useStore((state) => state.toDos);

  function filterArchivedTest() {
    let returnList;
    const filterToDo = toDoList
      .filter((item) => item.archived === true)
      .map((item) => {
        return item;
      });

    if (filterToDo.length > 0) {
      returnList = filterToDo.map((item) => {
        return <ToDoContent key={item.id} item={item} />;
      });
    } else {
      console.log("no archive");
      returnList = <p>You have no archived task!</p>;
    }
    return returnList;
  }
  return (
    <>
      <Header text="ToDo Archive" />
      {filterArchivedTest()}
    </>
  );
}
