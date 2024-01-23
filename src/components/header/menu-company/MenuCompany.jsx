import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MenuCompany.module.css'

const MenuCompany = () => {
   return (
      <nav className={`${classes.menuProducts}`}>
         <div className={classes.container}>
            <ul className={classes.containerProductsMenu}>
               <li>
                  <Link to="/company">О компании</Link>
               </li>

               <div className={classes.line} />

               <li>
                  <Link to="/contacts">Контакты</Link>
               </li>

               <div className={classes.line} />

               <li>
                  <a href="/accessories">Статьи и новости</a>
               </li>

               <div className={classes.line} />

               <li>
                  <a href="/accessories">Акции и скидки</a>
               </li>

               <div className={classes.line} />

               <li>
                  <a href="/accessories">Доставка</a>
               </li>

               <div className={classes.line} />

               <li>
                  <a href="/accessories">Оптовым клиентам</a>
               </li>

               <div className={classes.line} />
            </ul>

            <ul className={classes.containerProductsMenu}>
               <li>
                  <a href="/accessories">Оплата</a>
               </li>

               <div className={classes.line} />

               <li>
                  <a href="/accessories">Кредит</a>
               </li>

               <div className={classes.line} />

               <li>
                  <a href="/accessories">Гарантия</a>
               </li>

               <div className={classes.line} />

               <li>
                  <a href="/accessories">Возврат товара</a>
               </li>

               <div className={classes.line} />

               <li className={classes.wrap}>
                  <a href="/accessories">Подарочные сертифиакты</a>
               </li>

               <div className={classes.line} />
            </ul>
         </div>
      </nav>
   )
}

export default MenuCompany
