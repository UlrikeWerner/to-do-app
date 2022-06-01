import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";
import ToDoForm from "../../Form/ToDoForm.js";
import Footer from "../../../Footer/Footer.js";
import { ButtonStyle } from "../../ButtonStyle.js";

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

  const [randomDo, setRandomDo] = useState(0);

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

  function setRandom() {
    const minValue = Math.ceil(0);
    const maxValue = Math.floor(toDos.length);
    setRandomDo(Math.floor(Math.random() * (maxValue - minValue) + minValue));
  }

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header text="ToDo App" />
              <ToDoForm addItem={addItem} />
              {toDos
                .filter((item) => item.archived !== true)
                .map((item) => {
                  return (
                    <ToDoContent
                      key={item.id}
                      text={item.toDoText}
                      completed={item.completed}
                      archived={item.archived}
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
              <Header text="ToDo List Archive" />
              {toDos
                .filter((item) => item.archived === true)
                .map((item) => {
                  return (
                    <ToDoContent
                      key={item.id}
                      text={item.toDoText}
                      completed={item.completed}
                      archived={item.archived}
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
          path="/random"
          element={
            <>
              <Header text="ToDo List Random" />
              <ArchiveStyle>
                <ButtonStyle
                  type="button"
                  onClick={() => {
                    setRandom();
                  }}
                >
                  Shuffle
                </ButtonStyle>
                <p>Your random ToDo:</p>
              </ArchiveStyle>
              <ToDoContent
                key={toDos[randomDo].id}
                text={toDos[randomDo].toDoText}
                completed={toDos[randomDo].completed}
                archived={toDos[randomDo].archived}
                setCompleted={() => setCompleted(toDos[randomDo].id)}
                setArchived={() => setArchived(toDos[randomDo].id)}
                deleteItem={() => deleteItem(toDos[randomDo].id)}
              />
            </>
          }
        />
        <Route />
      </Routes>
      <Footer />
    </main>
  );
}

const ArchiveStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
`;
