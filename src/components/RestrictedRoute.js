import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userSelectors from "../redux/user/user-selectors";

const RestrictedRoute = ({ redirectTo, component }) => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
