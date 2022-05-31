import styled from "styled-components";

export default function ToDoContent({
  text,
  completed,
  setCompleted,
  setArchived,
  deleteItem,
}) {
  return (
    <ToDoContainer completed={completed}>
      <p>{text}</p>
      <Buttons>
        <button
          type="button"
          onClick={() => {
            setCompleted();
          }}
        >
          {completed ? "uncomplete" : "complete"}
        </button>
        <button
          type="button"
          onClick={() => {
            if (completed) {
              setArchived();
            } else {
              deleteItem();
            }
          }}
        >
          {completed ? "archive" : "delete"}
        </button>
      </Buttons>
    </ToDoContainer>
  );
}

const ToDoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 0.3rem;
  margin-top: 0.5rem;
  padding: 0 0.8rem;
  border: 1px solid black;
  background-color: ${({ completed }) => (completed ? "green" : "red")};
  font-size: 1.3rem;
  p {
    margin: 0.5rem 0.2rem;
  }
`;

const Buttons = styled.div`
  align-self: center;
`;
