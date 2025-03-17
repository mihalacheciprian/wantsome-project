import Pagination from "@mui/material/Pagination";
import { getProducts } from "../features/productApiSlice";
import { useEffect, useState } from "react";
import Product from "../componets/Product";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  type UserData = {
    role: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  };

  const [savedUser, setSavedUser] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const limit = 12;
  const skip = (page - 1) * limit;

  const { data, isLoading } = getProducts({ limit, skip });
  const products = data?.products || [];
  const totalPages = Math.ceil((data?.total || 0) / limit);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
}
