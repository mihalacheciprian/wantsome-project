import { Navigate, Outlet, useLocation } from "react-router";

export function RequireAuth() {
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
