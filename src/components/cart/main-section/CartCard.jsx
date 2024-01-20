import React from 'react'
import classes from './CartCard.module.css'
import cart from '../../../assets/image/cart.png'
import dostavka from '../../../assets/icon/dostavka.png'
import close from '../../../assets/icon/close.png'
import Checkmark from '../../svg/Checkmark'
import InputNumber from '../../ui/InputNumber'

const CartCard = () => {
   return (
      <div className={classes.cart}>
         <div className={classes.cartImg}>
            <img src={cart} alt="Картинка товара" />
         </div>
         <div className={classes.description}>
            <h4>Goodyear Vector 4Seasons SUV Gen-2</h4>
            <p>
               Код товара: <span>170852529</span>
            </p>
            <div className={classes.checkmark}>
               <Checkmark />
               <span>В наличии</span>
            </div>
            <div className={classes.deliveryContainer}>
               <div className={classes.delivery}>
                  <img src={dostavka} alt="Icon delivery" />
                  <p>Доставим: завтра, бесплатно</p>
               </div>
               <a href="#/">Условия доставки</a>
            </div>
            {/* Для мобилки */}
            <div className={classes.boxQuantityMb}>
               <div className={classes.priceMb}>
                  <span>123 000 ₽</span>
               </div>
               <InputNumber />
            </div>
         </div>
         <div className={classes.boxQuantity}>
            <InputNumber />
            <div className={classes.price}>
               <span>123 000 ₽</span>
            </div>
         </div>
         <div>
            <div className={classes.icon}>
               <img src={close} alt="Icon close" />
            </div>
         </div>
      </div>
   )
}

export default CartCard
