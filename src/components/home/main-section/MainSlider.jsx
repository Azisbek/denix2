import React from 'react'
import classes from './MainSlider.module.css'

const MainSlider = () => {
   return (
      <div className={classes.sliderContainer}>
         <div className={classes.sliderInfo}>
            <h1>
               Шиномонтаж <br />и доставка бесплатно
            </h1>
            <button>Подробнее</button>
            <div className={classes.fix}>
               <div className={`${classes.fixItem} ${classes.fixItemActive}`} />
               <div className={classes.fixItem} />
               <div className={classes.fixItem} />
               <div className={classes.fixItem} />
            </div>
         </div>
      </div>
   )
}

export default MainSlider
