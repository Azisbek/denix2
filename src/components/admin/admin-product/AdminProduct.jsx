import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './AdminProduct.module.css'
import { DeleteProduct, getProducts } from '../../../store/addNewProductSlice'
import Button from '../../ui/Button'
import Loading from '../../ui/Loading'
import useScrollToTop from '../../../hooks/useScrollToTop'

const AdminProduct = () => {
   const dispatch = useDispatch()
   useScrollToTop()
   const [searchQuery, setSearchQuery] = useState('')
   const [filteredProduct, setFilteredProduct] = useState([])
   const { products, status } = useSelector((state) => state.product)
   console.log(products)

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

   const deleteClickHandler = (id) => {
      dispatch(DeleteProduct(id))
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
               <div className={classes.block} key={el.id}>
                  <img className={classes.img} src={el.images} alt="images" />
                  <h2 className={classes.title}>{el.title}</h2>
                  <Button
                     onClick={() => {
                        deleteClickHandler(el.id)
                     }}
                  >
                     delete
                  </Button>
               </div>
            ))}
         </div>
      </section>
   )
}

export default AdminProduct
