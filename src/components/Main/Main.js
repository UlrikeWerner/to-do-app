import { React, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Main() {
  const [toDos, setToDos] = useState(() => {
    const toDoList = localStorage.getItem("toDo-list");
    if (toDoList) {
      return JSON.parse(toDoList);
    } else {
      return [
        {
          id: nanoid(),
          toDoText: "Homework: ToDo App",
          completed: false,
          archived: false,
        },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("toDo-list", JSON.stringify(toDos));
  }, [toDos]);

  return <p>form</p>;
}
