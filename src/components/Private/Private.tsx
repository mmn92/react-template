import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export function Private() {
  const { user } = React.useContext(AuthContext);

  if (!user.login) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
