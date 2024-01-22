import React from 'react'
import ProductItem from '../../Product/ProductItem'
import classes from './Recommended.module.css'

const Recommended = () => {
   return (
      <div className={classes.container}>
         <h2>Рекомендуемые товары</h2>
         <div className={classes.slider}>
            <div className={classes.slides}>
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
            </div>
            <div className={classes.iconSvipe}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="16"
                  viewBox="0 0 54 16"
                  fill="none"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M19.196 6C17.1665 6 15.4854 4.52004 14.2028 2.9473C12.7358 1.14861 10.502 -4.59058e-07 8 -3.49691e-07C3.58172 -1.56562e-07 -5.4282e-07 3.58172 -3.49691e-07 8C-1.56562e-07 12.4183 3.58172 16 8 16C10.502 16 12.7358 14.8514 14.2028 13.0527C15.4854 11.48 17.1665 10 19.196 10C21.0811 10 22.6704 11.3376 24.1033 12.5626C25.1517 13.4588 26.5126 14 28 14C29.0586 14 30.0532 13.7258 30.9166 13.2447C33.1893 11.9781 35.3982 10 38 10C40.6018 10 42.8106 11.9781 45.0834 13.2447C45.9468 13.7258 46.9414 14 48 14C51.3137 14 54 11.3137 54 8C54 4.68629 51.3137 2 48 2C46.9414 2 45.9468 2.27415 45.0834 2.75534C42.8106 4.02194 40.6018 6 38 6C35.3982 6 33.1893 4.02194 30.9166 2.75534C30.0532 2.27416 29.0586 2 28 2C26.5126 2 25.1517 2.54121 24.1033 3.43744C22.6704 4.66236 21.0811 6 19.196 6Z"
                     fill="#E5E5E5"
                  />
                  <circle
                     cx="8"
                     cy="8"
                     r="4.5"
                     transform="rotate(-90 8 8)"
                     fill="#FF7E00"
                     stroke="white"
                  />
                  <circle
                     cx="28"
                     cy="8"
                     r="4"
                     transform="rotate(-90 28 8)"
                     fill="#4C65BD"
                  />
                  <circle
                     cx="48"
                     cy="8"
                     r="4"
                     transform="rotate(-90 48 8)"
                     fill="#4C65BD"
                  />
               </svg>
            </div>
         </div>
      </div>
   )
}

export default Recommended
