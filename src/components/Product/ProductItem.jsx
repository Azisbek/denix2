import React from 'react'
import classes from './ProductItem.module.css'
import poptiresImage from '../../assets/image/poptiresImage.png'
import summerIcon from '../../assets/icon/summerIcon.png'
import commentIcon from '../../assets/icon/commentIcon.png'
import { Rating } from '../svg/Rating'
import Like from '../svg/Like'

const ProductItem = ({ titleName, price }) => {
   return (
      <div className={classes.cardProduct}>
         <div className={classes.boxImage}>
            <img src={poptiresImage} alt="Популярная шина" />
            <img id={classes.summerIcon} src={summerIcon} alt="Иконка летняя" />
         </div>
         <div className={classes.boxReview}>
            <div className={classes.boxComment}>
               <img src={commentIcon} alt="Иконка комментарий" />
               <span>2</span>
            </div>
            <div className={classes.boxRating}>
               <Rating />
               <Rating />
               <Rating />
               <Rating />
               <Rating />
            </div>
         </div>
         <h3>{titleName}</h3>
         <p>
            В наличии: <span>14</span> шт.
         </p>
         <div className={classes.boxButton}>
            <button>{price}</button>
            <div id={classes.btnLike}>
               <Like />
            </div>
         </div>
      </div>
   )
}

export default ProductItem
