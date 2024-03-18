import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import classes from './Promotions.module.css'
import useScrollToTop from '../../../hooks/useScrollToTop'
import { getPromotion } from '../../../store/addNewPromotionSlice'
import Promotion from '../../Product/Promotion'

const Promotions = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const clickChangeHandler = () => {
      navigate('/home/promotion')
   }
   const { baseData } = useSelector((state) => state.promotion)
   const sliceData = baseData.slice(0, 3)

   useEffect(() => {
      dispatch(getPromotion())
   }, [dispatch])

   useScrollToTop()
   return (
      <section>
         <div className={classes.promotionsContainer}>
            <h2>Акции</h2>
            <div className={classes.boxPromotions}>
               {sliceData.map((promotion) => {
                  return <Promotion data={promotion} />
               })}
            </div>
            <Button onClick={clickChangeHandler} to="/promotion">
               Посмотреть все акции
            </Button>
         </div>
      </section>
   )
}

export default Promotions
