import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { Provider } from "./components/ui/provider.tsx";


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      {/* <App /> */}
            <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>
);
