import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./scss/main.scss";
import { PartsProvider } from "./components/PartsContext";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PartsProvider>
        <App />
      </PartsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
