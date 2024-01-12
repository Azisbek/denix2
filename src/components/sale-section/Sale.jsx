import React from 'react'
import classes from './Sale.module.css'
import proverka from '../../assets/image/proverka.png'
import time from '../../assets/icon/time.png'

const Sale = () => (
   <section className={classes.section}>
      <h4 className={classes.h4}>Акции</h4>
      <div className={classes.container}>
         <div className={classes.option}>
            <img className={classes.img} src={proverka} alt="tire" />
            <h5>Тормозные колодки со скидкой 10%</h5>
            <span>
               <p>Диски</p>
               <p>Шины</p>
            </span>
            <div>
               <img src={time} alt="time" />
               <text>Действует до: </text>
               <p>30.09.2021</p>
            </div>
         </div>
         <div className={classes.option}>
            <img className={classes.img} src={proverka} alt="tire" />
            <h5>Тормозные колодки со скидкой 10%</h5>
            <span>
               <p>Диски</p>
               <p>Шины</p>
            </span>
            <div>
               <img src={time} alt="time" />
               <text>Действует до: </text>
               <p>30.09.2021</p>
            </div>
         </div>
         <div className={classes.option}>
            <img className={classes.img} src={proverka} alt="tire" />
            <h5>Тормозные колодки со скидкой 10%</h5>
            <span>
               <p>Диски</p>
               <p>Шины</p>
            </span>
            <div>
               <img src={time} alt="time" />
               <text>Действует до: </text>
               <p>30.09.2021</p>
            </div>
         </div>
      </div>
      <div className={classes.button}>
         <button>Посмотреть все шины</button>
      </div>
   </section>
)
export default Sale
