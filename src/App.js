import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import userOperations from "./redux/user/user-operations";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <Routes>
        <Route element={<AppBar />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
