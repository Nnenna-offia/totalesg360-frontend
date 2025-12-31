import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
