import React from 'react'
import classes from './CatalogBanner.module.css'

const CatalogBanner = () => {
   return (
      <div className={classes.banner}>
         <h1>Поможем сделать правильный выбор</h1>
         <p>
            Оставьте заявку и наши менеджеры подберут для вашего автомобиля
            требуемый товар
         </p>
      </div>
   )
}

export default CatalogBanner
