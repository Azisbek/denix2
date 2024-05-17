import React from 'react'
import { useSelector } from 'react-redux'
import classes from './CharacteristicsItem.module.css'

const CharacteristicsItem = () => {
   const { data } = useSelector((state) => state.newPage)
   return (
      <section className={classes.container}>
         <div className={classes.containerList}>
            <ul className={classes.containerUl}>
               <li>
                  <p>Ширина</p>
                  <p>{data.width}</p>
               </li>
               <li>
                  <p>Сезонность</p>
                  <p>{data.seasonality}</p>
               </li>
               <li>
                  <p>Профиль</p>
                  <p>{data.profile}</p>
               </li>
               <li>
                  <p>Диаметр</p>
                  <p>{data.diameter}</p>
               </li>
               <li>
                  <p>Тип шины</p>
                  <p>{data.tireType}</p>
               </li>

               <li>
                  <p>Состояние</p>
                  <p>{data.state}</p>
               </li>
            </ul>
            <ul className={classes.containerUl}>
               <li>
                  <p>Производитель</p>
                  <p>{data.manufacturer}</p>
               </li>
               <li>
                  <p>Индекс скорости</p>
                  <p>{data.speedIndex}</p>
               </li>
               <li>
                  <p>Индекс нагрузки</p>
                  <p>{data.loadIndex}</p>
               </li>
               <li>
                  <p>Топливоэкономия</p>
                  <p>{data.fuelEconomy}</p>
               </li>
               <li>
                  <p>Мокрое сцепление.</p>
                  <p>{data.wetGrip}</p>
               </li>
               <li>
                  <p>Уровень шума.</p>
                  <p>{data.noiseLevel}</p>
               </li>
            </ul>
         </div>
      </section>
   )
}

export default CharacteristicsItem
