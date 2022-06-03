import styled from "styled-components";

const ToDoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 0.3rem;
  margin-top: 0.5rem;
  padding: 0.25rem 0.8rem;
  border: 1px solid black;
  background-color: ${({ completed }) => (completed ? "green" : "red")};
  font-size: 1.2rem;
  p {
    margin: 0.5rem 0.2rem;
  }
`;

export { ToDoContainer };
