import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  label {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

const FormInputText = styled.input`
  grid-area: 2 / 1 / 3 / 3;
  justify-self: stretch;
`;

const FormInputSubmit = styled.input`
  grid-area: 2 / 3 / 3 / 4;
  justify-self: end;
`;

export { FormContainer, FormInputText, FormInputSubmit };
