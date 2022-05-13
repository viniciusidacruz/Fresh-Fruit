import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";

import { theme } from "styles/theme";
import { GlobalStyle } from "styles/global";
import { useState } from "react";
import { Header } from "components/Header";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [showLogin, setShowLogin] = useState(false);

  const toggleSignIn = () => {
    setShowLogin(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <Header toggleSignIn={toggleSignIn} />
        <GlobalStyle />
        <Component {...pageProps} toggleSignIn={toggleSignIn} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
