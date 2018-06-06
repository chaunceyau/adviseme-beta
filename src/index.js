import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThroughProvider } from "react-through";

//
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ThroughProvider>
      <App />
    </ThroughProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
