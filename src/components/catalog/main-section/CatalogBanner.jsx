import React from 'react'
import classes from './CatalogBanner.module.css'
import Button from '../../ui/Button'

const CatalogBanner = () => {
   return (
      <div className={classes.banner}>
         <div className={classes.content}>
            <h1>Поможем сделать правильный выбор</h1>
            <p>
               Оставьте заявку и наши менеджеры подберут для вашего автомобиля
               требуемый товар
            </p>
            <Button>Оставить заявку</Button>
         </div>
      </div>
   )
}

export default CatalogBanner
