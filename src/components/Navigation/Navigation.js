import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
