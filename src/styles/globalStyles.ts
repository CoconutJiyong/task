import { css } from "@emotion/react";

import { fontFaces } from "./fontFaces";
import { resetCss } from "./reset";

export const globalStyles = css`
  ${fontFaces};
  ${resetCss};
`;
