import { Navigate, Route, Routes } from "react-router-dom";
import { PageLayout } from "./pages/PageLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<h1>Login page</h1>} />
      <Route element={<PageLayout />}>
        <Route path="signup" element={<h1>Signup</h1>} />
        <Route path="test" element={<h1>Home</h1>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
