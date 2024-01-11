import React from 'react'
import MainSlider from './components/main-section/MainSlider'
import Layout from './layout/Layout'
import PopTires from './components/main-section/PopTires'
import Partners from './components/main-section/Partners'
import Ticker from './components/main-section/Ticker'

const App = () => (
   <Layout>
      <MainSlider />
      <PopTires />
      <Ticker />
      <Partners />
   </Layout>
)

export default App
