import React from 'react'
import classes from './SimivarProducts.module.css'
import ProductItem from '../../Product/ProductItem'
import Button from '../../ui/Button'

const SimivarProducts = () => {
   return (
      <section className={classes.similarItemsPanel}>
         <h1 className={classes.simivarProductTitle}>Похожие товары</h1>
         <div className={classes.productList}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
         </div>
         <div className={classes.productButton}>
            <Button className={classes.productButtonItem}>
               Посмотреть все шины
            </Button>
         </div>
      </section>
   )
}

export default SimivarProducts
