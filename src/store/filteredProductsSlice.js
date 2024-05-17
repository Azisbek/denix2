import { createSlice } from '@reduxjs/toolkit'

export const tireWidth = 'Ширина'
export const tireProfile = 'Профиль'
export const tireDiameter = 'Диаметр'
export const tireType = 'Тип шин'
export const tireSeasonality = 'Сезонность'

export const filteredProducts = createSlice({
   name: 'filtered',
   initialState: {
      selectedFilters: {
         width: tireWidth,
         profile: tireProfile,
         diameter: tireDiameter,
         typeTire: tireType,
         seasonality: tireSeasonality,
      },
      filtered: [],
      showFilteredProducts: null,
      showFilteredProductsFromHome: null,
   },
   reducers: {
      setFilteredProducts(state, action) {
         state.filtered = action.payload
      },
      setShowFiltered(state, action) {
         state.showFilteredProducts = action.payload
      },
      setShowFilteredFromHome(state, action) {
         state.showFilteredProductsFromHome = action.payload
      },
      setWidthFilters(state, action) {
         state.selectedFilters.width = action.payload
      },
      setProfileFilters(state, action) {
         state.selectedFilters.profile = action.payload
      },
      setDiameterFilters(state, action) {
         state.selectedFilters.diameter = action.payload
      },
      setTypeTireFilters(state, action) {
         state.selectedFilters.typeTire = action.payload
      },
      setSeasonalityFilters(state, action) {
         state.selectedFilters.seasonality = action.payload
      },
   },
})

export const {
   setFilteredProducts,
   setShowFiltered,
   setShowFilteredFromHome,
   setWidthFilters,
   setProfileFilters,
   setDiameterFilters,
   setTypeTireFilters,
   setSeasonalityFilters,
} = filteredProducts.actions
