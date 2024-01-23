import React from 'react'
import ProductItem from '../Product/ProductItem'
import classes from './Favorites.module.css'

const FavoritesPage = () => {
   return (
      <div className={classes.container}>
         <div className={classes.titleContainer}>
            <h1>Избранное</h1>
            <p>Товаров: 3 492</p>
         </div>

         <div className={classes.list}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
         </div>
      </div>
   )
}

export default FavoritesPage
