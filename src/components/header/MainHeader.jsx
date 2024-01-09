import React from 'react'
import classes from './MainHeader.module.css'
import logo from '../../assets/icon/logo.png'
// import burger from '../../assets/icon/burger.png'
import like from '../../assets/icon/like.png'
import shop from '../../assets/icon/shop.png'
import search from '../../assets/icon/serch.png'
import personal from '../../assets/icon/personal.png'

const MainHeader = () => (
   <header className={classes.headerContent}>
      <div className={classes.container}>
         <div className={classes.burgerMenu}>
            <span className={classes.burgerItem} />
            <span className={classes.burgerItem2} />
            <span className={classes.burgerItem2} />
            <span className={classes.burgerItem} />
         </div>

         <ul className={classes.ulContainer}>
            <li>Товары</li>
            <li>Услуги</li>
            <li>Компания</li>
         </ul>

         <div>
            <img className={classes.headerLogo} src={logo} alt="logo" />
         </div>

         <ul>
            <li className={classes.headerIcon}>
               <img src={search} alt="search" />
            </li>
            <li className={classes.personalIcon}>
               <img src={personal} alt="" />
            </li>

            <div className={classes.divContainerUl}>
               <li>Личный кабинет</li>

               <li className={classes.headerIcon}>
                  <img src={like} alt="" />
               </li>

               <li className={classes.headerIcon}>
                  <img src={shop} alt="" />
               </li>
            </div>
         </ul>
      </div>
   </header>
)

export default MainHeader
