import { css } from "@emotion/react";

export const fonts = {
  medium14: css`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: "Noto Sans";
    line-height: 1.71428;
  `,
  medium18: css`
    font-size: 1.8rem;
    font-weight: 500;
    font-family: "Noto Sans";
    line-height: 1.55555;
  `,
  medium22: css`
    font-size: 2.2rem;
    font-weight: 500;
    font-family: "Noto Sans";
    line-height: 1.54545;
  `,
} as const;

export type FontType = typeof fonts;
