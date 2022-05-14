import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";

import { CartProvider } from "contexts/cart";
import { ModalProvider } from "contexts/modal";
import { SearchProvider } from "contexts/search";

import { Header } from "components/Header";
import { Footer } from "components/Footer";

import { theme } from "styles/theme";
import { GlobalStyle } from "styles/global";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <CartProvider>
          <ModalProvider>
            <SessionProvider session={session}>
              <Header />
              <GlobalStyle />
              <ToastContainer />
              <Component {...pageProps} />
              <Footer />
            </SessionProvider>
          </ModalProvider>
        </CartProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default MyApp;
