import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../utils/loginUtil";
import { logIn } from "../actions";
import { useDispatch } from "react-redux";

const Button = styled.button`
  border: none;
  padding: 10px 100px;
  background-color: blue;
  border-radius: 100px;
  color: #fff;
  margin: 20px auto;
  display: block;
`;

const LoginCard = styled.div`
  width: 600px;
  height: 400px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const Input = styled.input`
  all: unset;
  display: block;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 400px;
  height: 40px;
  margin: 5px auto 30px auto;
  padding-left: 5px;
  background-color: #fff;
`;

const Logo = styled.h1`
  font-family: "Maven Pro", sans-serif;
  font-weight: 900;
  text-align: center;
  font-size: 30px;
`;

const Form = styled.form`
  margin: 40px auto;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login({ username, password });
      dispatch(logIn);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }

  return (
    <LoginCard>
      <Logo>Phonester</Logo>
      <div style={{ background: "red" }}>{error}</div>
      <div>{isLoggedIn ? "welcome" : "Please Login"}</div>
      {isLoggedIn ? (
        <Button onClick={() => setIsLoggedIn(false)}>Sign out</Button>
      ) : (
        <Form onSubmit={handleSubmit}>
          <div>
            <Input
              placeholder="Username"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </div>
          <Button type="submit">{isLoading ? "Loggin in..." : "Log In"}</Button>
        </Form>
      )}
    </LoginCard>
  );
};

export default Login;
