import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import userOperations from "./redux/user/user-operations";
import userSeletors from "./redux/user/user-selectors";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const SingleContactPage = lazy(() => import("./pages/SingleContactPage"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(userSeletors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(userOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route element={<AppBar />}>
            <Route
              path="/"
              element={<PublicRoute component={<HomePage />} />}
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                  restricted
                />
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                  restricted
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route
              path="contacts/:contactId"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<SingleContactPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  );
}

export default App;
