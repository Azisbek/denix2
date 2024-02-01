import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './ProductList.module.css'
import ProductItem from '../../Product/ProductItem'
import Pagination from './Pagination'
import { getProducts } from '../../../store/addNewProductSlice'

const ProductList = () => {
   const dispatch = useDispatch()
   const data = useSelector((state) => state.product.products)

   useEffect(() => {
      dispatch(getProducts())
   }, [dispatch])

   return (
      <section>
         <div className={classes.container}>
            <div className={classes.selectBox}>
               <select name="tires">
                  <option value="expensive">Сначала дорогие</option>
               </select>
               <p>
                  Товаров: <span>{data.length}</span>
               </p>
            </div>
            <div className={classes.list}>
               {data.map((el) => {
                  return (
                     <Link to={`/catalog/${el.id}`}>
                        <ProductItem
                           img={el.img}
                           price={el.price}
                           titleName={el.title}
                        />
                     </Link>
                  )
               })}
            </div>
            <Pagination />
         </div>
      </section>
   )
}

export default ProductList
