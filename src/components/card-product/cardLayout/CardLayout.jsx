import React from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from './CardLayout.module.css'

const CardLayout = ({ children }) => {
   const { id } = useParams()
   return (
      <div>
         <ul className={classes.tabsFlex}>
            <li className={classes.tabsItem}>
               <Link to={`/catalog/${id}/general`}>Общая информация</Link>
            </li>
            <li className={classes.tabsItem}>
               <Link to={`/catalog/${id}/characteristics`}>Характеристики</Link>
            </li>
         </ul>
         {children}
      </div>
   )
}

export default CardLayout
