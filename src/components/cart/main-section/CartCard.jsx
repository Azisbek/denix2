import React from 'react'
import { useDispatch } from 'react-redux'
import classes from './CartCard.module.css'
import cart from '../../../assets/image/cart.png'
import dostavka from '../../../assets/icon/dostavka.png'
import close from '../../../assets/icon/close.png'
import Checkmark from '../../svg/Checkmark'
import InputNumber from '../../ui/InputNumber'
import { cardDeleteAsync } from '../../../store/cardSlice'

const CartCard = ({ title, price, id }) => {
   const dispatch = useDispatch()

   const deleteCart = (id) => {
      dispatch(cardDeleteAsync(id)) // Dispatch cardDeleteAsync instead of removeItem
   }

   return (
      <div className={classes.cart}>
         <div className={classes.cartImg}>
            <img src={cart} alt="Картинка товара" />
         </div>
         <div className={classes.description}>
            <h4>{title}</h4>
            <p>
               Код товара: <span>{id}</span>
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
         </div>
         <div className={classes.boxQuantity}>
            <InputNumber />
            <div className={classes.price}>
               <span>{price}</span>
            </div>
         </div>
         <div>
            <button className={classes.icon} onClick={() => deleteCart(id)}>
               <img src={close} alt="Icon close" />
            </button>
         </div>
      </div>
   )
}

export default CartCard
