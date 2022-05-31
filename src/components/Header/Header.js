import styled from "styled-components";

export default function Header() {
  return <HeaderTitle>ToDo List</HeaderTitle>;
}

const HeaderTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: white;
  background-color: darkblue;
  padding: 1rem 0rem;
  margin: 0;
  margin-bottom: 0.2rem;
`;
