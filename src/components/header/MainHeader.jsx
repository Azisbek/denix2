import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/icon/logo.png'
import like from '../../assets/icon/like.png'
import shop from '../../assets/icon/shop.png'
import search from '../../assets/icon/serch.png'
import personal from '../../assets/icon/personal.png'
import classes from './MainHeader.module.css'
import {
   burgerClickHandler,
   toggleClickHandler,
   toggleServiceHandler,
} from '../../store/toggleSlice'
import MenuProducts from './menu-products/MenuProducts'
import MenuService from './menu-service/MenuService'

const MainHeader = () => {
   const dispatch = useDispatch()
   const { productsToggleMobile, burger, service } = useSelector(
      (state) => state.toggle
   )

   const burgerHandler = () => {
      dispatch(burgerClickHandler())
   }

   const productsClickHandler = () => {
      dispatch(toggleClickHandler())
   }
   const serviceClickHandler = () => {
      dispatch(toggleServiceHandler())
   }

   return (
      <>
         <header className={classes.headerContent}>
            <div className={classes.container}>
               <div
                  className={classes.burgerMenu}
                  onClick={burgerHandler}
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle Menu"
               >
                  <span className={classes.burgerItem} />
                  <span className={classes.burgerItem2} />
                  <span className={classes.burgerItem2} />
                  <span className={classes.burgerItem} />
               </div>

               <ul className={classes.ulContainer}>
                  <li onClick={productsClickHandler}>Товары</li>
                  <li onClick={serviceClickHandler}>Услуги</li>
                  <li className={classes.mobileNavItem}>Компания</li>
               </ul>

               <div>
                  <img className={classes.headerLogo} src={logo} alt="logo" />
               </div>
               <ul>
                  <li className={classes.headerIcon}>
                     <img src={search} alt="search" />
                  </li>
                  <li className={classes.personalIcon}>
                     <img src={personal} alt="personal" />
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

         {productsToggleMobile && (
            <div className={classes.menuDesctop}>
               <MenuProducts />
            </div>
         )}
         {service && (
            <div className={classes.menuDesctop}>
               <MenuService />
            </div>
         )}

         {burger && (
            <ul className={classes.burgerContent}>
               <li onClick={productsClickHandler}>Товары</li>
               <div className={classes.line} />
               {productsToggleMobile && <MenuProducts />}
               <li onClick={serviceClickHandler}>Услуги</li>
               <div className={classes.line} />
               {service && <MenuService />}
               <li className={classes.mobileNavItem}>Компания</li>
               <div className={classes.line} />
            </ul>
         )}
      </>
   )
}

export default MainHeader
