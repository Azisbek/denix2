import React from 'react'
import classes from './Selection.module.css'

const Selection = () => {
   return (
      <div className={classes.optionsTitle}>
         <h1>
            Подберём{' '}
            <span className={classes.solid}>шины по марке автомобиля</span> или{' '}
            <span className={classes.dashed}>параметрам товара</span>
         </h1>
      </div>
   )
}

export default Selection
