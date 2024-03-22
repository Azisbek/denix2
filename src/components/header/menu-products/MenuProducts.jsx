import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classes from './MenuProducts.module.css'
import TireImage1 from '../../../assets/image/car1.png'
import TireImage2 from '../../../assets/image/car2.png'
import TireImage3 from '../../../assets/image/car3.png'
import TireImage4 from '../../../assets/image/car4.png'
import { tireTypeOption } from '../../admin/OptionSelect'
import {
   setFilteredProducts,
   setShowFilteredFromHome,
} from '../../../store/filteredProductsSlice'

const MenuProducts = () => {
   const dispatch = useDispatch()
   const { products } = useSelector((state) => state.product)
   const navigate = useNavigate()

   const navigateToCatalogHandler = (event) => {
      if (event.target.name === tireTypeOption[0].label) {
         const filteredProducts = products.filter(
            (product) => tireTypeOption[0].label === product.tireType
         )
         dispatch(setFilteredProducts(filteredProducts))
         dispatch(setShowFilteredFromHome(true))
      }
      if (event.target.name === tireTypeOption[1].label) {
         const filteredProducts = products.filter(
            (product) => tireTypeOption[1].label === product.tireType
         )
         dispatch(setFilteredProducts(filteredProducts))
         dispatch(setShowFilteredFromHome(true))
      }
      if (event.target.name === tireTypeOption[2].label) {
         const filteredProducts = products.filter(
            (product) => tireTypeOption[2].label === product.tireType
         )
         dispatch(setFilteredProducts(filteredProducts))
         dispatch(setShowFilteredFromHome(true))
      }
      if (event.target.name === tireTypeOption[3].label) {
         const filteredProducts = products.filter(
            (product) => tireTypeOption[3].label === product.tireType
         )
         dispatch(setFilteredProducts(filteredProducts))
         dispatch(setShowFilteredFromHome(true))
      }
      navigate('/catalog')
   }
   return (
      <nav className={`${classes.menuProducts} ${classes.show}`}>
         <div className={classes.container}>
            <ul className={classes.containerProductsTire}>
               <li>
                  <div>
                     <img src={TireImage1} alt="Car 1" />
                  </div>
                  <div>
                     <button
                        onClick={navigateToCatalogHandler}
                        name={tireTypeOption[0].label}
                     >
                        Автомобильные шины
                     </button>
                     <p>
                        Летние Зимние Шипованые Фрикционные Б/у R13 R14 R15 R16
                        R17 R18 R19 R20
                     </p>
                  </div>
               </li>
               <div className={classes.line} />
               <li>
                  <div>
                     <img src={TireImage2} alt="Car 2" />
                  </div>
                  <div>
                     <button
                        onClick={navigateToCatalogHandler}
                        name={tireTypeOption[1].label}
                     >
                        Грузовые шины
                     </button>
                     <p>
                        Ведущие Универсальные Рулевые Прицеп Рулевые + прицеп
                        R22,5 R24 R21 R20 R19,5
                     </p>
                  </div>
               </li>
               <div className={classes.line} />
               <li>
                  <div>
                     <img src={TireImage3} alt="Car 3" />
                  </div>
                  <div>
                     <button
                        onClick={navigateToCatalogHandler}
                        name={tireTypeOption[2].label}
                     >
                        Сельскохозяйственные шины
                     </button>
                     <p>
                        Комбинированные Ведущие Рулевые R34 R38 R32 R28 R22.5
                     </p>
                  </div>
               </li>
               <div className={classes.line} />
               <li>
                  <div>
                     <img src={TireImage4} alt="Car 4" />
                  </div>
                  <div>
                     <button
                        onClick={navigateToCatalogHandler}
                        name={tireTypeOption[3].label}
                     >
                        Дорожно-строительные шины
                     </button>
                     <p>
                        Комбинированные Ведущие Рулевые R34 R38 R32 R28 R22.5
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
               <div className={classes.line} />
               <li>
                  <a href="/accessories">Аккумуляторы</a>
               </li>
               <div className={classes.line} />
               <li>
                  <a href="/accessories">Автомасла</a>
               </li>
               <div className={classes.line} />
               <li>
                  <a href="/accessories">Автоэлектроника</a>
               </li>
               <div className={classes.line} />
               <li>
                  <a href="/accessories">Автохимия и автокосметика</a>
               </li>
               <div className={classes.line} />
               <li>
                  <a href="/accessories">Внешний декор, тюнинг, защита</a>
               </li>
               <div className={classes.line} />
               <li>
                  <a href="/accessories">Инструменты и техническая помощь</a>
               </li>
               <div className={classes.line} />
               <li>
                  <a href="/accessories">Компрессоры</a>
               </li>
               <div className={classes.line} />
            </ul>
         </div>
      </nav>
   )
}

export default MenuProducts
