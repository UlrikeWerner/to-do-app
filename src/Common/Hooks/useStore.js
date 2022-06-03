import create from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const useStore = create(
  persist(
    (set) => {
      return {
        toDos: [],
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
            return {
              toDos: state.toDos.filter((element) => element.id !== id),
            };
          });
        },
      };
    },
    { name: "ToDoList" }
  )
);

export { useStore };