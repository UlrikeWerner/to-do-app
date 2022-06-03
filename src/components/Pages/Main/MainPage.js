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
//import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

export default function Main() {
  const toDoList = useStore((state) => state.toDos);

  const [randomDo, setRandomDo] = useState(0);

  function setRandom() {
    const minValue = Math.ceil(0);
    const maxValue = Math.floor(toDoList.length);
    setRandomDo(Math.floor(Math.random() * (maxValue - minValue) + minValue));
  }

  function filterArchivedTest() {
    let returnList;
    const filterToDo = toDoList
      .filter((item) => item.archived === true)
      .map((item) => {
        return item;
      });

    if (filterToDo.length > 0) {
      console.log(filterToDo, filterToDo.length);
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
              {filterArchivedTest()}
            </>
          }
        />
        <Route />
        <Route
          path="/random"
          element={
            <>
              <Header text="ToDo Random" />
              {toDoList.length > 0 ? (
                <>
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
                  </ArchiveStyle>{" "}
                  <ToDoContent
                    key={toDoList[randomDo].id}
                    item={toDoList[randomDo]}
                  />
                </>
              ) : (
                <p>You have no taskes!</p>
              )}
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
