// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, user }) => {
  return user ? Component : <Navigate to="/" replace />;
};

export default PrivateRoute;
