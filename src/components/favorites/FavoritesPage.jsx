import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../Product/ProductItem'
import classes from './Favorites.module.css'
import { getFavorites } from '../../store/favoritesSlice'

const FavoritesPage = () => {
   const dispatch = useDispatch()
   const { favorites } = useSelector((state) => state.favorites)
   useEffect(() => {
      dispatch(getFavorites())
   }, [dispatch])
   return (
      <div className={classes.container}>
         <div className={classes.titleContainer}>
            <h1>Избранное</h1>
            <p>Товаров: {favorites.length}</p>
         </div>

         <div className={classes.list}>
            {favorites.map((el) => (
               <ProductItem key={el.id} data={el} />
            ))}
         </div>
      </div>
   )
}

export default FavoritesPage
