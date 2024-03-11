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
} from '../../../store/filteredProductsSlice'

const CatalodSideBar = () => {
   const dispatch = useDispatch()
   const { sideBar } = useSelector((state) => state.toggle)
   const { products } = useSelector((state) => state.product)
   const all = 'Все'
   const [showAllManufacturers, setShowAllManufacturers] = useState(false)
   const [searchQuery, setSearchQuery] = useState('')
   const [filteredManufacturers, setFilteredManufacturers] = useState([])
   const [selectedFilters, setSelectedFilters] = useState({
      width: all,
      profile: all,
      diameter: all,
      minPrice: 0,
      maxPrice: 0,
      typeTire: [],
      seasonality: [],
      state: [],
      manufacturers: [],
      speedIndex: all,
      minLoadIndex: 0,
      maxLoadIndex: 0,
      fuelEconomy: [],
      wetGrip: [],
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

   const typeTireChangeHandler = (value) => {
      const newSelectedFilters = { ...selectedFilters }
      if (newSelectedFilters.typeTire.includes(value)) {
         newSelectedFilters.typeTire = newSelectedFilters.typeTire.filter(
            (item) => item !== value
         )
      } else {
         newSelectedFilters.typeTire.push(value)
      }
      setSelectedFilters(newSelectedFilters)
   }

   const seasonalityChangeHandler = (value) => {
      const newSelectedFilters = { ...selectedFilters }
      if (newSelectedFilters.seasonality.includes(value)) {
         newSelectedFilters.seasonality = newSelectedFilters.seasonality.filter(
            (item) => item !== value
         )
      } else {
         newSelectedFilters.seasonality.push(value)
      }
      setSelectedFilters(newSelectedFilters)
   }

   const stateChangeHandler = (value) => {
      const newSelectedFilters = { ...selectedFilters }
      if (newSelectedFilters.state.includes(value)) {
         newSelectedFilters.state = newSelectedFilters.state.filter(
            (item) => item !== value
         )
      } else {
         newSelectedFilters.state.push(value)
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
      : `Показать все (${manufacturerOption.length})`

   const searchChangeHandler = (event) => {
      setSearchQuery(event.target.value)
   }

   useEffect(() => {
      setFilteredManufacturers(
         manufacturerOption.filter((el) =>
            el.label.toLowerCase().includes(searchQuery.toLowerCase())
         )
      )
   }, [manufacturerOption, searchQuery])

   const manufacturersChangeHandler = (value) => {
      const newSelectedFilters = { ...selectedFilters }
      if (newSelectedFilters.manufacturers.includes(value)) {
         newSelectedFilters.manufacturers =
            newSelectedFilters.manufacturers.filter((item) => item !== value)
      } else {
         newSelectedFilters.manufacturers.push(value)
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

   const fuelEconomyChangeHandler = (value) => {
      const newSelectedFilters = { ...selectedFilters }
      if (newSelectedFilters.fuelEconomy.includes(value)) {
         newSelectedFilters.fuelEconomy = newSelectedFilters.fuelEconomy.filter(
            (item) => item !== value
         )
      } else {
         newSelectedFilters.fuelEconomy.push(value)
      }
      setSelectedFilters(newSelectedFilters)
   }

   const wetGripChangeHandler = (value) => {
      const newSelectedFilters = { ...selectedFilters }
      if (newSelectedFilters.wetGrip.includes(value)) {
         newSelectedFilters.wetGrip = newSelectedFilters.wetGrip.filter(
            (item) => item !== value
         )
      } else {
         newSelectedFilters.wetGrip.push(value)
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
         selectedFilters.minPrice !== 0 ||
         selectedFilters.maxPrice !== 0 ||
         selectedFilters.minLoadIndex !== 0 ||
         selectedFilters.maxLoadIndex !== 0

      const filterCheckboxArray =
         selectedFilters.typeTire.length !== 0 ||
         selectedFilters.seasonality.length !== 0 ||
         selectedFilters.state.length !== 0 ||
         selectedFilters.manufacturers.length !== 0 ||
         selectedFilters.fuelEconomy.length !== 0 ||
         selectedFilters.wetGrip.length !== 0

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
            selectedFilters.profile === product.profile

         const diameterFilter =
            selectedFilters.diameter === all ||
            selectedFilters.diameter === product.diameter

         const minPriceFilter =
            selectedFilters.minPrice === 0 ||
            selectedFilters.minPrice <= product.price

         const maxPriceFilter =
            selectedFilters.maxPrice === 0 ||
            selectedFilters.maxPrice >= product.price

         const typeTireFilter =
            selectedFilters.typeTire.length === 0 ||
            selectedFilters.typeTire.includes(product.tireType)

         const sesonalityFilter =
            selectedFilters.seasonality.length === 0 ||
            selectedFilters.seasonality.includes(product.seasonality)

         const stateFilter =
            selectedFilters.state.length === 0 ||
            selectedFilters.state.includes(product.state)

         const manufacturersFilter =
            selectedFilters.manufacturers.length === 0 ||
            selectedFilters.manufacturers.includes(product.manufacturer)

         const speedIndexFilter =
            selectedFilters.speedIndex === all ||
            selectedFilters.speedIndex === product.speedIndex

         const minLoadIndexFilter =
            selectedFilters.minLoadIndex === 0 ||
            selectedFilters.minLoadIndex <= product.loadIndex

         const maxLoadIndexFilter =
            selectedFilters.maxLoadIndex === 0 ||
            selectedFilters.maxLoadIndex >= product.loadIndex

         const fuelEconomyFilter =
            selectedFilters.fuelEconomy.length === 0 ||
            selectedFilters.fuelEconomy.includes(product.fuelEconomy)

         const wetGripFilter =
            selectedFilters.wetGrip.length === 0 ||
            selectedFilters.wetGrip.includes(product.wetGrip)

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
      window.scrollTo(0, 0)
      console.log(filteredProducts)
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
            <select onChange={widthChangeHandler} name="widthOption" id="">
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
            <select onChange={profileChangeHandler} name="profileOption" id="">
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
                  />
                  <input
                     onChange={maxPriceChangeHandler}
                     name="maxPrice"
                     type="number"
                     placeholder="до"
                  />
               </div>
            </div>
            <div className={classes.tireType}>
               <p>Тип шин</p>
               {tireTypeOption?.map((el) => (
                  <label key={el.label}>
                     <input
                        onChange={() => typeTireChangeHandler(el.value)}
                        type="checkbox"
                        name={el.label}
                     />{' '}
                     {el.value}
                  </label>
               ))}
               <p>Сезонность</p>
               {seasonalityOption?.map((el) => (
                  <label key={el.label}>
                     <input
                        onChange={() => seasonalityChangeHandler(el.value)}
                        type="checkbox"
                        name={el.label}
                     />{' '}
                     {el.value}
                  </label>
               ))}
               <p>Состояние</p>
               {stateOption?.map((el) => (
                  <label key={el.label}>
                     <input
                        onChange={() => stateChangeHandler(el.value)}
                        type="checkbox"
                        name={el.label}
                     />{' '}
                     {el.value}
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
                  <label key={el.label}>
                     <input
                        onChange={() => manufacturersChangeHandler(el.value)}
                        type="checkbox"
                        name={el.label}
                     />{' '}
                     {el.value}
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
                     onChange={minLoadIndexChangeHandler}
                     type="number"
                     placeholder="от "
                  />
                  <input
                     onChange={maxLoadIndexChangeHandler}
                     type="number"
                     placeholder="до "
                  />
               </div>
            </div>
            <div className={classes.containerCheckBox}>
               <p>Топливная экономичность</p>
               {fuelEconomyOption?.map((el) => (
                  <label key={el.label}>
                     <input
                        onChange={() => fuelEconomyChangeHandler(el.value)}
                        type="checkbox"
                        name={el.label}
                     />{' '}
                     {el.value}
                  </label>
               ))}
               <p>Сцепление с мокрой поверхностью</p>
               {wetGripyOption?.map((el) => (
                  <label key={el.label}>
                     <input
                        onChange={() => wetGripChangeHandler(el.value)}
                        type="checkbox"
                        name={el.label}
                     />{' '}
                     {el.value}
                  </label>
               ))}
            </div>
            <div className={classes.price}>
               <p>Уровень внешнего шума</p>
               <div className={classes.priceitemInput}>
                  <select
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
                     onChange={inStockChangeHandler}
                     type="checkbox"
                     name="option1"
                  />{' '}
                  Да
               </label>
               <p>Скидки</p>
               <label>
                  <input
                     onChange={discountChangeHandler}
                     type="checkbox"
                     name="option1"
                  />{' '}
                  Да
               </label>
               <p>
                  Runflat <span className={classes.tieresSpan}>?</span>
               </p>
               <label>
                  <input
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
                     onChange={offRoadChangeHandler}
                     type="checkbox"
                     name="option1"
                  />{' '}
                  Да
               </label>
            </div>
            <div className={classes.uiButtonContainer}>
               <Button onClick={applyFilterHandler}>Подобрать</Button>
               <Button>Сбросить все</Button>
            </div>
         </div>
      </form>
   )
}

export default CatalodSideBar
