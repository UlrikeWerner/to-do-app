import { useLocation } from "react-router-dom";
import { FooterUl, FooterLi } from "./FooterStyle.js";

export default function Footer() {
  const location = useLocation();
  return (
    <FooterUl>
      <FooterLi to="/" active={(location.pathname === "/").toString()}>
        Home
      </FooterLi>
      <FooterLi
        to="/archive"
        active={(location.pathname === "/archive").toString()}
      >
        Archive
      </FooterLi>
      <FooterLi
        to="/random"
        active={(location.pathname === "/random").toString()}
      >
        Random
      </FooterLi>
    </FooterUl>
  );
}
