import React from 'react'

export const Rating = ({ className, fill, onClick, width, height }) => {
   return (
      <svg
         onClick={onClick}
         xmlns="http://www.w3.org/2000/svg"
         width={width || '16'}
         height={height || '16'}
         viewBox="0 0 16 16"
         fill="none"
         className={className}
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5853 5.44029L7.99908 0.999969L5.41282 5.44029L0.390625 6.52783L3.81443 10.3596L3.2968 15.4721L7.99908 13.4L12.7014 15.4721L12.1837 10.3596L15.6075 6.52783L10.5853 5.44029Z"
            stroke="#EFD8C3"
            fill={fill}
         />
      </svg>
   )
}
