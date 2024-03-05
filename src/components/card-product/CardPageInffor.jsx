import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useMatch } from 'react-router-dom'
import CardDescription from './description/CardDescription'
import SimivarProducts from './simivar-products/SimivarProducts'
import Characteristics from './tire-information/Characteristics'
import classes from './CardPageInfor.module.css'
import { getProdictItem } from '../../store/newCardProductSlice'
import Loading from '../ui/Loading'
import { setUseParams } from '../../store/useParamsSlice'
import { getFavoritesItem } from '../../store/favoritesSlice'

const CardPage = () => {
   const dispatch = useDispatch()
   const { data, isLoading } = useSelector((state) => state.newPage)
   const { favoritesItem } = useSelector((state) => state.favorites)
   const load = useSelector((state) => state.favorites.isLoading)
   const { id } = useParams()
   const match = useMatch(`/catalog/${id}`)
   const productCard = data || favoritesItem
   const loading = isLoading || load

   useEffect(() => {
      dispatch(getProdictItem(id))
      dispatch(getFavoritesItem(id))
      dispatch(setUseParams(id))
      if (match) {
         window.scrollTo(0, 0)
      }
   }, [dispatch, id])

   return (
      <div className={classes.container}>
         {loading && <Loading />}
         {productCard && (
            <>
               <Characteristics data={productCard} id={id} />
               <CardDescription data={productCard} id={id} />
               <SimivarProducts data={productCard} />
            </>
         )}
      </div>
   )
}

export default CardPage
