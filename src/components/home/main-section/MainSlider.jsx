import React, { useState, useEffect } from 'react'
import img1 from '../../../assets/image/slider1.png'
import img2 from '../../../assets/image/img2.png'
import img3 from '../../../assets/image/techslider2.png'
import classes from './MainSlider.module.css'

const MainSlider = () => {
   const [activeSlide, setActiveSlide] = useState(0)

   const slidesData = [
      {
         title: 'Шиномонтаж и доставка бесплатно',
         buttonText: 'Подробнее',
         image: img1,
      },
      {
         title: 'Лучший выбор и выгодные цены  на шины для любого автомобиля',
         buttonText: 'Узнать больше',
         image: img2,
      },
      {
         title: 'Лучший выбор и выгодные цены на шины для любого автомобиля',
         buttonText: 'Посмотреть акции',
         image: img3,
      },
   ]

   const handleNextSlide = () => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slidesData.length)
   }

   useEffect(() => {
      const intervalId = setInterval(handleNextSlide, 2000)

      return () => {
         clearInterval(intervalId)
      }
   }, [])

   const currentSlide = slidesData[activeSlide]

   return (
      <div className={classes.sliderContainer}>
         <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className={classes.sliderImage}
         />
         <div className={classes.sliderInfo}>
            <div className={classes.slidFix}>
               <h1>{currentSlide.title}</h1>
               <button>{currentSlide.buttonText}</button>

               <div className={classes.fix}>
                  {[0, 1, 2].map((index) => (
                     <div
                        key={index}
                        className={`${classes.fixItem} ${
                           index === activeSlide ? classes.fixItemActive : ''
                        }`}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainSlider
