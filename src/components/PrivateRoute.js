import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userSelectors from "../redux/user/user-selectors";

const PrivateRoute = ({ redirectTo = "/", component: Component }) => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
