import React from 'react'
import classes from './CardPage.module.css'
import CardDescription from './description/CardDescription'

const CardPage = () => {
   return (
      <div className={classes.container}>
         <h1>Шины летние Cordiant Sport 3 PS2 215/65 R16 102V</h1>
         <CardDescription />
      </div>
   )
}

export default CardPage
