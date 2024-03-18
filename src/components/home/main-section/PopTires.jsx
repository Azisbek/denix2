import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classes from './PopTires.module.css'
import Button from '../../ui/Button'
import { getProducts } from '../../../store/addNewProductSlice'
import ProductItem from '../../Product/ProductItem'

const PopTires = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const clickCatalogHandler = () => {
      navigate('/catalog')
   }

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
      <section className={classes.section}>
         <div className={classes.content}>
            <h2>Популярные шины</h2>
            <div className={classes.cardProducts}>
               {sliceProduct.map((el) => {
                  return <ProductItem key={el.id} data={el} />
               })}
            </div>
            <Button onClick={clickCatalogHandler}>Посмотреть все шины</Button>
         </div>
      </section>
   )
}

export default PopTires
