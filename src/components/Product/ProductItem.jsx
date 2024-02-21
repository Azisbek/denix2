import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatch } from 'react-router-dom'
import Notice from '../ui/Notice'
import classes from './ProductItem.module.css'
import summerIcon from '../../assets/icon/summerIcon.png'
import commentIcon from '../../assets/icon/commentIcon.png'
import { Rating } from '../svg/Rating'
import Like from '../svg/Like'
import {
   addToFavorites,
   removeFavorites,
   setIsSelected,
} from '../../store/favoritesSlice'
import { setFavoritesInCatalog } from '../../store/addNewProductSlice'
import { setNotice } from '../../store/noticeSlice'

const ProductItem = ({ data }) => {
   const dispatch = useDispatch()
   const { isSelected } = useSelector((state) => state.favorites)
   const catalog = useMatch('/catalog')
   const favorites = useMatch('/favorites')
   const link = catalog || favorites

   const handleAddToFavorites = () => {
      dispatch(addToFavorites(data))
      dispatch(setFavoritesInCatalog(data.id))
      dispatch(setNotice('Добавлено в Избранное'))
   }

   const handleRemoveFromFavorites = () => {
      dispatch(setFavoritesInCatalog(data.id))
      dispatch(removeFavorites(data.id))
      dispatch(setNotice('Удалено с Избранного'))
   }

   const addToFavoritesHandler = () => {
      if (!data.isFavorites) {
         handleAddToFavorites()
      }
      if (data.isFavorites) {
         handleRemoveFromFavorites()
      }
   }
   useEffect(() => {
      if (isSelected) {
         setTimeout(() => {
            dispatch(setIsSelected(false))
         }, 2000)
      }
   }, [dispatch, isSelected])
   return (
      <>
         {isSelected && <Notice />}
         <div className={classes.cardProduct}>
            <div className={classes.boxImage}>
               <img src={data.img} alt="Популярная шина" />
               <img
                  id={classes.summerIcon}
                  src={summerIcon}
                  alt="Иконка летняя"
               />
            </div>
            <div className={classes.boxReview}>
               <div className={classes.boxComment}>
                  <img src={commentIcon} alt="Иконка комментарий" />
                  <span>2</span>
               </div>
               <div className={classes.boxRating}>
                  <Rating />
                  <Rating />
                  <Rating />
                  <Rating />
                  <Rating />
               </div>
            </div>
            <h3>{data.title}</h3>
            <p>
               В наличии: <span>14</span> шт.
            </p>
            <div className={classes.boxButton}>
               <Link to={`${link.pattern.path}/${data.id}`}>
                  <button>{data.price}</button>
               </Link>

               <button
                  onClick={addToFavoritesHandler}
                  id={classes.btnLike}
                  aria-label="Add To Favorites"
               >
                  <Like fill={data.isFavorites ? '#FF7E00' : ''} />
               </button>
            </div>
         </div>
      </>
   )
}

export default React.memo(ProductItem)
