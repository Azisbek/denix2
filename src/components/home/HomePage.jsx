import React from 'react'
import MainSlider from '../main-section/MainSlider'
import PopTires from '../main-section/PopTires'
import Partners from '../main-section/Partners'
import Ticker from '../main-section/Ticker'
import Promotions from '../main-section/Promotions'
import Selection from '../main-section/Selection'
import Options from '../main-section/Options'

const HomePage = () => (
   <>
      <MainSlider />
      <Selection />
      <Options />
      <PopTires />
      <Promotions />
      <Ticker />
      <Partners />
   </>
)

export default HomePage
