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
    setCompleted: (id) =>
      set((state) => {
        return {
          toDos: state.toDos.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
          ),
        };
      }),
    setArchived: (id) =>
      set((state) => {
        return {
          toDos: state.toDos.map((item) =>
            item.id === id ? { ...item, archived: !item.archived } : item
          ),
        };
      }),
    deleteItem: (id) => {
      set((state) => {
        return { toDos: state.toDos.filter((element) => element.id !== id) };
      });
    },
  };
});

export { useStore };
