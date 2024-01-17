import React from 'react'
import classes from './CardPage.module.css'
import CardDescription from './description/CardDescription'
import PathBasket from './tire-information/PathBasket'
import SimivarProducts from './simivar-products/SimivarProducts'

const CardPage = () => {
   return (
      <div className={classes.container}>
         <PathBasket />
         <CardDescription />
         <SimivarProducts />
      </div>
   )
}

export default CardPage
