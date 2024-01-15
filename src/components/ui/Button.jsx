import React from 'react'
import classes from './Button.module.css'

const Button = ({ children, className, id, type, onClick }) => {
   return (
      <button
         onClick={onClick}
         type={type || 'button'}
         id={id}
         className={`${classes.button} ${className}`}
      >
         {children}
      </button>
   )
}

export default Button
