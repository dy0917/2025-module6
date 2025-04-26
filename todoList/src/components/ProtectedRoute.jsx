import { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

// wrap around logged-in user only routes to protect them
export function ProtectedRoute({ redirectPath = "/", children }) {
  const { user } = useContext(UserContext);
  if (!user.email) {
    return <Navigate to={redirectPath} replace />;
  }
  // works for both nested and standalone routes
  return children ? children : <Outlet />;
}
