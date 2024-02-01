import React from 'react'
import classes from './AdminPanel.module.css'

function AdminPanel() {
   return (
      <div className={classes.adminPanelContainer}>
         <h1>Админка</h1>
         <div>Добавить товар</div>
         <div>Добавить новость</div>
         <div>Заявки</div>
         <div>Заявки</div>
      </div>
   )
}

export default AdminPanel
