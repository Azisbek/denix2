import React from 'react'
import classes from './MainSlider.module.css'
import slider1 from '../../assets/image/slider1.png'

const MainSlider = () => (
   <section className={classes.sliderContainer}>
      <div className={classes.slideContent}>
         <img src={slider1} alt="slider" />
         <div className={classes.textOverlay}>
            <h1>Шиномонтаж и доставка бесплатно</h1>
         </div>
      </div>
   </section>
)

export default MainSlider
