import React from 'react'
import tire from '../../../assets/tire.png'
import wheels from '../../../assets/wheels 1.png'
import classes from './MenuService.module.css'
// import time from '../../../assets/icon/time.png'

const MenuService = () => (
   <div className={`${classes.menuProducts} ${classes.show}`}>
      <div className={classes.container}>
         <ul className={classes.containerProductsTire}>
            <li>
               <div>
                  <img src={tire} alt="tire" />
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

            <div className={classes.lineMenu} />

            <li>
               <a href="/accessories">Аккумуляторы</a>
            </li>

            <div className={classes.lineMenu} />

            <li>
               <a href="/accessories">Автомасла</a>
            </li>

            <div className={classes.lineMenu} />
         </ul>
      </div>
   </div>
)

export default MenuService
