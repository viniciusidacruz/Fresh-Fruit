import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";

import { ModalProvider } from "contexts/modal";

import { Header } from "components/Header";

import { theme } from "styles/theme";
import { GlobalStyle } from "styles/global";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <SessionProvider session={session}>
          <Header />
          <GlobalStyle />
          <Component {...pageProps} />
        </SessionProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
