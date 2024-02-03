import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Cart.module.css'
import PaymentPath from './PaymentPath'
import CartCard from './CartCard'
import { cardGetAsync } from '../../../store/cardSlice'

const Cart = () => {
   const { items, status } = useSelector((state) => state.cart)
   const dispatch = useDispatch()
   console.log(items, status)

   useEffect(() => {
      dispatch(cardGetAsync())
   }, [dispatch])

   return (
      <div className={classes.container}>
         <h1>Корзина</h1>
         <div className={classes.cartBox}>
            {status === 'loading' && <h1>Loading...</h1>}

            {status === 'succeeded' && items.length > 0
               ? items.map((el) => (
                    <CartCard
                       key={el.id}
                       id={el.id}
                       price={el.price}
                       title={el.title}
                    />
                 ))
               : null}

            {status && items.length === 0 && <h1>Корзина пуста</h1>}
            {status === 'succeeded' && items.length > 0 && <PaymentPath />}
         </div>
      </div>
   )
}

export default Cart
