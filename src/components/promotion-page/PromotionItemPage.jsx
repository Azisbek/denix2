import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPagePromotion } from '../../store/promotionItemPageSlice'
import Loading from '../ui/Loading'
import classes from './PromotionItemPage.module.css'

const PromotionItemPage = () => {
   const dispatch = useDispatch()
   const { id } = useParams()

   const { dataPage, status, error } = useSelector(
      (state) => state.promotionPageId
   )
   console.log(dataPage)

   useEffect(() => {
      dispatch(getPagePromotion(id))
   }, [dispatch, id])

   return (
      <>
         {status === 'loading' && <Loading />}
         {dataPage ? (
            <div className={classes.container}>
               <h1>{dataPage.title}</h1>
               <img
                  className={classes.bannerImg}
                  src={dataPage.image}
                  alt={dataPage.title}
               />
               <p>{dataPage.text}</p>
               <div className={classes.images}>
                  {dataPage.images.map((el) => {
                     return el.image && <img src={el.image} alt="images" />
                  })}
               </div>
            </div>
         ) : (
            error === 'rejected' && <h1>Error server</h1>
         )}
      </>
   )
}

export default PromotionItemPage
