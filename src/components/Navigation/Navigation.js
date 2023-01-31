import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import userSelectors from "../../redux/user/user-selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
      </nav>
    </div>
  );
};

export default Navigation;
