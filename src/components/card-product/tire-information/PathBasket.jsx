import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './PathBasket.module.css'
import Button from '../../ui/Button'
import Like from '../../svg/Like'
import Guarantee from '../../../assets/icon/Guarantee.png'
import dostavka from '../../../assets/icon/dostavka.png'
import price from '../../../assets/icon/price.png'
import {
   cardGetAsync,
   cardPostAsync,
   // updateOrAddItem,
} from '../../../store/cardSlice'
import Loading from '../../ui/Loading'
import ModalCart from '../../ui/ModalCart'

const PathBasket = ({ data }) => {
   const dispatch = useDispatch()
   const [showModal, setShowModal] = useState(false)
   const [counter, setCounter] = useState(1)

   const inputNumberChangeHandler = (e) => {
      const { value } = e.target
      const parsedValue = Number(value)
      if (
         !Number.isNaN(parsedValue) &&
         parsedValue >= 1 &&
         Number.isInteger(parsedValue) &&
         Number(parsedValue) <= 15
      ) {
         setCounter(parsedValue)
      }
   }
   const { status, items } = useSelector((state) => state.cart)

   useEffect(() => {
      dispatch(cardGetAsync())
   }, [dispatch])

   const postCartChangeHandler = async () => {
      const itemExists = items.find((item) => item.title === data.title)

      if (!itemExists) {
         // Если товара нет в корзине, добавляем его через Firebase
         await dispatch(
            cardPostAsync({
               quantity: counter,
               ...data,
            })
         )
      } else {
         setShowModal(true)
         // Если товар уже есть в корзине, обновляем его в Redux state
         // dispatch(updateOrAddItem(data))
      }
   }

   return (
      <>
         <div>{status === 'loading' && <Loading />}</div>

         <div className={classes.container}>
            <div>
               <p className={classes.numberThrough}>8 790 С</p>
            </div>
            <div className={classes.price}>
               <p> {data.price}</p> <p>за 1 шт.</p>
            </div>
            <div className={classes.math}>
               <p>
                  {data.price} × {4} = {data.price * 4}
               </p>
            </div>
            <div className={classes.blockUi}>
               <div>
                  <input
                     onChange={inputNumberChangeHandler}
                     value={counter}
                     type="number"
                     className={classes.noSpinArrows}
                  />
               </div>
               <Button onClick={postCartChangeHandler}>В корзину</Button>

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
         {showModal && <ModalCart onClose={() => setShowModal(false)} />}
      </>
   )
}

export default PathBasket
