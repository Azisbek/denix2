import React from 'react'
import classes from './Loading.module.css'

const Loading = () => {
   return (
      <div className={classes.preloader}>
         <div className={classes.preloader__row}>
            <div className={classes.preloader__item} />
            <div className={classes.preloader__item} />
         </div>
      </div>
   )
}

export default Loading
