import React from 'react'
import classes from './ProductItem.module.css'
import poptiresImage from '../../assets/image/poptiresImage.png'
import summerIcon from '../../assets/icon/summerIcon.png'
import commentIcon from '../../assets/icon/commentIcon.png'
import ratingIcon from '../../assets/icon/ratingIcon.png'
import ratingHalfIcon from '../../assets/icon/ratingHalfIcon.png'
import likeIcon from '../../assets/icon/likeIcon.png'

const ProductItem = () => {
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
               <img src={ratingIcon} alt="Иконка рейтинга" />
               <img src={ratingIcon} alt="Иконка рейтинга" />
               <img src={ratingIcon} alt="Иконка рейтинга" />
               <img src={ratingIcon} alt="Иконка рейтинга" />
               <img src={ratingHalfIcon} alt="Иконка рейтинга" />
            </div>
         </div>
         <h4>Goodyear Vector 4Seasons</h4>
         <p>
            В наличии: <span>14</span> шт.
         </p>
         <div className={classes.boxButton}>
            <button>5600c</button>
            <button id={classes.btnLike}>
               <img src={likeIcon} alt="Иконка лайка" />
            </button>
         </div>
      </div>
   )
}

export default ProductItem
