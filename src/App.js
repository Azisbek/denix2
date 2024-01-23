import React from 'react'
import Layout from './layout/Layout'
import OrderPage from './components/order-page/OrderPage'
// import HomePage from './components/home/HomePage'
// import CatalogPage from './components/catalog/CatalogPage'
// import CardPage from './components/card-product/CardPage'

const App = () => (
   <Layout>
      {/* <HomePage /> */}
      {/* <CatalogPage /> */}
      {/* <CardPage /> */}
      <OrderPage />
   </Layout>
)

export default App
