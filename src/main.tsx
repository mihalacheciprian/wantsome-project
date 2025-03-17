import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./features/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
