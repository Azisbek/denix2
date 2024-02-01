import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../ui/Button'
import classes from './AddNews.module.css'
import { postNews } from '../../store/addNewsSlice'

const AddNews = () => {
   const dispatch = useDispatch()
   const generateUniqueId = () => {
      return `_${Math.random().toString(36)}`
   }
   const [titleNews, setTitleNews] = useState('')
   const [descriptionNews, setDescriptionNews] = useState('')
   const [urlNews, setUrlNews] = useState('')
   const [imageNews, setImageNews] = useState(null)
   const [imageIsValid, setImageIsValid] = useState(false)
   const [galleryIsValid, setGalleryIsValid] = useState(false)
   const [notEqualNull, setNotEqualNull] = useState(null)
   const [tagsNews, setTagsNews] = useState([])
   const [currentTag, setCurrentTag] = useState('')
   // const [clearTags, setClearTags] = useState(null)
   const [galleryNews, setGalleryNews] = useState(
      new Array(6)
         .fill(null)
         .map(() => ({ id: generateUniqueId(), image: null }))
   )
   const inputFileRef = useRef()

   const inputTitleChangeHandler = (event) => {
      setTitleNews(event.target.value)
   }

   const inputDescriptionChangeHandler = (event) => {
      setDescriptionNews(event.target.value)
   }

   const inputUrlChangeHandler = (event) => {
      setUrlNews(event.target.value)
   }

   const fileChangeHandler = (event) => {
      const file = event.target.files[0]
      setImageNews(file)
   }

   const tagChangeHandler = (event) => {
      setCurrentTag(event.target.value)
   }

   const keyDownHandler = (event) => {
      if (event.key === 'Enter' && currentTag.trim() !== '') {
         if (tagsNews.length >= 5) {
            setCurrentTag('')
            return
         }
         setTagsNews((prevTags) => {
            const newTag = {
               title: currentTag,
               id: Date.now().toString(),
            }
            const newTags = [...prevTags, newTag]
            return newTags
         })
         setCurrentTag('')
      }
   }

   const galleryChangeHandler = (event) => {
      const file = event.target.files[0]
      if (file) {
         const newGalleryNews = [...galleryNews]
         const emptyContainer = newGalleryNews.find(
            (container) => !container.image
         )

         if (emptyContainer) {
            emptyContainer.image = URL.createObjectURL(file)
            setGalleryNews(newGalleryNews)
         }
      }
      inputFileRef.current.value = null
      const notEqual = galleryNews.find((container) => container.image !== null)
      setNotEqualNull(notEqual)
   }

   const submitHandler = (event) => {
      event.preventDefault()
      if (imageNews === null) {
         setImageIsValid((prevState) => !prevState)
         return
      }

      const firstImg = galleryNews[0].image

      if (firstImg === null) {
         setGalleryIsValid((prevState) => !prevState)
         return
      }

      const news = {
         title: titleNews,
         description: descriptionNews,
         url: urlNews,
         image: URL.createObjectURL(imageNews),
         tags: tagsNews,
         gallery: galleryNews,
      }
      dispatch(postNews(news))

      setTitleNews('')
      setDescriptionNews('')
      setUrlNews('')
      setImageNews(null)
      setTagsNews([])
      setGalleryNews(
         new Array(6)
            .fill(null)
            .map(() => ({ id: generateUniqueId(), image: null }))
      )
      setImageIsValid(false)
   }

   const resetClickHandler = () => {
      setTitleNews('')
      setDescriptionNews('')
      setUrlNews('')
      setImageNews(null)
      setTagsNews([])
      setGalleryNews(
         new Array(6)
            .fill(null)
            .map(() => ({ id: generateUniqueId(), image: null }))
      )
      setImageIsValid(false)
      setGalleryIsValid(false)
   }

   return (
      <section className={classes.container}>
         <div className={classes.block}>
            <h1>Добавить новость</h1>
            <form onSubmit={submitHandler} className={classes.form}>
               <div className={classes.columnLeft}>
                  <div className={classes.boxInput}>
                     <label htmlFor="title">Заголовок</label>
                     <input
                        onChange={inputTitleChangeHandler}
                        value={titleNews}
                        required
                        type="text"
                        id="title"
                     />
                  </div>
                  <div className={classes.boxInput}>
                     <label htmlFor="text">Введите текст</label>
                     <textarea
                        onChange={inputDescriptionChangeHandler}
                        value={descriptionNews}
                        required
                        id="text"
                        cols="30"
                        rows="10"
                     >
                        {}
                     </textarea>
                  </div>
                  <div className={classes.boxInput}>
                     <label htmlFor="tag">Теги</label>
                     <input
                        value={currentTag}
                        onKeyDown={keyDownHandler}
                        onChange={tagChangeHandler}
                        type="text"
                        id="tag"
                     />
                  </div>
                  <div className={classes.tags}>
                     {tagsNews.map((tag) => (
                        <span key={tag.id}>{tag.title}</span>
                     ))}
                  </div>
                  <div className={classes.boxInput}>
                     <label htmlFor="url">Ссылка</label>
                     <input
                        onChange={inputUrlChangeHandler}
                        value={urlNews}
                        type="url"
                        required
                        id="url"
                     />
                  </div>
               </div>
               <div className={classes.columnRight}>
                  <div className={classes.boxInputFile}>
                     <h3>Фото шины</h3>
                     <label htmlFor="addImg">+ добавить картинку</label>
                     <input
                        onChange={fileChangeHandler}
                        type="file"
                        id="addImg"
                     />
                  </div>
                  <div className={classes.img}>
                     {imageNews && (
                        <img
                           src={URL.createObjectURL(imageNews)}
                           alt="Картинка"
                        />
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
                     {galleryNews.map((container) => (
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
                  <div className={classes.btn}>
                     <Button type="submit" id={classes.btnSave}>
                        Сохранить
                     </Button>
                     <Button onClick={resetClickHandler} id={classes.btnReset}>
                        Сбросить
                     </Button>
                  </div>
               </div>
            </form>
         </div>
      </section>
   )
}

export default AddNews
