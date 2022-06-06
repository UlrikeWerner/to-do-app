import styled from "styled-components";

const ButtonStyle = styled.button`
  align-self: center;
  &:hover,
  &:active {
    transform: scale(1.1);
    background-color: lightblue;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  column-gap: 0.25rem;
`;

export { ButtonStyle, ButtonContainer };
