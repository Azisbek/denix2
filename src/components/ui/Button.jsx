import React from 'react'
import classes from './Button.module.css'

const Button = ({ children, className, id, type }) => {
   return (
      <button
         type={type || 'button'}
         id={id}
         className={`${classes.btnToggleTires} ${className}`}
      >
         {children}
      </button>
   )
}

export default Button
