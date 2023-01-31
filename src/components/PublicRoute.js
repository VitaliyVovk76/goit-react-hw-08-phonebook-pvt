import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userSelectors from "../redux/user/user-selectors";

const PublicRoute = ({ redirectTo, component, restricted = false }) => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  const showRedirect = isLoggedIn && restricted;
  return !showRedirect ? component : <Navigate to={redirectTo} />;
};

export default PublicRoute;
