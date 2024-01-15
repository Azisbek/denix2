import React, { Fragment } from 'react'
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
   toggleCompanyHandler,
   togglePersonalHandler,
   toggleServiceHandler,
} from '../../store/toggleSlice'
import MenuProducts from './menu-products/MenuProducts'
import MenuService from './menu-service/MenuService'
import MenuCompany from './menu-company/MenuCompany'
import MenuPersonal from './menu-personal/MenuPersonal'
import Arrow from '../ui/arrow/Arrow'

const MainHeader = () => {
   const dispatch = useDispatch()
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
                  <img className={classes.headerLogo} src={logo} alt="logo" />
               </div>
               <ul>
                  <li className={classes.headerIcon}>
                     <img src={search} alt="search" />
                  </li>
                  <li className={classes.personalIcon}>
                     <img
                        src={personal}
                        alt="personal"
                        onClick={personalClickHandler}
                     />
                  </li>

                  <div className={classes.divContainerUl}>
                     <li
                        onClick={personalClickHandler}
                        className={personalToggle ? classes.color : ''}
                     >
                        <div>
                           <p> Личный кабинет</p>
                        </div>
                        <div>
                           <Arrow
                              fill={personalToggle ? 'orange' : 'white'}
                              className={
                                 personalToggle ? classes.arrowReverse : ''
                              }
                           />
                        </div>
                     </li>

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

         {productsToggle && (
            <div className={classes.menuDesctop}>
               <MenuProducts />
            </div>
         )}

         {personalToggle && (
            <div>
               <MenuPersonal />
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
