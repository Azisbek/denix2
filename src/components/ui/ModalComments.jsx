import React from 'react'
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
   return ReactDOM.createPortal(
      <form onSubmit={postCommentClick} className={classes.modalBackground}>
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
               <button onClick={closeModal}>Закрыть</button>
            </div>
         </div>
      </form>,
      document.getElementById('modalComment')
   )
}

export default ModalComments
