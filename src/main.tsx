import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ViewContextProvider } from "./context/ViewContext";
import { FormContextProvider } from "./context/FormContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ViewContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </ViewContextProvider>
  </React.StrictMode>
);
