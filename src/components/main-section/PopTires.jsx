import React from 'react'
import classes from './PopTires.module.css'
import ProductItem from './ProductItem'
import Button from '../ui/Button'

const PopTires = () => {
   return (
      <section className={classes.section}>
         <div className={classes.content}>
            <h2>Популярные шины</h2>
            <div className={classes.selection}>
               <button className={classes.btnSelection}>Автомобильные</button>
               <button className={classes.btnSelection}>Грузовые</button>
               <button className={classes.btnSelection}>
                  Дорожно-строительне
               </button>
               <button className={classes.btnSelection}>
                  Сельскохозяйственные
               </button>
            </div>
            <div className={classes.cardProducts}>
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
            </div>
            <Button>Посмотреть все шины</Button>
         </div>
      </section>
   )
}

export default PopTires
