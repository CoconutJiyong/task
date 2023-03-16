import "@emotion/react";
import { theme } from "../src/styles/themes/theme";

type CustomTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
