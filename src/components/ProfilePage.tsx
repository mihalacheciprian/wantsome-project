import React, { useEffect, useState } from "react";
import { Container, Card, CardContent, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../features/hooks";
import { logOut } from "../features/authSlice";

interface User {
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: { color: string; type: string };
  address: { address: string; city: string; state: string };
  university: string;
  bank: { cardNumber: string; iban: string; currency: string };
  company: { name: string; department: string; title: string };
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Card sx={{ padding: 3, textAlign: "center" }}>
        <Avatar
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          sx={{ width: 120, height: 120, margin: "auto" }}
        />
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <h3>
          {user.company.title} at {user.company.name}
        </h3>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <div>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Birthdate:</strong> {user.birthDate}
              </p>
              <p>
                <strong>Blood Group:</strong> {user.bloodGroup}
              </p>
              <p>
                <strong>Height:</strong> {user.height} cm
              </p>
              <p>
                <strong>Weight:</strong> {user.weight} kg
              </p>
              <p>
                <strong>Eye Color:</strong> {user.eyeColor}
              </p>
              <p>
                <strong>Hair:</strong> {user.hair.color} ({user.hair.type})
              </p>
              <p>
                <strong>Address:</strong> {user.address.address},{" "}
                {user.address.city}, {user.address.state}
              </p>
              <p>
                <strong>University:</strong> {user.university}
              </p>
              <p>
                <strong>Bank:</strong> {user.bank.currency} (IBAN:{" "}
                {user.bank.iban})
              </p>
              <p>
                <strong>Card Number:</strong> {user.bank.cardNumber}
              </p>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("Logout clicked");
              dispatch(logOut());
              navigate("/login");
            }}
          >
            Log Out
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfilePage;
