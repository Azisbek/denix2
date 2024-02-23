import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardDescription from './description/CardDescription'
import SimivarProducts from './simivar-products/SimivarProducts'
import Characteristics from './tire-information/Characteristics'
import classes from './CardPageInfor.module.css'
import { getProdictItem } from '../../store/newCardProductSlice'
import Loading from '../ui/Loading'
import { setUseParams } from '../../store/useParamsSlice'
import { getFavoritesItem } from '../../store/favoritesSlice'
import useScrollToTop from '../../hooks/useScrollToTop'

const CardPage = () => {
   const dispatch = useDispatch()
   const { data, isLoading } = useSelector((state) => state.newPage)
   const { favoritesItem } = useSelector((state) => state.favorites)
   const load = useSelector((state) => state.favorites.isLoading)
   const { id } = useParams()
   const productCard = data || favoritesItem
   const loading = isLoading || load

   useScrollToTop()

   useEffect(() => {
      dispatch(getProdictItem(id))
      dispatch(getFavoritesItem(id))
      dispatch(setUseParams(id))
   }, [dispatch, id])

   return (
      <div className={classes.container}>
         {loading && <Loading />}
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
