import React from 'react'
import classes from './Cart.module.css'
import PaymentPath from './PaymentPath'
import CartCard from './CartCard'

const Cart = () => {
   return (
      <div className={classes.container}>
         <h1>Корзина</h1>
         <div className={classes.cartBox}>
            <CartCard />
            <PaymentPath />
         </div>
      </div>
   )
}

export default Cart
