import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import s from "./Container.module.css";

function Container({ children }) {
  return (
    <div className={s.container}>
      {children}
      <ToastContainer autoClose={2000} />
    </div>
  );
}

Container.Propypes = {
  children: PropTypes.node,
};

export default Container;
