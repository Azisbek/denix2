import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Promotion.module.css'
import time from '../../assets/icon/time.png'
import promotion from '../../assets/image/promotion.png'

const Promotion = ({ data }) => {
   return (
      <div className={classes.boxPromotion}>
         {/* <img src={data.image} alt="Проверка" /> */}
         <img src={promotion} alt="Проверка" />
         <div className={classes.boxDescription}>
            <div className={classes.mobile}>
               <Link to={`/promotion/${data.id}`}>{data.title}</Link>
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
