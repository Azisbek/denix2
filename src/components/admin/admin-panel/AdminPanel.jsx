import React from 'react'
import { Link } from 'react-router-dom'
import classes from './AdminPanel.module.css'

function AdminPanel() {
   return (
      <div className={classes.adminPanelContainer}>
         <h1>Админка</h1>
         <Link to="/admin/new-product">Добавить товар</Link>
         <Link to="/admin/new-news">Добавить новость</Link>
         <Link to="/admin/application">Заявки</Link>
         <Link to="/admin/promotion">Акций</Link>
      </div>
   )
}

export default AdminPanel
