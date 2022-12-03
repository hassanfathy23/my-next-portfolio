import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import { store } from "../store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
