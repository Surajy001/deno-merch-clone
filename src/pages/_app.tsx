import React from "react";
import type { AppProps } from "next/app";

import {ChakraProvider} from "@chakra-ui/react"
import { Provider } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
// css
import "../styles/globals.css";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}