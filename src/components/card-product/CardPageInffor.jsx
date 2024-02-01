import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardDescription from './description/CardDescription'
import SimivarProducts from './simivar-products/SimivarProducts'
import Characteristics from './tire-information/Characteristics'
import classes from './CardPageInfor.module.css'
import { getProdictItem } from '../../store/newCardProductSlice'

const CardPage = () => {
   const dispatch = useDispatch()
   const { data, isLoading } = useSelector((state) => state.newPage)
   const { id } = useParams()

   useEffect(() => {
      dispatch(getProdictItem(id))
   }, [dispatch, id])

   return (
      <div className={classes.container}>
         {isLoading ? (
            <p>Loading...</p>
         ) : (
            data && (
               <>
                  <Characteristics data={data} />
                  <CardDescription />
                  <SimivarProducts />
               </>
            )
         )}
      </div>
   )
}

export default CardPage
