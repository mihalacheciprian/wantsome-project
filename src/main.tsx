
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
);
