import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div>
      <nav>
        <NavLink to="register">Registration</NavLink>
        <NavLink to="login">Login</NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
