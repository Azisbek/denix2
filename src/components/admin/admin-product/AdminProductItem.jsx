import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProduct } from '../../../store/addNewProductSlice'
import classes from './AdminProductItem.module.css'
import Button from '../../ui/Button'
import Loading from '../../ui/Loading'

const AdminProductItem = ({ adminProduct }) => {
   const dispatch = useDispatch()
   const { status } = useSelector((state) => state.product)

   const removeProductHandler = () => {
      dispatch(DeleteProduct(adminProduct.id))
   }

   return (
      <div>
         {status === true && <Loading />}
         <div className={classes.news}>
            <div className={classes.img}>
               <img src="" alt="NewsImage" />
            </div>
            <div className={classes.block}>
               <h3>{adminProduct.title}</h3>
               <div className={classes.boxTime}>
                  <span>{adminProduct.date}</span>
                  <Button onClick={removeProductHandler} id={classes.btn}>
                     Удалить
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AdminProductItem
