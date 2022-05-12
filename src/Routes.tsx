import { Navigate, Route, Routes } from "react-router-dom";
import { Logout } from "./components/Logout";
import { Private } from "./components/Private";
import { Login } from "./pages/Login";
import { PageLayout } from "./pages/PageLayout";
import { Public } from "./pages/Public";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<Login />} />
      <Route element={<PageLayout />}>
        <Route path="public" element={<Public />} />
        <Route element={<Private />}>
          <Route path="home" element={<h1>Home</h1>} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
