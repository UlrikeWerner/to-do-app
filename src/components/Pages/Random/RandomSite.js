import React, { useState } from "react";
import { useStore } from "../../../Common/Hooks/useStore.js";

import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";
import { ButtonStyle } from "../../ButtonStyle.js";
import { RandomContainer } from "./RandomStyle.js";

export default function RandomSite() {
  const toDoList = useStore((state) => state.toDos);
  const filterList = toDoList.filter((item) => !item.completed);
  const [randomDo, setRandomDo] = useState(setRandom());

  function setRandom() {
    const minValue = Math.ceil(0);
    const maxValue = Math.floor(filterList.length);
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
  }

  return (
    <>
      <Header text="ToDo Random" />
      {filterList.length > 0 ? (
        <>
          <RandomContainer>
            <ButtonStyle
              type="button"
              onClick={() => {
                setRandomDo(setRandom());
              }}
            >
              Shuffle
            </ButtonStyle>
            <p>Your random ToDo:</p>
          </RandomContainer>{" "}
          <ToDoContent
            key={filterList[randomDo].id}
            id={filterList[randomDo].id}
          />
        </>
      ) : (
        <p>You have no tasks!</p>
      )}
    </>
  );
}
