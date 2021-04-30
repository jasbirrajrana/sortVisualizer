import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, theme, ColorModeProvider } from "@chakra-ui/react";
import "./styles/main.scss";
import App from "./App";

ReactDOM.render(
  <ChakraProvider resetCSS theme={theme}>
    <ColorModeProvider
      options={{
        useSystemColorMode: false,
      }}
    ></ColorModeProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
