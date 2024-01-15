import React from 'react'

const Arrow = ({ className, fill }) => {
   return (
      <svg
         className={className}
         xmlns="http://www.w3.org/2000/svg"
         width="10"
         //  height="5"
         viewBox="0 0 8 5"
         fill="none"
      >
         <path
            d="M8 0.673077L7.33333 0L4 3.55769L0.666667 0L0 0.673077L4 5L8 0.673077Z"
            fill={fill}
         />
      </svg>
   )
}

export default Arrow
