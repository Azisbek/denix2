import React from 'react'
import CatalodSideBar from './sidebar/CatalodSideBar'
import ProductList from './ProductList'

const CatalogPage = () => {
   return (
      <div>
         <ProductList />
         <CatalodSideBar />
      </div>
   )
}

export default CatalogPage
