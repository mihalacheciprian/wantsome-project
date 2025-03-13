
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./features/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/Login.tsx";
import { RequireAuth } from "./components/RequireAuth.tsx";
import "./index.scss";
import ProfilePage from "./components/ProfilePage.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<p> Route not found </p>} />
        <Route element={<RequireAuth />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
