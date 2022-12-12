import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import { store } from "../store";

import "../styles/globals.css";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/aboutme')
    router.prefetch('/')
  }, [])

  return (
    <ThemeProvider attribute="class">
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
