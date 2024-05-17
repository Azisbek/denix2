import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classes from './Options.module.css'
import Button from '../../ui/Button'
import {
   diameterOption,
   profileOption,
   seasonalityOption,
   tireTypeOption,
   widthOption,
} from '../../admin/OptionSelect'
import {
   setDiameterFilters,
   setFilteredProducts,
   setProfileFilters,
   setSeasonalityFilters,
   setShowFilteredFromHome,
   setTypeTireFilters,
   setWidthFilters,
   tireDiameter,
   tireProfile,
   tireSeasonality,
   tireType,
   tireWidth,
} from '../../../store/filteredProductsSlice'

const Options = () => {
   const dispatch = useDispatch()
   const { products } = useSelector((state) => state.product)
   const { selectedFilters } = useSelector((state) => state.filtered)
   const navigate = useNavigate()

   const widthChangeHandler = (event) => {
      dispatch(setWidthFilters(event.target.value))
   }

   const profileChangeHandler = (event) => {
      dispatch(setProfileFilters(event.target.value))
   }

   const diameterChangeHandler = (event) => {
      dispatch(setDiameterFilters(event.target.value))
   }

   const typeTireChangeHandler = (event) => {
      dispatch(setTypeTireFilters(event.target.value))
   }

   const seasonalityChangeHandler = (event) => {
      dispatch(setSeasonalityFilters(event.target.value))
   }

   const showFilteredProductsHandler = () => {
      const showFilteredProductsFromHome =
         selectedFilters.width !== tireWidth ||
         selectedFilters.profile !== tireProfile ||
         selectedFilters.diameter !== tireDiameter ||
         selectedFilters.typeTire !== tireType ||
         selectedFilters.seasonality !== tireSeasonality

      dispatch(setShowFilteredFromHome(showFilteredProductsFromHome))
   }

   const applyFilterHandler = () => {
      const filteredProducts = products.filter((product) => {
         const widthFilter =
            selectedFilters.width === tireWidth ||
            selectedFilters.width === product.width

         const profileFilter =
            selectedFilters.profile === tireProfile ||
            Number(selectedFilters.profile) === Number(product.profile)

         const diameterFilter =
            selectedFilters.diameter === tireDiameter ||
            selectedFilters.diameter === product.diameter

         const typeTireFilter =
            selectedFilters.typeTire === tireType ||
            selectedFilters.typeTire === product.tireType

         const seasonalityFilter =
            selectedFilters.seasonality === tireSeasonality ||
            selectedFilters.seasonality === product.seasonality

         return (
            widthFilter &&
            profileFilter &&
            diameterFilter &&
            typeTireFilter &&
            seasonalityFilter
         )
      })

      dispatch(setFilteredProducts(filteredProducts))
      showFilteredProductsHandler()
      navigate('/catalog')
   }

   return (
      <nav className={classes.sectionOptions}>
         <div className={classes.optionsItem}>
            <select onChange={widthChangeHandler}>
               <option>Ширина</option>
               {widthOption.map((el) => (
                  <option key={el.label}>{el.value}</option>
               ))}
            </select>
            <select onChange={profileChangeHandler}>
               <option>Профиль</option>
               {profileOption.map((el) => (
                  <option key={el.label}>{el.value}</option>
               ))}
            </select>
            <select onChange={diameterChangeHandler}>
               <option>Диаметр</option>
               {diameterOption.map((el) => (
                  <option key={el.label}>{el.value}</option>
               ))}
            </select>
            <select onChange={typeTireChangeHandler}>
               <option>Тип шин</option>
               {tireTypeOption.map((el) => (
                  <option key={el.label}>{el.value}</option>
               ))}
            </select>
            <select onChange={seasonalityChangeHandler}>
               <option>Сезонность</option>
               {seasonalityOption.map((el) => (
                  <option key={el.label}>{el.value}</option>
               ))}
            </select>
            <div>
               <Button
                  onClick={applyFilterHandler}
                  className={classes.optionsButton}
               >
                  Подобрать
               </Button>
            </div>
         </div>
      </nav>
   )
}

export default Options
