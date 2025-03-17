import { useState, useEffect } from "react";
import Product from "./Product";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid2";

interface Product {
  id: number;
}

export default function PageProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className="products-container">
        <Grid container spacing={2}>
          {currentProducts.map((product: Product) => (
            <Grid size={3}>
              <Product key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      </div>

      <Pagination count={10} page={currentPage} onChange={handleChange} />
    </div>
  );
}
