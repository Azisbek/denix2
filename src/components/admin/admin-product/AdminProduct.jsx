import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './AdminProduct.module.css'
import { getProducts } from '../../../store/addNewProductSlice'
import Loading from '../../ui/Loading'
import AdminProductItem from './AdminProductItem'
import useScrollToTop from '../../../hooks/useScrollToTop'
import useResetFiliterHome from '../../../hooks/useResetFiliterHome'

const AdminProduct = () => {
   const dispatch = useDispatch()
   useScrollToTop()
   useResetFiliterHome()
   const [searchQuery, setSearchQuery] = useState('')
   const [filteredProduct, setFilteredProduct] = useState([])
   const { products, status } = useSelector((state) => state.product)

   useEffect(() => {
      dispatch(getProducts())
   }, [])

   useEffect(() => {
      setFilteredProduct(
         products.filter((el) =>
            el.title.toLowerCase().includes(searchQuery.toLowerCase())
         )
      )
   }, [products, searchQuery])

   const SearchChangeHandler = (event) => {
      setSearchQuery(event.target.value)
   }

   return (
      <section className={classes.container}>
         {status === true && <Loading />}
         <div className={classes.containerBox}>
            <input
               className={classes.input}
               type="text"
               placeholder="Введите товар для поиска"
               value={searchQuery}
               onChange={SearchChangeHandler}
            />
            {filteredProduct.map((el) => (
               <AdminProductItem key={el.id} adminProduct={el} />
            ))}
         </div>
      </section>
   )
}

export default AdminProduct
