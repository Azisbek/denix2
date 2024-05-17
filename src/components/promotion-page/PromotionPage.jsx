import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Promotion.module.css'
import Promotion from '../Product/Promotion'
import { getPromotion } from '../../store/addNewPromotionSlice'
import Loading from '../ui/Loading'
import useScrollToTop from '../../hooks/useScrollToTop'
import useResetFiliterHome from '../../hooks/useResetFiliterHome'

const PromotionPage = () => {
   // const id = useParams()
   const dispatch = useDispatch()
   useScrollToTop()
   useResetFiliterHome()

   const { baseData, status } = useSelector((state) => state.promotion)
   console.log(baseData)

   useEffect(() => {
      dispatch(getPromotion())
   }, [dispatch])

   return (
      <div className={classes.container}>
         {status === 'loading' && <Loading />}
         <div className={classes.blockCard}>
            {baseData.map((el) => {
               return <Promotion data={el} />
            })}
         </div>
      </div>
   )
}

export default PromotionPage
