import { Routes } from "react-router";
import ProductList from "./pages/ProductList";
import { Route } from "react-router";
import { Login } from "./pages/Login";
import { RequireAuth } from "./components/RequireAuth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<p>Route not found</p>} />
      <Route element={<RequireAuth />} />
    </Routes>
  );
}
