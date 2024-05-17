import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
   setDiameterFilters,
   setProfileFilters,
   setSeasonalityFilters,
   setShowFiltered,
   setShowFilteredFromHome,
   setTypeTireFilters,
   setWidthFilters,
   tireDiameter,
   tireProfile,
   tireSeasonality,
   tireType,
   tireWidth,
} from '../store/filteredProductsSlice'

const useResetFiliterHome = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(setWidthFilters(tireWidth))
      dispatch(setProfileFilters(tireProfile))
      dispatch(setDiameterFilters(tireDiameter))
      dispatch(setTypeTireFilters(tireType))
      dispatch(setSeasonalityFilters(tireSeasonality))
      dispatch(setShowFiltered(false))
      dispatch(setShowFilteredFromHome(false))
   }, [dispatch])
}

export default useResetFiliterHome
