import React from 'react'
import classes from './Promotion.module.css'
import promotion from '../../assets/image/promotion.png'
import time from '../../assets/icon/time.png'

const Promotion = () => {
   return (
      <div className={classes.boxPromotion}>
         <img src={promotion} alt="Проверка" />
         <div className={classes.boxDescription}>
            <div className={classes.mobile}>
               <h3>Тормозные колодки со скидкой 10%</h3>
               <div className={classes.boxBtn}>
                  <button>Диски</button>
                  <button>Шины</button>
               </div>
               <div className={classes.boxTime}>
                  <img id={classes.time} src={time} alt="Time icon" />
                  <p>Действует до:</p>
                  <span>30.09.2021</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Promotion
