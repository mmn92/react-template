import React from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Logout() {
  const { logout } = React.useContext(AuthContext);

  logout();

  return null;
}
