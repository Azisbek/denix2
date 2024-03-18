import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import classes from './ModalComments.module.css'
import Button from './Button'
import { Rating } from '../svg/Rating'

const ModalComments = ({
   closeModal,
   titleHandler,
   postCommentClick,
   title,
   handleStarClick,
   rating,
}) => {
   const [validComments, setValidComments] = useState(false)

   const handleCommentsSubmit = (e) => {
      e.preventDefault()
      if (title.trim() === '' || rating === 0) {
         setValidComments(false)
      } else {
         setValidComments(true)
         postCommentClick()
         handleStarClick(0)
         titleHandler({ target: { value: '' } })
      }
   }

   return ReactDOM.createPortal(
      <form onSubmit={handleCommentsSubmit} className={classes.modalBackground}>
         <div className={classes.modalContent}>
            <p>Рейтинг</p>
            <div className={classes.rating}>
               {[1, 2, 3, 4, 5].map((star) => {
                  return (
                     <Rating
                        width="30"
                        height="30"
                        key={star}
                        fill={star <= rating ? '#FF7E00' : 'white'}
                        onClick={() => handleStarClick(star)}
                     />
                  )
               })}
            </div>

            <label className={classes.label} htmlFor="comment">
               Kомментарий
            </label>
            <textarea
               onChange={titleHandler}
               value={title}
               className={classes.inputComment}
               type="text"
               id="comment"
            >
               {}
            </textarea>
            <div className={classes.blockButton}>
               <Button type="submit">Сохранить</Button>
               <Button onClick={closeModal}>Закрыть</Button>
            </div>
            {!validComments && (
               <p className={classes.errorMsg}>
                  Оставьте отзыв и выберите рейтинг. Ваше мнение важно для нас!
               </p>
            )}
         </div>
      </form>,
      document.getElementById('modalComment')
   )
}

export default ModalComments
