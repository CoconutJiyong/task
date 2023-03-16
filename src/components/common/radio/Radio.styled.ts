import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const EmootionRadio = styled.input`
  ${({ theme }) => css`
    display: none;
    & + label {
      display: inline-block;
      font-size: 2rem;
      padding: 0.75em 1.5em;
      line-height: 140%;
      text-align: center;
      background-color: ${theme.colors.gray20};
      cursor: pointer;
    }

    &:checked + label {
      border-color: ${theme.colors.blue};
      background-color: ${theme.colors.blue};
      color: ${theme.colors.black};
    }
  `}
`;
