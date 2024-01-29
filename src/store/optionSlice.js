import { createSlice } from '@reduxjs/toolkit'

export const optionSlice = createSlice({
   name: 'option',
   initialState: {
      selectedWidth: null,
      selectedProfile: null,
      selectedDiameter: null,
      selectedPrice: null,
      selectedTireType: null,
      selectedSeason: null,
      selectedManufacturer: null,
      selectedSpeedIndex: null,
      selectedLoadIndex: null, // Индекс нагрузки
      selectedFuelEconomy: null, // Топливная экономия
      selectedWetGrip: null, // Сцепление с мокрой поверхностью
      selectedNoiseLevel: null, // Уровень внешнего шума
      selectedState: null,
   },
   reducers: {
      setWidth: (state, action) => {
         state.selectedWidth = action.payload
      },
      setProfile: (state, action) => {
         state.selectedProfile = action.payload
      },
      setDiameter: (state, action) => {
         state.selectedDiameter = action.payload
      },
      setPrice: (state, action) => {
         state.selectedPrice = action.payload
      },
      setTireType: (state, action) => {
         state.selectedTireType = action.payload
      },
      setSeason: (state, action) => {
         state.selectedSeason = action.payload
      },
      setManufacturer: (state, action) => {
         state.selectedManufacturer = action.payload
      },
      setSpeedIndex: (state, action) => {
         state.selectedSpeedIndex = action.payload
      },
      setLoadIndex: (state, action) => {
         state.selectedLoadIndex = action.payload
      },
      setFuelEconomy: (state, action) => {
         state.selectedFuelEconomy = action.payload
      },
      setWetGrip: (state, action) => {
         state.selectedWetGrip = action.payload
      },
      setNoiseLevel: (state, action) => {
         state.selectedNoiseLevel = action.payload
      },
      setState: (state, action) => {
         state.selectedState = action.payload
      },
   },
})

export const {
   setState,
   setWidth,
   setProfile,
   setDiameter,
   setPrice,
   setTireType,
   setSeason,
   setManufacturer,
   setSpeedIndex,
   setLoadIndex,
   setFuelEconomy,
   setWetGrip,
   setNoiseLevel,
} = optionSlice.actions
