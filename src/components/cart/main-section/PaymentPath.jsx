import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import classes from './PaymentPath.module.css'

const PaymentPath = () => {
   const navigate = useNavigate()
   const clickNavigateShopHandler = () => {
      navigate('/order')
   }

   return (
      <div>
         <div className={classes.blockPaymentPath}>
            <div className={classes.totalQuantityBox}>
               <p>Стоимость</p>
               <span>12 560 C</span>
            </div>
            <div className={classes.totalQuantityBox}>
               <p>Скидка</p>
               <span>-845 C</span>
            </div>
            <div className={classes.totalQuantityBox}>
               <p>Итоговая цена</p>
               <span>123 000 C</span>
            </div>
            <Button
               onClick={clickNavigateShopHandler}
               id={classes.btnPaymentPath}
            >
               Оформить заказ
            </Button>
            <form className={classes.iconLabel}>
               <input
                  type="text"
                  placeholder="Введите промокод"
                  className={classes.promotionalCode}
               />
               <div className={classes.btnIcon}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="none"
                  >
                     <path
                        d="M3.5 8H3V8.5H3.5V8ZM12.8536 8.35355C13.0488 8.15829 13.0488 7.84171 12.8536 7.64645L9.67157 4.46447C9.47631 4.2692 9.15973 4.2692 8.96447 4.46447C8.7692 4.65973 8.7692 4.97631 8.96447 5.17157L11.7929 8L8.96447 10.8284C8.7692 11.0237 8.7692 11.3403 8.96447 11.5355C9.15973 11.7308 9.47631 11.7308 9.67157 11.5355L12.8536 8.35355ZM4 3.5C4 3.22386 3.77614 3 3.5 3C3.22386 3 3 3.22386 3 3.5H4ZM3.5 8.5H12.5V7.5H3.5V8.5ZM4 8V3.5H3V8H4Z"
                        fill="#1A1E29"
                     />
                  </svg>
               </div>
            </form>
         </div>
      </div>
   )
}

export default PaymentPath
