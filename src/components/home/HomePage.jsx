import React from 'react'
import MainSlider from './main-section/MainSlider'
import PopTires from './main-section/PopTires'
import Partners from './main-section/Partners'
import Ticker from './main-section/Ticker'
import Promotions from './main-section/Promotions'
import Selection from './main-section/Selection'
import Options from './main-section/Options'
import useScrollToTop from '../../hooks/useScrollToTop'
import NewsHome from './main-section/NewsHome'

const HomePage = () => {
   useScrollToTop()
   return (
      <>
         <MainSlider />
         <Selection />
         <Options />
         <PopTires />
         <Promotions />
         <NewsHome />
         <Ticker />
         <Partners />
      </>
   )
}

export default HomePage
