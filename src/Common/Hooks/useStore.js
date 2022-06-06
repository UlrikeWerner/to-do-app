import create from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const useStore = create(
  persist(
    (set) => {
      return {
        toDos: [],
        addToDo: (text, id) =>
          id
            ? set((state) => {
                return {
                  toDos: state.toDos.map((item) =>
                    item.id === id ? { ...item, text, edit: false } : item
                  ),
                };
              })
            : set((state) => {
                return {
                  toDos: [
                    ...state.toDos,
                    {
                      id: nanoid(),
                      text,
                      completed: false,
                      archived: false,
                      edit: false,
                    },
                  ],
                };
              }),
        toggleValue: (key, id) =>
          set((state) => {
            return {
              toDos: state.toDos.map((item) =>
                item.id === id ? { ...item, [key]: !item[key] } : item
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
