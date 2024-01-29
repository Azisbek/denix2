import React, { useState } from 'react'
import Button from '../ui/Button'
import classes from './AddNews.module.css'

const AddNews = () => {
   const [selectedfile, setSelectedFile] = useState(null)
   const [selectedImages, setSelectedImages] = useState([])
   const [tags] = useState([])
   const [currentTag, setCurrentTag] = useState('')

   const fileChangeHandler = (event) => {
      const file = event.target.files[0]
      setSelectedFile(file)
   }
   const galleryChangeHandler = (event) => {
      const images = event.target.files
      if (selectedImages.length + images.length > 6) {
         return
      }

      setSelectedImages([...selectedImages, ...Array.from(images)])
   }

   const tagChangeHandler = (event) => {
      setCurrentTag(event.target.value)
   }
   const keyDownHandler = (event) => {
      if (event.key === 'Enter' && currentTag.trim() !== '') {
         tags.push({
            title: currentTag.trim(),
            id: Math.random(),
         })
         setCurrentTag('')
      }
   }
   return (
      <section className={classes.container}>
         <div className={classes.block}>
            <h1>Добавить новость</h1>
            <form className={classes.form}>
               <div className={classes.columnLeft}>
                  <div className={classes.boxInput}>
                     <label htmlFor="title">Заголовок</label>
                     <input type="text" id="title" />
                  </div>
                  <div className={classes.boxInput}>
                     <label htmlFor="text">Введите текст</label>
                     <textarea id="text" cols="30" rows="10">
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
                  <div className={classes.tag}>
                     {tags.map((tag) => (
                        <span key={tag.id}>{tag.title}</span>
                     ))}
                  </div>
                  <div className={classes.boxInput}>
                     <label htmlFor="url">Ссылка</label>
                     <input type="url" id="url" />
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
                     {selectedfile && (
                        <img
                           src={URL.createObjectURL(selectedfile)}
                           alt="Картинка"
                        />
                     )}
                  </div>
                  <div id={classes.topPadding} className={classes.boxInputFile}>
                     <h3>Галерия</h3>
                     <label htmlFor="addGallery">+ добавить картинки</label>
                     <input
                        onChange={galleryChangeHandler}
                        type="file"
                        id="addGallery"
                     />
                  </div>
                  <div className={classes.gallery}>
                     {selectedImages.map((image, index) => (
                        <img
                           src={URL.createObjectURL(image)}
                           alt={`Gallery ${index + 1}`}
                        />
                     ))}
                  </div>
                  <div className={classes.btn}>
                     <Button id={classes.btnSave}>Сохранить</Button>
                     <Button id={classes.btnReset}>Сбросить</Button>
                  </div>
               </div>
            </form>
         </div>
      </section>
   )
}

export default AddNews
