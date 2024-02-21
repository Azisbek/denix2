import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useMatch } from 'react-router-dom'
import classes from './CustomLInk.module.css'
import NavBarArrow from '../svg/NavBarArrow'

const CustomLink = ({ children, to }) => {
   const { navBar } = useSelector((state) => state.navBar)
   const match = useMatch(to)
   return (
      <>
         {navBar.clientMatch && (
            <div className={classes.navClient}>
               <NavBarArrow fill={match ? '#FF7E00' : '#1A1E29'} />
               <Link
                  to={to}
                  className={match ? classes.active : classes.notActive}
               >
                  {children}
               </Link>
            </div>
         )}
         {navBar.adminMatch && (
            <div className={classes.navAdmin}>
               <NavBarArrow fill={match ? '#FF7E00' : '#fff'} />
               <Link
                  to={to}
                  className={match ? classes.active : classes.notActiveAdmin}
               >
                  {children}
               </Link>
            </div>
         )}
      </>
   )
}

export default CustomLink
