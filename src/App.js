import React from 'react'
import MainSlider from './components/main-section/MainSlider'
import Layout from './layout/Layout'
import Selection from './components/main-section/Selection'
import Options from './components/main-section/Options'
import PopTires from './components/main-section/PopTires'

const App = () => (
   <Layout>
      <MainSlider />
      <Selection />
      <Options />
      <PopTires />
   </Layout>
)

export default App
