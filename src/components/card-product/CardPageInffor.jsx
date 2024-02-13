import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardDescription from './description/CardDescription'
import SimivarProducts from './simivar-products/SimivarProducts'
import Characteristics from './tire-information/Characteristics'
import classes from './CardPageInfor.module.css'
import { getProdictItem } from '../../store/newCardProductSlice'
import Loading from '../ui/Loading'

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
            <Loading />
         ) : (
            data && (
               <>
                  <Characteristics data={data} />
                  <CardDescription data={data} />
                  <SimivarProducts data={data} />
               </>
            )
         )}
      </div>
   )
}

export default CardPage
