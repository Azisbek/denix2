import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './CartCard.module.css'
import dostavka from '../../../assets/icon/dostavka.png'
import close from '../../../assets/icon/close.png'
import tire from '../../../assets/image/tire.png'
import Checkmark from '../../svg/Checkmark'
import {
   cardDeleteAsync,
   cardUpdateQuantityAsync,
   updateOrAddItem,
} from '../../../store/cardSlice'
import Loading from '../../ui/Loading'

const CartCard = ({ data }) => {
   const dispatch = useDispatch()
   const loading = useSelector((state) => state.cart.status)

   const discount = data.discount || data.price

   const deleteCart = async (id) => {
      await dispatch(cardDeleteAsync(id))
   }

   const handleQuantityChange = async (event) => {
      const updatedQuantity = event.target.value

      if (/^\d+$/.test(updatedQuantity) && updatedQuantity <= 15) {
         const result = await dispatch(
            cardUpdateQuantityAsync({
               id: data.id,
               newQuantity: updatedQuantity,
            })
         )
         // Теперь, когда Thunk завершилась, обновите состояние Redux
         // Вместо dispatch(updateOrAddItem(result.payload))
         dispatch(
            updateOrAddItem({
               ...result.payload,
               id: data.id,
               price: discount,
               title: data.title,
               img: data.img,
            })
         )
      }
   }

   return (
      <>
         {loading === 'loading' && <Loading />}
         <div className={classes.cart}>
            <div className={classes.cartImg}>
               {/* <img src={data.img} alt="Картинка товара" /> */}
               <img src={tire} alt="Картинка товара" />
            </div>
            <div className={classes.description}>
               <h4>{data.title}</h4>
               <p>
                  Код товара: <span>{data.id}</span>
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
               <input
                  value={data.quantity}
                  type="number"
                  className={classes.noSpinArrows}
                  onChange={(e) => handleQuantityChange(e)}
               />

               <div className={classes.price}>
                  <span>{discount} сом</span>
               </div>
            </div>
            <div>
               <button
                  className={classes.icon}
                  onClick={() => deleteCart(data.id)}
               >
                  <img src={close} alt="Icon close" />
               </button>
            </div>
         </div>
      </>
   )
}

export default CartCard
