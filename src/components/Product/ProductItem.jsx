import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useMatch } from 'react-router-dom'
import Notice from '../ui/Notice'
import classes from './ProductItem.module.css'
import summerIcon from '../../assets/icon/summerIcon.png'
// import commentIcon from '../../assets/icon/commentIcon.png'
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
   const location = useLocation()
   const catalog = useMatch(location.pathname)
   const favorites = useMatch(location.pathname)
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

   const [averageRating, setAverageRating] = useState(0)
   // const dataComment = useSelector((state) => state.newPage.data)
   // const comments = (dataComment && dataComment.comment) || {}

   useEffect(() => {
      if (data && data.comment) {
         const totalRating = Object.values(data.comment).reduce(
            (acc, comment) => acc + comment.rating,
            0
         )
         const totalReviews = Object.keys(data.comment).length
         const newAverageRating = totalReviews ? totalRating / totalReviews : 0
         setAverageRating(newAverageRating.toFixed(1))
      }
   }, [data])

   const discount = data.discount || data.price

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
               {/* <div className={classes.boxComment}>
                  <img src={commentIcon} alt="Иконка комментарий" />
                  <span>{commentArray.length}</span>
               </div> */}
               <div className={classes.boxRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                     <div className={classes.boxRating} key={star}>
                        <Rating
                           fill={star <= averageRating ? '#FF7E00' : 'white'}
                        />
                     </div>
                  ))}
               </div>
            </div>
            <h3>{data.title}</h3>
            <p>
               В наличии: <span>{data.inStock}</span> шт.
            </p>
            <div className={classes.boxButton}>
               <Link to={`${link.pattern.path}/${data.id}`}>
                  <button>{discount}</button>
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
