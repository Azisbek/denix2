import React from 'react'
import { useLocation } from 'react-router-dom'
import classes from './NavBar.module.css'
import NavBarArrow from '../svg/NavBarArrow'

const NavBar = () => {
   const location = useLocation()
   return (
      <nav
         className={`${
            location.pathname === '/' || '/home' ? classes.none : classes.navbar
         }`}
      >
         <ul>
            <li>
               <NavBarArrow />
               <a to="/">Главная</a>
            </li>
            <li>
               <NavBarArrow />
               <a to="/catalog">Каталог</a>
            </li>
            <li>
               <NavBarArrow />
               <a to="/cardproduct">Карточка товара</a>
            </li>
            <li>
               <NavBarArrow />
               <a to="/cart">Корзина</a>
            </li>
            <li>
               <NavBarArrow />
               <a to="/#">Оформление заказа</a>
            </li>
            <li>
               <NavBarArrow />
               <a to="/favorites">Избранное</a>
            </li>
         </ul>
      </nav>
   )
}

export default NavBar
