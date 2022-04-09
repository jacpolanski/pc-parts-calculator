import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./scss/main.scss";
import { PartsProvider } from "./components/PartsContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PartsProvider>
      <App />
    </PartsProvider>
  </React.StrictMode>
);
