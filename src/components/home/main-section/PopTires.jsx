import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './PopTires.module.css'
import Button from '../../ui/Button'
import ProductItem from '../../Product/ProductItem'

const PopTires = () => {
   const navigate = useNavigate()
   const clickCatalogHandler = () => {
      navigate('/catalog')
   }

   return (
      <section className={classes.section}>
         <div className={classes.content}>
            <h2>Популярные шины</h2>
            <div className={classes.selection}>
               <button className={classes.btnSelection}>Автомобильные</button>
               <button className={classes.btnSelection}>Грузовые</button>
               <button className={classes.btnSelection}>
                  Дорожно-строительне
               </button>
               <button className={classes.btnSelection}>
                  Сельскохозяйственные
               </button>
            </div>
            <div className={classes.cardProducts}>
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
            </div>
            <Button onClick={clickCatalogHandler}>Посмотреть все шины</Button>
         </div>
      </section>
   )
}

export default PopTires
