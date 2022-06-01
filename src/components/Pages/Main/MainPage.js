import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Routes, Route } from "react-router-dom";

import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";
import ToDoForm from "../../Form/ToDoForm.js";
import Footer from "../../../Footer/Footer.js";

export default function Main() {
  const [toDos, setToDos] = useState(() => {
    const toDoList = localStorage.getItem("toDo-list");
    if (toDoList) {
      return JSON.parse(toDoList);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("toDo-list", JSON.stringify(toDos));
  }, [toDos]);

  function setCompleted(id) {
    const list = toDos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    setToDos(list);
  }

  function setArchived(id) {
    const list = toDos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          archived: true,
        };
      } else {
        return item;
      }
    });
    console.log(list);
    setToDos(list);
  }

  function deleteItem(id) {
    const newToDos = toDos.filter((item) => item.id !== id);
    setToDos(newToDos);
  }

  function addItem(newToDo) {
    const newItem = [
      ...toDos,
      {
        id: nanoid(),
        toDoText: newToDo,
        completed: false,
        archived: false,
      },
    ];
    setToDos(newItem);
  }

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header backgroundColor="darkblue" color="white" />
              <ToDoForm addItem={addItem} />
              {toDos
                .filter((item) => item.archived !== true)
                .map((item) => {
                  return (
                    <ToDoContent
                      key={item.id}
                      text={item.toDoText}
                      completed={item.completed}
                      setCompleted={() => setCompleted(item.id)}
                      setArchived={() => setArchived(item.id)}
                      deleteItem={() => deleteItem(item.id)}
                    />
                  );
                })}
            </>
          }
        />
        <Route />
        <Route
          path="/archive"
          element={
            <>
              <Header backgroundColor="darkblue" color="white" />
              <ToDoForm addItem={addItem} />
              {toDos
                .filter((item) => item.archived === true)
                .map((item) => {
                  return (
                    <ToDoContent
                      key={item.id}
                      text={item.toDoText}
                      completed={item.completed}
                      setCompleted={() => setCompleted(item.id)}
                      setArchived={() => setArchived(item.id)}
                      deleteItem={() => deleteItem(item.id)}
                    />
                  );
                })}
            </>
          }
        />
        <Route />
      </Routes>
      <Footer />
    </main>
  );
}
