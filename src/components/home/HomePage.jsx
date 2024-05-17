import React from 'react'
import MainSlider from './main-section/MainSlider'
import PopTires from './main-section/PopTires'
import Partners from './main-section/Partners'
import Ticker from './main-section/Ticker'
import Promotions from './main-section/Promotions'
import Selection from './main-section/Selection'
import useScrollToTop from '../../hooks/useScrollToTop'
import NewsHome from './main-section/NewsHome'
import useResetFiliterHome from '../../hooks/useResetFiliterHome'

const HomePage = () => {
   useScrollToTop()
   useResetFiliterHome()
   return (
      <>
         <MainSlider />
         <Selection />
         <PopTires />
         <Promotions />
         <NewsHome />
         <Ticker />
         <Partners />
      </>
   )
}

export default HomePage
