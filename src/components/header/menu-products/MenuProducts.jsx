import React from 'react'
import car1 from '../../../assets/image/car1.png'
import car2 from '../../../assets/image/car2.png'
import car3 from '../../../assets/image/car3.png'
import car4 from '../../../assets/image/car4.png'
import classes from './MenuProducts.module.css'

const MenuProducts = () => {
   return (
      <nav className={`${classes.menuProducts} ${classes.show}`}>
         <div className={classes.container}>
            <ul className={classes.containerProductsTire}>
               <li>
                  <div>
                     <img src={car1} alt="" />
                  </div>
                  <div>
                     <a href="/">Автомобильные шины</a>
                     <p>
                        Летние Зимние Шипованые Фрикционные Б/у <br /> R13 R14
                        R15 R16 R17 R18 R19 R20
                     </p>
                  </div>
               </li>
               <div className={classes.line} />
               <li>
                  <div>
                     <img src={car2} alt="" />
                  </div>
                  <div>
                     <a href="/">Автомобильные шины</a>
                     <p>
                        Летние Зимние Шипованые Фрикционные Б/у <br /> R13 R14
                        R15 R16 R17 R18 R19 R20
                     </p>
                  </div>
               </li>
               <div className={classes.line} />
               <li>
                  <div>
                     <img src={car3} alt="" />
                  </div>
                  <div>
                     <a href="/">Сельскохозяйственные шины</a>
                     <p>
                        Комбинированные Ведущие Рулевые <br /> R34 R38 R32 R28
                        R22.5
                     </p>
                  </div>
               </li>
               <div className={classes.line} />
               <li>
                  <div>
                     <img src={car4} alt="" />
                  </div>
                  <div>
                     <a href="/">Дорожно-строительные шины</a>
                     <p>
                        Комбинированные Ведущие Рулевые <br /> R34 R38 R32 R28
                        R22.5
                     </p>
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
}

export default MenuProducts
