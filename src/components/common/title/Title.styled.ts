import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const EmotionTitle = styled.span`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.gray30};
    padding: 10px 0 10px 25px;
  `}
`;
