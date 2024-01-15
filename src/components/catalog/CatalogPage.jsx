import React from 'react'
import CatalodSideBar from './sidebar/CatalodSideBar'
import ProductList from './ProductList'
import classes from './CatalogPage.module.css'
import CatalogDescription from './CatalogDescription'

const CatalogPage = () => {
   return (
      <div className={classes.container}>
         <div className={classes.block}>
            <CatalodSideBar />
            <ProductList />
         </div>
         <CatalogDescription />
      </div>
   )
}

export default CatalogPage
