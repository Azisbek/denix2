import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import classes from './Promotions.module.css'
import useScrollToTop from '../../../hooks/useScrollToTop'
// import Promotion from '../../Product/Promotion'

const Promotions = () => {
   const navigate = useNavigate()
   const clickChangeHandler = () => {
      navigate('/promotion')
   }
   useScrollToTop()
   return (
      <section>
         <div className={classes.promotionsContainer}>
            <h2>Акции</h2>
            <div className={classes.boxPromotions}>
               {/* <Promotion />
               <Promotion />
               <Promotion /> */}
            </div>
            <Button onClick={clickChangeHandler} to="/promotion">
               Посмотреть все акции
            </Button>
         </div>
      </section>
   )
}

export default Promotions
