import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const TitleTd = styled.td`
  ${({ theme }) => css`
    width: 200px;
    height: 100px;
    border-bottom: 1px solid ${theme.colors.gray10};
    background-color: ${theme.colors.gray20};
  `};
`;

export const BodyTd = styled.td`
  ${({ theme }) => css`
    ${theme.fonts.medium14};
    padding: 0 20px;
    border-bottom: 1px solid ${theme.colors.gray10};
  `};
`;

export const ResetButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.medium22};
    padding: 5px 10px;
    margin: 0 0 10px 0;
    border-radius: 4px;
    cursor: pointer;
  `};
`;

export const TagWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const TagItem = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.medium14};
    display: flex;
    column-gap: 10px;
    padding: 10px 20px;
    border: 1px solid ${theme.colors.black};
    border-radius: 4px;

    & > span {
      cursor: pointer;
    }
  `};
`;

export const ButtonWrapper = styled.div``;
