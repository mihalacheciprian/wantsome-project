import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  Pagination,
  Grid,
  Grid2,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { getProducts, ProductsInterface } from "../features/products.api";
import { Spinner } from "../features/Spinner";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export function ProductList() {
  const [page, setPage] = useState(1);
  const pageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const skip = page * 12;
  const { isFetching, data } = getProducts({ limit: 12, skip });
  const { products } = data || {};

  if (isFetching) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (!data || data?.length === 0) {
    return (
      <Box sx={{ padding: 5 }}>
        <Typography variant="h6">Not products available.</Typography>
      </Box>
    );
  }
  const pageLimit = Math.floor(data?.total / 12);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      <Grid container spacing={3} justifyContent="center">
        {products?.map((product: ProductsInterface) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card key={product.id} sx={{ maxWidth: 300, m: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.images[0] || "https://via.placeholder.com/200"}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.brand} - {product.category}
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{ mt: 1 }}>
                  {product.price} RON (Discount: {product.discountPercentage}%)
                </Typography>
                <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                  <StarIcon color="warning" />
                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                    {/* {product.rating} ({product.reviews.length} reviews) */}
                  </Typography>
                </Box>
                {product.stock < 10 && (
                  <Chip
                    label="Low Stock"
                    color="error"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                )}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, width: "100%" }}
                >
                  <ShoppingBasketIcon sx={{ ml: 0.2 }} />
                  Add it to your basket
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={pageLimit}
        page={page}
        onChange={pageChange}
        size="large"
      />
    </Box>
  );
}
