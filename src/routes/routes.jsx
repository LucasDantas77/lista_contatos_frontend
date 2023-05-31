import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { DashPage } from "../pages/home/Dashboard";

export const RoutesMain = (userLogin, user, setUser) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage userLogin={userLogin} user={setUser} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<DashPage user={user} setUser={setUser} />}
      />
    </Routes>
  );
};
