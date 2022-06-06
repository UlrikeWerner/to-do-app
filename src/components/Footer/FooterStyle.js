import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterUl = styled.section`
  height: 4rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: darkblue;
  width: 95%;
`;

const FooterLi = styled(NavLink)`
  padding: 1em 0;
  list-style: none;
  text-decoration: none;
  color: ${({ active }) => (active === "true" ? "lightblue" : "white")};
  &:hover,
  &:active {
    transform: scale(1.1);
    color: lightblue;
  }
`;

export { FooterUl, FooterLi };
