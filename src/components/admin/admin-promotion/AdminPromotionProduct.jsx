import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './AdminPromotionProduct.module.css'
import {
   deletePromotionItem,
   getPromotion,
} from '../../../store/addNewPromotionSlice'
import Loading from '../../ui/Loading'
import Button from '../../ui/Button'

const AdminPromotionProduct = () => {
   const [searchQuery, setSearchQuery] = useState('')
   const [filteredPromotion, setFilteredPromotion] = useState([])

   const dispatch = useDispatch()
   const { baseData, status } = useSelector((state) => state.promotion)

   useEffect(() => {
      dispatch(getPromotion())
   }, [])

   useEffect(() => {
      setFilteredPromotion(
         baseData.filter((el) =>
            el.title.toLowerCase().includes(searchQuery.toLowerCase())
         )
      )
   }, [baseData, searchQuery])

   const SearchChangeHandler = (event) => {
      setSearchQuery(event.target.value)
   }

   const deleteChangeHandlerPromotion = (id) => {
      dispatch(deletePromotionItem(id))
   }

   return (
      <div>
         <section className={classes.container}>
            {status === 'loading' && <Loading />}
            <div className={classes.containerBox}>
               <input
                  className={classes.input}
                  type="text"
                  placeholder="Введите товар для поиска"
                  value={searchQuery}
                  onChange={SearchChangeHandler}
               />
               {filteredPromotion.map((el) => (
                  <div className={classes.block} key={el.id}>
                     <img
                        className={classes.img}
                        src={el.images}
                        alt="images"
                     />
                     <h2 className={classes.title}>{el.title}</h2>
                     <Button
                        onClick={() => {
                           deleteChangeHandlerPromotion(el.id)
                        }}
                     >
                        delete
                     </Button>
                  </div>
               ))}
               {filteredPromotion.length === 0 && <h1>пусто</h1>}
            </div>
         </section>
      </div>
   )
}

export default AdminPromotionProduct