import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import classes from './ModalCart.module.css'

const ModalCart = ({ onClose }) => {
   useEffect(() => {
      // Add class to the body when the modal is open
      document.body.classList.add(classes.modalOpen)

      // Remove the class when the component is unmounted or modal is closed
      return () => {
         document.body.classList.remove(classes.modalOpen)
      }
   }, [])

   return ReactDOM.createPortal(
      <div className={classes.modalBackground}>
         <div className={classes.modalContent}>
            <h1>Товар уже в корзине</h1>
            <button onClick={onClose}>close</button>
         </div>
      </div>,
      document.getElementById('modalCart')
   )
}

export default ModalCart
