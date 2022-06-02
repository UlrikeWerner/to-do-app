import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Footer({ setRandom, toDos }) {
  return (
    <FooterUl>
      <FooterLi to="/">Home</FooterLi>
      <FooterLi to="/archive">Archive</FooterLi>
      <FooterLi to="/random">Random</FooterLi>
    </FooterUl>
  );
}

const FooterUl = styled.section`
  height: 4rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: darkblue;
  /*box-shadow: 0 0 8px 0 rgba(0, 0, 0, 5);
  border-radius: 5px;*/
  width: 95%;
`;

const FooterLi = styled(NavLink)`
  padding: 1em 0;
  list-style: none;
  text-decoration: none;
  color: white;
  &:hover,
  &:active {
    transform: scale(1.1);
    color: lightblue;
  }
`;
