import React from "react";
import { HeaderTitle } from "./HeaderTitle.js";

export default function Header({ backgroundColor, color }) {
  return (
    <HeaderTitle backgroundColor={backgroundColor} color={color}>
      ToDo List
    </HeaderTitle>
  );
}
