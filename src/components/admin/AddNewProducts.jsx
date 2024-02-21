import React, { useState, useRef } from 'react'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import classes from './AddNewProducts.module.css'

import {
   widthOption,
   profileOption,
   diameterOption,
   tireTypeOption,
   seasonalityOption,
   stateOption,
   manufacturerOption,
   speedindexOption,
   loadindexOption,
   fuelEconomyOption,
   wetGripyOption,
   noiseLevelOption,
} from './OptionSelect'

import Button from '../ui/Button'
import { postProduct } from '../../store/addNewProductSlice'

const AddNewProducts = () => {
   const dispatch = useDispatch()

   const titleInputNameTireRef = useRef()
   const descriptionTire = useRef()

   const [selectedImage, setSelectedImage] = useState(null)
   const [price, setPrice] = useState(0)

   const generateUniqueId = () => {
      return `_${Math.random().toString(36).substring(2, 9)}`
   }

   const inputFileRef = useRef()

   const [galleryIsValid, setGalleryIsValid] = useState(false)
   const [notEqualNull, setNotEqualNull] = useState(null)
   const [checkboxesAreValid, setCheckboxesAreValid] = useState(true)

   const priceInputChangeHandler = (e) => {
      const { value } = e.target
      const numericValue = parseFloat(value)
      if (!Number.isNaN(numericValue) && numericValue >= 0) {
         setPrice(numericValue)
      } else {
         setPrice(null)
      }
   }

   const checkboxChangeHandler = (checkboxName, isChecked) => {
      const updatedCheckboxes = { ...formData, [checkboxName]: isChecked }
      setFormData(updatedCheckboxes)
      setCheckboxesAreValid(Object.values(updatedCheckboxes).some(Boolean))
   }

   const [galleryNews, setGalleryNews] = useState(
      new Array(6)
         .fill(null)
         .map(() => ({ id: generateUniqueId(), image: null }))
   )

   const [formData, setFormData] = useState({
      width: null,
      profile: null,
      diameter: null,
      price: null,
      tireType: null,
      seasonality: null,
      state: null,
      manufacturer: null,
      speedIndex: null,
      loadIndex: null,
      fuelEconomy: null,
      wetGrip: null,
      noiseLevel: null,
   })
   const [formErrors, setFormErrors] = useState({
      width: false,
      profile: false,
      diameter: false,
      price: false,
      tireType: false,
      seasonality: false,
      state: false,
      manufacturer: false,
      speedIndex: false,
      loadIndex: false,
      fuelEconomy: false,
      wetGrip: false,
      noiseLevel: false,
      images: false,
      discount: false,
      runflat: false,
      offRoad: false,
      description: false,
   })

   const handleImageUpload = (e) => {
      const file = e.target.files[0]
      setSelectedImage(file)
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

   const widthHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, width: !selectedOption })
      setFormData({ ...formData, width: selectedOption })
   }

   const profileHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, profile: !selectedOption })
      setFormData({ ...formData, profile: selectedOption })
   }

   const diametrHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, diameter: !selectedOption })
      setFormData({ ...formData, diameter: selectedOption })
   }

   const tireTypeHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, tireType: !selectedOption })
      setFormData({ ...formData, tireType: selectedOption })
   }

   const seasonalityHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, seasonality: !selectedOption })
      setFormData({ ...formData, seasonality: selectedOption })
   }

   const stateHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, state: !selectedOption })
      setFormData({ ...formData, state: selectedOption })
   }

   const manufacturerOptionHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, manufacturer: !selectedOption })
      setFormData({ ...formData, manufacturer: selectedOption })
   }

   const speedHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, speedIndex: !selectedOption })
      setFormData({ ...formData, speedIndex: selectedOption })
   }

   const loadIndexHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, loadIndex: !selectedOption })
      setFormData({ ...formData, loadIndex: selectedOption })
   }

   const fuelEconomyHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, fuelEconomy: !selectedOption })
      setFormData({ ...formData, fuelEconomy: selectedOption })
   }

   const wetGripyHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, wetGrip: !selectedOption })
      setFormData({ ...formData, wetGrip: selectedOption })
   }

   const noiseLevelHandleChange = (selectedOption) => {
      setFormErrors({ ...formErrors, noiseLevel: !selectedOption })
      setFormData({ ...formData, noiseLevel: selectedOption })
   }

   const formSubmitHandler = async (e) => {
      e.preventDefault()

      const formErrorsCopy = {}
      let hasErrors = false

      const firstImg = galleryNews[0].image

      if (firstImg === null) {
         setGalleryIsValid((prevState) => !prevState)
         return
      }
      if (selectedImage === null) {
         formErrorsCopy.images = true
         hasErrors = true
      } else {
         formErrorsCopy.images = false
      }

      if (hasErrors) {
         return
      }

      const formDataToSend = {
         title: titleInputNameTireRef.current.value,
         price,
         description: descriptionTire.current.value,
         width: formData.width?.value,
         profile: formData.profile?.value,
         diameter: formData.diameter?.value,
         tireType: formData.tireType?.value,
         seasonality: formData.seasonality?.value,
         state: formData.state?.value,
         manufacturer: formData.manufacturer?.value,
         speedIndex: formData.speedIndex?.value,
         loadIndex: formData.loadIndex?.value,
         fuelEconomy: formData.fuelEconomy?.value,
         wetGrip: formData.wetGrip?.value,
         noiseLevel: formData.noiseLevel?.value,
         img: URL.createObjectURL(selectedImage),
         images: galleryNews,
         isFavorites: false,
      }

      Object.keys(formData).forEach((key) => {
         if (formData[key] === null || formData[key]?.value === null) {
            formErrorsCopy[key] = true
            hasErrors = true
         } else {
            formErrorsCopy[key] = false
         }
      })

      setFormErrors(formErrorsCopy)

      console.log(formDataToSend)

      dispatch(postProduct(formDataToSend))
   }

   return (
      <div className={classes.container}>
         <h1>Добавить товар</h1>
         <form>
            <div className={classes.blcokInput}>
               <div>
                  <label htmlFor="nameTire">Названия Шины</label>
                  <input
                     ref={titleInputNameTireRef}
                     required
                     className={classes.nameInput}
                     type="text"
                     placeholder="Названия шины"
                  />
               </div>
               <div>
                  <label htmlFor="searchSelect">Ширина</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={widthOption}
                     isSearchable
                     onChange={widthHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.width && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>
               <div>
                  <label htmlFor="searchSelect">Профиль</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={profileOption}
                     isSearchable
                     onChange={profileHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.profile && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>
               <div>
                  <label htmlFor="searchSelect">Диаметр</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={diameterOption}
                     isSearchable
                     onChange={diametrHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.diameter && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>
               <div>
                  <label htmlFor="searchSelect">Цена</label>
                  <input
                     required
                     className={classes.nameInput}
                     type="number"
                     placeholder="цена"
                     onChange={priceInputChangeHandler}
                  />
               </div>
               <div>
                  <label htmlFor="searchSelect">Тип шины</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={tireTypeOption}
                     isSearchable
                     onChange={tireTypeHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.tireType && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>
               <div>
                  <label htmlFor="searchSelect">Сезонность</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={seasonalityOption}
                     isSearchable
                     onChange={seasonalityHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.seasonality && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>
               <div>
                  <label htmlFor="searchSelect">Состояние</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={stateOption}
                     isSearchable
                     onChange={stateHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.state && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>
               <div className={classes.blockCheckboxSelect}>
                  <div>
                     <label htmlFor="searchSelect">Производитель</label>
                     <Select
                        className={classes.select}
                        id="searchSelect"
                        options={manufacturerOption}
                        isSearchable
                        onChange={manufacturerOptionHandleChange}
                        placeholder="Search for an option..."
                     />
                     {formErrors.manufacturer && (
                        <p className={classes.errorText}>Выберите опцию</p>
                     )}
                  </div>

                  <div className={classes.containerCheckbox}>
                     <div>
                        <label htmlFor="discount">Скидка</label>
                        <div>
                           <input
                              type="checkbox"
                              onChange={(e) =>
                                 checkboxChangeHandler(
                                    'discount',
                                    e.target.checked
                                 )
                              }
                           />
                           <p>да</p>
                        </div>
                     </div>

                     <div>
                        <label htmlFor="runflat">Runflat</label>
                        <div>
                           <input
                              type="checkbox"
                              onChange={(e) =>
                                 checkboxChangeHandler(
                                    'runflat',
                                    e.target.checked
                                 )
                              }
                           />
                           <p>да</p>
                        </div>
                     </div>
                     <div>
                        <label htmlFor="offroad">Off-Road</label>
                        <div>
                           <input
                              type="checkbox"
                              onChange={(e) =>
                                 checkboxChangeHandler(
                                    'offRoad',
                                    e.target.checked
                                 )
                              }
                           />
                           <p>да</p>
                        </div>
                     </div>

                     {!checkboxesAreValid && (
                        <p className={classes.errorText}>
                           Выберите хотя бы одну опцию из чекбоксов
                        </p>
                     )}
                  </div>
               </div>
               <div>
                  <label htmlFor="searchSelect">Индекс скорости</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={speedindexOption}
                     isSearchable
                     onChange={speedHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.speedIndex && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>

               <div>
                  <label htmlFor="searchSelect">Индекс нагрузки</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={loadindexOption}
                     isSearchable
                     onChange={loadIndexHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.loadIndex && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>

               <div>
                  <label htmlFor="searchSelect">Топливная экономность</label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={fuelEconomyOption}
                     isSearchable
                     onChange={fuelEconomyHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.fuelEconomy && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>

               <div>
                  <label htmlFor="searchSelect">
                     Сцепление с мокрой поверхностью
                  </label>
                  <Select
                     className={classes.select}
                     id="searchSelect"
                     options={wetGripyOption}
                     isSearchable
                     onChange={wetGripyHandleChange}
                     placeholder="Search for an option..."
                  />
                  {formErrors.wetGrip && (
                     <p className={classes.errorText}>Выберите опцию</p>
                  )}
               </div>
               <div className={classes.blockCheckboxSelect}>
                  <div>
                     <label htmlFor="searchSelect">Уровень внешнего шума</label>
                     <Select
                        className={classes.select}
                        id="searchSelect"
                        options={noiseLevelOption}
                        isSearchable
                        onChange={noiseLevelHandleChange}
                        placeholder="Search for an option..."
                     />
                     {formErrors.noiseLevel && (
                        <p className={classes.errorText}>Выберите опцию</p>
                     )}
                  </div>

                  <div className={classes.containerCheckbox}>
                     <div>
                        <label htmlFor="scitka">Комплект</label>
                        <div>
                           <input type="checkbox" />
                           <p>да</p>
                        </div>
                     </div>

                     <div>
                        <label htmlFor="runflat">В наличий</label>
                        <div>
                           <input type="checkbox" />
                           <p>да</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={classes.blcokImgContainer}>
               <label htmlFor="imageInput">
                  <h3>Фото шины</h3>
                  <span>+ добавить картинку</span>
                  <input
                     type="file"
                     id="imageInput"
                     name="image"
                     accept="image/*"
                     onChange={handleImageUpload}
                     style={{ display: 'none' }}
                  />
               </label>

               <div className={classes.imageContainer}>
                  {selectedImage && (
                     <img
                        className={classes.image}
                        src={URL.createObjectURL(selectedImage)}
                        alt="Preview"
                     />
                  )}
               </div>
               <div>
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

                  <h3>Описания</h3>
                  <textarea
                     className={classes.messageInput}
                     type="text"
                     placeholder="описания товара"
                     ref={descriptionTire}
                  />
                  <div className={classes.containerButton}>
                     <Button onClick={formSubmitHandler}>Сохранить</Button>
                     <Button type="submit">Сбросить</Button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}

export default AddNewProducts
