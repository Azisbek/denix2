import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import classes from './CardDescription.module.css'

const CardDescription = () => {
   const { data } = useSelector((state) => state.newPage)
   // const { id } = useSelector((state) => state.params)

   const comments = data.comment
   const commentArray = Object.keys(comments || {}).map((key) => ({
      id: key,
      comment: comments[key].comment,
      date: comments[key].date,
      rating: comments[key].rating,
   }))

   return (
      <nav className={classes.tabs}>
         <ul className={classes.tabsFlex}>
            <li className={classes.tabsItem}>
               <NavLink
                  to="information"
                  activeClassName={classes.activeLink}
                  end
               >
                  Общая информация
               </NavLink>
            </li>
            <li className={classes.tabsItem}>
               <NavLink
                  id="characteristic"
                  to="characteristics"
                  activeClassName={classes.activeLink}
                  end
               >
                  Характеристики
               </NavLink>
            </li>
            <li className={classes.tabsItem}>
               <NavLink to="guarantee" activeClassName={classes.activeLink} end>
                  Гарантия
               </NavLink>
            </li>
            <li className={classes.tabsItem}>
               <NavLink to="payment" activeClassName={classes.activeLink} end>
                  Оплата
               </NavLink>
            </li>
            <li className={classes.tabsItem}>
               <NavLink to="reviews" activeClassName={classes.activeLink} end>
                  Отзывы {commentArray.length}
               </NavLink>
            </li>
         </ul>
         <div className={classes.block}>
            <Outlet />
         </div>
      </nav>
   )
}

export default CardDescription
