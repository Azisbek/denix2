import React from 'react'
import classes from './PathBasket.module.css'
import Button from '../../ui/Button'
import Like from '../../svg/Like'
import Guarantee from '../../../assets/icon/Guarantee.png'
import dostavka from '../../../assets/icon/dostavka.png'
import price from '../../../assets/icon/price.png'

const PathBasket = ({ data }) => {
   return (
      <div className={classes.container}>
         <div>
            <p className={classes.numberThrough}>8 790 С</p>
         </div>
         <div className={classes.price}>
            <p>{data.price}</p> <p>за 1 шт.</p>
         </div>
         <div className={classes.math}>
            <p>{data.price} × 4 = 19160</p>
         </div>
         <div className={classes.blockUi}>
            <div>
               <input type="number" className={classes.noSpinArrows} />
            </div>

            <Button>В корзину</Button>

            <div className={classes.blockLike}>
               <Like />
            </div>
         </div>

         <div className={classes.textBlock}>
            <p>В наличии</p>
            <div>
               <img src={Guarantee} alt="cordiant" />
               <p>Гарантия: Бессрочная от Cordiant</p>
            </div>
            <div>
               <img src={dostavka} alt="cordiant" />
               <p>Доставка:</p> <a href="/">Показать варианты (12)</a>
            </div>
            <div>
               <img src={price} alt="cordiant" />
               <p>Оплата: </p> <a href="/">Показать варианты (12)</a>
            </div>
         </div>
      </div>
   )
}

export default PathBasket
