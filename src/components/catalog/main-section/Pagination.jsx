import React from 'react'
import Button from '../../ui/Button'
import classes from './Pagination.module.css'

const Pagination = () => {
   return (
      <nav className={classes.pagination}>
         <div className={classes.border}>
            <div className={classes.doubleArrow}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
               >
                  <path
                     d="M14.123 3.11108L7.94712 7.46664L14.123 11.8222"
                     stroke="#989898"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="15"
                  viewBox="8 0 23 15"
                  fill="none"
               >
                  <path
                     d="M14.123 3.11108L7.94712 7.46664L14.123 11.8222"
                     stroke="#989898"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>
            <div className={classes.arrow}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
               >
                  <path
                     d="M13.79 3.11108L7.61411 7.46664L13.79 11.8222"
                     stroke="#989898"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>
            <ul>
               <li>
                  <a href="#/">1</a>
                  <a href="#/">2</a>
                  <a href="#/">3</a>
                  <div className={classes.points}>...</div>
                  <a href="#/">125</a>
               </li>
            </ul>
            <div className={classes.arrow}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
               >
                  <path
                     d="M8.21094 3.11108L14.3869 7.46664L8.21094 11.8222"
                     stroke="#989898"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>
            <div className={classes.doubleArrow} id={classes.borderRight}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
               >
                  <path
                     d="M8.79785 3.11108L14.9738 7.46664L8.79785 11.8222"
                     stroke="#989898"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="15"
                  viewBox="8 0 23 15"
                  fill="none"
               >
                  <path
                     d="M8.79785 3.11108L14.9738 7.46664L8.79785 11.8222"
                     stroke="#989898"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>
         </div>
         <Button id={classes.btnPagination}>Дальше</Button>
      </nav>
   )
}

export default Pagination
