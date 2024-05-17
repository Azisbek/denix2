import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './AdminPromotionItem.module.css'
import { deletePromotionItem } from '../../../store/addNewPromotionSlice'
import Loading from '../../ui/Loading'
import Button from '../../ui/Button'

const AdminPromotionItem = ({ adminPromotion }) => {
   const dispatch = useDispatch()
   const { status } = useSelector((state) => state.promotion)

   const removePromotionHandler = () => {
      dispatch(deletePromotionItem(adminPromotion.id))
   }

   return (
      <>
         {status === 'loading' && <Loading />}
         <div className={classes.news}>
            <div className={classes.img}>
               <img src="" alt="NewsImage" />
            </div>
            <div className={classes.block}>
               <h3>{adminPromotion.title}</h3>
               <div className={classes.boxTime}>
                  <span>{adminPromotion.date}</span>
                  <Button onClick={removePromotionHandler} id={classes.btn}>
                     Удалить
                  </Button>
               </div>
            </div>
         </div>
      </>
   )
}

export default AdminPromotionItem
