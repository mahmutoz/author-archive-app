import React from "react";
import ReactDOM from "react-dom/client";
import "src/styles/main.scss";
import App from "src/App";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "src/context/MainContext";
import { AuthorProvider } from "src/context/AuthorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <AuthorProvider>
          <App />
        </AuthorProvider>
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>
);
