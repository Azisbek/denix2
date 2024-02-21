import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardDescription from './description/CardDescription'
import SimivarProducts from './simivar-products/SimivarProducts'
import Characteristics from './tire-information/Characteristics'
import classes from './CardPageInfor.module.css'
import { getProdictItem } from '../../store/newCardProductSlice'
import { setUseParams } from '../../store/useParamsSlice'
import { getFavoritesItem } from '../../store/favoritesSlice'

const CardPage = () => {
   const dispatch = useDispatch()
   const { data } = useSelector((state) => state.newPage)
   const { favoritesItem } = useSelector((state) => state.favorites)
   const { id } = useParams()
   const productCard = data || favoritesItem

   useEffect(() => {
      dispatch(getProdictItem(id))
      dispatch(getFavoritesItem(id))
      dispatch(setUseParams(id))
   }, [dispatch, id])

   return (
      <div className={classes.container}>
         {productCard && (
            <>
               <Characteristics data={productCard} id={id} />
               <CardDescription data={productCard} />
               <SimivarProducts data={productCard} />
            </>
         )}
      </div>
   )
}

export default CardPage
