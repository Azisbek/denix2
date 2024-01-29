import React, { useState } from 'react'
import Select from 'react-select'
import classes from './AddNewProducts.module.css'
import {
   widthOption,
   profileOption,
   diameterOption,
   priceOption,
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

const AddNewProducts = () => {
   const [selectedImage, setSelectedImage] = useState(null)
   const [selectedImages, setSelectedImages] = useState([])
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

   const handleImageUpload = (e) => {
      const file = e.target.files[0]
      setSelectedImage(file)
   }

   const handleImageUploadArray = (e) => {
      const images = e.target.files
      // const id = Math.random().toString()
      // selectedImages.push(id)
      if (selectedImages.length + images.length > 4) {
         return
      }

      setSelectedImages([...selectedImages, ...Array.from(images)])
   }

   const widthHandleChange = (selectedOption) => {
      setFormData({ ...formData, width: selectedOption })
   }

   const profileHandleChange = (selectedOption) => {
      setFormData({ ...formData, profile: selectedOption })
   }

   const diametrHandleChange = (selectedOption) => {
      setFormData({ ...formData, diameter: selectedOption })
   }

   const priceHandleChange = (selectedOption) => {
      setFormData({ ...formData, price: selectedOption })
   }

   const tireTypeHandleChange = (selectedOption) => {
      setFormData({ ...formData, tireType: selectedOption })
   }

   const seasonalityHandleChange = (selectedOption) => {
      setFormData({ ...formData, seasonality: selectedOption })
   }

   const stateHandleChange = (selectedOption) => {
      setFormData({ ...formData, state: selectedOption })
   }

   const manufacturerOptionHandleChange = (selectedOption) => {
      setFormData({ ...formData, manufacturer: selectedOption })
   }

   const speedHandleChange = (selectedOption) => {
      setFormData({ ...formData, speedIndex: selectedOption })
   }

   const loadIndexHandleChange = (selectedOption) => {
      setFormData({ ...formData, loadIndex: selectedOption })
   }

   const fuelEconomyHandleChange = (selectedOption) => {
      setFormData({ ...formData, fuelEconomy: selectedOption })
   }

   const wetGripyHandleChange = (selectedOption) => {
      setFormData({ ...formData, wetGrip: selectedOption })
   }

   const noiseLevelHandleChange = (selectedOption) => {
      setFormData({ ...formData, noiseLevel: selectedOption })
   }

   const formSubmitHandler = (e) => {
      e.preventDefault()
      console.log(formData)
   }

   return (
      <div className={classes.container}>
         <h1>Добавить товар</h1>
         <form>
            <div className={classes.blcokInput}>
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
               </div>
               <div>
                  <label htmlFor="searchSelect">Цена</label>
                  <Select
                     type="number"
                     className={classes.select}
                     id="searchSelect"
                     options={priceOption}
                     // isSearchable
                     onChange={priceHandleChange}
                     placeholder="Search for an option..."
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
                  </div>

                  <div className={classes.containerCheckbox}>
                     <div>
                        <label htmlFor="scitka">Скидка</label>
                        <div>
                           <input type="checkbox" />
                           <p>да</p>
                        </div>
                     </div>

                     <div>
                        <label htmlFor="runflat">Runflat</label>
                        <div>
                           <input type="checkbox" />
                           <p>да</p>
                        </div>
                     </div>

                     <div>
                        <label htmlFor="offroat">Off-Road</label>
                        <div>
                           <input type="checkbox" />
                           <p>да</p>
                        </div>
                     </div>
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
                  <label htmlFor="imageInput2">
                     <h3>Галерия</h3>
                     <span>+ добавить картинку</span>
                     <input
                        type="file"
                        id="imageInput2"
                        name="image"
                        accept="image/*"
                        onChange={handleImageUploadArray}
                        style={{ display: 'none' }}
                        multiple
                     />
                  </label>

                  <div className={classes.imageContainer2}>
                     {selectedImages.map((image, index) => (
                        <img
                           className={classes.image2}
                           src={URL.createObjectURL(image)}
                           alt={`Preview ${index + 1}`}
                        />
                     ))}
                  </div>

                  <h3>Описания</h3>
                  <textarea
                     className={classes.messageInput}
                     type="text"
                     placeholder="описания товара"
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
