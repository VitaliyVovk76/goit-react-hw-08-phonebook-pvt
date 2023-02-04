import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <p>
        Simple study web app to store contacts in a cloud.{" "}
        <Link to="/register">Register</Link> your account or{" "}
        <Link to="/login">log in</Link> by using email and password, and you’ll
        get personal contacts notebook. Phone book can be accessed from desctop
        device and any browsers.
      </p>
      <p>In this application I had used following framework and libraries:</p>
      <ul>
        <li>React</li>
        <li>Redux, redux-toolkit</li>
        <li>React-router-dom</li>
        <li>React-persist</li>
        <li>Axios</li>
      </ul>
    </>
  );
};

export default HomePage;
