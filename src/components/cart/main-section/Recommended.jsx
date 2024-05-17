import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Recommended.module.css'
import { getProducts } from '../../../store/addNewProductSlice'
import ProductItem from '../../Product/ProductItem'

const Recommended = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getProducts())
   }, [dispatch])

   const { products } = useSelector((state) => state.product)

   const filteredProducts = products.map((el) => ({
      ...el,
      comment: el.comment ? Object.values(el.comment) : [],
   }))

   const sortedProducts = filteredProducts
      .map((el) => {
         const ratings = el.comment.map((comment) => comment.rating)
         const sum = ratings.reduce((acc, curr) => acc + curr, 0)
         const average = sum / ratings.length
         return {
            ...el,
            rating: average,
         }
      })
      .filter((el) => {
         return el.rating >= 4 && el.comment.length >= 1
      })
      .sort((a, b) => {
         if (a.rating !== b.rating) {
            return b.rating - a.rating
         }
         return b.comment.length - a.comment.length
      })

   const sliceProduct = sortedProducts.slice(0, 4)

   return (
      <div className={classes.container}>
         <h2>Рекомендуемые товары</h2>
         <div className={classes.cardProducts}>
            {sliceProduct.map((el) => {
               return <ProductItem key={el.id} data={el} />
            })}
         </div>
      </div>
   )
}

export default Recommended
