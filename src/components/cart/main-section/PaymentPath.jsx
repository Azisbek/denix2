import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { postOrderProduct } from '../../../store/orderTireProductSlice'
import Button from '../../ui/Button'
import classes from './PaymentPath.module.css'
import Loading from '../../ui/Loading'

const PaymentPath = ({ items }) => {
   const [cart, setCart] = useState([])
   const { loading } = useSelector((state) => state.order)
   // const dispatch = useDispatch()

   const totalQuantityPrice = items.reduce(
      (accumulator, currentItem) =>
         accumulator +
         (Number(currentItem.discount) || Number(currentItem.price)) *
            currentItem.quantity,
      0
   )

   const totalQuantity = items.reduce(
      (accumulator, currentItem) => accumulator + Number(currentItem.quantity),
      0
   )

   useEffect(() => {
      const arrayCartOrder = items.filter((el) => {
         return el.quantity > 0
      })
      setCart(arrayCartOrder)
   }, [])

   const clickNavigateShopHandler = () => {
      // dispatch(postOrderProduct(cart))
      console.log(cart)
   }

   return (
      <div>
         {loading === 'loading' && <Loading />}
         <div className={classes.blockPaymentPath}>
            <div className={classes.totalQuantityBox}>
               <p> количество товара</p>

               <span>{totalQuantity} шт</span>
            </div>

            {/* <div className={classes.totalQuantityBox}>
               <p>Скидка</p>
               <span>{totalDiscountPrice} C</span>
            </div> */}
            <div className={classes.totalQuantityBox}>
               <p>Итоговая цена</p>
               <span>{totalQuantityPrice} C</span>
            </div>

            <Button
               onClick={clickNavigateShopHandler}
               id={classes.btnPaymentPath}
               className={classes.orderBtn}
            >
               <Link to="/cart/order">Оформить заказ</Link>
            </Button>

            <form className={classes.iconLabel}>
               <input
                  type="text"
                  placeholder="Введите промокод"
                  className={classes.promotionalCode}
               />
               <div className={classes.btnIcon}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="none"
                  >
                     <path
                        d="M3.5 8H3V8.5H3.5V8ZM12.8536 8.35355C13.0488 8.15829 13.0488 7.84171 12.8536 7.64645L9.67157 4.46447C9.47631 4.2692 9.15973 4.2692 8.96447 4.46447C8.7692 4.65973 8.7692 4.97631 8.96447 5.17157L11.7929 8L8.96447 10.8284C8.7692 11.0237 8.7692 11.3403 8.96447 11.5355C9.15973 11.7308 9.47631 11.7308 9.67157 11.5355L12.8536 8.35355ZM4 3.5C4 3.22386 3.77614 3 3.5 3C3.22386 3 3 3.22386 3 3.5H4ZM3.5 8.5H12.5V7.5H3.5V8.5ZM4 8V3.5H3V8H4Z"
                        fill="#1A1E29"
                     />
                  </svg>
               </div>
            </form>
         </div>
      </div>
   )
}

export default PaymentPath
