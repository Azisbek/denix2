import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import classes from './AdminPromotion.module.css'
import Button from '../ui/Button'
import { postPromotion } from '../../store/addNewPromotionSlice'
import useScrollToTop from '../../hooks/useScrollToTop'
import useResetFiliterHome from '../../hooks/useResetFiliterHome'

const AdminPromotion = () => {
   const dispatch = useDispatch()
   useScrollToTop()
   useResetFiliterHome()
   const [imagePromotion, setImagePromotion] = useState(null)
   const [imageIsValid, setImageIsValid] = useState(false)
   const [galleryIsValid, setGalleryIsValid] = useState(false)
   // const [notEqualNull, setNotEqualNull] = useState(null)
   const [titlePromotion, setTitlePromotion] = useState('')
   const [textPromotion, setTextPromotion] = useState('')

   const titlePromotionChangeHandler = (e) => {
      setTitlePromotion(e.target.value)
   }

   const textPromotionChangeHandler = (e) => {
      setTextPromotion(e.target.value)
   }

   const generateUniqueId = () => {
      return `_${Math.random().toString(36).substr(2, 9)}`
   }

   const [galleryPromotion, setGalleryPromotion] = useState(
      new Array(6)
         .fill(null)
         .map(() => ({ id: generateUniqueId(), image: null }))
   )

   const inputFileRef = useRef()

   const galleryChangeHandler = (event) => {
      const file = event.target.files[0]
      if (file) {
         const newGalleryPromotion = [...galleryPromotion]
         const emptyContainer = newGalleryPromotion.find(
            (container) => !container.image
         )

         if (emptyContainer) {
            emptyContainer.image = URL.createObjectURL(file)
            setGalleryPromotion(newGalleryPromotion)
         }
      }
      inputFileRef.current.value = null
      // const notEqual = galleryPromotion.find(
      //    (container) => container.image !== null
      // )
      // setNotEqualNull(notEqual)
   }

   const fileChangeHandler = (event) => {
      const file = event.target.files[0]
      setImagePromotion(file)
   }

   const submitClickHandler = (event) => {
      event.preventDefault()
      if (imagePromotion === null) {
         setImageIsValid(true)
         return
      }

      const firstImg = galleryPromotion[0].image

      if (firstImg === null) {
         setGalleryIsValid(true)
         return
      }

      const dataPost = {
         image: URL.createObjectURL(imagePromotion),
         images: galleryPromotion,
         title: titlePromotion,
         text: textPromotion,
      }

      if (
         titlePromotion.trim() &&
         textPromotion.trim().length > 5 &&
         imagePromotion &&
         galleryPromotion
      ) {
         dispatch(postPromotion(dataPost))
      } else {
         alert('Дополните все обязательные поля')
      }
   }

   return (
      <section className={classes.container}>
         <h1>Акции</h1>

         <form className={classes.form}>
            <div>
               <div>
                  <label htmlFor="title">Название</label>
                  <input
                     value={titlePromotion}
                     onChange={titlePromotionChangeHandler}
                     type="text"
                     id="title"
                     required
                  />
               </div>
               <div>
                  <label htmlFor="text">Введите текст</label>
                  <textarea
                     onChange={textPromotionChangeHandler}
                     value={textPromotion}
                     required
                     id="text"
                     cols="30"
                     rows="10"
                  />
               </div>
            </div>
            <div className={classes.blockImg}>
               <div className={classes.boxInputFile}>
                  <h3>Фото акции</h3>
                  <label htmlFor="addImg">+ добавить картинку</label>
                  <input onChange={fileChangeHandler} type="file" id="addImg" />
               </div>
               <div className={classes.img}>
                  {imagePromotion && (
                     <img
                        src={URL.createObjectURL(imagePromotion)}
                        alt="Картинка"
                     />
                  )}
                  {imageIsValid && (
                     <p className={classes.none}>Добавьте фото!</p>
                  )}
               </div>
               <div id={classes.topPadding} className={classes.boxInputFile}>
                  <h3>Галерея</h3>
                  <label htmlFor="addGallery">+ добавить картинки</label>
                  <input
                     onChange={galleryChangeHandler}
                     ref={inputFileRef}
                     type="file"
                     id="addGallery"
                  />
               </div>
               <div className={classes.gallery}>
                  {galleryPromotion.map((container) => (
                     <div key={container.id} className={classes.galleryItem}>
                        {container.image && (
                           <img src={container.image} alt="Gallery" />
                        )}
                     </div>
                  ))}
                  {galleryIsValid && (
                     <p className={classes.none}>Добавьте фото в галерею!</p>
                  )}
               </div>
               <div className={classes.uiContainerButton}>
                  <Button onClick={submitClickHandler}>Сохранить</Button>
                  <Button type="reset">Сбросить</Button>
               </div>
            </div>
         </form>
      </section>
   )
}

export default AdminPromotion
