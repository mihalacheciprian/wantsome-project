import {
  Button,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../features/hooks";
import { useLoginMutation } from "../features/authApiSlice";
import { setCredentials } from "../features/authSlice";
import { useNavigate } from "react-router";
import "./Login.scss";

export function Login() {
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

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
      navigate("/me");
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
