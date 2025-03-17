import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../state/UserApiSlice";
import { useNavigate } from "react-router";

export default function Register() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });

  const [registerNewUser, { isLoading, isSuccess }] = registerUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await registerNewUser(userData).unwrap();
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "background.paper" }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        {isSuccess && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Registration successful! Redirecting to login...
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Age"
            name="age"
            type="number"
            value={userData.age}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading} sx={{ mt: 2 }}>
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </form>
      </Box>
    </Container>
  );
}
