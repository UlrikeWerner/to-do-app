import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../Hooks/useStore";

import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";
import ToDoForm from "../../Form/ToDoForm.js";
import Footer from "../../Footer/Footer.js";
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

  const toDoList = useStore((state) => state.toDos);

  const [randomDo, setRandomDo] = useState(0);

  function setRandom() {
    const minValue = Math.ceil(0);
    const maxValue = Math.floor(toDoList.length);
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
              <ToDoForm />
              {toDoList
                .filter((item) => item.archived !== true)
                .map((item) => {
                  return <ToDoContent key={item.id} item={item} />;
                })}
            </>
          }
        />
        <Route />
        <Route
          path="/archive"
          element={
            <>
              <Header text="ToDo Archive" />
              {toDoList
                .filter((item) => item.archived === true)
                .map((item) => {
                  return <ToDoContent key={item.id} item={item} />;
                })}
            </>
          }
        />
        <Route />
        <Route
          path="/random"
          element={
            <>
              <Header text="ToDo Random" />
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
                key={toDoList[randomDo].id}
                item={toDoList[randomDo]}
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
