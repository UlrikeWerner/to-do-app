import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => {
  return {
    toDos: [
      { id: nanoid(), text: "test", completed: false, archived: false },
      { id: nanoid(), text: "test", completed: false, archived: false },
    ],
    addToDo: (text) =>
      set((state) => {
        return {
          toDos: [
            ...state.toDos,
            {
              id: nanoid(),
              text,
              completed: false,
              archived: false,
            },
          ],
        };
      }),
  };
});

export { useStore };
