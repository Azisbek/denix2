import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './ProductList.module.css'
import ProductItem from '../../Product/ProductItem'
import Pagination from './Pagination'
import { getProducts } from '../../../store/addNewProductSlice'
import Loading from '../../ui/Loading'
import Button from '../../ui/Button'
import { setSideBar } from '../../../store/toggleSlice'

const ProductList = () => {
   const dispatch = useDispatch()
   const data = useSelector((state) => state.product.products)
   const status = useSelector((state) => state.product.loading)
   const { filtered, showFilteredProducts } = useSelector(
      (state) => state.filtered
   )

   const products = showFilteredProducts ? filtered : data

   useEffect(() => {
      dispatch(getProducts())
   }, [dispatch])

   const openFilterHandler = () => {
      dispatch(setSideBar(true))
   }

   return (
      <section>
         <div className={classes.container}>
            <div className={classes.selectBox}>
               <select name="tires">
                  <option value="expensive">Сначала дорогие</option>
               </select>
               <div className={classes.filter}>
                  <p>
                     Товаров: <span>{products.length}</span>
                  </p>
                  <Button onClick={openFilterHandler} id={classes.filter}>
                     Фильтр
                  </Button>
               </div>
            </div>
            <div className={classes.list}>
               {status === true && <Loading />}
               {products?.map((el) => {
                  return <ProductItem key={el.id} data={el} />
               })}
            </div>
            <Pagination />
         </div>
      </section>
   )
}

export default ProductList
