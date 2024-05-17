import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './DeleteNewsItem.module.css'
import promotion from '../../../assets/image/promotion.png'
import Button from '../../ui/Button'
import { removeNewsInAdmin } from '../../../store/adminNewsSlice'
import Loading from '../../ui/Loading'

const DeleteNewsItem = ({ adminNews }) => {
   const dispatch = useDispatch()
   const { isLoading } = useSelector((state) => state.adminNews)
   const removeNewsHandler = () => {
      dispatch(removeNewsInAdmin(adminNews.id))
   }
   return (
      <>
         {isLoading && <Loading />}
         <div className={classes.news}>
            <div className={classes.img}>
               <img src={promotion} alt="NewsImage" />
            </div>
            <div className={classes.block}>
               <h3>{adminNews.title}</h3>
               <div className={classes.boxTime}>
                  <span>{adminNews.date}</span>
                  <Button onClick={removeNewsHandler} id={classes.btn}>
                     Удалить
                  </Button>
               </div>
            </div>
         </div>
      </>
   )
}

export default DeleteNewsItem
