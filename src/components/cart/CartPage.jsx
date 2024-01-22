import React from 'react'
import classes from './CartPage.module.css'
import Cart from './main-section/Cart'
import Recommended from './main-section/Recommended'

const CartPage = () => {
   return (
      <section className={classes.container}>
         <Cart />
         <Recommended />
      </section>
   )
}

export default CartPage
