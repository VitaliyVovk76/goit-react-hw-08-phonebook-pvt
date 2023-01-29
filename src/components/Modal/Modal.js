import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/modal/modal-slice";
import { getModal } from "../../redux/modal/modal-selectors";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children }) => {
  const showModal = useSelector(getModal);
  const disputch = useDispatch();
  useEffect(() => {
    window.addEventListener("keydown", eskKeyDown);
    return () => window.removeEventListener("keydown", eskKeyDown);
  });

  const modalClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      disputch(toggleModal(showModal));
    }
  };

  const eskKeyDown = (evt) => {
    if (evt.code === "Escape") {
      disputch(toggleModal(showModal));
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={modalClick}>
      <div className={s.content}>
        <button
          className={s.btnClose}
          type="button"
          onClick={() => disputch(toggleModal(showModal))}
        >
          Close
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = { children: PropTypes.node };

export default Modal;
