import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/icon/logo.png'
import search from '../../assets/icon/serch.png'
import personal from '../../assets/icon/personal.png'
import classes from './MainHeader.module.css'
import {
   burgerClickHandler,
   toggleClickHandler,
   toggleCompanyHandler,
   togglePersonalHandler,
   toggleServiceHandler,
} from '../../store/toggleSlice'
import MenuProducts from './menu-products/MenuProducts'
import MenuService from './menu-service/MenuService'
import MenuCompany from './menu-company/MenuCompany'
// import MenuPersonal from './menu-personal/MenuPersonal'
import Arrow from '../svg/Arrow'
import Like from '../svg/Like'
import Shop from '../svg/Shop'
import { cardGetAsync } from '../../store/cardSlice'

const MainHeader = () => {
   const dispatch = useDispatch()
   const { items, status } = useSelector((state) => state.cart)
   const { favorites } = useSelector((state) => state.favorites)

   useEffect(() => {
      dispatch(cardGetAsync())
   }, [dispatch])

   const {
      personalToggle,
      productsToggle,
      burgerToggle,
      serviceToggle,
      companyToggle,
   } = useSelector((state) => state.toggle)

   const burgerHandler = () => {
      dispatch(burgerClickHandler())
   }

   const productsClickHandler = () => {
      dispatch(toggleClickHandler())
   }
   const serviceClickHandler = () => {
      dispatch(toggleServiceHandler())
   }
   const companyClickHandler = () => {
      dispatch(toggleCompanyHandler())
   }
   const personalClickHandler = () => {
      dispatch(togglePersonalHandler())
   }

   return (
      <>
         <header className={classes.headerContent}>
            <div className={classes.container}>
               <div
                  className={`${classes.burgerMenu} ${
                     burgerToggle ? classes.active : ''
                  }`}
                  onClick={burgerHandler}
                  role="button"
                  tabIndex={0}
                  aria-label="Toggle Menu"
               >
                  <span className={classes.burgerItem1} />
                  <span className={classes.burgerItem2} />
                  <span className={classes.burgerItem2} />
                  <span className={classes.burgerItem3} />
               </div>

               <ul className={classes.ulContainer}>
                  <li
                     onClick={productsClickHandler}
                     className={productsToggle ? classes.color : ''}
                  >
                     <div>
                        <p>Товары</p>
                     </div>
                     <div>
                        <Arrow
                           fill={productsToggle ? 'orange' : 'white'}
                           className={
                              productsToggle ? classes.arrowReverse : ''
                           }
                        />
                     </div>
                  </li>
                  <li
                     onClick={serviceClickHandler}
                     className={serviceToggle ? classes.color : ''}
                  >
                     <div className={serviceToggle ? classes.color : ''}>
                        <p>Услуги</p>
                     </div>
                     <div>
                        <Arrow
                           fill={serviceToggle ? 'orange' : 'white'}
                           className={serviceToggle ? classes.arrowReverse : ''}
                        />
                     </div>
                  </li>
                  <li
                     onClick={companyClickHandler}
                     className={companyToggle ? classes.color : ''}
                  >
                     <div>
                        <p>Компания</p>
                     </div>
                     <div>
                        <Arrow
                           fill={companyToggle ? 'orange' : 'white'}
                           className={companyToggle ? classes.arrowReverse : ''}
                        />
                     </div>
                  </li>
               </ul>

               <div>
                  <Link to="/home">
                     <img
                        className={classes.headerLogo}
                        src={logo}
                        alt="logo"
                     />
                  </Link>
               </div>
               <ul>
                  <li className={classes.headerIcon}>
                     <img src={search} alt="search" />
                  </li>
                  <li>
                     <Link to="/personal" className={classes.personalIcon}>
                        <img
                           src={personal}
                           alt="personal"
                           onClick={personalClickHandler}
                        />
                     </Link>
                  </li>

                  <div className={classes.divContainerUl}>
                     <li
                        onClick={personalClickHandler}
                        className={personalToggle ? classes.color : ''}
                     >
                        <div className={classes.personalAcc}>
                           <NavLink className={classes.link} to="/personal">
                              Личный кабинет
                           </NavLink>
                        </div>
                     </li>

                     <li className={classes.headerIcon}>
                        <Link to="/favorites">
                           <Like
                              stroke={
                                 favorites.length > 0 ? '#FF7E00' : 'white'
                              }
                           />
                        </Link>
                     </li>
                     <li className={classes.headerIconCart}>
                        <Link to="/cart">
                           <Shop />
                           {items.length === 0
                              ? ''
                              : status === 'succeeded' && <p>{items.length}</p>}
                        </Link>
                     </li>
                  </div>
               </ul>
            </div>
         </header>

         {productsToggle && (
            <div className={classes.menuDesctop}>
               <MenuProducts />
            </div>
         )}

         {serviceToggle && (
            <div className={classes.menuDesctop}>
               <MenuService />
            </div>
         )}

         {companyToggle && (
            <div className={classes.menuDesctop}>
               <MenuCompany />
            </div>
         )}

         {burgerToggle && (
            <ul className={classes.burgerContent}>
               <li
                  onClick={productsClickHandler}
                  className={productsToggle ? classes.color : ''}
               >
                  <div>
                     <p>Товары</p>
                  </div>
                  <div>
                     <Arrow
                        fill={productsToggle ? 'orange' : 'white'}
                        className={productsToggle ? classes.arrowReverse : ''}
                     />
                  </div>
               </li>
               <div className={classes.line} />

               {productsToggle && <MenuProducts />}

               <li
                  onClick={serviceClickHandler}
                  className={serviceToggle ? classes.color : ''}
               >
                  <div>
                     <p>Услуги</p>
                  </div>
                  <div>
                     <Arrow
                        fill={serviceToggle ? 'orange' : 'white'}
                        className={serviceToggle ? classes.arrowReverse : ''}
                     />
                  </div>
               </li>
               <div className={classes.line} />
               {serviceToggle && <MenuService />}
               <li
                  onClick={companyClickHandler}
                  className={companyToggle ? classes.color : ''}
               >
                  <div>
                     <p>Компания</p>
                  </div>
                  <div>
                     <Arrow
                        fill={companyToggle ? 'orange' : 'white'}
                        className={companyToggle ? classes.arrowReverse : ''}
                     />
                  </div>
               </li>

               <div className={classes.line} />
               {companyToggle && <MenuCompany />}
            </ul>
         )}
      </>
   )
}

export default MainHeader
