import React from 'react'
import { Link, useMatch } from 'react-router-dom'
// import classes from './NavLink.module.css'

const NavLink = ({ children, to }) => {
   const match = useMatch({
      path: to,
      end: to.length === 1,
   })

   return (
      <Link style={{ color: match ? 'red' : 'green' }} to={to}>
         {children}
      </Link>
      // <Link className={match ? classes.active : ''} to={to}>
      //    {children}
      // </Link>
   )
}

export default NavLink
