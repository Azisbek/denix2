import React from 'react'
import classes from './CardPage.module.css'
import CardDescription from './description/CardDescription'
import SimivarProducts from './simivar-products/SimivarProducts'
import Characteristics from './tire-information/Characteristics'
// import PathBasket from './tire-information/PathBasket'

const CardPage = () => {
   return (
      <div className={classes.container}>
         {/* <div className={classes.informationContainer}> */}
         <Characteristics />
         {/* </div> */}

         <CardDescription />
         <SimivarProducts />
      </div>
   )
}

export default CardPage
