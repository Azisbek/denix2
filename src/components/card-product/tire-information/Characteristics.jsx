import React from 'react'
import classes from './Characteristics.module.css'
import season from '../../../assets/icon/season.png'
import checkmark from '../../../assets/icon/checkmark.png'
import commentIcon from '../../../assets/icon/commentIcon.png'
import { Rating } from '../../svg/Rating'
import PathBasket from './PathBasket'

const Characteristics = ({ data, id }) => {
   return (
      <div className={classes.block}>
         <h1>{data.title}</h1>
         <div className={classes.boxIcons}>
            <div className={classes.boxImage}>
               <img src={season} alt="Icon season" />
               <img src={checkmark} alt="Icon checkmark" />
            </div>
            <div className={classes.boxComment}>
               <img src={commentIcon} alt="Icon comment" />
               <span>2</span>
            </div>
            <div className={classes.boxRating}>
               <Rating />
               <Rating />
               <Rating />
               <Rating />
               <Rating />
            </div>
            <p>
               Код товара: <span>170852529</span>
            </p>
         </div>
         <div className={classes.blockContainer}>
            <div className={classes.boxCharacteristics}>
               <div className={classes.img}>
                  <img src={data.img} alt="Фото характеристика" />
               </div>
               <div className={classes.shortDescription}>
                  <h3>Краткое описание</h3>
                  <div className={classes.descriptionLine}>
                     <p>Производитель</p>
                     <span>{data.manufacturer}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Модель</p>
                     <span>Business CA1</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Сезонность</p>
                     <span>{data.seasonality}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Ширина</p>
                     <span>{data.width}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Профиль</p>
                     <span>{data.profile}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Диаметр</p>
                     <span>{data.diameter}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Индекс скорости</p>
                     <span>{data.speedIndex}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Индекс нагрузки</p>
                     <span>{data.loadIndex}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Индекс нагрузки для сдвоенных</p>
                     <span>102 (до 850 кг)</span>
                  </div>
                  <a href="#/">Перейти ко всем характеристикам (12)</a>
               </div>
            </div>
            <PathBasket data={data} id={id} />
         </div>
      </div>
   )
}

export default Characteristics
