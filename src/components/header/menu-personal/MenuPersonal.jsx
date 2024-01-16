import React from 'react'
import classes from './MenuPersonal.module.css'
import Button from '../../ui/Button'

const MenuPersonal = () => {
   return (
      <form className={classes.menuProducts}>
         <div className={classes.container}>
            <div className={classes.blockForm}>
               <div>
                  <h1>Вход</h1>
               </div>
               <div className={classes.form}>
                  <div>
                     <input type="text" placeholder="Ваш телефон" />
                  </div>
                  <Button className={classes.buttonFormPersonal}>
                     Получить код
                  </Button>
               </div>
            </div>

            <div className={classes.blockForm}>
               <div>
                  <h1>Регистрация</h1>
               </div>
               <div className={classes.form}>
                  <div>
                     <input type="text" placeholder="Ваш телефон" />
                  </div>
                  <Button className={classes.buttonFormPersonal}>
                     Получить код
                  </Button>
               </div>
               <div className={classes.textContent}>
                  <input className={classes.checkbox} type="checkbox" />
                  <p>
                     Я подтверждаю свою дееспособность, даю согласие на
                     получение <br /> информации о статусе заказов и на
                     обработку персональных данных.
                  </p>
               </div>
            </div>
         </div>
      </form>
   )
}

export default MenuPersonal
