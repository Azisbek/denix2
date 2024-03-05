import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import classes from './CardDescription.module.css'

const CardDescription = () => {
   return (
      <div className={classes.tabs}>
         <ul className={classes.tabsFlex}>
            <li className={classes.tabsItem}>
               <Link to="information">Общая информация</Link>
            </li>
            <li className={classes.tabsItem}>
               <Link to="characteristics">Характеристики</Link>
            </li>
            <li className={classes.tabsItem}>
               <Link to="guarantee">Гарантия</Link>
            </li>
            <li className={classes.tabsItem}>
               <Link to="payment">Оплата</Link>
            </li>
            <li className={classes.tabsItem}>
               <Link to="compatibility">Совместимость</Link>
            </li>
            <li className={classes.tabsItem}>
               <Link to="reviews">Отзывы (2)</Link>
            </li>
         </ul>
         <div className={classes.block}>
            <Outlet />
            {/* Uncomment the following content when you have the 'data' available */}
            {/* <h1 className={classes.titleCard}>Описание модели {data.title}</h1>
               <div className={classes.blockCard}>
                  <p className={classes.textCard}>{data.description}</p>
                  <p className={classes.textCard}>
                     Новаторская технология двух слоев каркаса, которые усиливают
                     материал, помогает машине служить намного дольше и защищает от
                     механических повреждений.
                  </p>
               </div>
               <h1 className={classes.titleCard}>Характеристики модели</h1>
               <div className={classes.blockCard}>
                  <p className={classes.textCard}>
                     При создании шины были применены следующие технологии: «3D
                     Mod» — рисунок протектора создавался при помощи ручного 3D
                     моделирования. Таким образом, разработчики заранее смогли
                     увидеть все недочеты и устранить их; <br /> «Contact with
                     road» — широкая площадь контакта шины с поверхностью
                     достигается за счет скошенным формам и рисунку протектора;
                     «Dissymmetric drawing» —отвод влаги к низу шины достигается
                     при помощи асимметричного рисунка протектора, что дает хорошую
                     управляемость при маневрировании.
                  </p>
                  <p className={classes.textCard}>
                     Как уже видно по названию, это модель специально адаптирована
                     под использование в малом или среднем бизнесе. Разработчики
                     внедрили в нее технологии, которые позволяют экономить на
                     сезонной замене шин, а также на топливе для автомобиля.
                     Высокая надежность при перевозке максимально допустимого груза
                     обеспечил усиленный каркас протектора.
                  </p>
               </div> */}
         </div>
      </div>
   )
}

export default CardDescription
