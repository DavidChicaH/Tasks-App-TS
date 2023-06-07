import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootswatch/dist/materia/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App title="React And Typescript"/>
  </React.StrictMode>
);
