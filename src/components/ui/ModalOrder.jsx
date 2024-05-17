import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import classes from './ModalOrder.module.css'
import Button from './Button'

const ModalOrder = ({
   setOpenModal,
   totalQuantity,
   totalQuantityPrice,
   items,
}) => {
   useEffect(() => {
      document.body.classList.add(classes.modalOpen)

      return () => {
         document.body.classList.remove(classes.modalOpen)
      }
   }, [])

   return ReactDOM.createPortal(
      <div className={classes.modalBackground}>
         <div className={classes.modalContent}>
            <div className={classes.containerContent}>
               <div className={classes.nameProduct}>
                  <p className={classes.titleName}>Товар</p>
                  <div className={classes.productCardModal}>
                     {items.map((el) => {
                        return <p>{el.title}</p>
                     })}
                  </div>
               </div>
               <div className={classes.quantityOrder}>
                  <p className={classes.titleName}>Количество товара</p>
                  <div className={classes.quantityValue}>
                     <p> {totalQuantity}</p>
                  </div>
               </div>
               <div className={classes.quantityOrder}>
                  <p className={classes.titleName}>Итоговая цена</p>
                  <span>{totalQuantityPrice} C</span>
               </div>
               <div className={classes.uiButton}>
                  <Button>заказать</Button>
                  <Button
                     type="button"
                     onClick={() => {
                        setOpenModal(false)
                     }}
                  >
                     close
                  </Button>
               </div>
            </div>
         </div>
      </div>,
      document.getElementById('modalOrder')
   )
}

export default ModalOrder
