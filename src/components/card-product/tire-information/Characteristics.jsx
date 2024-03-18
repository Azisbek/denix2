import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './Characteristics.module.css'
import season from '../../../assets/icon/season.png'
import checkmark from '../../../assets/icon/checkmark.png'
import commentIcon from '../../../assets/icon/commentIcon.png'
import { Rating } from '../../svg/Rating'
import PathBasket from './PathBasket'

const Characteristics = ({ data, id }) => {
   const [averageRating, setAverageRating] = useState(0)
   const dataComment = useSelector((state) => state.newPage.data)
   const comments = dataComment.comment
   const commentArray = Object.keys(comments || {}).map((key) => ({
      id: key,
      comment: comments[key].comment,
      date: comments[key].date,
      rating: comments[key].rating,
   }))

   useEffect(() => {
      if (data && data.comment) {
         const totalRating = Object.values(data.comment).reduce(
            (acc, comment) => acc + comment.rating,
            0
         )
         const totalReviews = Object.keys(data.comment).length
         const newAverageRating = totalReviews ? totalRating / totalReviews : 0
         setAverageRating(newAverageRating.toFixed(1))
      }
   }, [data])

   const handleScrollToHistory = () => {
      const historyElement = document.getElementById('characteristic')

      if (historyElement) {
         historyElement.scrollIntoView({ behavior: 'smooth' })
      }
   }

   return (
      <div className={classes.block}>
         <h1>{data.title}</h1>
         <div className={classes.boxIcons}>
            <div className={classes.boxImage}>
               <img src={season} alt="Icon season" />
               <img src={checkmark} alt="Icon checkmark" />
            </div>
            <div className={classes.boxComment}>
               <img src={commentIcon} alt="Icon comment" />
               <span>{commentArray.length}</span>
            </div>
            <div className={classes.boxRating}>
               {[1, 2, 3, 4, 5].map((star) => {
                  return (
                     <div className={classes.boxRating} key={star}>
                        <Rating
                           fill={star <= averageRating ? '#FF7E00' : 'white'}
                        />
                     </div>
                  )
               })}
            </div>
            <p>
               Код товара: <span>170852529</span>
            </p>
         </div>
         <div className={classes.blockContainer}>
            <div className={classes.boxCharacteristics}>
               <div className={classes.img}>
                  <img src={data.img} alt="Фото характеристика" />
               </div>
               <div className={classes.shortDescription}>
                  <h3>Краткое описание</h3>
                  <div className={classes.descriptionLine}>
                     <p>Производитель</p>
                     <span>{data.manufacturer}</span>
                  </div>

                  <div className={classes.descriptionLine}>
                     <p>Сезонность</p>
                     <span>{data.seasonality}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Ширина</p>
                     <span>{data.width}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Профиль</p>
                     <span>{data.profile}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Диаметр</p>
                     <span>{data.diameter}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Индекс скорости</p>
                     <span>{data.speedIndex}</span>
                  </div>
                  <div className={classes.descriptionLine}>
                     <p>Индекс нагрузки</p>
                     <span>{data.loadIndex}</span>
                  </div>

                  <Link onClick={handleScrollToHistory} to="characteristics">
                     Перейти ко всем характеристикам (12)
                  </Link>
               </div>
            </div>
            <PathBasket data={data} id={id} />
         </div>
      </div>
   )
}

export default Characteristics
