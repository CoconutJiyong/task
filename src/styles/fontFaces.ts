import { css } from "@emotion/react";

export const fontFaces = css`
  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local("Noto Sans"),
      url("/fonts/NotoSans-Medium.ttf") format("truetype");
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Noto Sans"),
      url("/fonts/NotoSans-SemiBold.ttf") format("truetype");
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Noto Sans"), url("/fonts/NotoSans-Bold.ttf") format("truetype");
    unicode-range: U+0041-005A, U+0061-007A;
  }
`;
