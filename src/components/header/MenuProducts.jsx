import React from 'react'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import car4 from '../../assets/car4.png'
import classes from './MenuProducts.module.css'

const MenuProducts = () => (
   <div className={classes.menuProducts}>
      <div className={classes.container}>
         <ul className={classes.containerMenuProducts}>
            <li>
               <div>
                  <img src={car1} alt="" />
               </div>
               <div>
                  <h1>Автомобильные шины</h1>
                  <p>
                     Летние Зимние Шипованые Фрикционные Б/у <br /> R13 R14 R15
                     R16 R17 R18 R19 R20
                  </p>
               </div>
            </li>
            <div className={classes.line} />
            <li>
               <div>
                  <img src={car2} alt="" />
               </div>
               <div>
                  <h1>Грузовые шины</h1>
                  <p>
                     Ведущие Универсальные Рулевые Прицеп Рулевые + прицеп R13
                     R22,5 R24 R21 R20 R19,5
                  </p>
               </div>
            </li>
            <div className={classes.line} />
            <li>
               <div>
                  <img src={car3} alt="" />
               </div>
               <div>
                  <h1>Сельскохозяйственные шины</h1>
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
                  <h1>Дорожно-строительные шины</h1>
                  <p>
                     Комбинированные Ведущие Рулевые <br /> R34 R38 R32 R28
                     R22.5
                  </p>
               </div>
            </li>
            <div className={classes.line} />
         </ul>

         <ul>
            <li>
               <a href="/accessories">
                  Аксессуары для шин, дисков и шиномонтажа
               </a>
            </li>
         </ul>
      </div>
   </div>
)

export default MenuProducts
