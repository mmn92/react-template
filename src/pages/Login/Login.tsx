import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/Layout/Text";
import { Title } from "../../components/Layout/Title";
import { AuthContext } from "../../contexts/AuthContext";

import "./styles.scss";

export function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("login attempt:", username, password);

    login({ username, password });

    navigate("/home");
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <Title>Login Page</Title>
        <label className="username" htmlFor="username">
          <Text>Username:</Text>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label className="password" htmlFor="password">
          <Text>Password:</Text>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
