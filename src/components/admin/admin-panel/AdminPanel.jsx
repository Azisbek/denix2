import React from 'react'
import { Link } from 'react-router-dom'
import classes from './AdminPanel.module.css'

function AdminPanel() {
   return (
      <div className={classes.adminPanelContainer}>
         <h1>Админка</h1>
         <Link to="/new-product">Добавить товар</Link>
         <Link to="/new-news">Добавить новость</Link>
         <Link to="/application">Заявки</Link>
         <Link to="/promotion">Акций</Link>
      </div>
   )
}

export default AdminPanel
