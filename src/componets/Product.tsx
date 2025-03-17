import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";

interface ProductProps {
  product: {
    id: number;
    images: string[];
    title: string;
    brand: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
  };
}

export default function Product({ product }: ProductProps) {
  return (
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
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              Review Score - {product.rating} <StarIcon color="warning" />
            </Typography>
          </Box>
          {product.stock < 10 && <Chip label="Low Stock" color="error" size="small" sx={{ mt: 1 }} />}
          <Button variant="contained" color="primary" sx={{ mt: 2, width: "100%" }}>
            <ShoppingBasketIcon sx={{ ml: 0.2 }} />
            Add it to your basket
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
