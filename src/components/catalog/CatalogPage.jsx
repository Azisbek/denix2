import React from 'react'
import CatalodSideBar from './sidebar/CatalodSideBar'
import ProductList from './main-section/ProductList'
import classes from './CatalogPage.module.css'
import CatalogDescription from './main-section/CatalogDescription'
import CatalogBanner from './main-section/CatalogBanner'
import useScrollToTop from '../../hooks/useScrollToTop'

const CatalogPage = () => {
   useScrollToTop()
   return (
      <div className={classes.container}>
         <h1>Шины в Бишкеке</h1>
         <div className={classes.block}>
            <CatalodSideBar />
            <ProductList />
         </div>
         <CatalogBanner />
         <CatalogDescription />
      </div>
   )
}

export default CatalogPage
