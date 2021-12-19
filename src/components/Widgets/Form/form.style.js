import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  /* justify-content: center; */
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0 ${props => props.padX || "1em"};
  font-size: 13px;
  label {
    color: #000;
  }
  input,
  .list-btn {
    box-sizing: border-box;
    height: 38px;
    padding-bottom: 0.5em;
  }
`;
