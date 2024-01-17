import React from 'react'
import classes from './CardPage.module.css'
import CardDescription from './description/CardDescription'
import Characteristics from './tire-information/Characteristics'

const CardPage = () => {
   return (
      <div className={classes.container}>
         <Characteristics />
         <CardDescription />
      </div>
   )
}

export default CardPage
