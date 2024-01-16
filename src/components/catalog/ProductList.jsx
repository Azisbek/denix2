import React from 'react'
import classes from './ProductList.module.css'
import ProductItem from '../Product/ProductItem'
import Pagination from './Pagination'

const ProductList = () => {
   return (
      <section>
         <div className={classes.container}>
            <div className={classes.selectBox}>
               <select name="tires">
                  <option value="expensive">Сначала дорогие</option>
               </select>
               <p>
                  Товаров: <span>3492</span>
               </p>
            </div>
            <div className={classes.list}>
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
            </div>
            <Pagination />
         </div>
      </section>
   )
}

export default ProductList
