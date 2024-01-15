import React from 'react'
import classes from './MenuProducts.module.css'
import TireImage1 from '../../../assets/image/car1.png'
import TireImage2 from '../../../assets/image/car2.png'
import TireImage3 from '../../../assets/image/car3.png'
import TireImage4 from '../../../assets/image/car4.png'

const MenuProducts = () => (
   <nav className={`${classes.menuProducts} ${classes.show}`}>
      <div className={classes.container}>
         <ul className={classes.containerProductsTire}>
            <li>
               <div>
                  <img src={TireImage1} alt="Car 1" />
               </div>
               <div>
                  <a href="/">Автомобильные шины</a>
                  <p>
                     Летние Зимние Шипованые Фрикционные Б/у R13 R14 R15 R16 R17
                     R18 R19 R20
                  </p>
               </div>
            </li>
            <div className={classes.line} />
            <li>
               <div>
                  <img src={TireImage2} alt="Car 2" />
               </div>
               <div>
                  <a href="/">Автомобильные шины</a>
                  <p>
                     Летние Зимние Шипованые Фрикционные Б/у R13 R14 R15 R16 R17
                     R18 R19 R20 Летние Зимние Шипованые Фрикционные Б/у <br />{' '}
                     R13 R14 R15 R16 R17 R18 R19 R20
                  </p>
               </div>
            </li>
            <div className={classes.line} />
            <li>
               <div>
                  <img src={TireImage3} alt="Car 3" />
               </div>
               <div>
                  <a href="/">Сельскохозяйственные шины</a>
                  <p>Комбинированные Ведущие Рулевые R34 R38 R32 R28 R22.5</p>
               </div>
            </li>
            <div className={classes.line} />
            <li>
               <div>
                  <img src={TireImage4} alt="Car 4" />
               </div>
               <div>
                  <a href="/">Дорожно-строительные шины</a>
                  <p>Комбинированные Ведущие Рулевые R34 R38 R32 R28 R22.5</p>
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
            <li>
               <a href="/accessories">Автоэлектроника</a>
            </li>
            <div className={classes.lineMenu} />
            <li>
               <a href="/accessories">Автохимия и автокосметика</a>
            </li>
            <div className={classes.lineMenu} />
            <li>
               <a href="/accessories">Внешний декор, тюнинг, защита</a>
            </li>
            <div className={classes.lineMenu} />
            <li>
               <a href="/accessories">Инструменты и техническая помощь</a>
            </li>
            <div className={classes.lineMenu} />
            <li>
               <a href="/accessories">Компрессоры</a>
            </li>
            <div className={classes.lineMenu} />
         </ul>
      </div>
   </nav>
)

export default MenuProducts
