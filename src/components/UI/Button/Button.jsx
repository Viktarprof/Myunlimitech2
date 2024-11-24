import React from 'react'
import s from "../Button/Button.module.scss"

const Button = ({ text, styles, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className={`${s[styles]}`}>
      {text}
    </button>
  )
}

export default Button