import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const EmotionInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 10px 5px;
    border: none;

    border-bottom: 2px solid ${theme.colors.gray30};

    :focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.colors.gray30};
    }
  `}
`;
