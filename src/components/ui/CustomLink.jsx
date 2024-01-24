import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import classes from './CustomLInk.module.css'
import NavBarArrow from '../svg/NavBarArrow'

const CustomLink = ({ children, to }) => {
   const match = useMatch({
      path: to,
      end: to.length === 1,
   })
   return (
      <>
         <NavBarArrow fill={match && '#FF7E00'} />
         <Link to={to} className={match ? classes.active : classes.notActive}>
            {children}
         </Link>
      </>
   )
}

export default CustomLink
