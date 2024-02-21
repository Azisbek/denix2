import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import classes from './PathBasket.module.css'
import Button from '../../ui/Button'
import Like from '../../svg/Like'
import Guarantee from '../../../assets/icon/Guarantee.png'
import dostavka from '../../../assets/icon/dostavka.png'
import price from '../../../assets/icon/price.png'
import {
   addToFavorites,
   setIsSelected,
   removeFavorites,
} from '../../../store/favoritesSlice'
import Notice from '../../ui/Notice'
import { setNotice } from '../../../store/noticeSlice'
import { setFavoritesInCatalog } from '../../../store/addNewProductSlice'
import { setFavoritesLocal } from '../../../store/newCardProductSlice'

const PathBasket = ({ data, id }) => {
   const dispatch = useDispatch()
   const { isSelected } = useSelector((state) => state.favorites)
   const productId = useSelector((state) => state.params.id)
   const navigate = useNavigate()
   const favorites = useMatch(`/favorites/${productId}`)

   const handleAddToFavorites = () => {
      dispatch(addToFavorites(data))
      dispatch(setFavoritesInCatalog(id))
      dispatch(setNotice('Добавлено в Избранное'))
   }
   const handleRemoveFromFavorites = () => {
      dispatch(setFavoritesInCatalog(id))
      dispatch(removeFavorites(id))
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
            if (favorites) {
               navigate(-1)
            }
         }, 2000)
         if (!favorites) {
            dispatch(setFavoritesLocal())
         }
      }
   }, [dispatch, isSelected, favorites])
   return (
      <>
         {isSelected && <Notice />}
         <div className={classes.container}>
            <div>
               <p className={classes.numberThrough}>8 790 С</p>
            </div>
            <div className={classes.price}>
               <p>{data.price}</p> <p>за 1 шт.</p>
            </div>
            <div className={classes.math}>
               <p>{data.price} × 4 = 19160</p>
            </div>
            <div className={classes.blockUi}>
               <div>
                  <input type="number" className={classes.noSpinArrows} />
               </div>

               <Button>В корзину</Button>

               <button
                  onClick={addToFavoritesHandler}
                  className={classes.blockLike}
                  aria-label="Add To Favorites"
               >
                  <Like fill={data.isFavorites ? '#FF7E00' : ''} />
               </button>
            </div>

            <div className={classes.textBlock}>
               <p>В наличии</p>
               <div>
                  <img src={Guarantee} alt="cordiant" />
                  <p>Гарантия: Бессрочная от Cordiant</p>
               </div>
               <div>
                  <img src={dostavka} alt="cordiant" />
                  <p>Доставка:</p> <a href="/">Показать варианты (12)</a>
               </div>
               <div>
                  <img src={price} alt="cordiant" />
                  <p>Оплата: </p> <a href="/">Показать варианты (12)</a>
               </div>
            </div>
         </div>
      </>
   )
}

export default React.memo(PathBasket)
