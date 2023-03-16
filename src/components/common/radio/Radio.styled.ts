import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const EmootionRadio = styled.input`
  display: none;
  & + label {
    font-size: 2rem;
    padding: 0.75em 1.5em;
    display: inline-block;
    background-color: #fff;
    line-height: 140%;
    text-align: center;
    cursor: pointer;
  }

  &:checked + label {
    background-color: #4b9dea;
    color: #fff;
    border-color: #4b9dea;
  }
`;
