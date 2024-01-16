import React from 'react'
import CatalodSideBar from './sidebar/CatalodSideBar'
// import ProductList from './ProductList'
import classes from './CatalogPage.module.css'
import CatalogDescription from './CatalogDescription'
import CatalogBanner from './CatalogBanner'

const CatalogPage = () => {
   return (
      <div className={classes.container}>
         <div className={classes.block}>
            <CatalodSideBar />
            {/* <ProductList /> */}
         </div>
         <CatalogBanner />
         <CatalogDescription />
      </div>
   )
}

export default CatalogPage
