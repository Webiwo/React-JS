import styled, { css } from "styled-components";

const subColor = "#636b91";
const mainColor = "black";
const letterSpacing = "1.5px";

const shrinkLabelStyles = css`
  top: -1em;
  font-size: 1.1rem;
  letter-spacing: ${letterSpacing};
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  position: absolute;
  left: 5px;
  top: 10px;
  color: ${subColor};
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: ${letterSpacing};
  pointer-events: none;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin: 1.5em 0;
  padding: 10px 10px 10px 4px;
  background-color: white;
  color: ${subColor};
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 2.5em 0;

  input[type="password"] {
    letter-spacing: $letter-spacing;
  }
`;
