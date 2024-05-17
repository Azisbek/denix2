import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import classes from './Promotions.module.css'
import useScrollToTop from '../../../hooks/useScrollToTop'
import { getPromotion } from '../../../store/addNewPromotionSlice'
import Promotion from '../../Product/Promotion'

const Promotions = () => {
   const dispatch = useDispatch()
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
            <Link to="/promotion">
               <Button>Посмотреть все акции</Button>
            </Link>
         </div>
      </section>
   )
}

export default Promotions
