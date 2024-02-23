import React from 'react'
import classes from './CartPage.module.css'
import Cart from './main-section/Cart'
import Recommended from './main-section/Recommended'
import useScrollToTop from '../../hooks/useScrollToTop'

const CartPage = () => {
   useScrollToTop()
   return (
      <section className={classes.container}>
         <Cart />
         <Recommended />
      </section>
   )
}

export default CartPage
