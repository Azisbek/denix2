import React from 'react'
import classes from './Selection.module.css'
import Options from './Options'

const Selection = () => {
   return (
      <>
         <div className={classes.containerTitle}>
            <div className={classes.optionsTitle}>
               <h3>Подберём шины по характеристикам</h3>
            </div>
         </div>
         <Options />
      </>
   )
}

export default Selection
