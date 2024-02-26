import React from 'react'
import { Link } from 'react-router-dom'
import classes from './AdminPanel.module.css'
import useScrollToTop from '../../../hooks/useScrollToTop'

function AdminPanel() {
   useScrollToTop()
   return (
      <div className={classes.adminPanelContainer}>
         <h1>Админка</h1>
         <Link to="/admin/new-product">Добавить товар</Link>
         <Link to="/admin/new-news">Добавить новость</Link>
         <Link to="/admin/application">Заявки</Link>
         <Link to="/admin/promotion">Акций</Link>

         <Link to="/admin/product">Посмотреть все товары</Link>
         <Link to="/admin/promotion-product">Посмотреть все акции</Link>
      </div>
   )
}

export default AdminPanel
