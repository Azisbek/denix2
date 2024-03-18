import React from 'react'

import classes from './CommentsItem.module.css'
import { Rating } from '../../../svg/Rating'

const CommentsItem = ({ data }) => {
   return (
      <div className={classes.blockComment}>
         <div className={classes.nameContainer}>
            <h2>Name</h2>
            <p>Общая оценка</p>
            <div className={classes.rating}>
               <Rating fill={data.rating >= 1 ? '#FF7E00' : 'white'} />
               <Rating fill={data.rating >= 2 ? '#FF7E00' : 'white'} />
               <Rating fill={data.rating >= 3 ? '#FF7E00' : 'white'} />
               <Rating fill={data.rating >= 4 ? '#FF7E00' : 'white'} />
               <Rating fill={data.rating >= 5 ? '#FF7E00' : 'white'} />
            </div>
            <p>{data.date}</p>
         </div>
         <div className={classes.comment}>
            <p>{data.comment}</p>
         </div>
      </div>
   )
}

export default CommentsItem
