import { Routes } from "react-router"
import ProductList from "./pages/ProductList"
import { Route } from "react-router"

export default function App() {
 return (
    <Routes>
      <Route path="/"element ={<ProductList/>} />
    </Routes>
  )
}

