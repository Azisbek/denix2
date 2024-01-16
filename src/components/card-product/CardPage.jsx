import React from 'react'
import classes from './CardPage.module.css'
import CardDescription from './description/CardDescription'

const CardPage = () => {
   return (
      <div className={classes.container}>
         <CardDescription />
      </div>
   )
}

export default CardPage
