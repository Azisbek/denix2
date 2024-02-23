import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import classes from './AdminPromotion.module.css'
import Button from '../ui/Button'

const AdminPromotion = () => {
   const dispatch = useDispatch()
   const [imageNews, setImageNews] = useState(null)
   const [imageIsValid, setImageIsValid] = useState(false)
   const [galleryIsValid, setGalleryIsValid] = useState(false)
   const [notEqualNull, setNotEqualNull] = useState(null)

   const generateUniqueId = () => {
      return `_${Math.random().toString(36)}`
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
      const notEqual = galleryPromotion.find(
         (container) => container.image !== null
      )
      setNotEqualNull(notEqual)
   }

   const fileChangeHandler = (event) => {
      const file = event.target.files[0]
      setImageNews(file)
   }

   const submitClickHandler = (event) => {
      event.preventDefault()
      if (imageNews === null) {
         setImageIsValid((prevState) => !prevState)
         return
      }

      const firstImg = galleryPromotion[0].image

      if (firstImg === null) {
         setGalleryIsValid((prevState) => !prevState)
         return
      }

      dispatch('')
   }

   return (
      <section className={classes.container}>
         <h1>Акций</h1>
         <form onSubmit={submitClickHandler} className={classes.form}>
            <div>
               <div>
                  <label htmlFor="title">Названия</label>
                  <input type="text" id="title" />
               </div>
               <div>
                  <label htmlFor="text">Введите текст</label>
                  <textarea required id="text" cols="30" rows="10">
                     {}
                  </textarea>
               </div>
            </div>
            <div className={classes.blockImg}>
               <div className={classes.boxInputFile}>
                  <h3>Фото шины</h3>
                  <label htmlFor="addImg">+ добавить картинку</label>
                  <input onChange={fileChangeHandler} type="file" id="addImg" />
               </div>
               <div className={classes.img}>
                  {imageNews && (
                     <img src={URL.createObjectURL(imageNews)} alt="Картинка" />
                  )}
                  {imageIsValid && (
                     <p className={imageNews !== null ? classes.none : ''}>
                        Добавьте фото!
                     </p>
                  )}
               </div>
               <div id={classes.topPadding} className={classes.boxInputFile}>
                  <h3>Галерия</h3>
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
                        {galleryIsValid && (
                           <p className={notEqualNull && classes.none}>
                              Добавьте фото!
                           </p>
                        )}
                     </div>
                  ))}
               </div>
               <div className={classes.uiContainerButton}>
                  <Button>Сохранить</Button>
                  <Button>Сбросить</Button>
               </div>
            </div>
         </form>
      </section>
   )
}

export default AdminPromotion
