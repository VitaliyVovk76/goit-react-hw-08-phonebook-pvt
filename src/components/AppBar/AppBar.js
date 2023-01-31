import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import userSelectors from "../../redux/user/user-selectors";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense
        fallback={
          <div>
            <h2>Loading...</h2>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppBar;
