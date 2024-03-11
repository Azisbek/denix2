import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Comments.module.css'
import Button from '../../../ui/Button'
import { Rating } from '../../../svg/Rating'
import { postComment } from '../../../../store/commentsSlice'
import CommentsItem from './CommentsItem'
import ModalComments from '../../../ui/ModalComments'

const Comments = () => {
   const [title, setTitle] = useState('')
   const [modal, setModal] = useState(false)
   const { id } = useSelector((state) => state.params)
   const { data } = useSelector((state) => state.newPage)
   const dispatch = useDispatch()
   const [rating, setRating] = useState(0)
   const [averageRating, setAverageRating] = useState(0)

   const handleStarClick = (value) => {
      const newRating = value === rating ? 0 : value
      setRating(newRating)
   }
   useEffect(() => {
      if (data && data.comment) {
         const totalRating = Object.values(data.comment).reduce(
            (acc, comment) => acc + (comment.rating || 0),
            0
         )
         const totalReviews = Object.keys(data.comment).length

         const newAverageRating = totalReviews ? totalRating / totalReviews : 0

         console.log('newAverageRating:', newAverageRating)

         setAverageRating(newAverageRating.toFixed(1))
      }
   }, [data])

   const comments = data.comment
   const commentArray = Object.keys(comments || {}).map((key) => ({
      id: key,
      comment: comments[key].comment,
      date: comments[key].date,
      rating: comments[key].rating,
   }))

   const titleChangeHandler = (e) => {
      setTitle(e.target.value)
   }

   const submitChangeHandler = (e) => {
      e.preventDefault()
      const date = new Date()
      const currentDate = `${date.getDate()}.${(date.getMonth() + 1)
         .toString()
         .padStart(2, '0')}.${date.getFullYear()} / ${date
         .getHours()
         .toString()
         .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`

      const dataComments = {
         comment: title,
         date: currentDate,
         rating,
      }

      dispatch(postComment({ dataComments, id }))
      setModal(false)
   }

   const clickModalComments = () => {
      setModal(true)
   }

   const reverseArray = commentArray.reverse()

   const [currentPage, setCurrentPage] = useState(1)
   const commentsPerPage = 5

   const paginate = () => {
      setCurrentPage(currentPage + 1)
   }

   const commentsToShow = reverseArray.slice(0, currentPage * commentsPerPage)

   return (
      <section className={classes.containerComment}>
         {modal && (
            <ModalComments
               handleStarClick={handleStarClick}
               rating={rating}
               titleHandler={titleChangeHandler}
               title={title}
               postCommentClick={submitChangeHandler}
               closeModal={() => setModal(false)}
            />
         )}

         <div className={classes.container}>
            <Button
               type="button"
               className={classes.buttonComment}
               onClick={clickModalComments}
            >
               Добавить отзыв
            </Button>

            <section className={classes.containerBoxRating}>
               <div className={classes.containerRating}>
                  <div className={classes.boxDescription}>
                     <h3>{commentArray.length}</h3>
                     <span>написано отзывов</span>
                  </div>
                  <div className={classes.ratingContainer}>
                     {[1, 2, 3, 4, 5].map((star) => {
                        const numCommentsWithRating = commentArray.filter(
                           (comment) => comment.rating === star
                        ).length
                        const percentage =
                           (numCommentsWithRating / commentArray.length) * 100

                        return (
                           <div className={classes.boxRating} key={star}>
                              <Rating
                                 width="30"
                                 height="30"
                                 fill={
                                    star <= averageRating ? '#FF7E00' : 'white'
                                 }
                              />
                              <p>{percentage.toFixed(1)}%</p>
                              <span>({numCommentsWithRating} отзыва)</span>
                           </div>
                        )
                     })}
                  </div>
               </div>

               <div className={classes.averageRating}>
                  <h3>{!Number.isNaN(averageRating) ? averageRating : 0}</h3>
                  <p>средний рейтинг</p>
               </div>
            </section>
         </div>
         <div className={classes.boxComment}>
            {commentsToShow.map((el) => (
               <CommentsItem data={el} key={el.id} />
            ))}
            {commentsToShow.length < reverseArray.length && (
               <Button onClick={paginate}>Показать еще</Button>
            )}
         </div>
      </section>
   )
}

export default Comments
