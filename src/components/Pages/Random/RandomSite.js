import React, { useState } from "react";
import { useStore } from "../../../Common/Hooks/useStore.js";

import Header from "../../Header/Header.js";
import ToDoContent from "../../ToDos/ToDoContent.js";
import { ButtonStyle } from "../../ButtonStyle.js";
import { RandomContainer } from "./RandomStyle.js";

export default function RandomSite() {
  const toDoList = useStore((state) => state.toDos);
  const [randomDo, setRandomDo] = useState(0);

  function setRandom() {
    const minValue = Math.ceil(0);
    const maxValue = Math.floor(toDoList.length);
    setRandomDo(Math.floor(Math.random() * (maxValue - minValue) + minValue));
  }

  return (
    <>
      <Header text="ToDo Random" />
      {toDoList.length > 0 ? (
        <>
          <RandomContainer>
            <ButtonStyle
              type="button"
              onClick={() => {
                setRandom();
              }}
            >
              Shuffle
            </ButtonStyle>
            <p>Your random ToDo:</p>
          </RandomContainer>{" "}
          <ToDoContent key={toDoList[randomDo].id} id={toDoList[randomDo].id} />
        </>
      ) : (
        <p>You have no taskes!</p>
      )}
    </>
  );
}
