import { useEffect } from 'react'
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import { store } from "../store";

import "../styles/globals.css";
import "animate.css/animate.min.css"

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
