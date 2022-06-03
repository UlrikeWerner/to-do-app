import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  ${({ editStyle }) =>
    editStyle
      ? "grid-template-columns: 4fr 1fr 1fr; column-gap: 0.25rem;"
      : "grid-template-columns: 2fr 4fr 1fr; grid-template-rows: 1fr 1fr; label { grid-area: 1 / 1 / 2 / 2 ;}"};
  justify-items: start;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
`;

const FormInputText = styled.input`
  grid-area: ${({ editStyle }) => (editStyle ? "" : "2 / 1 / 3 / 3")};
  justify-self: stretch;
`;

const FormInputSubmit = styled.input`
  grid-area: ${({ editStyle }) => (editStyle ? "" : "2 / 3 / 3 / 4")};
  justify-self: end;
  &:hover,
  &:active {
    transform: scale(1.1);
    background-color: lightblue;
  }
`;

export { FormContainer, FormInputText, FormInputSubmit };
