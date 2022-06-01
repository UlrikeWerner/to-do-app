import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <FooterUl>
      <FooterLi to="/">Home</FooterLi>
      <FooterLi to="/archive">Archive</FooterLi>
    </FooterUl>
  );
}

const FooterUl = styled.div`
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: lightyellow;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 5);
  border-radius: 5px;
  width: 80%;
`;

const FooterLi = styled(NavLink)`
  padding: 1em 0;
  list-style: none;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.1);
    color: lightblue;
  }
  &.active {
    transform: scale(1.1);
    color: lightblue;
  }
`;
