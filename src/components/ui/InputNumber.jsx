import React, { useState } from 'react'
import classes from './InputNumber.module.css'

const InputNumber = () => {
   const [value, setValue] = useState(null)

   const inputHandler = (event) => {
      const newValue = parseInt(event.target.value, 10)
      setValue(Number.isNaN(newValue) ? null : newValue)
   }

   const increment = () => {
      setValue((prevValue) => prevValue + 1)
   }

   const decrement = () => {
      setValue((prevValue) => prevValue - 1)
   }

   const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp') {
         increment()
      } else if (event.key === 'ArrowDown') {
         decrement()
      }
   }

   return (
      <div className={classes.blockArrow}>
         <input
            className={classes.inputArrow}
            onChange={inputHandler}
            onKeyPress={handleKeyPress}
            type="number"
            value={value !== null ? value : ''}
         />
         <div className={classes.arrow}>
            <svg
               onClick={increment}
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 16 16"
               fill="none"
            >
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 8.27501L12.4576 9L8 6.08024L3.54236 9L3 8.27501L8 5L13 8.27501Z"
                  fill="#1A1E29"
               />
            </svg>

            <svg
               onClick={decrement}
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 16 16"
               fill="none"
            >
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 7.72499L3.54236 7L8 9.91976L12.4576 7L13 7.72499L8 11L3 7.72499Z"
                  fill="#1A1E29"
               />
            </svg>
         </div>
      </div>
   )
}

export default InputNumber
