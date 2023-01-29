import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { toggleModal } from '../../redux/modalSlice'
import PropTypes from 'prop-types'
import s from './Button.module.css'

const Button = ({ text, onClick, id, type }) => {
  const showModal = useSelector((state) => state.modal)
  const disputch = useDispatch()
  return (
    <button className={s[id]} type={type} onClick={onClick}>
      {text}
    </button>
  )
}

Button.ropTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button
