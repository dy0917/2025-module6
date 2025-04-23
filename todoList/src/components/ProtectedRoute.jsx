import { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

// wrap around logged-in user only routes to protect them
export function ProtectedRoute({ redirectPath = "/", children }) {
  const { user } = useContext(UserContext);
  const [isVerified, setVerified] = useState();
  useEffect(() => {
    const result = verifyToken();
    setVerified(result);
  }, []);
  console.log("user", user);
  if (!isVerified) {
    return <Navigate to={redirectPath} replace />;
  }
  // works for both nested and standalone routes
  return children ? children : <Outlet />;
}
