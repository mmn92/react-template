import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<h1>Login page</h1>} />
      <Route
        element={
          <>
            <h1>Header</h1>
            <Outlet />
          </>
        }
      >
        <Route path="signup" element={<h1>Signup</h1>} />
        <Route path="test" element={<h1>Home</h1>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
