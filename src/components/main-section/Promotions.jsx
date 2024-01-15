import React from 'react'
import Button from '../ui/Button'
import classes from './Promotions.module.css'
import Promotion from '../Product/Promotion'

const Promotions = () => {
   return (
      <section>
         <div className={classes.promotionsContainer}>
            <h2>Акции</h2>
            <div className={classes.boxPromotions}>
               <Promotion />
               <Promotion />
               <Promotion />
            </div>
            <Button>Посмотреть все акции</Button>
         </div>
      </section>
   )
}

export default Promotions
