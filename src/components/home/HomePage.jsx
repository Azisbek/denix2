import React from 'react'
import MainSlider from '../main-section/MainSlider'
import Layout from '../../layout/Layout'
import PopTires from '../main-section/PopTires'
import Partners from '../main-section/Partners'
import Ticker from '../main-section/Ticker'

const HomePage = () => (
   <Layout>
      <MainSlider />
      <PopTires />
      <Ticker />
      <Partners />
   </Layout>
)

export default HomePage
