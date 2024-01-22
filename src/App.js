import React from 'react'
import Layout from './layout/Layout'
import PersonalAccount from './components/personal-area/PersonalAccount'
// import FavoritesPage from './components/favorites/FavoritesPage'
// import HomePage from './components/home/HomePage'
// import CatalogPage from './components/catalog/CatalogPage'
// import CardPage from './components/card-product/CardPage'

const App = () => (
   <Layout>
      <PersonalAccount />
      {/* <HomePage /> */}
      {/* <CatalogPage /> */}
      {/* <CardPage /> */}
      {/* <FavoritesPage /> */}
   </Layout>
)

export default App
