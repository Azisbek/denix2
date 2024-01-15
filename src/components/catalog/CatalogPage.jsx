import React from 'react'
import CatalodSideBar from './sidebar/CatalodSideBar'
import ProductList from './ProductList'
import classes from './CatalogPage.module.css'

const CatalogPage = () => {
   return (
      <div className={classes.container}>
         <div className={classes.block}>
            <CatalodSideBar />
            <ProductList />
         </div>
      </div>
   )
}

export default CatalogPage
