import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './CatalogSideBar.module.css'
import Button from '../../ui/Button'
import close from '../../../assets/icon/close.png'
import { setSideBar } from '../../../store/toggleSlice'
import {
   widthOption,
   profileOption,
   diameterOption,
   tireTypeOption,
   seasonalityOption,
   stateOption,
   manufacturerOption,
   speedindexOption,
   fuelEconomyOption,
   wetGripyOption,
   noiseLevelOption,
} from '../../admin/OptionSelect'
import {
   setFilteredProducts,
   setShowFiltered,
   setShowFilteredFromHome,
} from '../../../store/filteredProductsSlice'

const CatalodSideBar = () => {
   const dispatch = useDispatch()
   const { sideBar } = useSelector((state) => state.toggle)
   const { products } = useSelector((state) => state.product)
   const all = 'Все'
   const newTireTypeOption = tireTypeOption?.map((el) => ({
      ...el,
      value: '',
      checked: false,
      id: Math.random().toString(),
   }))
   const newSeasonalityOption = seasonalityOption?.map((el) => ({
      ...el,
      value: '',
      checked: false,
      id: Math.random().toString(),
   }))
   const newStateOption = stateOption?.map((el) => ({
      ...el,
      value: '',
      checked: false,
      id: Math.random().toString(),
   }))
   const newManufacturersOption = manufacturerOption?.map((el) => ({
      ...el,
      value: '',
      checked: false,
      id: Math.random().toString(),
   }))
   const newFuelEconomyOption = fuelEconomyOption?.map((el) => ({
      ...el,
      value: '',
      checked: false,
      id: Math.random().toString(),
   }))
   const newWetGripyOption = wetGripyOption?.map((el) => ({
      ...el,
      value: '',
      checked: false,
      id: Math.random().toString(),
   }))
   const [showAllManufacturers, setShowAllManufacturers] = useState(false)
   const [searchQuery, setSearchQuery] = useState('')
   const [filteredManufacturers, setFilteredManufacturers] = useState([])
   const [selectedFilters, setSelectedFilters] = useState({
      width: all,
      profile: all,
      diameter: all,
      minPrice: '',
      maxPrice: '',
      typeTire: newTireTypeOption,
      seasonality: newSeasonalityOption,
      state: newStateOption,
      manufacturers: newManufacturersOption,
      speedIndex: all,
      minLoadIndex: '',
      maxLoadIndex: '',
      fuelEconomy: newFuelEconomyOption,
      wetGrip: newWetGripyOption,
      noiseLevel: all,
      inStock: false,
      discount: false,
      runflat: false,
      offRoad: false,
   })

   const closeSideBarHandler = () => {
      dispatch(setSideBar(false))
   }

   const widthChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         width: event.target.value,
      })
   }

   const profileChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         profile: event.target.value,
      })
   }

   const diameterChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         diameter: event.target.value,
      })
   }

   const minPriceChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         minPrice: event.target.value,
      })
   }

   const maxPriceChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         maxPrice: event.target.value,
      })
   }

   const typeTireChangeHandler = (e, id, label) => {
      const updatedTypeTire = selectedFilters.typeTire.map((el) => {
         if (el.id === id && el.value !== label) {
            return { ...el, checked: e.target.checked, value: label }
         }
         if (el.id === id && el.value === label) {
            return { ...el, checked: e.target.checked, value: '' }
         }
         return el
      })

      const newSelectedFilters = {
         ...selectedFilters,
         typeTire: updatedTypeTire,
      }

      setSelectedFilters(newSelectedFilters)
   }

   const seasonalityChangeHandler = (e, id, label) => {
      const updatedSeasonality = selectedFilters.seasonality.map((el) => {
         if (el.id === id && el.value !== label) {
            return { ...el, checked: e.target.checked, value: label }
         }
         if (el.id === id && el.value === label) {
            return { ...el, checked: e.target.checked, value: '' }
         }
         return el
      })

      const newSelectedFilters = {
         ...selectedFilters,
         seasonality: updatedSeasonality,
      }
      setSelectedFilters(newSelectedFilters)
   }

   const stateChangeHandler = (e, id, label) => {
      const updatedState = selectedFilters.state.map((el) => {
         if (el.id === id && el.value !== label) {
            return { ...el, checked: e.target.checked, value: label }
         }
         if (el.id === id && el.value === label) {
            return { ...el, checked: e.target.checked, value: '' }
         }
         return el
      })

      const newSelectedFilters = {
         ...selectedFilters,
         state: updatedState,
      }
      setSelectedFilters(newSelectedFilters)
   }

   const toggleManufacturersHandler = () => {
      setShowAllManufacturers((prevState) => !prevState)
      setSearchQuery('')
   }

   const visibleManufacturers = showAllManufacturers
      ? filteredManufacturers
      : filteredManufacturers.slice(0, 5)

   const buttonValue = showAllManufacturers
      ? 'Скрыть'
      : `Показать все (${selectedFilters.manufacturers.length})`

   const searchChangeHandler = (event) => {
      setSearchQuery(event.target.value)
   }

   useEffect(() => {
      setFilteredManufacturers(
         selectedFilters.manufacturers.filter((el) =>
            el.label.toLowerCase().includes(searchQuery.toLowerCase())
         )
      )
   }, [selectedFilters.manufacturers, searchQuery])

   const manufacturersChangeHandler = (e, id, label) => {
      const updatedManufacturers = selectedFilters.manufacturers.map((el) => {
         if (el.id === id && el.value !== label) {
            return { ...el, checked: e.target.checked, value: label }
         }
         if (el.id === id && el.value === label) {
            return { ...el, checked: e.target.checked, value: '' }
         }
         return el
      })

      const newSelectedFilters = {
         ...selectedFilters,
         manufacturers: updatedManufacturers,
      }
      setSelectedFilters(newSelectedFilters)
   }

   const speedIndexChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         speedIndex: event.target.value,
      })
   }

   const minLoadIndexChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         minLoadIndex: event.target.value,
      })
   }

   const maxLoadIndexChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         maxLoadIndex: event.target.value,
      })
   }

   const fuelEconomyChangeHandler = (e, id, label) => {
      const updatedFuelEconomy = selectedFilters.fuelEconomy.map((el) => {
         if (el.id === id && el.value !== label) {
            return { ...el, checked: e.target.checked, value: label }
         }
         if (el.id === id && el.value === label) {
            return { ...el, checked: e.target.checked, value: '' }
         }
         return el
      })

      const newSelectedFilters = {
         ...selectedFilters,
         fuelEconomy: updatedFuelEconomy,
      }
      setSelectedFilters(newSelectedFilters)
   }

   const wetGripChangeHandler = (e, id, label) => {
      const updatedWetGrip = selectedFilters.wetGrip.map((el) => {
         if (el.id === id && el.value !== label) {
            return { ...el, checked: e.target.checked, value: label }
         }
         if (el.id === id && el.value === label) {
            return { ...el, checked: e.target.checked, value: '' }
         }
         return el
      })

      const newSelectedFilters = {
         ...selectedFilters,
         wetGrip: updatedWetGrip,
      }
      setSelectedFilters(newSelectedFilters)
   }

   const noiseLevelChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         noiseLevel: event.target.value,
      })
   }

   const inStockChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         inStock: event.target.checked,
      })
   }

   const discountChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         discount: event.target.checked,
      })
   }

   const runflatChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         runflat: event.target.checked,
      })
   }

   const offRoadChangeHandler = (event) => {
      setSelectedFilters({
         ...selectedFilters,
         offRoad: event.target.checked,
      })
   }

   const showFilteredProductsHandler = () => {
      const filterSelect =
         selectedFilters.width !== all ||
         selectedFilters.profile !== all ||
         selectedFilters.diameter !== all ||
         selectedFilters.speedIndex !== all ||
         selectedFilters.noiseLevel !== all

      const filterNumber =
         selectedFilters.minPrice !== '' ||
         selectedFilters.maxPrice !== '' ||
         selectedFilters.minLoadIndex !== '' ||
         selectedFilters.maxLoadIndex !== ''

      const filterCheckboxArray =
         selectedFilters.typeTire.some((el) => el.value !== '') ||
         selectedFilters.seasonality.some((el) => el.value !== '') ||
         selectedFilters.state.some((el) => el.value !== '') ||
         selectedFilters.manufacturers.some((el) => el.value !== '') ||
         selectedFilters.fuelEconomy.some((el) => el.value !== '') ||
         selectedFilters.wetGrip.some((el) => el.value !== '')

      const filterCheckboxBoolean =
         selectedFilters.inStock !== false ||
         selectedFilters.discount !== false ||
         selectedFilters.runflat !== false ||
         selectedFilters.offRoad !== false

      const showFilteredProducts =
         filterSelect ||
         filterNumber ||
         filterCheckboxArray ||
         filterCheckboxBoolean

      dispatch(setShowFiltered(showFilteredProducts))
   }

   const applyFilterHandler = () => {
      const filteredProducts = products.filter((product) => {
         const widthFilter =
            selectedFilters.width === all ||
            selectedFilters.width === product.width

         const profileFilter =
            selectedFilters.profile === all ||
            Number(selectedFilters.profile) === Number(product.profile)

         const diameterFilter =
            selectedFilters.diameter === all ||
            selectedFilters.diameter === product.diameter

         const minPriceFilter =
            selectedFilters.minPrice === '' ||
            Number(selectedFilters.minPrice) <= Number(product.price)

         const maxPriceFilter =
            selectedFilters.maxPrice === '' ||
            Number(selectedFilters.maxPrice) >= Number(product.price)

         const typeTireFilter =
            selectedFilters.typeTire.every((el) => el.value === '') ||
            selectedFilters.typeTire.some((el) => el.value === product.tireType)

         const sesonalityFilter =
            selectedFilters.seasonality.every((el) => el.value === '') ||
            selectedFilters.seasonality.some(
               (el) => el.value === product.seasonality
            )

         const stateFilter =
            selectedFilters.state.every((el) => el.value === '') ||
            selectedFilters.state.some((el) => el.value === product.state)

         const manufacturersFilter =
            selectedFilters.manufacturers.every((el) => el.value === '') ||
            selectedFilters.manufacturers.some(
               (el) => el.value === product.manufacturer
            )

         const speedIndexFilter =
            selectedFilters.speedIndex === all ||
            selectedFilters.speedIndex === product.speedIndex

         const minLoadIndexFilter =
            selectedFilters.minLoadIndex === '' ||
            Number(selectedFilters.minLoadIndex) <= Number(product.loadIndex)

         const maxLoadIndexFilter =
            selectedFilters.maxLoadIndex === '' ||
            Number(selectedFilters.maxLoadIndex) >= Number(product.loadIndex)

         const fuelEconomyFilter =
            selectedFilters.fuelEconomy.every((el) => el.value === '') ||
            selectedFilters.fuelEconomy.some(
               (el) => el.value === product.fuelEconomy
            )

         const wetGripFilter =
            selectedFilters.wetGrip.every((el) => el.value === '') ||
            selectedFilters.wetGrip.some((el) => el.value === product.wetGrip)

         const noiseLevelFilter =
            selectedFilters.noiseLevel === all ||
            selectedFilters.noiseLevel === product.noiseLevel

         const inStockFilter =
            selectedFilters.inStock === false || product.inStock > 0

         const discountFilter =
            selectedFilters.discount === false || product.discount > 0

         const runflatFilter =
            selectedFilters.runflat === false || product.runflat === true

         const offRoadFilter =
            selectedFilters.offRoad === false || product.offRoad === true

         return (
            widthFilter &&
            profileFilter &&
            diameterFilter &&
            minPriceFilter &&
            maxPriceFilter &&
            typeTireFilter &&
            sesonalityFilter &&
            stateFilter &&
            manufacturersFilter &&
            speedIndexFilter &&
            minLoadIndexFilter &&
            maxLoadIndexFilter &&
            fuelEconomyFilter &&
            wetGripFilter &&
            noiseLevelFilter &&
            inStockFilter &&
            discountFilter &&
            runflatFilter &&
            offRoadFilter
         )
      })

      showFilteredProductsHandler()
      dispatch(setFilteredProducts(filteredProducts))
      dispatch(setSideBar(false))
      window.scrollTo(0, 0)
   }

   const resetFiltersHandler = () => {
      setSelectedFilters({
         width: all,
         profile: all,
         diameter: all,
         minPrice: '',
         maxPrice: '',
         typeTire: newTireTypeOption,
         seasonality: newSeasonalityOption,
         state: newStateOption,
         manufacturers: newManufacturersOption,
         speedIndex: all,
         minLoadIndex: '',
         maxLoadIndex: '',
         fuelEconomy: newFuelEconomyOption,
         wetGrip: newWetGripyOption,
         noiseLevel: all,
         inStock: false,
         discount: false,
         runflat: false,
         offRoad: false,
      })
      setShowAllManufacturers(false)
      setSearchQuery('')
      dispatch(setSideBar(false))
      dispatch(setShowFiltered(false))
      dispatch(setShowFilteredFromHome(false))
      window.scrollTo(0, 0)
   }

   return (
      <form>
         <div
            className={`${
               sideBar ? classes.tieres : `${classes.none} ${classes.tieres}`
            }`}
         >
            <div className={classes.close}>
               <p className={classes.tieresTitle}>
                  Ширина <span className={classes.tieresSpan}>?</span>
               </p>
               <button onClick={closeSideBarHandler} type="button">
                  <img src={close} alt="IconClose" />
               </button>
            </div>
            <select
               value={selectedFilters.width}
               onChange={widthChangeHandler}
               name="widthOption"
               id=""
            >
               <option value="Все">Все</option>
               {widthOption?.map((el) => (
                  <option key={el.label} value={el.value}>
                     {el.value}
                  </option>
               ))}
            </select>
            <p className={classes.tieresTitle}>
               Профиль <span className={classes.tieresSpan}>?</span>
            </p>
            <select
               value={selectedFilters.profile}
               onChange={profileChangeHandler}
               name="profileOption"
               id=""
            >
               <option value="Все">Все</option>
               {profileOption?.map((el) => (
                  <option key={el.label} value={el.value}>
                     {el.value}
                  </option>
               ))}
            </select>
            <p className={classes.tieresTitle}>
               Диаметр <span className={classes.tieresSpan}>?</span>
            </p>
            <select
               value={selectedFilters.diameter}
               onChange={diameterChangeHandler}
               name="diameterOption"
               id=""
            >
               <option value="Все">Все</option>
               {diameterOption?.map((el) => (
                  <option key={el.label} value={el.value}>
                     {el.value}
                  </option>
               ))}
            </select>
            <p className={classes.tieresTitle}>Цена</p>
            <div className={classes.price}>
               <div className={classes.priceitemInput}>
                  <input
                     onChange={minPriceChangeHandler}
                     name="minPrice"
                     type="number"
                     placeholder="от"
                     value={selectedFilters.minPrice}
                  />
                  <input
                     onChange={maxPriceChangeHandler}
                     name="maxPrice"
                     type="number"
                     placeholder="до"
                     value={selectedFilters.maxPrice}
                  />
               </div>
            </div>
            <div className={classes.tireType}>
               <p>Тип шин</p>
               {selectedFilters.typeTire?.map((el) => (
                  <label key={el.id}>
                     <input
                        checked={el.checked}
                        onChange={(e) =>
                           typeTireChangeHandler(e, el.id, el.label)
                        }
                        type="checkbox"
                        name="TypeTire"
                     />
                     {el.label}
                  </label>
               ))}
               <p>Сезонность</p>
               {selectedFilters.seasonality?.map((el) => (
                  <label key={el.id}>
                     <input
                        checked={el.checked}
                        onChange={(e) =>
                           seasonalityChangeHandler(e, el.id, el.label)
                        }
                        type="checkbox"
                        name="Seasonality"
                     />
                     {el.label}
                  </label>
               ))}
               <p>Состояние</p>
               {selectedFilters.state?.map((el) => (
                  <label key={el.id}>
                     <input
                        checked={el.checked}
                        onChange={(e) => stateChangeHandler(e, el.id, el.label)}
                        type="checkbox"
                        name="state"
                     />
                     {el.label}
                  </label>
               ))}
            </div>
            <div className={classes.inputContainer}>
               <p>Производитель</p>
               <span className={classes.icon}>🔍</span>
               <input
                  value={searchQuery}
                  onChange={searchChangeHandler}
                  type="text"
                  className={classes.inputText}
                  placeholder="Введите название"
               />
            </div>
            <div className={classes.containerCheckBox}>
               {visibleManufacturers?.map((el) => (
                  <label key={el.id}>
                     <input
                        checked={el.checked}
                        onChange={(e) =>
                           manufacturersChangeHandler(e, el.id, el.label)
                        }
                        type="checkbox"
                        name="manufacturers"
                     />
                     {el.label}
                  </label>
               ))}
               <button type="button" onClick={toggleManufacturersHandler}>
                  {buttonValue}
               </button>
            </div>
            <div className={classes.indexSpeed}>
               <p className={classes.tieresTitle}>
                  Индекс скорости <span className={classes.tieresSpan}>?</span>
               </p>
               <select
                  value={selectedFilters.speedIndex}
                  onChange={speedIndexChangeHandler}
                  name="speedindexOption"
                  id=""
               >
                  <option value="Все">Все</option>
                  {speedindexOption?.map((el) => (
                     <option key={el.label} value={el.value}>
                        {el.value}
                     </option>
                  ))}
               </select>
            </div>
            <div className={classes.price}>
               <p className={classes.tieresTitle}>
                  Индекс нагрузки <span className={classes.tieresSpan}>?</span>
               </p>
               <div className={classes.priceitemInput}>
                  <input
                     value={selectedFilters.minLoadIndex}
                     onChange={minLoadIndexChangeHandler}
                     type="number"
                     placeholder="от "
                  />
                  <input
                     value={selectedFilters.maxLoadIndex}
                     onChange={maxLoadIndexChangeHandler}
                     type="number"
                     placeholder="до "
                  />
               </div>
            </div>
            <div className={classes.containerCheckBox}>
               <p>Топливная экономичность</p>
               {selectedFilters.fuelEconomy?.map((el) => (
                  <label key={el.id}>
                     <input
                        checked={el.checked}
                        onChange={(e) =>
                           fuelEconomyChangeHandler(e, el.id, el.label)
                        }
                        type="checkbox"
                        name="fuelEconomy"
                     />
                     {el.label}
                  </label>
               ))}
               <p>Сцепление с мокрой поверхностью</p>
               {selectedFilters.wetGrip?.map((el) => (
                  <label key={el.id}>
                     <input
                        checked={el.checked}
                        onChange={(e) =>
                           wetGripChangeHandler(e, el.id, el.label)
                        }
                        type="checkbox"
                        name="wetGrip"
                     />
                     {el.label}
                  </label>
               ))}
            </div>
            <div className={classes.price}>
               <p>Уровень внешнего шума</p>
               <div className={classes.priceitemInput}>
                  <select
                     value={selectedFilters.noiseLevel}
                     onChange={noiseLevelChangeHandler}
                     name="noiseLevelOption"
                     id=""
                  >
                     <option value="Все">Все</option>
                     {noiseLevelOption?.map((el) => (
                        <option key={el.label} value={el.value}>
                           {el.value}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
            <div className={classes.containerCheckBox}>
               <p>В наличии</p>
               <label>
                  <input
                     checked={selectedFilters.inStock}
                     onChange={inStockChangeHandler}
                     type="checkbox"
                     name="option1"
                  />
                  Да
               </label>
               <p>Скидки</p>
               <label>
                  <input
                     checked={selectedFilters.discount}
                     onChange={discountChangeHandler}
                     type="checkbox"
                     name="option1"
                  />
                  Да
               </label>
               <p>
                  Runflat <span className={classes.tieresSpan}>?</span>
               </p>
               <label>
                  <input
                     checked={selectedFilters.runflat}
                     onChange={runflatChangeHandler}
                     type="checkbox"
                     name="option1"
                  />{' '}
                  Да
               </label>
               <p>
                  Off-Road <span className={classes.tieresSpan}>?</span>
               </p>
               <label>
                  <input
                     checked={selectedFilters.offRoad}
                     onChange={offRoadChangeHandler}
                     type="checkbox"
                     name="option1"
                  />
                  Да
               </label>
            </div>
            <div className={classes.uiButtonContainer}>
               <Button onClick={applyFilterHandler}>Подобрать</Button>
               <Button onClick={resetFiltersHandler}>Сбросить все</Button>
            </div>
         </div>
      </form>
   )
}

export default CatalodSideBar
