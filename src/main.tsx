<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./features/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/Login.tsx";
import { RequireAuth } from "./components/RequireAuth.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<p> Route not found </p>}></Route>
        <Route element={<RequireAuth />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { store } from "./state/store.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
>>>>>>> e666d14 (Add MUI icons and refactor product listing structure)
);
