import {
  Button,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../features/hooks";
import { useLoginMutation } from "../features/authApiSlice";
import { setCredentials } from "../features/authSlice";
import { useNavigate } from "react-router";
import "./Login.scss";

type UserData = {
  role: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};

export function Login() {
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [savedUser, setSavedUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken") ||
      localStorage.getItem("refreshToken") ||
      sessionStorage.getItem("refreshToken");

    if (!token) {
      navigate("/login");
    } else {
      setSavedUser(token);
    }
  }, []);

  useEffect(() => {
    if (!savedUser) return;

    setLoading(true);
    fetch("https://dummyjson.com/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${savedUser}`,
      },
    })
      .then((res) => res.json())
      .then((data2) => setUserData(data2))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (userData?.role === "admin") {
      navigate("/users");
    } else if (userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function setUserCredentials(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    setUser({ ...user, [target.name]: target.value });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const userData = await login({ ...user }).unwrap();
      dispatch(setCredentials({ ...userData }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="login-form">
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input name="username" onChange={setUserCredentials} />
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input name="password" onChange={setUserCredentials} />
        </FormControl>

        <Button type="submit">
          {isLoading ? <CircularProgress /> : "Login"}
        </Button>
      </form>
    </>
  );
}
