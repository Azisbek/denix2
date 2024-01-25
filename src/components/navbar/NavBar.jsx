import React from 'react'
import { useMatch } from 'react-router-dom'
import classes from './NavBar.module.css'
import CustomLink from '../ui/CustomLink'

const NavBar = () => {
   const match = {
      home: useMatch('/home'),
      catalog: useMatch('/catalog'),
      cart: useMatch('/cart'),
      order: useMatch('/order'),
      favorites: useMatch('/favorites'),
      company: useMatch('/company'),
      contacts: useMatch('/contacts'),
   }
   const matchMerged = match.cart || match.order

   return (
      !match.home && (
         <nav className={classes.navbar}>
            <ul>
               <li>
                  <CustomLink to="/home">Главная</CustomLink>
               </li>
               {match.catalog && (
                  <li>
                     <CustomLink to="/catalog">Каталог</CustomLink>
                  </li>
               )}
               {matchMerged && (
                  <li>
                     <CustomLink to="/cart">Корзина</CustomLink>
                  </li>
               )}
               {match.order && (
                  <li>
                     <CustomLink to="/order">Оформление заказа</CustomLink>
                  </li>
               )}
               {match.favorites && (
                  <li>
                     <CustomLink to="/favorites">Избранное</CustomLink>
                  </li>
               )}
               {match.company && (
                  <li>
                     <CustomLink to="/company">О компании</CustomLink>
                  </li>
               )}
               {match.contacts && (
                  <li>
                     <CustomLink to="/contacts">
                        Контактная информация
                     </CustomLink>
                  </li>
               )}
            </ul>
         </nav>
      )
   )
}

export default NavBar
