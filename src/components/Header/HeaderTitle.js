import styled from "styled-components";

const HeaderTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 1rem 0rem;
  margin: 0;
  margin-bottom: 0.2rem;
`;

export { HeaderTitle };
