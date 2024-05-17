import React from 'react'
import tire2 from '../../../assets/icon/tire2.png'
import wheels from '../../../assets/image/wheels 1.png'
import classes from './MenuService.module.css'
// import time from '../../../assets/icon/time.png'

const MenuService = () => (
   <nav className={`${classes.menuProducts} ${classes.show}`}>
      <div className={classes.container}>
         <ul className={classes.containerProductsTire}>
            <li>
               <div>
                  <img src={tire2} alt="tire" />
               </div>
               <div>
                  <a href="/">Шиномонтаж</a>

                  <p>Ежедневно с 9:00 до 21:00, без перерывов</p>
                  <p>от 500 c</p>
               </div>
            </li>
            <div className={classes.line} />
            <li>
               <div>
                  <img src={wheels} alt="" />
               </div>
               <div>
                  <a href="/">Ремонт и правка дисков</a>
                  <p>Ежедневно с 9:00 до 21:00, без перерывов</p>
                  <p>от 500 c</p>
               </div>
            </li>
            <div className={classes.line} />
         </ul>

         <ul className={classes.containerProductsMenu}>
            <li>
               <a href="/accessories">
                  Аксессуары для шин, дисков и шиномонтажа
               </a>
            </li>

            <div className={classes.line} />

            <li>
               <a href="/accessories">Аккумуляторы</a>
            </li>

            <div className={classes.line} />

            <li>
               <a href="/accessories">Автомасла</a>
            </li>

            <div className={classes.line} />
         </ul>
      </div>
   </nav>
)

export default MenuService
