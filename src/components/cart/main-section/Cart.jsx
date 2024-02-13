import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Cart.module.css'
import PaymentPath from './PaymentPath'
import CartCard from './CartCard'
import { cardGetAsync } from '../../../store/cardSlice'
import Loading from '../../ui/Loading'

const Cart = () => {
   const { items, status } = useSelector((state) => state.cart)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(cardGetAsync())
   }, [dispatch])

   return (
      <div className={classes.container}>
         <h1>Корзина</h1>
         <div className={classes.cartBox}>
            {status === 'succeeded' && items.length > 0
               ? items.map((el) => (
                    <CartCard
                       quantity={el.quantity}
                       status={status}
                       img={el.img}
                       key={el.id}
                       id={el.id}
                       price={el.price}
                       title={el.title}
                    />
                 ))
               : null}

            {status && items.length === 0 && <h1>Корзина пуста</h1>}
            {status === 'loading' && <Loading />}
            {status === 'succeeded' && items.length > 0 && (
               <PaymentPath items={items} />
            )}

            {/* Добавьте обработку ошибок */}
            {status === 'failed' && (
               <p>Произошла ошибка при загрузке корзины</p>
            )}
         </div>
      </div>
   )
}

export default Cart
