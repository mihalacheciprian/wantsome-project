import { Routes } from "react-router"
import ProductList from "./pages/ProductList"
import { Route } from "react-router"
import Register from "./pages/Register"

export default function App() {
  return (
    <Routes>
      <Route path="/"element ={<ProductList/>} />
      <Route path="/register" element = {<Register/>}/>
    </Routes>
  );
}
