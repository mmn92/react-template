import React from "react";
import { Login, Logout, User } from "../models/business/Auth";

type AuthContextState = {
  user: User;
  login: Login;
  logout: Logout;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextState>(
  {} as AuthContextState
);

export function AuthProvider({ children }: ProviderProps) {
  const [loggedUser, setLogin] = React.useState<User>({ login: "" });

  const login: Login = (credentials) => {
    setLogin({ login: credentials.username });
  };
  function logout() {
    setLogin({ login: "" });
  }
  const user = loggedUser;

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
