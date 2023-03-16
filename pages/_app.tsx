import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";

import { globalStyles, theme } from "@/src/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
