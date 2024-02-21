import React from 'react'
import { useSelector } from 'react-redux'
import { createPortal } from 'react-dom'
import classes from './Notice.module.css'

const Notice = () => {
   const { notice } = useSelector((state) => state.notice)
   return createPortal(
      <div className={classes.container}>
         <div className={classes.slideDown}>
            <p>{notice}</p>
         </div>
      </div>,
      document.getElementById('notice-root')
   )
}

export default Notice
